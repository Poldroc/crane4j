import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.4aTu-Nia.js";const g=JSON.parse('{"title":"常量容器","description":"","frontmatter":{},"headers":[],"relativePath":"basic/container/constant_container.md","filePath":"basic/container/constant_container.md","lastUpdated":1713973808000}'),t={name:"basic/container/constant_container.md"},h=n(`<h1 id="常量容器" tabindex="-1">常量容器 <a class="header-anchor" href="#常量容器" aria-label="Permalink to &quot;常量容器&quot;">​</a></h1><p>常量容器指基于常量类中的静态成员变量创建的数据源容器，它的作用有点类似于 Spring 的 <code>Contstant</code> 工具类。</p><h2 id="_1-创建容器" tabindex="-1">1.创建容器 <a class="header-anchor" href="#_1-创建容器" aria-label="Permalink to &quot;1.创建容器&quot;">​</a></h2><p>可以使用 <code>Containers.forConstantClass</code> 方法将常量类定义为一个数据源容器：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ContainerConstant</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FooConstant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String ONE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;one&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String TWO </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;two&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String THREE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;three&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用 Containers.forConstantClass 方法构建容器</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 容器缓存的数据为： {&quot;ONE&quot; = &quot;one&quot;}, {&quot;TWO&quot; = &quot;two&quot;}, {&quot;THREE&quot; = &quot;three&quot;}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Container&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; container </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Containers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">forConstantClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(FooConstant.class, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SimpleAnnotationFinder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span></code></pre></div><p>或者，也可以通过建造者构建一个常量容器：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Container&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; container </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ConstantContainerBuilder.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(FooConstant.class)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">namespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 指定容器命名空间</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onlyPublic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 扫描所有公有和非公有属性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reverse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 翻转键值对，即使用属性名作为value，属性值作为key</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>相比起 <code>Containers</code> 的静态工厂方法，建造者具备更多的可配置项。</p><h2 id="_2-可配置项" tabindex="-1">2.可配置项 <a class="header-anchor" href="#_2-可配置项" aria-label="Permalink to &quot;2.可配置项&quot;">​</a></h2><p>与常量容器相同，我们还可以在常量类上添加 <code>@ContainerConstant</code> 注解来进一步定义容器的具体信息：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ContainerConstant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    namespace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 指定命名空间</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    onlyExplicitlyIncluded</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是否只保存带有 @Include 注解的属性</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    onlyPublic</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 是否只保存公共变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FooConstant2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ContainerConstant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.Include      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// onlyExplicitlyIncluded 为 true 时，仅包含带有该注解的属性</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String ONE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;one&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ContainerConstant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.Exclude      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认情况下排除该属性</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String TWO </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;two&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ContainerConstant.Name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;THREE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 指定 key 名称为 &quot;THREE&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String SAN </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;three&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这里提供了一些可选的配置：</p><table><thead><tr><th>API</th><th>作用</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>namespace</code></td><td>定义常量容器的命名空间</td><td>任意字符串</td><td>常量类的 <code>Class#SimpleName</code></td></tr><tr><td><code>onlyExplicitlyIncluded</code></td><td>是否只引用带有 <code>@Include</code> 注解的属性</td><td>布尔值</td><td>false</td></tr><tr><td><code>onlyPublic</code></td><td>是否只引用被 <code>public</code> 修饰的属性</td><td>布尔值</td><td>true</td></tr><tr><td><code>reverse</code></td><td>是否需要翻转键值（属性名和属性值）</td><td>布尔值</td><td>false</td></tr><tr><td><code>@ContainerConstant.Name</code></td><td>注解在属性上，在将常量属性注册到容器后，使用注解指定的名称替代属性名</td><td>注解</td><td></td></tr><tr><td><code>@ContainerConstant.Include</code></td><td>注解在属性上，与 <code>onlyExplicitlyIncluded</code> 属性配合使用，声明要保留的常量属性</td><td>注解</td><td></td></tr><tr><td><code>@ContainerConstant.Exclude</code></td><td>注解在属性上，声明要排除的常量属性</td><td>注解</td><td></td></tr></tbody></table><h2 id="_3-批量扫描" tabindex="-1">3.批量扫描 <a class="header-anchor" href="#_3-批量扫描" aria-label="Permalink to &quot;3.批量扫描&quot;">​</a></h2><p>在 Spring 环境中，你可以通过<strong>配置文件</strong>或者<strong>注解</strong>配置扫描路径，批量地扫描并注册常量类。</p><p><strong>通过配置文件</strong></p><p>在 2.0 及以上版本，你可以通过在配置文件中配置常量包路径，以便批量的将扫描到的常量类注册为常量容器：</p><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">crane4j</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 扫描常量包路径</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;"> container-constant-packages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cn.demo.constant</span></span></code></pre></div><p><strong>通过注解配置</strong></p><p>在 2.1.0 及以上版本，你可以在 Spring 的启动类或配置类上，通过 <code>@ContainerConstantScan</code> 注解配置要扫描的常量包路径：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ContainerConstantScan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    includePackages</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;com.example.demo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 要扫描的包路径</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    excludeClasses</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { NoScanConstant.class }, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 排除指定的类</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    includeClasses</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { NeedScanConstant.class } </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 包含指定的类</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SpringBootApplication</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Demo3Application</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ApplicationRunner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        SpringApplication.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Demo3Application.class, args);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_4-选项式配置" tabindex="-1">4.选项式配置 <a class="header-anchor" href="#_4-选项式配置" aria-label="Permalink to &quot;4.选项式配置&quot;">​</a></h2><p>在 2.6 及以上版本，你可以使用 <code>@AssembleConstant</code> 注解进行选项式风格的配置。</p><p>比如：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequiredArgsConstructor</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Data</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">AssembleConstant</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Gender.class,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        constant</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ConstantContainer</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 如果没有自定义配置可以不配置这个属性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String code;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String value;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Getter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RequiredArgsConstructor</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Gender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> static final String FEMALE = &quot;女&quot;;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String MALE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;男&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>你可以通过 <code>constant</code> 设置一个 <code>@ContainerConstant</code>，其配置效果与在常量类似添加 <code>@ContainerConstant</code> 完全一样。</p><p>此外，如果你的常量类已经有 <code>@ContainerConstant</code> 注解了，那么你可以通过 <code>followTypeConfig</code> 选项决定是否要优先遵循常量类上的注解配置。</p><p><code>@AssembleEnum</code> 注解共提供下述可选项：</p><table><thead><tr><th>API</th><th>作用</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>指定常量类型</td><td>常量类</td><td>无，与 <code>typeName</code> 二选一必填</td></tr><tr><td><code>typeName</code></td><td>指定常量类型</td><td>常量类的全限定名<br>一般在常量类与实体类不在同一包中时使用</td><td>无，与 <code>type</code> 二选一必填</td></tr><tr><td><code>constant</code></td><td>常量容器配置</td><td><code>@ContainerConstant</code> 注解</td><td>空</td></tr><tr><td><code>followTypeConfig</code></td><td>是否遵循常量类上的 <code>@ContainerConstant</code> 注解</td><td>为 true 时，若常量类上存在 <code>@ContainerConstant</code> 注解，则优先使该注解的配置</td><td>true</td></tr><tr><td><code>ref</code></td><td>指定填充字段</td><td>等效于 <code>props = @Mapping(ref = &quot;xxx&quot;)</code></td><td>无</td></tr></tbody></table>`,29),l=[h];function p(k,e,d,r,E,o){return a(),i("div",null,l)}const y=s(t,[["render",p]]);export{g as __pageData,y as default};