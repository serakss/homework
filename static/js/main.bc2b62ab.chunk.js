(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={input:"SuperInputText_input__2JsrI",superInput:"SuperInputText_superInput__ju1Oz",errorInput:"SuperInputText_errorInput__1Y4de",error:"SuperInputText_error__3zphm"}},17:function(e,t,n){e.exports={someClass:"Greeting_someClass__cLSGO",error:"Greeting_error__KToVR"}},18:function(e,t,n){e.exports={blue:"HW4_blue__kygfH",column:"HW4_column__39iFz",testSpanError:"HW4_testSpanError__2nE10"}},19:function(e,t,n){e.exports={default:"SuperButton_default__1i3aB",red:"SuperButton_red__3M0zh"}},20:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__2PizZ",spanClassName:"SuperCheckbox_spanClassName__29ucZ"}},27:function(e,t,n){e.exports={App:"App_App__2E56t"}},28:function(e,t,n){e.exports={speech:"Message_speech__2lrH8"}},30:function(e,t,n){e.exports={item:"HW8_item__tOdpE"}},37:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(26),s=n.n(a),i=(n(37),n(27)),o=n.n(i),j=n(9),u=n(2),l=n(0);var b=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"404"}),Object(l.jsx)("div",{children:"Page not found!"}),Object(l.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},d=n(28),O=n.n(d);var h=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{children:[" ",Object(l.jsx)("img",{src:e.avatar,width:"100",height:"100"})]}),Object(l.jsxs)("span",{className:O.a.message,children:[e.name,e.message,e.time]})]})},x="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Some Name",m="some text",f="22:00";var v=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 1",Object(l.jsx)(h,{avatar:x,name:p,message:m,time:f}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},g=n(3);var C=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:e.affair.name}),Object(l.jsx)("div",{children:e.affair.priority}),Object(l.jsx)("button",{onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var _=function(e){var t=e.data.map((function(t){return Object(l.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(l.jsxs)("div",{children:[t,Object(l.jsx)("button",{onClick:function(){return e.setFilter("all")},children:"All"}),Object(l.jsx)("button",{onClick:function(){return e.setFilter("high")},children:"High"}),Object(l.jsx)("button",{onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(l.jsx)("button",{onClick:function(){return e.setFilter("low")},children:"Low"})]})},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var N=function(){var e=Object(r.useState)(k),t=Object(g.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),s=Object(g.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 2",Object(l.jsx)(_,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},y=n(14),S=n(17),w=n.n(S),E=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,c=e.error,a=e.totalUsers,s=e.onEnter,i=c?w.a.errorInput:w.a.input;return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{value:t,onChange:n,className:i,onKeyDown:s,onBlur:n}),Object(l.jsx)("span",{children:c}),Object(l.jsx)("button",{onClick:r,disabled:!t,children:" add"}),Object(l.jsx)("span",{children:a})]})},T=function(e){var t=e.users,n=e.addUserCallback,c=Object(r.useState)(""),a=Object(g.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(""),j=Object(g.a)(o,2),u=j[0],b=j[1],d=function(){n(s),alert("Hello ".concat(s," ! ")),i("")},O=t.length;return Object(l.jsx)(E,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),b("")):(i(""),b("name is require!"))},addUser:d,error:u,totalUsers:O,onEnter:function(e){"Enter"===e.key&&s&&d()}})},I=n(29);var F=function(){var e=Object(r.useState)([]),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 3",Object(l.jsx)(T,{users:n,addUserCallback:function(e){var t={_id:Object(I.v1)(),name:e};c([].concat(Object(y.a)(n),[t]))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},A=n(4),H=n(6),B=n(12),P=n.n(B),J=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(H.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(P.a.error," ").concat(i||""),u="".concat(P.a.input," ").concat(a?P.a.errorInput:P.a.superInput," ").concat(s);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(A.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:u},o)),a&&Object(l.jsx)("span",{className:j,children:a})]})},W=n(18),K=n.n(W),R=n(19),U=n.n(R),z=function(e){var t=e.red,n=e.className,r=Object(H.a)(e,["red","className"]),c="".concat(t?U.a.red:U.a.default," ").concat(n);return Object(l.jsx)("button",Object(A.a)({className:c},r))},D=n(20),G=n.n(D),M=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(H.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(G.a.checkbox," ").concat(r||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(A.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(l.jsx)("span",{className:G.a.spanClassName,children:c})]})};var Z=function(){var e=Object(r.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(g.a)(i,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 4",Object(l.jsxs)("div",{className:K.a.column,children:[Object(l.jsx)(J,{value:n,onChangeText:c,onEnter:s,error:a}),Object(l.jsx)(J,{className:K.a.blue}),Object(l.jsx)(z,{children:"default"}),Object(l.jsx)(z,{red:!0,onClick:s,children:"delete "}),Object(l.jsx)(z,{disabled:!0,children:"disabled"}),Object(l.jsx)(M,{checked:j,onChangeChecked:u,children:"some text "}),Object(l.jsx)(M,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},q=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,a=Object(H.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(g.a)(s,2),o=i[0],j=i[1],u=c||{},b=u.children,d=u.onDoubleClick,O=u.className,h=Object(H.a)(u,["children","onDoubleClick","className"]),x="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",O);return Object(l.jsx)(l.Fragment,{children:o?Object(l.jsx)(J,Object(A.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},a)):Object(l.jsx)("span",Object(A.a)(Object(A.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:x},h),{},{children:b||a.value}))})};function L(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}L("test",{x:"A",y:1});!function(e,t){var n=t,r=localStorage.getItem(e);null!==r&&(n=JSON.parse(r))}("test",{x:"",y:0});var X=function(){var e=Object(r.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 6",Object(l.jsx)("div",{children:Object(l.jsx)(q,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(l.jsx)(z,{onClick:function(){L("editable-span-value",n)},children:"save"}),Object(l.jsx)(z,{onClick:function(){var e=localStorage.getItem("editable-span-value");if(e){var t=JSON.parse(e);c(t)}},children:"restore"}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var Y=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{}),Object(l.jsx)(N,{}),Object(l.jsx)(F,{}),Object(l.jsx)(Z,{}),Object(l.jsx)(X,{})]})},V=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,c=Object(H.a)(e,["options","onChange","onChangeOption"]),a=t?t.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},e+"-"+t)})):[];return Object(l.jsx)("select",Object(A.a)(Object(A.a)({onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},c),{},{children:a}))},$=function(e){e.type;var t=e.name,n=e.options,r=e.value,c=e.onChange,a=e.onChangeOption,s=Object(H.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){c&&c(e),a&&a(e.currentTarget.value)},o=n?n.map((function(e,n){return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(A.a)({type:"radio",name:t,checked:e===r,value:e,onChange:i},s)),e]},t+"-"+n)})):[];return Object(l.jsx)(l.Fragment,{children:o})},Q=["x","y","z"];var ee=function(){var e=Object(r.useState)(Q[1]),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 7",Object(l.jsx)("div",{children:Object(l.jsx)(V,{options:Q,value:n,onChangeOption:c})}),Object(l.jsx)("div",{children:Object(l.jsx)($,{name:"radio",options:Q,value:n,onChangeOption:c})}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},te=function(e,t){switch(t.type){case"SORT":var n=Object(y.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"CHECK":return e.filter((function(e){return e.age>=t.payload}));default:return e}},ne=n(30),re=n.n(ne),ce=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ae=function(){var e=Object(r.useState)(ce),t=Object(g.a)(e,2),n=t[0],c=t[1],a=n.map((function(e){return Object(l.jsxs)("div",{className:re.a.item,children:[Object(l.jsx)("span",{children:e.name}),e.age]},e._id)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 8",a,Object(l.jsx)("div",{children:Object(l.jsx)(z,{onClick:function(){return c(te(ce,{type:"SORT",payload:"up"}))},children:"\u041f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"})}),Object(l.jsx)("div",{children:Object(l.jsx)(z,{onClick:function(){return c(te(ce,{type:"SORT",payload:"down"}))},children:"sort down"})}),Object(l.jsx)("div",{children:Object(l.jsx)(z,{onClick:function(){return c(te(ce,{type:"CHECK",payload:18}))},children:"\u0441\u0442\u0430\u0440\u0448\u0435 18"})}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};function se(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(ee,{}),Object(l.jsx)(ae,{})]})}function ie(){return Object(l.jsx)("div",{})}var oe="/pre-junior",je="/junior",ue="/pre-plus";var le=function(){return Object(l.jsxs)("div",{children:["Switch \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0440\u043e\u0443\u0442",Object(l.jsxs)(u.d,{children:["\u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u044b \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 '/' \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 PRE_JUNIOR exact \u043d\u0443\u0436\u0435\u043d \u0447\u0442\u043e\u0431 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0435 \u0441\u043e\u0432\u043f\u043e\u0434\u0435\u043d\u0438\u0435 (\u0447\u0442\u043e \u043f\u043e\u0441\u043b\u0435 '/' \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442)",Object(l.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(u.a,{to:oe})}}),Object(l.jsx)(u.b,{path:oe,render:function(){return Object(l.jsx)(Y,{})}}),Object(l.jsx)(u.b,{path:je,render:function(){return Object(l.jsx)(se,{})}}),Object(l.jsx)(u.b,{path:ue,render:function(){return Object(l.jsx)(ie,{})}}),Object(l.jsx)(u.b,{path:oe,render:function(){return Object(l.jsx)(Y,{})}}),"// add routes \u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",Object(l.jsx)(u.b,{render:function(){return Object(l.jsx)(b,{})}})]})]})},be=n(8),de=n.n(be);var Oe=function(){return Object(l.jsxs)("div",{className:de.a.header,children:[Object(l.jsx)(j.b,{to:oe,className:de.a.link,activeClassName:de.a.active,children:"pre-junior "}),Object(l.jsx)(j.b,{to:je,className:de.a.link,activeClassName:de.a.active,children:" junior"}),Object(l.jsx)(j.b,{to:ue,className:de.a.link,activeClassName:de.a.active,children:" junior-plus"}),Object(l.jsx)("div",{className:de.a.block})]})};var he=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(Oe,{}),Object(l.jsx)(le,{})]})})};var xe=function(){return Object(l.jsxs)("div",{className:o.a.App,children:[Object(l.jsx)("div",{children:"react homeworks:"}),Object(l.jsx)(he,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(xe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){}},[[46,1,2]]]);
//# sourceMappingURL=main.bc2b62ab.chunk.js.map