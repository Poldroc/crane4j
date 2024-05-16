# 注册数据源容器

## 1..自动注册

在 Spring 环境中，你可以将你的容器直接交给 Spring 管理，项目启动后 crane4j 将会自动注册：

~~~java
@Component // 交给 Spring 管理
public class FooContainer implements Container<Integer> {
    public String getNamespace() {
        return "user";
    }
    public Map<Integer, Foo> get(Collection<Integer> ids) {
      // retrun some datas
    }
}
~~~

或者你也可以在配置类中注册：

~~~java
@Configuration
public class Crane4jExampleConfiguration {
  	@Bean
  	public Container<Integer> testContainer() {
      	return Containers.<Integer>forMap("test", Collections.emptyMap());
    }
}
~~~

:::warning

注意，容器的命名空间必须是一个**非空字符串**！

:::

## 2.手动注册

此外，无论是在 Spring 环境或者非 Spring 环境中，你都快通过操作门面后手动注册容器：

~~~java
// 获取操作门面，如果是在 Spring 环境则可以直接从 Spring 容器获取
Crane4jTemplate crane4jTemplate = Crane4jTemplate.withDefaultConfiguration();
crane4jTemplate.opsForContainer().registerContainer(container);
~~~

此外，操作门面也针对某些数据结构提供了一些便捷的 API。
