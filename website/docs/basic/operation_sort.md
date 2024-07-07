# 操作排序

在 `crane4j` 中，操作的执行顺序基本按如下规则：

+ 同一个属性上的操作，按对应注解的声明顺序进行排序；
+ 同一个类中操作，按属性的声明顺序排序；
+ 同一个类继承树中的操作，按它们所属类在树中的高度排序，子类中的操作优先于父类；

不过因为各种原因，这个规则并不总是准确的，比如通过属性得到的注解顺序可能与代码中不一致，或者顺序不同的操作由于引用了同个数据源容器而被自动合并等等.....。

因此，如果你希望严格按照预期的顺序执行，那么你就需要显式的在配置时指定操作的执行顺序。

## 1.配置排序规则

通过 `@Assemble` 注解的 `sort` 属性可以指定操作值，其中：

- 值越小，操作的排序越靠前；
- `@Assemble`注解的`sort`属性优先于Spring的`@Order`注解；

例如：

~~~java
public class Student {
    
    // id1 -> id2
    @Assemble(container = "id", sort = 0, props = @Mapping(ref = "id2"))
    private Integer id1;
    
    // id2 -> id3
    @Assemble(container = "id", sort = 1, props = @Mapping(ref = "id3"))
    private Integer id2;
    
    // id3 -> id4
    @Assemble(container = "id", sort = 2, props = @Mapping(ref = "id4"))
    private Integer id3;
    private Integer id4;
}
~~~

在上述示例中，根据排序值， `Student` 类中的三个操作的顺序为 `id1 -> id2 -> id3`。

:::tip

在 Spring 环境中，你也可以使用 `@Order` 注解替换 `@Assemble` 注解的 `sort` 属性。

:::

## 2.按顺序执行

需要注意的是，**有时候排序值并不一定代表最终的执行顺序**，它只代表在遍历 `BeanOperations` 中的装配操作时的顺序。

最终的执行顺序要通过 `BeanOperationExecutor` 来保证，如果你希望按顺序执行，则需要**手动的指定操作执行器为有序执行器** `OrderedBeanOperationExecutor`。

### 2.1.手动填充

如果你需要在手动填充时指定按顺序填充，那么你可以直接在使用操作门面的 `executeOrdered` 方法：

~~~java
// 从 Spring 容器获取操作门面
Crane4jTemplate template = SpringUtil.getBean(Crane4jTemplate.class);
template.executeOrdered(Arrays.asList(
	new Student(1), new Student(2), new Student(3)
));
~~~

### 2.2.自动填充

如果你使用的是自动填充，那么你需要在 `@AutoOperate` 注解中指定使用 `OrderedBeanOperationExecutor` 执行器：

~~~java
// 显式指定操作执行器
@AutoOperate(type = Student.class, executorType = OrderedBeanOperationExecutor.class)
public List<Student> listStudent(List<Integer> ids) {
    // do something
}
~~~

:::tip

- 拆卸操作也可以排序，不过它总是先于装配操作完成，所以一般情况下对拆卸操作排序没什么意义；
- 关于执行器，请参照 "[基本概念](./../user_guide/basic_concept.md)" 一节中执行器部分内容；

:::

## 3.与嵌套填充配合使用

### 3.1.平铺操作执行器

出于批量操作的性能考虑，当使用默认的操作执行器时，拆卸操作（即使用 `@Disassemble` 声明的嵌套填充操作）总是先于装配操作执行，因此你**无法通过类似下面这种方式来指定两者的执行顺序**：

~~~java
public class Dept {
    
  	// 根据部门管理查询员工，然后填充到 emps 属性
    @Assemble(container = "emp", prop = ":emps", order = 1)
    private Integer id;
    
  	// 对员工对象进行填充
    @Disassemble(type = Emp.class, order = 2)
    private List<Emp> emps;
}
~~~

在实际执行时，crane4j 总是会先执行拆卸操作，将 Dept 对象中的 Emp 对象都提取出来，然后再执行 Dept 中根据 id 填充员工的装配操作，不过由于提取操作在填充之前，因此 crane4j 提取不到任何值，嵌套填充也就无法生效。

如果你想要实现类似的效果，我们推荐在获取数据源时通过自动填充对数据源进行初步处理：

~~~java
@AutoOperate(type = Emp.class) // 直接在获取数据源的时候就填充
@ContainerMethd(resultType = Emp.class)
public List<Emp> listByIds(Collection<Integer> ids) {
  	return empMapper.listByIds(ids);
}
~~~

或者:

~~~java
@ContainerMethd(resultType = Emp.class)
public List<Emp> listByIds(Collection<Integer> ids) {
  	List<Emp> emps = empMapper.listByIds(ids);
  	Crane4jTemplate template = SpringUtil.getBean(Crane4jTemplate.class); // 获取操作门面进行手动填充
  	template.execute(emps);
  	return emps;
}
~~~

:::tip

-   关于执行器，可参见 [基本概念](./../user_guide/basic_concept.md) 中操作执行器部分；
-   关于嵌套填充，具体可参见 [嵌套嵌套对象](./declare_disassemble_operation.md)；
-   关于使用 `@AutoOperate` 配置自动填充，具体可参见 [触发填充操作](./trigger_operation.md) 中自动填充这一节；

:::

### 3.2.递归操作执行器

在 2.9.0 及以上版本，新增了三个支持递归填充的操作执行器，它们支持先执行装配操作，再执行拆卸操作，然后再对提取出来的嵌套对象执行装配操作……直到递归完成整个填充过程：

-   `DisorderedBeanOperationRecursiveExecutor`：递归版本的 `DisorderedBeanOperationExecutor`；
-   `OrderedBeanOperationRecursiveExecutor`：递归版本的 `OrderedBeanOperationExecutor`
-   `AsyncBeanOperationRecursiveExecutor`：递归版本的 `AsyncBeanOperationExecutor`；

它们的操作逻辑非常类似于树的递归构件过程，你可以基于下面的示例感受一下：

~~~java
@Component
public class NodeService {
  	@ContainerMethod(namespace = "children", resultType = Node.class)
  	public List<Node> selectChildrenNodesById(String nodeId) {
      	// 根据节点ID查询子节点
    }
}

@Data
@RequiredArgsConstructor
public static class Node {
  	// 根据 ID 填充子节点，然后再递归子节点重复该填充过程
    @Assemble(container = "children", prop = ":children")
    private final Integer id;
    private String name;
    @Disassemble(type = Foo.class)
    private List<Node> children;
}

@Service
public class ExampleService {
  
  	// 指定执行器为无序的递归执行器
  	@AutoOperate(executorType = OrderedBeanOperationRecursiveExecutor.class)
  	public Node getTree(String id) {
      	return new Node(0);
    }
}
~~~

在上述代码中，你只需返回一个根节点，执行器将根据你的配置为你完成树的构建。

:::tip

-   关于执行器，可参见 [基本概念](./../user_guide/basic_concept.md) 中操作执行器部分；
-   关于嵌套填充，具体可参见 [嵌套嵌套对象](./declare_disassemble_operation.md)；
-   关于使用 `@AutoOperate` 配置自动填充，具体可参见 [触发填充操作](./trigger_operation.md) 中自动填充这一节；

:::

:::warning

当前版本的递归执行器实际上是基于栈实现的，因此一般情况下不必担心栈溢出。

不过由于在每一层级都要进行查询，因此当层级过多的时候会比较影响性能，为了保证性能，请不要在非必要的场景使用该类型的执行器。

:::
