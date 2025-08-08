import{j as e}from"./iframe-BK5b18Ej.js";import{C as t}from"./index-fjn211AS.js";import{S as n}from"./index-ULHohA-U.js";import"./index-CiXK0u8H.js";import"./index-kmoXbgmH.js";import"./useOutsideToggle-Dj9rkL4v.js";import"./DropdownIcon-zWPWiqBK.js";import"./type-Bc9hys3F.js";import"./SearchIcon-AcubvT2f.js";const g={title:"PAC Universal Plugin UI/Primitive/ComboInput",component:t,tags:["autodocs"]},o={render:()=>e.jsxs(t,{inputProps:{placeholder:"Enter value",name:"combo-input",onChange:l=>{console.log("Input:",l.target.value)}},selectProps:{placeholder:"Choose an option",defaultValue:"selected",onValueChange:l=>{console.log("Selected value:",l)}},children:[e.jsx(t.SelectItem,{value:"default",children:"Default"}),e.jsx(t.SelectItem,{value:"hover",children:"Hover"}),e.jsx(t.SelectItem,{value:"default1",children:"Default"}),e.jsx(t.SelectItem,{value:"default2",children:"Default"}),e.jsx(t.SelectItem,{value:"selected",children:"Selected"})]})},m={render:()=>e.jsx(t,{inputProps:{placeholder:"Enter value",name:"combo-input",onChange:l=>{console.log("Input:",l.target.value)}},selectProps:{placeholder:"Choose an option",defaultValue:"px",defaultLabel:"px",onValueChange:l=>{console.log("Selected value:",l)},textTransform:"lowercase"},children:e.jsxs(n,{showDivider:!0,children:[e.jsxs(n,{gap:0,children:[e.jsx(t.SelectItem,{value:"px",children:"px"}),e.jsx(t.SelectItem,{value:"%",children:"%"}),e.jsx(t.SelectItem,{value:"em",children:"em"}),e.jsx(t.SelectItem,{value:"rem",children:"rem"}),e.jsx(t.SelectItem,{value:"vw",children:"vw"}),e.jsx(t.SelectItem,{value:"vh",children:"vh"}),e.jsx(t.SelectItem,{value:"vmin",children:"vmin"}),e.jsx(t.SelectItem,{value:"vmax",children:"vmax"}),e.jsx(t.SelectItem,{value:"deg",children:"deg"}),e.jsx(t.SelectItem,{value:"grad",children:"grad"}),e.jsx(t.SelectItem,{value:"ms",children:"ms"}),e.jsx(t.SelectItem,{value:"rad",children:"rad"}),e.jsx(t.SelectItem,{value:"s",children:"s"}),e.jsx(t.SelectItem,{value:"turn",children:"turn"}),e.jsx(t.SelectItem,{value:"—",children:"—"})]}),e.jsxs(n,{gap:0,children:[e.jsx(t.SelectItem,{value:"calc",children:"calc"}),e.jsx(t.SelectItem,{value:"min",children:"min"}),e.jsx(t.SelectItem,{value:"max",children:"max"}),e.jsx(t.SelectItem,{value:"clamp",children:"clamp"})]}),e.jsxs(n,{gap:0,children:[e.jsx(t.SelectItem,{value:"auto",children:"auto"}),e.jsx(t.SelectItem,{value:"none",children:"none"}),e.jsx(t.SelectItem,{value:"inherit",children:"inherit"}),e.jsx(t.SelectItem,{value:"unset",children:"unset"}),e.jsx(t.SelectItem,{value:"var",children:"css var"})]})]})})};var a,u,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <ComboInput inputProps={{
    placeholder: "Enter value",
    name: "combo-input",
    onChange: e => {
      console.log("Input:", e.target.value);
    }
  }} selectProps={{
    placeholder: "Choose an option",
    defaultValue: "selected",
    onValueChange: (value: string) => {
      console.log("Selected value:", value);
    }
  }}>\r
      <ComboInput.SelectItem value="default">Default</ComboInput.SelectItem>\r
      <ComboInput.SelectItem value="hover">Hover</ComboInput.SelectItem>\r
      <ComboInput.SelectItem value="default1">Default</ComboInput.SelectItem>\r
      <ComboInput.SelectItem value="default2">Default</ComboInput.SelectItem>\r
      <ComboInput.SelectItem value="selected">Selected</ComboInput.SelectItem>\r
    </ComboInput>
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var r,I,p;m.parameters={...m.parameters,docs:{...(r=m.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <ComboInput inputProps={{
    placeholder: "Enter value",
    name: "combo-input",
    onChange: e => {
      console.log("Input:", e.target.value);
    }
  }} selectProps={{
    placeholder: "Choose an option",
    defaultValue: "px",
    defaultLabel: "px",
    onValueChange: (value: string) => {
      console.log("Selected value:", value);
    },
    textTransform: "lowercase"
  }}>\r
      <Stack showDivider>\r
        <Stack gap={0}>\r
          <ComboInput.SelectItem value="px">px</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="%">%</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="em">em</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="rem">rem</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="vw">vw</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="vh">vh</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="vmin">vmin</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="vmax">vmax</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="deg">deg</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="grad">grad</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="ms">ms</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="rad">rad</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="s">s</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="turn">turn</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="—">—</ComboInput.SelectItem>\r
        </Stack>\r
        <Stack gap={0}>\r
          <ComboInput.SelectItem value="calc">calc</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="min">min</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="max">max</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="clamp">clamp</ComboInput.SelectItem>\r
        </Stack>\r
        <Stack gap={0}>\r
          <ComboInput.SelectItem value="auto">auto</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="none">none</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="inherit">inherit</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="unset">unset</ComboInput.SelectItem>\r
          <ComboInput.SelectItem value="var">css var</ComboInput.SelectItem>\r
        </Stack>\r
      </Stack>\r
    </ComboInput>
}`,...(p=(I=m.parameters)==null?void 0:I.docs)==null?void 0:p.source}}};const j=["Default","DiviUseCase"];export{o as Default,m as DiviUseCase,j as __namedExportsOrder,g as default};
