import{r as u,j as p}from"./iframe-DR19B53t.js";import{I as s}from"./index-41CkgHky.js";import"./AddIcon-D_qkYuNu.js";import"./type-Bc9hys3F.js";import"./CloseIcon-Bbyw0eFD.js";import"./FilledIcon-B84TIu6j.js";import"./Text-BT-AAAcM.js";import"./FaqIcon-3AkIYkAi.js";const S={title:"PAC Universal Plugin UI/Primitive/ImagePicker",component:s},e={render:()=>{const[t,n]=u.useState(null);return console.log("file in story",t),p.jsx(s,{onChange:n})}},r={render:()=>{const[t,n]=u.useState(null);return console.log("file in story",t),p.jsx(s,{onChange:n})}};var o,i,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [file, setFile] = useState<File | null>(null);
    console.log("file in story", file);
    return <ImagePicker onChange={setFile} />;
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    // This is just for demo; in real use, pass a file or data URL as initial state
    const [file, setFile] = useState<File | null>(null);
    console.log("file in story", file);
    return <ImagePicker onChange={setFile} />;
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const j=["Default","WithInitialImage"];export{e as Default,r as WithInitialImage,j as __namedExportsOrder,S as default};
