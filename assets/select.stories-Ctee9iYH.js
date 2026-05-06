import{j as e}from"./iframe-BkTlayG6.js";import{S as l}from"./index-CejIrA6u.js";import"./useOutsideToggle-CLnWLhLg.js";import"./DropdownIcon-BXB8mvcz.js";import"./type-CgT0EiC8.js";import"./index-TiT_RGez.js";import"./index-CywV1Cen.js";import"./SearchIcon-pOtM3sUg.js";const V={title:"PAC Universal Plugin UI/Primitive/Select",component:l,parameters:{docs:{description:{component:`Select is a primitive dropdown component for choosing a value.

Usage:
\`\`\`tsx
import Select from "@karobar_solutions/pac-universal-plugin-ui";

<Select onValueChange={(value: string) => {
  console.log("Selected value:", value);
}}>
  <Select.Trigger>
    <Select.Value placeholder="Select a fruit" />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="apple">Apple</Select.Item>
    <Select.Item value="banana">Banana</Select.Item>
    <Select.Item value="cherry">Cherry</Select.Item>
  </Select.Content>
</Select>
\`\`\``}}},tags:["autodocs"]},t={render:()=>e.jsxs(l,{onValueChange:a=>{console.log("Selected value:",a)},defaultValue:"apple",defaultLabel:"Apple",displayValue:"saib",children:[e.jsx(l.Trigger,{children:e.jsx(l.Value,{placeholder:"Select a fruit"})}),e.jsxs(l.Content,{children:[e.jsx(l.Item,{displayValue:"saib",value:"apple",children:"Apple"}),e.jsx(l.Item,{value:"banana",children:"Banana"}),e.jsx(l.Item,{value:"cherry",children:"Cherry"})]})]})},r={render:()=>e.jsxs(l,{onValueChange:a=>{console.log("Selected value:",a)},defaultValue:"apple",defaultLabel:"Apple",enableSearch:!0,searchPlaceholder:"Search fruits...",children:[e.jsx(l.Trigger,{children:e.jsx(l.Value,{placeholder:"Select a fruit"})}),e.jsxs(l.Content,{children:[e.jsx(l.Item,{value:"apple",children:"Apple"}),e.jsx(l.Item,{value:"banana",children:"Banana"}),e.jsx(l.Item,{value:"cherry",children:"Cherry"})]})]})},n={render:()=>e.jsx("div",{style:{paddingTop:"300px"},children:e.jsxs(l,{defaultValue:"apple",defaultLabel:"Apple",popupDirection:"up",dropdownMaxHeight:140,enableSearch:!0,searchPlaceholder:"Search fruits...",onValueChange:a=>{console.log("Selected value:",a)},children:[e.jsx(l.Trigger,{children:e.jsx(l.Value,{placeholder:"Select a fruit"})}),e.jsxs(l.Content,{children:[e.jsx(l.Item,{value:"apple",children:"Apple"}),e.jsx(l.Item,{value:"banana",children:"Banana"}),e.jsx(l.Item,{value:"cherry",children:"Cherry"}),e.jsx(l.Item,{value:"grape",children:"Grape"}),e.jsx(l.Item,{value:"mango",children:"Mango"}),e.jsx(l.Item,{value:"orange",children:"Orange"})]})]})})};var c,o,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Select onValueChange={(value: string) => {
    console.log("Selected value:", value);
  }} defaultValue="apple" defaultLabel="Apple" displayValue="saib">
      <Select.Trigger>
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item displayValue="saib" value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="cherry">Cherry</Select.Item>
      </Select.Content>
    </Select>
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var u,s,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Select onValueChange={(value: string) => {
    console.log("Selected value:", value);
  }} defaultValue="apple" defaultLabel="Apple" enableSearch={true} searchPlaceholder="Search fruits...">
      <Select.Trigger>
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="cherry">Cherry</Select.Item>
      </Select.Content>
    </Select>
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var S,d,h;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    paddingTop: '300px'
  }}>

    <Select defaultValue="apple" defaultLabel="Apple" popupDirection="up" dropdownMaxHeight={140} enableSearch={true} searchPlaceholder="Search fruits..." onValueChange={(value: string) => {
      console.log("Selected value:", value);
    }}>
      <Select.Trigger>
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="cherry">Cherry</Select.Item>
        <Select.Item value="grape">Grape</Select.Item>
        <Select.Item value="mango">Mango</Select.Item>
        <Select.Item value="orange">Orange</Select.Item>
      </Select.Content>
    </Select>
    </div>
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const b=["Default","SelectWithSearch","SelectPopupUpWithMaxHeight"];export{t as Default,n as SelectPopupUpWithMaxHeight,r as SelectWithSearch,b as __namedExportsOrder,V as default};
