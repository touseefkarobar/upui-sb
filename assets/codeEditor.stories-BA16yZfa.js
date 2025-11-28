import{j as s}from"./iframe-B4VatSrF.js";import{C as r}from"./index-CNzmaplX.js";const f={title:"PAC Universal Plugin UI/Primitive/CodeEditor",component:r},n={render:()=>s.jsx(r,{height:"400",language:"php",value:`<?php
// Your PHP code here
function helloWorld() {
    echo "Hello, World!";
}
`,onChange:e=>{console.log("Code changed:",e)}})},o={render:()=>s.jsx(r,{language:"javascript",value:`const greet = (name) => {
  console.log(\`Hello, \${name}!\`);
};

const user = { id: 12, name: "PAC" };
greet(user.name);
`,onChange:e=>{console.log("JS updated:",e)}})},a={render:()=>s.jsx(r,{language:"css",value:`body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}
`,onChange:e=>{console.log("CSS updated:",e)}})};var d,t,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <CodeEditor height={"400"} language="php" value={\`<?php\\n// Your PHP code here\\nfunction helloWorld() {\\n    echo "Hello, World!";\\n}\\n\`} onChange={(code: string) => {
    console.log("Code changed:", code);
  }} />
}`,...(c=(t=n.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var l,i,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:'{\n  render: () => <CodeEditor language="javascript" value={`const greet = (name) => {\\n  console.log(\\`Hello, \\${name}!\\`);\\n};\\n\\nconst user = { id: 12, name: "PAC" };\\ngreet(user.name);\\n`} onChange={(code: string) => {\n    console.log("JS updated:", code);\n  }} />\n}',...(g=(i=o.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <CodeEditor language="css" value={\`body {\\n  margin: 0;\\n  padding: 0;\\n  font-family: Arial, sans-serif;\\n}\\n\\n.container {\\n  max-width: 1200px;\\n  margin: auto;\\n  padding: 20px;\\n}\\n\`} onChange={(code: string) => {
    console.log("CSS updated:", code);
  }} />
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const x=["Default","Javascript","css"];export{n as Default,o as Javascript,x as __namedExportsOrder,a as css,f as default};
