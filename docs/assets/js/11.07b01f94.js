(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{296:function(a,t,s){"use strict";s.r(t);var n=s(14),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),t("p",[a._v("在 "),t("code",[a._v("crane4j")]),a._v(" 中，每个缓存对应一个 "),t("code",[a._v("Cache")]),a._v(" 对象，用于提供缓存的读写功能。数据源容器通过持有 "),t("code",[a._v("Cache")]),a._v(" 对象来实现对缓存的操作。所有的 "),t("code",[a._v("Cache")]),a._v(" 对象都由全局的缓存管理器 "),t("code",[a._v("CacheManager")]),a._v(" 进行管理。")]),a._v(" "),t("p",[a._v("缓存管理器 "),t("code",[a._v("CacheManager")]),a._v(" 负责创建、配置和管理缓存对象。它提供了一组接口和方法，用于获取、创建、删除和管理缓存。通过 "),t("code",[a._v("CacheManager")]),a._v("，我们可以对缓存进行统一的管理和控制。")]),a._v(" "),t("p",[a._v("下图展示了 "),t("code",[a._v("Cache")]),a._v("、数据源容器和缓存管理器之间的关系：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://img.xiajibagao.top/image-20230225011748030.png",alt:"缓存结构"}})]),a._v(" "),t("p",[a._v("在这个结构中，数据源容器通过 "),t("code",[a._v("Cache")]),a._v(" 对象与缓存进行交互，而 "),t("code",[a._v("Cache")]),a._v(" 对象则由缓存管理器 "),t("code",[a._v("CacheManager")]),a._v(" 管理和配置。")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("在目前的版本中，由于缺乏 redis 支持，以及缺少细粒度控制缓存过期时间等原因，缓存的实用价值依然有限，在后续版本将会进一步完善它。")])]),a._v(" "),t("h2",{attrs:{id:"_5-1-1-缓存管理器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-1-缓存管理器"}},[a._v("#")]),a._v(" 5.1.1.缓存管理器")]),a._v(" "),t("p",[a._v("在 "),t("code",[a._v("crane4j")]),a._v(" 中，缓存功能由缓存管理器 "),t("code",[a._v("CacheManager")]),a._v(" 和具体的缓存对象 "),t("code",[a._v("Cache")]),a._v(" 共同完成。缓存管理器负责管理缓存对象的创建和销毁，而缓存对象提供具体的读写功能。")]),a._v(" "),t("p",[t("code",[a._v("crane4j")]),a._v(" 默认提供了两种缓存管理器实现：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("ConcurrentMapCacheManager")]),a._v("：基于 "),t("code",[a._v("WeakConcurrentMap")]),a._v(" 实现的缓存对象，无法设置过期策略，只能依赖 JVM 自动回收缓存。它是默认的缓存管理器；")]),a._v(" "),t("li",[t("code",[a._v("GuavaCacheManager")]),a._v("：基于 "),t("code",[a._v("Guava")]),a._v(" 的 "),t("code",[a._v("Cache")]),a._v(" 实现的缓存对象，支持配置过期时间和并发等级等选项；")])]),a._v(" "),t("p",[a._v("要替换默认的缓存管理器，可以在配置类中声明一个 "),t("code",[a._v("GuavaCacheManager")]),a._v(" 实例，并将其作为 Bean 注册到 Spring 上下文中。通过自定义的 "),t("code",[a._v("GuavaCacheManager")]),a._v("，可以配置自定义的缓存过期时间和并发级别等参数。")]),a._v(" "),t("p",[a._v("在使用缓存时，可以通过缓存管理器 "),t("code",[a._v("CacheManager")]),a._v(" 创建和获取缓存对象 "),t("code",[a._v("Cache")]),a._v("，然后使用 "),t("code",[a._v("Cache")]),a._v(" 对象进行缓存的读写和销毁操作。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// 获取名为 "foo" 的缓存对象')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Cache")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" cache "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" cacheManager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getCache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 使用缓存对象进行读写操作")]),a._v("\ncache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cacheKey"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\ncache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("put")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cacheKey"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cacheValue"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// 销毁名为 "foo" 的缓存对象')]),a._v("\ncacheManager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("removeCache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"foo"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("需要注意的是，销毁缓存对象后，之前获取到的缓存对象仍然可以使用，但是数据可能已被清空。可以通过 "),t("code",[a._v("Cache.isExpired()")]),a._v(" 方法判断缓存是否已过期。")]),a._v(" "),t("p",[a._v("缓存管理器和缓存对象一般不直接使用，而是与缓存容器等机制结合使用，以实现更高级的缓存功能。")]),a._v(" "),t("h2",{attrs:{id:"_5-1-2-结合数据源容器使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-2-结合数据源容器使用"}},[a._v("#")]),a._v(" 5.1.2.结合数据源容器使用")]),a._v(" "),t("p",[a._v("在 "),t("code",[a._v("crane4j")]),a._v(" 中，数据源缓存容器基于缓存容器包装类 "),t("code",[a._v("CacheableContainer")]),a._v(" 实现，它可以包装任何容器，使其具备缓存功能。")]),a._v(" "),t("p",[a._v("下面是创建数据源缓存容器的示例代码：")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 1、创建一个原始容器")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Container")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" original "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LambdaContainer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("forLambda")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"original"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" keys "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Collections")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("emptyMap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("///2、获取缓存管理器")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CacheManager")]),a._v(" cacheManager "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CacheManager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 3、基于原始容器与缓存对象，构建带有缓存功能的容器")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CacheableContainer")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" container "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CacheableContainer")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("original"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" cacheManager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cacheName"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("在上述示例中，通过 "),t("code",[a._v("LambdaContainer")]),a._v(" 创建了一个原始容器 "),t("code",[a._v("original")]),a._v("，然后使用缓存管理器 "),t("code",[a._v("CacheManager")]),a._v(" 和指定的缓存对象名称 "),t("code",[a._v('"cacheName"')]),a._v("，构建了带有缓存功能的容器 "),t("code",[a._v("container")]),a._v("。")]),a._v(" "),t("p",[a._v("容器缓存的粒度是 key 级别，即第一次查询 a、b，则会对 a、b 进行查询并缓存。第二次查询 a、b、c 时，只会查询 c 并将其增量添加到缓存中，而 a、b 则直接从缓存中获取。")]),a._v(" "),t("h2",{attrs:{id:"_5-1-3-配置缓存容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-3-配置缓存容器"}},[a._v("#")]),a._v(" 5.1.3.配置缓存容器")]),a._v(" "),t("p",[a._v("在 "),t("code",[a._v("crane4j")]),a._v(" 中，你可以通过三种方式将一个普通容器配置为缓存容器。")]),a._v(" "),t("h3",{attrs:{id:"_5-1-3-1-手动替换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-3-1-手动替换"}},[a._v("#")]),a._v(" 5.1.3.1. 手动替换")]),a._v(" "),t("p",[a._v("可以获取全局配置类 "),t("code",[a._v("Crane4jGlobalConfiguration")]),a._v("，然后使用 "),t("code",[a._v("replaceContainer")]),a._v(" 方法将原始的容器替换为包装后的缓存容器。")]),a._v(" "),t("p",[a._v("示例代码如下：")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Crane4jGlobalConfiguration")]),a._v(" configuration "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Crane4jGlobalConfiguration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CacheManager")]),a._v(" cacheManager "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StringUtils")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("getBean")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CacheManager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 将原始容器包装并替换为缓存容器")]),a._v("\nconfiguration"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("compute")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"namespace"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" container "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CacheableContainer")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Container")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" container"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" cacheManager"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cacheName"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("在上述示例中，使用 "),t("code",[a._v("Crane4jGlobalConfiguration")]),a._v(" 获取全局配置类实例，然后通过 "),t("code",[a._v("replaceContainer")]),a._v(" 方法将指定命名空间的原始容器替换为缓存容器。需要传入原始容器、缓存管理器和缓存对象的名称。")]),a._v(" "),t("h3",{attrs:{id:"_5-1-3-2-添加注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-3-2-添加注解"}},[a._v("#")]),a._v(" 5.1.3.2. 添加注解")]),a._v(" "),t("p",[a._v("如果使用 "),t("code",[a._v("@ContainerMethod")]),a._v(" 声明的方法容器，可以在方法上添加 "),t("code",[a._v("@ContainerCache")]),a._v(" 注解或 "),t("code",[a._v("@CacheContainerMethod")]),a._v(" 组合注解，将方法容器声明为可缓存容器。")]),a._v(" "),t("p",[a._v("示例代码如下：")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ContainerCache")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 声明该方法容器为可缓存容器")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ContainerMethod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("resultType "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("oneToManyMethod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("stream")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("collect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Collectors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("或者使用 "),t("code",[a._v("@CacheContainerMethod")]),a._v(" 组合注解：")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@CacheContainerMethod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("resultType "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("oneToManyMethod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("stream")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("collect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Collectors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("方法容器创建后，会自动包装为缓存容器。")]),a._v(" "),t("h3",{attrs:{id:"_5-1-3-3-配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-3-3-配置文件"}},[a._v("#")]),a._v(" 5.1.3.3. 配置文件")]),a._v(" "),t("p",[a._v("可以在配置文件中声明要将哪些容器包装为缓存容器。")]),a._v(" "),t("p",[a._v("示例配置如下（YAML 格式）：")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("crane4j")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cache-containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cache-name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" container"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("namespace\n")])])]),t("p",[a._v("上述配置中，声明了将命名空间为 "),t("code",[a._v("container-namespace")]),a._v(" 的容器包装为缓存容器，并使用了指定的缓存名称 "),t("code",[a._v("cache-name")]),a._v("。")])])}),[],!1,null,null,null);t.default=e.exports}}]);