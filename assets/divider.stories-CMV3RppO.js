import{j as n}from"./iframe-a_Xm9z3c.js";import{D as e}from"./index-BeAkYtAZ.js";import{S as C}from"./index-DVye34PF.js";const b={title:"PAC Universal Plugin UI/Layout/Divider",component:e,argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"],description:"Orientation of the divider"},color:{control:{type:"color"},description:"Custom color for the divider line"},thickness:{control:{type:"number"},description:"Thickness of the divider line in pixels"},spacing:{control:{type:"number"},description:"Spacing (margin) around the divider in pixels"}},parameters:{docs:{description:{component:`Divider is a visual separator used to divide content sections horizontally or vertically.

Usage:
\`\`\`tsx
import Divider from "@karobar_solutions/pac-universal-plugin-ui";

<Divider orientation="horizontal" thickness={1} spacing={16} />
\`\`\``}}}},s={args:{orientation:"horizontal",thickness:1,spacing:16},render:i=>n.jsxs("div",{children:[n.jsx("div",{style:{padding:16},children:"Content above"}),n.jsx(e,{...i}),n.jsx("div",{style:{padding:16},children:"Content below"})]})},r={args:{orientation:"vertical",thickness:1,spacing:16},render:i=>n.jsxs("div",{style:{display:"flex",alignItems:"center",height:100},children:[n.jsx("div",{style:{padding:16},children:"Left"}),n.jsx(e,{...i}),n.jsx("div",{style:{padding:16},children:"Right"})]})},t={args:{orientation:"horizontal",thickness:1,spacing:8},render:i=>n.jsxs("div",{children:[n.jsx("div",{style:{padding:16},children:"Section One"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[n.jsx(e,{...i,style:{flex:1}}),n.jsx("span",{style:{color:"#888",fontSize:14,whiteSpace:"nowrap"},children:"OR"}),n.jsx(e,{...i,style:{flex:1}})]}),n.jsx("div",{style:{padding:16},children:"Section Two"})]})},a={args:{orientation:"horizontal",thickness:2,spacing:16,color:"#6366f1"},render:i=>n.jsxs("div",{children:[n.jsx("div",{style:{padding:16},children:"Content above"}),n.jsx(e,{...i}),n.jsx("div",{style:{padding:16},children:"Content below"})]})},o={args:{orientation:"horizontal",spacing:12},render:i=>n.jsxs(C,{direction:"vertical",gap:0,children:[n.jsx("div",{style:{padding:8},children:"Thickness: 1px"}),n.jsx(e,{...i,thickness:1}),n.jsx("div",{style:{padding:8},children:"Thickness: 2px"}),n.jsx(e,{...i,thickness:2}),n.jsx("div",{style:{padding:8},children:"Thickness: 4px"}),n.jsx(e,{...i,thickness:4}),n.jsx("div",{style:{padding:8},children:"Thickness: 8px"}),n.jsx(e,{...i,thickness:8})]})};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: 1,
    spacing: 16
  },
  render: (args: any) => <div>
      <div style={{
      padding: 16
    }}>Content above</div>
      <Divider {...args} />
      <div style={{
      padding: 16
    }}>Content below</div>
    </div>
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,v,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    thickness: 1,
    spacing: 16
  },
  render: (args: any) => <div style={{
    display: "flex",
    alignItems: "center",
    height: 100
  }}>
      <div style={{
      padding: 16
    }}>Left</div>
      <Divider {...args} />
      <div style={{
      padding: 16
    }}>Right</div>
    </div>
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,x,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: 1,
    spacing: 8
  },
  render: (args: any) => <div>
      <div style={{
      padding: 16
    }}>Section One</div>
      <div style={{
      display: "flex",
      alignItems: "center",
      gap: 12
    }}>
        <Divider {...args} style={{
        flex: 1
      }} />
        <span style={{
        color: "#888",
        fontSize: 14,
        whiteSpace: "nowrap"
      }}>OR</span>
        <Divider {...args} style={{
        flex: 1
      }} />
      </div>
      <div style={{
      padding: 16
    }}>Section Two</div>
    </div>
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var m,k,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    thickness: 2,
    spacing: 16,
    color: "#6366f1"
  },
  render: (args: any) => <div>
      <div style={{
      padding: 16
    }}>Content above</div>
      <Divider {...args} />
      <div style={{
      padding: 16
    }}>Content below</div>
    </div>
}`,...(u=(k=a.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var j,f,S;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    spacing: 12
  },
  render: (args: any) => <Stack direction="vertical" gap={0}>
      <div style={{
      padding: 8
    }}>Thickness: 1px</div>
      <Divider {...args} thickness={1} />
      <div style={{
      padding: 8
    }}>Thickness: 2px</div>
      <Divider {...args} thickness={2} />
      <div style={{
      padding: 8
    }}>Thickness: 4px</div>
      <Divider {...args} thickness={4} />
      <div style={{
      padding: 8
    }}>Thickness: 8px</div>
      <Divider {...args} thickness={8} />
    </Stack>
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const w=["Horizontal","Vertical","WithLabel","CustomColor","CustomThickness"];export{a as CustomColor,o as CustomThickness,s as Horizontal,r as Vertical,t as WithLabel,w as __namedExportsOrder,b as default};
