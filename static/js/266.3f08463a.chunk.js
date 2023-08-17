"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{266:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});var n=t(439),r=t(434),s=t(428),c=t(791),l=t(184);function o(){var e=(0,r.v9)((function(e){return e.contacts.items})),a=(0,r.I0)();return(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Create a contact"}),(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.target.elements.name.value;e.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):(a((0,s.uK)({name:n,number:t.target.elements.number.value})),t.target.reset())},className:"NewContact",children:[(0,l.jsx)("div",{className:"mb-3",children:(0,l.jsxs)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:["Name"," ",(0,l.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,"aria-describedby":"emailHelp",className:"form-control"})]})}),(0,l.jsx)("div",{className:"mb-3",children:(0,l.jsxs)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:["Number"," ",(0,l.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,"aria-describedby":"emailHelp",className:"form-control"})]})}),(0,l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add contact"})]})]})}var i=t(164),m=document.querySelector("#modalRoot"),u=function(e){var a=e.onClose,t=e.children;(0,c.useEffect)((function(){var e=function(e){"Escape"===e.code&&alert('Are you sure you have already changed your contact? If so, click on the button "Change contact".')};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return(0,i.createPortal)((0,l.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&alert('Are you sure you have already changed your contact? If so, click on the button "Change contact".')},children:(0,l.jsx)("div",{className:"Modal",children:t})}),m)};function d(e){var a=e.id,t=e.name,n=e.number,c=e.onClose,o=(0,r.v9)((function(e){return e.contacts.items})),i=(0,r.I0)();return(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target,n=e.target.elements.name.value,r=e.target.elements.number.value;o.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):o.find((function(e){return e.number===r}))?alert("This number: ".concat(r," is already in contacts.")):(i((0,s.Tk)({contactId:a,name:t.elements.name.value,number:t.elements.number.value})),c())},className:"ItemContact",children:[(0,l.jsx)("div",{className:"mb-3",children:(0,l.jsxs)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:["Name"," ",(0,l.jsx)("input",{type:"text",name:"name",defaultValue:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,"aria-describedby":"emailHelp",className:"form-control"})]})}),(0,l.jsx)("div",{className:"mb-3",children:(0,l.jsxs)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:["Number"," ",(0,l.jsx)("input",{type:"tel",name:"number",defaultValue:n,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,"aria-describedby":"emailHelp",className:"form-control"})]})}),(0,l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Change contact"})]})}var b=t(321);var h=function(){var e=(0,c.useState)(!1),a=(0,n.Z)(e,2),t=a[0],i=a[1],m=(0,c.useState)(""),h=(0,n.Z)(m,2),p=h[0],f=h[1],v=(0,c.useState)(""),x=(0,n.Z)(v,2),y=x[0],j=x[1],N=(0,c.useState)(""),C=(0,n.Z)(N,2),g=C[0],w=C[1],A=(0,r.v9)((function(e){return e.contacts})),k=A.items,I=A.isLoading,Z=(0,r.I0)();(0,c.useEffect)((function(){Z((0,s.yF)())}),[Z]);var z=function(){i(!t)};return(0,l.jsxs)("div",{className:"Contact",children:[(0,l.jsx)(o,{}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Your contacts"}),(0,l.jsx)("div",{children:I&&(0,l.jsx)(b.Z,{})}),Array.isArray(k)&&k.length<=0&&(0,l.jsx)("p",{children:" There are no contacts. You can add your contacts. "}),(0,l.jsx)("ul",{className:"ContactList",children:k.map((function(e){var a=e.name,t=e.number,n=e.id;return(0,l.jsxs)("li",{children:[a,": ",t,"  ",(0,l.jsx)("button",{type:"button",className:"btn btn-primary BtnDelete","aria-label":"Close",onClick:function(){return function(e){Z((0,s.GK)(e))}(n)},children:"delete"}),(0,l.jsx)("button",{type:"button",className:"btn btn-primary BtnDelete","aria-label":"Close",onClick:function(){return function(e){var a=e.id,t=e.name,n=e.number;z(),f(t),j(n),w(a)}({id:n,name:a,number:t})},children:"update"})]},n)}))})]}),t&&(0,l.jsx)(u,{onClose:z,children:(0,l.jsx)(d,{id:g,name:p,number:y,onClose:z})})]})}}}]);
//# sourceMappingURL=266.3f08463a.chunk.js.map