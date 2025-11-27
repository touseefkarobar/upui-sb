import{r as o,j as n}from"./iframe-B89YVXcJ.js";import{I as i}from"./index-quZqXtBH.js";import"./AddIcon-QymDaBRc.js";import"./type-Bc9hys3F.js";import"./CloseIcon-CZs7TAWn.js";import"./FilledIcon-B05eHdxo.js";import"./Text-GlSA7qal.js";import"./FaqIcon-Dnsct4vN.js";import"./useOutsideToggle-zwD5T0oi.js";const P={title:"PAC Universal Plugin UI/Primitive/ImagePicker",component:i},t={render:()=>{const[e,r]=o.useState(null);return console.log("file in story",e),n.jsx(i,{onChange:r})}},s={render:()=>{const[e,r]=o.useState(null);return console.log("file in story",e),n.jsx(i,{src:"https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",onChange:r})}},a={render:()=>{const e="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",[r,w]=o.useState(null);return console.log("file in story",r),n.jsx(i,{src:e,showMediaLibrary:!0,onChange:w,onOpenMediaLibrary:()=>{console.log("fx to open media library")}})}};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [file, setFile] = useState<File | null>(null);
    console.log("file in story", file);
    return <ImagePicker onChange={setFile} />;
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    // This is just for demo; in real use, pass a file or data URL as initial state
    const [file, setFile] = useState<File | null>(null);
    console.log("file in story", file);
    return <ImagePicker src={"https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"} onChange={setFile} />;
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var f,g,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const intialImage = "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80";
    const [file, setFile] = useState<File | null>(null);
    console.log("file in story", file);
    return <ImagePicker src={intialImage} showMediaLibrary={true} onChange={setFile} onOpenMediaLibrary={() => {
      // // Open WordPress Media Library
      // const frame = wp.media({
      //   title: "Select Image",
      //   button: { text: "Use this image" },
      //   multiple: false,
      // });
      // frame.on("select", () => {
      //   const attachment = frame.state().get("selection").first().toJSON();
      //   setImageUrl(attachment.url);
      // });
      // frame.open();

      console.log("fx to open media library");
    }} />;
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const L=["Default","WithInitialImage","WithMediaLibraryOption"];export{t as Default,s as WithInitialImage,a as WithMediaLibraryOption,L as __namedExportsOrder,P as default};
