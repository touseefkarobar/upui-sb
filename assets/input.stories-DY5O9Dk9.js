import{I as R}from"./index-DI0qc9ke.js";import{R as f}from"./ResetIcon-dGAiy3KL.js";import{S as y}from"./SearchIcon-u3bBArvV.js";import"./iframe-C2PwrmL6.js";import"./index-CgK9kCzS.js";import"./type-Bc9hys3F.js";const W={title:"PAC Universal Plugin UI/Primitive/Input",component:R,tags:["autodocs"]},n={args:{name:"input",type:"text",placeholder:"Enter text",onChange:e=>{console.log("Input changed:",e.target.value)}}},t={args:{name:"input",type:"number",placeholder:"Enter text",onChange:e=>{console.log("Input changed:",e.target.value)}}},a={args:{"aria-invalid":!0,name:"input",onChange:e=>{console.log("Input changed:",e.target.value)},placeholder:"Enter text"}},o={args:{name:"input",type:"text",placeholder:"Enter text",leftIcon:y,onChange:e=>{console.log("Input changed:",e.target.value)}}},r={args:{name:"input",type:"text",placeholder:"Enter text",rightIcon:f,onRightIconClick:()=>{console.log("Right icon clicked")},onChange:e=>{console.log("Input changed:",e.target.value)}}};var c,s,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: "input",
    type: "text",
    placeholder: "Enter text",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Input changed:", e.target.value);
    }
  }
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var l,g,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: "input",
    type: "number",
    placeholder: "Enter text",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Input changed:", e.target.value);
    }
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var i,h,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    "aria-invalid": true,
    name: "input",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Input changed:", e.target.value);
    },
    placeholder: "Enter text"
  }
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var d,I,E;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: "input",
    type: "text",
    placeholder: "Enter text",
    leftIcon: SearchIcon,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Input changed:", e.target.value);
    }
  }
}`,...(E=(I=o.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var v,x,C;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: "input",
    type: "text",
    placeholder: "Enter text",
    rightIcon: ResetIcon,
    onRightIconClick: () => {
      console.log("Right icon clicked");
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Input changed:", e.target.value);
    }
  }
}`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const P=["InputRegular","InputFilled","InputErrored","InputWithLeftIcon","InputWithRightIcon"];export{a as InputErrored,t as InputFilled,n as InputRegular,o as InputWithLeftIcon,r as InputWithRightIcon,P as __namedExportsOrder,W as default};
