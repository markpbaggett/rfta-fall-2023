(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{9052:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return search}});var n=a(7294),r=a(9499),i=a(4729),o=a(2854),l=a(9288),s=(0,l.zo)("span",{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",top:"-$gr1",right:"$gr2",width:"$gr3",height:"$gr3",fontSize:"$gr1",color:"$indigo1",backgroundColor:"$indigo12",borderRadius:"50%"}),c=(0,l.zo)(o.xz,{position:"relative",right:"0",transition:"$canopySlideIn",boxShadow:"none"}),d=(0,l.zo)("div",(0,r.Z)({display:"flex",position:"fixed",left:"0",zIndex:"5",width:"100%"},"> ".concat(i.N),{display:"flex",justifyContent:"space-between",alignItems:"center"})),u=(0,l.zo)("div",{height:"$gr5",padding:"$gr4 0 $gr3","@sm":{height:"$gr5",padding:"$gr3 0 $gr2"},"#canopy-search-summary":{opacity:"1",transition:"$canopyOpacity",fontSize:"$gr4",color:"$slate11",fontWeight:"300","@sm":{fontSize:"$gr3"}},variants:{isFixed:{true:(0,r.Z)({},"> ".concat(d),(0,r.Z)({"#canopy-search-summary":{opacity:"0"}},"".concat(c),{right:"50%",transform:"translate(50%)",backfaceVisibility:"hidden",webkitFontSmoothing:"subpixel-antialiased",boxShadow:"2px 2px 5px #0003"}))}}}),h=a(5893);function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(a),!0).forEach(function(t){(0,r.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var g={facetsActive:[]},p=(0,n.createContext)(void 0);function facetsReducer(e,t){if("updateFacetsActive"===t.type)return _objectSpread(_objectSpread({},e),{},{facetsActive:t.facetsActive})}function FacetsProvider(e){var t=e.initialState,a=e.children,r=(0,n.useReducer)(facetsReducer,void 0===t?g:t),i=r[0],o=r[1];return(0,h.jsx)(p.Provider,{value:{facetsDispatch:o,facetsState:i},children:a})}function useFacetsState(){var e=(0,n.useContext)(p);if(void 0===e)throw Error("useFacetsState must be used within a FacetsProvider");return e}var f=a(5407),m=a(5014),v=a(2469),Activate=function(){var e=Array.from(useFacetsState().facetsState.facetsActive.keys()).filter(function(e){return"q"!==e}).length;return(0,h.jsx)(c,{asChild:!0,children:(0,h.jsxs)(f.O,{buttonType:"primary",children:[(0,m.EK)("searchFilter")," ",(0,h.jsx)(v.hsZ,{}),e>0&&(0,h.jsx)(s,{children:e})]})})},b=a(9802),y=a(3278),w=a(2765),x=(0,l.zo)(o.VY,{width:"calc(100% - $gr5 * 2)",maxWidth:y.G.default,maxHeight:"calc(100% - $gr5 * 2)",background:"$slate2",position:"fixed",top:"$gr5",left:"50%",overflowY:"auto",zIndex:"10",borderRadius:"3px",boxShadow:"5px 5px 13px ".concat(w.VS.slateA7),borderTop:"1px solid $slateA1",borderBottom:"1px solid $slateA4",transform:"translateX(-50%)",overflow:"clip",display:"flex","@lg":{width:"calc(100% - $gr4 * 2)",maxHeight:"calc(100% - $gr4 * 2)",top:"$gr4"},"@sm":{width:"calc(100% - $gr3 * 2)",maxHeight:"calc(100% - $gr3 * 2)",top:"$gr3"}}),S=(0,l.zo)("div",{display:"flex",flexDirection:"column",flexWrap:"nowrap",width:"100%",overflow:"scroll"}),j=(0,l.zo)("header",{display:"flex",flexGrow:"0",justifyContent:"space-between",padding:"$gr3 $gr4",color:"$slate9",fontSize:"$gr3",fontFamily:"$display",fontWeight:"300",alignItems:"center","@sm":{padding:"$gr2 $gr3"}}),k=(0,l.zo)("footer",{display:"flex",flexGrow:"0",justifyContent:"space-between",padding:"$gr3 $gr4","@sm":{padding:"$gr2 $gr3"}}),$=(0,l.zo)("div",{display:"flex",flexDirection:"column",flexGrow:"1",borderTop:"1px solid $slate4",borderBottom:"1px solid $slate4",overflowY:"scroll !important",padding:"$gr3 $gr4","@sm":{padding:"$gr2 $gr3"}}),C=(0,l.zo)(o.Dx,{}),P=(0,l.zo)(o.x8,{display:"flex",justifyContent:"center",alignItems:"center",border:"none",borderRadius:"50%",color:"$slate10",background:"transparent",cursor:"pointer",width:"$gr4",height:"$gr4",transition:"$canopyAll"}),R=(0,l.zo)(o.aV,{backgroundColor:"$slateA8",position:"fixed",top:0,left:0,right:0,bottom:0,display:"grid",placeItems:"center",overflowY:"auto",zIndex:"10",transition:"$canopyAll","&:hover":{backgroundColor:"$slateA9"},"&::after":{position:"fixed",zIndex:"11",background:"linear-gradient(180deg, $slate2, #0000)",width:"100%",height:"$gr9",left:"0",top:"0",content:""}}),O=(0,l.zo)(o.h_,{}),_=a(7058),F=(0,l.zo)(b.xz,{display:"flex",justifyContent:"space-between",width:"100%",padding:"$gr2 0",backgroundColor:"transparent",border:"none",fontFamily:"$display",fontSize:"$gr4",cursor:"pointer",borderTop:"1px solid $slate4","&:hover, &:focus":{color:"$indigo11"},svg:{transition:"$canopyAll",transform:"rotate(-90deg)",color:"$slate10"},"&[aria-expanded='true']":{color:"$slate12 !important",fontWeight:"800",svg:{color:"$slate12 !important",transform:"rotate(0deg)"}}}),I=(0,l.zo)(b.VY,{padding:"$gr1 0 $gr4"}),z=(0,l.zo)(b.h4,{}),A=(0,l.zo)(b.ck,{"&:first-child":(0,r.Z)({},"".concat(F),{border:"none"})}),E=a(6069),G=(0,l.zo)("label",{transition:"$canopyAll",cursor:"pointer",fontWeight:"500",variants:{isChecked:{true:{color:"$slate12 !important",fontWeight:"800"}}},"&:hover, &:focus":{color:"$indigo11"},span:{color:"$slate11 !important",fontSize:"$gr2"}}),D=(0,l.zo)(E.fC,{position:"relative",zIndex:"0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"$gr3",height:"$gr3",margin:"0 $gr1 0 0",background:"$slate4",boxShadow:"inset 1px 1px 2px #0002",border:"none",borderRadius:"50%",cursor:"pointer",transition:"$canopyAll",flexShrink:"0","&::before":{position:"absolute",width:"100%",height:"100%",content:"",background:"linear-gradient(-45deg, $indigo11, $indigo8)",opacity:"0",borderRadius:"50%",transition:"$canopyAll",zIndex:"0"},"&[aria-checked='true']":{boxShadow:"1px 1px 2px ${indigoA.indigoA4}","&::before":{opacity:"1"}}}),M=(0,l.zo)(E.z$,{position:"absolute",zIndex:"1",color:"$indigo1",textShadow:"1px 1px 2px ".concat(w.Eh.indigoA12)}),T=(0,l.zo)("span",{display:"flex",margin:"0 0 $gr1",fontSize:"$gr3",color:"$slate11","&:last-child":{margin:"0"}}),Option=function(e){var t=e.active,a=e.facet,n=e.identifier,r=e.option,i=useFacetsState(),o=i.facetsDispatch,l=i.facetsState.facetsActive;return(0,h.jsxs)(T,{children:[(0,h.jsx)(D,{value:r.value,id:n,checked:t,onCheckedChange:function(e){l.delete(a),e&&l.append(a,r.slug),o({type:"updateFacetsActive",facetsActive:l})},children:(0,h.jsx)(M,{asChild:!0,children:(0,h.jsx)(v.nQG,{})})}),(0,h.jsxs)(G,{htmlFor:n,isChecked:t,children:[r.value," ",(0,h.jsxs)("span",{children:["(",r.doc_count,")"]})]})]})},Facet=function(e){var t=e.label,a=e.slug,r=e.values,i=useFacetsState().facetsState.facetsActive,o=null==i?void 0:i.toString(),l={slug:"",value:(0,m.EK)("searchFilterAny")},s=(0,n.useState)({slug:"",value:(0,m.EK)("searchFilterAny")}),c=s[0],d=s[1];return(0,n.useEffect)(function(){var e,t=null==i?void 0:i.get(a);d(t?{slug:t,value:null===(e=r.find(function(e){return e.slug===t}))||void 0===e?void 0:e.value}:l)},[i,o,a,r]),(0,h.jsxs)(A,{value:a,children:[(0,h.jsx)(z,{asChild:!0,children:(0,h.jsxs)(F,{children:[(0,h.jsxs)("span",{children:[t," ",(0,h.jsx)(v.v4q,{})]}),(0,h.jsx)("span",{children:c.value})]})}),(0,h.jsx)(I,{children:r.map(function(e,t){var n="".concat(a,"-").concat(e.slug,"-").concat(t);return(0,h.jsx)(Option,{active:c.slug===e.slug,facet:a,identifier:n,option:e},n)})})]})},H=a(1163);function Modal_ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Modal_objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Modal_ownKeys(Object(a),!0).forEach(function(t){(0,r.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Modal_ownKeys(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Modal=function(e){var t=e.handleSubmit,a=useFacetsState(),r=a.facetsState,i=a.facetsDispatch,o=r.facetsActive,l=(0,H.useRouter)();return(0,h.jsxs)(O,{children:[(0,h.jsx)(R,{}),(0,h.jsx)(x,{children:(0,h.jsxs)(S,{children:[(0,h.jsxs)(j,{children:[(0,h.jsx)(C,{asChild:!0,children:(0,h.jsx)("span",{children:(0,m.EK)("searchFilter")})}),(0,h.jsx)(P,{"aria-label":(0,m.EK)("searchFilterClose"),children:(0,h.jsx)(v.Pxu,{})})]}),(0,h.jsx)($,{children:(0,h.jsx)(b.fC,{type:"single",collapsible:!0,children:_.map(function(e){return(0,n.createElement)(Facet,Modal_objectSpread(Modal_objectSpread({},e),{},{key:e.slug}))})})}),(0,h.jsxs)(k,{children:[(0,h.jsx)(f.O,{buttonType:"transparent",onClick:function(){_.forEach(function(e){return o.delete(e.slug)}),i({type:"updateFacetsActive",facetsActive:o})},children:(0,m.EK)("searchFilterClear")}),(0,h.jsx)(f.O,{buttonType:"primary",onClick:function(){l.push({pathname:"/search",query:o.toString()}),t()},children:(0,m.EK)("searchFilterSubmit")})]})]})})]})},N=(0,l.zo)(o.fC,{}),B=a(7642),Facets=function(){var e=(0,H.useRouter)().asPath,t=(0,n.useState)(!1),a=t[0],r=t[1],i=useFacetsState().facetsDispatch,o=(0,B.MQ)(),l=o.canopyDispatch,s=o.canopyState,c=s.headerVisible,d=s.searchParams;(0,n.useEffect)(function(){i({type:"updateFacetsActive",facetsActive:d})},[d,i]);var handleDialogChange=function(){r(!a),l({type:"updateHeaderVisible",headerVisible:!c})};return(0,n.useEffect)(function(){r(!1),l({type:"updateHeaderVisible",headerVisible:!0})},[e,l]),(0,h.jsxs)(N,{open:a,onOpenChange:handleDialogChange,children:[(0,h.jsx)(Activate,{}),(0,h.jsx)(Modal,{handleSubmit:handleDialogChange})]})},Facets_Facets=function(){return(0,h.jsx)(FacetsProvider,{children:(0,h.jsx)(Facets,{})})},L=a(7843),Z=a(7178),W=(0,l.zo)("div",{padding:"$gr3 0 0",h4:{margin:"0",fontWeight:"400",fontSize:"$gr4",fontFamily:"$sans",textDecoration:"none !important"},span:{display:"block",margin:"0.25rem 0 0",fontWeight:"300",fontSize:"0.8333rem",color:"$slate10"}}),K=(0,l.zo)("div",{backgroundColor:"$slate6",width:"100%",height:"100%",overflowY:"hidden",borderRadius:"3px",transition:"$canopyAll"}),U=(0,l.zo)("div",{display:"flex",width:"100%",maxWidth:"240px",position:"relative",a:(0,r.Z)({display:"flex",flexDirection:"column",width:"100%",color:"$slate12",textDecoration:"none !important",transition:"$canopyAll"},"&:hover, &:focus",(0,r.Z)({color:"$indigo10"},"".concat(K),{transform:"scale3d(1.02, 1.02, 1.02)",boxShadow:"3px 3px 8px #0002"}))}),q=a(3093),V=a(8522),J=a(6225),Y=a(3817),Q=(0,l.zo)("img",(0,r.Z)({position:"relative",zIndex:"1",width:"100%",height:"100%",objectFit:"contain",transition:"$canopyAll",opacity:0},"&.loaded",{opacity:1})),X=(0,l.zo)("figure",{backgroundColor:"$slate6",display:"flex",width:"100%",height:"100%",padding:"0",margin:"0",position:"relative",overflow:"hidden",zIndex:"0",borderRadius:"3px",boxShadow:"2px 2px 5px #0001",transition:"$canopyAll"}),ee=a(6010),getResourceImage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"600,",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"full";if(Array.isArray(e)&&(e=e[0]),!e.service)return e.id;if(!Array.isArray(e.service)){if(e.service["@id"])return"".concat(e.service["@id"],"/").concat(a,"/").concat(t,"/0/default.jpg");if(e.service.id)return"".concat(e.service.id,"/").concat(a,"/").concat(t,"/0/default.jpg")}return e.service[0]["@id"]?"".concat(e.service[0]["@id"],"/").concat(a,"/").concat(t,"/0/default.jpg"):"".concat(e.service[0].id,"/").concat(a,"/").concat(t,"/0/default.jpg")},Figure_Figure=function(e){var t=e.alt,a=e.resource,r=e.region,i=void 0===r?"full":r,o=e.size,l=void 0===o?"400,":o,s=e.isCover,c=(0,n.useState)(),d=c[0],u=c[1],g=(0,n.useState)(!1),p=g[0],f=g[1],m=(0,n.useRef)(null);return(0,n.useEffect)(function(){var e;u(getResourceImage(a,l,i)),null!=m&&m.current&&null!=m&&null!==(e=m.current)&&void 0!==e&&e.complete&&f(!0)},[]),(0,h.jsx)(X,{children:(0,h.jsx)(Q,{alt:t,src:d,ref:m,style:void 0!==s&&s?{objectFit:"cover",objectPosition:"50% 50%",width:"100%",height:"100%"}:{},onLoad:function(){return f(!0)},className:(0,ee.Z)("source",p&&"loaded")})})},et=a(1830),ea=a(1664),en=a.n(ea),er=a(9769),ei=a(8956),eo=a(2708),Card_Card=function(e){var t=e.resource,a=1,n=t.label,r=t.homepage,i=t.thumbnail,o=(0,ei.J)(i),l=o.width,s=o.height;l&&s&&(a=l/s);var c=(0,eo.YD)(),d=c.ref,u=c.inView,g=(0,er.i)(n);return(0,h.jsx)(U,{ref:d,children:(0,h.jsxs)(en(),{href:r&&r[0].id?r[0].id:"",children:[(0,h.jsx)(Z.f,{ratio:a,children:(0,h.jsx)(K,{children:(0,h.jsx)(q.A,{transition:{duration:1},children:u&&t&&(0,h.jsx)(V.X,{features:J.H,children:(0,h.jsx)(Y.m.div,{initial:{opacity:0},animate:{opacity:1},children:(0,h.jsx)(Figure_Figure,{resource:i,alt:g})})})})})}),(0,h.jsx)(W,{children:(0,h.jsx)(et.Label,{label:n,as:"h4"})})]})})},el=a(827),es=(0,l.zo)("div",{paddingBottom:"$gr5",zIndex:"1","@xxs":{paddingBottom:"$gr3"},"@xs":{paddingBottom:"$gr3"},"@sm":{paddingBottom:"$gr4"},"@md":{paddingBottom:"$gr4"}}),ec=(0,l.zo)(el.Z,{display:"flex",width:"auto",position:"relative",padding:"$gr2 0",zIndex:"1",".canopy-grid-column":{marginLeft:"$gr5","@xxs":{marginLeft:"$gr3"},"@xs":{marginLeft:"$gr3"},"@sm":{marginLeft:"$gr4"},"@md":{marginLeft:"$gr4"},"&:first-child":{marginLeft:"0"}}}),ed=a(7668),Grid=function(e){var t,a=e.children,n=(t={default:6},(0,r.Z)(t,ed.b.xl,5),(0,r.Z)(t,ed.b.lg,4),(0,r.Z)(t,ed.b.md,4),(0,r.Z)(t,ed.b.sm,3),(0,r.Z)(t,ed.b.xs,2),t);return(0,h.jsx)(ec,{breakpointCols:n,className:"canopy-grid",columnClassName:"canopy-grid-column",children:a})};Grid.Item=function(e){var t=e.item;return t?(0,h.jsx)(es,{children:(0,h.jsx)(Card_Card,{resource:t},t.id)}):(0,h.jsx)(h.Fragment,{})};var eu=a(7812),getPartOf=function(e){var t=new URL(e);return t.searchParams.delete("page"),[{id:t,type:"Collection"}]},eh=a(3981),eg=a(633),ep=a(6486),ef=a.n(ep),em=a(6304),getDocuments=function(e,t){var a=new em.Document(t);eh.forEach(function(e){return a.add(e)});var n=a.search(e).reduce(function(e,t){return(0,eu.Z)(new Set([].concat((0,eu.Z)(e),(0,eu.Z)(t.result))))},[]);return n.length>0?n:[]},getResults=function(e,t,a,n){var r,i=t?getDocuments(t,n):eh.map(function(e){return e.id}),o=0===a.length?eg:(r=a.map(function(e){var t=_.find(function(t){return t.slug===e.label}).values.find(function(t){return t.slug===e.value});return null==t?void 0:t.docs}),eg.filter(function(e){return ef().intersection.apply(ef(),(0,eu.Z)(r)).includes(e.index)}));return i.filter(function(e){return o.some(function(t){return t.index===e})}).map(function(t){var a;return{id:(a=o.find(function(e){return e.index===t})).id,type:"Manifest",label:a.label,thumbnail:a.thumbnail,homepage:[{id:"".concat(e,"/works/").concat(a.slug),type:"Text",label:a.label}]}})};function request_ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function request_objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?request_ownKeys(Object(a),!0).forEach(function(t){(0,r.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):request_ownKeys(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var searchRequest=function(e){var t,a=e.params,n=e.baseUrl,r=e.flexSearch,i=_.map(function(e){return e.slug}).filter(function(e){return a.has(e)}).map(function(e){var t=a.get(e);return{label:e,value:t}}),o=null==a?void 0:a.get("q"),l=null==a?void 0:a.get("page"),s=new URL("".concat(n,"/search"));s.search=null==a?void 0:a.toString();var c=getResults(n,o,i,r),d=Array.from(Array(Math.ceil(c.length/10)).keys()).map(function(e){var t=c.slice(10*e,10*(e+1)).map(function(e){return e.id});return{page:e+1,items:t}}),u=l?(t=parseInt(l),d.find(function(e){return e.page===t}).items.map(function(e){return c.find(function(t){return t.id===e})})):d.map(function(e){var t=new URL(s);return t.searchParams.append("page",e.page),{id:t.toString(),type:"Collection",label:{none:["Page ".concat(e.page," (").concat(e.items.length," Total)")]}}});return request_objectSpread(request_objectSpread({"@context":"https://iiif.io/api/presentation/3/context.json",id:s.toString(),type:"Collection",label:{none:[o||"All Results"]},items:u},l?{summary:{none:["".concat(c.length,"}")]}}:{summary:{none:["".concat(c.length)]}}),l&&{partOf:getPartOf(s)})},hooks_usePageResults=function(e,t,a){var r=(0,n.useState)([]),i=r[0],o=r[1],l=(0,n.useState)(!1),s=l[0],c=l[1],d=(0,n.useState)(!0),u=d[0],h=d[1],g=(0,n.useState)(!1),p=g[0],f=g[1],m=(0,B.MQ)().canopyState.config,reset=function(){o([]),c(!1),h(!0),f(!1)};return(0,n.useEffect)(function(){return reset()},[a]),(0,n.useEffect)(function(){if(h(!0),c(!1),(null==e?void 0:e.length)>0&&e[t]){var a,n=searchRequest({params:new URL(e[t]).searchParams,baseUrl:null==m?void 0:m.baseUrl,flexSearch:null==m?void 0:null===(a=m.search)||void 0===a?void 0:a.flexSearch}).items;o(function(e){return[].concat((0,eu.Z)(e),(0,eu.Z)(n))}),f(e.length>t),h(!1)}},[m,e,t]),{data:i,error:s,loading:u,more:p}},Results=function(e){var t=e.pages,a=e.query,r=(0,n.useState)(0),i=r[0],o=r[1],l=hooks_usePageResults(t,i,a),s=l.data,c=l.loading,d=l.more;(0,n.useEffect)(function(){return o(0)},[a]);var u=(0,n.useRef)(),g=(0,n.useCallback)(function(e){!c&&(u.current&&u.current.disconnect(),u.current=new IntersectionObserver(function(e){e[0].isIntersecting&&d&&o(function(e){return e+1})}),e&&u.current.observe(e))},[c,d]);return(0,h.jsx)(Grid,{children:s.map(function(e,t){return s.length===t+1?(0,h.jsx)("span",{ref:s.length===t+1?g:void 0,children:(0,h.jsx)(Grid.Item,{item:e})},e.id):(0,h.jsx)("span",{children:(0,h.jsx)(Grid.Item,{item:e})},e.id)})})},ev=a(5049),hooks_useElementPosition=function(e){var t=(0,n.useState)(0),a=t[0],r=t[1];return(0,n.useEffect)(function(){var updatePosition=function(){r(window.pageYOffset),e.current&&r(window.pageYOffset-e.current.offsetTop)};return window.addEventListener("scroll",updatePosition),updatePosition(),function(){return window.removeEventListener("scroll",updatePosition)}},[e]),a},eb=a(9332),search=function(){var e=(0,eb.useSearchParams)(),t=(0,n.useState)([]),a=t[0],r=t[1],o=(0,n.useState)(),l=o[0],s=o[1],c=(0,n.useRef)(null),g=hooks_useElementPosition(c),p=(0,B.MQ)(),f=p.canopyDispatch,v=p.canopyState,b=v.config,y=v.searchHeaderFixed,w=v.searchSummary;return(0,n.useEffect)(function(){r([]),s(new URLSearchParams(e.toString()))},[e]),(0,n.useEffect)(function(){return f({searchHeaderFixed:g>-ev.J9,type:"updateSearchHeaderFixed"})},[f,g]),(0,n.useEffect)(function(){if(void 0!==l){f({searchParams:l,type:"updateSearchParams"});var e,t=null==b?void 0:null===(e=b.search)||void 0===e?void 0:e.flexSearch,a=searchRequest({params:l,baseUrl:null==b?void 0:b.baseUrl,flexSearch:t}),n=a.items,i=a.summary;r(n.map(function(e){return e.id})),i&&f({type:"updateSearchSummary",searchSummary:i})}},[b,l,f]),(0,h.jsxs)(L.Z,{children:[(0,h.jsx)(u,{ref:c,isFixed:y,children:(0,h.jsx)(d,{children:(0,h.jsxs)(i.Z,{containerType:"wide",children:[w&&(0,h.jsxs)("span",{id:"canopy-search-summary",children:[(0,h.jsx)(et.Summary,{as:"span",summary:w})," ",(0,m.EK)("searchResults")]}),(0,h.jsx)(Facets_Facets,{})]})})}),(0,h.jsx)(i.Z,{containerType:"wide",children:(0,h.jsx)(Results,{pages:a,query:l})})]})}},8266:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return a(9052)}])},7058:function(e){"use strict";e.exports=JSON.parse('[{"label":"Place","slug":"place","values":[{"value":"Gatlinburg","slug":"gatlinburg","doc_count":13,"docs":[4,6,9,16,17,21,22,23,26,28,29,30,31]},{"value":"Great Smoky Mountains National Park","slug":"great-smoky-mountains-national-park","doc_count":11,"docs":[2,3,6,7,10,11,12,13,15,18,28]},{"value":"Knoxville","slug":"knoxville","doc_count":3,"docs":[1,25,27]},{"value":"Pi Beta Phi Elementary School","slug":"pi-beta-phi-elementary-school","doc_count":3,"docs":[4,24,25]},{"value":"Sevierville","slug":"sevierville","doc_count":3,"docs":[0,25,27]},{"value":"Arrowmont School of Arts and Crafts","slug":"arrowmont-school-of-arts-and-crafts","doc_count":2,"docs":[5,8]},{"value":"Cherokee Orchard Road","slug":"cherokee-orchard-road","doc_count":2,"docs":[25,27]},{"value":"Ely\'s Mill","slug":"elys-mill","doc_count":2,"docs":[2,3]},{"value":"Honduras","slug":"honduras","doc_count":2,"docs":[24,27]},{"value":"Low Gap Road","slug":"low-gap-road","doc_count":2,"docs":[2,3]},{"value":"Parkway (US-321/US 441 S)","slug":"parkway-us-321us-441-s","doc_count":2,"docs":[4,24]},{"value":"Pigeon Forge","slug":"pigeon-forge","doc_count":2,"docs":[25,27]},{"value":"Rocky Top","slug":"rocky-top","doc_count":2,"docs":[24,25]},{"value":"Baskins Creek","slug":"baskins-creek","doc_count":1,"docs":[25]},{"value":"Bull Head Trail","slug":"bull-head-trail","doc_count":1,"docs":[6]},{"value":"Chalet Village","slug":"chalet-village","doc_count":1,"docs":[4]},{"value":"Clingmans Dome","slug":"clingmans-dome","doc_count":1,"docs":[6]},{"value":"Gatlinburg-Pittman High School","slug":"gatlinburg-pittman-high-school","doc_count":1,"docs":[25]},{"value":"Great Smoky Mountains Heritage Center","slug":"great-smoky-mountains-heritage-center","doc_count":1,"docs":[7]},{"value":"Hidden Hills Road","slug":"hidden-hills-road","doc_count":1,"docs":[21]},{"value":"Iglesia Jes\xfas es la Puerta","slug":"iglesia-jesus-es-la-puerta","doc_count":1,"docs":[27]},{"value":"Newfound Gap","slug":"newfound-gap","doc_count":1,"docs":[6]},{"value":"Newport","slug":"newport","doc_count":1,"docs":[24]},{"value":"Pigeon Forge Community Center","slug":"pigeon-forge-community-center","doc_count":1,"docs":[5]},{"value":"Pittman Center Elementary School","slug":"pittman-center-elementary-school","doc_count":1,"docs":[24]},{"value":"Rattlesnake Hollow Road","slug":"rattlesnake-hollow-road","doc_count":1,"docs":[5]},{"value":"Reagan Drive","slug":"reagan-drive","doc_count":1,"docs":[27]},{"value":"Rocky Top Sports World","slug":"rocky-top-sports-world","doc_count":1,"docs":[9]},{"value":"South Carolina","slug":"south-carolina","doc_count":1,"docs":[25]},{"value":"Sugarlands Visitor Information Center","slug":"sugarlands-visitor-information-center","doc_count":1,"docs":[7]},{"value":"Tegucigalpa, Honduras","slug":"tegucigalpa-honduras","doc_count":1,"docs":[25]},{"value":"The Spur","slug":"the-spur","doc_count":1,"docs":[8]},{"value":"Twin Creeks Science Center","slug":"twin-creeks-science-center","doc_count":1,"docs":[7]}]}]')},3981:function(e){"use strict";e.exports=JSON.parse('[{"id":0,"label":"Interview with Zachary James, 2019-09-20","metadata":"Sevierville"},{"id":1,"label":"Interview with Russ Jensen, 2019-09-20","metadata":"Knoxville"},{"id":2,"label":"Interview with Paul Wellborn, 2019-10-13","metadata":"Great Smoky Mountains National Park Ely\'s Mill Low Gap Road"},{"id":3,"label":"Interview with Ruth Wellborn, 2019-10-13","metadata":"Great Smoky Mountains National Park Ely\'s Mill Low Gap Road"},{"id":4,"label":"Interview with Seemona and Daniel Whaley, 2019-09-20","metadata":"Gatlinburg Chalet Village Pi Beta Phi Elementary School Parkway (US-321/US 441 S)"},{"id":5,"label":"Interview with Frances Fox Shambaugh, 2019-10-13","metadata":"Rattlesnake Hollow Road Pigeon Forge Community Center Arrowmont School of Arts and Crafts"},{"id":6,"label":"Interview with Ken Wise, 2019-10-13","metadata":"Gatlinburg Great Smoky Mountains National Park Newfound Gap Clingmans Dome Bull Head Trail"},{"id":7,"label":"Interview with Mike Aday, 2019-10-14","metadata":"Great Smoky Mountains National Park Twin Creeks Science Center Sugarlands Visitor Information Center Great Smoky Mountains Heritage Center"},{"id":8,"label":"Interview with Bill May, 2019-10-14","metadata":"Arrowmont School of Arts and Crafts The Spur"},{"id":9,"label":"Interview with Linda Morrow, 2019-10-14","metadata":"Gatlinburg Rocky Top Sports World"},{"id":10,"label":"Interview with Jennifer Franklin, 2019-11-07","metadata":"Great Smoky Mountains National Park"},{"id":11,"label":"Interview with Karen Hughes, 2019-11-07","metadata":"Great Smoky Mountains National Park"},{"id":12,"label":"Interview with Brandon Matheny, 2019-11-07","metadata":"Great Smoky Mountains National Park"},{"id":13,"label":"Interview with Kendall Beals, 2019-11-09","metadata":"Great Smoky Mountains National Park"},{"id":14,"label":"Interview with Michelle Childs, 2019-11-09","metadata":""},{"id":15,"label":"Interview with John Schwartz and Salley Reamer, 2020-03-13","metadata":"Great Smoky Mountains National Park"},{"id":16,"label":"Interview with Stanton Sweeney, 2020-03-13","metadata":"Gatlinburg"},{"id":17,"label":"Interview with Bob Sweeney, 2020-03-14","metadata":"Gatlinburg"},{"id":18,"label":"Interview with Stephanie Sweeney, 2020-03-14","metadata":"Great Smoky Mountains National Park"},{"id":19,"label":"Interview with Sarina Manifold, 2020-04-23","metadata":""},{"id":20,"label":"Interview with Stacia Martin-West, 2020-04-23","metadata":""},{"id":21,"label":"Interview with Rakhae Thadani, 2017-02-17","metadata":"Gatlinburg Hidden Hills Road"},{"id":22,"label":"Interview with Stacey Adam and Chris Szaton, 2017-04-24","metadata":"Gatlinburg"},{"id":23,"label":"Interview with Christian David Rivera, 2021-02-03","metadata":"Gatlinburg"},{"id":24,"label":"Interview with Julia Rodriguez, 2021-03-03","metadata":"Honduras Rocky Top Pi Beta Phi Elementary School Parkway (US-321/US 441 S) Newport Pittman Center Elementary School"},{"id":25,"label":"Interview with Billy Henriquez, 2021-03-11","metadata":"Knoxville Tegucigalpa, Honduras Pi Beta Phi Elementary School Gatlinburg-Pittman High School Baskins Creek Cherokee Orchard Road Pigeon Forge Rocky Top Sevierville South Carolina"},{"id":26,"label":"Interview with Roxana Ungureanu, 2021-03-24","metadata":"Gatlinburg"},{"id":27,"label":"Interview with Janeth Jimenez and Eda Chavez, 2021-04-23","metadata":"Honduras Knoxville Reagan Drive Iglesia Jes\xfas es la Puerta Cherokee Orchard Road Pigeon Forge Sevierville"},{"id":28,"label":"Interview with Stephen Lyn Bales, 2021-10-13","metadata":"Great Smoky Mountains National Park Gatlinburg"},{"id":29,"label":"Interview with Paige Braddock, 2022-01-14","metadata":"Gatlinburg"},{"id":30,"label":"Interview with Danny Wilson, 2022-01-13","metadata":"Gatlinburg"},{"id":31,"label":"Interview with Marshall Ramsey, 2022-01-14","metadata":"Gatlinburg"},{"id":32,"label":"The Home of Stacey Adam and Chris Szaton is Still Standing","metadata":""},{"id":33,"label":"Stacey Adam and Chris Szaton Evacuate","metadata":""},{"id":34,"label":"The Wildfires","metadata":""},{"id":35,"label":"A Family Embraces Their Well-Being","metadata":""},{"id":36,"label":"A Salute from Smokey the Bear","metadata":""},{"id":37,"label":"Children Ask for Santa\'s Help","metadata":""},{"id":38,"label":"The Chimney Tops 2 Fire","metadata":""},{"id":39,"label":"The Perfect Storm","metadata":""},{"id":40,"label":"Relentless Flames Take Over Gatlinburg","metadata":""},{"id":41,"label":"Erik Dobell Wakes Up to the Fire","metadata":""},{"id":42,"label":"Gary Ownby Clears the Road","metadata":""},{"id":43,"label":"First Responders Fight the Fires and Save Lives","metadata":""},{"id":44,"label":"The Rain Comes","metadata":""},{"id":45,"label":"Mountain Tough","metadata":""},{"id":46,"label":"School Children Want to Return to Normal Life","metadata":""},{"id":47,"label":"Dolly Parton Donates","metadata":""},{"id":48,"label":"Remembering the Lives Lost to the Fires","metadata":""},{"id":49,"label":"Firetruck Warning","metadata":""},{"id":50,"label":"News Updates","metadata":""},{"id":51,"label":"Susan Melchor\'s Evacuation and Return","metadata":""},{"id":52,"label":"Topper","metadata":""},{"id":53,"label":"Just a Manual","metadata":""},{"id":54,"label":"A Dog Left Behind","metadata":""},{"id":55,"label":"Bob Sweeney Prays","metadata":""},{"id":56,"label":"Motorcycle","metadata":""},{"id":57,"label":"Leading the Way Out of the Fire","metadata":""},{"id":58,"label":"Charlie Anderson Returns to the Remains of His Resort","metadata":""},{"id":59,"label":"Equal Opportunity Destroyer","metadata":""},{"id":60,"label":"Lone Cabin","metadata":""},{"id":61,"label":"The Great Smoky Mountains Church of Christ as a Beacon of Hope","metadata":""},{"id":62,"label":"Church","metadata":""},{"id":63,"label":"The Effects of the Wildfires on Water and Soil","metadata":""},{"id":64,"label":"Santa Biblia","metadata":""},{"id":65,"label":"Return of the Table Mountain Pines","metadata":""},{"id":66,"label":"No Children at Recess","metadata":""},{"id":67,"label":"Precious Items Left During Evacuation","metadata":""},{"id":68,"label":"Animal Rescue","metadata":""},{"id":69,"label":"Russell Biven Reports the Local Disaster","metadata":""},{"id":70,"label":"Smoky Classroom Windows","metadata":""},{"id":71,"label":"The Smoke Reaches Gatlinburg Valley","metadata":""},{"id":72,"label":"Stephanie Sweeney Recovers Her Grandmother\'s Cast Iron Skillets","metadata":""},{"id":73,"label":"The Kindness of Strangers","metadata":""},{"id":74,"label":"Escaping the Fire","metadata":""}]')}},function(e){e.O(0,[412,409,662,971,493,916,41,774,888,179],function(){return e(e.s=8266)}),_N_E=e.O()}]);