(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{313:function(t,e,a){"use strict";a.r(e);var s=a(14),o=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("crane4j")]),t._v(" 中，根据对象 A 的 key 值获取对象 B，并将 B 的属性映射到 A 上的过程称为"),e("strong",[t._v("装配")]),t._v("，当处理嵌套结构的对象时，将嵌套的对象取出并平铺，重复该过程直到所有对象都平铺的过程称为"),e("strong",[t._v("拆卸")]),t._v("。")]),t._v(" "),e("p",[t._v("在一个类中，可以声明一个或多个装配/拆卸操作，针对特定的 key 属性或 key 方法。配置解析器将这些声明解析为多个 "),e("code",[t._v("AssembleOperation")]),t._v(" 或 "),e("code",[t._v("DisassembleOperation")]),t._v(" 对象，每个对象代表一个具体的装配或拆卸操作。最终，类的基本信息和所有操作都会聚合到一个 "),e("code",[t._v("BeanOperations")]),t._v(" 对象中。")]),t._v(" "),e("p",[t._v("执行过程中，操作执行器根据 "),e("code",[t._v("BeanOperations")]),t._v(" 对象完成特定类型对象的填充。通常，操作执行器首先执行所有的拆卸操作，将对象平铺开来，然后按照一定的分组方式批量完成装配操作。")]),t._v(" "),e("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://img.xiajibagao.top/image-20230220180719411.png",alt:"image-20230220180719411"}})])}),[],!1,null,null,null);e.default=o.exports}}]);