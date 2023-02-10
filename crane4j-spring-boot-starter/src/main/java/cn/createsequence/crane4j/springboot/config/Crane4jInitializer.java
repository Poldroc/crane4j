package cn.createsequence.crane4j.springboot.config;

import cn.createsequence.crane4j.core.annotation.ContainerEnum;
import cn.createsequence.crane4j.core.container.ConstantContainer;
import cn.createsequence.crane4j.core.container.Container;
import cn.createsequence.crane4j.core.parser.BeanOperationParser;
import cn.createsequence.crane4j.core.support.AnnotationFinder;
import cn.createsequence.crane4j.springboot.support.Crane4jApplicationContext;
import cn.hutool.core.util.ClassUtil;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.AnnotatedElementUtils;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.core.type.classreading.MetadataReader;
import org.springframework.core.type.classreading.MetadataReaderFactory;

import java.util.Collection;
import java.util.Set;
import java.util.function.Consumer;
import java.util.stream.Stream;

/**
 * 默认的初始化器，用于应用启动后，针对一些缓存或组件进行初始化处理
 *
 * @author huangchengxing
 */
@Slf4j
@RequiredArgsConstructor
public class Crane4jInitializer implements ApplicationRunner {

    private final MetadataReaderFactory readerFactory;
    private final ResourcePatternResolver resolver;

    private final Crane4jProperties crane4jProperties;
    private final AnnotationFinder annotationFinder;
    private final Crane4jApplicationContext configuration;
    private final Collection<BeanOperationParser> parsers;

    @SneakyThrows
    @Override
    public void run(ApplicationArguments args) {
        log.info("start initializing component cache......");
        // 加载枚举并将其注册为容器
        loadContainerEnum();
        // 预解析类操作配置
        loadOperateEntity();
    }

    private void loadContainerEnum() {
        Set<String> enumPackages = crane4jProperties.getContainerEnumPackages();
        enumPackages.forEach(path -> readMetadata(path, this::loadEnum));
    }

    @SuppressWarnings("unchecked")
    private void loadEnum(MetadataReader reader) {
        Class<?> targetType = ClassUtil.loadClass(reader.getClassMetadata().getClassName());
        boolean supported = targetType.isEnum()
            && (!crane4jProperties.isOnlyLoadAnnotatedEnum() || AnnotatedElementUtils.isAnnotated(targetType, ContainerEnum.class));
        if (supported) {
            Container<Enum<?>> container = ConstantContainer.forAnnotatedEnum((Class<Enum<?>>)targetType, annotationFinder);
            configuration.registerContainer(container);
        }
    }

    private void loadOperateEntity() {
        Set<String> entityPackages = crane4jProperties.getOperateEntityPackages();
        entityPackages.forEach(path -> readMetadata(path, this::loadEntity));
    }

    private void loadEntity(MetadataReader reader) {
        Class<?> targetType = ClassUtil.loadClass(reader.getClassMetadata()
            .getClassName());
        parsers.forEach(parser -> parser.parse(targetType));
    }

    @SneakyThrows
    private void readMetadata(String path, Consumer<MetadataReader> consumer) {
        Stream.of(resolver.getResources(path))
            .map(readerFactory::getMetadataReader)
            .forEach(consumer);
    }
}
