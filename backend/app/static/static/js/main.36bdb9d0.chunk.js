(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t){},109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),l=n.n(o),c=(n(62),n(5)),i=n.n(c),s=n(10),u=n(4),m=n(2),d=n(11),p=n(3),f="auth/SET_USER",h=function(e){return e?{type:f,user:e}:{type:f,user:{}}},E=function(e,t){return function(){var n=Object(s.a)(i.a.mark((function n(a){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/session",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})});case 2:return r=n.sent,n.next=5,r.json();case 5:return r.data=n.sent,r.ok&&a(h(r.data.user)),n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};n(68);var g=function(){var e=Object(m.b)(),t=Object(p.f)(),n=Object(m.c)((function(e){return e.user.id})),o=Object(a.useState)(""),l=Object(u.a)(o,2),c=l[0],i=l[1],s=Object(a.useState)(""),d=Object(u.a)(s,2),f=d[0],h=d[1],g=function(){var e=document.querySelector("section"),t=document.createElement("span"),n=50*Math.random();t.style.width=20+n+"px",t.style.height=20+n+"px",t.style.top=Math.random()*window.innerHeight+"px",t.style.left=Math.random()*window.innerWidth+"px",e.appendChild(t),setTimeout((function(){t.remove()}),5e3)};return Object(a.useEffect)((function(){var e=setInterval(g,150);return function(){clearInterval(e)}})),n?r.a.createElement(p.a,{to:"/home"}):r.a.createElement("div",{className:"loginBackground"},r.a.createElement("section",{id:"boxes"}),r.a.createElement("div",{className:"loginContainer"},r.a.createElement("div",{className:"loginContainer__header"},r.a.createElement("h1",{id:"loginLable",className:"loginContainer__formLable"},"Login"),r.a.createElement("button",{id:"registerButton",onClick:function(e){e.preventDefault(),t.push("/signup")}},"Create Account")),r.a.createElement("form",{className:"loginContainer__form",onSubmit:function(t){t.preventDefault(),e(E(c,f))}},r.a.createElement("label",{className:"loginContainer__formLable"},"Email address"),r.a.createElement("input",{className:"loginContainer__formInput",type:"email",name:"email",value:c,required:!0,autoComplete:"off",onChange:function(e){return i(e.target.value)}}),r.a.createElement("label",{className:"loginContainer__formLable"},"Password"),r.a.createElement("input",{className:"loginContainer__formInput",type:"password",name:"password",value:f,required:!0,autoComplete:"off",onChange:function(e){return h(e.target.value)}}),r.a.createElement("button",{className:"loginContainer__signIn",type:"submit"},"Sign in"),r.a.createElement("button",{className:"loginContainer__signIn",onClick:function(t){t.preventDefault(),e(E("demo@demo.com","password"))}},"Demo Login 1"),r.a.createElement("button",{className:"loginContainer__signIn",onClick:function(t){t.preventDefault(),e(E("ian@aa.io","password"))}},"Demo Login 2"))))},v=n(14),b=n(16);n(70);var y=function(){var e=Object(m.b)(),t=Object(p.f)(),n=Object(m.c)((function(e){return e.user.id})),o=Object(a.useState)(1),l=Object(u.a)(o,2),c=l[0],d=l[1],f=Object(a.useState)({email:"",username:"",password:""}),E=Object(u.a)(f,2),g=E[0],y=E[1],_=function(e){e.preventDefault(),y(Object(b.a)(Object(b.a)({},g),{},Object(v.a)({},e.target.name,e.target.value)))},C=function(t){var n,a,r;t.preventDefault(),g.email&&g.password&&g.username?e((n=g.username,a=g.email,r=g.password,function(){var e=Object(s.a)(i.a.mark((function e(t){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,email:a,password:r})});case 2:return o=e.sent,e.next=5,o.json();case 5:return o.data=e.sent,o.ok&&t(h(o.data.user)),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):!g.email&&g.password&&g.username?alert("Check email"):g.email&&!g.password&&g.username?alert("Check password"):g.email&&g.password&&!g.username?alert("Check username"):alert("Check username, email, and password")},w=function(){var e=document.querySelector("section"),t=document.createElement("span"),n=50*Math.random();t.style.width=20+n+"px",t.style.height=20+n+"px",t.style.top=Math.random()*window.innerHeight+"px",t.style.left=Math.random()*window.innerWidth+"px",e.appendChild(t),setTimeout((function(){t.remove()}),5e3)},j=function(e){if(("U+000A"===e.keyIdentifier||"Enter"===e.keyIdentifier||13===e.keyCode)&&"INPUT"===e.target.nodeName&&("text"===e.target.type||"email"===e.target.type))return e.preventDefault(),!1};return Object(a.useEffect)((function(){window.addEventListener("keydown",j);var e=setInterval(w,150);return function(){clearInterval(e),window.removeEventListener("keydown",j)}}),[]),n?r.a.createElement(p.a,{to:"/home"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"signupBackground"},r.a.createElement("section",null),r.a.createElement("div",{className:"signupContainer"},r.a.createElement("form",{className:"signupContainer__form",onSubmit:C},1===c?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"signupContainer__text"},r.a.createElement("p",null,"Is that you? Are you the one that the legends speak of? It can't be you! What is your name?")),r.a.createElement("div",null,r.a.createElement("input",{className:"signupContainer__formInput",type:"text",name:"username",value:g.username,placeholder:"Enter your username",required:!0,onChange:_}))):null,2===c?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"signupContainer__text"},r.a.createElement("p",null,"Whoa it really is you! I thought you were just a myth! Let me be the first to welcome you to Lonely Gamer ",g.username,"! While you are out on your adventures there may come a time when we may need to email you top secret information, in that event where would would you like us to send it?")),r.a.createElement("div",null,r.a.createElement("input",{className:"signupContainer__formInput",type:"email",name:"email",value:g.email,placeholder:"Enter your email",autoComplete:"off",onChange:_}))):null,3===c?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"signupContainer__text"},r.a.createElement("p",null,"Nice! Here at Lonely Gamer we would like to keep the myths about you just that myths, but if all your information is just out in the open there are no myths to be spoken of. Therefore we will keep your information hidden with a code only you know. ")),r.a.createElement("div",null,r.a.createElement("input",{className:"signupContainer__formInput",type:"password",name:"password",value:g.password,placeholder:"Enter your password",autoComplete:"off",onChange:_}))):null),r.a.createElement("div",{className:"signupContainer__buttonsBox"},r.a.createElement("div",null,r.a.createElement("button",{className:"signupContainer__button",id:"signupBackButton",onClick:function(){return d(c-1)},disabled:c<2},"Back")),3===c?r.a.createElement("div",null,r.a.createElement("button",{className:"signupContainer__button",id:"signupPageButton",onClick:C},"Create Profile")):null,1===c?r.a.createElement("div",null,r.a.createElement("button",{className:"signupContainer__button",id:"signupPageButton",onClick:function(e){e.preventDefault(),t.push("/login")}},"Have an account? / Demo")):null,r.a.createElement("div",null,r.a.createElement("button",{className:"signupContainer__button",id:"signupNextButton",onClick:function(){return d(c+1)},disabled:c>2},"Next"))))))};n(71);var _,C=function(){var e=Object(p.f)();return Object(m.c)((function(e){return e.user.id}))?r.a.createElement(p.a,{to:"/home"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"splashContainer"},r.a.createElement("div",{className:"splashContainer__login"},r.a.createElement("button",{className:"splashContainer__button",onClick:function(t){t.preventDefault(),e.push("/login")}},"Login")),r.a.createElement("div",{className:"splashContainer__body"},r.a.createElement("h1",{id:"gotGame"},"GOT GAME?"),r.a.createElement("button",{id:"signupButton",onClick:function(t){t.preventDefault(),e.push("/signup")}},"Create Account"))),r.a.createElement("div",{className:"background"},r.a.createElement("img",{id:"splashImg",src:"https://images.unsplash.com/photo-1588915845045-32c9e46c7ae8?ixlib=rb-1.2.1",alt:"background"})),r.a.createElement("div",{className:"backgroundColor"}))},w=n(56),j=n(54),O=n.n(j),N="https://lonely-gamer.herokuapp.com";"".concat(N,"/"),n(22);_=N;var k=O()("".concat(_),{reconnectionAttempts:5,reconnectionDelay:1e4});var x=function(){var e=Object(m.c)((function(e){return e.user})),t=Object(a.useState)(["Emulates a match and starts chat for demo reasons"]),n=Object(u.a)(t,2),o=n[0],l=n[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),s=i[0],d=i[1];return Object(a.useEffect)((function(){k.on("message",(function(e){l([].concat(Object(w.a)(o),[e]))}))})),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:"chatLable"},"CHAT"),r.a.createElement("div",{className:"chat"},o.length>0&&o.map((function(e,t){return r.a.createElement("div",{id:"chatMessage",key:t},e)}))),r.a.createElement("div",{className:"chatInput"},r.a.createElement("input",{type:"text",value:s,name:"message",onChange:function(e){e.preventDefault(),d(e.target.value)},autoComplete:"off",placeholder:"Enter message"}),r.a.createElement("button",{id:"sendMesageButton",onClick:function(){""!==s?(k.emit("message","".concat(e.username,": ").concat(s)),d("")):alert("Please add a message")}},"Send")))};var S=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.user})),n=Object(a.useState)(!1),o=Object(u.a)(n,2),l=o[0],c=o[1],d=Object(a.useState)({nowPlaying:"".concat(t.game_title),platform:"".concat(t.platform),description:"".concat(t.description)}),p=Object(u.a)(d,2),f=p[0],E=p[1],g=function(e){e.preventDefault(),E(Object(b.a)(Object(b.a)({},f),{},Object(v.a)({},e.target.name,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"homeContainer__profile"},r.a.createElement("h3",null,"Profile"),l?r.a.createElement("div",{className:"homeContainer__edit",onClick:function(){var n,a,r,o;c(!l),e((n=t.id,a=f.nowPlaying,r=f.platform,o=f.description,function(){var e=Object(s.a)(i.a.mark((function e(t){var l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/update",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:n,nowPlaying:a,platform:r,description:o})});case 2:return l=e.sent,e.next=5,l.json();case 5:return l.data=e.sent,l.ok&&t(h(l.data.user)),e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},"Save"):r.a.createElement("div",{className:"homeContainer__edit",onClick:function(){return c(!l)}},"Update")),r.a.createElement("div",{className:"homeContainer__playing"},l?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"homeContainer__inputLabel"},"What you are you playing?"),r.a.createElement("input",{className:"homeContainer__profileInputfeild",type:"text",name:"nowPlaying",defaultValue:f.nowPlaying,autoComplete:"off",onChange:g})):r.a.createElement("div",{className:"homeContainer__labels"},r.a.createElement("h2",null,"Playing Now"),r.a.createElement("div",null,t.game_title))),r.a.createElement("div",{className:"homeContainer__platform"},l?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"homeContainer__inputLabel"},"What platform are you on?"),r.a.createElement("input",{className:"homeContainer__profileInputfeild",type:"text",name:"platform",defaultValue:f.platform,autoComplete:"off",onChange:g})):r.a.createElement("div",{className:"homeContainer__labels"},r.a.createElement("h2",null,"Platform"),r.a.createElement("div",null,t.platform))),l?r.a.createElement("div",{className:"homeContainer__description"},r.a.createElement("p",{className:"homeContainer__inputLabel"},"About you..."),r.a.createElement("textarea",{className:"homeContainer__profileInputfeild",name:"description",rows:"8",defaultValue:f.description,onChange:g})):r.a.createElement("div",{className:"homeContainer__labels"},r.a.createElement("h2",null,"About me"),r.a.createElement("div",{id:"userDes"},t.description)))};var I=function(){var e=Object(m.b)(),t=Object(a.useState)(!0),n=Object(u.a)(t,2),o=n[0],l=n[1],c=Object(a.useState)(!0),d=Object(u.a)(c,2),p=d[0],f=d[1],h=Object(m.c)((function(e){return e.user})),E=Object(m.c)((function(e){return e.onlineUsers})),g=function(){p&&(e(function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/feed",{method:"get"});case 2:return n=e.sent,e.next=5,n.json();case 5:return n.data=e.sent,n.ok&&t((a=n.data.feedUsers)?{type:"feed/FEED_USERS",feedUsers:a}:{type:"feed/FEED_USERS",feedUsers:[]}),e.abrupt("return",n);case 8:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()),f(!1))},v=E.filter((function(e){return e.id!==h.id})),b=v[0];return Object(a.useEffect)((function(){g()})),r.a.createElement("div",{className:"homeContainer__feed"},v.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"homeContainer__feedButtons"},r.a.createElement("button",{id:"maybeLater",onClick:function(){E.shift(),l(!o)}},"Maybe Later"),r.a.createElement("button",{id:"letsPlay",onClick:function(){E.splice(0,1),l(!o)}},"Let's Play")),r.a.createElement("h2",{id:"feedUsername"},b.username),r.a.createElement("h2",null,"Playing Now"),r.a.createElement("div",{id:"nowPlaying"},b.game_title),r.a.createElement("h2",null,"Playing on"),r.a.createElement("div",{id:"platform"},b.platform),r.a.createElement("p",{id:"feedDes"},b.description)):r.a.createElement("div",null,r.a.createElement("h1",{id:"emptyFeed"},"Oh no there aren't any more users to match with! Dont forget to check your chat for matches! ")))};var D=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.user}));return t.id?(window.addEventListener("resize",(function(){var e=document.getElementById("user"),t=document.getElementById("test");window.innerWidth>700?(e.style.display="flex",t.style.display="grid"):(e.style.display="none",t.style.display="grid")})),r.a.createElement("div",{className:"homeBackground"},r.a.createElement("div",{className:"homeContainer"},r.a.createElement("div",{className:"homeContainer__left",id:"user"},r.a.createElement("div",{className:"homeContainer__leftHeader"},r.a.createElement("h2",{id:"username"},t.username),r.a.createElement("div",{id:"x",onClick:function(){var e=document.getElementById("user"),t=document.getElementById("test");e.style.display="none",t.style.display="grid"}},"X")),r.a.createElement(S,null),r.a.createElement(x,null)),r.a.createElement("div",{className:"homeContainer__right",id:"test"},r.a.createElement("button",{id:"modalButton",onClick:function(){var e=document.getElementById("user"),t=document.getElementById("test");e.style.display="flex",t.style.display="none"}},t.username),r.a.createElement("button",{id:"logout",onClick:function(n){var a;n.preventDefault(),e((a=t.id,Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/offline",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a})});case 2:return t=e.sent,e.next=5,t.json();case 5:return t.data=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)}))))),e(function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/session",{method:"delete",headers:{}});case 2:return(n=e.sent).ok&&t({type:"auth/LOGOUT_USER"}),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Sign Out"),r.a.createElement(I,null))))):r.a.createElement(p.a,{to:"/"})};var L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{exact:!0,path:"/home",component:D}),r.a.createElement(p.b,{exact:!0,path:"/login",component:g}),r.a.createElement(p.b,{exact:!0,path:"/signup",component:y}),r.a.createElement(p.b,{exact:!0,path:"/",component:C}))};var B,P=function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],o=t[1],l=Object(m.b)();return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/session/current");case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:t.data=e.sent,l(h(t.data.user));case 8:o(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),n?null:r.a.createElement(d.a,null,r.a.createElement(L,null))},U=n(15),F=n(55),T=Object(U.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.user;case"auth/LOGOUT_USER":return{};default:return e}},onlineUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"feed/FEED_USERS":return t.feedUsers;default:return e}}});B=Object(U.a)(F.a);var M,A=Object(U.d)(T,M,B);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:A},r.a.createElement(P,null))),document.getElementById("root"))},22:function(e,t,n){},57:function(e,t,n){e.exports=n(109)},62:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){}},[[57,1,2]]]);
//# sourceMappingURL=main.36bdb9d0.chunk.js.map