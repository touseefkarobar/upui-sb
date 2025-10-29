import{j as l}from"./iframe-B9kdOOyg.js";import{C as t}from"./index-8sTYnXLW.js";const c={title:"PAC Universal Plugin UI/Primitive/CodeEditor",component:t},e={render:()=>l.jsx(t,{height:"400",value:`<?php
// Your PHP code here
function helloWorld() {
    echo "Hello, World!";
}
`,onChange:d=>{console.log("Code changed:",d)}})};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <CodeEditor height={"400"} value={\`<?php\\n// Your PHP code here\\nfunction helloWorld() {\\n    echo "Hello, World!";\\n}\\n\`} onChange={(code: string) => {
    console.log("Code changed:", code);
  }} />
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,c as default};
