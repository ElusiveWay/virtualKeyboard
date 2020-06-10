!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,r){"use strict";e.a={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,pausebreak:19,capslock:20,esc:27,space:32,pageup:33,pagedown:34,end:35,home:36,leftarrow:37,uparrow:38,rightarrow:39,downarrow:40,insert:45,delete:46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,leftwindowkey:91,rightwindowkey:92,selectkey:93,numpad0:96,numpad1:97,numpad2:98,numpad3:99,numpad4:100,numpad5:101,numpad6:102,numpad7:103,numpad8:104,numpad9:105,multiply:106,add:107,subtract:109,decimalpoint:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrolllock:145,semicolon:186,equalsign:187,comma:188,dash:189,period:190,forwardslash:191,graveaccent:192,openbracket:219,backslash:220,closebracket:221,singlequote:222}},function(t,e,r){"use strict";e.a={position:"relative",backgroundColor:"black",padding:"3px 0",color:"white",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.5em",cursor:"pointer",transition:".2s",borderRadius:"1vw",gridColumnStart:" span 1"}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";(function(t){var n=r(0),o=r(1);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=function(){function e(r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.key=r.key||"a",this.defaultQuery="body",this.defaultScreenQuery=".screen",this.screenQuery=r.screenQuery||this.defaultScreenQuery,this.screen=t.document.querySelector(this.screenQuery),this.keyCode=n.a[this.key.toLowerCase()],this.styleMod={},this.styleDef=s({},r.style),this.style=s({},o.a,{},this.styleDef,{},this.styleMod),this.text=r.text||this.key,this.rutext=r.rutext?r.rutext:void 0,this.func=r.func?this[r.func]:void 0,this.limiter=!1,this.id="keyId".concat(this.keyCode+((new Date).toLocaleString()+Math.random(1e6)).replace(/\D/g,"")),this.render(r.query||this.defaultQuery),this.keyDown=this.keyDown.bind(this),this.keyUp=this.keyUp.bind(this),this.putText=this.putText.bind(this)}var r,a,i;return r=e,(a=[{key:"render",value:function(e){var r=document.createElement("div");for(var n in r.className=this.id,this.style)r.style[n]=this.style[n];console.log(r.style.width.length),r.innerHTML="true"===localStorage.getItem("ru")&&void 0!==this.rutext?this.rutext.toUpperCase():this.text.toUpperCase(),r.addEventListener("mousedown",this.keyDown.bind(this)),r.addEventListener("mouseup",this.keyUp.bind(this)),r.addEventListener("mouseout",this.keyUp.bind(this)),t.document.querySelector(e).appendChild(r),this.elem=t.document.querySelector(".".concat(this.id)),20===this.keyCode&&"true"===localStorage.getItem("caps")&&this.changeColor("#DD0","black")}},{key:"remove",value:function(){t.document.querySelector(".".concat(this.id)).style.visibility="hidden"}},{key:"putText",value:function(t){arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.keyCode;var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r="true"===localStorage.getItem("ru")&&void 0!==this.rutext?this.rutext:this.text;if(/[a-zA-Zа-яА-Я]/.test(r)){var n=!1;"true"===localStorage.getItem("caps")&&(n=!n),"true"===localStorage.getItem("shift")&&(n=!n),r=n?r.toUpperCase():r,console.log(n.toString())}var o=this.screen;o.focus();var a=this.getCursorPosition(o),s=o.value.split("");s.splice(a,0,""===e?r:e),o.value=s.join(""),this.setCaretPosition(o,a+1)}},{key:"keyDown",value:function(e){var r=this;return t.document.querySelector(this.screenQuery).focus(),this.func?this.func():(r.styleMod={backgroundColor:"darkblue"},r.update(),void r.putText(e))}},{key:"keyUp",value:function(t){if(20===this.keyCode&&"true"===localStorage.getItem("caps"))return!1;16===this.keyCode&&localStorage.setItem("shift","false"),this.styleMod={},this.update()}},{key:"update",value:function(){for(var t in this.style=s({},o.a,{},this.styleDef,{},this.styleMod),this.style)document.querySelector(".".concat(this.id)).style[t]=this.style[t]}},{key:"tab",value:function(){this.changeColor("darkblue"),this.putText(event,void 0,"\t")}},{key:"capslock",value:function(){this.changeColor("#DD0","black"),localStorage.setItem("caps","false"===localStorage.getItem("caps")||null===localStorage.getItem("caps"))}},{key:"shift",value:function(){this.changeColor("#DD0","black"),localStorage.setItem("shift","false"===localStorage.getItem("shift")||null===localStorage.getItem("shift")),this.checkSwith()}},{key:"ctrl",value:function(){this.changeColor("#DD0","black")}},{key:"wind",value:function(){this.changeColor("#DD0","black")}},{key:"alt",value:function(){this.changeColor("#DD0","black"),this.checkSwith()}},{key:"enter",value:function(){this.changeColor("#DD0","black"),this.putText(event,void 0,"\r")}},{key:"delet",value:function(){this.changeColor("darkred");var t=this.screen,e=this.getCursorPosition(t),r=t.value.split("");r.splice(e,1),t.value=r.join(""),this.setCaretPosition(t,e)}},{key:"win",value:function(){this.changeColor("#DD0","black")}},{key:"back",value:function(){this.changeColor("darkred");var t=this.screen,e=this.getCursorPosition(t),r=t.value.split("");r.splice(e-1,1),t.value=r.join(""),this.setCaretPosition(t,e-1)}},{key:"left",value:function(){this.changeColor("darkgreen");var t=this.screen;this.setCaretPosition(t,this.getCursorPosition(t)-1)}},{key:"right",value:function(){this.changeColor("darkgreen");var t=this.screen;this.setCaretPosition(t,this.getCursorPosition(t)+1)}},{key:"up",value:function(){this.changeColor("darkgreen");var t=this.screen;this.setCaretPosition(t,0)}},{key:"down",value:function(){this.changeColor("darkgreen");var t=this.screen;this.setCaretPosition(t,t.value.length)}},{key:"changeColor",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"white";this.styleMod={backgroundColor:t,color:e},this.update()}},{key:"checkSwith",value:function(){if(0!==Object.keys(t.keyes.shift.styleMod).length&&Object.keys(t.keyes.alt.styleMod).length)for(var e in t.keyes.shift.keyUp(),t.keyes.alt.keyUp(),localStorage.setItem("ru","false"===localStorage.getItem("ru")||null===localStorage.getItem("ru")),t.keyes){var r=t.keyes;void 0!==r[e].rutext&&(console.log(r[e]),r[e].elem.innerHTML="true"===localStorage.getItem("ru")?r[e].rutext.toUpperCase():r[e].text.toUpperCase())}}},{key:"getCursorPosition",value:function(t){var e=0;if(document.selection){t.focus();var r=document.selection.createRange();r.moveStart("character",-t.value.length),e=r.text.length}else(t.selectionStart||"0"==t.selectionStart)&&(e=t.selectionStart);return e}},{key:"setCaretPosition",value:function(t,e){if(document.selection){t.focus();var r=document.selection.createRange();r.moveStart("character",-t.value.length),r.moveStart("character",e),r.moveEnd("character",0),r.select()}else(t.selectionStart||"0"==t.selectionStart)&&(t.selectionStart=e,t.selectionEnd=e,t.focus())}}])&&l(r.prototype,a),i&&l(r,i),e}();e.a=u}).call(this,r(2))},function(t,e,r){"use strict";e.a=[{rutext:"ё",text:"`",key:"graveaccent",style:{gridColumnStart:"span 1"}},{text:"1",key:"1",style:{gridColumnStart:"span 1"}},{text:"2",key:"2",style:{gridColumnStart:"span 1"}},{text:"3",key:"3",style:{gridColumnStart:"span 1"}},{text:"4",key:"4",style:{gridColumnStart:"span 1"}},{text:"5",key:"5",style:{gridColumnStart:"span 1"}},{text:"6",key:"6",style:{gridColumnStart:"span 1"}},{text:"7",key:"7",style:{gridColumnStart:"span 1"}},{text:"8",key:"8",style:{gridColumnStart:"span 1"}},{text:"9",key:"9",style:{gridColumnStart:"span 1"}},{text:"0",key:"0",style:{gridColumnStart:"span 1"}},{text:"-",key:"dash",style:{gridColumnStart:"span 1"}},{text:"=",key:"equalsign",style:{gridColumnStart:"span 1"}},{text:"backspace",key:"backspace",style:{fontSize:".7em",gridColumnStart:"span 2"},func:"back"},{text:"tab",key:"tab",style:{fontSize:".7em",gridColumnStart:"span 1"},func:"tab"},{rutext:"й",text:"q",key:"q",style:{gridColumnStart:"span 1"}},{rutext:"ц",text:"w",key:"w",style:{gridColumnStart:"span 1"}},{rutext:"у",text:"e",key:"e",style:{gridColumnStart:"span 1"}},{rutext:"к",text:"r",key:"r",style:{gridColumnStart:"span 1"}},{rutext:"е",text:"t",key:"t",style:{gridColumnStart:"span 1"}},{rutext:"н",text:"y",key:"y",style:{gridColumnStart:"span 1"}},{rutext:"г",text:"u",key:"u",style:{gridColumnStart:"span 1"}},{rutext:"ш",text:"i",key:"i",style:{gridColumnStart:"span 1"}},{rutext:"щ",text:"o",key:"o",style:{gridColumnStart:"span 1"}},{rutext:"з",text:"p",key:"p",style:{gridColumnStart:"span 1"}},{rutext:"х",text:"[",key:"openbracket",style:{gridColumnStart:"span 1"}},{rutext:"ъ",text:"]",key:"closebracket",style:{gridColumnStart:"span 1"}},{text:"\\",key:"backslash",style:{gridColumnStart:"span 1"}},{text:"del",key:"delete",style:{fontSize:"1em",gridColumnStart:"span 1"},func:"delet"},{text:"capslock",key:"capslock",style:{fontSize:".7em",gridColumnStart:"span 2"},func:"capslock"},{rutext:"ф",text:"a",key:"a",style:{gridColumnStart:"span 1"}},{rutext:"ы",text:"s",key:"s",style:{gridColumnStart:"span 1"}},{rutext:"в",text:"d",key:"d",style:{gridColumnStart:"span 1"}},{rutext:"а",text:"f",key:"f",style:{gridColumnStart:"span 1"}},{rutext:"п",text:"g",key:"g",style:{gridColumnStart:"span 1"}},{rutext:"р",text:"h",key:"h",style:{gridColumnStart:"span 1"}},{rutext:"о",text:"j",key:"j",style:{gridColumnStart:"span 1"}},{rutext:"л",text:"k",key:"k",style:{gridColumnStart:"span 1"}},{rutext:"д",text:"l",key:"l",style:{gridColumnStart:"span 1"}},{rutext:"э",text:";",key:"semicolon",style:{gridColumnStart:"span 1"}},{text:"'",key:"singlequote",style:{gridColumnStart:"span 1"}},{text:"enter",key:"enter",style:{fontSize:"1em",gridColumnStart:"span 2"},func:"enter"},{text:"shift",key:"shift",style:{fontSize:".7em",gridColumnStart:"span 2"},func:"shift"},{rutext:"я",text:"z",key:"z",style:{gridColumnStart:"span 1"}},{rutext:"ч",text:"x",key:"x",style:{gridColumnStart:"span 1"}},{rutext:"с",text:"c",key:"c",style:{gridColumnStart:"span 1"}},{rutext:"м",text:"v",key:"v",style:{gridColumnStart:"span 1"}},{rutext:"и",text:"b",key:"b",style:{gridColumnStart:"span 1"}},{rutext:"т",text:"n",key:"n",style:{gridColumnStart:"span 1"}},{rutext:"ь",text:"m",key:"m",style:{gridColumnStart:"span 1"}},{rutext:"б",text:",",key:"comma",style:{gridColumnStart:"span 1"}},{rutext:"ю",text:".",key:"period",style:{gridColumnStart:"span 1"}},{text:"/",key:"forwardslash",style:{gridColumnStart:"span 1"}},{text:"▲",key:"uparrow",style:{gridColumnStart:"span 3"},func:"up"},{text:"ctrl",key:"ctrl",style:{fontSize:".7em",gridColumnStart:"span 1"},func:"ctrl"},{text:"op",key:"leftwindowkey",style:{fontSize:"1.3em",gridColumnStart:"span 1"},func:"win"},{text:"alt",key:"alt",style:{fontSize:"1.3em",gridColumnStart:"span 1"},func:"alt"},{text:" ",key:"space",style:{gridColumnStart:"span 9"}},{text:"◄",key:"leftarrow",style:{gridColumnStart:"span 1"},func:"left"},{text:"▼",key:"downarrow",style:{gridColumnStart:"span 1"},func:"down"},{text:"►",key:"rightarrow",style:{gridColumnStart:"span 1"},func:"right"}]},function(t,e,r){"use strict";r.r(e),function(t){var e=r(3),n=r(0),o=r(4);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}document.querySelector("html").style.overflow="hidden",document.body.style.fontSize="1.5vw",document.body.style.height="100vh",document.body.style.backgroundColor="aliceblue",document.body.style.display="flex",document.body.style.justifyContent="center",document.body.style.alignItems="center";var i=t.document.createElement("div");i.className="wrapper",i.style.display="flex",i.style.flexDirection="column",i.style.maxWidth="1100px",t.document.body.appendChild(i);var l=t.document.createElement("textarea");l.className="screen",l.style.height="200px",l.style.resize="none",l.style.marginBottom="4vmin",i.appendChild(l),l.value="ALT + Shift to switch Language";var u=t.document.createElement("div");u.className="keyboard",u.style.display="grid",u.style.padding="5px",u.style.gridGap="5px",u.style.gridTemplateColumns="1fr ".repeat(15),u.style.gridTemplateRows="1fr ".repeat(5),i.appendChild(u),t.keyes={},o.a.forEach((function(r){t.keyes[r.key]=new e.a(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},r,{query:".keyboard"}))}));t.document.body.onkeydown=function(e){for(var r in e.preventDefault(),n.a)if(e.keyCode==n.a[r])try{t.keyes[r].keyDown()}catch(e){new Error("There is no such key on the virtual keyboard")}};t.document.body.onkeyup=function(e){for(var r in e.preventDefault(),n.a)if(e.keyCode==n.a[r])try{t.keyes[r].keyUp()}catch(e){console.warn("There is no such key on the virtual keyboard")}}}.call(this,r(2))}]);