(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(e,t,i){},25:function(e,t,i){},27:function(e,t,i){},28:function(e,t,i){},37:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i.n(n),s=i(18),r=i.n(s),l=(i(24),i(9)),o=i(10),a=i(12),j=i(11),h=(i(25),i(1)),d=function(e){Object(a.a)(i,e);var t=Object(j.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).jobBox=function(e){return Object(h.jsx)("div",{className:"jobRow",children:Object(h.jsxs)("div",{className:"jobDetails",children:[Object(h.jsx)("h3",{children:e.date}),Object(h.jsx)("h1",{children:e.company}),Object(h.jsx)("h2",{children:e.title})]})})},e}return Object(o.a)(i,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"jobContainer",children:this.props.jobs.map(this.jobBox)})}}]),i}(n.Component),b=[{company:"UPS",title:"DevOps Engineer Intern",date:"Summer 2020"},{company:"Purdue University",title:"TensorFlow Model Developer",date:"2019-2021"},{company:"Amazon",title:"Software Engineering Intern",date:"Summer 2021"}];var u=function(){return Object(h.jsx)(d,{jobs:b})},p=i(2),x=(i(27),function(e){Object(a.a)(i,e);var t=Object(j.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"fancifyChild",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;console.log(this.props.children);var t,i=Array.isArray(this.props.children.props.children),n=(t=String(i?this.props.children.props.children[0]:this.props.children.props.children))[0],c=t.split(".")[0].substr(1)+". ";return Object(h.jsxs)("p",{className:"bodyText",children:[Object(h.jsxs)("span",{className:"bodyFirstSentence",children:[Object(h.jsx)("span",{className:"bodyFirstLetter",children:n}),c]}),t.substr(t.indexOf(".")+2),e?Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"arrowRight"}),"link"]}):null,i?this.props.children.props.children.slice(1):null]})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"infoBox",onClick:this.props.onClick,children:[Object(h.jsx)("div",{className:"subtitleText",children:Object(h.jsx)("i",{children:this.props.subtitle})}),Object(h.jsx)("div",{className:"titleText",children:this.props.title.toUpperCase()}),this.fancifyChild(),this.props.linkText?Object(h.jsxs)("div",{className:"linkText",children:[Object(h.jsx)("div",{className:"arrowRight"}),Object(h.jsx)("u",{children:this.props.linkText})]}):null]})}}]),i}(n.Component));i(28);var m=i(17),O=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,38)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)(m.a,{children:[Object(h.jsx)("div",{className:"siteSubtitle",children:"THE AMAZING WEBSITE OF"}),Object(h.jsx)("div",{className:"siteTitle",children:Object(h.jsx)(m.b,{to:"/",children:"JACK LECROY"})}),Object(h.jsx)(p.a,{exact:!0,path:"/",component:function(){var e=Object(p.e)();return Object(h.jsxs)("div",{className:"boxesSection",children:[Object(h.jsx)(x,{subtitle:"Incredibly informative",title:"About Me",onClick:function(){return t="About",void e.push("/"+t);var t},linkText:"Work History",children:Object(h.jsx)("p",{children:"Hey there. My name is Jack LeCroy. I'm a student at Purdue University in my senior year of studying computer science. I will be graduating this fall."})}),Object(h.jsx)(x,{subtitle:"Followed by everyone",title:"Social Media",children:Object(h.jsxs)("div",{children:["You can find me here. Feel free to connect with me on LinkedIn. If you follow me on GitHub, I'll follow you back.",Object(h.jsxs)("ul",{children:[Object(h.jsx)("a",{href:"https://github.com/jacklecroy",children:Object(h.jsx)("li",{children:"GitHub"})}),Object(h.jsx)("a",{href:"https://linkedin.com/in/jacklecroy",children:Object(h.jsx)("li",{children:"LinkedIn"})})]})]})}),Object(h.jsx)(x,{subtitle:"I may or may not check",title:"My Email",linkText:"Send Email",children:Object(h.jsx)("p",{children:"Email me. Please reach out with any interesting opportunities. Also reach out if you just want to say hello. Keep in mind that this specific email has strict spam filtering."})})]})}}),Object(h.jsx)(p.a,{exact:!0,path:"/About",component:u})]}),Object(h.jsx)("div",{className:"copyrightSection",children:"\xa9 2021 Jack LeCroy"})]})}),document.getElementById("root")),O()}},[[37,1,2]]]);
//# sourceMappingURL=main.29b580fb.chunk.js.map