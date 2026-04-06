import{j as n,r as d}from"./iframe-Bu7JFkJc.js";import{S as r}from"./index-BTy8G0j5.js";import"./SearchIcon-DEOGO_t5.js";import"./type-CgT0EiC8.js";import"./CloseIcon-CWsL1_NQ.js";const M={title:"PAC Universal Plugin UI/Primitive/SearchInput",component:r,tags:["autodocs"],argTypes:{value:{description:"Controlled value of the search input",control:{type:"text"}},defaultValue:{description:"Default value (uncontrolled)",control:{type:"text"}},onChange:{description:"Callback when the value changes",action:"changed"},onSearch:{description:"Debounced search callback",action:"searched"},placeholder:{description:"Placeholder text",control:{type:"text"}},debounceMs:{description:"Debounce delay in milliseconds",control:{type:"number"}},clearable:{description:"Whether the input can be cleared",control:{type:"boolean"}},loading:{description:"Show loading spinner",control:{type:"boolean"}},disabled:{description:"Disable the input",control:{type:"boolean"}},size:{description:"Size of the input",control:{type:"select"},options:["small","medium"]}},args:{placeholder:"Search...",debounceMs:300,clearable:!0,loading:!1,disabled:!1,size:"medium"}},o={render:e=>{const[a,u]=d.useState("");return n.jsx(r,{value:a,onChange:u,placeholder:e.placeholder,disabled:e.disabled,loading:e.loading,size:e.size,clearable:e.clearable})}},t={render:()=>{const[e,a]=d.useState("");return n.jsx(r,{value:e,onChange:a,placeholder:"Search plugins..."})}},s={render:()=>{const[e,a]=d.useState("Loading results");return n.jsx(r,{value:e,onChange:a,loading:!0,placeholder:"Searching..."})}},l={render:()=>{const[e,a]=d.useState("");return n.jsx(r,{value:e,onChange:a,debounceMs:1e3,onSearch:u=>console.log("Debounced search:",u),placeholder:"Type and wait 1 second..."})}},c={render:()=>n.jsx(r,{defaultValue:"Cannot edit",disabled:!0,placeholder:"Disabled search"})};var i,p,h;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <SearchInput value={value} onChange={setValue} placeholder={args.placeholder} disabled={args.disabled} loading={args.loading} size={args.size} clearable={args.clearable} />;
  }
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,m,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <SearchInput value={value} onChange={setValue} placeholder="Search plugins..." />;
  }
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var S,v,V;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Loading results");
    return <SearchInput value={value} onChange={setValue} loading placeholder="Searching..." />;
  }
}`,...(V=(v=s.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var x,C,D;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <SearchInput value={value} onChange={setValue} debounceMs={1000} onSearch={val => console.log("Debounced search:", val)} placeholder="Type and wait 1 second..." />;
  }
}`,...(D=(C=l.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var f,y,I;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <SearchInput defaultValue="Cannot edit" disabled placeholder="Disabled search" />
}`,...(I=(y=c.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const E=["Default","WithPlaceholder","Loading","Debounced","Disabled"];export{l as Debounced,o as Default,c as Disabled,s as Loading,t as WithPlaceholder,E as __namedExportsOrder,M as default};
