(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{299:function(e,r,t){"use strict";t.r(r);var o=t(14),v=Object(o.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"类型转换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[e._v("#")]),e._v(" 类型转换")]),e._v(" "),r("p",[e._v("在 "),r("code",[e._v("crane4j")]),e._v(" 中有不少需要通过反射调用有参方法的场景，包括且不限于：")]),e._v(" "),r("ul",[r("li",[e._v("在字段映射时调用的 "),r("code",[e._v("setter")]),e._v(" 方法；")]),e._v(" "),r("li",[e._v("从方法数据源容器调用被适配的方法获取数据源；")]),e._v(" "),r("li",[e._v("调用操作接口填充入参的对象；")])]),e._v(" "),r("p",[e._v("这些方法底层都基于类型转换器管理器 "),r("code",[e._v("ConverterManager")]),e._v(" 实现了对参数的自动转换，即方法入参是 A 类型，则当输入 B 类型时将会自动尝试将其转为 A 类型。")]),e._v(" "),r("p",[r("code",[e._v("ConverterManager")]),e._v(" 目前提供了两套实现：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("HutoolConverterManager")]),e._v("：基于 Hutool 的 "),r("code",[e._v("Convert")]),e._v(" 实现，也是默认使用的转换器管理器；")]),e._v(" "),r("li",[r("code",[e._v("SimpleConverterManager")]),e._v("：直接通过 "),r("code",[e._v("(R)t")]),e._v(" 这种方式强转，作用有限，基本不会在处理测试用例以外的地方使用。")])]),e._v(" "),r("p",[e._v("对于默认的 "),r("code",[e._v("HutoolConverterManager")]),e._v("，如果用户有需要自定义转换的类型，可以直接基于 Hutool 的转换器体系扩展，参见 Hutool 参考文档中的 "),r("a",{attrs:{href:"https://hutool.cn/docs/#/core/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2/%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2-ConverterRegistry?id=%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2-converterregistry",target:"_blank",rel:"noopener noreferrer"}},[e._v("自定义类型转换-ConverterRegistry"),r("OutboundLink")],1),e._v(" 一节。")]),e._v(" "),r("p",[e._v("在后期版本，可能会额外提供一个类似 Hutool 的 "),r("code",[e._v("ConverterRegistry")]),e._v(" 的可注册的转换器管理器。")])])}),[],!1,null,null,null);r.default=v.exports}}]);