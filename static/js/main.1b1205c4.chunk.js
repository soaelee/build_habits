(this["webpackJsonpmy-habit"]=this["webpackJsonpmy-habit"]||[]).push([[0],{15:function(t,n,e){},16:function(t,n,e){},17:function(t,n,e){},18:function(t,n,e){},23:function(t,n,e){},24:function(t,n,e){"use strict";e.r(n);var c=e(0),a=e(1),i=e(7),s=e.n(i),o=(e(15),e(8)),r=e(2),u=e(9),b=(e(16),e(17),Object(a.memo)((function(t){var n=Object(a.useCallback)((function(){t.onIncrement(t.habit)})),e=Object(a.useCallback)((function(){t.onDecrement(t.habit)})),i=Object(a.useCallback)((function(){t.onDelete(t.habit)}));return Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"habit-name",children:t.habit.name}),Object(c.jsx)("span",{className:"habit-count",children:t.habit.count}),Object(c.jsx)("button",{className:"habit-button habit-increase",onClick:n,children:Object(c.jsx)("i",{className:"fas fa-plus-square"})}),Object(c.jsx)("button",{className:"habit-button habit-decrease",onClick:e,children:Object(c.jsx)("i",{className:"fas fa-minus-square"})}),Object(c.jsx)("button",{className:"habit-button habit-delete",onClick:i,children:Object(c.jsx)("i",{className:"fas fa-trash"})})]})}))),l=(e(18),Object(a.memo)((function(t){var n=Object(a.useRef)(),e=Object(a.useRef)(),i=Object(a.useCallback)((function(c){c.preventDefault();var a=n.current.value;a&&t.onAdd(a),e.current.reset()}));return Object(c.jsxs)("form",{ref:e,className:"add-form",onSubmit:i,children:[Object(c.jsx)("input",{ref:n,type:"text",className:"add-input",placeholder:"please input your habit"}),Object(c.jsx)("button",{className:"add-button",on:!0,children:"Add"})]})})));function j(t){var n=function(n){t.onIncrement(n)},e=function(n){t.onDecrement(n)},a=function(n){t.onDelete(n)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l,{onAdd:function(n){t.onAdd(n)}}),Object(c.jsx)("ul",{children:t.habits.map((function(t){return Object(c.jsx)(b,{habit:t,onIncrement:n,onDecrement:e,onDelete:a},t.id)}))}),Object(c.jsx)("button",{className:"habit-reset",onClick:t.onReset,children:"Reset All"})]})}e(19),e(23);function d(t){return Object(c.jsxs)("nav",{className:"navbar",children:[Object(c.jsx)("i",{className:"nav-logo fas fa-leaf"}),Object(c.jsx)("span",{className:"nav-title",children:"Making Habit"}),Object(c.jsx)("span",{className:"nav-count",children:t.total})]})}var f=function(){var t=Object(a.useState)([{id:1,name:"running",count:0},{id:2,name:"coding",count:0},{id:3,name:"drinking water",count:0},{id:4,name:"reading",count:0}]),n=Object(u.a)(t,2),e=n[0],i=n[1];return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(d,{total:e.filter((function(t){return t.count>0})).length}),Object(c.jsx)(j,{habits:e,onIncrement:function(t){var n=e.map((function(n){return n.id==t.id?Object(r.a)(Object(r.a)({},t),{},{count:t.count+1}):n}));i(n)},onDecrement:function(t){var n=e.map((function(n){if(n.id==t.id){var e=t.count-1;return Object(r.a)(Object(r.a)({},t),{},{count:e<0?0:e})}return n}));i(n)},onDelete:function(t){var n=e.filter((function(n){return n.id!==t.id}));i(n)},onAdd:function(t){var n=[].concat(Object(o.a)(e),[{id:Date.now(),name:t,count:0}]);i(n)},onReset:function(){var t=e.map((function(t){return t.count>0?Object(r.a)(Object(r.a)({},t),{},{count:0}):t}));i(t)}})]})};s.a.render(Object(c.jsx)(f,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.1b1205c4.chunk.js.map