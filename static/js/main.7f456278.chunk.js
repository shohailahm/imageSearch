(this.webpackJsonpimagesearch=this.webpackJsonpimagesearch||[]).push([[0],{19:function(e,t,a){},23:function(e,t,a){e.exports=a(53)},28:function(e,t,a){},29:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),s=(a(28),a(22)),i=(a(29),a(7)),l=a.n(i),u=a(8),m=a(21),h=a.n(m).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID f146998025b7fa126efaa788219fbf65ef34059e9513792b1eac382000a08072"}}),p=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/search/photos",{params:{query:t,page:a,per_page:9}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/photos/random");case 2:return t=e.sent,e.abrupt("return",t.data.urls.regular);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=a(9),d=a(1),g=a(2),v=a(4),O=a(3),j=a(5);a(48);function E(e){var t=e.tag,a=e.clickable,n=e.onClickTag;return r.a.createElement("h5",{onClick:a?function(){return n(t)}:function(){},style:{color:"gold",marginRight:3,marginLeft:3}},t)}var k=["coffee","tea","marshmello","gold","silver","kitchen"],y=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.term)},a.onClicktag=function(e){a.props.onSubmit(e)},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"scrsegment"},r.a.createElement("h3",{style:{color:"#fff"}},"Free Stock Photos For Everything"),r.a.createElement("div",{className:"tags"},r.a.createElement("h5",{style:{color:"#fff"}},"Searches: "),k.map((function(t){return r.a.createElement(E,{tag:t,clickable:!0,onClickTag:e.onClicktag})}))),r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"uiform"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"text",className:"roundedInput",placeholder:"Search Text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}),r.a.createElement("button",{className:"searchIcon",type:"submit"},"\u26b2"))))}}]),t}(r.a.Component),w=(a(19),function(e){function t(){return Object(d.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start",width:"100%"}},r.a.createElement("a",{className:"white",href:"#"},"Search",r.a.createElement("span",{className:"black"},"It")))}}]),t}(n.Component)),C=(a(49),function(e){function t(){return Object(d.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.clickable,n=t.height;return r.a.createElement("img",{src:this.props.imgUrl,alt:"random image",style:{width:"80%",height:n||100,border:"0.25px solid black",objectFit:"cover"},onClick:a?function(){e.props.onOpen(e.props.imgUrl)}:function(){}})}}]),t}(r.a.Component)),N=(a(50),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).open=function(e){a.props.onOpen(e)},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this,t=this.props.images;return r.a.createElement("div",{className:"listImages"},t.length>1&&t.map((function(t,a){return r.a.createElement(C,{clickable:!0,key:t.id,imgUrl:t&&t.urls&&t.urls.regular,onOpen:e.open})})))}}]),t}(n.Component)),S=(a(51),function(e){function t(){return Object(d.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{onClick:function(){return e.props.onClick()},className:"button"},this.props.title)}}]),t}(n.Component)),x=(a(52),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).close=function(){a.props.onClose()},a.onClick=function(){},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"myModal",className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("span",{className:"close",onClick:this.close},"\xd7"),r.a.createElement(C,{imgUrl:this.props.image,height:"400px"}),r.a.createElement("a",{href:this.props.image,download:"new.jpeg",target:"_blank"},r.a.createElement(S,{title:"Download",onClick:this.onClick}))))}}]),t}(n.Component)),M=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(v.a)(this,Object(O.a)(t).call(this,e))).submit=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.next=3,p(t,a.state.page);case 3:n=e.sent,a.setState({term:t,images:n,page:1,loading:!1},(function(){}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.loadMore=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.next=3,p(a.state.term,a.state.page+1);case 3:(t=e.sent)&&(n=Object(b.a)(a.state.images),a.setState({loading:!1,page:a.state.page+1,images:[].concat(Object(b.a)(n),Object(b.a)(t))}));case 5:case"end":return e.stop()}}),e)}))),a.closeModal=function(){a.setState({showModal:!1})},a.current=function(e){a.setState({cur:e,showModal:!0})},a.state={page:1,images:[],term:"",showModal:!1},a}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},this.state.showModal&&r.a.createElement(x,{onClose:this.closeModal,image:this.state.cur}),r.a.createElement(w,null),r.a.createElement(y,{onSubmit:this.submit}),r.a.createElement(N,{images:this.state.images,onOpen:this.current}),this.state.images.length>1&&r.a.createElement(S,{onClick:this.loadMore,title:"Load More"}),r.a.createElement("div",{className:this.state.loading?"loader":""}))}}]),t}(n.Component),I=["coffee","tea","marshmello","gold","silver","kitchen"],A=function(e){function t(){return Object(d.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{className:"white",href:"#"},"Search",r.a.createElement("span",{className:"black"},"It")),r.a.createElement("div",{className:"ft-content"},r.a.createElement("div",{className:"tagsContainer"},r.a.createElement("h5",{style:{color:"#fff"}},"Popular Searches"),r.a.createElement("div",{className:"footerTags"},I.map((function(e){return r.a.createElement(E,{tag:e,clickable:!1})}))))))}}]),t}(n.Component);var F=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){f().then((function(e){c(e)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header "},r.a.createElement("div",{className:"homeContainer clip-path",style:{backgroundImage:'url("'.concat(a,'")')}}),r.a.createElement(M,null)),r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.7f456278.chunk.js.map