(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=(n(15),n(8),n(1)),u=n(2),s=n(4),l=n(3),h=n(5),m=n(6),p=(n(16),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"component-header"},r.a.createElement("div",{className:"component-header-title"},"Gurmukhi Unicode Converter"))}}]),t}(r.a.PureComponent)),d=(n(17),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){n.props.textChange(e)},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"col-md-6"},r.a.createElement("div",{className:"component-conversion-input"},r.a.createElement("textarea",{onChange:this.handleChange})))}}]),t}(r.a.PureComponent)),v=(n(18),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"col-md-6"},r.a.createElement("div",{className:"component-conversion-result-main-gurbani"},this.props.outputGurmukhi,r.a.createElement("div",{className:"component-conversion-result-main-hindi"},this.props.outputDevnagri),r.a.createElement("div",{className:"component-conversion-result-english"},this.props.outputEnglish),r.a.createElement("div",{className:"component-conversion-result-main-anmol"},this.props.outputGurmukhi),r.a.createElement("div",{className:"component-conversion-result-main"},this.props.outputGurmukhi),r.a.createElement("div",{className:"component-conversion-result-main-urdu"},this.props.outputShahmukhi)))}}]),t}(r.a.PureComponent)),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).handleInputChange=function(e){n.setState({gurmukhiText:m.unicode(e.target.value),shahmukhiText:m.translit(e.target.value,"shahmukhi")})},n.state={gurmukhiText:"",devnagriText:"",shahmukhiText:"",latinText:""},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(d,{textChange:this.handleInputChange}),r.a.createElement(v,{outputGurmukhi:this.state.gurmukhiText,outputShahmukhi:this.state.shahmukhiText}))}}]),t}(r.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement("div",{className:"guca"},r.a.createElement("header",{className:"guca-header"},r.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.ef0ce47e.chunk.js.map