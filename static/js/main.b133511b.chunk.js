(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s,a=c(6),n=c.n(a),l=c(2),i=c(1),o=(c(11),c(12),c(5),c(3)),d=c.n(o),r=c(0),j=function(e){var t=e.todos,c=e.selectedTodo,s=e.selectTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":c===e}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:d()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){s(e)}(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:d()("far",{"fa-eye":c!==e,"fa-eye-slash":c===e})})})})})]},e.id)}))})]})};!function(e){e.All="All",e.ACTIVE="Active",e.COMPLETED="Completed"}(s||(s={}));var b=function(e){var t=e.inputValue,c=e.setInputValue,a=e.setTodoFilter,n=Object.values(s);return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsx)("select",{"data-cy":"statusSelect",onChange:function(e){a(e.target.value)},children:n.map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",value:t,onChange:function(e){c(e.target.value)},placeholder:"Search..."}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(r.jsx)("button",{"aria-label":"Close","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c("")}})})]})]})},u=(c(14),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],o=a[1];return Object(i.useEffect)((function(){var e;t&&(e=t.userId,h("/users/".concat(e))).then((function(e){o(e)}))}),[t]),t?Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),n?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"close-button",onClick:function(){o(null),c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:Sincere@april.biz",children:n.name})]})]})]}):Object(r.jsx)(u,{})]}):null},O=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(!1),o=Object(l.a)(n,2),d=o[0],O=o[1],x=Object(i.useState)(""),f=Object(l.a)(x,2),p=f[0],N=f[1],v=Object(i.useState)(s.All),y=Object(l.a)(v,2),g=y[0],T=y[1],C=Object(i.useState)(null),k=Object(l.a)(C,2),S=k[0],w=k[1],E=c.filter((function(e){var t=e.title.toLowerCase().trim(),c=p.toLowerCase().trim(),a=t.includes(c);switch(g){case s.All:return e&&a;case s.COMPLETED:return e.completed&&a;case s.ACTIVE:return!e.completed&&a;default:throw new Error("Wrong filter, ".concat(g," is not defined"))}}));Object(i.useEffect)((function(){O(!0),h("/todos").then((function(e){a(e)})).finally((function(){O(!1)}))}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{inputValue:p,setInputValue:N,setTodoFilter:T})}),Object(r.jsx)("div",{className:"block",children:d?Object(r.jsx)(u,{}):Object(r.jsx)(j,{todos:E,selectedTodo:S,selectTodo:function(e){w(e)}})})]})})}),Object(r.jsx)(m,{selectedTodo:S,setSelectedTodo:w})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))},5:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.b133511b.chunk.js.map