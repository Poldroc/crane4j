import{_ as e,c as r,o,a4 as t}from"./chunks/framework.4aTu-Nia.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/changelog.md","filePath":"other/changelog.md","lastUpdated":1715012768000}'),a={name:"other/changelog.md"},n=t('<h2 id="_1-0-0-2023-03-23" tabindex="-1">1.0.0 (2023-03-23) <a class="header-anchor" href="#_1-0-0-2023-03-23" aria-label="Permalink to &quot;1.0.0 (2023-03-23)&quot;">​</a></h2><p>这是 crane4j 的第一个正式版本，如果遇到问题可以在群内或 issues 中反馈，作者会尽快响应。</p><p>具体内容参见：<a href="https://github.com/opengoofy/crane4j/milestone/1" target="_blank" rel="noreferrer">Milestone</a>。</p><p><strong>Feature</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/24" target="_blank" rel="noreferrer">提供基于 Guava 的 LoadingCache 的缓存支持</a></li><li><a href="https://github.com/opengoofy/crane4j/issues/20" target="_blank" rel="noreferrer">添加默认的组合注解扩展包</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/17" target="_blank" rel="noreferrer">支持使用Spring的@Order注解对装配操作排序</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/14" target="_blank" rel="noreferrer">支持在注解中通过 beanName 引用 Spring 上下文中的组件</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/8" target="_blank" rel="noreferrer">添加扩展模块，支持基于 MybatisPlus 自动生成表查询数据源</a>；</li></ul><p><strong>Refactor</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/25" target="_blank" rel="noreferrer">重构装配处理器，并统一为所有装配操作提供一对一、一对多、多对多映射支持</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/23" target="_blank" rel="noreferrer">重构并完善缓存功能</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/4" target="_blank" rel="noreferrer">添加容器工厂组件以隔离和丰富获取数据源容器的渠道</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/10" target="_blank" rel="noreferrer">将注解分离至独立的 crane4j-annotation 模块</a>；</li></ul><p><strong>Test</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/1" target="_blank" rel="noreferrer">补充 MultiKeyAssembleOperationHandler 的测试用例</a>;</li><li><a href="https://github.com/opengoofy/crane4j/issues/15" target="_blank" rel="noreferrer">添加示例项目</a>；</li></ul><p><strong>docs</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/18" target="_blank" rel="noreferrer">添加官方站点配置</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/13" target="_blank" rel="noreferrer">代码注释国际化</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/2" target="_blank" rel="noreferrer">提供 crane4j 的官方文档站点</a>；</li></ul><p><strong>chore</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/9" target="_blank" rel="noreferrer">重命名 groupId 为 cn.crane4j</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/12" target="_blank" rel="noreferrer">添加自动化 CI 流程</a>；</li></ul><h2 id="_1-1-0-2023-03-30" tabindex="-1">1.1.0 (2023-03-30) <a class="header-anchor" href="#_1-1-0-2023-03-30" aria-label="Permalink to &quot;1.1.0 (2023-03-30)&quot;">​</a></h2><p>这一个重构与增强版本，增强了一些新功能，并且调整了一部分 api 的使用方式。</p><p>具体内容参见：<a href="https://github.com/opengoofy/crane4j/milestone/2" target="_blank" rel="noreferrer">Milestone</a>。</p><p><strong>Feature</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/24" target="_blank" rel="noreferrer">core模块应该默认支持ognl表达式</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/30" target="_blank" rel="noreferrer">简化<code>@Mapping</code>配置，可以在一个属性同时配置src和ref</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/27" target="_blank" rel="noreferrer">字段映射支持以链式操作符获取或设置多级嵌套对象的属性</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/24" target="_blank" rel="noreferrer">提供基于 Guava 的 LoadingCache 的缓存支持</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/33" target="_blank" rel="noreferrer">支持通过 <code>@ContainerConstant</code> 注解的配置，反转基于常量类构建的容器键值</a></li></ul><p><strong>Refactor</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/23" target="_blank" rel="noreferrer">重构并完善缓存功能</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/28" target="_blank" rel="noreferrer">将starter模块中的部分组件功能分离为核心模块中的独立组件</a></li></ul><p><strong>docs</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/31" target="_blank" rel="noreferrer">文档重构</a>；</li></ul><h2 id="_1-2-0-2023-04-09" tabindex="-1">1.2.0 (2023-04-09) <a class="header-anchor" href="#_1-2-0-2023-04-09" aria-label="Permalink to &quot;1.2.0 (2023-04-09)&quot;">​</a></h2><p>这一个重构版本，增强了一些新功能，并且调整了 MybatisPlus 扩展的引入方式，如果已经使用了 MybatisPlus 插件，则需要按文档重新引入。</p><p>具体内容参见：<a href="https://github.com/opengoofy/crane4j/milestone/3" target="_blank" rel="noreferrer">Milestone</a>。</p><p><strong>Feature</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/21" target="_blank" rel="noreferrer">支持直接填充 Map 类型的数据</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/36" target="_blank" rel="noreferrer">提供 <code>@AssembleMp</code> 注解，为基于 MP 的数据源提供更好的支持</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/22" target="_blank" rel="noreferrer">允许自定义注解，支持解析自定义的配置规则</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/37" target="_blank" rel="noreferrer">MpBaseMapperContainerRegister支持懒加载</a>；</li></ul><p><strong>Refactor</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/39" target="_blank" rel="noreferrer">将 <code>@Assemble</code> 和 <code>@Disassemble</code> 的解析逻辑分离到独立的注解处理器</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/28" target="_blank" rel="noreferrer">重构项目结构，提供不同环境下的最小依赖</a>；</li></ul><p><strong>Fix</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/38" target="_blank" rel="noreferrer">当Bean被spring代理时，调用方法数据源容器报错</a>；</li></ul><h2 id="_1-3-0-alpha-2023-05-10" tabindex="-1">1.3.0-ALPHA (2023-05-10) <a class="header-anchor" href="#_1-3-0-alpha-2023-05-10" aria-label="Permalink to &quot;1.3.0-ALPHA (2023-05-10)&quot;">​</a></h2><p>这是 <code>1.3.0</code> 的预览版本，重构和增强了一些已有功能，并添加了一些新的功能。</p><p>其中，基于新特性<a href="https://github.com/opengoofy/crane4j/issues/44" target="_blank" rel="noreferrer">添加基于接口代理的填充方法</a>，crane4j 将更好的支持处理 <code>JSONObject</code> 或 <code>Map</code> 类型的非 <code>JavaBean</code> 对象。</p><p>具体内容参见：<a href="https://github.com/opengoofy/crane4j/milestone/4" target="_blank" rel="noreferrer">Milestone</a>。</p><p><strong>Feature</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/35" target="_blank" rel="noreferrer">提供 <code>@AssembleEnum</code> 注解，对枚举类型数据源提供更好的支持</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/61" target="_blank" rel="noreferrer">提供一个不基于 ThreadLocal 的动态数据源容器提供者</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/49" target="_blank" rel="noreferrer">代理填充方法支持设置临时容器</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/55" target="_blank" rel="noreferrer">OperatorProxyFactory中代理方法的生成也应当支持多种策略</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/48" target="_blank" rel="noreferrer">支持通过 Spring 依赖注入获取被 <code>@Operator</code> 注解的接口的代理对象</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/50" target="_blank" rel="noreferrer">装配操作中的容器支持懒加载</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/44" target="_blank" rel="noreferrer">添加基于接口代理的填充方法</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/41" target="_blank" rel="noreferrer">提供一个默认的可配置容器注册者实现</a>；</li></ul><p><strong>Refactor</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/70" target="_blank" rel="noreferrer">减少对 Hutool 的依赖</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/59" target="_blank" rel="noreferrer">移除 OperationAnnotationResolver 级别的配置缓存</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/45" target="_blank" rel="noreferrer">配置解析器应当支持所有的AnnotatedElement类型对象的注解配置</a>；</li></ul><p><strong>Test</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/67" target="_blank" rel="noreferrer">提高测试覆盖率</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/72" target="_blank" rel="noreferrer">MybatisPlus相关扩展的测试用例数据库更换为H2</a>；</li><li>修复了引入 <code>crane4j-spring-boot-starter</code> 时的一些自动装配问题；</li></ul><p><strong>Doc</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/34" target="_blank" rel="noreferrer">补充文档，如何在非 Spring 环境和 Spring 环境使用 crane4j</a>；</li></ul><h2 id="_2-0-0-alpha-2023-07-08" tabindex="-1">2.0.0-ALPHA (2023-07-08) <a class="header-anchor" href="#_2-0-0-alpha-2023-07-08" aria-label="Permalink to &quot;2.0.0-ALPHA (2023-07-08)&quot;">​</a></h2><p>这是 <code>2.0.0</code> 的预览版本，基于 <code>1.3.0-ALPHA</code> 升级而来。</p><p>项目进行了一次范围较大的重构，优化了大量的代码与逻辑，部分 API 可能不向下兼容。</p><p>具体内容参见：<a href="https://github.com/opengoofy/crane4j/milestone/4" target="_blank" rel="noreferrer">Milestone</a>。</p><p><strong>Feature</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/97" target="_blank" rel="noreferrer">优化 <code>@ContainerMethod</code> 注解在类上的配置方式</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/84" target="_blank" rel="noreferrer">添加一个全局的排序器静态单例，用于同时支持 Spring 的 <code>@Order</code> 与 Crane4j 的 <code>Sorted</code> 接口</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/76" target="_blank" rel="noreferrer"><code>ConstantContainer</code> 支持刷新缓存内容</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/49" target="_blank" rel="noreferrer">代理填充方法支持设置临时容器</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/41" target="_blank" rel="noreferrer">提供一个默认的可配置容器注册者实现</a>；</li></ul><p><strong>Refactor</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/86" target="_blank" rel="noreferrer">2.0 升级重构计划</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/85" target="_blank" rel="noreferrer">重构容器与装配操作配置的绑定过程</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/81" target="_blank" rel="noreferrer">重构全局配置类的容器管理功能</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/63" target="_blank" rel="noreferrer">装配操作可以指定数据源容器的加载策略</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/45" target="_blank" rel="noreferrer">配置解析器应当支持所有的AnnotatedElement类型对象的注解配置</a>；</li><li>移除了 <code>AbstractCacheablePropertyOperator</code> ，缓存功能分离至独立的 <code>CacheablePropertyOperator</code> 装饰器；</li></ul><p><strong>Doc</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/34" target="_blank" rel="noreferrer">补充文档，如何在非 Spring 环境和 Spring 环境使用 crane4j</a>；</li></ul><h2 id="_2-0-0-bate-2023-07-30" tabindex="-1">2.0.0-BATE (2023-07-30) <a class="header-anchor" href="#_2-0-0-bate-2023-07-30" aria-label="Permalink to &quot;2.0.0-BATE (2023-07-30)&quot;">​</a></h2><p>这是 <code>2.0.0</code> 的第二个预览版本，在上一个版本的基础上修复了一些 bug，并添加了一些新功能。</p><p>具体内容参见：<a href="https://github.com/opengoofy/crane4j/milestone/4" target="_blank" rel="noreferrer">Milestone</a>。</p><p><strong>Fix</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/77" target="_blank" rel="noreferrer">为基于 <code>ConstantContainer</code> 的枚举、常量容器提供独立的<code>Builder</code></a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/113" target="_blank" rel="noreferrer">启用全局切面后，springboot 项目启动报错</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/114" target="_blank" rel="noreferrer">在方法添加 <code>@AutoOperate</code> 后，若方法不指定填充对象类型，且返回值为空时报错</a>；</li></ul><p><strong>Refactor</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/116" target="_blank" rel="noreferrer">在各个组件中由于参数/逻辑校验不通过而抛出异常时，异常需要更详细的信息</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/107" target="_blank" rel="noreferrer">一些关键操作通过 debug 级别的日志输出执行时间</a>；</li></ul><p><strong>Feature</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/100" target="_blank" rel="noreferrer">当在注解中不指定 key 属性时，允许将当前对象作为 key 值</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/105" target="_blank" rel="noreferrer"><code>ReflectivePropertyOperator</code> 在没有找到 setter 或者 getter 方法时，应当支持直接基于属性进行读写</a>；</li></ul><h2 id="_2-0-0-2023-08-06" tabindex="-1">2.0.0 (2023-08-06) <a class="header-anchor" href="#_2-0-0-2023-08-06" aria-label="Permalink to &quot;2.0.0 (2023-08-06)&quot;">​</a></h2><p>这是 <code>2.0.0</code> 的正式版本，相对最近的一个正式版本 <code>1.2.0</code> 做了大幅度的重构，优化了很多旧功能，并且添加了较多新特性。</p><p>具体内容参见：<a href="https://github.com/opengoofy/crane4j/milestone/4" target="_blank" rel="noreferrer">Milestone</a>。</p><p><strong>Feature</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/97" target="_blank" rel="noreferrer">优化 <code>@ContainerMethod</code> 注解在类上的配置方式</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/84" target="_blank" rel="noreferrer">添加一个全局的排序器静态单例，用于同时支持 Spring 的 <code>@Order</code> 与 Crane4j 的 <code>Sorted</code> 接口</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/76" target="_blank" rel="noreferrer"><code>ConstantContainer</code> 支持刷新缓存内容</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/49" target="_blank" rel="noreferrer">代理填充方法支持设置临时容器</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/41" target="_blank" rel="noreferrer">提供一个默认的可配置容器注册者实现</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/100" target="_blank" rel="noreferrer">当在注解中不指定 key 属性时，允许将当前对象作为 key 值</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/105" target="_blank" rel="noreferrer"><code>ReflectivePropertyOperator</code> 在没有找到 setter 或者 getter 方法时，应当支持直接基于属性进行读写</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/122" target="_blank" rel="noreferrer">支持“字典类型-字典项编码”模式的字典项填充</a>；</li></ul><p><strong>Refactor</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/86" target="_blank" rel="noreferrer">2.0 升级重构计划</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/85" target="_blank" rel="noreferrer">重构容器与装配操作配置的绑定过程</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/81" target="_blank" rel="noreferrer">重构全局配置类的容器管理功能</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/63" target="_blank" rel="noreferrer">装配操作可以指定数据源容器的加载策略</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/45" target="_blank" rel="noreferrer">配置解析器应当支持所有的AnnotatedElement类型对象的注解配置</a>；</li><li>移除了 <code>AbstractCacheablePropertyOperator</code> ，缓存功能分离至独立的 <code>CacheablePropertyOperator</code> 装饰器；</li><li><a href="https://github.com/opengoofy/crane4j/issues/116" target="_blank" rel="noreferrer">在各个组件中由于参数/逻辑校验不通过而抛出异常时，异常需要更详细的信息</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/107" target="_blank" rel="noreferrer">一些关键操作通过 debug 级别的日志输出执行时间</a>；</li></ul><p><strong>Fix</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/77" target="_blank" rel="noreferrer">为基于 <code>ConstantContainer</code> 的枚举、常量容器提供独立的<code>Builder</code></a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/113" target="_blank" rel="noreferrer">启用全局切面后，springboot 项目启动报错</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/114" target="_blank" rel="noreferrer">在方法添加 <code>@AutoOperate</code> 后，若方法不指定填充对象类型，且返回值为空时报错</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/124" target="_blank" rel="noreferrer">spring环境下，<code>ContainerProvider</code> 没有在启动后自动注册到 <code>Crane4jApplicationContext</code> 中</a>；</li></ul><p><strong>Doc</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/34" target="_blank" rel="noreferrer">补充文档，如何在非 Spring 环境和 Spring 环境使用 crane4j</a>；</li></ul><h2 id="_2-1-0-2023-08-21" tabindex="-1">2.1.0 (2023-08-21) <a class="header-anchor" href="#_2-1-0-2023-08-21" aria-label="Permalink to &quot;2.1.0 (2023-08-21)&quot;">​</a></h2><p>这是一个正常迭代版本，相对上一个版本，修复了一些问题，并调整了关于枚举和常量扫描相关的功能。</p><p>具体内容参见：<a href="https://github.com/opengoofy/crane4j/milestone/5" target="_blank" rel="noreferrer">Milestone</a>。</p><p><strong>Feature</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/127" target="_blank" rel="noreferrer">属性映射应当支持使用 null 覆盖已有的属性值</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/58" target="_blank" rel="noreferrer">支持在启动类上的注解中扫描注解、常量类路径</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/42" target="_blank" rel="noreferrer">可以选择将容器注册到哪些提供者</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/122" target="_blank" rel="noreferrer">支持“字典类型-字典项编码”模式的字典项填充</a>；</li></ul><p><strong>Fix</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/142" target="_blank" rel="noreferrer"><code>Crane4jInitializer</code> 启动顺序太靠后，导致在项目中 <code>ApplicationRunner</code> 启动时容器仍然未加载</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/136" target="_blank" rel="noreferrer"><code>@AssembleEnum</code> 在不指定 <code>enumKey</code> 或者 <code>enumValue</code> 时会空指针</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/126" target="_blank" rel="noreferrer">在启动类添加 <code>@EnableCrane4j</code> 注解后，启动应用报错 “No ServletContext set”</a>；</li></ul><p><strong>Refactor</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/137" target="_blank" rel="noreferrer"><code>@AssembleEnum</code> 应该默认遵循该枚举类上的 <code>@ContainerEnum</code> 的配置</a>；</li></ul><p><strong>Doc</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/134" target="_blank" rel="noreferrer">优化 README 中的快速开始</a>；</li></ul><h2 id="_2-2-0-2023-09-25" tabindex="-1">2.2.0 (2023-09-25) <a class="header-anchor" href="#_2-2-0-2023-09-25" aria-label="Permalink to &quot;2.2.0 (2023-09-25)&quot;">​</a></h2><p>这是一个正常迭代版本，主要修复了一些问题，并添加了少量新功能。</p><p>具体内容参见：<a href="https://github.com/opengoofy/crane4j/milestone/6" target="_blank" rel="noreferrer">Milestone</a>。</p><p><strong>Feature</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/132" target="_blank" rel="noreferrer">为 <code>PropertyOperator</code> 提供基于方法句柄 <code>MethodHandler</code> 的实现</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/96" target="_blank" rel="noreferrer">支持 <code>@AssembleMethod</code> 注解，用于快速声明一个基于方法容器的装配操作</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/6" target="_blank" rel="noreferrer">添加 jackson 插件，在序列化和反序列化过程中填充 json 数据</a>；</li><li><a href="https://gitee.com/opengoofy/crane4j/issues/I832VQ" target="_blank" rel="noreferrer">枚举容器和方法容器支持设置重复的 key 值</a>；</li></ul><p><strong>Fix</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/162" target="_blank" rel="noreferrer">并发环境下获取容器可能导致类转换异常 “cn.crane4j.core.container.MethodInvokerContainer cannot be cast to cn.crane4j.core.container.ContainerDefinition”</a>；</li><li><a href="https://gitee.com/opengoofy/crane4j/issues/I82R6E" target="_blank" rel="noreferrer"><code>@Assemble</code> 注解应当支持在类上声明，且支持重复声明</a>；</li><li><a href="https://gitee.com/opengoofy/crane4j/issues/I82EBG" target="_blank" rel="noreferrer">AsyncBeanOperationExecutor 避免重复请求相同的数据源</a>；</li><li><a href="https://gitee.com/opengoofy/crane4j/issues/I82EAC" target="_blank" rel="noreferrer">在不同类的同名方法上添加 <code>@AutoOperate</code> 后，会导致填充字段错乱</a>；</li><li><a href="https://gitee.com/opengoofy/crane4j/issues/I7X36D" target="_blank" rel="noreferrer">升级2.1.0版本后，警告“Unable to find property mapping strategy [], use default strategy [OverwriteNotNullMappingStrategy]”</a>；</li></ul><p><strong>Refactor</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/149" target="_blank" rel="noreferrer">添加容器适配器管理器，并重构 <code>DynamicContainerOperatorProxyMethodFactory</code> 中适配器部分代码</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/144" target="_blank" rel="noreferrer">优化 <code>PropertyMappingStrategy</code> 的管理方式</a>；</li></ul><h2 id="_2-3-0-2023-10-18" tabindex="-1">2.3.0 (2023-10-18) <a class="header-anchor" href="#_2-3-0-2023-10-18" aria-label="Permalink to &quot;2.3.0 (2023-10-18)&quot;">​</a></h2><p>这是一个正常迭代版本，主要修复了一些问题，并添加了少量新功能。</p><p>具体内容参见：<a href="https://github.com/opengoofy/crane4j/milestone/7" target="_blank" rel="noreferrer">Milestone</a>。</p><p><strong>Feature</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/172" target="_blank" rel="noreferrer">支持直接通过 <code>Crane4jGlobalConfiguration</code> 获取 <code>OperateTemplate</code></a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/119" target="_blank" rel="noreferrer">支持全量获取数量固定的数据源容器</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/153" target="_blank" rel="noreferrer">当目标对象的key值与数据源对象的key值类型不一致时，可以指定将目标对象的key值转为对应类型</a>；</li></ul><p><strong>Fix</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/168" target="_blank" rel="noreferrer">配置了 <code>crane4j.mybatis-plus.auto-register-mapper = false</code> 后，在项目启动后依然会自动注册 Mapper 接口</a>；</li></ul><p><strong>Refactor</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/166" target="_blank" rel="noreferrer">重构 <code>AutoOperateAnnotatedElementResolver</code>，使基于 <code>@AutoOperate</code> 的自动装配功能更加灵活</a>；</li></ul><p><strong>Doc</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/143" target="_blank" rel="noreferrer">文档优化计划</a>；</li></ul><h2 id="_2-3-1-2023-12-10" tabindex="-1">2.3.1 (2023-12-10) <a class="header-anchor" href="#_2-3-1-2023-12-10" aria-label="Permalink to &quot;2.3.1 (2023-12-10)&quot;">​</a></h2><p>这是一个 Bug 修复版本，请尽快升级。</p><p><strong>Fix</strong></p><ul><li><a href="https://gitee.com/opengoofy/crane4j/issues/I8MZOK" target="_blank" rel="noreferrer">调用Operator实例的Object基本方法会发生死循环直到栈溢出</a>；</li></ul><h2 id="_2-4-0-2024-01-15" tabindex="-1">2.4.0 (2024-01-15) <a class="header-anchor" href="#_2-4-0-2024-01-15" aria-label="Permalink to &quot;2.4.0 (2024-01-15)&quot;">​</a></h2><p>这是一个功能迭代版本，重构并大幅度增强了缓存功能，并修复了一些问题。</p><p>具体内容参见：<a href="https://github.com/opengoofy/crane4j/milestone/8" target="_blank" rel="noreferrer">Milestone</a>。</p><p><strong>Feature</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/185" target="_blank" rel="noreferrer">Operator 接口支持基于 <code>@AutoOperate</code> 注解的自动填充</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/3" target="_blank" rel="noreferrer">支持 redis 缓存</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/176" target="_blank" rel="noreferrer"><code>@AssembleEnum</code> 直接直接内嵌一个 <code>@ContainerEnum</code> 注解用于配置</a>；</li><li><a href="https://gitee.com/opengoofy/crane4j/issues/I8VXTE" target="_blank" rel="noreferrer">将启用框架的方式从注解改为 SPI</a>；</li><li><a href="https://gitee.com/opengoofy/crane4j/issues/I8UZSO" target="_blank" rel="noreferrer">方法缓存希望可以像 Spring 那样，通过注解配置到期时间和刷新</a>；</li><li><a href="https://gitee.com/opengoofy/crane4j/issues/I8UZH4" target="_blank" rel="noreferrer">基于 <code>@ContainerMethod</code> 的方法容器，希望返回值可以支持 <code>String</code> 或基础数据类型及其包装类</a>；</li><li><a href="https://gitee.com/opengoofy/crane4j/issues/I8W0SN" target="_blank" rel="noreferrer">声明装配操作时是否可以根据条件判断是否应用此次操作？</a>；</li></ul><h2 id="_2-5-0-2024-02-01" tabindex="-1">2.5.0 (2024-02-01) <a class="header-anchor" href="#_2-5-0-2024-02-01" aria-label="Permalink to &quot;2.5.0 (2024-02-01)&quot;">​</a></h2><p>这是一个功能迭代版本，修复了 crane4j 与 SpringBoot 集成的一些问题，完善了文档与代码注释，并优化了一些功能的使用方式。</p><p>具体内容参见：<a href="https://github.com/opengoofy/crane4j/milestone/9" target="_blank" rel="noreferrer">Milestone</a>。</p><p><strong>Feature</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/195" target="_blank" rel="noreferrer">异步执行器支持指定支持指定批量大小，将基于同一数据源的操作分为多个小任务</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/79" target="_blank" rel="noreferrer">提供回调接口或组件，用于在具体的填充过程支持一些自定的操作</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/190" target="_blank" rel="noreferrer">当需要值到键的映射时，希望可以不需要在注解中指定 props 属性</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/11" target="_blank" rel="noreferrer">验证或者支持在更高的 LTS 版本运行</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/220" target="_blank" rel="noreferrer">支持直接在 @ContainerMethod 注解中指定缓存配置</a>；</li></ul><p><strong>Refactor</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/197" target="_blank" rel="noreferrer">将MappingType枚举中的 <code>NONE</code> 与 <code>MAPPED</code> 选项分别替换为 <code>ORDER_OF_KEYS</code> 和 <code>NO_MAPPING</code></a>；</li></ul><p><strong>Fix</strong></p><ul><li><a href="https://gitee.com/opengoofy/crane4j/issues/I8XRVT" target="_blank" rel="noreferrer">与 SpringBoot 项目集成后，启动出现 No ServletContext set 异常</a>；</li><li><a href="https://gitee.com/opengoofy/crane4j/issues/I8W0SN" target="_blank" rel="noreferrer">声明装的配操作支持在实际执行时，根据情况动态决定是否应用</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/199" target="_blank" rel="noreferrer">当 Bean 被代理后，类上的 <code>@ContainerCache</code> 注解无法被识别</a>；</li></ul><h2 id="_2-6-0-2024-02-23" tabindex="-1">2.6.0 (2024-02-23) <a class="header-anchor" href="#_2-6-0-2024-02-23" aria-label="Permalink to &quot;2.6.0 (2024-02-23)&quot;">​</a></h2><p>这是一个新特性版本，添加了对条件操作的支持，并额外支持了常量和键值两种数据源容器的选项式配置。</p><p>具体内容参见：<a href="https://github.com/opengoofy/crane4j/milestone/10" target="_blank" rel="noreferrer">Milestone</a>。</p><p><strong>Feature</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/135" target="_blank" rel="noreferrer">支持 <code>@AssembleConstant</code> 注解，用于快速声明一个基于常量类的装配操作</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/93" target="_blank" rel="noreferrer">支持使用实体类中特定方法返回值作为key值</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/210" target="_blank" rel="noreferrer"><code>@ContainerCache</code> 注解支持在 Spring 配置类的工厂方法中使用</a>；</li><li><a href="https://gitee.com/opengoofy/crane4j/issues/I8W0SN" target="_blank" rel="noreferrer">声明装的配操作支持在实际执行时，根据情况动态决定是否应用</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/133" target="_blank" rel="noreferrer"><code>@Assemble</code> 注解支持通过类似 Spring 的 <code>@Condition</code> 的方式动态决定是否要对特定对象应用操作</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/201" target="_blank" rel="noreferrer">支持为每个操作都添加一个id作为唯一标识</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/130" target="_blank" rel="noreferrer">支持根据策略回填指定字段值</a>；</li></ul><p><strong>Refactor</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/206" target="_blank" rel="noreferrer">将 <code>KeyTriggerOperation</code> 下的实现类的创建方式改为通过 Builder 创建</a>；</li></ul><p><strong>Fix</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/211" target="_blank" rel="noreferrer"><code>ContainerLifecycleProcessor</code> 无法处理被 Spring 管理的容器</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/204" target="_blank" rel="noreferrer">自动填充时，若目标类没有配置任何装配操作则执行会报错</a>；</li></ul><h2 id="_2-6-1-2024-03-13" tabindex="-1">2.6.1 (2024-03-13) <a class="header-anchor" href="#_2-6-1-2024-03-13" aria-label="Permalink to &quot;2.6.1 (2024-03-13)&quot;">​</a></h2><p>这是一个 Bug 修复版本，请尽快升级。</p><p><strong>Fix</strong></p><ul><li><a href="https://gitee.com/opengoofy/crane4j/issues/I97R7E" target="_blank" rel="noreferrer">当作为数据源容器的方法接受单个参数并返回集合类型结果时，只会填充集合中的首个元素</a>；</li></ul><h2 id="_2-6-2-2024-03-27" tabindex="-1">2.6.2 (2024-03-27) <a class="header-anchor" href="#_2-6-2-2024-03-27" aria-label="Permalink to &quot;2.6.2 (2024-03-27)&quot;">​</a></h2><p>这是一个 Bug 修复版本，请尽快升级。</p><p><strong>Fix</strong></p><ul><li><a href="https://gitee.com/opengoofy/crane4j/issues/I9C5GA" target="_blank" rel="noreferrer">将接受单个参数并返回单个对象的方法作为数据源容器时，填充出现问题</a>；</li></ul><h2 id="_2-7-0-2024-04-08" tabindex="-1">2.7.0 (2024-04-08) <a class="header-anchor" href="#_2-7-0-2024-04-08" aria-label="Permalink to &quot;2.7.0 (2024-04-08)&quot;">​</a></h2><p>这是一个新特性版本，修复了一些问题，重构了一些底层组件，提高了字段映射的执行性能，并添加了键值解析器、字段映射的字面量配置的新特性。</p><p>具体内容参见：<a href="https://github.com/opengoofy/crane4j/milestone/11" target="_blank" rel="noreferrer">Milestone</a>。</p><p><strong>Feature</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/246" target="_blank" rel="noreferrer">在 Spring 环境默认启用 AsyncBeanOperationExecutor 执行器</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/230" target="_blank" rel="noreferrer">简化属性映射配置，支持通过字面量的形式配置</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/103" target="_blank" rel="noreferrer">将从目标对象中提取 key 值的操作分离为独立的键值提取器</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/222" target="_blank" rel="noreferrer">数据源容器支持接受对象类型参数</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/223" target="_blank" rel="noreferrer">支持在被 <code>@AutoOperate</code> 注解的方法上添加操作配置</a>；</li></ul><p><strong>Refactor</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/244" target="_blank" rel="noreferrer">重构 <code>AssembleOpeartionHandler</code>，调整抽象层级，并与键值解析器进行整合</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/232" target="_blank" rel="noreferrer">重构反射工厂，优化字段映射的执行效率</a>；</li></ul><p><strong>Fix</strong></p><ul><li><a href="https://gitee.com/opengoofy/crane4j/issues/I97R7E" target="_blank" rel="noreferrer">当作为数据源容器的方法接受单个参数并返回集合类型结果时，只会填充集合中的首个元素</a>；</li></ul><p><strong>Doc</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/240" target="_blank" rel="noreferrer">改为使用 VitePress 作为文档构建框架</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/231" target="_blank" rel="noreferrer">完善文档场景示例</a>；</li></ul><h2 id="_2-8-0-2024-05-07" tabindex="-1">2.8.0 (2024-05-07) <a class="header-anchor" href="#_2-8-0-2024-05-07" aria-label="Permalink to &quot;2.8.0 (2024-05-07)&quot;">​</a></h2><p>这是一个新特性版本，修复了一些问题，优化了一些功能。</p><p>具体内容参见：<a href="https://github.com/opengoofy/crane4j/milestone/12" target="_blank" rel="noreferrer">Milestone</a>。</p><p><strong>Feature</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/252" target="_blank" rel="noreferrer">提供一个操作门面，用于整合组件管理、容器注册、操作执行以及配置管理等功能</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/278" target="_blank" rel="noreferrer">当项目中同上存在复数同名的数据源容器时，应当直接报错或输出警告日志</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/266" target="_blank" rel="noreferrer">@ContainerMethod 支持像 @AutoOperate 那样提取包装对象中的实际数据</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/254" target="_blank" rel="noreferrer">支持在非 Spring 环境下使用自动填充</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/251" target="_blank" rel="noreferrer">提供一个基于 SoftConcurrentMap 实现的缓存管理器</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/253" target="_blank" rel="noreferrer">代理工厂支持基于 ByteBuddy 代理非接口类型</a>；</li></ul><p><strong>Fix</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/267" target="_blank" rel="noreferrer"><code>@ContainerEnumScan</code> 注解无法支持带有通配符的路径</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/268" target="_blank" rel="noreferrer">添加 <code>@OperatorScan</code> 注解后，项目启动时出现 &#39;No servlet set&#39; 问题</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/262" target="_blank" rel="noreferrer">创建容器时可以指定 namespace 为空字符串，但是引用时却无法引用</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/258" target="_blank" rel="noreferrer">自动填充方法参数时，<code>AutoOperate.resolveOperationsFromCurrentElement </code>配置不生效</a>；</li></ul><p><strong>Refactor</strong></p><ul><li><a href="https://github.com/opengoofy/crane4j/issues/272" target="_blank" rel="noreferrer">移除<code>MappingType.NONE</code>与 <code>MappingType.MAPPED</code> 两个过时的 API</a>；</li><li><a href="https://github.com/opengoofy/crane4j/issues/269" target="_blank" rel="noreferrer">优化在 spring 环境中组件的初始化时机，避免过早初始化</a>；</li></ul>',159),l=[n];function s(i,g,c,p,h,f){return o(),r("div",null,l)}const d=e(a,[["render",s]]);export{b as __pageData,d as default};