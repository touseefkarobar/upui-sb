import{j as e,r as p}from"./iframe-YWs4K4M3.js";import{R as a}from"./index-4AtTVk3H.js";const D={title:"PAC Universal Plugin UI/Primitive/RadioGroup",component:a,tags:["autodocs"],argTypes:{value:{description:"Controlled selected value",control:{type:"text"}},defaultValue:{description:"Default selected value (uncontrolled)",control:{type:"text"}},onChange:{description:"Callback when the selected value changes",action:"changed"},disabled:{description:"Disable all radio items in the group",control:{type:"boolean"}},orientation:{description:"Layout orientation of the radio group",control:{type:"select"},options:["horizontal","vertical"]},name:{description:"Name attribute for the radio group",control:{type:"text"}}},args:{disabled:!1,orientation:"vertical"}},o={render:r=>{const[l,i]=p.useState("");return e.jsxs(a,{value:l,onChange:i,disabled:r.disabled,orientation:r.orientation,children:[e.jsx(a.Item,{value:"apple",label:"Apple"}),e.jsx(a.Item,{value:"banana",label:"Banana"}),e.jsx(a.Item,{value:"cherry",label:"Cherry"})]})}},n={render:()=>e.jsxs(a,{defaultValue:"banana",children:[e.jsx(a.Item,{value:"apple",label:"Apple"}),e.jsx(a.Item,{value:"banana",label:"Banana"}),e.jsx(a.Item,{value:"cherry",label:"Cherry"})]})},t={render:()=>e.jsxs(a,{defaultValue:"apple",disabled:!0,children:[e.jsx(a.Item,{value:"apple",label:"Apple"}),e.jsx(a.Item,{value:"banana",label:"Banana"}),e.jsx(a.Item,{value:"cherry",label:"Cherry"})]})},s={render:()=>{const[r,l]=p.useState("small");return e.jsxs(a,{value:r,onChange:l,orientation:"horizontal",children:[e.jsx(a.Item,{value:"small",label:"Small"}),e.jsx(a.Item,{value:"medium",label:"Medium"}),e.jsx(a.Item,{value:"large",label:"Large"})]})}},u={render:()=>{const[r,l]=p.useState(""),i=r==="";return e.jsxs("div",{children:[e.jsxs(a,{value:r,onChange:l,children:[e.jsx(a.Item,{value:"yes",label:"Yes"}),e.jsx(a.Item,{value:"no",label:"No"}),e.jsx(a.Item,{value:"maybe",label:"Maybe"})]}),i&&e.jsx("span",{style:{color:"var(--pac-upui-red-300)",fontSize:"0.875rem",marginTop:"4px",display:"block"},children:"Please select an option"})]})}};var d,c,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("");
    return <RadioGroup value={value} onChange={setValue} disabled={args.disabled} orientation={args.orientation}>
        <RadioGroup.Item value="apple" label="Apple" />
        <RadioGroup.Item value="banana" label="Banana" />
        <RadioGroup.Item value="cherry" label="Cherry" />
      </RadioGroup>;
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var b,v,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="banana">
      <RadioGroup.Item value="apple" label="Apple" />
      <RadioGroup.Item value="banana" label="Banana" />
      <RadioGroup.Item value="cherry" label="Cherry" />
    </RadioGroup>
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,I,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="apple" disabled>
      <RadioGroup.Item value="apple" label="Apple" />
      <RadioGroup.Item value="banana" label="Banana" />
      <RadioGroup.Item value="cherry" label="Cherry" />
    </RadioGroup>
}`,...(g=(I=t.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var y,R,G;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("small");
    return <RadioGroup value={value} onChange={setValue} orientation="horizontal">
        <RadioGroup.Item value="small" label="Small" />
        <RadioGroup.Item value="medium" label="Medium" />
        <RadioGroup.Item value="large" label="Large" />
      </RadioGroup>;
  }
}`,...(G=(R=s.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var j,f,C;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const hasError = value === "";
    return <div>
        <RadioGroup value={value} onChange={setValue}>
          <RadioGroup.Item value="yes" label="Yes" />
          <RadioGroup.Item value="no" label="No" />
          <RadioGroup.Item value="maybe" label="Maybe" />
        </RadioGroup>
        {hasError && <span style={{
        color: "var(--pac-upui-red-300)",
        fontSize: "0.875rem",
        marginTop: "4px",
        display: "block"
      }}>
            Please select an option
          </span>}
      </div>;
  }
}`,...(C=(f=u.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const E=["Default","WithDefaultValue","Disabled","Horizontal","WithError"];export{o as Default,t as Disabled,s as Horizontal,n as WithDefaultValue,u as WithError,E as __namedExportsOrder,D as default};
