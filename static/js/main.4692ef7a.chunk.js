(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={form:"Form_form__kFqpC",label:"Form_label__nolQm",inputs:"Form_inputs__l3fdI",button:"Form_button__xJKOB",enter:"Form_enter__Ea4el",enterActive:"Form_enterActive__tGV57",exit:"Form_exit__2Oy_Y",exitActive:"Form_exitActive__3u1BC"}},12:function(t,e,n){t.exports={list:"ContactsList_list__111tj",item:"ContactsList_item__1BNWk",item_name:"ContactsList_item_name__rQDqU",item_number:"ContactsList_item_number__121T3",button:"ContactsList_button__3gXmO",enter:"ContactsList_enter__piYuq",enterActive:"ContactsList_enterActive__1xOyl",exit:"ContactsList_exit__38MRK",exitActive:"ContactsList_exitActive__1GS_N"}},16:function(t,e,n){t.exports={container:"App_container__1ENNp",contacts_container:"App_contacts_container__C82Do",contact_title:"App_contact_title__3E-Gx",title:"App_title__1gwcb",appear:"App_appear__37j0E",appearActive:"App_appearActive__1pBKT"}},27:function(t,e,n){t.exports={label:"Filter_label__2w9pt",input:"Filter_input__sjTos"}},38:function(t,e,n){t.exports={alert:"Alert_alert__2ep3z"}},39:function(t,e,n){t.exports={error:"Error_error__Lrnl6"}},41:function(t,e,n){t.exports={spinner:"Spinner_spinner__2V4yK"}},69:function(t,e,n){},89:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(9),o=n.n(r),i=n(21),s=n(17),u=n.n(s),l=n(4),b=Object(l.b)("contact/fetchContactRequest"),j=Object(l.b)("contact/fetchContactSuccess"),f=Object(l.b)("contact/fetchContactError"),p=Object(l.b)("contact/addContactRequest"),d=Object(l.b)("contact/addContactSuccess"),m=Object(l.b)("contact/addContactError"),_=Object(l.b)("contact/deleteContactRequest"),O=Object(l.b)("contact/deleteContactSuccess"),h=Object(l.b)("contact/deleteContactError"),x=Object(l.b)("phonebook/contact_filter");u.a.defaults.baseURL="http://localhost:4040";var C,v,N,g={addContact:function(t,e){return function(n){var c={name:t,number:e};n(p()),u.a.post("/contacts",c).then((function(t){var e=t.data;return n(d(e))})).catch((function(t){return n(m(t))}))}},deleteContact:function(t){return function(e){e(_()),u.a.delete("/contacts/".concat(t)).then((function(){return e(O(t))})).catch((function(t){return e(h(t))}))}},fetchContacts:function(){return function(t){t(b()),u.a.get("/contacts").then((function(e){var n=e.data;return t(j(n))})).catch((function(e){return t(f(e))}))}}},y=n(18),A=function(t){return t.phonebook.filter},k=function(t){return t.phonebook.contacts},F=function(t){return t.phonebook.loading},L=function(t){return t.phonebook.error},w=Object(y.a)([A,k],(function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))})),E=n(3),S=n(5),R=Object(l.c)([],(C={},Object(E.a)(C,j,(function(t,e){return e.payload})),Object(E.a)(C,d,(function(t,e){return[e.payload].concat(Object(i.a)(t))})),Object(E.a)(C,O,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),C)),q=Object(l.c)("",Object(E.a)({},x,(function(t,e){return e.payload}))),B=Object(l.c)(!1,(v={},Object(E.a)(v,b,(function(){return!0})),Object(E.a)(v,j,(function(){return!1})),Object(E.a)(v,f,(function(){return!1})),Object(E.a)(v,p,(function(){return!0})),Object(E.a)(v,d,(function(){return!1})),Object(E.a)(v,m,(function(){return!1})),Object(E.a)(v,_,(function(){return!0})),Object(E.a)(v,O,(function(){return!1})),Object(E.a)(v,h,(function(){return!1})),v)),z=Object(l.c)(null,(N={},Object(E.a)(N,f,(function(t,e){return e.payload})),Object(E.a)(N,m,(function(t,e){return e.payload})),Object(E.a)(N,h,(function(t,e){return e.payload})),N)),I=Object(S.b)({contacts:R,filter:q,loading:B,error:z}),T=n(13),D=Object(i.a)(Object(l.d)({serializableCheck:{ignoredActions:[T.a,T.f,T.b,T.c,T.d,T.e]}})),V=Object(l.a)({reducer:{phonebook:I},middleware:D,devTools:!1}),J=n(10),K=(n(68),n(69),n(37)),M=n(90),G=n(19),Z=n(20),Q=n(23),U=n(22),Y=n(38),P=n.n(Y),W=n(1),X=function(){return Object(W.jsx)("div",{className:P.a.alert,children:"Contact already exists"})},$=n(11),H=n.n($),tt=function(t){Object(Q.a)(n,t);var e=Object(U.a)(n);function n(){var t;Object(G.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:"",alert:!1},t.getContactValue=function(e){var n=e.currentTarget,c=n.value,a=n.name;t.setState(Object(E.a)({},a,c))},t.findContactName=function(e){return t.props.contacts.find((function(t){return t.name===e}))},t.handleSubmit=function(e){var n=t.state,c=n.name,a=n.number;if(e.preventDefault(),t.findContactName(c))return t.resetInput(),t.setState({alert:!0}),void setTimeout((function(){return t.setState({alert:!1})}),2e3);t.props.addContact(c,a),t.resetInput()},t.resetInput=function(){t.setState({name:"",number:""})},t}return Object(Z.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,c=t.alert;return Object(W.jsxs)("form",{onSubmit:this.handleSubmit,className:H.a.form,children:[Object(W.jsx)(M.a,{in:c,appear:!0,timeout:500,classNames:H.a,unmountOnExit:!0,children:Object(W.jsx)(X,{})}),Object(W.jsxs)("label",{className:H.a.label,children:["Name",Object(W.jsx)("input",{className:H.a.inputs,type:"text",name:"name",autoComplete:"off",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.getContactValue})]}),Object(W.jsxs)("label",{className:H.a.label,children:["Number",Object(W.jsx)("input",{className:H.a.inputs,type:"tel",name:"number",autoComplete:"off",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.getContactValue})]}),Object(W.jsx)("button",{type:"submit",className:H.a.button,children:"add contact"})]})}}]),n}(a.a.Component),et=Object(J.b)((function(t){return{contacts:k(t)}}),(function(t){return{addContact:function(e,n){return t(g.addContact(e,n))}}}))(tt),nt=n(91),ct=n(39),at=function(){return Object(W.jsx)("div",{className:ct.error,children:Object(W.jsx)("h1",{children:"It seems like something is broken, we will fix it soon"})})},rt=n(40),ot=n.n(rt),it=n(41),st=function(){return Object(W.jsx)(ot.a,{className:it.spinner,type:"Bars",color:"#00BFFF",height:50,width:100})},ut=n(12),lt=n.n(ut),bt=function(t){Object(Q.a)(n,t);var e=Object(U.a)(n);function n(){return Object(G.a)(this,n),e.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=a.a.createRef(null),e=this.props,n=e.contacts,c=e.deleteContact,r=e.isLoading,o=e.isError;return Object(W.jsxs)(W.Fragment,{children:[r&&Object(W.jsx)(st,{}),o&&Object(W.jsx)(at,{}),Object(W.jsx)(nt.a,{component:"ul",className:lt.a.list,children:n.map((function(e){var n=e.name,a=e.id,r=e.number;return Object(W.jsx)(M.a,{nodeRef:t,timeout:250,classNames:lt.a,children:Object(W.jsxs)("li",{className:lt.a.item,children:[Object(W.jsx)("span",{className:lt.a.item_name,children:n}),Object(W.jsx)("span",{className:lt.a.item_number,children:r}),Object(W.jsx)("button",{className:lt.a.button,type:"button",onClick:function(){return c(a)},children:"Delete"})]},a)},a)}))})]})}}]),n}(c.Component),jt=Object(J.b)((function(t){return{contacts:w(t),isLoading:F(t),isError:L(t)}}),(function(t){return{deleteContact:function(e){return t(g.deleteContact(e))},fetchContacts:function(){return t(g.fetchContacts())}}}))(bt),ft=n(27),pt=n.n(ft),dt=Object(J.b)((function(t){return{filter:A(t)}}),(function(t){return{onChange:function(e){return t(x(e.target.value))}}}))((function(t){var e=t.filter,n=t.onChange;return Object(W.jsxs)("label",{className:pt.a.label,children:["Find contacts by name",Object(W.jsx)("input",{className:pt.a.input,type:"text",name:"filter",onChange:n,value:e,autoComplete:"off"})]})})),mt=n(16),_t=n.n(mt),Ot=function(){var t=a.a.useRef(null);return Object(W.jsxs)("section",{className:_t.a.container,children:[Object(W.jsx)(M.a,{nodeRef:t,in:!0,appear:!0,timeout:500,classNames:Object(K.a)({},_t.a),unmountOnExit:!0,children:Object(W.jsx)("h1",{ref:t,className:_t.a.title,children:"Phonebook"})}),Object(W.jsx)(et,{}),Object(W.jsxs)("div",{className:_t.a.contacts_container,children:[Object(W.jsx)("h2",{className:_t.a.contact_title,children:"Contacts"}),Object(W.jsx)(dt,{}),Object(W.jsx)(jt,{})]})]})};o.a.render(Object(W.jsx)(a.a.StrictMode,{children:Object(W.jsx)(J.a,{store:V,children:Object(W.jsx)(Ot,{})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.4692ef7a.chunk.js.map