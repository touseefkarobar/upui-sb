import{j as e}from"./iframe-e6Pjwgff.js";import{G as o}from"./index-BWjwwW-2.js";const v={title:"PAC Universal Plugin UI/Layout/Grid",component:o,argTypes:{columns:{control:{type:"object"},description:"Number of columns or responsive columns object"},gap:{control:{type:"number"},description:"Gap between grid items"},className:{control:{type:"text"},description:"Custom className for the grid"},style:{control:{type:"object"},description:"Custom style object for the grid"}},parameters:{docs:{description:{component:`Grid is a flexible layout component for creating responsive grid layouts.

Usage:
\`\`\`tsx
import Grid from "@karobar_solutions/pac-universal-plugin-ui";

<Grid columns={{ xs: 1, md: 3 }} gap={16}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
\`\`\``}}}},r={args:{columns:3,gap:16},render:n=>e.jsxs(o,{columns:n.columns,gap:n.gap,children:[e.jsx("div",{style:{background:"#eee",padding:16},children:"1"}),e.jsx("div",{style:{background:"#eee",padding:16},children:"2"}),e.jsx("div",{style:{background:"#eee",padding:16},children:"3"})]})},s={args:{columns:{xs:1,sm:2,md:3,lg:4},gap:24},render:n=>e.jsx(o,{...n,children:[...Array(8)].map((m,d)=>e.jsxs("div",{style:{background:"#eee",padding:16},children:["Item ",d+1]},d))})};var a,i,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 16
  },
  render: (args: any) => <Grid columns={args.columns} gap={args.gap}>\r
      <div style={{
      background: "#eee",
      padding: 16
    }}>1</div>\r
      <div style={{
      background: "#eee",
      padding: 16
    }}>2</div>\r
      <div style={{
      background: "#eee",
      padding: 16
    }}>3</div>\r
    </Grid>
}`,...(t=(i=r.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var c,p,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    },
    gap: 24
  },
  render: (args: any) => <Grid {...args}>\r
      {[...Array(8)].map((_, i) => <div key={i} style={{
      background: "#eee",
      padding: 16
    }}>\r
          Item {i + 1}\r
        </div>)}\r
    </Grid>
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const y=["Default","Responsive"];export{r as Default,s as Responsive,y as __namedExportsOrder,v as default};
