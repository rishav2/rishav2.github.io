(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(7035)}])},4417:function(e,s,i){"use strict";i.d(s,{Z:function(){return x}});var a=i(5893),t=i(1664),n=i.n(t),r=i(8687),c=i.n(r),l=i(7814),d=i(9417),o=i(5675),m=i.n(o),h=i(4572);function x(e){var s,i;let{title:t,image:r,link:o,description:x,category:u,user:j,location:p,date:v,goal:N,current:g,supporters:f}=e,b=Math.round(g/N*100);b>100&&(b=100);let k=(0,h.$)(r),_=(0,h.$)(j.image);return(0,a.jsxs)("div",{className:"campaign-item",children:[(0,a.jsxs)(n(),{className:"overlay",href:"/kampagne/"+o,children:[(0,a.jsx)(m(),{className:"campaign-image",src:k,width:300,height:150,alt:null!==(s=r.data.attributes.alternativeText)&&void 0!==s?s:r.data.attributes.name}),(0,a.jsx)("div",{children:(0,a.jsx)(l.G,{icon:d.Y$T,size:"xs"})})]}),(0,a.jsxs)("div",{className:"campaign-box",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(n(),{className:"category",href:"/kampagne/category/"+o,children:u}),(0,a.jsx)("h3",{className:c().title,children:(0,a.jsx)(n(),{href:"/kampagne/"+o,children:t})})]}),(0,a.jsx)("div",{className:"campaign-description "+c().description,children:x.length>110?x.slice(0,105)+"...":x}),(0,a.jsxs)("div",{className:"campaign-bottom",children:[(0,a.jsxs)("div",{className:"campaign-author",children:[(0,a.jsx)(n(),{className:"author-icon",href:"/kampagne",children:(0,a.jsx)(m(),{src:_,width:100,height:100,alt:null!==(i=j.image.data.attributes.alternativeText)&&void 0!==i?i:j.image.data.attributes.name})}),"von\xa0",(0,a.jsx)(n(),{className:"author-name",href:"/user/"+j.url,children:j.name})]}),(0,a.jsxs)("div",{className:"process",children:[(0,a.jsx)("div",{className:"raised",children:(0,a.jsx)("span",{style:{width:b+"%"}})}),(0,a.jsxs)("div",{className:"process-info",children:[(0,a.jsxs)("div",{className:"process-pledged",children:[(0,a.jsxs)("span",{children:[N,"€"]}),"Ziel"]}),(0,a.jsxs)("div",{className:"process-funded",children:[(0,a.jsxs)("span",{children:[b,"%"]}),"Finanziert"]}),(0,a.jsxs)("div",{className:"process-time",children:[(0,a.jsx)("span",{children:"Aktiv bis"}),v]})]})]})]})]})]})}},4572:function(e,s,i){"use strict";function a(e){let{url:s}=e.data.attributes,i=s.startsWith("/")?function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat("https://strapi.crowdrecht.de").concat(e)}(s):s;return i}i.d(s,{$:function(){return a}}),i(129),i(3454)},7035:function(e,s,i){"use strict";i.r(s),i.d(s,{__N_SSG:function(){return C},default:function(){return P}});var a=i(5893);i(9008);var t=i(5675),n=i.n(t),r=i(6066),c=i(7294),l=i(1664),d=i.n(l),o=i(4572);function m(e){let{metadata:s}=e,i=s.demo_campaign.data.attributes,t=(0,o.$)(s.image),n=Math.round(i.current/i.goal*100);return n>100&&(n=100),(0,a.jsx)("div",{className:"sideshow",style:{backgroundImage:"url("+t+")"},children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"sideshow-content",children:[(0,a.jsx)("h1",{children:(0,a.jsx)(d(),{href:"/kampagne",children:"Wir finanzieren deine Klage."})}),(0,a.jsx)("div",{className:"sideshow-description",children:s.description}),(0,a.jsxs)("div",{className:"process",children:[(0,a.jsx)("div",{className:"raised",children:(0,a.jsx)("span",{style:{width:n+"%"}})}),(0,a.jsxs)("div",{className:"process-info",children:[(0,a.jsxs)("div",{className:"process-goal",children:[(0,a.jsxs)("span",{children:[i.goal,"€"]}),"Ziel"]}),(0,a.jsxs)("div",{className:"process-pledged",children:[(0,a.jsxs)("span",{children:[i.current,"€"]}),"gesammelt"]}),(0,a.jsxs)("div",{className:"process-funded",children:[(0,a.jsxs)("span",{children:[n,"%"]}),"finanziert"]}),(0,a.jsxs)("div",{className:"process-time",children:[(0,a.jsx)("span",{children:"Aktiv bis"}),i.date]})]})]}),(0,a.jsxs)("div",{className:"hero-buttons",children:[(0,a.jsx)("div",{className:"button",children:(0,a.jsx)(d(),{className:"btn-primary",href:"/kampagne/"+i.url,children:"Zum Fall"})}),(0,a.jsx)("div",{className:"button",style:{marginLeft:"1em"},children:(0,a.jsx)(d(),{className:"btn-primary",href:"/kampagne/",children:"Alle F\xe4lle ansehen"})})]})]})})})}var h=i(3236),x=i.n(h);function u(e){let{campaigns:s}=e,i=(0,c.useRef)(),t=()=>{i.current.slickNext()},n=()=>{i.current.slickPrev()};return(0,a.jsxs)("div",{className:"widget-crowdfundings",children:[(0,a.jsx)("button",{className:x().button+" "+x().prev,onClick:n,style:{marginRight:"10px"},children:"❮"}),(0,a.jsx)("button",{className:x().button+" "+x().next,onClick:t,children:"❯"}),(0,a.jsx)(r.Z,{ref:e=>i.current=e,infinite:!0,arrows:!1,fade:!0,slidesToShow:1,slidesToScroll:1,children:s.map(e=>(0,a.jsx)(m,{metadata:e.attributes,index:e.id},e.id))})]})}var j=i(2644),p=i.n(j),v=i(9417),N=i(7814);function g(e){var s,i;let{title:t,link:r,description:c,image:l,category:m,user:h,location:x,date:u,goal:j,current:g,backers:f}=e,b=(0,o.$)(l),k=(0,o.$)(h.image),_=Math.round(g/j*100);return _>100&&(_=100),(0,a.jsx)("div",{className:p().itemwidth,children:(0,a.jsxs)("div",{className:"staff-picks-item clearfix",children:[(0,a.jsx)(d(),{className:"staff-picks-image",href:"kampagne/"+r,children:(0,a.jsx)(n(),{src:b,width:600,height:600,alt:null!==(s=l.data.attributes.alternativeText)&&void 0!==s?s:l.data.attributes.name})}),(0,a.jsxs)("div",{className:"staff-picks-item-content staff-picks-box",children:[(0,a.jsx)(d(),{href:"kampagne/category/"+m,className:"category",children:m}),(0,a.jsx)("h3",{children:(0,a.jsx)(d(),{href:"kampagne/"+r,children:t})}),(0,a.jsx)("div",{className:"staff-picks-description",children:c}),(0,a.jsxs)("div",{className:"campaign-box",children:[(0,a.jsxs)("div",{className:"campaign-author staff-picks-author",children:[(0,a.jsxs)("div",{className:"author-profile",children:[(0,a.jsx)(d(),{className:"author-icon",href:"/kampagne",children:(0,a.jsx)(n(),{src:k,width:100,height:100,alt:null!==(i=h.image.data.attributes.alternativeText)&&void 0!==i?i:h.image.data.attributes.name})}),"von\xa0",(0,a.jsx)(d(),{className:"author-name",href:"user/"+h.url,children:h.name})]}),(0,a.jsxs)("div",{className:"author-address",children:[(0,a.jsx)(N.G,{icon:v.opg}),x]})]}),(0,a.jsxs)("div",{className:"process",children:[(0,a.jsx)("div",{className:"raised",children:(0,a.jsx)("span",{style:{width:_+"%"}})}),(0,a.jsxs)("div",{className:"process-info",children:[(0,a.jsxs)("div",{className:"process-goal",children:[(0,a.jsxs)("span",{children:[j,"€"]}),"Ziel"]}),(0,a.jsxs)("div",{className:"process-pledged",children:[(0,a.jsxs)("span",{children:[g,"€"]}),"gesammelt"]}),(0,a.jsxs)("div",{className:"process-funded",children:[(0,a.jsxs)("span",{children:[_,"%"]}),"finanziert"]}),(0,a.jsxs)("div",{className:"process-time",children:[(0,a.jsx)("span",{children:"Aktiv bis"}),u]})]})]})]})]})]})})}var f=i(2536),b=i.n(f);function k(e){let{campaigns:s}=e,i=(0,c.useRef)(),t=()=>{i.current.slickNext()},n=()=>{i.current.slickPrev()};return(0,a.jsx)("div",{className:"widget-crowdfundings "+b().lessmargin,children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"border-title "+b().align,children:[(0,a.jsxs)("div",{className:b().description,children:[(0,a.jsx)("h3",{className:"title left-title",children:"Crowdrecht stellt vor"}),(0,a.jsx)("div",{className:"description left-description",children:"Diese F\xe4lle werden gerade stark diskutiert"})]}),(0,a.jsxs)("div",{className:b().buttons,children:[(0,a.jsx)("button",{className:b().w3Button,onClick:n,style:{marginRight:"10px"},children:"<"}),(0,a.jsx)("button",{className:b().w3Button,onClick:t,children:">"})]})]}),(0,a.jsx)("div",{className:"staff-picks",children:(0,a.jsx)("div",{className:"staff-picks-content",children:(0,a.jsx)(r.Z,{ref:e=>i.current=e,infinite:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,className:"staff-picks-slider slider-controls-top",children:s.map(e=>(0,a.jsx)(g,{title:e.attributes.title,image:e.attributes.image,link:e.attributes.link,description:e.attributes.description,category:e.attributes.legal_category.data.attributes.title,user:e.attributes.demo_user.data.attributes,location:e.attributes.location,date:e.attributes.date,goal:e.attributes.goal,current:e.attributes.current,supporters:e.attributes.backers},e.id))})})})]})})}var _=i(4417);function w(e){let{campaigns:s}=e;return(0,a.jsx)("div",{className:"widget-crowdfundings list",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h3",{className:"title ",children:"Entdecke die neusten F\xe4lle"}),(0,a.jsx)("div",{className:"description",children:"Diese F\xe4lle wurden gerade auf Crowdrecht ver\xf6fffentlicht."}),(0,a.jsxs)("div",{className:"campaign-content latest",children:[(0,a.jsx)("div",{className:"row",children:s.map(e=>(0,a.jsx)("div",{className:"col-lg-4 col-sm-6 d-flex",children:(0,a.jsx)(_.Z,{title:e.attributes.title,image:e.attributes.image,link:e.attributes.url,description:e.attributes.description,category:e.category,user:e.attributes.demo_user.data.attributes,location:e.attributes.location,date:e.attributes.date,goal:e.attributes.goal,current:e.attributes.current,supporters:e.attributes.backers})},e.id))}),(0,a.jsx)("div",{className:"latest-button",children:(0,a.jsx)(d(),{className:"btn-primary",href:"/kampagne",children:"Zu den F\xe4llen"})})]})]})})}function y(e){var s;let{category:i}=e,t=(0,o.$)(i.image);return(0,a.jsx)("div",{className:"explore-item",children:(0,a.jsxs)("a",{className:"explore-overlay",href:"/kampagne/category/".concat(i.title),children:[(0,a.jsx)(n(),{src:t,width:500,height:350,alt:null!==(s=i.image.data.attributes.alternativeText)&&void 0!==s?s:i.image.data.attributes.name}),(0,a.jsx)("span",{children:i.title})]})})}function F(e){let{categories:s}=e;return(0,a.jsx)("div",{className:"widget-crowdfundings list",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h3",{className:"title ",children:"Kategorien"}),(0,a.jsx)("div",{className:"description ",children:"Hier findest du aktuelle Rechtsf\xe4lle sortiert nach Themengebiet"}),(0,a.jsx)("div",{className:"explore",children:(0,a.jsx)("div",{className:"explore-content",children:(0,a.jsx)("div",{className:"row",children:s.map(e=>(0,a.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-6 col-6",children:(0,a.jsx)(y,{category:e.attributes})},e.id))})})})]})})}function z(){return(0,a.jsx)("div",{className:"how-it-work",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h2",{className:"title",children:"So funktioniert's"}),(0,a.jsx)("div",{className:"description",children:"Crowdrecht unterst\xfctzt dich bei der Finanzierung deines Falls in drei einfachen Schritten! "}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("div",{className:"item-work",children:[(0,a.jsxs)("div",{className:"item-icon",children:[(0,a.jsx)("span",{children:"01"}),(0,a.jsx)(N.G,{icon:v.qbi,style:{maxWidth:"25px"}})]}),(0,a.jsxs)("div",{className:"item-content",children:[(0,a.jsx)("h3",{className:"item-title",children:"Fall einstellen"}),(0,a.jsx)("div",{className:"item-desc",children:(0,a.jsx)("p",{children:"Lege deinen Fall auf Crowdrecht an. Wir berechnen die Finanzierungssumme und helfen dir bei der Erstellung deiner Kampagne."})})]})]})}),(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("div",{className:"item-work",children:[(0,a.jsxs)("div",{className:"item-icon",children:[(0,a.jsx)("span",{children:"02"}),(0,a.jsx)(N.G,{icon:v.VPG,style:{maxWidth:"30px"}})]}),(0,a.jsxs)("div",{className:"item-content",children:[(0,a.jsx)("h3",{className:"item-title",children:"Finanzierung"}),(0,a.jsx)("div",{className:"item-desc",children:(0,a.jsx)("p",{children:"Alles online? Super! Teile dein Anliegen und sammle Geld von Unterst\xfctzern ein. "})})]})]})}),(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsxs)("div",{className:"item-work",children:[(0,a.jsxs)("div",{className:"item-icon",children:[(0,a.jsx)("span",{children:"03"}),(0,a.jsx)(N.G,{icon:v.qZB,style:{maxWidth:"30px"}})]}),(0,a.jsxs)("div",{className:"item-content",children:[(0,a.jsx)("h3",{className:"item-title",children:"Fall finanziert!"}),(0,a.jsx)("div",{className:"item-desc",children:(0,a.jsx)("p",{children:"Sobald mindestens eine Instanz finanziert ist, kannst du loslegen! Halte deine Unterst\xfctzer \xfcber den Fortgang deines Falls auf dem Laufenden."})})]})]})})]})]})})}var T=i(9831),C=!0;function P(e){let{heroes:s,promoted:i,latest:t,categories:n,seo:r}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(T.Z,{...r}),(0,a.jsx)(u,{campaigns:s}),(0,a.jsx)(z,{}),(0,a.jsx)(k,{campaigns:i}),(0,a.jsx)(F,{categories:n}),(0,a.jsx)(w,{campaigns:t})]})}},8687:function(e){e.exports={title:"Card_title__GiFkH",description:"Card_description__PVIBl"}},3236:function(e){e.exports={button:"Hero_button__pbo97",prev:"Hero_prev__loAzT",next:"Hero_next__zCNLG"}},2536:function(e){e.exports={align:"Promoted_align__btlr3",description:"Promoted_description__3VMIx",buttons:"Promoted_buttons___NsKY",lessmargin:"Promoted_lessmargin__Vv7kR",w3Button:"Promoted_w3Button__32SDR"}},2644:function(e){e.exports={itemwidth:"PromotedBox_itemwidth__iXanq"}},4654:function(){}},function(e){e.O(0,[129,66,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);