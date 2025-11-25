import{j as r}from"./iframe-CFeG7Kz7.js";import{B as e}from"./index-NX8fbPNx.js";const P={title:"PAC Universal Plugin UI/Primitive/Badge",component:e,argTypes:{variant:{description:"Type of Badge",control:{type:"select"},options:["active","inactive","notinstalled","latestversion"]},version:{description:"Version number for the badge",control:{type:"text"}},children:{table:{disable:!0}}},args:{variant:"active",version:"1.0.0"}},a={render:i=>r.jsx(e,{variant:i.variant,version:i.version})},t={render:()=>r.jsx(e,{variant:"active"})},s={render:()=>r.jsx(e,{variant:"inactive"})},n={render:()=>r.jsx(e,{variant:"notinstalled"})},o={render:()=>r.jsx(e,{variant:"latestversion",version:"2.3.1"})};var c,d,v;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Badge variant={args.variant} version={args.version} />
}`,...(v=(d=a.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Badge variant="active" />
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,g,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Badge variant="inactive" />
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var B,f,j;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Badge variant="notinstalled" />
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var I,S,b;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Badge variant="latestversion" version="2.3.1" />
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const V=["Default","Active","Inactive","NotInstalled","LatestVersion"];export{t as Active,a as Default,s as Inactive,o as LatestVersion,n as NotInstalled,V as __namedExportsOrder,P as default};
