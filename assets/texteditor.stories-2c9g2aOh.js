import{r as i,j as a}from"./iframe-DaiuD6e_.js";import{T as s}from"./index-D_LF9sKj.js";import"./index-CgMrOed0.js";import"./Text-C6NzeZge.js";const f={title:"PAC Universal Plugin UI/Primitive/TextEditor",component:s,parameters:{layout:"padded"}},l="",d=async e=>(await new Promise(t=>window.setTimeout(t,500)),e.type.startsWith("image/")?`https://picsum.photos/seed/${encodeURIComponent(e.name)}/300/200`:`https://example.com/uploads/${encodeURIComponent(e.name)}`),w=async()=>window.confirm("Simulate picking an image from the Media Library?")?(await new Promise(t=>window.setTimeout(t,500)),{url:`https://picsum.photos/seed/${encodeURIComponent(String(Date.now()))}/300/200`,alt:"Media library image"}):null,o={render:()=>{const[e,t]=i.useState(l);return console.log("Editor Output:",e),a.jsx("div",{children:a.jsx(s,{placeholder:"Description",value:e,onChange:t,onFileUpload:d})})}},n={render:()=>{const[e,t]=i.useState(l);return a.jsx("div",{children:a.jsx(s,{placeholder:"Description",value:e,onChange:t,onFileUpload:d,showMediaLibrary:!0,onOpenMediaLibrary:w})})}},r={render:()=>{const[e,t]=i.useState(l);return a.jsx(s,{value:e,onChange:t,onFileUpload:d,enableModeSwitch:!0})}};var u,c,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,h,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(defaultContent);
    return <div>
        <TextEditor placeholder="Description" value={value} onChange={setValue} onFileUpload={mockUpload} showMediaLibrary onOpenMediaLibrary={mockOpenMediaLibrary} />
      </div>;
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,x,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(defaultContent);
    return <TextEditor value={value} onChange={setValue} onFileUpload={mockUpload}
    // allowEdit={false}
    enableModeSwitch={true}
    // maxHeight={177}
    />;
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const M=["Default","WithMediaLibrary","ReadOnly"];export{o as Default,r as ReadOnly,n as WithMediaLibrary,M as __namedExportsOrder,f as default};
