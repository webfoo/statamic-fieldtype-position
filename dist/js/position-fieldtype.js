!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e,n){"use strict";n.r(e);var o=function(t,e,n,o,i,s,r,a){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=l):i&&(l=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:u}}({mixins:[Fieldtype],methods:{toggleModalVisibility:function(){this.modalIsOpen=!this.modalIsOpen},updatePosition:function(t){this.update(t),this.modalIsOpen=!1}},computed:{toggleModalClass:function(){var t=["position-fieldtype__toggle-modal","btn"];return this.modalIsOpen&&t.push("position-fieldtype__toggle-modal--inactive"),t},modalClass:function(){var t=["position-fieldtype__modal"];return this.modalIsOpen&&t.push("position-fieldtype__modal--active"),t}},data:function(){return{modalIsOpen:!1,positions:["top-left","top","top-right","left","center","right","bottom-left","bottom","bottom-right"]}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"position-fieldtype"},[n("button",{class:t.toggleModalClass,attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.toggleModalVisibility()}}},[n("span",{staticClass:"position-fieldtype__toggle-modal__icon"},[n(t.value,{tag:"component"})],1),t._v("\n        "+t._s(t.value?t.value:"Set Position")+"\n    ")]),t._v(" "),n("div",{class:t.modalClass},[n("div",{staticClass:"position-fieldtype__compass"},t._l(t.positions,(function(e,o){return n("button",{key:o,staticClass:"position-fieldtype__compass__button btn",class:{active:t.value==e},attrs:{type:"button"},on:{click:function(n){return n.preventDefault(),t.updatePosition(e)}}},[n("span",{staticClass:"hidden"},[t._v(t._s(e))]),t._v(" "),n("img",{class:"r-"+e,attrs:{src:"//s.svgbox.net/materialui.svg?ic=arrow_upward"}})])})),0)])])}),[],!1,null,null,null).exports;Statamic.$components.register("position-fieldtype",o)},function(t,e){}]);