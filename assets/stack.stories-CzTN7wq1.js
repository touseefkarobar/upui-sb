import{j as n}from"./iframe-DFjiqDaD.js";import{S as d}from"./index-BbPaMFY9.js";const y={title:"PAC Universal Plugin UI/Layout/Stack",component:d,argTypes:{direction:{control:{type:"radio"},options:["vertical","horizontal"],description:"Stack direction"},alignItems:{control:{type:"radio"},options:["flex-start","center","flex-end","stretch","baseline"],description:"Align items"},justifyContent:{control:{type:"radio"},options:["flex-start","center","flex-end","space-between","space-around","space-evenly"],description:"Justify content"},gap:{control:{type:"number"},description:"Gap between children"},showDivider:{control:{type:"boolean"},description:"Show divider between children"}},parameters:{docs:{description:{component:`Stack is a flexible layout component for vertical or horizontal stacking of children with spacing, alignment, and optional dividers.

Usage:
\`\`\`tsx
import Stack from "@karobar_solutions/pac-universal-plugin-ui";

<Stack direction="horizontal" gap={16} alignItems="center" justifyContent="space-between" showDivider>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
\`\`\``}}}},r={args:{direction:"vertical",gap:7,alignItems:"flex-start",justifyContent:"flex-start",showDivider:!1},render:e=>n.jsxs(d,{...e,children:[n.jsx("div",{style:{background:"#e3f2fd",padding:16},children:"First"}),n.jsx("div",{style:{background:"#fff9c4",padding:16},children:"Second"}),n.jsx("div",{style:{background:"#ffe0b2",padding:16},children:"Third"})]})},i={args:{direction:"horizontal",gap:16,alignItems:"center",justifyContent:"flex-start",showDivider:!1},render:e=>n.jsxs(d,{...e,children:[n.jsx("div",{style:{background:"#e3f2fd",padding:16},children:"First"}),n.jsx("div",{style:{background:"#fff9c4",padding:16},children:"Second"}),n.jsx("div",{style:{background:"#ffe0b2",padding:16},children:"Third"})]})},t={args:{direction:"vertical",gap:16,alignItems:"center",justifyContent:"center",showDivider:!0},render:e=>n.jsxs(d,{...e,children:[n.jsx("div",{style:{background:"#e3f2fd",padding:16},children:"First"}),n.jsx("div",{style:{background:"#fff9c4",padding:16},children:"Second"}),n.jsx("div",{style:{background:"#ffe0b2",padding:16},children:"Third"})]})};var a,s,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    direction: "vertical",
    gap: 7,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    showDivider: false
  },
  render: (args: any) => <Stack {...args}>\r
      <div style={{
      background: "#e3f2fd",
      padding: 16
    }}>First</div>\r
      <div style={{
      background: "#fff9c4",
      padding: 16
    }}>Second</div>\r
      <div style={{
      background: "#ffe0b2",
      padding: 16
    }}>Third</div>\r
    </Stack>
}`,...(o=(s=r.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var c,l,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    gap: 16,
    alignItems: "center",
    justifyContent: "flex-start",
    showDivider: false
  },
  render: (args: any) => <Stack {...args}>\r
       <div style={{
      background: "#e3f2fd",
      padding: 16
    }}>First</div>\r
      <div style={{
      background: "#fff9c4",
      padding: 16
    }}>Second</div>\r
      <div style={{
      background: "#ffe0b2",
      padding: 16
    }}>Third</div>\r
    </Stack>
}`,...(g=(l=i.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var f,p,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    direction: "vertical",
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
    showDivider: true
  },
  render: (args: any) => <Stack {...args}>\r
      <div style={{
      background: "#e3f2fd",
      padding: 16
    }}>First</div>\r
      <div style={{
      background: "#fff9c4",
      padding: 16
    }}>Second</div>\r
      <div style={{
      background: "#ffe0b2",
      padding: 16
    }}>Third</div>\r
    </Stack>
}`,...(v=(p=t.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const m=["Vertical","Horizontal","WithDivider"];export{i as Horizontal,r as Vertical,t as WithDivider,m as __namedExportsOrder,y as default};
