import{j as r,r as c}from"./iframe-Dsu9I-Ij.js";import{N as a}from"./index-C8wdGIiX.js";const z={title:"PAC Universal Plugin UI/Primitive/NumberInput",component:a,tags:["autodocs"],argTypes:{value:{description:"Controlled numeric value",control:{type:"number"}},defaultValue:{description:"Default value (uncontrolled)",control:{type:"number"}},onChange:{description:"Callback when the value changes",action:"changed"},min:{description:"Minimum allowed value",control:{type:"number"}},max:{description:"Maximum allowed value",control:{type:"number"}},step:{description:"Step increment/decrement amount",control:{type:"number"}},disabled:{description:"Disable the input",control:{type:"boolean"}},placeholder:{description:"Placeholder text",control:{type:"text"}},label:{description:"Label for the input",control:{type:"text"}},size:{description:"Size of the input",control:{type:"select"},options:["small","medium"]}},args:{disabled:!1,step:1,size:"medium",placeholder:"Enter a number"}},n={render:e=>{const[t,I]=c.useState(void 0);return r.jsx(a,{value:t,onChange:I,placeholder:e.placeholder,disabled:e.disabled,step:e.step,size:e.size})}},s={render:()=>{const[e,t]=c.useState(5);return r.jsx(a,{value:e,onChange:t,min:0,max:10,placeholder:"0 to 10"})}},o={render:()=>{const[e,t]=c.useState(0);return r.jsx(a,{value:e,onChange:t,step:5,placeholder:"Step by 5"})}},l={render:()=>r.jsx(a,{defaultValue:42,disabled:!0,placeholder:"Disabled"})},u={render:()=>{const[e,t]=c.useState(1);return r.jsx(a,{value:e,onChange:t,label:"Quantity",min:1,max:100,placeholder:"Enter quantity"})}};var i,d,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<number | undefined>(undefined);
    return <NumberInput value={value} onChange={setValue} placeholder={args.placeholder} disabled={args.disabled} step={args.step} size={args.size} />;
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,b,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(5);
    return <NumberInput value={value} onChange={setValue} min={0} max={10} placeholder="0 to 10" />;
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,g,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    return <NumberInput value={value} onChange={setValue} step={5} placeholder="Step by 5" />;
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var S,y,V;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <NumberInput defaultValue={42} disabled placeholder="Disabled" />
}`,...(V=(y=l.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var f,C,D;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(1);
    return <NumberInput value={value} onChange={setValue} label="Quantity" min={1} max={100} placeholder="Enter quantity" />;
  }
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const E=["Default","WithMinMax","WithStep","Disabled","WithLabel"];export{n as Default,l as Disabled,u as WithLabel,s as WithMinMax,o as WithStep,E as __namedExportsOrder,z as default};
