import{r as p,j as n}from"./iframe-a_Xm9z3c.js";import{T as r}from"./index-CPJir11J.js";import"./index-DVye34PF.js";import"./Text-CMZGNaOH.js";const C={title:"PAC Universal Plugin UI/Primitive/TextEditor",component:r,parameters:{layout:"padded"}},m="",h=async e=>(await new Promise(t=>window.setTimeout(t,500)),e.type.startsWith("image/")?`https://picsum.photos/seed/${encodeURIComponent(e.name)}/300/200`:`https://example.com/uploads/${encodeURIComponent(e.name)}`),o={render:()=>{const[e,t]=p.useState(m);return console.log("Editor Output:",e),n.jsx("div",{style:{maxWidth:1800,width:"100%",margin:"0 auto"},children:n.jsx(r,{placeholder:"Description",value:e,onChange:t,onFileUpload:h,maxHeight:177})})}},a={render:()=>{const[e,t]=p.useState(m);return n.jsx(r,{value:e,onChange:t,onFileUpload:h,enableModeSwitch:!0,maxHeight:177})}};var s,l,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(defaultContent);
    console.log("Editor Output:", value);
    return <div style={{
      maxWidth: 1800,
      width: "100%",
      margin: "0 auto"
    }}>
        <TextEditor
      // label="Body"
      placeholder="Description" value={value} onChange={setValue} onFileUpload={mockUpload} maxHeight={177} />
      </div>;
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var i,u,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(defaultContent);
    return <TextEditor value={value} onChange={setValue} onFileUpload={mockUpload}
    // allowEdit={false}
    enableModeSwitch={true} maxHeight={177} />;
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const E=["Default","ReadOnly"];export{o as Default,a as ReadOnly,E as __namedExportsOrder,C as default};
