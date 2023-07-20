"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[687],{4647:function(e,n,t){t.d(n,{i:function(){return S}});var i,r,a,l,s,o,d,u=t(9439),c=t(168),p=t(6088),h=t(1148),m=t(4224),f=(t(1720),p.Z.h1(i||(i=(0,c.Z)(["\n  margin-bottom: 32px;\n\n  font-size: 32px;\n  text-align: center;\n"])))),v=p.Z.form(r||(r=(0,c.Z)(["\n  width: 500px;\n  margin: 90px auto;\n  padding: 20px 50px;\n\n  background-color: #fff3;\n\n  border-radius: 25px;\n"]))),x=p.Z.label(a||(a=(0,c.Z)(["\n  font-size: 24px;\n"]))),b=(0,p.Z)(h.I)(l||(l=(0,c.Z)(["\n  margin-bottom: 32px;\n\n  font-family: 'Inconsolata';\n  font-size: 20px;\n\n  &:focus-visible {\n    border-color: purple;\n    box-shadow: 0px 1px 0px 0px purple;\n  }\n"]))),g=(0,p.Z)(m.z)(s||(s=(0,c.Z)(["\n  display: block;\n  margin: 0 auto 24px;\n"]))),Z=p.Z.p(o||(o=(0,c.Z)(["\n  text-align: center;\n"]))),y=p.Z.span(d||(d=(0,c.Z)(["\n  margin-left: 8px;\n\n  font-weight: 700;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    color: teal;\n  }\n"]))),j=t(1087),I=t(2791),k=t(5794),C=t(7806),R=t(184),N=function(){var e=(0,I.useState)(!1),n=(0,u.Z)(e,2),t=n[0],i=n[1];return(0,R.jsxs)("label",{children:["Password",(0,R.jsxs)(k.B,{size:"md",children:[(0,R.jsx)(b,{pr:"4.5rem",type:t?"text":"password",name:"password",variant:"flushed"}),(0,R.jsx)(C.x,{width:"4.5rem",children:(0,R.jsx)(m.z,{size:"xs",onClick:function(){return i(!t)},colorScheme:"blackAlpha",children:t?"Hide":"Show"})})]})]})},S=function(e){var n=e.type,t=e.onSubmit,i=e.onFilterChange;return"login"===n?(0,R.jsxs)(v,{autoComplete:"off",children:[(0,R.jsx)(f,{children:"Welcome Back"}),(0,R.jsxs)(x,{children:["Email",(0,R.jsx)(b,{name:"email",variant:"flushed"})]}),(0,R.jsx)(x,{children:(0,R.jsx)(N,{})}),(0,R.jsx)(g,{colorScheme:"blackAlpha",type:"submit",children:"Login"}),(0,R.jsxs)(Z,{children:["Do not have an account?",(0,R.jsx)(y,{children:(0,R.jsx)(j.OL,{to:"/register",children:"Register"})})]})]}):"register"===n?(0,R.jsxs)(v,{autoComplete:"off",children:[(0,R.jsx)(f,{children:"Create an account"}),(0,R.jsxs)(x,{children:["Name",(0,R.jsx)(b,{name:"name",variant:"flushed"})]}),(0,R.jsxs)(x,{children:["Email",(0,R.jsx)(b,{name:"email",variant:"flushed"})]}),(0,R.jsxs)(x,{children:["Password",(0,R.jsx)(b,{name:"password",variant:"flushed"})]}),(0,R.jsx)(g,{colorScheme:"blackAlpha",type:"submit",children:"Create Account"}),(0,R.jsxs)(Z,{children:["Already have an account?",(0,R.jsx)(y,{children:(0,R.jsx)(j.OL,{to:"/login",children:"Sign in"})})]})]}):"contacts"===n?(0,R.jsxs)(v,{onSubmit:t,autoComplete:"off",children:[(0,R.jsxs)(x,{children:["Name",(0,R.jsx)(b,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,variant:"flushed"})]}),(0,R.jsxs)(x,{children:["Number",(0,R.jsx)(b,{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,variant:"flushed"})]}),(0,R.jsx)(g,{type:"submit",colorScheme:"blackAlpha",style:{margin:"0 auto"},children:"Add contact"})]}):"filter"===n?(0,R.jsx)(v,{style:{margin:"40px auto"},children:(0,R.jsxs)(x,{children:["Find contacts by name",(0,R.jsx)(b,{type:"text",variant:"flushed",onChange:i})]})}):void 0}},8849:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var i=t(4647),r=t(184),a=function(){return(0,r.jsx)(i.i,{type:"login"})},l=function(){return(0,r.jsx)(a,{})}},1720:function(){},5794:function(e,n,t){t.d(n,{B:function(){return g},m:function(){return b}});var i=t(1413),r=t(4925),a=t(9439),l=t(9886),s=t(2791);var o=t(7872),d=t(9219),u=t(2996),c=t(8161),p=t(6992);var h=t(184),m=["children","className"],f=(0,l.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),v=(0,a.Z)(f,2),x=v[0],b=v[1],g=(0,o.G)((function(e,n){var t=(0,d.jC)("Input",e),a=(0,u.Lr)(e),l=a.children,o=a.className,f=(0,r.Z)(a,m),v=(0,p.cx)("chakra-input__group",o),b={},g=function(e){return s.Children.toArray(e).filter((function(e){return(0,s.isValidElement)(e)}))}(l),Z=t.field;g.forEach((function(e){var n,i;t&&(Z&&"InputLeftElement"===e.type.id&&(b.paddingStart=null!=(n=Z.height)?n:Z.h),Z&&"InputRightElement"===e.type.id&&(b.paddingEnd=null!=(i=Z.height)?i:Z.h),"InputRightAddon"===e.type.id&&(b.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(b.borderStartRadius=0))}));var y=g.map((function(n){var t,i,r=function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}({size:(null==(t=n.props)?void 0:t.size)||e.size,variant:(null==(i=n.props)?void 0:i.variant)||e.variant});return"Input"!==n.type.id?(0,s.cloneElement)(n,r):(0,s.cloneElement)(n,Object.assign(r,b,n.props))}));return(0,h.jsx)(c.m.div,(0,i.Z)((0,i.Z)({className:v,ref:n,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},"data-group":!0},f),{},{children:(0,h.jsx)(x,{value:t,children:y})}))}));g.displayName="InputGroup"},1148:function(e,n,t){t.d(n,{I:function(){return _}});var i=t(1413),r=t(4925),a=t(9439),l=t(9886),s=t(4591),o=t(7872),d=t(9219),u=t(2996),c=t(8161),p=t(6992),h=t(2791),m=t(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],v=["getRootProps","htmlProps"],x=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,a.Z)(x,2),g=b[0],Z=b[1],y=(0,l.k)({strict:!1,name:"FormControlContext"}),j=(0,a.Z)(y,2),I=j[0],k=j[1];var C=(0,o.G)((function(e,n){var t=(0,d.jC)("Form",e),l=function(e){var n=e.id,t=e.isRequired,l=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,r.Z)(e,f),c=(0,h.useId)(),m=n||"field-".concat(c),v="".concat(m,"-label"),x="".concat(m,"-feedback"),b="".concat(m,"-helptext"),g=(0,h.useState)(!1),Z=(0,a.Z)(g,2),y=Z[0],j=Z[1],I=(0,h.useState)(!1),k=(0,a.Z)(I,2),C=k[0],R=k[1],N=(0,h.useState)(!1),S=(0,a.Z)(N,2),F=S[0],_=S[1],w=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,s.lq)(n,(function(e){e&&R(!0)}))})}),[b]),q=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,"data-focus":(0,p.PB)(F),"data-disabled":(0,p.PB)(o),"data-invalid":(0,p.PB)(l),"data-readonly":(0,p.PB)(d),id:void 0!==e.id?e.id:v,htmlFor:void 0!==e.htmlFor?e.htmlFor:m})}),[m,o,F,l,d,v]),z=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:x},e),{},{ref:(0,s.lq)(n,(function(e){e&&j(!0)})),"aria-live":"polite"})}),[x]),E=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),P=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!t,isInvalid:!!l,isReadOnly:!!d,isDisabled:!!o,isFocused:!!F,onFocus:function(){return _(!0)},onBlur:function(){return _(!1)},hasFeedbackText:y,setHasFeedbackText:j,hasHelpText:C,setHasHelpText:R,id:m,labelId:v,feedbackId:x,helpTextId:b,htmlProps:u,getHelpTextProps:w,getErrorMessageProps:z,getRootProps:E,getLabelProps:q,getRequiredIndicatorProps:P}}((0,u.Lr)(e)),o=l.getRootProps,x=(l.htmlProps,(0,r.Z)(l,v)),b=(0,p.cx)("chakra-form-control",e.className);return(0,m.jsx)(I,{value:x,children:(0,m.jsx)(g,{value:t,children:(0,m.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},o({},n)),{},{className:b,__css:t.container}))})})}));C.displayName="FormControl",(0,o.G)((function(e,n){var t=k(),r=Z(),a=(0,p.cx)("chakra-form__helper-text",e.className);return(0,m.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==t?void 0:t.getHelpTextProps(e,n)),{},{__css:r.helperText,className:a}))})).displayName="FormHelperText";var R=["isDisabled","isInvalid","isReadOnly","isRequired"],N=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function S(e){var n=function(e){var n,t,a,l=k(),s=e.id,o=e.disabled,d=e.readOnly,u=e.required,c=e.isRequired,h=e.isInvalid,m=e.isReadOnly,f=e.isDisabled,v=e.onFocus,x=e.onBlur,b=(0,r.Z)(e,N),g=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==l?void 0:l.hasFeedbackText)&&(null==l?void 0:l.isInvalid)&&g.push(l.feedbackId);(null==l?void 0:l.hasHelpText)&&g.push(l.helpTextId);return(0,i.Z)((0,i.Z)({},b),{},{"aria-describedby":g.join(" ")||void 0,id:null!=s?s:null==l?void 0:l.id,isDisabled:null!=(n=null!=o?o:f)?n:null==l?void 0:l.isDisabled,isReadOnly:null!=(t=null!=d?d:m)?t:null==l?void 0:l.isReadOnly,isRequired:null!=(a=null!=u?u:c)?a:null==l?void 0:l.isRequired,isInvalid:null!=h?h:null==l?void 0:l.isInvalid,onFocus:(0,p.v0)(null==l?void 0:l.onFocus,v),onBlur:(0,p.v0)(null==l?void 0:l.onBlur,x)})}(e),t=n.isDisabled,a=n.isInvalid,l=n.isReadOnly,s=n.isRequired,o=(0,r.Z)(n,R);return(0,i.Z)((0,i.Z)({},o),{},{disabled:t,readOnly:l,required:s,"aria-invalid":(0,p.Qm)(a),"aria-required":(0,p.Qm)(s),"aria-readonly":(0,p.Qm)(l)})}var F=["htmlSize"],_=(0,o.G)((function(e,n){var t=e.htmlSize,a=(0,r.Z)(e,F),l=(0,d.jC)("Input",a),s=S((0,u.Lr)(a)),o=(0,p.cx)("chakra-input",e.className);return(0,m.jsx)(c.m.input,(0,i.Z)((0,i.Z)({size:t},s),{},{__css:l.field,ref:n,className:o}))}));_.displayName="Input",_.id="Input"},7806:function(e,n,t){t.d(n,{x:function(){return x}});var i=t(4942),r=t(1413),a=t(4925),l=t(5794),s=t(8161),o=t(7872),d=t(6992),u=t(184),c=["placement"],p=["className"],h=["className"],m=(0,s.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),f=(0,o.G)((function(e,n){var t,s,o,d=e.placement,p=void 0===d?"left":d,h=(0,a.Z)(e,c),f=(0,l.m)(),v=f.field,x="left"===p?"insetStart":"insetEnd",b=(0,r.Z)((t={},(0,i.Z)(t,x,"0"),(0,i.Z)(t,"width",null!=(s=null==v?void 0:v.height)?s:null==v?void 0:v.h),(0,i.Z)(t,"height",null!=(o=null==v?void 0:v.height)?o:null==v?void 0:v.h),(0,i.Z)(t,"fontSize",null==v?void 0:v.fontSize),t),f.element);return(0,u.jsx)(m,(0,r.Z)({ref:n,__css:b},h))}));f.id="InputElement",f.displayName="InputElement";var v=(0,o.G)((function(e,n){var t=e.className,i=(0,a.Z)(e,p),l=(0,d.cx)("chakra-input__left-element",t);return(0,u.jsx)(f,(0,r.Z)({ref:n,placement:"left",className:l},i))}));v.id="InputLeftElement",v.displayName="InputLeftElement";var x=(0,o.G)((function(e,n){var t=e.className,i=(0,a.Z)(e,h),l=(0,d.cx)("chakra-input__right-element",t);return(0,u.jsx)(f,(0,r.Z)({ref:n,placement:"right",className:l},i))}));x.id="InputRightElement",x.displayName="InputRightElement"}}]);
//# sourceMappingURL=687.fd499f8e.chunk.js.map