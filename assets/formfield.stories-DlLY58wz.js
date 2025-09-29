import{j as e,r as C}from"./iframe-mHfZNN49.js";import{C as l}from"./index-Bg8IxcwE.js";import{F as r}from"./index-Bj39WynB.js";import{I as x}from"./index-BbJmK_ea.js";import{S as i}from"./index-CipCZpSO.js";import{T as j}from"./index-uCrWAT1P.js";import"./Label-BFb_-psz.js";import"./Text-ysigpQUG.js";import"./index-BCp_BHlr.js";import"./useOutsideToggle-BHOcYcxm.js";import"./DropdownIcon-BoG0q0I1.js";import"./type-Bc9hys3F.js";import"./SearchIcon-Bmj6EQOw.js";const O={title:"PAC Universal Plugin UI/Primitive/FormField",component:r,argTypes:{id:{description:"Unique identifier for the form field",control:{type:"text"}},describedBy:{description:"ID of the element that describes this field",control:{type:"text"}},children:{description:"Content of the form field",control:{type:"text"}}},parameters:{docs:{description:{component:`FormField is a primitive component for creating form fields with titles, descriptions, and input fields.

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
\`\`\``}}}},o={args:{id:"fruit",describedBy:"fruit-desc"},render:t=>e.jsxs(r,{id:t.id,describedBy:t.describedBy,children:[e.jsx(r.Title,{children:"Fruit"}),e.jsx(r.Description,{children:"Choose your favorite fruit."}),e.jsx(r.Field,{children:e.jsxs(i,{onValueChange:n=>{console.log("Selected value:",n)},children:[e.jsx(i.Trigger,{children:e.jsx(i.Value,{placeholder:"Select a fruit"})}),e.jsxs(i.Content,{children:[e.jsx(i.Item,{value:"apple",children:"Apple"}),e.jsx(i.Item,{value:"banana",children:"Banana"}),e.jsx(i.Item,{value:"cherry",children:"Cherry"})]})]})})]})},d={args:{id:"Amount",describedBy:"amount-desc"},render:t=>e.jsxs(r,{id:t.id,describedBy:t.describedBy,children:[e.jsx(r.Title,{children:"title"}),e.jsx(r.Description,{children:"Provide a descriptive title for the link request."}),e.jsx(r.Field,{children:e.jsxs(l,{inputProps:{placeholder:"Enter value",name:"combo-input",onChange:n=>{console.log("Input:",n.target.value)}},selectProps:{placeholder:"Choose an option",onValueChange:n=>{console.log("Selected value:",n)}},children:[e.jsx(l.SelectItem,{value:"default",children:"Default"}),e.jsx(l.SelectItem,{value:"hover",children:"Hover"}),e.jsx(l.SelectItem,{value:"default1",children:"Default"}),e.jsx(l.SelectItem,{value:"default2",children:"Default"}),e.jsx(l.SelectItem,{value:"selected",children:"Selected"})]})})]})},s={args:{id:"username",describedBy:"username-desc"},render:t=>e.jsxs(r,{id:t.id,describedBy:t.describedBy,children:[e.jsx(r.Title,{children:"username"}),e.jsx(r.Description,{children:"Enter Username Below:"}),e.jsx(r.Field,{children:e.jsx(x,{})})]})},c={args:{id:"test-toggle",describedBy:"test-toggle-desc"},render:t=>{const[n,y]=C.useState(!1);return e.jsxs(r,{id:t.id,describedBy:t.describedBy,children:[e.jsx(r.Title,{children:"username"}),e.jsx(r.Description,{children:"Enter Username Below:"}),e.jsx(r.Field,{children:e.jsx(j,{checked:n,onChange:y})})]})}};var a,m,u;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    id: "fruit",
    describedBy: "fruit-desc"
  },
  render: (args: any) => <FormField id={args.id} describedBy={args.describedBy}>
      <FormField.Title>Fruit</FormField.Title>
      <FormField.Description>Choose your favorite fruit.</FormField.Description>
      <FormField.Field>
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
      </FormField.Field>
    </FormField>
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var F,p,h;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: "Amount",
    describedBy: "amount-desc"
  },
  render: (args: any) => <FormField id={args.id} describedBy={args.describedBy}>
      <FormField.Title>title</FormField.Title>
      <FormField.Description>
        Provide a descriptive title for the link request.
      </FormField.Description>
      <FormField.Field>
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
      }}>
          <ComboInput.SelectItem value="default">Default</ComboInput.SelectItem>
          <ComboInput.SelectItem value="hover">Hover</ComboInput.SelectItem>
          <ComboInput.SelectItem value="default1">
            Default
          </ComboInput.SelectItem>
          <ComboInput.SelectItem value="default2">
            Default
          </ComboInput.SelectItem>
          <ComboInput.SelectItem value="selected">
            Selected
          </ComboInput.SelectItem>
        </ComboInput>
      </FormField.Field>
    </FormField>
}`,...(h=(p=d.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,S,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: "username",
    describedBy: "username-desc"
  },
  render: (args: any) => <FormField id={args.id} describedBy={args.describedBy}>
      <FormField.Title>username</FormField.Title>
      <FormField.Description>Enter Username Below:</FormField.Description>
      <FormField.Field>
        <Input />
      </FormField.Field>
    </FormField>
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var I,b,v;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: "test-toggle",
    describedBy: "test-toggle-desc"
  },
  render: (args: any) => {
    const [checked, setChecked] = useState(false);
    return <FormField id={args.id} describedBy={args.describedBy}>
        <FormField.Title>username</FormField.Title>
        <FormField.Description>Enter Username Below:</FormField.Description>
        <FormField.Field>
          <Toggle checked={checked} onChange={setChecked} />
        </FormField.Field>
      </FormField>;
  }
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const R=["SelectFormField","ComboInputFormField","InputFormField","ToggleFormField"];export{d as ComboInputFormField,s as InputFormField,o as SelectFormField,c as ToggleFormField,R as __namedExportsOrder,O as default};
