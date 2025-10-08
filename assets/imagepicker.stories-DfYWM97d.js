import{r as p,j as u}from"./iframe-DmKbGA7L.js";import{I as o}from"./index-aTkx7qxB.js";import"./AddIcon-BCI6L4Pz.js";import"./type-Bc9hys3F.js";import"./CloseIcon-D4ZvZiCt.js";import"./FilledIcon-CDoUUhwy.js";import"./Text-DB8YNbG0.js";import"./FaqIcon-goA8CsxD.js";const x={title:"PAC Universal Plugin UI/Primitive/ImagePicker",component:o},e={render:()=>{const[s,t]=p.useState(null);return console.log("file in story",s),u.jsx(o,{onChange:t})}},r={render:()=>{const[s,t]=p.useState(null);return console.log("file in story",s),u.jsx(o,{src:"https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",onChange:t})}};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [file, setFile] = useState<File | null>(null);
    console.log("file in story", file);
    return <ImagePicker onChange={setFile} />;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    // This is just for demo; in real use, pass a file or data URL as initial state
    const [file, setFile] = useState<File | null>(null);
    console.log("file in story", file);
    return <ImagePicker src={"https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"} onChange={setFile} />;
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const P=["Default","WithInitialImage"];export{e as Default,r as WithInitialImage,P as __namedExportsOrder,x as default};
