"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[717],{1717:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(3433),i=t(1413),u=t(9439),o=t(6515),a=t(7496),s=t(2425),c=t(4964),l=t(4195),d=t(2791),f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 000-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]},name:"share-alt",theme:"outlined"},m=t(4291),h=function(e,n){return d.createElement(m.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:f}))};h.displayName="ShareAltOutlined";var p=d.forwardRef(h),g=t(9529),x=t(7985),Z=t(184),j=o.Z.Column,y=function(){var e=a.Z.useForm(),n=(0,u.Z)(e,1)[0],t=a.Z.useForm(),f=(0,u.Z)(t,1)[0],m=(0,d.useState)(!1),h=(0,u.Z)(m,2),y=h[0],k=h[1],w=(0,d.useState)(),_=(0,u.Z)(w,2),b=_[0],v=_[1];(0,d.useEffect)((function(){(0,x.E9)().then((function(e){var n=[];e.data.forEach((function(e){n.push((0,i.Z)((0,i.Z)({},e),{},{key:e._id,createTime:new Date(e.createTime).toLocaleString()}))})),v(n)}))}),[]);return(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(a.Z,{form:n,name:"horizontal_login",layout:"inline",onFinish:function(e){(0,x.s0)(e).then((function(e){n.resetFields();var t=(0,r.Z)(b);t.unshift((0,i.Z)((0,i.Z)({},e.data.data),{},{key:e.data.data._id,createTime:new Date(e.data.data.createTime).toLocaleString()})),v(t)}))},children:[(0,Z.jsx)(a.Z.Item,{name:"nick",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u94fe\u63a5\u6807\u8bc6!"}],children:(0,Z.jsx)(s.Z,{prefix:(0,Z.jsx)(g.Z,{}),placeholder:"\u94fe\u63a5\u6807\u8bc6"})}),(0,Z.jsx)(a.Z.Item,{name:"url",style:{width:"600px"},rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8df3\u8f6c\u94fe\u63a5!"}],children:(0,Z.jsx)(s.Z,{prefix:(0,Z.jsx)(p,{}),placeholder:"\u8df3\u8f6c\u94fe\u63a5"})}),(0,Z.jsx)(a.Z.Item,{shouldUpdate:!0,children:function(){return(0,Z.jsx)(c.Z,{type:"primary",htmlType:"submit",disabled:!n.isFieldsTouched(!0)||!!n.getFieldsError().filter((function(e){return e.errors.length})).length,children:"\u6dfb\u52a0"})}})]}),(0,Z.jsxs)(o.Z,{dataSource:b,children:[(0,Z.jsx)(j,{title:"\u6807\u8bc6",dataIndex:"nick"},"nick"),(0,Z.jsx)(j,{title:"\u94fe\u63a5",dataIndex:"url"},"url"),(0,Z.jsx)(j,{title:"\u65f6\u95f4",dataIndex:"createTime"},"createTime"),(0,Z.jsx)(j,{title:"\u64cd\u4f5c",align:"right",render:function(e,n){return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(c.Z,{type:"primary",style:{marginRight:"3px"},onClick:function(){return function(e){f.setFieldsValue(e),k(!0)}(n)},children:"\u7f16\u8f91"}),(0,Z.jsx)(c.Z,{type:"primary",danger:!0,onClick:function(){return function(e){var n={id:e};(0,x.uX)(n).then((function(){var n=b.filter((function(n){return n.key!==e}));v(n)}))}(n.key)},children:"\u5220\u9664"})]})}},"action")]}),(0,Z.jsx)(l.Z,{title:"\u7f16\u8f91\u4ee3\u7406",placement:"right",onClose:function(){f.resetFields(),k(!1)},visible:y,children:(0,Z.jsxs)(a.Z,{form:f,name:"horizontal_login",onFinish:function(e){(0,x.U4)(e).then((function(n){console.log(n);var t=(0,r.Z)(b),u=b.map((function(e){return e._id})).indexOf(e._id);t.splice(u,1,(0,i.Z)((0,i.Z)({},n.data.data),{},{key:n.data.data._id,createTime:new Date(n.data.data.createTime).toLocaleString()})),v(t),f.resetFields(),k(!1)}))},children:[(0,Z.jsx)(a.Z.Item,{style:{display:"none"},name:"_id",children:(0,Z.jsx)(s.Z,{disabled:!0})}),(0,Z.jsx)(a.Z.Item,{name:"nick",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u94fe\u63a5\u6807\u8bc6!"}],children:(0,Z.jsx)(s.Z,{prefix:(0,Z.jsx)(g.Z,{}),placeholder:"\u94fe\u63a5\u6807\u8bc6"})}),(0,Z.jsx)(a.Z.Item,{name:"url",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8df3\u8f6c\u94fe\u63a5!"}],children:(0,Z.jsx)(s.Z,{prefix:(0,Z.jsx)(p,{}),placeholder:"\u8df3\u8f6c\u94fe\u63a5"})}),(0,Z.jsx)(a.Z.Item,{shouldUpdate:!0,children:function(){return(0,Z.jsx)(c.Z,{type:"primary",htmlType:"submit",children:"\u4fee\u6539"})}})]})})]})}},7985:function(e,n,t){t.d(n,{Wk:function(){return x},YX:function(){return g},Iq:function(){return j},z5:function(){return Z},dq:function(){return v},hV:function(){return b},NG:function(){return _},Ig:function(){return s},bK:function(){return y},ll:function(){return k},pk:function(){return c},P1:function(){return w},s0:function(){return m},E9:function(){return f},uX:function(){return p},U4:function(){return h},Wj:function(){return l},tN:function(){return d}});var r=t(4569),i=t.n(r),u=t(2692),o=i().create({baseURL:"/web/"});o.interceptors.request.use((function(e){return localStorage.__web_token&&(e.headers.Authorization="Bearer "+localStorage.__web_token),e}),(function(e){return Promise.reject(e)})),o.interceptors.response.use((function(e){return e.data.message&&u.ZP.success(e.data.message),e}),(function(e){return 401===e.response.status&&(localStorage.removeItem("__web_token"),console.log(window.location.pathname.indexOf("login")),-1===window.location.pathname.indexOf("login")&&(window.location.pathname="/login")),e.response.data?(u.ZP.error(e.response.data),Promise.reject(e)):Promise.reject(e)}));var a=o,s=function(e){return a.post("/login",e)},c=function(e){return a.post("/register",e)},l=function(){return a.get("/user")},d=function(e){return a.put("/user",e)},f=function(){return a.get("/url")},m=function(e){return a.post("/url",e)},h=function(e){return a.put("/url",e)},p=function(e){return a.delete("/url",{params:e})},g=function(){return a.get("/agent")},x=function(e){return a.post("/agent",e)},Z=function(e){return a.put("/agent",e)},j=function(e){return a.delete("/agent",{params:e})},y=function(){return a.get("/promotion")},k=function(e){return a.post("/promotion",e)},w=function(e){return a.put("/stats",e)},_=function(){return a.get("/stats")},b=function(e){return a.put("/common",e)},v=function(e){return a.post("/common",e)}}}]);
//# sourceMappingURL=717.c4605182.chunk.js.map