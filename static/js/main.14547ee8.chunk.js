(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(7),i=a.n(c),s=a(9),h=a(2),o=a(3),j=a(5),b=a(4),u=a(0),l=function(){return Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Job"})]})})},O=function(t){var e=t.characterData.map((function(e,a){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.job}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(){return t.removeCharacter(a)},children:"Delete"})})]},a)}));return Object(u.jsx)("tbody",{children:e})},d=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){return Object(h.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props,e=t.characterData,a=t.removeCharacter;return Object(u.jsxs)("table",{children:[Object(u.jsx)(l,{}),Object(u.jsx)(O,{characterData:e,removeCharacter:a})]})}}]),a}(n.Component),m=a(8),v=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).initialState={name:"",job:""},t.state=t.initialState,t.handleChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(m.a)({},n,r))},t.submitForm=function(){t.props.handleSubmit(t.state),t.setState(t.initialState)},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.job;return Object(u.jsxs)("form",{children:[Object(u.jsx)("label",{htmlFor:"name",children:"Name"}),Object(u.jsx)("input",{type:"text",name:"name",id:"name",value:e,onChange:this.handleChange}),Object(u.jsx)("label",{htmlFor:"job",children:"Job"}),Object(u.jsx)("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),Object(u.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),a}(n.Component),p=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={characters:[]},t.removeCharacter=function(e){var a=t.state.characters;t.setState({characters:a.filter((function(t,a){return a!==e}))})},t.handleSubmit=function(e){t.setState({characters:[].concat(Object(s.a)(t.state.characters),[e])})},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Container",children:[Object(u.jsx)(d,{characterData:this.state.characters,removeCharacter:this.removeCharacter}),Object(u.jsx)(v,{handleSubmit:this.handleSubmit})]})}}]),a}(r.a.Component);a(15);i.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.14547ee8.chunk.js.map