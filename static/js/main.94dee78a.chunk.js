(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var a,n=c(24),s=c.n(n),r=c(8),i=c(3),o=c(7),l=(c(29),c(9)),u=c.n(l),j=c(1);!function(e){e.Phones="phones",e.Tablets="tablets",e.Accessories="accessories"}(a||(a={}));var d,b=c(4);c(30);!function(e){e.perPage="perPage",e.activePage="activePage",e.sortBy="sortBy",e.query="query"}(d||(d={}));var m,_=c(0),O=function(e){var t=e.page,c=Object(r.d)(),a=Object(b.a)(c,2),n=a[0],s=a[1],i=n.get(d.query)||"",o=Object(j.useState)(i),l=Object(b.a)(o,2),m=l[0],O=l[1],h=Object(j.useRef)(0);return Object(j.useEffect)((function(){window.clearTimeout(h.current),h.current=window.setTimeout((function(){!function(e){var t=new URLSearchParams(n);""!==e?t.set(d.query,e):t.delete(d.query),s(t)}(m)}),1e3)}),[m]),Object(_.jsxs)("div",{className:"Search",children:[Object(_.jsx)("input",{type:"text",className:"Search__input",placeholder:"Search in ".concat(t,"..."),value:m,onChange:function(e){return O(e.target.value)}}),Object(_.jsx)("button",{type:"button",className:u()("Search__icon",{"Search__icon--not-empty-search":""!==i}),"aria-label":"Clear search",onClick:function(){return O("")}})]})},h=Object(j.createContext)({cartItems:[],setCartItems:function(){},totalSum:0,totalQuantity:0}),p=function(e){var t=e.children,c=Object(j.useState)([]),a=Object(b.a)(c,2),n=a[0],s=a[1],r=0,i=0;return n.forEach((function(e){r+=e.product.price*e.quantity,i+=e.quantity})),Object(j.useEffect)((function(){var e=localStorage.getItem("cartItems");if(null!==e)try{s(JSON.parse(e))}catch(t){localStorage.removeItem("cartItems")}}),[]),Object(_.jsx)(h.Provider,{value:{cartItems:n,setCartItems:s,totalSum:r,totalQuantity:i},children:t})},g=Object(j.createContext)({favourites:[],setFavourites:function(){}}),x=function(e){var t=e.children,c=Object(j.useState)([]),a=Object(b.a)(c,2),n=a[0],s=a[1];return Object(j.useEffect)((function(){var e=localStorage.getItem("favourites");if(null!==e)try{s(JSON.parse(e))}catch(t){localStorage.removeItem("favourites")}}),[]),Object(_.jsx)(g.Provider,{value:{favourites:n,setFavourites:s},children:t})},v=["home"].concat(Object(o.a)(Object.values(a))),f=function(){var e=Object(i.m)(),t=Object(j.useContext)(h).totalQuantity,c=Object(j.useContext)(g).favourites,n=function(){var t=e.pathname.lastIndexOf("/");return e.pathname.slice(t+1)},s=[].concat(Object(o.a)(Object.values(a)),["favourites"]).includes(n()),l=e.pathname.includes("cart");return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("header",{className:"header",children:Object(_.jsx)("div",{className:"container",children:Object(_.jsxs)("div",{className:"header__content",children:[Object(_.jsx)(r.b,{to:"/",className:"logo header__logo",children:"Logo"}),!l&&Object(_.jsx)("nav",{className:"nav",children:Object(_.jsx)("ul",{className:"nav__list",children:v.map((function(e){return Object(_.jsx)("li",{className:"nav__item",children:Object(_.jsx)(r.c,{to:"home"===e?"/":e,className:function(e){var t=e.isActive;return u()("nav__link",{"nav__link--active":t})},children:e})},e)}))})}),Object(_.jsx)("div",{className:"header__stretchable-block"}),s&&Object(_.jsx)("div",{className:"header__search-wrapper",children:Object(_.jsx)(O,{page:n()})}),!l&&Object(_.jsx)(r.c,{to:"favourites",className:function(e){var t=e.isActive;return u()("nav__link","nav__link--favourites",{"nav__link--active":t})},children:c.length>0&&Object(_.jsx)("div",{className:"App__total-quantity",children:c.length})}),Object(_.jsx)(r.c,{to:"cart",className:function(e){var t=e.isActive;return u()("nav__link","nav__link--cart",{"nav__link--active":t})},children:t>0&&Object(_.jsx)("div",{className:"App__total-quantity",children:t})})]})})}),Object(_.jsx)("main",{className:"App__main",children:Object(_.jsx)("div",{className:"container container--main",children:Object(_.jsx)(i.a,{})})}),Object(_.jsx)("footer",{className:"footer",children:Object(_.jsx)("div",{className:"container container--main",children:Object(_.jsxs)("div",{className:"footer__content",children:[Object(_.jsx)(r.b,{to:"/",className:"logo",children:"Logo"}),Object(_.jsx)("nav",{className:"nav footer__nav",children:Object(_.jsxs)("ul",{className:"nav__list",children:[Object(_.jsx)("li",{className:"nav__item",children:Object(_.jsx)("a",{href:"https://github.com/denis-kononenko/react_phone-catalog",className:"nav__link",children:"Github"})}),Object(_.jsx)("li",{className:"nav__item",children:Object(_.jsx)("a",{href:"#contacts",className:"nav__link",children:"Contacts"})}),Object(_.jsx)("li",{className:"nav__item",children:Object(_.jsx)("a",{href:"#rights",className:"nav__link",children:"Rights"})})]})}),Object(_.jsx)("button",{type:"button",className:"footer__to-top",onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})},children:"Back to top"})]})})})]})},P=c(6),N=(c(33),c(34),"https://mate-academy.github.io/react_phone-catalog/_new"),y=(c(35),function(e){var t=e.product,c=Object(j.useContext)(h),a=c.cartItems,n=c.setCartItems,s=Object(j.useContext)(g),r=s.favourites,i=s.setFavourites,l=a.findIndex((function(e){return e.itemId===(null===t||void 0===t?void 0:t.itemId)}))>-1,d=r.findIndex((function(e){return e.itemId===(null===t||void 0===t?void 0:t.itemId)}))>-1;return Object(_.jsxs)("div",{className:"Actions",children:[Object(_.jsx)("button",{type:"button",className:u()("Actions__add-to-cart","button",{"button--added-to-cart":l}),onClick:function(e){if(e.preventDefault(),t){var c=t.itemId,s=[].concat(Object(o.a)(a),[{itemId:c,quantity:1,product:t}]);n(s),localStorage.setItem("cartItems",JSON.stringify(s))}},disabled:l,children:"".concat(l?"Added":"Add"," to cart")}),Object(_.jsx)("button",{type:"button","aria-label":"Add to favourites",className:u()("Actions__add-to-favourites",{"Actions__add-to-favourites--added":d}),onClick:function(e){if(e.preventDefault(),t){var c=d?r.filter((function(e){return e.itemId!==t.itemId})):[].concat(Object(o.a)(r),[t]);i(c),localStorage.setItem("favourites",JSON.stringify(c))}},"data-cy":"addToFavorite"})]})});!function(e){e.Screen="screen",e.Capacity="capacity",e.Ram="ram"}(m||(m={}));var C,S=function(e){var t=e.product,c=t.itemId,a=t.image,n=t.name,s=t.price,i=t.fullPrice,o=t.category;return Object(_.jsxs)(r.b,{to:"/".concat(o,"/").concat(c),className:"ProductCard","data-cy":"cardsContainer",children:[Object(_.jsx)("div",{className:"ProductCard__image-wrapper",children:Object(_.jsx)("img",{src:"".concat(N,"/").concat(a),alt:n,className:"ProductCard__image"})}),Object(_.jsxs)("div",{className:"ProductCard__info",children:[Object(_.jsx)("h2",{className:"ProductCard__title",children:n.toLowerCase()}),Object(_.jsxs)("div",{className:"ProductCard__price price",children:[Object(_.jsxs)("span",{className:"price__discount",children:["$",s]}),Object(_.jsxs)("span",{className:"price__full",children:["$",i]})]}),Object(_.jsx)("ul",{className:"ProductCard__properties",children:Object.values(m).map((function(e){return Object(_.jsxs)("li",{className:"ProductCard__property",children:[Object(_.jsx)("span",{className:u()("ProductCard__property-name",{"ProductCard__property-name--ram":e===m.Ram}),children:e}),Object(_.jsx)("span",{className:"ProductCard__property-value",children:t[e]})]},e)}))}),Object(_.jsx)(y,{product:t})]})]})},I=(c(36),function(e){var t=e.sliderTitle,c=e.products,a=Object(j.useState)(0),n=Object(b.a)(a,2),s=n[0],r=n[1],i=100/c.length,o=2*i,l=100-4*i,u=0===s,d=s===l,m={width:"".concat(c.length/4*100,"%"),transform:"translateX(-".concat(s,"%)")};return Object(_.jsxs)("div",{className:"ProductsSlider",children:[Object(_.jsxs)("div",{className:"ProductsSlider__title-wrapper",children:[Object(_.jsx)("h2",{className:"title",children:t}),Object(_.jsxs)("div",{className:"ProductsSlider__buttons",children:[Object(_.jsx)("button",{type:"button","aria-label":"Previous",className:"ProductsSlider__button ProductsSlider__button--previous",onClick:function(){r((function(e){return e-o<0?0:e-o}))},disabled:u}),Object(_.jsx)("button",{type:"button","aria-label":"Next",className:"ProductsSlider__button ProductsSlider__button--next",onClick:function(){r((function(e){return e+o>l?l:e+o}))},disabled:d})]})]}),Object(_.jsx)("div",{className:"ProductsSlider__slides-wrapper",children:Object(_.jsx)("div",{className:"ProductsSlider__slides",style:m,children:c.map((function(e){return Object(_.jsx)(S,{product:e},e.id)}))})})]})}),w=(c(37),["img/banner-phones.png","img/banner-tablets.png","img/banner-accessories.png"]),k=function(){var e=Object(j.useState)(0),t=Object(b.a)(e,2),c=t[0],a=t[1],n=100/w.length,s=Object(j.useRef)(0),r={width:"".concat(100*w.length,"%"),transform:"translateX(-".concat(n*c,"%)")},i=function e(){clearInterval(s.current),a((function(e){return e+1>w.length-1?0:e+1})),s.current=window.setInterval(e,5e3)};return Object(j.useEffect)((function(){return s.current=window.setInterval(i,5e3),function(){return clearInterval(s.current)}}),[]),Object(_.jsxs)("div",{className:"ImagesSlider",children:[Object(_.jsxs)("div",{className:"ImagesSlider__wrapper",children:[Object(_.jsx)("button",{type:"button",className:"ImagesSlider__button ImagesSlider__button--previous","aria-label":"Previous",onClick:function(){clearInterval(s.current),a((function(e){return e-1<0?w.length-1:e-1})),s.current=window.setInterval(i,5e3)}}),Object(_.jsx)("div",{className:"ImagesSlider__slides-wrapper",children:Object(_.jsx)("div",{className:"ImagesSlider__slides",style:r,children:w.map((function(e,t){return Object(_.jsx)("div",{className:"ImagesSlider__slide",children:Object(_.jsx)("img",{src:"".concat(N,"/").concat(e),alt:"Slide ".concat(t+1),className:"ImagesSlider__slide-image"})},e)}))})}),Object(_.jsx)("button",{type:"button",className:"ImagesSlider__button ImagesSlider__button--next","aria-label":"Next",onClick:i})]}),Object(_.jsx)("div",{className:"ImagesSlider__indicators",children:w.map((function(e,t){return Object(_.jsx)("button",{type:"button","aria-label":"indicator",className:u()("ImagesSlider__indicator",{"ImagesSlider__indicator--active":t===c}),onClick:function(){return function(e){clearInterval(s.current),a(e),s.current=window.setInterval(i,5e3)}(t)}},e)}))})]})},D=function(e){return e===a.Phones?"Mobile ".concat(e):e[0].toUpperCase()+e.slice(1)},q=Object(j.createContext)({products:[],isLoading:!1}),A=function(e){var t=e.children,c=Object(j.useState)([]),a=Object(b.a)(c,2),n=a[0],s=a[1],r=Object(j.useState)(!1),i=Object(b.a)(r,2),o=i[0],l=i[1];return Object(j.useEffect)((function(){l(!0),fetch("".concat(N,"/products.json")).then((function(e){return e.json()})).then(s).finally((function(){return l(!1)}))}),[]),Object(_.jsx)(q.Provider,{value:{products:n,isLoading:o},children:t})},T=function(){var e,t=Object(j.useContext)(q).products,c=Object(o.a)(t).sort((function(e,t){return t.fullPrice-t.price-(e.fullPrice-e.price)})),n=Object(o.a)(t).sort((function(e,t){return t.price-e.price})),s=(e={},Object(P.a)(e,a.Phones,0),Object(P.a)(e,a.Tablets,0),Object(P.a)(e,a.Accessories,0),e);return t.forEach((function(e){switch(e.category){case a.Phones:s[a.Phones]+=1;break;case a.Tablets:s[a.Tablets]+=1;break;case a.Accessories:s[a.Accessories]+=1}})),Object(_.jsxs)("div",{className:"HomePage",children:[Object(_.jsx)("section",{className:"HomePage__section",children:Object(_.jsx)(k,{})}),Object(_.jsx)("section",{className:"HomePage__section",children:Object(_.jsx)(I,{sliderTitle:"Hot prices",products:c})}),Object(_.jsxs)("section",{className:"HomePage__section",children:[Object(_.jsx)("h2",{className:"HomePage__section-title title",children:"Shop by category"}),Object(_.jsx)("div",{className:"HomePage__categories",children:Object.values(a).map((function(e){return Object(_.jsxs)(r.b,{to:"".concat(e),className:"HomePage__category","data-cy":"categoryLinksContainer",children:[Object(_.jsx)("div",{className:"HomePage__category-image-wrapper",children:Object(_.jsx)("div",{className:"HomePage__category-image HomePage__category-image--".concat(e)})}),Object(_.jsx)("h3",{className:"HomePage__category-title",children:D(e)}),Object(_.jsx)("span",{className:"HomePage__category-info",children:"".concat(s[e]||"No"," models")})]},e)}))})]}),Object(_.jsx)(I,{sliderTitle:"Brand new models",products:n})]})},B=(c(38),c(39),function(){return Object(_.jsx)("div",{className:"Loader"})}),L=(c(40),function(){var e=Object(i.m)().pathname.split("/").slice(1),t="";return Object(_.jsxs)("div",{className:"BreadCrumbs","data-cy":"breadCrumbs",children:[Object(_.jsx)(r.b,{to:"/",className:"BreadCrumbs__crumb BreadCrumbs__crumb--home"}),e.map((function(c,a){var n=a===e.length-1;return t+="/".concat(c),Object(_.jsx)("div",{className:"BreadCrumbs__crumb",children:n?Object(_.jsx)("span",{children:c}):Object(_.jsx)(r.b,{to:t,children:c})},c)}))]})}),H=(c(41),function(e){var t=e.productsCount,c=e.perPage,a=e.activePage,n=e.setActivePage,s=Object(j.useMemo)((function(){return Math.ceil(t/c)}),[t,c]),r=Object(j.useMemo)((function(){for(var e=[],t=1;t<=s;t+=1)e.push(t);return e}),[s]),i=1===a,o=a===s;return Object(_.jsxs)("div",{className:"Pagination",children:[Object(_.jsx)("button",{type:"button","aria-label":"Previous","data-cy":"paginationLeft",className:"Pagination__button Pagination__button--previous",onClick:function(){n(a>1?a-1:1)},disabled:i}),Object(_.jsx)("div",{className:"Pagination__pages",children:r.map((function(e){return Object(_.jsx)("button",{type:"button",className:u()("Pagination__button","Pagination__button--page",{"Pagination__button--active":e===a}),onClick:function(){return n(e)},children:e},e)}))}),Object(_.jsx)("button",{type:"button","aria-label":"Next","data-cy":"paginationRight",className:"Pagination__button Pagination__button--next",onClick:function(){n(a<s?a+1:s)},disabled:o})]})});!function(e){e.Age="age",e.Name="name",e.Price="price"}(C||(C={}));var F=["4","8","16","all"],R=function(e){var t=e.title,c=e.products,a=Object(r.d)(),n=Object(b.a)(a,2),s=n[0],i=n[1],o=Object(j.useContext)(q).isLoading,l=s.get(d.query)||"",u=s.get(d.perPage)||F[2],m="all"!==u?Number(u):c.length,O=Number(s.get(d.activePage))||1,h=s.get(d.sortBy)||C.Age,p=m*(O-1),g=p+m,x=""===l?c:c.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())})),v=x.sort((function(e,t){switch(h){case C.Age:return t.year-e.year;case C.Name:return e.name.localeCompare(t.name);case C.Price:return t.price-e.price;default:return 0}})).slice(p,g),f=function(e,t){var c=new URLSearchParams(s);e===d.perPage&&c.set(d.activePage,"1"),c.set(e,t),i(c)};return Object(_.jsxs)("div",{className:"PageContent",children:[Object(_.jsx)("div",{className:"PageContent__breadcrumbs-wrapper",children:Object(_.jsx)(L,{})}),o&&Object(_.jsx)(B,{}),!o&&!c.length&&Object(_.jsx)("div",{children:"".concat(D(t)," not found")}),!o&&!!c.length&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h1",{className:"PageContent__title title",children:D(t)}),Object(_.jsx)("div",{className:"PageContent__info",children:"".concat(c.length," models")}),Object(_.jsxs)("div",{className:"PageContent__params",children:[Object(_.jsxs)("div",{className:"PageContent__sort-param",children:[Object(_.jsx)("label",{htmlFor:"sortParams",className:"PageContent__label",children:"Sort by"}),Object(_.jsxs)("select",{id:"sortParams",className:"PageContent__select",value:h,onChange:function(e){f(d.sortBy,e.target.value)},children:[Object(_.jsx)("option",{value:C.Age,children:"Newest"}),Object(_.jsx)("option",{value:C.Name,children:"Alphabetically"}),Object(_.jsx)("option",{value:C.Price,children:"Cheapest"})]})]}),Object(_.jsxs)("div",{className:"PageContent__items-number",children:[Object(_.jsx)("label",{htmlFor:"itemsNumber",className:"PageContent__label",children:"Items on page"}),Object(_.jsx)("select",{id:"itemsNumber",className:"PageContent__select",onChange:function(e){f(d.perPage,e.target.value)},value:u,children:F.map((function(e){return Object(_.jsx)("option",{value:e,children:e[0].toUpperCase()+e.slice(1)},e)}))})]})]}),x.length?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{"data-cy":"productList",className:"PageContent__products",children:v.map((function(e){return Object(_.jsx)(S,{product:e},e.id)}))}),Object(_.jsx)("div",{className:"PageContent__pagination-wrapper",children:m<x.length&&Object(_.jsx)(H,{productsCount:x.length,perPage:m,activePage:O,setActivePage:function(e){f(d.activePage,String(e))}})})]}):Object(_.jsx)("div",{className:"PageContent__no-search-results title",children:"No search results"})]})]})},E=function(){var e=Object(j.useContext)(q).products.filter((function(e){return e.category===a.Phones}));return Object(_.jsx)(R,{title:a.Phones,products:e})},J=function(){var e=Object(j.useContext)(q).products.filter((function(e){return e.category===a.Tablets}));return Object(_.jsx)(R,{title:a.Tablets,products:e})},M=function(){var e=Object(j.useContext)(q).products.filter((function(e){return e.category===a.Accessories}));return Object(_.jsx)(R,{title:a.Accessories,products:e})},$=c(11),Q=(c(42),c(43),function(){var e=Object(i.o)();return Object(_.jsx)("div",{className:"Back","data-cy":"backButton",children:Object(_.jsx)("button",{type:"button",className:"Back__button",onClick:function(){return e(-1)},children:"Back"})})}),U=function(){var e=Object(j.useState)({}),t=Object(b.a)(e,2),c=t[0],a=t[1],n=Object(j.useState)(!1),s=Object(b.a)(n,2),r=s[0],o=s[1],l=Object(j.useState)(!1),d=Object(b.a)(l,2),m=d[0],O=d[1],h=Object(j.useState)(0),p=Object(b.a)(h,2),g=p[0],x=p[1],v=Object(i.q)().productId,f=void 0===v?"":v,P=Object(j.useContext)(q).products,C=!!Object.values(c).length,S=c.name,w=c.screen,k=c.resolution,D=c.processor,A=c.ram,T=c.capacity,H=c.camera,F=c.zoom,R=c.cell,E=c.description,J=c.images,M=void 0===J?[]:J,U=c.priceDiscount,z=c.priceRegular,X={screen:w,resolution:k,processor:D,ram:A},Y=Object($.a)(Object($.a)({},X),{},{"built in memory":T,camera:H,zoom:F,cell:R}),G=P.find((function(e){return e.itemId===f}));Object(j.useEffect)((function(){o(!0),function(e){return fetch("".concat(N,"/products/").concat(e,".json")).then((function(e){return e.json()}))}(f).then((function(e){a(e),O(!1)})).catch((function(){return O(!0)})).finally((function(){return o(!1)}))}),[f]);var W=function(e){return Object.entries(e).map((function(e){return Object(_.jsxs)("li",{className:"ProductDetailsPage__spec",children:[Object(_.jsx)("span",{className:"ProductDetailsPage__spec-name",children:"ram"!==e[0]?e[0]:e[0].toUpperCase()}),Object(_.jsx)("span",{className:"ProductDetailsPage__spec-value",children:"cell"!==e[0]?e[1]:e[1].join(", ")})]},e[0])}))};return Object(_.jsxs)("div",{className:"ProductDetailsPage",children:[r&&Object(_.jsx)(B,{}),!r&&m&&Object(_.jsx)("div",{className:"ProductDetailsPage__details-not-found title",children:"Phone was not found"}),!r&&!m&&C&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:"ProductDetailsPage__breadcrumbs-wrapper",children:Object(_.jsx)(L,{})}),Object(_.jsx)("div",{className:"ProductDetailsPage__back-wrapper",children:Object(_.jsx)(Q,{})}),Object(_.jsx)("h1",{className:"ProductDetailsPage__title",children:S}),Object(_.jsxs)("div",{className:"ProductDetailsPage__details",children:[Object(_.jsxs)("div",{className:"ProductDetailsPage__images",children:[Object(_.jsx)("div",{className:"ProductDetailsPage__small-images",children:M.map((function(e,t){return Object(_.jsx)("button",{type:"button",className:u()("ProductDetailsPage__image-wrapper",{"ProductDetailsPage__image-wrapper--active":t===g}),onClick:function(){return x(t)},children:Object(_.jsx)("img",{src:"".concat(N,"/").concat(e),alt:String(t),className:"ProductDetailsPage__image"})},e)}))}),Object(_.jsx)("div",{className:"ProductDetailsPage__big-image-wrapper",children:Object(_.jsx)("img",{src:"".concat(N,"/").concat(M[g]),alt:"Big",className:"ProductDetailsPage__image"})})]}),Object(_.jsxs)("div",{className:"ProductDetailsPage__info",children:[Object(_.jsxs)("div",{className:"ProductDetailsPage__price price",children:[Object(_.jsxs)("span",{className:"price__discount price__discount--font-size--32px",children:["$",U]}),Object(_.jsxs)("span",{className:"price__full",children:["$",z]})]}),Object(_.jsx)("div",{className:"ProductDetailsPage__actions-wrapper",children:Object(_.jsx)(y,{product:G})}),Object(_.jsx)("ul",{className:" ProductDetailsPage__specs ProductDetailsPage__specs--12px-600 ",children:W(X)})]}),Object(_.jsxs)("div",{"data-cy":"productDescription",children:[Object(_.jsx)("h2",{className:"ProductDetailsPage__subtitle",children:"About"}),Object(_.jsx)("div",{className:"ProductDetailsPage__about",children:E.map((function(e){return e.text.map((function(e){return Object(_.jsx)("p",{children:e},e)}))}))})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("h2",{className:"ProductDetailsPage__subtitle",children:"Tech specs"}),Object(_.jsx)("ul",{className:"ProductDetailsPage__specs",children:W(Y)})]})]}),Object(_.jsx)(I,{sliderTitle:"You may also like",products:function(e){for(var t=function(){return Math.floor(Math.random()*P.length)},c=[],a=0;a<e;a+=1){for(var n=t();c.includes(P[n]);)n=t();c.push(P[n])}return c}(10)})]})]})},z=(c(44),function(){var e=Object(j.useContext)(h),t=e.cartItems,c=e.setCartItems,a=e.totalSum,n=e.totalQuantity,s=Object(j.useState)(!1),r=Object(b.a)(s,2),i=r[0],l=r[1],d=Object(j.useRef)(0);return Object(_.jsxs)("div",{className:"CartPage",children:[Object(_.jsx)("div",{className:"CartPage__back-wrapper",children:Object(_.jsx)(Q,{})}),Object(_.jsx)("h1",{className:"CartPage__title title",children:"Cart"}),t.length?Object(_.jsxs)("div",{className:"CartPage__content",children:[Object(_.jsx)("ul",{className:"CartPage__list",children:t.map((function(e,a){return Object(_.jsxs)("li",{className:"CartPage__item",children:[Object(_.jsx)("button",{type:"button","data-cy":"cartDeleteButton",className:"CartPage__delete-button","aria-label":"Delete from cart",onClick:function(a){return function(e,a){e.preventDefault();var n=t.filter((function(e){return e.itemId!==a}));c(n),localStorage.setItem("cartItems",JSON.stringify(n))}(a,e.itemId)}}),Object(_.jsx)("div",{className:"CartPage__image-wrapper",children:Object(_.jsx)("img",{src:"".concat(N,"/").concat(e.product.image),alt:e.product.name,className:"CartPage__image"})}),Object(_.jsx)("span",{className:"CartPage__name",children:e.product.name}),Object(_.jsxs)("div",{className:"CartPage__quantity-wrapper",children:[Object(_.jsx)("button",{type:"button",className:" CartPage__quantity-button CartPage__quantity-button--decrease ","aria-label":"Decrease quantity",onClick:function(){return function(e){var a=t[e];if(1!==a.quantity){var n=Object(o.a)(t);n.splice(e,1,Object($.a)(Object($.a)({},a),{},{quantity:a.quantity-1})),c(n),localStorage.setItem("cartItems",JSON.stringify(n))}}(a)},disabled:1===e.quantity}),Object(_.jsx)("span",{"data-cy":"productQauntity",className:"CartPage__quantity-value",children:e.quantity}),Object(_.jsx)("button",{type:"button",className:" CartPage__quantity-button CartPage__quantity-button--increase ","aria-label":"Increase quantity",onClick:function(){return function(e){var a=t[e];if(99!==a.quantity){var n=Object(o.a)(t);n.splice(e,1,Object($.a)(Object($.a)({},a),{},{quantity:a.quantity+1})),c(n),localStorage.setItem("cartItems",JSON.stringify(n))}}(a)},disabled:99===e.quantity})]}),Object(_.jsxs)("span",{className:"CartPage__price",children:["$",e.product.price]})]},e.itemId)}))}),Object(_.jsxs)("div",{className:"CartPage__total-sum-wrapper",children:[Object(_.jsxs)("div",{className:"CartPage__total-sum",children:[Object(_.jsxs)("div",{className:"CartPage__total-sum-value-wrapper",children:[Object(_.jsxs)("div",{className:"CartPage__total-sum-value",children:["$",a]}),Object(_.jsx)("span",{className:"CartPage__total-sum-info",children:"Total for ".concat(n," items")})]}),Object(_.jsx)("button",{type:"button",className:"button button--height--48px",onClick:function(){window.clearTimeout(d.current),l(!0),d.current=window.setTimeout((function(){return l(!1)}),3e3)},children:"Checkout"})]}),Object(_.jsx)("p",{className:u()("CartPage__checkout-message",{"CartPage__checkout-message--show":i}),children:"We are sorry, but this feature is not implemented yet"})]})]}):Object(_.jsx)("div",{className:"CartPage__empty title",children:"Your cart is empty"})]})}),X=function(){var e=Object(j.useContext)(g).favourites;return Object(_.jsx)(R,{title:"Favourites",products:e})},Y=(c(45),function(){return Object(_.jsx)("div",{className:"NotFoundPage title",children:"Page not found"})}),G=function(){return Object(_.jsx)(A,{children:Object(_.jsx)(x,{children:Object(_.jsx)(p,{children:Object(_.jsx)(r.a,{children:Object(_.jsx)(i.d,{children:Object(_.jsxs)(i.b,{path:"/",element:Object(_.jsx)(f,{}),children:[Object(_.jsx)(i.b,{index:!0,element:Object(_.jsx)(T,{})}),Object(_.jsx)(i.b,{path:a.Phones,element:Object(_.jsx)(E,{})}),Object(_.jsx)(i.b,{path:a.Tablets,element:Object(_.jsx)(J,{})}),Object(_.jsx)(i.b,{path:a.Accessories,element:Object(_.jsx)(M,{})}),Object(_.jsx)(i.b,{path:":category/:productId",element:Object(_.jsx)(U,{})}),Object(_.jsx)(i.b,{path:"cart",element:Object(_.jsx)(z,{})}),Object(_.jsx)(i.b,{path:"favourites",element:Object(_.jsx)(X,{})}),Object(_.jsx)(i.b,{path:"*",element:Object(_.jsx)(Y,{})})]})})})})})})};s.a.render(Object(_.jsx)(G,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.94dee78a.chunk.js.map