webpackJsonp([0],{0:function(e,t,s){"use strict";function o(){var e=new Date,t=e.getHours(),s=e.getMinutes(),o=e.getSeconds();return(t<10?"0"+t:t)+":"+(s<10?"0"+s:s)+":"+(o<10?"0"+o:o)}var i=this&&this.__extends||function(e,t){function s(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)},a=this&&this.__decorate||function(e,t,s,o){var i,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,o);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(n=(a<3?i(n):a>3?i(t,s,n):i(t,s))||n);return a>3&&n&&Object.defineProperty(t,s,n),n},n=s(1),r=s(2),l=s(6),c=s(17),m=s(25);new c(".clipboard");var p,u=new l.Decoder,d=new l.Decoder,b=localStorage.getItem("parameters"),g=localStorage.getItem("bookmarks"),h=function(e){function t(){var t=e.apply(this,arguments)||this;return t.websocket=null,t.messages=[],t.isSocketIOInternally=!!localStorage.getItem("isSocketIO"),t.ignorePingInternally=!!localStorage.getItem("ignorePing"),t.baseUrl=localStorage.getItem("baseUrl")||"ws://slack.socket.io/socket.io/",t.parameters=b?JSON.parse(b):[{key:"transport",value:"websocket"}],t.anchor=localStorage.getItem("anchor")||"",t.messageInternally=localStorage.getItem("message")||'42["new message",{"username":"hello","message":"world"}]',t.showRawInternally=!!localStorage.getItem("showRaw"),t.showFormattedInternally=!!localStorage.getItem("showFormatted"),t.previewResult="",t.isPreview=!1,t.bookmarks=g?JSON.parse(g):[],t.isEditing=!1,t.bookmarkName="",t.subprotocolInternally=localStorage.getItem("subprotocol")||"",t.filter="",t.filterIsHidden=!0,t.stompIsHidden=!0,t}return i(t,e),Object.defineProperty(t.prototype,"filteredMessages",{get:function(){var e=this;return this.messages.filter(function(t){return!e.filter||("string"==typeof t.rawData&&t.rawData.indexOf(e.filter)!==-1||"string"==typeof t.moment&&t.moment.indexOf(e.filter)!==-1||"string"==typeof t.formattedData&&t.formattedData.indexOf(e.filter)!==-1||"string"==typeof t.type&&t.type.indexOf(e.filter)!==-1||"string"==typeof t.reason&&t.reason.indexOf(e.filter)!==-1||"string"==typeof t.data&&t.data.indexOf(e.filter)!==-1||"string"==typeof t.tips&&t.tips.indexOf(e.filter)!==-1)})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"subprotocol",{get:function(){return this.subprotocolInternally},set:function(e){localStorage.setItem("subprotocol",e),this.subprotocolInternally=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"canSaveAsBookmark",{get:function(){if(""===this.bookmarkName.trim())return!1;for(var e=0,t=this.bookmarks;e<t.length;e++){var s=t[e];if(s.name===this.bookmarkName)return!1}return!0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isSocketIO",{get:function(){return this.isSocketIOInternally},set:function(e){localStorage.setItem("isSocketIO",e?"1":""),this.isSocketIOInternally=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ignorePing",{get:function(){return this.ignorePingInternally},set:function(e){localStorage.setItem("ignorePing",e?"1":""),this.ignorePingInternally=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"showRaw",{get:function(){return this.showRawInternally},set:function(e){localStorage.setItem("showRaw",e?"1":""),this.showRawInternally=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"showFormatted",{get:function(){return this.showFormattedInternally},set:function(e){localStorage.setItem("showFormatted",e?"1":""),this.showFormattedInternally=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"message",{get:function(){return this.messageInternally},set:function(e){localStorage.setItem("message",e),this.messageInternally=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{get:function(){var e=this.baseUrl;if(this.parameters.length>0){e+="?";for(var t=0,s=this.parameters;t<s.length;t++){var o=s[t];e+=o.key+"="+o.value+"&"}e=e.substring(0,e.length-1)}return this.anchor&&(e+="#"+this.anchor),e},set:function(e){var t=e.indexOf("#");if(t>-1?(e=e.substring(0,t),this.anchor=e.substring(t+1)):this.anchor="",t=e.indexOf("?"),t>-1){this.baseUrl=e.substring(0,t);for(var s=e.substring(t+1).split("&"),o=[],i=0,a=s;i<a.length;i++){var n=a[i];t=n.indexOf("="),t===-1?o.push({key:n,value:""}):o.push({key:n.substring(0,t),value:n.substring(t+1)})}this.parameters=o}else this.baseUrl=e,this.parameters=[];localStorage.setItem("baseUrl",this.baseUrl),localStorage.setItem("parameters",JSON.stringify(this.parameters)),localStorage.setItem("anchor",this.anchor)},enumerable:!0,configurable:!0}),t.prototype.savingAsBookmark=function(){this.isEditing=!this.isEditing,n.nextTick(function(){var e=document.getElementById("bookmarkName");e&&e.focus()})},t.prototype.toggleFilter=function(){this.filterIsHidden=!this.filterIsHidden,n.nextTick(function(){var e=document.getElementById("filter");e&&e.focus()})},t.prototype.toggleStomp=function(){this.stompIsHidden=!this.stompIsHidden},t.prototype.saveAsBookmark=function(){this.isEditing=!1,this.bookmarks.unshift({name:this.bookmarkName,isSocketIO:this.isSocketIO,ignorePing:this.ignorePing,baseUrl:this.baseUrl,parameters:this.parameters,anchor:this.anchor,message:this.message,showRaw:this.showRaw,showFormatted:this.showFormatted}),localStorage.setItem("bookmarks",JSON.stringify(this.bookmarks))},t.prototype.deleteBookmark=function(e){this.bookmarks.splice(e,1),localStorage.setItem("bookmarks",JSON.stringify(this.bookmarks))},t.prototype.useBookmark=function(e){var t=this.bookmarks[e];this.isSocketIO=t.isSocketIO,this.ignorePing=t.ignorePing,this.showRaw=t.showRaw,this.showFormatted=t.showFormatted,this.message=t.message,this.baseUrl=t.baseUrl;var s=JSON.stringify(t.parameters);this.parameters=JSON.parse(s),this.anchor=t.anchor,localStorage.setItem("baseUrl",t.baseUrl),localStorage.setItem("parameters",s),localStorage.setItem("anchor",t.anchor)},t.prototype.setKeyOfParameter=function(e,t){this.parameters[e].key=t.target.value,localStorage.setItem("parameters",JSON.stringify(this.parameters))},t.prototype.setValueOfParameter=function(e,t){this.parameters[e].value=t.target.value,localStorage.setItem("parameters",JSON.stringify(this.parameters))},t.prototype.deleteParameter=function(e){this.parameters.splice(e,1),localStorage.setItem("parameters",JSON.stringify(this.parameters))},t.prototype.addParameter=function(){this.parameters.push({key:"",value:""})},t.prototype.connect=function(){try{this.subprotocol?this.websocket=new WebSocket(this.url,this.subprotocol):this.websocket=new WebSocket(this.url)}catch(e){return void this.messages.unshift({moment:o(),type:"error",reason:e.message})}this.websocket.onopen=this.onopen,this.websocket.onclose=this.onclose,this.websocket.onmessage=this.onmessage,this.websocket.onerror=this.onerror,this.isSocketIO&&(p=setInterval(this.ping,25e3))},t.prototype.sendMessage=function(){this.send(this.message)},t.prototype.useStompConnectionMessage=function(){this.message=m.stompConnectionMessage},t.prototype.useStompSubscriptionMessage=function(){this.message=m.stompSubscriptionMessage},t.prototype.useStompSendMessage=function(){this.message=m.stompSendMessage},t.prototype.send=function(e){this.websocket&&(this.ignorePing&&"2"===e||this.messages.unshift({moment:o(),type:"out",data:e}),this.websocket.send(e))},t.prototype.ping=function(){this.send("2")},t.prototype.clear=function(){this.messages=[]},t.prototype.previewMessage=function(){if(this.isPreview=!0,this.isSocketIO)this.previewResult="",d.add(this.message);else try{this.previewResult=JSON.stringify(JSON.parse(this.message),null,"    ")}catch(e){this.previewResult=e}},t.prototype.cancelPreview=function(){this.isPreview=!1},t.prototype.showTips=function(){this.messages.unshift({moment:o(),type:"tips",tips:"Tips: \n1. for socket.io, if you connect 'http://localhost', in ws's perspective, you connected 'ws://localhost/socket.io/?transport=websocket'\n2. for socket.io, if you connect 'https://localhost', in ws's perspective, you connected 'wss://localhost/socket.io/?transport=websocket'\n"+'3. for socket.io, if you send a message(eg: {a_key:"a_value"}) in an event(eg: "a_event"), in ws\'s perspective, the actual message you send is: 42["a_event",{"a_key":"a_value"}]\n4. chrome\'s developer tool is a good tool to view ws connection and messages\n5. for ActiveMQ, the default url is \'ws://localhost:61614\' ,the subprotocol should be \'stomp\''})},t.prototype.close=function(){this.messages.unshift({moment:o(),type:"tips",tips:"Is going to disconnect manually."}),this.websocket.close()},t.prototype.onopen=function(e){this.messages.unshift({moment:o(),type:e.type})},t.prototype.onclose=function(e){this.messages.unshift({moment:o(),type:e.type,reason:e.reason}),this.websocket=null,clearInterval(p)},t.prototype.onmessage=function(e){if(!this.ignorePing||"3"!==e.data){if("3"===e.data)return void this.messages.unshift({moment:o(),type:e.type,data:e.data});if(this.messages.unshift({moment:o(),type:e.type,rawData:e.data,visible:void 0,visibilityButtonExtraBottom:0}),this.isSocketIOInternally)u.add(e.data);else try{var t=JSON.parse(e.data);this.messages.unshift({moment:o(),type:e.type,formattedData:JSON.stringify(t,null,"    ")})}catch(e){console.log(e)}}},t.prototype.onerror=function(e){this.messages.unshift({moment:o(),type:e.type}),this.websocket=null,clearInterval(p)},t.prototype.toggleMessageVisibility=function(e){e.visible=!this.messageVisibility(e)},t.prototype.resultId=function(e){return"result-"+e},t.prototype.messageVisibility=function(e){return void 0!==e.visible?e.visible:e.formattedData?this.showFormatted:this.showRaw},t.prototype.visibilityButtonStyle=function(e){return{position:"absolute",bottom:(this.messageVisibility(e)?10+e.visibilityButtonExtraBottom:0)+"px",right:"10px"}},t}(n);h=a([r.default({template:s(26)})],h);var f=new h({el:"#body"});WebSocket||f.messages.unshift({moment:o(),type:"tips",tips:"current browser doesn't support WebSocket"}),u.on("decoded",function(e){f.messages.unshift({moment:o(),type:"in",formattedData:JSON.stringify(e,null,"    "),visible:void 0,visibilityButtonExtraBottom:0})}),d.on("decoded",function(e){f.previewResult=JSON.stringify(e,null,"    ")}),window.onscroll=function(){for(var e=window.innerHeight||document.documentElement.clientHeight,t=0;t<f.messages.length;t++){var s=f.messages[t],o=document.getElementById(f.resultId(t));if(o){var i=o.getBoundingClientRect();s.visibilityButtonExtraBottom=i.top<e-40&&i.top+i.height>e?i.top+i.height-e:0}}}},25:function(e,t){"use strict";t.stompConnectionMessage="CONNECT\nlogin:admin\npasscode:admin\naccept-version:1.2,1.1,1.0\nheart-beat:0,0\n\n\0",t.stompSubscriptionMessage="SUBSCRIBE\nid:sub-0\ndestination:/topic/test_topic\n\n\0",t.stompSendMessage="SEND\ndestination:/queue/test\ncontent-type:text/plain\n\nhello queue test\n\0"},26:function(e,t){e.exports='<div><ul class="bookmarks list-unstyled"><li v-for="(bookmark, index) in bookmarks"><button class="btn btn-link btn-xs" @click="useBookmark(index)">{{bookmark.name}}</button> <button class="btn btn-link btn-xs" @click="deleteBookmark(index)">delete</button></li></ul><div class="main"><div class="container"><div class="row"><div class="col-md-12"><h4>WebSocket/Socket.IO/Stomp Test Tool</h4></div></div><div class="row"><div class="col-md-10"><input id="url" type="url" class="form-control tour-input-url" v-model="url"></div><div class="col-md-2"><input type="text" class="form-control" placeholder="subprotocol" v-model="subprotocol"></div></div><div class="row"><div class="col-md-12"><label><input type="checkbox" v-model="isSocketIO" :disabled="!!websocket" class="tour-check"> socket.io</label><label v-if="isSocketIO"><input type="checkbox" v-model="ignorePing" :disabled="!!websocket"> will hide ping/pong of socket.io</label></div></div><div class="row"><div class="col-md-12"><button class="btn btn-primary btn-sm" @click="connect()" :disabled="!!websocket">connect</button> <button class="btn btn-default btn-sm" @click="close()" :disabled="!websocket">disconnect</button> <button class="btn btn-default btn-sm clipboard" data-clipboard-target="#url">copy URL</button> <button class="btn btn-default btn-sm" @click="addParameter()">add a parameter</button> <button class="btn btn-default btn-sm" @click="showTips()">show tips</button> <button class="btn btn-default btn-sm" @click="toggleStomp()">{{ stompIsHidden ? "show stomp" : "hide stomp"}}</button></div></div><div class="row" v-if="!stompIsHidden"><div class="col-md-12"><button class="btn btn-default btn-sm" @click="useStompConnectionMessage()">use stomp connection message</button> <button class="btn btn-default btn-sm" @click="useStompSubscriptionMessage()">use stomp subscription message</button> <button class="btn btn-default btn-sm" @click="useStompSendMessage()">use stomp send message</button></div></div><div class="row"><div class="col-md-6"><div class="col-md-12"><textarea style="width:100%;height:200px" class="form-control tour-input-message" v-model="message" v-if="!isPreview"></textarea><pre v-else>{{previewResult}}</pre></div></div><div class="col-md-6"><div v-for="(parameter, index) in parameters"><div class="col-md-3"><input type="text" class="form-control input-sm" :value="parameter.key" @keyup="setKeyOfParameter(index, $event)"></div><div class="col-md-7"><input type="text" class="form-control input-sm" :value="parameter.value" @keyup="setValueOfParameter(index, $event)"></div><div class="col-md-2"><button class="btn btn-link btn-sm" @click="deleteParameter(index)">delete</button></div></div></div></div><div class="row"><div class="col-md-12"><label><input type="checkbox" v-model="showRaw"> show raw data</label><label><input type="checkbox" v-model="showFormatted"> show formatted data</label></div></div><div class="row"><div class="col-md-12"><button class="btn btn-default btn-sm" @click="previewMessage()" :disabled="message===\'\'" v-if="!isPreview">preview message</button> <button class="btn btn-default btn-sm" @click="cancelPreview()" :disabled="message===\'\'" v-else>cancel preview</button> <button class="btn btn-primary btn-sm" @click="sendMessage()" :disabled="!websocket">send message</button> <button class="btn btn-default btn-sm" @click="clear()" :disabled="messages.length===0">clear</button> <button class="btn btn-default btn-sm" @click="savingAsBookmark()">{{isEditing ? "cancel bookmark" : "save as bookmark"}}</button> <button class="btn btn-default btn-sm" @click="toggleFilter()">{{filterIsHidden ? "show filter" : "hide filter"}}</button></div></div><div class="row" v-if="isEditing"><div class="col-md-4"><input id="bookmarkName" type="text" class="form-control input-sm" v-model="bookmarkName"></div><div class="col-md-2"><button class="btn btn-link btn-sm" @click="saveAsBookmark()" :disabled="!canSaveAsBookmark">save</button></div></div><div class="row" v-if="!filterIsHidden"><div class="col-md-6"><input id="filter" type="text" class="form-control input-sm" v-model="filter"></div></div><div class="row"><div class="col-md-12 tour-view-messages"><ul><li v-for="(message, index) in filteredMessages" class="visibility-button-container"><span class="label label-default">{{message.moment}}</span> <span v-if="message.type===\'open\'" class="label label-success">open</span> <span v-if="message.type===\'close\'" class="label label-danger">close</span> <span v-if="message.type===\'error\'" class="label label-danger">error</span> <span v-if="message.type===\'out\'" class="label label-info">out</span> <span v-if="message.type===\'in\'" class="label label-info">in</span> <span v-if="message.type===\'tips\'" class="label label-info">tips</span> <span v-if="message.reason">{{message.reason}}</span> <span v-if="message.data">{{message.data}}</span><template v-if="message.formattedData"><pre :id="resultId(index)" v-if="message.visible !== undefined ? message.visible : showFormatted">{{message.formattedData}}</pre><label v-else class="label label-default">formatted</label><button class="btn btn-xs btn-default" @click="toggleMessageVisibility(message)" :style="visibilityButtonStyle(message)">{{messageVisibility(message) ? "hide" : "show"}}</button></template><template v-if="message.rawData"><pre :id="resultId(index)" v-if="message.visible !== undefined ? message.visible : showRaw">{{message.rawData}}</pre><label v-else class="label label-default">raw</label><button class="btn btn-xs btn-default" @click="toggleMessageVisibility(message)" :style="visibilityButtonStyle(message)">{{messageVisibility(message) ? "hide" : "show"}}</button></template><pre v-if="message.tips">{{message.tips}}</pre></li></ul></div></div></div></div></div>'}});