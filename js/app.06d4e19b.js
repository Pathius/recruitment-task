(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},a={app:0},s=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-27a43a40":"cabdfe42","chunk-3d468153":"afd16170","chunk-81fe8758":"86ae3d71","chunk-a38a2404":"1d26b991","chunk-a8736710":"5371092f"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-27a43a40":1,"chunk-3d468153":1,"chunk-81fe8758":1,"chunk-a38a2404":1,"chunk-a8736710":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-27a43a40":"a38a4777","chunk-3d468153":"d85f47fb","chunk-81fe8758":"fe6793ff","chunk-a38a2404":"8f6f3819","chunk-a8736710":"f1363546"}[e]+".css",a=c.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===a))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],d=u.getAttribute("data-href");if(d===r||d===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete i[e],p.parentNode.removeChild(p),n(s)},p.href=a;var l=document.getElementsByTagName("head")[0];l.appendChild(p)})).then((function(){i[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(e);var f=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",f.name="ChunkLoadError",f.type=r,f.request=i,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/recruitment-task/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=d;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"48f2":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("4de4"),n("b680"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("TheFooter")],1)},a=[],s=function(e,t){t._c;return t._m(0)},o=[function(e,t){var n=t._c;return n("footer",{staticClass:"footer"},[n("p",{staticClass:"footer__text"},[t._v("@2020 Pizza Corp LTD")])])}],c=(n("e31b"),n("2877")),u={},d=Object(c["a"])(u,s,o,!0,null,"3a7a236e",null),f=d.exports,p=r["a"].extend({name:"app",components:{TheFooter:f},created:function(){this.$store.dispatch("welcome/getData"),this.$store.dispatch("pizza/getData"),this.$store.dispatch("ingredients/getData")}}),l=p,h=(n("5c0b"),Object(c["a"])(l,i,a,!1,null,null,null)),g=h.exports,v=(n("d3b7"),n("8c4f")),m=(n("a4d3"),n("e01a"),n("d28b"),n("b0c0"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),b=n("2f62"),z="https://wp.recruitment.newfantastic.com/wp-json/wp/v2/pizza_sizes";r["a"].use(b["a"]);var w={namespaced:!0,state:{sizes:[],activeOption:"",sizePrice:0,orderedPizzas:[],orderedPizzasCost:0,timeLeft:1800,intervalId:0},mutations:{setData:function(e,t){return e.sizes=t},initialValues:function(e){e.activeOption="",e.sizePrice=0,e.orderedPizzas=[],e.orderedPizzasCost=0},resetPrice:function(e){return e.sizePrice=0},newPizza:function(e){e.activeOption="",e.sizePrice=0},changeOption:function(e,t){e.activeOption=t,e.sizePrice=e.activeOption.price},addPizza:function(e,t){e.orderedPizzas.push(t),e.orderedPizzasCost+=+t.sizePrice,e.orderedPizzasCost+=t.ingredientsPrice},subtractSecond:function(e){0==e.timeLeft?clearInterval(e.intervalId):e.timeLeft--},resetTimer:function(e){clearInterval(e.intervalId),e.timeLeft=1800}},actions:{getData:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var n,r,i,a,s,o,c,u,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,fetch(z);case 4:if(r=e.sent,r.ok){e.next=7;break}throw new Error(r.statusText);case 7:return e.next=9,r.json();case 9:for(r=e.sent,i=[],a=!0,s=!1,o=void 0,e.prev=14,c=r[Symbol.iterator]();!(a=(u=c.next()).done);a=!0)d=u.value,i.unshift(d.acf);e.next=22;break;case 18:e.prev=18,e.t0=e["catch"](14),s=!0,o=e.t0;case 22:e.prev=22,e.prev=23,a||null==c.return||c.return();case 25:if(e.prev=25,!s){e.next=28;break}throw o;case 28:return e.finish(25);case 29:return e.finish(22);case 30:n("setData",i),e.next=36;break;case 33:e.prev=33,e.t1=e["catch"](1),console.log("PIZZA GETDATA ERROR",e.t1);case 36:case"end":return e.stop()}}),e,null,[[1,33],[14,18,22,30],[23,,25,29]])})));function t(t){return e.apply(this,arguments)}return t}(),addPizza:function(e){var t=e.state,n=e.commit,r=e.rootState;n("addPizza",{name:t.activeOption.name,sizePrice:t.activeOption.price,ingredientsPrice:r.ingredients.ingredientsCost,ingredients:r.ingredients.ingredientsUsed}),n("resetPrice"),n("ingredients/resetPrice",null,{root:!0})}},getters:{price:function(e,t,n){return e.orderedPizzasCost+ +e.sizePrice+n.ingredients.ingredientsCost}}};r["a"].use(v["a"]);var k=function(e,t,n){""!==w.state.activeOption?n():n("/pizza")},P=function(e,t,n){w.state.orderedPizzas.length>0?n():n("/customize")},x=[{path:"/",name:"welcome",component:function(){return n.e("chunk-81fe8758").then(n.bind(null,"eec5"))}},{path:"/pizza",name:"pizza",component:function(){return n.e("chunk-a38a2404").then(n.bind(null,"2d83"))}},{path:"/customize",name:"customize",component:function(){return n.e("chunk-3d468153").then(n.bind(null,"ed64"))},beforeEnter:k},{path:"/checkout",name:"checkout",component:function(){return n.e("chunk-a8736710").then(n.bind(null,"7cb4"))},beforeEnter:P},{path:"/transaction",name:"transaction",component:function(){return n.e("chunk-27a43a40").then(n.bind(null,"0d43"))},beforeEnter:P},{path:"/*",redirect:"/"}],y=new v["a"]({routes:x,scrollBehavior:function(){return{x:0,y:0}}}),O=y,E="https://wp.recruitment.newfantastic.com/wp-json/wp/v2/pages?slug=welcome";r["a"].use(b["a"]);var j={namespaced:!0,state:{title:"",invite:""},mutations:{setData:function(e,t){var n=t.title,r=t.invite;e.title=n,e.invite=r}},actions:{getData:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,fetch(E);case 4:if(r=e.sent,r.ok){e.next=7;break}throw new Error(r.statusText);case 7:return e.next=9,r.json();case 9:r=e.sent[0],n("setData",{title:r.title.rendered,invite:r.content.rendered}),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](1),console.log("WELCOME GETDATA ERROR",e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));function t(t){return e.apply(this,arguments)}return t}()}},C=(n("13d5"),n("07ac"),"https://wp.recruitment.newfantastic.com/wp-json/wp/v2/pizza_ingredients");r["a"].use(b["a"]);var T={namespaced:!0,state:{ingredients:[],ingredientsUsed:{},ingredientsUsedWeight:[],ingredientsWeight:0,ingredientsCost:0},mutations:{setData:function(e,t){return e.ingredients=t},initialValues:function(e){e.ingredientsUsed={},e.ingredientsUsedWeight=[],e.ingredientsWeight=0,e.ingredientsCost=0},newPizza:function(e){e.ingredientsUsed={},e.ingredientsUsedWeight=[],e.ingredientsWeight=0,e.ingredientsCost=0},resetPrice:function(e){return e.ingredientsCost=0},setUsedIngredient:function(e,t){var n=t.index,r=t.name,i=t.price,a=t.units;e.ingredientsUsed[n]={name:r,price:i,units:a}},deleteUnusedIngredient:function(e,t){delete e.ingredientsUsed[t]},setIngredientsWeight:function(e,t){var n=t.index,r=t.weight;e.ingredientsUsedWeight[n]=r,e.ingredientsWeight=e.ingredientsUsedWeight.reduce((function(e,t){return e+t}),0)},setIngredientsPrice:function(e){for(var t=0,n=0,r=Object.values(e.ingredientsUsed);n<r.length;n++){var i=r[n];t+=i.price*i.units}e.ingredientsCost=t}},actions:{getData:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var n,r,i,a,s,o,c,u,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,fetch(C);case 4:if(r=e.sent,r.ok){e.next=7;break}throw new Error(r.statusText);case 7:return e.next=9,r.json();case 9:for(r=e.sent,i=[],a=!0,s=!1,o=void 0,e.prev=14,c=r[Symbol.iterator]();!(a=(u=c.next()).done);a=!0)d=u.value,i.push(d.acf);e.next=22;break;case 18:e.prev=18,e.t0=e["catch"](14),s=!0,o=e.t0;case 22:e.prev=22,e.prev=23,a||null==c.return||c.return();case 25:if(e.prev=25,!s){e.next=28;break}throw o;case 28:return e.finish(25);case 29:return e.finish(22);case 30:n("setData",i),e.next=36;break;case 33:e.prev=33,e.t1=e["catch"](1),console.log("INGREDIENTS GETDATA ERROR",e.t1);case 36:case"end":return e.stop()}}),e,null,[[1,33],[14,18,22,30],[23,,25,29]])})));function t(t){return e.apply(this,arguments)}return t}(),checkWeight:function(e,t){var n=e.state,r=e.commit,i=e.rootState,a=t.name,s=t.price,o=t.units,c=t.weight,u=t.weightPerUnit,d=t.index,f=i.pizza.activeOption.maximum_ingredients_weight,p=f-n.ingredientsWeight;if(n.ingredientsUsed[d]){var l=n.ingredientsUsed[d].units*u;p=f-(n.ingredientsWeight-l)}if(p<c){var h=Math.floor(p/u);event.target.value=h,o=h,c=u*h}o>0?r("setUsedIngredient",{index:d,name:a,price:s,units:o}):r("deleteUnusedIngredient",d),r("setIngredientsWeight",{index:d,weight:c}),r("setIngredientsPrice")}}};r["a"].use(b["a"]);var _=new b["a"].Store({modules:{welcome:j,pizza:w,ingredients:T}});r["a"].config.productionTip=!1,r["a"].filter("readablePrice",(function(e){return e>0?e.toFixed(2):0})),new r["a"]({router:O,store:_,render:function(e){return e(g)}}).$mount("#app")},e31b:function(e,t,n){"use strict";var r=n("48f2"),i=n.n(r);i.a}});
//# sourceMappingURL=app.06d4e19b.js.map