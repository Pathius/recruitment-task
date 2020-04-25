(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49790eae"],{"0c72":function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"checkout"},[a("Header"),a("h2",{staticClass:"title checkout__title"},[t._v(" Złóż zamówienie ")]),a("section",{staticClass:"checkout__panel"},[a("PizzaCheckout")],1),t.anyOrder?a("section",{staticClass:"checkout__buttons"},[a("BaseButton",{staticClass:"checkout__button",attrs:{transparent:!0},nativeOn:{click:function(e){return t.addAnother(e)}}},[t._v(" Dodaj następny ")]),a("BaseButton",{staticClass:"checkout__button",nativeOn:{click:function(e){return t.$router.push("/transaction")}}},[t._v(" Zakończ zamówienie ")])],1):a("section",{staticClass:"checkout__buttons"},[a("BaseButton",{staticClass:"checkout__button",nativeOn:{click:function(e){return t.$router.push("/pizza")}}},[t._v(" Stwórz własną pizzę ")])],1)],1)},s=[],i=a("bd61"),n=a("b6ee"),r=a("83f4"),o={name:"checkout",components:{Header:i["a"],PizzaCheckout:n["a"],BaseButton:r["a"]},methods:{addAnother:function(){this.$store.commit("pizza/newPizza"),this.$store.commit("ingredients/newPizza"),this.$router.push("/pizza")}},computed:{anyOrder:function(){return this.$store.state.pizza.orderedPizzas.length}}},l=o,u=(a("65ff"),a("2877")),d=Object(u["a"])(l,c,s,!1,null,"3484edb0",null);e["default"]=d.exports},"1da2":function(t,e,a){"use strict";var c=a("dd09"),s=a.n(c);s.a},"58a8":function(t,e,a){"use strict";var c=a("f348"),s=a.n(c);s.a},"58e5":function(t,e,a){"use strict";var c=a("aa89"),s=a.n(c);s.a},"65ff":function(t,e,a){"use strict";var c=a("7c84"),s=a.n(c);s.a},"7c84":function(t,e,a){},"836a":function(t,e,a){},"83f4":function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:t.styling,attrs:{disabled:t.disabled}},[t._t("default")],2)},s=[],i={props:{disabled:{type:Boolean,required:!1},transparent:{type:Boolean,required:!1}},computed:{styling:function(){return this.disabled?"button-disabled":this.transparent?"button-transparent":"button"}}},n=i,r=(a("58a8"),a("2877")),o=Object(r["a"])(n,c,s,!1,null,"9ccac526",null);e["a"]=o.exports},"9dde":function(t,e,a){"use strict";var c=a("836a"),s=a.n(c);s.a},aa89:function(t,e,a){},b6ee:function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"checkout"},[t._l(t.pizzas,(function(e,c){return a("section",{key:c,staticClass:"checkout__product"},[a("p",{staticClass:"checkout__product-size"},[a("span",[t._v(" Rozmiar "+t._s(e.name)+" ")]),a("span",{staticClass:"text-gray"},[t._v(" "+t._s(e.sizePrice)+"zł "),a("span",{staticClass:"checkout__product-size-cancel",on:{click:function(a){return t.removePizza(e.id)}}},[t._v(" X ")])])]),t._l(e.ingredients,(function(e,c){return a("p",{key:c,staticClass:"checkout__product-ingredient"},[a("span",[t._v(" "+t._s(e.name)+" "),a("span",{staticClass:"text-gray"},[t._v(" x"+t._s(e.units)+" ")])]),a("span",{staticClass:"text-gray"},[t._v(" "+t._s(t._f("readablePrice")(e.units*e.price))+"zł ")])])}))],2)})),t.anyOrder?a("h3",{staticClass:"checkout__product-price"},[a("span",{staticClass:"checkout__product-price-total"},[t._v(" Łącznie ")]),a("span",{staticClass:"text-gray"},[t._v(" "+t._s(t._f("readablePrice")(t.price))+"zł ")])]):a("h3",{staticClass:"checkout__product-price-invalid"},[t._m(0)])],2)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v(" Niestety nie wykryliśmy pizzy w Twoim koszyku :("),a("br"),t._v(" Aby kontynuować kliknij przycisk poniżej ")])}],i=(a("4de4"),{methods:{removePizza:function(t){this.$store.commit("pizza/removePizza",t)}},computed:{pizzas:function(){var t=this.$store.state.pizza.orderedPizzas;return t.filter((function(t){return""!==t}))},price:function(){return this.$store.getters["pizza/price"]},anyOrder:function(){return this.$store.state.pizza.orderedPizzas.length}}}),n=i,r=(a("9dde"),a("2877")),o=Object(r["a"])(n,c,s,!1,null,"999c4e80",null);e["a"]=o.exports},bd61:function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("span",{staticClass:"header__back",on:{click:t.goHomePage}},[t._v(" Powrót na START ")]),a("span",{staticClass:"header__logo logo-header",on:{click:t.goHomePage}},[a("IconPizza")],1),a("span",{staticClass:"header__price"},[t._v(" "+t._s(t._f("readablePrice")(t.price))+"zł ")])])},s=[],i=a("ebed"),n={components:{IconPizza:i["a"]},computed:{price:function(){return this.$store.getters["pizza/price"]}},methods:{goHomePage:function(){this.$store.commit("pizza/initialValues"),this.$store.commit("ingredients/initialValues"),this.$router.push("/")}}},r=n,o=(a("1da2"),a("2877")),l=Object(o["a"])(r,c,s,!1,null,"ffad41ca",null);e["a"]=l.exports},dd09:function(t,e,a){},ebed:function(t,e,a){"use strict";var c=function(t,e){var a=e._c;return a("svg",{attrs:{height:"60px",viewBox:"-48 0 511 511.99881",width:"60px",xmlns:"http://www.w3.org/2000/svg"}},[a("g",{attrs:{fill:"#ffeba1"}},[a("path",{attrs:{d:"m333.210938 254.667969c-2.476563-1.296875-5.46875-1.105469-7.761719.488281l-37.714844 26.234375c-2.015625 1.402344-3.21875 3.707031-3.21875 6.164063v112.601562c0 14.539062 11.828125 26.363281 26.363281 26.363281s26.363282-11.824219 26.363282-26.363281v-138.835938c0-2.792968-1.554688-5.359374-4.03125-6.652343zm0 0"}}),a("path",{attrs:{d:"m249.445312 312.9375c-2.480468-1.296875-5.46875-1.105469-7.765624.488281l-37.710938 26.234375c-2.019531 1.402344-3.21875 3.707032-3.21875 6.164063v38.410156c0 14.535156 11.824219 26.363281 26.363281 26.363281 14.535157 0 26.363281-11.828125 26.363281-26.363281v-64.644531c0-2.796875-1.554687-5.359375-4.03125-6.652344zm0 0"}}),a("path",{attrs:{d:"m109.457031 410.3125c-2.480469-1.292969-5.46875-1.105469-7.765625.492188l-37.710937 26.230468c-2.015625 1.40625-3.21875 3.707032-3.21875 6.164063v42.4375c0 14.535156 11.824219 26.363281 26.363281 26.363281 14.535156 0 26.363281-11.828125 26.363281-26.363281v-68.667969c0-2.796875-1.554687-5.359375-4.03125-6.65625zm0 0"}})]),a("path",{attrs:{d:"m333.210938 254.667969c-2.476563-1.296875-5.46875-1.105469-7.761719.488281l-14.570313 10.136719v134.863281c0 9.738281-5.308594 18.253906-13.179687 22.816406 3.878906 2.253906 8.378906 3.546875 13.179687 3.546875 14.535156 0 26.363282-11.824219 26.363282-26.363281v-138.835938c0-2.792968-1.554688-5.359374-4.03125-6.652343zm0 0",fill:"#f7d36f"}}),a("path",{attrs:{d:"m249.445312 312.9375c-2.480468-1.296875-5.46875-1.105469-7.765624.488281l-14.566407 10.136719v60.671875c0 9.738281-5.3125 18.25-13.183593 22.816406 3.882812 2.25 8.382812 3.546875 13.183593 3.546875 14.535157 0 26.363281-11.824218 26.363281-26.363281v-64.644531c0-2.796875-1.554687-5.359375-4.03125-6.652344zm0 0",fill:"#f7d36f"}}),a("path",{attrs:{d:"m109.457031 410.3125c-2.480469-1.292969-5.46875-1.105469-7.765625.492188l-14.566406 10.132812v64.699219c0 9.734375-5.3125 18.25-13.183594 22.816406 3.882813 2.25 8.382813 3.542969 13.183594 3.542969 14.535156 0 26.363281-11.824219 26.363281-26.359375v-68.671875c0-2.792969-1.554687-5.355469-4.03125-6.652344zm0 0",fill:"#f7d36f"}}),a("path",{attrs:{d:"m372.203125 231.78125c-.988281-1.417969-1.730469-2.957031-2.199219-4.5625-.058594-.1875-5.761718-19.207031-25.476562-46.265625-18.65625-25.601563-53.507813-62.746094-113.589844-94.300781-60.085938-31.554688-110.445312-39.164063-142.113281-39.988282-33.449219-.882812-52.359375 5.222657-52.546875 5.285157-1.574219.515625-3.234375.777343-4.941406.777343-.035157 0-.074219 0-.101563 0-1.980469 0-3.882813.78125-5.285156 2.175782-1.417969 1.402344-2.214844 3.308594-2.222657 5.300781l-1.707031 409.914063c-.011719 2.800781 1.535157 5.375 4.015625 6.679687 1.097656.574219 2.296875.859375 3.488282.859375 1.507812 0 3.007812-.453125 4.289062-1.34375l336.511719-234.082031c3.402343-2.367188 4.246093-7.046875 1.878906-10.449219zm0 0",fill:"#ffdb57"}}),a("path",{attrs:{d:"m26.035156 476.796875c1.097656.578125 2.292969.859375 3.488282.859375 1.507812 0 3.007812-.453125 4.289062-1.34375l336.511719-234.082031c3.402343-2.367188 4.242187-7.046875 1.875-10.449219-.984375-1.417969-1.726563-2.957031-2.199219-4.5625-.035156-.125-2.679688-8.917969-10.511719-22.992188l-337.335937 233.886719-.132813 32.007813c-.011719 2.796875 1.535157 5.375 4.015625 6.675781zm0 0",fill:"#f6c134"}}),a("path",{attrs:{d:"m151.324219 159.882812c-25.960938 0-47.082031 21.121094-47.082031 47.078126 0 25.960937 21.121093 47.078124 47.082031 47.078124 25.960937 0 47.078125-21.117187 47.078125-47.078124 0-25.960938-21.117188-47.078126-47.078125-47.078126zm0 0",fill:"#f2433b"}}),a("path",{attrs:{d:"m151.324219 220.960938c-20.140625 0-37.363281-12.71875-44.074219-30.539063-1.9375 5.148437-3.007812 10.71875-3.007812 16.539063 0 25.960937 21.121093 47.078124 47.078124 47.078124 25.960938 0 47.082032-21.117187 47.082032-47.078124 0-5.816407-1.070313-11.390626-3.007813-16.539063-6.710937 17.820313-23.929687 30.539063-44.070312 30.539063zm0 0",fill:"#d83636"}}),a("path",{attrs:{d:"m63.203125 236.761719c-8.625-8.824219-20.164063-13.855469-32.492187-14.160157-2.011719-.027343-3.96875.714844-5.417969 2.117188-1.445313 1.40625-2.265625 3.335938-2.273438 5.355469l-.328125 79.101562c-.011718 2.019531.792969 3.953125 2.230469 5.371094 1.40625 1.390625 3.300781 2.167969 5.273437 2.167969h.125c25.523438-.425782 46.285157-21.539063 46.285157-47.0625 0-12.367188-4.761719-24.050782-13.402344-32.890625zm0 0",fill:"#f2433b"}}),a("path",{attrs:{d:"m30.320312 283.164062c-.042968.003907-.082031.003907-.125.003907-1.972656 0-3.867187-.777344-5.277343-2.167969-1.089844-1.078125-1.816407-2.457031-2.097657-3.941406l-.132812 32.117187c-.007812 2.019531.796875 3.953125 2.230469 5.371094 1.40625 1.390625 3.300781 2.167969 5.277343 2.167969h.125c25.519532-.425782 46.28125-21.539063 46.28125-47.0625 0-5.847656-1.074218-11.535156-3.109374-16.84375-6.699219 17.429687-23.519532 30.03125-43.171876 30.355468zm0 0",fill:"#d83636"}}),a("path",{attrs:{d:"m260.867188 236.109375c-25.960938 0-47.078126 21.121094-47.078126 47.078125 0 19.109375 11.410157 36.183594 29.066407 43.503906.925781.382813 1.902343.570313 2.875.570313 1.511719 0 3.007812-.453125 4.285156-1.34375l54.675781-38.03125c2.09375-1.460938 3.308594-3.882813 3.214844-6.4375-.925781-25.425781-21.589844-45.339844-47.039062-45.339844zm0 0",fill:"#f2433b"}}),a("path",{attrs:{d:"m322.597656 154.710938c-14.695312-15.519532-31.695312-30.039063-50.535156-43.152344-1.804688-1.253906-4.058594-1.652344-6.179688-1.105469-20.726562 5.390625-35.199218 24.128906-35.199218 45.5625 0 25.960937 21.121094 47.082031 47.078125 47.082031 24.371093 0 44.515625-18.273437 46.855469-42.503906.207031-2.164062-.527344-4.308594-2.019532-5.882812zm0 0",fill:"#f2433b"}}),a("path",{attrs:{d:"m316.4375 148.410156c-8.515625 12.257813-22.683594 20.121094-38.675781 20.121094-19.867188 0-36.886719-12.375-43.789063-29.816406-2.128906 5.390625-3.289062 11.238281-3.289062 17.300781 0 25.960937 21.121094 47.078125 47.078125 47.078125 24.371093 0 44.515625-18.269531 46.855469-42.503906.207031-2.160156-.527344-4.304688-2.019532-5.882813-2.007812-2.117187-4.066406-4.214843-6.160156-6.296875zm0 0",fill:"#d83636"}}),a("path",{attrs:{d:"m163.125 62.675781c-.695312-2.5625-2.6875-4.5625-5.246094-5.273437-23.667968-6.546875-46.898437-10.160156-69.054687-10.738282-1.59375-.042968-3.144531-.0625-4.667969-.074218-.019531 0-.039062 0-.058594 0-2.585937 0-4.996094 1.332031-6.367187 3.53125-4.660157 7.464844-7.121094 16.074218-7.121094 24.890625 0 25.960937 21.121094 47.078125 47.078125 47.078125 25.960938 0 47.082031-21.117188 47.082031-47.078125 0-4.160157-.554687-8.308594-1.644531-12.335938zm0 0",fill:"#f2433b"}}),a("path",{attrs:{d:"m160.949219 59.125c-7.214844 16.757812-23.886719 28.523438-43.261719 28.523438-19.886719 0-36.921875-12.402344-43.808594-29.871094-2.148437 5.460937-3.269531 11.296875-3.269531 17.234375 0 25.960937 21.121094 47.082031 47.078125 47.082031 25.960938 0 47.078125-21.121094 47.078125-47.082031 0-4.15625-.550781-8.308594-1.644531-12.335938-.375-1.390625-1.144532-2.609375-2.171875-3.550781zm0 0",fill:"#d83636"}}),a("path",{attrs:{d:"m182.796875 365.488281c-7.3125-17.675781-24.390625-29.09375-43.511719-29.09375-25.960937 0-47.082031 21.117188-47.082031 47.078125 0 13.058594 5.503906 25.648438 15.09375 34.535156 1.433594 1.324219 3.261719 2 5.105469 2 1.492187 0 2.988281-.441406 4.285156-1.34375l63.460938-44.144531c2.894531-2.011719 3.996093-5.769531 2.648437-9.03125zm0 0",fill:"#f2433b"}}),a("path",{attrs:{d:"m414.761719 214.066406c-1.183594-4.035156-30.511719-99.550781-162.042969-168.667968-.050781-.027344-.097656-.054688-.148438-.078126-131.582031-69.078124-226.878906-39-230.871093-37.6875-16.148438 5.3125-24.964844 22.777344-19.652344 38.925782 2.574219 7.824218 8.039063 14.175781 15.390625 17.886718 7.351562 3.714844 15.710938 4.339844 23.445312 1.792969.171876-.054687 17.617188-5.34375 47.550782-4.566406 30.074218.785156 77.996094 8.0625 135.523437 38.273437 57.527344 30.210938 90.71875 65.535157 108.433594 89.847657 17.632813 24.199219 23.175781 41.570312 23.203125 41.652343 2.324219 7.902344 7.582031 14.425782 14.8125 18.371094 4.597656 2.511719 9.636719 3.785156 14.730469 3.785156 2.917969 0 5.855469-.417968 8.734375-1.265624 7.902344-2.320313 14.425781-7.582032 18.375-14.8125 3.941406-7.226563 4.835937-15.558594 2.515625-23.457032zm0 0",fill:"#ff9f34"}}),a("path",{attrs:{d:"m396.789062 229.300781c-.03125-.101562-6.640624-20.800781-27.648437-49.636719-21.113281-28.972656-60.667969-71.066406-129.21875-107.070312-68.554687-36-125.660156-44.671875-161.496094-45.609375-35.675781-.925781-56.460937 5.378906-56.667969 5.445313-6.855468 2.253906-14.121093 2.417968-20.996093.53125-.582031 4.4375-.207031 9.070312 1.285156 13.597656 2.574219 7.824218 8.039063 14.175781 15.390625 17.886718 7.351562 3.714844 15.710938 4.339844 23.445312 1.792969.171876-.054687 17.617188-5.34375 47.550782-4.566406 30.074218.785156 77.996094 8.0625 135.523437 38.273437 57.527344 30.210938 90.71875 65.535157 108.433594 89.847657 17.632813 24.199219 23.175781 41.570312 23.203125 41.652343 2.324219 7.902344 7.582031 14.425782 14.8125 18.371094 4.597656 2.511719 9.636719 3.785156 14.730469 3.785156 2.917969 0 5.855469-.417968 8.734375-1.265624 4.734375-1.390626 8.972656-3.84375 12.460937-7.140626-4.449219-4.339843-7.742187-9.765624-9.542969-15.894531zm0 0",fill:"#fb8f2d"}}),a("path",{attrs:{d:"m242.855469 326.691406c.925781.382813 1.902343.570313 2.875.570313 1.511719 0 3.007812-.453125 4.285156-1.34375l54.675781-38.03125c2.09375-1.460938 3.308594-3.882813 3.214844-6.4375-.457031-12.507813-5.695312-23.675781-13.925781-31.804688l-76.105469 52.769531c4.804688 10.769532 13.589844 19.554688 24.980469 24.277344zm0 0",fill:"#d83636"}}),a("path",{attrs:{d:"m107.300781 418.007812c1.429688 1.324219 3.261719 2 5.101563 2 1.492187 0 2.992187-.441406 4.285156-1.34375l63.460938-44.144531c2.894531-2.011719 3.996093-5.773437 2.648437-9.03125-4.328125-10.464843-12.082031-18.734375-21.65625-23.742187l-68.558594 47.535156c1.371094 10.925781 6.558594 21.167969 14.71875 28.726562zm0 0",fill:"#d83636"}})])},s=[],i=(a("58e5"),a("2877")),n={},r=Object(i["a"])(n,c,s,!0,null,"0f23b7e7",null);e["a"]=r.exports},f348:function(t,e,a){}}]);
//# sourceMappingURL=chunk-49790eae.74cbb2cf.js.map