import{r as i,j as n}from"./iframe-sA0AJjb6.js";import{I as o}from"./index-C_THPhnX.js";import"./AddIcon-BFozGaZ9.js";import"./type-Bc9hys3F.js";import"./CloseIcon-5gmcQvtq.js";import"./FilledIcon-Cy5P0dzL.js";import"./Text-F2YrE36q.js";import"./FaqIcon-DFpCHCiq.js";const _={title:"PAC Universal Plugin UI/Primitive/ImagePicker",component:o},t={render:()=>{const[e,r]=i.useState(null);return console.log("file in story",e),n.jsx(o,{onChange:r})}},a={render:()=>{const[e,r]=i.useState(null);return console.log("file in story",e),n.jsx(o,{src:"https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",onChange:r})}},s={render:()=>{const e="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",[r,y]=i.useState(null);return console.log("file in story",r),n.jsx(o,{src:e,showMediaLibrary:!0,onChange:y,onOpenMediaLibrary:()=>{console.log("fx to open media library")},onUrlChange:w=>{console.log("Media library URL:",w)}})}};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [file, setFile] = useState<File | null>(null);
    console.log("file in story", file);
    return <ImagePicker onChange={setFile} />;
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    // This is just for demo; in real use, pass a file or data URL as initial state
    const [file, setFile] = useState<File | null>(null);
    console.log("file in story", file);
    return <ImagePicker src={"https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"} onChange={setFile} />;
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    }} onUrlChange={url => {
      // Handle URL from media library
      console.log("Media library URL:", url);
    }} />;
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const k=["Default","WithInitialImage","WithMediaLibraryOption"];export{t as Default,a as WithInitialImage,s as WithMediaLibraryOption,k as __namedExportsOrder,_ as default};
