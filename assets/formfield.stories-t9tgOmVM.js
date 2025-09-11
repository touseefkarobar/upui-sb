import{j as e}from"./iframe-CmpgjNXe.js";import{C as l}from"./index-DX-5JnN2.js";import{F as r}from"./index-BzYNjGqM.js";import{I as f}from"./index-wkGhnFKS.js";import{S as n}from"./index-BE0sfM1j.js";import"./Label-Bo-HOCoQ.js";import"./Text-BuvVWvZD.js";import"./index-DleQFLpV.js";import"./useOutsideToggle-C1N9RrN8.js";import"./DropdownIcon-DwxvyAl0.js";import"./type-Bc9hys3F.js";import"./SearchIcon-PSzqtJtM.js";const A={title:"PAC Universal Plugin UI/Primitive/FormField",component:r,argTypes:{id:{description:"Unique identifier for the form field",control:{type:"text"}},describedBy:{description:"ID of the element that describes this field",control:{type:"text"}},children:{description:"Content of the form field",control:{type:"text"}}},parameters:{docs:{description:{component:`FormField is a primitive component for creating form fields with titles, descriptions, and input fields.

Usage:
\`\`\`tsx
import FormField from "@karobar_solutions/pac-universal-plugin-ui";

<FormField id="fruit" describedBy="fruit-desc">
  <FormField.Title>Fruit</FormField.Title>
  <FormField.Description>Choose your favorite fruit.</FormField.Description>
  <FormField.Field>
    <Select>
      <Select.Trigger>
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="cherry">Cherry</Select.Item>
      </Select.Content>
    </Select>
  </FormField.Field>
</FormField>
\`\`\``}}}},o={args:{id:"fruit",describedBy:"fruit-desc"},render:t=>e.jsxs(r,{id:t.id,describedBy:t.describedBy,children:[e.jsx(r.Title,{children:"Fruit"}),e.jsx(r.Description,{children:"Choose your favorite fruit."}),e.jsx(r.Field,{children:e.jsxs(n,{onValueChange:i=>{console.log("Selected value:",i)},children:[e.jsx(n.Trigger,{children:e.jsx(n.Value,{placeholder:"Select a fruit"})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{value:"apple",children:"Apple"}),e.jsx(n.Item,{value:"banana",children:"Banana"}),e.jsx(n.Item,{value:"cherry",children:"Cherry"})]})]})})]})},d={args:{id:"Amount",describedBy:"amount-desc"},render:t=>e.jsxs(r,{id:t.id,describedBy:t.describedBy,children:[e.jsx(r.Title,{children:"title"}),e.jsx(r.Description,{children:"Provide a descriptive title for the link request."}),e.jsx(r.Field,{children:e.jsxs(l,{inputProps:{placeholder:"Enter value",name:"combo-input",onChange:i=>{console.log("Input:",i.target.value)}},selectProps:{placeholder:"Choose an option",onValueChange:i=>{console.log("Selected value:",i)}},children:[e.jsx(l.SelectItem,{value:"default",children:"Default"}),e.jsx(l.SelectItem,{value:"hover",children:"Hover"}),e.jsx(l.SelectItem,{value:"default1",children:"Default"}),e.jsx(l.SelectItem,{value:"default2",children:"Default"}),e.jsx(l.SelectItem,{value:"selected",children:"Selected"})]})})]})},s={args:{id:"username",describedBy:"username-desc"},render:t=>e.jsxs(r,{id:t.id,describedBy:t.describedBy,children:[e.jsx(r.Title,{children:"username"}),e.jsx(r.Description,{children:"Enter Username Below:"}),e.jsx(r.Field,{children:e.jsx(f,{})})]})};var c,a,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: "fruit",
    describedBy: "fruit-desc"
  },
  render: (args: any) => <FormField id={args.id} describedBy={args.describedBy}>\r
      <FormField.Title>Fruit</FormField.Title>\r
      <FormField.Description>\r
       Choose your favorite fruit.\r
      </FormField.Description>\r
      <FormField.Field>\r
        <Select onValueChange={(value: string) => {
        console.log("Selected value:", value);
      }}>\r
          <Select.Trigger>\r
            <Select.Value placeholder="Select a fruit" />\r
          </Select.Trigger>\r
          <Select.Content>\r
            <Select.Item value="apple">Apple</Select.Item>\r
            <Select.Item value="banana">Banana</Select.Item>\r
            <Select.Item value="cherry">Cherry</Select.Item>\r
          </Select.Content>\r
        </Select>\r
      </FormField.Field>\r
    </FormField>
}`,...(m=(a=o.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var u,p,F;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: "Amount",
    describedBy: "amount-desc"
  },
  render: (args: any) => <FormField id={args.id} describedBy={args.describedBy}>\r
      <FormField.Title>title</FormField.Title>\r
      <FormField.Description>\r
        Provide a descriptive title for the link request.\r
      </FormField.Description>\r
      <FormField.Field>\r
        <ComboInput inputProps={{
        placeholder: "Enter value",
        name: "combo-input",
        onChange: e => {
          console.log("Input:", e.target.value);
        }
      }} selectProps={{
        placeholder: "Choose an option",
        // defaultValue: "usd",
        onValueChange: (value: string) => {
          console.log("Selected value:", value);
        }
      }}>\r
          <ComboInput.SelectItem value="default">Default</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="hover">Hover</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="default1">\r
            Default\r
          </ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="default2">\r
            Default\r
          </ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="selected">\r
            Selected\r
          </ComboInput.SelectItem>\r
        </ComboInput>\r
      </FormField.Field>\r
    </FormField>
}`,...(F=(p=d.parameters)==null?void 0:p.docs)==null?void 0:F.source}}};var h,S,I;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: "username",
    describedBy: "username-desc"
  },
  render: (args: any) => <FormField id={args.id} describedBy={args.describedBy}>\r
      <FormField.Title>username</FormField.Title>\r
      <FormField.Description>Enter Username Below:</FormField.Description>\r
      <FormField.Field>\r
        <Input />\r
      </FormField.Field>\r
    </FormField>
}`,...(I=(S=s.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const E=["SelectFormField","ComboInputFormField","InputFormField"];export{d as ComboInputFormField,s as InputFormField,o as SelectFormField,E as __namedExportsOrder,A as default};
