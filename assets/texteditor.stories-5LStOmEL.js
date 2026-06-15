import{r as p,j as a}from"./iframe-CRG9BGu-.js";import{T as r}from"./index-B6SzxGjk.js";import"./index-Dfe6r8sF.js";import"./Text-CYdK4AbI.js";const C={title:"PAC Universal Plugin UI/Primitive/TextEditor",component:r,parameters:{layout:"padded"}},m="",x=async e=>(await new Promise(t=>window.setTimeout(t,500)),e.type.startsWith("image/")?`https://picsum.photos/seed/${encodeURIComponent(e.name)}/300/200`:`https://example.com/uploads/${encodeURIComponent(e.name)}`),o={render:()=>{const[e,t]=p.useState(m);return console.log("Editor Output:",e),a.jsx("div",{children:a.jsx(r,{placeholder:"Description",value:e,onChange:t,onFileUpload:x})})}},n={render:()=>{const[e,t]=p.useState(m);return a.jsx(r,{value:e,onChange:t,onFileUpload:x,enableModeSwitch:!0})}};var s,l,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(defaultContent);
    console.log("Editor Output:", value);
    return <div>
        <TextEditor
      // label="Body"
      placeholder="Description" value={value} onChange={setValue} onFileUpload={mockUpload}
      // maxHeight={177}
      />
      </div>;
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,i,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(defaultContent);
    return <TextEditor value={value} onChange={setValue} onFileUpload={mockUpload}
    // allowEdit={false}
    enableModeSwitch={true}
    // maxHeight={177}
    />;
  }
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const E=["Default","ReadOnly"];export{o as Default,n as ReadOnly,E as __namedExportsOrder,C as default};
