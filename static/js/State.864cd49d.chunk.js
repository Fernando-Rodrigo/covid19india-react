(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[17],{145:function(e,t,a){"use strict";e.exports=function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var n,r,c;if(Array.isArray(t)){if((n=t.length)!=a.length)return!1;for(r=n;0!==r--;)if(!e(t[r],a[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((n=(c=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(r=n;0!==r--;)if(!Object.prototype.hasOwnProperty.call(a,c[r]))return!1;for(r=n;0!==r--;){var i=c[r];if(!e(t[i],a[i]))return!1}return!0}return t!==t&&a!==a}},172:function(e,t,a){"use strict";var n=a(32),r=a(0),c=a.n(r),i=a(23),o={opacity:1,transform:"translate3d(0, 0px, 0) scale(1)",zIndex:999,position:"absolute",pointerEvents:"none"},s={opacity:0,transform:"translate3d(0, 0px, 0) scale(0.99)",zIndex:999,position:"absolute",pointerEvents:"none"};t.a=function(e){var t=e.data,a=e.children,l=Object(r.useState)(!1),u=Object(n.a)(l,2),d=u[0],m=u[1],f=Object(i.f)(d,null,{from:s,enter:o,leave:s,config:{mass:1,tension:210,friction:20}});return c.a.createElement("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:function(){m(!0)},onMouseLeave:function(){m(!1)}},a,f.map((function(e){var a=e.item,n=e.key,r=e.props;return a?c.a.createElement(i.a.div,{key:n,style:r},c.a.createElement("div",{className:"message"},c.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}}))):c.a.createElement(i.a.div,{key:n})})))}},230:function(e,t,a){"use strict";var n=a(0),r="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,c=a(24),i={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};t.a=c.a&&window.ResizeObserver?function(){var e=Object(n.useState)(null),t=e[0],a=e[1],c=Object(n.useState)(i),o=c[0],s=c[1],l=Object(n.useMemo)((function(){return new window.ResizeObserver((function(e){if(e[0]){var t=e[0].contentRect,a=t.x,n=t.y,r=t.width,c=t.height,i=t.top,o=t.left,l=t.bottom,u=t.right;s({x:a,y:n,width:r,height:c,top:i,left:o,bottom:l,right:u})}}))}),[]);return r((function(){if(t)return l.observe(t),function(){l.disconnect()}}),[t]),[a,o]}:function(){return[function(){},i]}},334:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1),i=a.n(c);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,c=e.size,i=void 0===c?24:c,l=s(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="Info",t.a=l},335:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1),i=a.n(c);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,c=e.size,i=void 0===c?24:c,l=s(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="Compass",t.a=l},363:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(89),r=a(8),c=a(4),i=a(3);function o(e,t){Object(i.a)(2,arguments);var a=Object(c.a)(e),n=Object(r.a)(t);if(isNaN(n))return new Date(NaN);if(!n)return a;var o=a.getDate(),s=new Date(a.getTime());s.setMonth(a.getMonth()+n+1,0);var l=s.getDate();return o>=l?s:(a.setFullYear(s.getFullYear(),s.getMonth(),o),a)}function s(e,t){Object(i.a)(2,arguments);var a=Object(r.a)(t);return o(e,-a)}function l(e,t){if(Object(i.a)(2,arguments),!t||"object"!==typeof t)return new Date(NaN);var a="years"in t?Object(r.a)(t.years):0,o="months"in t?Object(r.a)(t.months):0,l="weeks"in t?Object(r.a)(t.weeks):0,u="days"in t?Object(r.a)(t.days):0,d="hours"in t?Object(r.a)(t.hours):0,m="minutes"in t?Object(r.a)(t.minutes):0,f="seconds"in t?Object(r.a)(t.seconds):0,p=s(Object(c.a)(e),o+12*a),v=Object(n.a)(p,u+7*l),b=m+60*d,h=f+60*b,O=1e3*h,j=new Date(v.getTime()-O);return j}},380:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a(33),c=a(48),i=a(153),o=a(145),s=a.n(o),l=a(0),u=a.n(l),d=function(e,t){return Object(c.j)(e,"delta",t)},m=50,f=0,p=50,v=0;var b=u.a.memo((function(e){var t=e.timeseries,a=e.statistic,n=Object(l.useRef)(),o=Object.keys(t||{}).filter((function(e){return e<=Object(c.i)()})).slice(-r.m);return Object(l.useEffect)((function(){var e=i.E(n.current),s=250-f,l=250-p,u=i.x().domain(o).range([v,s]).paddingInner(.33),b=i.y().domain([Math.min(0,i.s(o,(function(e){return d(t[e],a)}))),Math.max(1,i.r(o,(function(e){return d(t[e],a)})))]).range([l,m]),O=i.a(u).tickSize(0).tickFormat((function(e){return Object(c.d)(e,"dd MMM")})),j=e.transition().duration(r.b);e.select(".x-axis").transition(j).style("transform","translateY(".concat(b(0),"px)")).call(O).on("start",(function(){return e.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy",(function(e,n){return d(t[e],a)<0?"-1em":"1.5em"})).style("text-anchor","middle").attr("fill",r.a[a]),e.selectAll(".bar").data(o).join((function(e){return e.append("path").attr("class","bar").attr("d",(function(e){return h(u(e),b(0),u.bandwidth(),0,5)}))})).transition(j).attr("d",(function(e){return h(u(e),b(0),u.bandwidth(),b(0)-b(d(t[e],a)),5)})).attr("fill",(function(e,t){return t<e.length-1?r.a[a]+"90":r.a[a]}));var y=e.selectAll(".label").data(o).join("text").attr("class","label").attr("x",(function(e){return u(e)+u.bandwidth()/2})).text((function(e){return Object(c.f)(d(t[e],a))}));y.transition(j).attr("fill",r.a[a]).attr("y",(function(e){var n=d(t[e],a);return b(n)+(n<0?15:-6)})),y.append("tspan").attr("dy",(function(e){return"".concat(d(t[e],a)<0?1.2:-1.2,"em")})).attr("x",(function(e){return u(e)+u.bandwidth()/2})).text((function(e,n){if(0===n)return"";var r=d(t[o[n-1]],a);if(!r)return"";var i=d(t[e],a)-r;return"".concat(i>0?"+":"").concat(Object(c.f)(100*i/Math.abs(r)),"%")})).transition(j).attr("fill",r.a[a]+"90")}),[o,t,a]),u.a.createElement("div",{className:"DeltaBarGraph"},u.a.createElement("svg",{ref:n,width:"250",height:"250",viewBox:"0 0 250 250",preserveAspectRatio:"xMidYMid meet"},u.a.createElement("g",{className:"x-axis",transform:"translate(0, ".concat(250-p,")")}),u.a.createElement("g",{className:"y-axis"})))}),(function(e,t){return!!s()(e.statistic,t.statistic)}));function h(e,t,a,n,r){return r=Math.sign(n)*Math.min(Math.abs(n),r),["M ".concat(e," ").concat(t),"v ".concat(-n+r),"q 0 ".concat(-r," ").concat(Math.abs(r)," ").concat(-r),"h ".concat(a-2*Math.abs(r)),"q ".concat(Math.abs(r)," 0 ").concat(Math.abs(r)," ").concat(r),"v ".concat(n-r),"Z"].join(" ")}var O=a(10),j=a(23),y=a(133),g=function(e){var t=e.stateCode,a=Object(l.useState)(!1),c=Object(n.a)(a,2),i=c[0],o=c[1],s=Object(l.useRef)(),d=Object(O.g)();Object(y.a)(s,(function(){o(!1)}));var m=Object(j.f)(i,null,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}});return u.a.createElement("div",{className:"StateDropdown"},u.a.createElement("h1",{className:"state-name",onClick:function(){o((function(e){return!e}))}},r.r[t]),m.map((function(e){var a=e.item,n=(e.key,e.props);return a?u.a.createElement(j.a.div,{className:"dropdown",style:n,ref:s},Object.keys(r.r).filter((function(e){return"UN"!==e&&"TT"!==e})).map((function(e){return u.a.createElement("h1",{key:e,className:"item",onClick:function(){o(!1),d.push("/state/".concat(e))}},r.r[e])}))):u.a.createElement(j.a.div,{key:t,style:n})})),i&&u.a.createElement("div",{className:"backdrop"}))},E=a(172),w=a(334);var x=function(e){var t=e.title,a=e.statistic,n=e.total,r=e.formula,c=e.date,i=e.description,o=e.className;return u.a.createElement("div",{className:"meta-item ".concat(o)},u.a.createElement("div",{className:"meta-item-top"},u.a.createElement("h3",null,t),u.a.createElement(E.a,{data:r},u.a.createElement(w.a,null))),u.a.createElement("h1",null,a),u.a.createElement("h5",null,c),n&&u.a.createElement("h5",null,"India has ".concat(n," CPM")),u.a.createElement("p",null,i))},N=a(129),M=a(363),k=a(335);var S=function(e){var t,a,n,i,o=e.stateCode,s=e.data,l=e.timeseries,d=Object(c.j)(s[o],"total","confirmed"),m=Object(c.j)(s[o],"total","active"),f=Object(c.j)(s[o],"total","deceased"),p=Object(c.j)(s[o],"total","recovered"),v=Object(c.j)(s[o],"total","tested"),b=Object(c.j)(s.TT,"total","confirmed"),h=Object(N.a)(Object(c.g)(),"yyyy-MM-dd"),O=Object(N.a)(Object(M.a)(Object(c.g)(),{weeks:1}),"yyyy-MM-dd"),j=Object(c.j)(null===(t=l[o])||void 0===t?void 0:t[O],"total","confirmed"),y=d/r.t[o],g=v/r.t[o],E=b/r.t.TT,w=p/d*100,S=m/d*100,C=f/d*100,z=(d-j)/j*100;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"StateMeta population"},u.a.createElement("div",{className:"meta-item population fadeInUp"},u.a.createElement("h3",null,"Population"),u.a.createElement("h1",null,Object(c.f)(r.s[o]))),u.a.createElement("div",{className:"alert"},u.a.createElement(k.a,null),u.a.createElement("div",{className:"alert-right"},"Based on 2019 population projection by NCP"," ",u.a.createElement("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank"},"report")))),u.a.createElement("div",{className:"StateMeta"},u.a.createElement(x,{className:"confirmed",title:"Confirmed Per Million",statistic:Object(c.f)(y),total:Object(c.f)(E),formula:"(confirmed / state population) * 1 Million",description:"\n            ".concat(Object(c.f)(Math.round(y))," out of every 1 million people in ").concat(r.r[o]," have tested positive for the virus.\n            ")}),u.a.createElement(x,{className:"active",title:"Active",statistic:"".concat(Object(c.f)(S),"%"),formula:"(active / confirmed) * 100",description:S>0?"For every 100 confirmed cases, ".concat(Object(c.f)(Math.round(S))," are currently infected."):"Currently, there are no active cases in this state."}),u.a.createElement(x,{className:"recovery",title:"Recovery Rate",statistic:"".concat(Object(c.f)(w),"%"),formula:"(recovered / confirmed) * 100",description:w>0?"For every 100 confirmed cases, ".concat(Object(c.f)(Math.round(w))," have recovered from the virus."):"Unfortunately, there are no recoveries in this state yet."}),u.a.createElement(x,{className:"mortality",title:"Mortality Rate",statistic:"".concat(Object(c.f)(C),"%"),formula:"(deceased / confirmed) * 100",description:C>0?"For every 100 confirmed cases, ".concat(Object(c.f)(Math.round(C))," have unfortunately passed away from the virus."):"Fortunately, no one has passed away from the virus in this state."}),u.a.createElement(x,{className:"gr",title:"Avg. Growth Rate",statistic:z>0?"".concat(Object(c.f)(Math.round(z/7)),"%"):"-",formula:"(((previousDayData - sevenDayBeforeData) / sevenDayBeforeData) * 100)/7",date:"".concat(Object(c.d)(O,"dd MMM")," - ").concat(Object(c.d)(h,"dd MMM")),description:z>0?"In the last one week, the number of new infections has\n              grown by an average of ".concat(Object(c.f)(Math.round(z/7)),"%\n              every day."):"There has been no growth in the number of infections in last one week."}),u.a.createElement(x,{className:"tpm",title:"Tests Per Million",statistic:"\u2248 ".concat(Object(c.f)(Math.round(g))),formula:"(total tests in state / total population of state) * 1 Million",date:v?"As of ".concat(Object(c.e)(null===(a=s[o])||void 0===a||null===(n=a.meta)||void 0===n||null===(i=n.tested)||void 0===i?void 0:i.last_updated)," ago"):"",description:g>0?"For every 1 million people in ".concat(r.r[o],",\n                ").concat(Object(c.f)(Math.round(g))," people were tested."):"No tests have been conducted in this state yet."})))},C=a(62),z=a(1),T=a.n(z);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var I=Object(l.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,r=e.size,c=void 0===r?24:r,i=R(e,["color","size"]);return u.a.createElement("svg",P({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),u.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),u.a.createElement("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),u.a.createElement("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),u.a.createElement("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"}))}));I.propTypes={color:T.a.string,size:T.a.oneOfType([T.a.string,T.a.number])},I.displayName="Smile";var D=I,F=a(55),L=a(143),_=a(230),A=a(75),B=a(159),U=Object(l.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(20)]).then(a.bind(null,387))})),X=Object(l.lazy)((function(){return Promise.all([a.e(0),a.e(30),a.e(12)]).then(a.bind(null,388))})),H=Object(l.lazy)((function(){return a.e(9).then(a.bind(null,225))})),W=Object(l.lazy)((function(){return Promise.all([a.e(1),a.e(14)]).then(a.bind(null,373))})),Y=Object(l.lazy)((function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,374))}));t.default=u.a.memo((function(e){var t,a,i,o,s=Object(L.a)().t,d=Object(O.i)().stateCode.toUpperCase(),m=Object(l.useState)("confirmed"),f=Object(n.a)(m,2),p=f[0],v=f[1],h=Object(_.a)(),j=Object(n.a)(h,2),y=j[0],E=j[1].width,w=Object(l.useState)(!1),x=Object(n.a)(w,2),N=x[0],M=x[1],k=Object(l.useState)({stateCode:d,districtName:null}),z=Object(n.a)(k,2),T=z[0],P=z[1];Object(A.a)((function(){Object(C.a)({targets:".highlight",duration:200,delay:500,translateX:"confirmed"===p?"".concat(0*E,"px"):"active"===p?"".concat(.25*E,"px"):"recovered"===p?"".concat(.5*E,"px"):"deceased"===p?"".concat(.75*E,"px"):"0px",easing:"spring(1, 80, 90, 10)",opacity:1})}));var R=Object(B.a)("https://api.covid19india.org/v3/min/timeseries.min.json",c.c,{suspense:!0,revalidateOnFocus:!1}).data,I=Object(B.a)("https://api.covid19india.org/v3/min/data.min.json",c.c,{suspense:!0,revalidateOnMount:!0,refreshInterval:1e5,revalidateOnFocus:!1}).data,q=Object(l.useMemo)((function(){var e,t=window.innerWidth>=540?3:2,a=(null===(e=I[d])||void 0===e?void 0:e.districts)?Object.keys(I[d].districts).length:0;return Math.ceil(a/t)}),[I,d]);return u.a.createElement(u.a.Fragment,null,u.a.createElement(F.a,null,u.a.createElement("title",null,"Coronavirus Outbreak in ",r.r[d]," - covid19india.org"),u.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(r.r[d],": Latest Map and Case Count")})),u.a.createElement("div",{className:"State"},u.a.createElement("div",{className:"state-left"},u.a.createElement("div",{className:"header"},u.a.createElement("div",{className:"header-left"},u.a.createElement(g,{stateCode:d}),u.a.createElement("h5",null,"Last Updated on ".concat(Object(c.d)(I[d].meta.last_updated,"dd MMM, p")," IST"))),u.a.createElement("div",{className:"header-right"},u.a.createElement("h5",null,s("Tested")),(null===(t=I[d])||void 0===t||null===(a=t.total)||void 0===a?void 0:a.tested)&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,Object(c.f)(I[d].total.tested)),u.a.createElement("h5",{className:"timestamp"},"As of ".concat(Object(c.d)(I[d].meta.tested.last_updated,"dd MMMM"))),u.a.createElement("h5",null,"per ",u.a.createElement("a",{href:I[d].meta.tested.source,target:"_noblank"},"source"))))),u.a.createElement("div",{className:"map-switcher",ref:y},u.a.createElement("div",{className:"highlight ".concat(p),style:{transform:"translateX(".concat(0*E,"px)"),opacity:0}}),u.a.createElement("div",{className:"clickable",onClick:function(){v("confirmed"),Object(C.a)({targets:".highlight",translateX:"".concat(0*E,"px"),easing:"spring(1, 80, 90, 10)"})}}),u.a.createElement("div",{className:"clickable",onClick:function(){v("active"),Object(C.a)({targets:".highlight",translateX:"".concat(.25*E,"px"),easing:"spring(1, 80, 90, 10)"})}}),u.a.createElement("div",{className:"clickable",onClick:function(){v("recovered"),Object(C.a)({targets:".highlight",translateX:"".concat(.5*E,"px"),easing:"spring(1, 80, 90, 10)"})}}),u.a.createElement("div",{className:"clickable",onClick:function(){v("deceased"),Object(C.a)({targets:".highlight",translateX:"".concat(.75*E,"px"),easing:"spring(1, 80, 90, 10)"})}})),u.a.createElement(Y,{data:I[d]}),u.a.createElement(W,{timeseries:R[d]}),u.a.createElement(l.Suspense,{fallback:u.a.createElement("div",null)},u.a.createElement(X,Object.assign({isCountryLoaded:!1},{stateCode:d,data:I,regionHighlighted:T,setRegionHighlighted:P,mapStatistic:p,setMapStatistic:v}))),u.a.createElement(S,{stateCode:d,data:I,timeseries:R})),u.a.createElement("div",{className:"state-right"},u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"district-bar",style:N?{}:{display:"flex"}},u.a.createElement("div",{className:"district-bar-left fadeInUp"},u.a.createElement("h2",{className:p},"Top districts"),u.a.createElement("div",{className:"districts ".concat(N?"is-grid":""),style:N?{gridTemplateRows:"repeat(".concat(q,", 2rem)")}:{}},Object.keys((null===(i=I[d])||void 0===i?void 0:i.districts)||{}).filter((function(e){return"Unknown"!==e})).sort((function(e,t){return function(e,t){var a=I[d].districts[e],n=I[d].districts[t];return Object(c.j)(n,"total",p)-Object(c.j)(a,"total",p)}(e,t)})).slice(0,N?void 0:5).map((function(e){var t=Object(c.j)(I[d].districts[e],"total",p),a=Object(c.j)(I[d].districts[e],"delta",p);return u.a.createElement("div",{key:e,className:"district"},u.a.createElement("h2",null,Object(c.f)(t)),u.a.createElement("h5",null,s(e)),"active"!==p&&u.a.createElement("div",{className:"delta"},u.a.createElement("h6",{className:p},a>0?"\u2191"+Object(c.f)(a):"")))}))),Object.keys((null===(o=I[d])||void 0===o?void 0:o.districts)||{}).length>5&&u.a.createElement("button",{className:"button",onClick:function(){M(!N)}},u.a.createElement("span",null,N?"View less":"View all"))),u.a.createElement("div",{className:"district-bar-right"},("confirmed"===p||"deceased"===p)&&u.a.createElement("div",{className:"happy-sign"},Object.keys(R[d]||{}).slice(-r.m).every((function(e){return 0===Object(c.j)(R[d][e],"delta",p)}))&&u.a.createElement("div",{className:"alert ".concat("confirmed"===p?"is-green":"")},u.a.createElement(D,null),u.a.createElement("div",{className:"alert-right"},"No new ",p," cases in the past five days"))),u.a.createElement(b,{timeseries:R[d],statistic:p}))),u.a.createElement(l.Suspense,{fallback:u.a.createElement("div",null)},u.a.createElement(U,Object.assign({timeseries:R[d]},{regionHighlighted:T,setRegionHighlighted:P})))))),u.a.createElement(H,null))}))}}]);
//# sourceMappingURL=State.864cd49d.chunk.js.map