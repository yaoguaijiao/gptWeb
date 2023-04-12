(function(){"use strict";var e={7323:function(e,t,n){var o=n(9242),r=n(3396);function i(e,t,n,o,i,u){const l=(0,r.up)("ChatGPT");return(0,r.wg)(),(0,r.j4)(l)}const u={class:"common-layout"},l=(0,r._)("h1",null,"智能问答助手",-1),a=(0,r._)("div",{style:{width:"15px",margin:"100px auto","font-size":"30px"}}," 输入文字点击提交对 AI 进行提问 ",-1),s=["innerHTML"],c={style:{width:"1000px",height:"200px"}},d={style:{"text-align":"right"}};function f(e,t,n,o,i,f){const h=(0,r.up)("el-header"),p=(0,r.up)("el-aside"),m=(0,r.up)("el-descriptions-item"),g=(0,r.up)("el-descriptions"),v=(0,r.up)("el-main"),b=(0,r.up)("el-input"),w=(0,r.up)("el-button"),y=(0,r.up)("el-footer"),_=(0,r.up)("el-container");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r.Wm)(_,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,{style:{"background-color":"#ff8000"}},{default:(0,r.w5)((()=>[l])),_:1}),(0,r.Wm)(_,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{style:{"background-color":"#5f8000","text-align":"center"}},{default:(0,r.w5)((()=>[a])),_:1}),(0,r.Wm)(_,null,{default:(0,r.w5)((()=>[(0,r.Wm)(v,{style:{"background-color":"#FFFFFF",height:"500px"}},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{column:"1",size:"small",border:"true",style:{width:"1000px"}},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.chatRecord,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e},[(0,r.Wm)(m,{label:e.sender,"label-align":"center"},{default:(0,r.w5)((()=>[(0,r._)("span",{innerHTML:e.message},null,8,s)])),_:2},1032,["label"])])))),128))])),_:1})])),_:1}),(0,r.Wm)(y,{style:{padding:"10px",height:"300px"}},{default:(0,r.w5)((()=>[(0,r._)("div",c,[(0,r.Wm)(b,{modelValue:i.question,"onUpdate:modelValue":t[0]||(t[0]=e=>i.question=e),type:"textarea",placeholder:"请输入你的问题",autosize:{minRows:5,maxRows:7},resize:"none","show-word-limit":"",maxlength:"300"},null,8,["modelValue"]),(0,r._)("div",d,[(0,r.Wm)(w,{color:"#8d3d45",onClick:f.chat,plain:"",style:{margin:"5px 0",width:"100px"},size:"large",disabled:i.click},{default:(0,r.w5)((()=>[(0,r.Uk)("提交")])),_:1},8,["onClick","disabled"])])])])),_:1})])),_:1})])),_:1})])),_:1})])}n(7658);var h={name:"ChatGPT",data(){return{question:"",count:0,click:!1,chatRecord:[{sender:"AI:",message:"您好，主人！有什么需要向我提问的吗？"}]}},methods:{chat(){this.click=!0;let e="https://api.lsbd.fun/request?question="+this.question;var t={sender:"YOU:",message:this.question},n={sender:"AI:",message:""};this.chatRecord.push(t),this.chatRecord.push(n),this.question="";let o=new EventSource(e);o.addEventListener("message",(e=>{if(console.log(e.data),this.count++,this.count>2)if("Answer Done!"===e.data.toString())o.close(),this.count=0,this.click=!1;else{var t=this.chatRecord[this.chatRecord.length-1];t.message+=e.data,this.chatRecord[this.chatRecord.length-1]=t}}))}}},p=n(89);const m=(0,p.Z)(h,[["render",f]]);var g=m,v={name:"App",components:{ChatGPT:g}};const b=(0,p.Z)(v,[["render",i]]);var w=b,y=n(3765),_=(n(4415),n(2748));const x=(0,o.ri)(w);x.use(y.Z),x.mount("#app");for(const[k,O]of Object.entries(_))x.component(k,O)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var u=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var l=!0,a=0;a<o.length;a++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(l=!1,i<u&&(u=i));if(l){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,u=o[0],l=o[1],a=o[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(a)var c=a(n)}for(t&&t(o);s<u.length;s++)i=u[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkchat_bot_vue"]=self["webpackChunkchat_bot_vue"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7323)}));o=n.O(o)})();
//# sourceMappingURL=app.b6e4cb34.js.map