import{r as m,j as n}from"./iframe-D-IPVQRO.js";import{T as o}from"./index-D71K0u-e.js";import"./index-DxXTPHI-.js";import"./Text-lCq6pYMz.js";const E={title:"PAC Universal Plugin UI/Primitive/TextEditor",component:o,parameters:{layout:"padded"}},p="",t={render:()=>{const[e,r]=m.useState(p);return console.log("Editor Output:",e),n.jsx("div",{style:{maxWidth:1800,width:"100%",margin:"0 auto"},children:n.jsx(o,{placeholder:"Description",value:e,onChange:r,maxHeight:177})})}},a={render:()=>{const[e,r]=m.useState(p);return n.jsx(o,{value:e,onChange:r,enableModeSwitch:!0,maxHeight:177})}};var s,l,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
      placeholder="Description" value={value} onChange={setValue} maxHeight={177} />
      </div>;
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var i,d,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(defaultContent);
    return <TextEditor value={value} onChange={setValue}
    // allowEdit={false}
    enableModeSwitch={true} maxHeight={177} />;
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const f=["Default","ReadOnly"];export{t as Default,a as ReadOnly,f as __namedExportsOrder,E as default};
