(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={findLabel:"Filter_findLabel__93xwj",inputForm:"Filter_inputForm__14n6F"}},19:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(12),r=n.n(o),s=(n(19),n(14)),i=n(3),l=n(13),u=n.n(l),m=n(4),b=n.n(m),d=n(0);function j(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),l=s[0],u=s[1],m=Object(a.useState)(!1),j=Object(i.a)(m,2),f=j[0],p=j[1],_=function(e){console.log(e.currentTarget.value);var t=e.currentTarget,n=t.name,a=t.value;switch(p(!1),n){case"name":o(a);break;case"number":u(a);break;default:return}},h=function(){o(""),u("")};return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addNewContact(c,l),h()},className:b.a.form,children:[Object(d.jsxs)("label",{className:b.a.labelForm,children:["Name",Object(d.jsx)("input",{type:"text",name:"name",value:c,onChange:_,onBlur:function(t){e.contacts.find((function(e){return e.name.toLowerCase()===t.currentTarget.value.toLowerCase()}))&&(p(!0),alert("".concat(t.currentTarget.value," is already in contacts.")))},className:b.a.inputForm,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(d.jsxs)("label",{className:b.a.labelForm,children:["Number",Object(d.jsx)("input",{type:"tel",name:"number",value:l,onChange:_,disabled:f,className:b.a.inputForm,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(d.jsx)("button",{type:"submit",disabled:f,className:b.a.formBtn,children:"Add contact"})]})}var f=n(2),p=n.n(f),_=n(6),h=n.n(_),O=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(d.jsx)("ul",{className:h.a.contactsList,children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(d.jsxs)("li",{className:h.a.contactItem,children:[t,":",Object(d.jsx)("span",{className:h.a.contactTel,children:a}),Object(d.jsx)("button",{onClick:function(){return n(c)},className:h.a.button,children:"Delete"})]},c)}))})};O.proTotypes={contacts:p.a.array.isRequired,onDeleteContact:p.a.func.isRequired};var C=O,x=n(11),v=n.n(x),g=function(e){var t=e.value,n=e.onChange,a=e.resetFiler;return Object(d.jsxs)("label",{className:v.a.findLabel,children:["Find contact by name",Object(d.jsx)("input",{type:"text",name:"name",value:t,onChange:n,className:v.a.inputForm,onBlur:a})]})},F=g;g.protoTypes={value:p.a.string.isRequired,onChange:p.a.func,resetFiler:p.a.func};var N=n(7),w=n.n(N),k=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];function y(){var e,t=Object(a.useState)(null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:k),n=Object(i.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),m=l[0],b=l[1];Object(a.useEffect)((function(){console.log("useEffect"),window.localStorage.setItem("contacts",JSON.stringify(c))}),[c]);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:w.a.container,children:Object(d.jsxs)("div",{className:w.a.phonebook,children:[Object(d.jsx)("h1",{className:w.a.title,children:"Phonebook"}),Object(d.jsx)(j,{contacts:c,addNewContact:function(e,t){var n={id:u.a.generate(),name:e,number:t};o((function(e){return[].concat(Object(s.a)(e),[n])}))}}),Object(d.jsx)("h2",{className:w.a.titleContacts,children:"Contacts"}),Object(d.jsx)(F,{value:m,onChange:function(e){b(e.currentTarget.value)},resetFiler:function(){b("")}}),Object(d.jsx)(C,{contacts:c.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())})),onDeleteContact:function(e){o((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})})})}r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={form:"Form_form__d849i",labelForm:"Form_labelForm__1JHCj",inputForm:"Form_inputForm__c5hmZ",formBtn:"Form_formBtn__2yWnZ"}},6:function(e,t,n){e.exports={contactsList:"Contacts_contactsList__2kh1Y",contactItem:"Contacts_contactItem__47GIw",contactTel:"Contacts_contactTel__2n4Vj",button:"Contacts_button__1jHba"}},7:function(e,t,n){e.exports={container:"App_container__2uiTJ",title:"App_title__2Esc_",titleContacts:"App_titleContacts__2hCu_",phonebook:"App_phonebook__1nK0v"}}},[[31,1,2]]]);
//# sourceMappingURL=main.c0df7df3.chunk.js.map