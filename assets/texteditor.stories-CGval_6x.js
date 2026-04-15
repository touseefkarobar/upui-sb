import{r as m,j as r}from"./iframe-BA8WlzAs.js";import{T as o}from"./index-CdaQXKGM.js";import"./index-gmgkuA_i.js";import"./Text-DVt6GUl_.js";const E={title:"PAC Universal Plugin UI/Primitive/TextEditor",component:o,parameters:{layout:"padded"}},p="",t={render:()=>{const[e,n]=m.useState(p);return console.log("Editor Output:",e),r.jsx("div",{style:{maxWidth:1800,width:"100%",margin:"0 auto"},children:r.jsx(o,{placeholder:"Description",value:e,onChange:n,maxHeight:177})})}},a={render:()=>{const[e,n]=m.useState(p);return r.jsx(o,{label:"Read Only Content",value:e,onChange:n,allowEdit:!1})}};var s,l,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,i,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(defaultContent);
    return <TextEditor label="Read Only Content" value={value} onChange={setValue} allowEdit={false} />;
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const f=["Default","ReadOnly"];export{t as Default,a as ReadOnly,f as __namedExportsOrder,E as default};
