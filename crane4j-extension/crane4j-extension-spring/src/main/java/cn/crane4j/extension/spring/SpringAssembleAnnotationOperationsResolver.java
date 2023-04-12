package cn.crane4j.extension.spring;

import cn.crane4j.annotation.Assemble;
import cn.crane4j.core.container.Container;
import cn.crane4j.core.container.ContainerProvider;
import cn.crane4j.core.parser.AssembleAnnotationOperationsResolver;
import cn.crane4j.core.support.AnnotationFinder;
import cn.crane4j.core.support.Crane4jGlobalConfiguration;
import cn.crane4j.core.support.Sorted;
import cn.crane4j.core.support.expression.ExpressionEvaluator;
import cn.crane4j.core.util.ConfigurationUtil;
import cn.crane4j.core.util.ReflectUtils;
import cn.crane4j.extension.spring.expression.SpelExpressionContext;
import cn.hutool.core.lang.Assert;
import cn.hutool.core.util.ObjectUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.EmbeddedValueResolverAware;
import org.springframework.core.annotation.AnnotatedElementUtils;
import org.springframework.core.annotation.Order;
import org.springframework.expression.BeanResolver;
import org.springframework.util.StringValueResolver;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.util.List;
import java.util.Objects;

/**
 * <p>Extension implementation of {@link AssembleAnnotationOperationsResolver},
 * On the basis of the former, some spring annotations are additionally supported.
 * <ul>
 *     <li>support to sort operations according to the rules of Spring {@link Order} annotation priority;</li>
 *     <li>supports obtaining containers through SpEL expressions;</li>
 * </ul>
 *
 * @author huangchengxing
 * @see Order
 * @since 1.2.0
 */
@Slf4j
public class SpringAssembleAnnotationOperationsResolver
    extends AssembleAnnotationOperationsResolver implements EmbeddedValueResolverAware {

    private final ExpressionEvaluator evaluator;
    private final BeanResolver beanResolver;
    private StringValueResolver stringValueResolver;

    /**
     * <p>Create an operation parser that supports annotation configuration.<br />
     * The order of operation configurations is {@link Order#value()} or {@link Sorted#getSort} from small to large.
     *
     * @param annotationFinder    annotation finder
     * @param globalConfiguration global configuration
     */
    public SpringAssembleAnnotationOperationsResolver(
        AnnotationFinder annotationFinder,
        Crane4jGlobalConfiguration globalConfiguration,
        ExpressionEvaluator evaluator, BeanResolver beanResolver) {
        super(annotationFinder, globalConfiguration, Sorted.comparator());
        this.evaluator = evaluator;
        this.beanResolver = beanResolver;
    }

    /**
     * Get container.
     *
     * @param annotation annotation
     * @return container
     * @throws IllegalArgumentException thrown when the container is null
     */
    @Override
    protected Container<?> getContainer(Assemble annotation) {
        // determine provider
        ContainerProvider provider = ConfigurationUtil.getContainerProvider(
            globalConfiguration, annotation.containerProviderName(), annotation.containerProvider()
        );
        provider = ObjectUtil.defaultIfNull(provider, globalConfiguration);

        // determine container by expression
        Container<?> container = null;
        String namespace = stringValueResolver.resolveStringValue(annotation.container());
        try {
            container = getContainerByExpression(namespace, provider);
        } catch (Exception e) {
            // maybe namespace is not an expression? ignore it and take it again
        }

        // get container directly if parser cannot determine by expression
        if (Objects.isNull(container)) {
            container = provider.getContainer(namespace);
        }
        Assert.notNull(
            container, throwException("cannot find container [{}] from provider [{}]", annotation.container(), provider.getClass())
        );
        return container;
    }

    /**
     * Parse {@link Assemble} annotations for class.
     *
     * @param beanType bean type
     * @return {@link Assemble}
     */
    @Override
    protected List<Assemble> resolveFieldLevelAnnotations(Class<?> beanType) {
        return parseAnnotationForDeclaredFields(
            beanType, Assemble.class, SpringAssembleAnnotationOperationsResolver::processAnnotation
        );
    }

    private Container<?> getContainerByExpression(String expression, ContainerProvider provider) {
        Object target = null;
        try {
            SpelExpressionContext context = new SpelExpressionContext();
            context.setBeanResolver(beanResolver);
            context.setVariable("provider", provider);
            target = evaluator.execute(expression, Object.class, context);
        } catch (Exception e) {
            log.debug("cannot resolve container or namespace of container from expression [{}]", expression);
        }
        if (target instanceof Container) {
            return (Container<?>)target;
        }
        if (target instanceof String) {
            return provider.getContainer((String)target);
        }
        return null;
    }

    private static <T extends Annotation> T processAnnotation(T a, Field f) {
        // force value to be set to the annotated attribute name
        ReflectUtils.setAttributeValue(a, ANNOTATION_KEY_ATTRIBUTE, f.getName());
        // force sort if field annotated by @Order
        Order annotation = AnnotatedElementUtils.findMergedAnnotation(f, Order.class);
        if (Objects.nonNull(annotation)) {
            ReflectUtils.setAttributeValue(a, "sort", annotation.value());
        }
        return a;
    }

    /**
     * Set the StringValueResolver to use for resolving embedded definition values.
     *
     * @param resolver resolver
     */
    @Override
    public void setEmbeddedValueResolver(StringValueResolver resolver) {
        this.stringValueResolver = resolver;
    }
}