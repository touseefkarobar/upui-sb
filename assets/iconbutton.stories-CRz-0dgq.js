import{j as a}from"./iframe-BhQmPEL4.js";import{I as r}from"./index-B058eSDZ.js";import{D as e}from"./TrashIcon-DXpuLqs8.js";import{E as l}from"./EditIcon-Cj-zHsrx.js";import{S as f}from"./SettingsIcon-CyNLFiq5.js";import{S as T}from"./SearchIcon-BQV2bvXV.js";import{A as D}from"./AddIcon-B02y-00x.js";import{S as c}from"./index-ZaXkBTHy.js";import"./type-CgT0EiC8.js";const W={title:"PAC Universal Plugin UI/Primitive/IconButton",component:r,argTypes:{variant:{description:"Visual variant of the icon button",control:{type:"select"},options:["primary","secondary","tertiary","outline","ghost"]},size:{description:"Size of the icon button",control:{type:"select"},options:["small","medium","large"]},disabled:{description:"Whether the button is disabled",control:{type:"boolean"}},loading:{description:"Whether the button shows a loading spinner",control:{type:"boolean"}},icon:{table:{disable:!0}}},args:{variant:"primary",size:"medium",disabled:!1,loading:!1,"aria-label":"Icon button"}},n={render:L=>a.jsx(r,{...L,icon:a.jsx(e,{}),"aria-label":"Delete"})},o={render:()=>a.jsxs(c,{direction:"horizontal",gap:12,alignItems:"center",children:[a.jsx(r,{variant:"primary",icon:a.jsx(e,{}),"aria-label":"Primary"}),a.jsx(r,{variant:"secondary",icon:a.jsx(l,{}),"aria-label":"Secondary"}),a.jsx(r,{variant:"tertiary",icon:a.jsx(f,{}),"aria-label":"Tertiary"}),a.jsx(r,{variant:"outline",icon:a.jsx(T,{}),"aria-label":"Outline"}),a.jsx(r,{variant:"ghost",icon:a.jsx(D,{}),"aria-label":"Ghost"})]})},i={render:()=>a.jsxs(c,{direction:"horizontal",gap:12,alignItems:"center",children:[a.jsx(r,{size:"small",icon:a.jsx(e,{}),"aria-label":"Small"}),a.jsx(r,{size:"medium",icon:a.jsx(e,{}),"aria-label":"Medium"}),a.jsx(r,{size:"large",icon:a.jsx(e,{}),"aria-label":"Large"})]})},t={render:()=>a.jsxs(c,{direction:"horizontal",gap:12,alignItems:"center",children:[a.jsx(r,{loading:!0,icon:a.jsx(e,{}),"aria-label":"Loading primary"}),a.jsx(r,{loading:!0,variant:"secondary",icon:a.jsx(l,{}),"aria-label":"Loading secondary"}),a.jsx(r,{loading:!0,variant:"tertiary",icon:a.jsx(f,{}),"aria-label":"Loading tertiary"})]})},s={render:()=>a.jsxs(c,{direction:"horizontal",gap:12,alignItems:"center",children:[a.jsx(r,{disabled:!0,icon:a.jsx(e,{}),"aria-label":"Disabled primary"}),a.jsx(r,{disabled:!0,variant:"secondary",icon:a.jsx(l,{}),"aria-label":"Disabled secondary"}),a.jsx(r,{disabled:!0,variant:"ghost",icon:a.jsx(D,{}),"aria-label":"Disabled ghost"})]})};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <IconButton {...args} icon={<TrashIcon />} aria-label="Delete" />
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" gap={12} alignItems="center">
      <IconButton variant="primary" icon={<TrashIcon />} aria-label="Primary" />
      <IconButton variant="secondary" icon={<EditIcon />} aria-label="Secondary" />
      <IconButton variant="tertiary" icon={<SettingsIcon />} aria-label="Tertiary" />
      <IconButton variant="outline" icon={<SearchIcon />} aria-label="Outline" />
      <IconButton variant="ghost" icon={<AddIcon />} aria-label="Ghost" />
    </Stack>
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var I,h,x;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" gap={12} alignItems="center">
      <IconButton size="small" icon={<TrashIcon />} aria-label="Small" />
      <IconButton size="medium" icon={<TrashIcon />} aria-label="Medium" />
      <IconButton size="large" icon={<TrashIcon />} aria-label="Large" />
    </Stack>
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,j,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" gap={12} alignItems="center">
      <IconButton loading icon={<TrashIcon />} aria-label="Loading primary" />
      <IconButton loading variant="secondary" icon={<EditIcon />} aria-label="Loading secondary" />
      <IconButton loading variant="tertiary" icon={<SettingsIcon />} aria-label="Loading tertiary" />
    </Stack>
}`,...(S=(j=t.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var v,z,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Stack direction="horizontal" gap={12} alignItems="center">
      <IconButton disabled icon={<TrashIcon />} aria-label="Disabled primary" />
      <IconButton disabled variant="secondary" icon={<EditIcon />} aria-label="Disabled secondary" />
      <IconButton disabled variant="ghost" icon={<AddIcon />} aria-label="Disabled ghost" />
    </Stack>
}`,...(B=(z=s.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const _=["Default","Variants","Sizes","Loading","Disabled"];export{n as Default,s as Disabled,t as Loading,i as Sizes,o as Variants,_ as __namedExportsOrder,W as default};
