import{_ as e,c as o,o as a,a4 as c}from"./chunks/framework.4aTu-Nia.js";const t="/assets/image-20230220191856595.BTTst8cM.png",h=JSON.parse('{"title":"原理","description":"","frontmatter":{},"headers":[],"relativePath":"user_guide/operational_principle.md","filePath":"user_guide/operational_principle.md","lastUpdated":1697303528000}'),d={name:"user_guide/operational_principle.md"},n=c('<h1 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h1><p><code>crane4j</code> 的整体执行流程可大致分为两阶段：</p><ul><li><strong>配置解析阶段</strong>：根据 <code>AnnotatedElement</code> （一般是类或者方法）解析获得对应的操作配置对象 <code>BeanOperations</code>，通过该配置对象我们可以知道一个对象中有多少个字段需要处理，要怎么处理，在 <code>BeanOperation</code> 里面，一个 <code>key</code> 字段对应的一个操作会被转为一个 <code>Operation</code> 对象；</li><li><strong>操作执行阶段</strong>：输入要处理的对象，与该对象类型对应操作配置，然后交由操作执行器 <code>BeanOperationExecutor</code> 生成待完成的任务 <code>Execution</code>，并最终分发给操作执行器 <code>OperationHandler</code>，<code>OperationHandler</code> 会根据配置从数据源获得对象，并完成具体的字段映射；</li></ul><p>简而言之，和 Spring 类似，配置解析阶段最终的产物是 <code>BeanOperations</code>，而执行阶段所有的组件都围绕 <code>BeanOperations</code> 的配置执行。</p><p><img src="'+t+'" alt="operation_principle"></p><p>上图描述了一个 <code>Foo</code> 对象，是如何通过 <code>id</code> 获得数据源，并最终将数据源中的 <code>userName</code> 字段值映射到 <code>Foo</code> 的 <code>name</code> 字段上的过程。</p>',6),r=[n];function i(p,s,_,l,u,m){return a(),o("div",null,r)}const f=e(d,[["render",i]]);export{h as __pageData,f as default};
