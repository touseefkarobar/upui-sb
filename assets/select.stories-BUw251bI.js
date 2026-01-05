import{j as l}from"./iframe-UJVGIRVa.js";import{S as e}from"./index-DDeWXkOI.js";import"./useOutsideToggle-Duvj74lD.js";import"./DropdownIcon-DJ0e4n1q.js";import"./type-Bc9hys3F.js";import"./index-BHBeJuTN.js";import"./index-BuPAFYCs.js";import"./SearchIcon-DKxuOJZ4.js";const f={title:"PAC Universal Plugin UI/Primitive/Select",component:e,parameters:{docs:{description:{component:`Select is a primitive dropdown component for choosing a value.

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
\`\`\``}}},tags:["autodocs"]},a={render:()=>l.jsxs(e,{onValueChange:n=>{console.log("Selected value:",n)},defaultValue:"apple",defaultLabel:"Apple",displayValue:"saib",children:[l.jsx(e.Trigger,{children:l.jsx(e.Value,{placeholder:"Select a fruit"})}),l.jsxs(e.Content,{children:[l.jsx(e.Item,{displayValue:"saib",value:"apple",children:"Apple"}),l.jsx(e.Item,{value:"banana",children:"Banana"}),l.jsx(e.Item,{value:"cherry",children:"Cherry"})]})]})},t={render:()=>l.jsxs(e,{onValueChange:n=>{console.log("Selected value:",n)},defaultValue:"apple",defaultLabel:"Apple",enableSearch:!0,searchPlaceholder:"Search fruits...",children:[l.jsx(e.Trigger,{children:l.jsx(e.Value,{placeholder:"Select a fruit"})}),l.jsxs(e.Content,{children:[l.jsx(e.Item,{value:"apple",children:"Apple"}),l.jsx(e.Item,{value:"banana",children:"Banana"}),l.jsx(e.Item,{value:"cherry",children:"Cherry"})]})]})};var r,c,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(c=a.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var s,u,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const x=["Default","SelectWithSearch"];export{a as Default,t as SelectWithSearch,x as __namedExportsOrder,f as default};
