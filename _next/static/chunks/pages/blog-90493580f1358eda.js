(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7286:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(8547)}])},8993:function(e,s,n){"use strict";n.d(s,{Z:function(){return x}});var t=n(5893),i=n(7814),a=n(9417),l=n(1664),r=n.n(l),c=n(5675),d=n.n(c),o=n(4803),u=n.n(o),h=n(4572);function x(e){var s,n;let{title:l,image:c,url:o,description:x,blog_author:j,date:m}=e,p=(0,h.$)(c),g=null!==(s=j.data.attributes.name)&&void 0!==s?s:"Crowdrecht Team";return(0,t.jsxs)("article",{className:"post",children:[(0,t.jsxs)(r(),{className:"overlay",href:"/blog/".concat(o),children:[(0,t.jsx)(d(),{src:p,width:300,height:150,className:"img-responsive",alt:null!==(n=c.data.attributes.alternativeText)&&void 0!==n?n:c.data.attributes.name}),(0,t.jsx)("div",{children:(0,t.jsx)(i.G,{icon:a.Y$T,size:"xs"})})]}),(0,t.jsxs)("div",{className:"post-info",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"post-title",children:(0,t.jsx)(r(),{href:"/blog/".concat(o),children:l})}),(0,t.jsxs)("ul",{className:"post-meta",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(i.G,{icon:a.ILF}),g]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(i.G,{icon:a.Ry6}),(0,t.jsx)(u(),{locale:"de",format:"L",children:m})]})]})]}),(0,t.jsx)("div",{className:"post-desc",children:(0,t.jsx)("p",{children:x})})]})]})}},6864:function(e,s,n){"use strict";n.d(s,{Z:function(){return l}});var t=n(5893),i=n(1664),a=n.n(i);function l(e){let{title:s,list:n}=e;return(0,t.jsxs)("div",{className:"moduletable",children:[(0,t.jsx)("h3",{children:s}),(0,t.jsx)("ul",{className:"categories-module mod-list",children:n.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)("h4",{children:(0,t.jsx)(a(),{href:"/blog/category/".concat(e.attributes.title),children:e.attributes.title})})},e.id))})]})}},5423:function(e,s,n){"use strict";n.d(s,{Z:function(){return r}});var t=n(5893),i=n(5675),a=n.n(i),l=n(4572);function r(e){var s;let{title:n,posts:i}=e;return(0,t.jsxs)("div",{className:"moduletable",children:[(0,t.jsx)("h3",{children:n}),(0,t.jsx)("div",{className:"widget-popular",children:(0,t.jsx)("ul",{children:i.map(e=>(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:e.attributes.url,children:(0,t.jsx)(a(),{src:(0,l.$)(e.attributes.image),width:150,height:100,alt:null!==(s=e.attributes.image.data.attributes.alternativeText)&&void 0!==s?s:e.attributes.image.data.attributes.name,className:"img-responsive"})}),(0,t.jsx)("h4",{children:(0,t.jsx)("a",{href:e.attributes.url,children:e.attributes.title})})]},e.id))})})]})}},9957:function(e,s,n){"use strict";n.d(s,{Z:function(){return l}});var t=n(5893);n(1664),n(7814);var i=n(9370),a=n.n(i);function l(e){let{title:s,image:n,link:i}=e;return(0,t.jsx)("div",{className:"page-title "+a()[n],children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"breadcrumbs",children:(0,t.jsx)("ul",{children:(0,t.jsx)("li",{children:(0,t.jsx)("span",{children:s})})})})})})}},8793:function(e,s,n){"use strict";n.d(s,{Z:function(){return i}});var t=n(5893);function i(e){let{count:s,current:n,press:i}=e,a=[n-1,n,n+1];return a[0]<1&&(a=a.map(e=>e+1)),a[2]>s&&(a=a.map(e=>e-1)),(0,t.jsx)("nav",{className:"page-navigation",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{className:"pagination-prev",children:(0,t.jsx)("a",{className:"pagenav","data-original-title":"Next",onClick:()=>n>0?i(n-1):null,children:"<"})}),s<=4&&[...Array(s).keys()].map(e=>e+1).map(e=>(0,t.jsx)("li",{children:e==n?(0,t.jsx)("span",{className:"pagenav",children:e}):(0,t.jsx)("a",{className:"pagenav",onClick:()=>i(e),children:e})},e)),s>4&&(0,t.jsxs)(t.Fragment,{children:[n>s-2&&(0,t.jsx)("li",{children:(0,t.jsx)("p",{children:"..."})},"..."),a.map(e=>(0,t.jsx)("li",{children:e==n?(0,t.jsx)("span",{className:"pagenav",children:e}):(0,t.jsx)("a",{className:"pagenav",onClick:()=>i(e),children:e})},e)),n<=s-2&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("li",{children:(0,t.jsx)("p",{children:"..."})},"..."),(0,t.jsx)("li",{children:s==n?(0,t.jsx)("span",{className:"pagenav",children:s}):(0,t.jsx)("a",{className:"pagenav",onClick:()=>i(s),children:s})},s)]})]}),(0,t.jsx)("li",{className:"pagination-next",children:(0,t.jsx)("a",{className:"pagenav","data-original-title":"Next",onClick:()=>n<s?i(n+1):null,children:">"})})]})})}n(3636)},4572:function(e,s,n){"use strict";function t(e){let{url:s}=e.data.attributes,n=s.startsWith("/")?function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat("https://strapi.crowdrecht.de").concat(e)}(s):s;return n}n.d(s,{$:function(){return t}}),n(129),n(3454)},8547:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return u},default:function(){return h}});var t=n(5893),i=n(8993),a=n(5423),l=n(8793),r=n(9957),c=n(6864),d=n(9831),o=n(7294),u=!0;function h(e){let{articles:s,categories:n,pagination:u,seo:h}=e,[x,j]=(0,o.useState)(1),[m,p]=(0,o.useState)(s),g=s.slice(0,5);async function v(e){let s=await fetch("/api/blog/pagination",{method:"POST",body:JSON.stringify({id:e}),headers:{"Content-Type":"application/json"}}),n=await s.json();n.success?(p(n.articles),j(e)):console.log(n.message)}return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.Z,{...h}),(0,t.jsx)(r.Z,{title:"Blog",image:"hero"}),(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("h1",{style:{marginBottom:"10px"},children:"Blog"})}),(0,t.jsx)("div",{className:"container container-bottom-padding",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{id:"center_column",className:"main-content col-lg-8",children:[(0,t.jsx)("div",{className:"blog-grid ",children:(0,t.jsx)("div",{className:"grid-post",children:m.map(e=>(0,t.jsx)(i.Z,{...e.attributes},e.id))})}),(0,t.jsx)(l.Z,{count:u.pageCount,current:x,press:v})]}),(0,t.jsxs)("div",{id:"right_column",className:"sidebar col-lg-4",children:[(0,t.jsx)(c.Z,{title:"Kategorien",list:n}),(0,t.jsx)(a.Z,{title:"Zuletzt ver\xf6ffentlicht",posts:g})]})]})})]})}},9370:function(e){e.exports={hero:"Breadcrumbs_hero__KSo8x",legal:"Breadcrumbs_legal__PVEWl",crowd:"Breadcrumbs_crowd__hQDtU"}},4654:function(){}},function(e){e.O(0,[129,803,774,888,179],function(){return e(e.s=7286)}),_N_E=e.O()}]);