## 扩展模块

此模块为 crane4j 结合第三方库提供的扩展功能，不同的模块下的功能彼此独立，用户自行引入对应的第三方库即可用使用对应模块下的扩展功能。

### crane4j-extension-spring

用于提供将 crane4j 集成至 spring 框架，并且基于 spring 提供包括 SpEL 表达式引擎、自动填充切面、组合注解等扩展功能；

使用前需要先引入 `spring-context` 依赖。

### crane4j-extension-jackson

用于提供将 jackson 集成至 crane4j，提供在序列化或反序列时自动填充或修改 JSON 数据的功能；

使用前需要先引入 jackson 相关依赖。

### crane4j-extension-datasource

该模块支持用户使用 DataSource 根据原生 SQL 语句查询数据的功能。

### crane4j-extension-mybatis-plus

该模块用于将 mybatis-plus 集成至 crane4j，可以基于 mp 提供快速查询单表作为数据源的功能。

使用前需要先引入 `mybatis-plus-core` 依赖。

### crane4j-extension-redis

用于提供将 spring-data-redis 集成至 crane4j，提供基于 Redis 的换成支持；

使用前需要先引入 `spring-data-redis` 依赖。