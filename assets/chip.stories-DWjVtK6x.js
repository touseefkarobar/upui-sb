import{j as c}from"./iframe-D_EB6DsR.js";import{C as E}from"./index-BZETGZrz.js";const M={title:"PAC Universal Plugin UI/Primitive/Chip",component:E,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{label:{description:"Text content of the chip",control:{type:"text"}},variant:{description:"Visual style variant",control:{type:"select"},options:["filled","outlined"]},color:{description:"Color theme of the chip",control:{type:"select"},options:["default","primary","success","warning","danger"]},size:{description:"Size of the chip",control:{type:"select"},options:["small","medium"]},onDelete:{description:"Callback when the delete button is clicked",action:"deleted"},icon:{description:"Icon element to display before the label",control:!1}},args:{label:"Chip",variant:"filled",color:"default",size:"medium"}},e={args:{label:"Default Chip"}},r={args:{label:"Outlined Chip",variant:"outlined"}},o={render:()=>c.jsx(E,{label:"With Icon",icon:c.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",children:c.jsx("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})},a={args:{label:"Removable",onDelete:()=>console.log("Chip deleted")}},s={args:{label:"Success",color:"success"}},n={args:{label:"Error",color:"danger"}},t={args:{label:"Warning",color:"warning"}},l={args:{label:"Info",color:"primary"}};var i,p,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Default Chip"
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Outlined Chip",
    variant: "outlined"
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,b,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Chip label="With Icon" icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>} />
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var L,f,v;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "Removable",
    onDelete: () => console.log("Chip deleted")
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var y,S,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Success",
    color: "success"
  }
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var k,W,D;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Error",
    color: "danger"
  }
}`,...(D=(W=n.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var w,I,j;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Warning",
    color: "warning"
  }
}`,...(j=(I=t.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var O,P,R;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Info",
    color: "primary"
  }
}`,...(R=(P=l.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const T=["Default","Outlined","WithIcon","Removable","SuccessColor","DangerColor","WarningColor","PrimaryColor"];export{n as DangerColor,e as Default,r as Outlined,l as PrimaryColor,a as Removable,s as SuccessColor,t as WarningColor,o as WithIcon,T as __namedExportsOrder,M as default};
