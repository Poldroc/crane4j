package cn.crane4j.spring.boot.example.qucikstart;

import cn.crane4j.annotation.Assemble;
import cn.crane4j.annotation.Mapping;
import cn.crane4j.core.container.Container;
import cn.crane4j.core.container.Containers;
import cn.crane4j.core.executor.BeanOperationExecutor;
import cn.crane4j.core.parser.BeanOperationParser;
import cn.crane4j.core.support.Crane4jGlobalConfiguration;
import cn.crane4j.core.support.Crane4jTemplate;
import cn.crane4j.core.support.OperateTemplate;
import cn.crane4j.core.support.SimpleCrane4jGlobalConfiguration;
import cn.hutool.core.map.MapBuilder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author huangchengxing
 */
public class QuickStartWithoutSpring {

    public static void main(String[] args) {
        // 创建操作门面
        Crane4jTemplate crane4jTemplate = Crane4jTemplate.withDefaultConfiguration();

        // 创建并注册数据源
        Map<Integer, String> map = MapBuilder.<Integer, String>create()
            .put(1, "a").put(2, "b").put(3, "c")
            .build();
        crane4jTemplate.opsForContainer()
            .registerMapContainer("test", map);

        // 执行填充
        List<Foo> foos = Arrays.asList(new Foo(1), new Foo(2), new Foo(3));
        crane4jTemplate.execute(foos);
        System.out.println(foos);
    }

    @Data  // 使用 lombok 生成构造器、getter/setter 方法
    @RequiredArgsConstructor
    public static class Foo {
        // 根据 id 填充 name
        @Assemble(container = "test", props = @Mapping(ref = "name"))
        private final Integer id;
        private String name;
    }
}
