package cn.crane4j.core.condition;

import cn.crane4j.annotation.condition.ConditionOnPropertyNotEmpty;
import cn.crane4j.core.support.AnnotationFinder;
import cn.crane4j.core.support.reflect.PropertyOperator;
import cn.crane4j.core.util.ObjectUtils;

import java.lang.reflect.AnnotatedElement;

/**
 * A parser to process {@link ConditionOnPropertyNotEmpty} annotation.
 *
 * @author huangchengxing
 * @since 2.6.0
 */
public class PropertyNotEmptyConditionParser
    extends AbstractPropertyConditionParser<ConditionOnPropertyNotEmpty> {

    public PropertyNotEmptyConditionParser(
        AnnotationFinder annotationFinder, PropertyOperator propertyOperator) {
        super(annotationFinder, ConditionOnPropertyNotEmpty.class, propertyOperator);
    }

    /**
     * Get operation id.
     *
     * @param annotation annotation
     * @return ids
     */
    @Override
    protected String[] getOperationIds(ConditionOnPropertyNotEmpty annotation) {
        return annotation.id();
    }

    /**
     * Get property name.
     *
     * @param element    element
     * @param annotation annotation
     * @return property name
     */
    @Override
    protected String getPropertyName(
        AnnotatedElement element, ConditionOnPropertyNotEmpty annotation) {
        return annotation.property();
    }

    /**
     * Check property value.
     *
     * @param propertyValue property value
     * @return boolean
     */
    @Override
    protected boolean checkPropertyValue(Object propertyValue) {
        return ObjectUtils.isNotEmpty(propertyValue);
    }
}