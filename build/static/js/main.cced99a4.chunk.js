(this["webpackJsonptest-timers"]=this["webpackJsonptest-timers"]||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(34),r=n.n(a),i=n(12),o=(n(39),n(40),n(41),n(2)),l=n(3),u=n(17),d=n.p+"static/media/beep.94ec08ca.mp3",j=function(e,t){return JSON.parse(window.localStorage.getItem(e))||t[e]},b=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},f=function(e,t,n){var c=j(e,Object(u.a)({},e,[]));b(e,c.filter((function(e){return e[n]!==t[n]})))},O=new Audio(d),m={pxWidth:1366,cmWidth:41,boxes:10,size:[7,2],time:{ready:15,alarm:19,limit:20}},h={pxWidth:j("pxWidth",m),setPxWidth:Object(l.b)((function(e,t){e.pxWidth=t})),cmWidth:j("cmWidth",m),setCmWidth:Object(l.b)((function(e,t){e.cmWidth=t})),boxes:j("boxes",m),setBoxes:Object(l.b)((function(e,t){e.boxes=t})),size:j("size",m),setSize:Object(l.b)((function(e,t){e.size=t})),time:j("time",m),setTime:Object(l.b)((function(e,t){e.time=t})),clock:Date(),setClock:Object(l.b)((function(e,t){e.clock=t})),network:!1,setNetwork:Object(l.b)((function(e,t){e.network=t})),message:"Scan a test",setMessage:Object(l.b)((function(e,t){e.message=t}))},x=n(4),v=n(20),p=n(6),g=n.n(p),N=n(10),w=n(11),S=n.n(w),k="http://".concat(window.location.hostname,":9999"),y="http://".concat(window.location.hostname,":10000"),C=function(){var e=Object(N.a)(g.a.mark((function e(t){var n,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... sending results:",t),n="".concat(y,"/result"),e.next=4,S.a.post(n,t);case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(N.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... getting events"),t="".concat(k,"/network/scan"),e.next=4,S.a.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(N.a)(g.a.mark((function e(t,n){var c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... configure wifi"),c="".concat(k,"/network/save"),e.next=4,S.a.post(c,{ssid:t,pass:n});case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(N.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... get device ID"),t="".concat(k,"/device/id"),e.next=4,S.a.get(t);case 4:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(N.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("... get git commit"),t="".concat(k,"/git/commit"),e.next=4,S.a.get(t);case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=n(13),A=n(14),L=n(0),F=function(e){var t=e.to;return Object(L.jsx)(i.b,{to:t,className:"navigator",children:"/home"===t?Object(L.jsx)(z.a,{icon:A.a}):Object(L.jsx)(z.a,{icon:A.c})})},B=function(e){var t=e.handleNegative,n=e.handlePositive,s=e.handleInvalid,a=e.handleMismatch,r=Object(l.d)((function(e){return e.setMessage})),i=Object(c.useState)(null),o=Object(x.a)(i,2),u=o[0],d=o[1],j=Object(c.useState)(3),b=Object(x.a)(j,2),f=b[0],O=b[1],m=Object(c.useState)(),h=Object(x.a)(m,2),v=h[0],p=h[1],g=Object(c.useState)(),N=Object(x.a)(g,2),w=N[0],S=N[1],k=Object(c.useState)(),y=Object(x.a)(k,2),C=y[0],W=y[1],E=null,D=function(e){return/^[A|B|C]$/.test(e)};return Object(c.useEffect)((function(){var e=function(e){var t=e.key;D(t)&&(W(t),S(Date.now()),null===E&&(E=t,d(t),r("Press again to confirm:"))),"F5"===t&&e.preventDefault()};document.addEventListener("keydown",e);var t=setInterval((function(){p(Date.now())}),1e3);return function(){document.removeEventListener("keydown",e),clearInterval(t)}}),[]),Object(c.useEffect)((function(){null!==u?(O(f-1),f-1):(O(3),3)}),[v]),Object(c.useEffect)((function(){f<=0&&D(C)&&("A"===C&&"A"===u&&t(),"B"===C&&"B"===u&&n(),"C"===C&&"C"===u&&s(),C!==u&&a())}),[w]),Object(L.jsxs)("div",{className:"field is-grouped mt-4",children:[("A"===u||null===u)&&Object(L.jsx)("button",{onClick:t,className:"button is-large is-outlined is-success",disabled:null!==u&&f>0,children:"Not detected"}),("B"===u||null===u)&&Object(L.jsx)("button",{onClick:n,className:"button is-large ml-4 is-outlined is-danger",disabled:null!==u&&f>0,children:"Detected"}),("C"===u||null===u)&&Object(L.jsx)("button",{onClick:s,className:"button is-large ml-4 is-outlined is-warning",disabled:null!==u&&f>0,children:"Incomplete"})]})},M=function(e){var t=e.test,n=e.setReady,s=e.setFree,a=t.id,r=t.barcode,i=Object(c.useState)(0),o=Object(x.a)(i,2),u=o[0],d=o[1],j=Object(c.useState)("free"),b=Object(x.a)(j,2),f=b[0],m=b[1],h=Object(l.e)((function(e){return e.size})),v=Object(l.e)((function(e){return e.pxWidth})),p=Object(l.e)((function(e){return e.cmWidth})),g=Object(l.e)((function(e){return e.clock})),N=Object(l.e)((function(e){return e.time})),w=N.ready,S=N.limit,k=N.alarm,y=v/p,C=[parseInt(h[0]*y),parseInt(h[1]*y)],W={height:C[1],width:C[0],minHeight:C[1],minWidth:C[0]},E=function(){m("counting")},D=function(){m("free"),d(0),n(a,!1),s(a)};return Object(c.useEffect)((function(){"free"!==f&&d(u+1),u>=w&&(m("finished"),n(a,!0)),u>=S&&m("overtime"),u>=k&&O.play()}),[g]),Object(c.useEffect)((function(){null!==r?E():D()}),[r]),Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("div",{className:"out-box animate__animated has-background-".concat(("free"===f?"success":"counting"===f&&"warning")||"finished"===f&&"danger"||"overtime"===f&&"danger"," ").concat("overtime"===f&&"animate__flash animate__infinite"),children:[Object(L.jsxs)("div",{className:"is-flex is-flex-centered has-background-black is-flex-column",style:W,children:[Object(L.jsx)("p",{className:"help is-success box-code is-size-4",children:r}),Object(L.jsxs)("div",{className:"field is-grouped",children:[Object(L.jsx)("button",{className:"button m-1 is-small is-rounded",onClick:E,children:">"}),Object(L.jsx)("button",{className:"button m-1 is-small is-rounded",onClick:D,children:"[]"}),Object(L.jsx)("button",{className:"button m-1 is-small is-rounded",children:u})]})]}),Object(L.jsx)("progress",{className:"progress is-info mt-2",max:w,value:u})]})})},P=function(){var e=Object(l.e)((function(e){return e.network}));return Object(L.jsx)(i.b,{to:"/wifi",className:"wifi",children:Object(L.jsx)(z.a,{icon:A.d,className:e?"has-text-success":"has-text-grey"})})},R=function(){var e=Object(l.e)((function(e){return e.boxes})),t=Object(l.e)((function(e){return e.message})),n=Object(l.e)((function(e){return e.clock})),s=Object(l.e)((function(e){return e.network})),a=Object(l.d)((function(e){return e.setClock})),r=Object(l.d)((function(e){return e.setMessage})),i=Object(l.d)((function(e){return e.setNetwork})),o=Object(v.a)(Array(parseInt(e)).keys()),d=[];o.forEach((function(e){d.push({id:e,barcode:null,ready:!1,start:null})}));var O=Object(c.useState)(""),m=Object(x.a)(O,2),h=m[0],p=m[1],g=Object(c.useState)(""),N=Object(x.a)(g,2),w=N[0],S=N[1],k=Object(c.useState)(""),y=Object(x.a)(k,2),W=y[0],E=y[1],I=Object(c.useState)(!1),z=Object(x.a)(I,2),A=z[0],R=z[1],T=Object(c.useState)(Date.now()),_=Object(x.a)(T,2),J=_[0],H=_[1],V=Object(c.useState)(d),$=Object(x.a)(V,2),q=$[0],G=$[1],K=Object(c.useState)(""),Q=Object(x.a)(K,2),U=Q[0],X=Q[1],Y=function(e,t){Object(v.a)(q)[e].ready=t},Z=function(e){var t=Object(v.a)(q);t[e].barcode=null,G(t)},ee=function(){R(!1),r(""),console.log(W);var e=q.find((function(e){return e.barcode===W}));Z(e.id),Y(e.id,!1);var t=Date.now();return{start:e.start,end:t}},te=function(e){console.log("... data send:",e),f("recorded",e,"barcode")},ne=function(e){console.error("... data not send",e),console.error("... save to local storage",e),function(e,t){var n=j(e,Object(u.a)({},e,[]));n.push(t),b(e,n)}("recorded",e)};return Object(c.useEffect)((function(){var e=Date.now();S("".concat(e-J>500?"":w).concat(h)),H(e)}),[h]),Object(c.useEffect)((function(){if(Date.now()-J>500&&""!==w){E(w);var e=Object(v.a)(q),t=e.map((function(e){return e.barcode})),n=t.indexOf(null);if(!t.includes(w))R(!1),n>=0?(q[n].barcode=w,q[n].start=Date.now(),r("Starting timer for test: "+w)):r("No box available for: "+w);else q.find((function(e){return e.barcode===w})).ready?(r("Test ".concat(w," is ready, select an option:")),R(!0)):r("Test ".concat(w," is not ready"));G(e),S("")}}),[n]),Object(c.useEffect)((function(){if(s){var e=j("recorded",{recorded:[]});console.log("Send data from storage"),e.forEach((function(e){console.log("...sending data:",e),C(e).then((function(){return f("recorded",e,"barcode")}))}))}}),[s]),Object(c.useEffect)((function(){D().then((function(e){return X(e.id)}));var e=function(e){var t=e.key;1===t.length&&/\d/.test(t)&&p(t),"F5"===t&&e.preventDefault()},t=setInterval((function(){a(Date())}),500);return document.addEventListener("keydown",e),window.addEventListener("offline",(function(){return i(!1)})),window.addEventListener("online",(function(){return i(!0)})),i(window.navigator.onLine),function(){document.removeEventListener("keydown",e),window.removeEventListener("offline",(function(){return i(!1)})),window.removeEventListener("online",(function(){return i(!0)})),clearInterval(t)}}),[]),Object(L.jsxs)("div",{className:"home-container",children:[Object(L.jsxs)("header",{children:[Object(L.jsx)("p",{className:"has-text-centered title mt-4",children:t}),A&&Object(L.jsx)(B,{handleNegative:function(){var e=ee(),t=e.start,n=e.end,c={barcode:W,result:1,id:U,start:t,end:n};C(c).then((function(){return te(c)})).catch((function(){return ne(c)}))},handlePositive:function(){var e=ee(),t=e.start,n=e.end,c={barcode:W,result:2,id:U,start:t,end:n};C(c).then((function(){return te(c)})).catch((function(){return ne(c)}))},handleInvalid:function(){var e=ee(),t=e.start,n=e.end,c={barcode:W,result:3,id:U,start:t,end:n};C(c).then((function(){return te(c)})).catch((function(){return ne(c)}))},handleMismatch:function(){R(!1),r("")}})]}),Object(L.jsxs)("div",{className:"box-container",children:[q.map((function(e){return Object(L.jsx)(M,{test:e,setReady:Y,setFree:Z},e.id)})),Object(L.jsx)(F,{to:"/config",onClick:function(){return console.log("Clicked Navigator")}}),Object(L.jsx)(P,{})]})]})},T=n(15),_=function(e){var t=e.active,n=e.setActive,c=e.title,s=e.confirm,a=e.setAction;return Object(L.jsxs)("div",{className:"modal ".concat(t&&"is-active"),children:[Object(L.jsx)("div",{className:"modal-background"}),Object(L.jsxs)("div",{className:"modal-card",children:[Object(L.jsx)("header",{className:"modal-card-head",children:Object(L.jsx)("p",{className:"modal-card-title",children:c})}),Object(L.jsxs)("footer",{className:"modal-card-foot is-flex-end",children:[Object(L.jsx)("button",{className:"button is-success is-outlined",onClick:function(){return a()},children:s}),Object(L.jsx)("button",{className:"button",onClick:function(){return n(!1)},children:"Cancel"})]})]})]})},J=function(){var e=Object(o.f)(),t=Object(c.useState)(""),n=Object(x.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(!1),i=Object(x.a)(r,2),u=i[0],d=i[1],j=Object(c.useState)(!1),f=Object(x.a)(j,2),O=f[0],m=f[1],h=Object(c.useState)(""),v=Object(x.a)(h,2),p=v[0],g=v[1],N=Object(c.useState)(""),w=Object(x.a)(N,2),S=w[0],k=w[1],y=Object(l.e)((function(e){return e.pxWidth})),C=Object(l.e)((function(e){return e.cmWidth})),W=Object(l.e)((function(e){return e.boxes})),E=Object(l.e)((function(e){return e.size})),B=Object(l.e)((function(e){return e.time})),M=Object(l.d)((function(e){return e.setPxWidth})),P=Object(l.d)((function(e){return e.setCmWidth})),R=Object(l.d)((function(e){return e.setBoxes})),J=Object(l.d)((function(e){return e.setSize})),H=Object(l.d)((function(e){return e.setTime})),V=Object(c.useState)(y),$=Object(x.a)(V,2),q=$[0],G=$[1],K=Object(c.useState)(C),Q=Object(x.a)(K,2),U=Q[0],X=Q[1],Y=Object(c.useState)(W),Z=Object(x.a)(Y,2),ee=Z[0],te=Z[1],ne=Object(c.useState)(E),ce=Object(x.a)(ne,2),se=ce[0],ae=ce[1],re=Object(c.useState)(B),ie=Object(x.a)(re,2),oe=ie[0],le=ie[1];return Object(c.useEffect)((function(){D().then((function(e){return g(e.id)})),I().then((function(e){return k(e.commit.date)}))})),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(F,{to:"/home"}),Object(L.jsx)("div",{className:"is-flex is-flex-centered config",children:Object(L.jsxs)("div",{children:[Object(L.jsx)("h1",{className:"subtitle has-text-centered",children:"Configuration"}),Object(L.jsxs)("div",{className:"field",children:[Object(L.jsx)("label",{className:"label",children:"Number of boxes"}),Object(L.jsx)("div",{className:"control",children:Object(L.jsx)("input",{className:"input",type:"number",placeholder:"10",value:ee,onChange:function(e){return te(e.target.value)}})})]}),Object(L.jsxs)("div",{className:"field",children:[Object(L.jsx)("label",{className:"label",children:"Width of screen in pixels."}),Object(L.jsx)("div",{className:"control",children:Object(L.jsx)("input",{className:"input",type:"number",placeholder:"1366",value:q,onChange:function(e){return G(e.target.value)}})})]}),Object(L.jsxs)("div",{className:"field",children:[Object(L.jsx)("label",{className:"label",children:"Width of screen in centimeters."}),Object(L.jsx)("div",{className:"control",children:Object(L.jsx)("input",{className:"input",type:"number",placeholder:"41",value:U,onChange:function(e){return X(e.target.value)}})})]}),Object(L.jsxs)("div",{className:"field",children:[Object(L.jsx)("label",{className:"label",children:"Size of box in cm."}),Object(L.jsxs)("div",{className:"control is-flex",children:[Object(L.jsx)("input",{className:"input",type:"number",placeholder:"7",value:se[0],onChange:function(e){return ae([e.target.value,se[1]])},title:"Width"}),Object(L.jsx)("input",{className:"input ml-4",type:"number",placeholder:"2",value:se[1],onChange:function(e){return ae([se[0],e.target.value])},title:"Height"})]})]}),Object(L.jsxs)("div",{className:"field",children:[Object(L.jsx)("label",{className:"label",children:"Process time in min."}),Object(L.jsxs)("div",{className:"control is-flex",children:[Object(L.jsx)("input",{className:"input",type:"number",placeholder:"15",value:oe.ready,title:"Ready to read time",onChange:function(e){return le(Object(T.a)(Object(T.a)({},oe),{},{ready:e.target.value}))}}),Object(L.jsx)("input",{className:"input ml-4",type:"number",placeholder:"19",value:oe.alarm,title:"Alarm time",onChange:function(e){return le(Object(T.a)(Object(T.a)({},oe),{},{alarm:e.target.value}))}}),Object(L.jsx)("input",{className:"input ml-4",type:"number",placeholder:"20",value:oe.limit,title:"Maximum time to get reading",onChange:function(e){return le(Object(T.a)(Object(T.a)({},oe),{},{limit:e.target.value}))}})]})]}),Object(L.jsx)("button",{onClick:function(){M(q),P(U),R(ee),J(se),H(oe),b("pxWidth",q),b("cmWidth",U),b("boxes",ee),b("size",se),b("time",oe),a(" ... going home"),d(!0),setTimeout((function(){return e("/home")}),1e3)},className:"button is-success is-outlined mt-4 ".concat(u&&"is-loading"),children:"Save"}),Object(L.jsx)("p",{className:"help",children:s}),Object(L.jsxs)("div",{className:"is-flex is-flex-centered m-4 ",children:[Object(L.jsx)(z.a,{icon:A.b,className:"has-text-danger pointer",size:"lg",onClick:function(){return m(!0)}}),Object(L.jsx)(_,{active:O,setActive:m,setAction:function(){console.log("... powering off")},title:"Do you want to shutdown?",confirm:"Shutdown"})]}),Object(L.jsxs)("div",{className:"is-flex mt-4 is-flex-between",children:[Object(L.jsxs)("p",{className:"has-text-grey mt-4",children:["ID: ",p]}),Object(L.jsxs)("p",{className:"has-text-grey mt-4",children:["Version: ",S]})]})]})})]})},H=function(){var e=Object(o.f)(),t=Object(c.useState)(!1),n=Object(x.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)([]),i=Object(x.a)(r,2),l=i[0],u=i[1],d=Object(c.useRef)(),j=Object(c.useRef)();return Object(c.useEffect)((function(){W().then((function(e){return u(e.networks)}))}),[]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(F,{to:"/home"}),Object(L.jsx)("div",{className:"is-flex is-flex-centered config",children:Object(L.jsxs)("div",{children:[Object(L.jsx)("h1",{className:"subtitle has-text-centered",children:"Wifi Configuration"}),Object(L.jsxs)("div",{className:"field",children:[Object(L.jsx)("label",{className:"label",children:"SSID"}),Object(L.jsx)("div",{className:"control",children:Object(L.jsx)("input",{className:"input",type:"text",placeholder:"WiFi SSID",ref:d})})]}),Object(L.jsxs)("div",{className:"field",children:[Object(L.jsx)("label",{className:"label",children:"Password"}),Object(L.jsx)("div",{className:"control",children:Object(L.jsx)("input",{className:"input",type:"text",placeholder:"********",ref:j})})]}),Object(L.jsx)("button",{onClick:function(){a(!0),E(d.current.value,j.current.value),setTimeout((function(){return e("/home")}),1e3)},className:"button is-success is-outlined mt-4 ".concat(s&&"is-loading"),children:"Save"}),Object(L.jsx)("p",{className:"help",children:""}),Object(L.jsx)("p",{className:"mt-4 has-text-centered",children:"Available networks"}),Object(L.jsxs)("table",{className:"table is-striped is-fullwidth",children:[Object(L.jsx)("thead",{children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{children:" SSID "}),Object(L.jsx)("th",{children:" SNR "})]})}),Object(L.jsx)("tbody",{children:l.map((function(e){return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:e.ssid}),Object(L.jsx)("td",{children:e.snr})]})}))})]})]})})]})},V=Object(l.c)(h),$=function(){return Object(L.jsx)("div",{children:Object(L.jsx)(l.a,{store:V,children:Object(L.jsxs)(o.c,{children:[Object(L.jsx)(o.a,{path:"home",element:Object(L.jsx)(R,{})}),Object(L.jsx)(o.a,{path:"config",element:Object(L.jsx)(J,{})}),Object(L.jsx)(o.a,{path:"wifi",element:Object(L.jsx)(H,{})}),Object(L.jsx)(o.a,{path:"*",element:Object(L.jsx)(R,{})})]})})})};r.a.render(Object(L.jsx)(s.a.StrictMode,{children:Object(L.jsx)(i.a,{children:Object(L.jsx)($,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.cced99a4.chunk.js.map