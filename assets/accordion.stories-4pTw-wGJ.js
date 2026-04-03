import{j as n}from"./iframe-BhQmPEL4.js";import{A as e}from"./index-CXJMw8Pk.js";import"./ChevronRightIcon-CII1d0Uy.js";import"./type-CgT0EiC8.js";const j={title:"PAC Universal Plugin UI/Composite/Accordion",component:e,argTypes:{type:{description:"Whether only one or multiple items can be open at a time",control:{type:"radio"},options:["single","multiple"]},defaultValue:{description:"The initially open item value(s)",control:{type:"object"}},collapsible:{description:"Whether open items can be collapsed (single mode only)",control:{type:"boolean"}}},args:{type:"single",collapsible:!0},parameters:{docs:{description:{component:`Accordion is a compound component for showing collapsible content sections.

Usage:
\`\`\`tsx
import Accordion from "@karobar_solutions/pac-universal-plugin-ui";

<Accordion type="single" defaultValue="item-1">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>Content 1</Accordion.Content>
  </Accordion.Item>
</Accordion>
\`\`\``}}}},o={render:c=>n.jsxs(e,{type:c.type,collapsible:c.collapsible,children:[n.jsxs(e.Item,{value:"item-1",children:[n.jsx(e.Trigger,{children:"What is PAC Universal Plugin UI?"}),n.jsx(e.Content,{children:"PAC Universal Plugin UI is a reusable component library designed for WordPress plugin dashboards."})]}),n.jsxs(e.Item,{value:"item-2",children:[n.jsx(e.Trigger,{children:"How do I install it?"}),n.jsx(e.Content,{children:"You can install it via npm: npm install @karobar_solutions/pac-universal-plugin-ui"})]}),n.jsxs(e.Item,{value:"item-3",children:[n.jsx(e.Trigger,{children:"Is it accessible?"}),n.jsx(e.Content,{children:"Yes, all components follow WAI-ARIA patterns and support keyboard navigation."})]})]})},i={render:()=>n.jsxs(e,{type:"multiple",defaultValue:["item-1","item-3"],children:[n.jsxs(e.Item,{value:"item-1",children:[n.jsx(e.Trigger,{children:"First Section"}),n.jsx(e.Content,{children:"This section is open by default. Multiple sections can be open simultaneously."})]}),n.jsxs(e.Item,{value:"item-2",children:[n.jsx(e.Trigger,{children:"Second Section"}),n.jsx(e.Content,{children:"Click to expand this section without closing the others."})]}),n.jsxs(e.Item,{value:"item-3",children:[n.jsx(e.Trigger,{children:"Third Section"}),n.jsx(e.Content,{children:"This section is also open by default."})]})]})},r={render:()=>n.jsxs(e,{type:"single",defaultValue:"item-2",collapsible:!0,children:[n.jsxs(e.Item,{value:"item-1",children:[n.jsx(e.Trigger,{children:"General Settings"}),n.jsx(e.Content,{children:"Configure general plugin settings here."})]}),n.jsxs(e.Item,{value:"item-2",children:[n.jsx(e.Trigger,{children:"Advanced Settings"}),n.jsx(e.Content,{children:"This section is open by default. Configure advanced options here."})]}),n.jsxs(e.Item,{value:"item-3",children:[n.jsx(e.Trigger,{children:"Integrations"}),n.jsx(e.Content,{children:"Manage third-party integrations and API connections."})]})]})},t={render:()=>n.jsx(e,{type:"single",collapsible:!0,children:n.jsxs(e.Item,{value:"item-1",children:[n.jsx(e.Trigger,{children:"Click to expand"}),n.jsx(e.Content,{children:"This is a single accordion item. It can be collapsed since the collapsible prop is set to true."})]})})};var s,l,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => <Accordion type={args.type} collapsible={args.collapsible}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>What is PAC Universal Plugin UI?</Accordion.Trigger>
        <Accordion.Content>
          PAC Universal Plugin UI is a reusable component library designed for WordPress plugin dashboards.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>How do I install it?</Accordion.Trigger>
        <Accordion.Content>
          You can install it via npm: npm install @karobar_solutions/pac-universal-plugin-ui
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes, all components follow WAI-ARIA patterns and support keyboard navigation.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(a=(l=o.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var d,p,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" defaultValue={["item-1", "item-3"]}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>First Section</Accordion.Trigger>
        <Accordion.Content>
          This section is open by default. Multiple sections can be open simultaneously.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Second Section</Accordion.Trigger>
        <Accordion.Content>
          Click to expand this section without closing the others.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Third Section</Accordion.Trigger>
        <Accordion.Content>
          This section is also open by default.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,A;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Accordion type="single" defaultValue="item-2" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>General Settings</Accordion.Trigger>
        <Accordion.Content>
          Configure general plugin settings here.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Advanced Settings</Accordion.Trigger>
        <Accordion.Content>
          This section is open by default. Configure advanced options here.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Integrations</Accordion.Trigger>
        <Accordion.Content>
          Manage third-party integrations and API connections.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(A=(u=r.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var h,I,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Click to expand</Accordion.Trigger>
        <Accordion.Content>
          This is a single accordion item. It can be collapsed since the collapsible prop is set to true.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(C=(I=t.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const y=["Default","MultipleOpen","DefaultOpen","SingleItem"];export{o as Default,r as DefaultOpen,i as MultipleOpen,t as SingleItem,y as __namedExportsOrder,j as default};
