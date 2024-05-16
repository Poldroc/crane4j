# 在非 Spring 环境使用

下文 `crane4j` 的版本号 `${last-version}` 即为当前项目最新版本 ![maven-central](https://img.shields.io/github/v/release/Createsequence/crane4j?include_prereleases)

## 1.安装

在非 Spring 环境中，引入 `crane4j-core` 模块即可：

~~~xml
<!-- crane4j 依赖 -->
<dependency>
    <groupId>cn.crane4j</groupId>
    <artifactId>crane4j-core</artifactId>
    <version>${last-version}</version>
</dependency>

<!-- 用于生成构造方法与 getter/setter 方法 -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>${last-version}</version>
</dependency>
~~~

## 2.创建全局配置

基于默认配置创建一个操作门面：

~~~java
// 创建操作门面
Crane4jTemplate crane4jTemplate = Crane4jTemplate.withDefaultConfiguration();
~~~

## 3.配置数据源

在开始填充对象之前，你需要提前准备好一些数据源，并将其注册到全局配置对象中。这里我们可以基于一个 `Map` 集合创建数据源容器，并将其注册到全局配置中：

~~~java
// 创建并注册数据源
Map<Integer, String> map = MapBuilder.<Integer, String>create()
    .put(1, "a").put(2, "b").put(3, "c")
    .build();
crane4jTemplate.opsForContainer()
    .registerMapContainer("test", map);
~~~

在后续通过命名空间 `test` 即可引用该数据源容器。

:::tip

在 crane4j 中，一个数据源对应一个数据源容器（`Container`），它们通过独一无二的命名空间 （`namespace`）进行区分，具体可参见 [数据源容器](./../../basic/container/container_abstract) 一节。

:::

## 4.配置填充操作

接着，我们在需要填充的类属性上添加注解：

~~~java
@Data  // 使用 lombok 生成构造器、getter/setter 方法
@RequiredArgsConstructor
public static class Foo {
     // 根据 id 填充 name
    @Assemble(container = "test", props = @Mapping(ref = "name"))
    private final Integer id;
    private String name;
}
~~~

该配置表示，根据 id 值从容器中获取对应的数据源，并将其填充到 name 属性上。

## 5.触发操作

~~~java
// 执行填充
List<Foo> foos = Arrays.asList(new Foo(1), new Foo(2), new Foo(3));
crane4jTemplate.execute(foos);
System.out.println(foos);
// [Foo(id=1, name="a"), Foo(id=2, name="b"), Foo(id=3, name="c")]
~~~

直接调用操作门面的 `execute` 方法即可触发填充。

## 6.完整代码

~~~java
public class QuickStart {

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
~~~

