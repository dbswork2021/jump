"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[795],{9795:function(n,e,t){t.r(e);var r=t(1413),u=t(9439),o=t(7496),s=t(2425),i=t(4964),a=t(2791),c=t(6871),f=t(7985),l=t(184),m={wrapperCol:{xs:{span:8},sm:{span:6}}};e.default=function(){var n=o.Z.useForm(),e=(0,u.Z)(n,1)[0],t=(0,c.s0)();(0,a.useEffect)((function(){(0,f.Wj)().then((function(n){e.setFieldsValue(n.data)}))}));return(0,l.jsxs)(o.Z,(0,r.Z)((0,r.Z)({},m),{},{form:e,name:"user",onFinish:function(n){(0,f.tN)(n).then((function(n){localStorage.removeItem("__web_token"),t("/login")}))},children:[(0,l.jsx)(o.Z.Item,{name:"id",style:{display:"none"},children:(0,l.jsx)(s.Z,{disabled:!0})}),(0,l.jsx)(o.Z.Item,{name:"username",label:"\u7528\u6237\u540d",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}],children:(0,l.jsx)(s.Z,{})}),(0,l.jsx)(o.Z.Item,{name:"password",label:"\u5bc6\u7801",rules:[{required:!0,message:"Please input your password!"}],children:(0,l.jsx)(s.Z.Password,{})}),(0,l.jsx)(o.Z.Item,{name:"confirm",label:"\u786e\u8ba4\u5bc6\u7801",dependencies:["password"],rules:[{required:!0,message:"\u518d\u6b21\u8f93\u5165\u5bc6\u7801"},function(n){var e=n.getFieldValue;return{validator:function(n,t){return t&&e("password")!==t?Promise.reject(new Error("\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4")):Promise.resolve()}}}],children:(0,l.jsx)(s.Z.Password,{})}),(0,l.jsx)(o.Z.Item,{children:(0,l.jsx)(i.Z,{type:"primary",htmlType:"submit",children:"\u786e\u8ba4"})})]}))}},7985:function(n,e,t){t.d(e,{Wk:function(){return h},YX:function(){return w},Iq:function(){return Z},z5:function(){return j},dq:function(){return v},hV:function(){return k},NG:function(){return P},Ig:function(){return a},bK:function(){return b},ll:function(){return x},pk:function(){return c},P1:function(){return _},s0:function(){return p},E9:function(){return m},uX:function(){return g},U4:function(){return d},Wj:function(){return f},tN:function(){return l}});var r=t(4569),u=t.n(r),o=t(2692),s=u().create({baseURL:"/web/"});s.interceptors.request.use((function(n){return localStorage.__web_token&&(n.headers.Authorization="Bearer "+localStorage.__web_token),n}),(function(n){return Promise.reject(n)})),s.interceptors.response.use((function(n){return n.data.message&&o.ZP.success(n.data.message),n}),(function(n){return 401===n.response.status&&(localStorage.removeItem("__web_token"),console.log(window.location.pathname.indexOf("login")),-1===window.location.pathname.indexOf("login")&&(window.location.pathname="/login")),n.response.data?(o.ZP.error(n.response.data),Promise.reject(n)):Promise.reject(n)}));var i=s,a=function(n){return i.post("/login",n)},c=function(n){return i.post("/register",n)},f=function(){return i.get("/user")},l=function(n){return i.put("/user",n)},m=function(){return i.get("/url")},p=function(n){return i.post("/url",n)},d=function(n){return i.put("/url",n)},g=function(n){return i.delete("/url",{params:n})},w=function(){return i.get("/agent")},h=function(n){return i.post("/agent",n)},j=function(n){return i.put("/agent",n)},Z=function(n){return i.delete("/agent",{params:n})},b=function(){return i.get("/promotion")},x=function(n){return i.post("/promotion",n)},_=function(n){return i.put("/stats",n)},P=function(){return i.get("/stats")},k=function(n){return i.put("/common",n)},v=function(n){return i.post("/common",n)}}}]);
//# sourceMappingURL=795.1e6e88eb.chunk.js.map