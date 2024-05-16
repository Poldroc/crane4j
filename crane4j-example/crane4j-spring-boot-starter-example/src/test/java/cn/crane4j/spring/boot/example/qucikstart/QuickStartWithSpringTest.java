package cn.crane4j.spring.boot.example.qucikstart;

import cn.crane4j.annotation.Assemble;
import cn.crane4j.annotation.AutoOperate;
import cn.crane4j.annotation.Mapping;
import cn.crane4j.core.container.Container;
import cn.crane4j.core.container.Containers;
import cn.crane4j.core.support.Crane4jGlobalConfiguration;
import cn.crane4j.core.support.Crane4jTemplate;
import cn.crane4j.core.support.OperateTemplate;
import cn.crane4j.extension.spring.DefaultCrane4jSpringConfiguration;
import cn.hutool.core.map.MapBuilder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.stereotype.Component;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author huangchengxing
 */
@Configuration
@Import(DefaultCrane4jSpringConfiguration.class)
@RunWith(SpringJUnit4ClassRunner.class)
public class QuickStartWithSpringTest {

    @Autowired
    private Crane4jTemplate crane4jTemplate;
    @Autowired
    private Service service;

    @Test
    public void run() {
        // 创建并注册数据源
        Map<Integer, String> map = MapBuilder.<Integer, String>create()
            .put(1, "a").put(2, "b").put(3, "c")
            .build();
        crane4jTemplate.opsForContainer()
            .registerMapContainer("test", map);

        // 手动执行填充
        List<Foo> foos = Arrays.asList(new Foo(1), new Foo(2), new Foo(3));
        crane4jTemplate.execute(foos);
        System.out.println(foos);

        // 自动执行填充
        foos = service.getFoos();
        System.out.println(foos);
    }

    @Component
    public static class Service {
        @AutoOperate(type = Foo.class)
        public List<Foo> getFoos() {
            return Arrays.asList(new Foo(1), new Foo(2), new Foo(3));
        }
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
