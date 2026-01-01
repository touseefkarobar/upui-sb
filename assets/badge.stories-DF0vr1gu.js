import{j as r}from"./iframe-DAchY3EA.js";import{B as e}from"./index-UlKZkae_.js";const E={title:"PAC Universal Plugin UI/Primitive/Badge",component:e,argTypes:{variant:{description:"Type of Badge",control:{type:"select"},options:["active","inactive","notinstalled","latestversion"]},version:{description:"Version number for the badge",control:{type:"text"}},children:{table:{disable:!0}}},args:{variant:"active",version:"1.0.0"}},a={render:c=>r.jsx(e,{variant:c.variant,version:c.version})},s={render:()=>r.jsx(e,{variant:"active"})},t={render:()=>r.jsx(e,{variant:"comingsoon"})},n={render:()=>r.jsx(e,{variant:"inactive"})},o={render:()=>r.jsx(e,{variant:"notinstalled"})},i={render:()=>r.jsx(e,{variant:"latestversion",version:"2.3.1"})};var d,v,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Badge variant={args.variant} version={args.version} />
}`,...(m=(v=a.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var p,l,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Badge variant="active" />
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,B;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Badge variant="comingsoon" />
}`,...(B=(x=t.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var j,f,S;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Badge variant="inactive" />
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var I,b,y;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Badge variant="notinstalled" />
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var A,P,V;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Badge variant="latestversion" version="2.3.1" />
}`,...(V=(P=i.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const L=["Default","Active","comingsoon","Inactive","NotInstalled","LatestVersion"];export{s as Active,a as Default,n as Inactive,i as LatestVersion,o as NotInstalled,L as __namedExportsOrder,t as comingsoon,E as default};
