(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),r=a.n(l),i=(a(9),a(1)),o=(a(10),function(e){var t=e._answer;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))}),s=function(e){var t=e.question,a=c.a.useState(!1),n=Object(i.a)(a,2),l=n[0],r=n[1],s=t.description,m=t.answer,u=function(){r((function(e){return!e}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"question"+(l?" active":""),onClick:u},c.a.createElement("div",{className:"circle-container"},c.a.createElement("div",{className:"outer circle"},c.a.createElement("div",{className:"inner circle"},c.a.createElement("div",{className:"question-mark"},"?")))),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:s}})),c.a.createElement("div",{className:"options"+(l?" active":"")},c.a.createElement("div",{className:"answer-option",onClick:u},c.a.createElement("div",{className:"chat icon"})),c.a.createElement("div",{className:"social",onClick:function(){return alert("share this question!")}},c.a.createElement("div",{className:"twitter"},c.a.createElement("div",{className:"retweet icon"})))),c.a.createElement("div",{className:"answer"+(l?" active":"")},c.a.createElement(o,{_answer:m})))))},m=function(e){var t=e.id,a=e.name,n=e.options,l=e.callbackfilter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("span",null,a,":"),c.a.createElement("select",{id:t,onChange:function(e){var t=e.target,a=t.id,n=t.value;localStorage.setItem(a,n),l()}},n.map((function(e){return c.a.createElement("option",{key:"".concat(t,"-opt-").concat(e),value:e},e," ")})))))},u=function(e){var t=e.callbackfilter,a=c.a.useState(!1),n=Object(i.a)(a,2),l=n[0],r=n[1];c.a.useEffect((function(){r(!1)}),[l]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"filters"},!l&&c.a.createElement(m,{name:"Technology",id:"select-filter-first",options:["","javascript","react",".net"],callbackfilter:t}),!l&&c.a.createElement(m,{name:"Level",id:"select-filter-second",options:["","easy","medium","intermidiate","hard"],callbackfilter:t}),c.a.createElement("div",{onClick:function(){localStorage.setItem("select-filter-first",""),localStorage.setItem("select-filter-second",""),t(!0),r(!0)}},c.a.createElement("div",{className:"trash icon"}))))},d=(a(11),function(e){var t=e._questions,a=c.a.useState(t),n=Object(i.a)(a,2),l=n[0],r=n[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{callbackfilter:function(){var e=localStorage.getItem("select-filter-first"),a=localStorage.getItem("select-filter-second");r(t.filter((function(t){return!e||t.technology===e})).filter((function(e){return!a||e.level===a})))}}),c.a.createElement("section",{className:"cards"},l.map((function(e){return c.a.createElement(s,{key:e.id,question:e})}))))}),f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"about"},"Wanna publish your question? email: phqs.phqs [at] gmail"))},E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"lds-facebook"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)))};var v=function(){var e=c.a.useState([]),t=Object(i.a)(e,2),a=t[0],l=t[1],r=c.a.useState(!0),o=Object(i.a)(r,2),s=o[0],m=o[1],u=c.a.useState({}),v=Object(i.a)(u,2),p=v[0],h=v[1];return Object(n.useEffect)((function(){var e={method:"GET",mode:"cors",cache:"default",headers:{"Content-Type":"application/json"}};fetch("http://quizzertech.com/system/wp-json",e).then((function(e){return e.json()})).then((function(t){h({title:t.name,description:t.description}),fetch("http://quizzertech.com/system/wp-json/application-api/v1/om-question",e).then((function(e){return e.json()})).then((function(e){l(e),m(!1)})).catch((function(e){return console.log(e)}))}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,p.title?p.title:""),c.a.createElement("span",null,p.description?p.description:"")),c.a.createElement("section",{className:"container"},s?c.a.createElement(E,null):c.a.createElement(d,{_questions:a})),c.a.createElement("footer",null,c.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.5eaddc54.chunk.js.map