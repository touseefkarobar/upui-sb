import{j as o}from"./iframe-CpKfDH95.js";import{T as i,t as a}from"./index-B-W3ervF.js";import{B as n}from"./index-CMVeY26A.js";import"./CheckmarkIcon-C88DbHKw.js";import"./type-CgT0EiC8.js";import"./StopIcon-D2uo0rPc.js";import"./InfoIcon-BBU0LJKP.js";import"./CloseIcon-Ble9pYEb.js";import"./FilledIcon-Bnzj66U_.js";const E={title:"PAC Universal Plugin UI/Primitive/Toast",component:i,tags:["autodocs"],decorators:[w=>o.jsx(i,{position:"bottom-right",autoClose:5e3,children:o.jsx(w,{})})],argTypes:{position:{description:"Position of the toast container",control:{type:"select"},options:["top-right","top-left","bottom-right","bottom-left"]},autoClose:{description:"Auto close delay in milliseconds",control:{type:"number"}}},parameters:{docs:{description:{component:"Toast notifications for displaying brief messages. Wrap your app in ToastProvider, then call toast.success(), toast.error(), toast.info(), or toast.warning()."}}}},r={render:()=>o.jsx(n,{variant:"primary",size:"small",onClick:()=>a.success("Settings saved successfully!"),children:"Show Success Toast"})},s={render:()=>o.jsx(n,{variant:"danger",size:"small",onClick:()=>a.error("Failed to save settings. Please try again."),children:"Show Error Toast"})},e={render:()=>o.jsx(n,{variant:"secondary",size:"small",onClick:()=>a.info("A new update is available."),children:"Show Info Toast"})},t={render:()=>o.jsx(n,{variant:"secondary",size:"small",onClick:()=>a.warning("Your license will expire in 7 days."),children:"Show Warning Toast"})};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Button variant="primary" size="small" onClick={() => toast.success("Settings saved successfully!")}>
      Show Success Toast
    </Button>
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Button variant="danger" size="small" onClick={() => toast.error("Failed to save settings. Please try again.")}>
      Show Error Toast
    </Button>
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,f,h;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Button variant="secondary" size="small" onClick={() => toast.info("A new update is available.")}>
      Show Info Toast
    </Button>
}`,...(h=(f=e.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,y,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Button variant="secondary" size="small" onClick={() => toast.warning("Your license will expire in 7 days.")}>
      Show Warning Toast
    </Button>
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const I=["Success","Error","Info","Warning"];export{s as Error,e as Info,r as Success,t as Warning,I as __namedExportsOrder,E as default};
