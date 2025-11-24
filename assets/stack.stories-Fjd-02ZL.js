import{j as n}from"./iframe-CMZ88Vfa.js";import{S as d}from"./index-BEHpyh5y.js";const y={title:"PAC Universal Plugin UI/Layout/Stack",component:d,argTypes:{direction:{control:{type:"radio"},options:["vertical","horizontal"],description:"Stack direction"},alignItems:{control:{type:"radio"},options:["flex-start","center","flex-end","stretch","baseline"],description:"Align items"},justifyContent:{control:{type:"radio"},options:["flex-start","center","flex-end","space-between","space-around","space-evenly"],description:"Justify content"},gap:{control:{type:"number"},description:"Gap between children"},showDivider:{control:{type:"boolean"},description:"Show divider between children"}},parameters:{docs:{description:{component:`Stack is a flexible layout component for vertical or horizontal stacking of children with spacing, alignment, and optional dividers.

Usage:
\`\`\`tsx
import Stack from "@karobar_solutions/pac-universal-plugin-ui";

<Stack direction="horizontal" gap={16} alignItems="center" justifyContent="space-between" showDivider>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
\`\`\``}}}},i={args:{direction:"vertical",gap:7,alignItems:"flex-start",justifyContent:"flex-start",showDivider:!1},render:e=>n.jsxs(d,{...e,children:[n.jsx("div",{style:{background:"#e3f2fd",padding:16},children:"First"}),n.jsx("div",{style:{background:"#fff9c4",padding:16},children:"Second"}),n.jsx("div",{style:{background:"#ffe0b2",padding:16},children:"Third"})]})},r={args:{direction:"horizontal",gap:16,alignItems:"center",justifyContent:"flex-start",showDivider:!1},render:e=>n.jsxs(d,{...e,children:[n.jsx("div",{style:{background:"#e3f2fd",padding:16},children:"First"}),n.jsx("div",{style:{background:"#fff9c4",padding:16},children:"Second"}),n.jsx("div",{style:{background:"#ffe0b2",padding:16},children:"Third"})]})},t={args:{direction:"vertical",gap:16,alignItems:"center",justifyContent:"center",showDivider:!0},render:e=>n.jsxs(d,{...e,children:[n.jsx("div",{style:{background:"#e3f2fd",padding:16},children:"First"}),n.jsx("div",{style:{background:"#fff9c4",padding:16},children:"Second"}),n.jsx("div",{style:{background:"#ffe0b2",padding:16},children:"Third"})]})};var a,s,o;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    direction: "vertical",
    gap: 7,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    showDivider: false
  },
  render: (args: any) => <Stack {...args}>
      <div style={{
      background: "#e3f2fd",
      padding: 16
    }}>First</div>
      <div style={{
      background: "#fff9c4",
      padding: 16
    }}>Second</div>
      <div style={{
      background: "#ffe0b2",
      padding: 16
    }}>Third</div>
    </Stack>
}`,...(o=(s=i.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var c,l,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    gap: 16,
    alignItems: "center",
    justifyContent: "flex-start",
    showDivider: false
  },
  render: (args: any) => <Stack {...args}>
       <div style={{
      background: "#e3f2fd",
      padding: 16
    }}>First</div>
      <div style={{
      background: "#fff9c4",
      padding: 16
    }}>Second</div>
      <div style={{
      background: "#ffe0b2",
      padding: 16
    }}>Third</div>
    </Stack>
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var f,p,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    direction: "vertical",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
    showDivider: true
  },
  render: (args: any) => <Stack {...args}>
      <div style={{
      background: "#e3f2fd",
      padding: 16
    }}>First</div>
      <div style={{
      background: "#fff9c4",
      padding: 16
    }}>Second</div>
      <div style={{
      background: "#ffe0b2",
      padding: 16
    }}>Third</div>
    </Stack>
}`,...(v=(p=t.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const m=["Vertical","Horizontal","WithDivider"];export{r as Horizontal,i as Vertical,t as WithDivider,m as __namedExportsOrder,y as default};
