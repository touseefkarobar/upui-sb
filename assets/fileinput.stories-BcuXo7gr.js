import{r as n,j as s}from"./iframe-BZQVp5bL.js";import{F as i}from"./index-DYYhzsFZ.js";import"./index-DmfKYrIy.js";import"./CloseIcon-CY1ARLA0.js";import"./type-Bc9hys3F.js";import"./FilledIcon-bNDtp0PL.js";import"./Text-Ctf8_LwY.js";import"./index-BPVxbeNh.js";const L={title:"PAC Universal Plugin UI/Primitive/FileInput",component:i,argTypes:{listFiles:{control:{type:"boolean"},description:"Show list of selected files"},multiple:{control:{type:"boolean"},description:"Allow multiple file selection"},accept:{control:{type:"text"},description:"File type filter (e.g., 'image/*,.pdf')"},placeholder:{control:{type:"text"},description:"Placeholder text for the button"},disabled:{control:{type:"boolean"},description:"Disable the file input"}},parameters:{docs:{description:{component:`FileInput is a custom file input component with styled button and optional file listing.

Usage:
\`\`\`tsx
import FileInput from "@karobar_solutions/pac-universal-plugin-ui";

const [files, setFiles] = useState<File[]>([]);

<FileInput
  selectedFiles={files}
  onChangeSelection={setFiles}
  listFiles={true}
  multiple={true}
  accept="image/*,.pdf"
  placeholder="Choose files..."
/>
\`\`\``}}}},r={args:{listFiles:!0,multiple:!1,placeholder:"Choose file...",disabled:!1},render:l=>{const[e,t]=n.useState([]);return console.log(e),s.jsx("div",{children:s.jsx(i,{selectedFiles:e,onChangeSelection:t,...l})})}},a={args:{listFiles:!0,multiple:!0,placeholder:"Choose multiple files...",disabled:!1},render:l=>{const[e,t]=n.useState([]);return s.jsx("div",{children:s.jsx(i,{selectedFiles:e,onChangeSelection:t,...l})})}},o={args:{listFiles:!0,multiple:!1,placeholder:"Choose file...",disabled:!1},render:l=>{const[e,t]=n.useState([]);return s.jsx("div",{children:s.jsx(i,{selectedFiles:e,onChangeSelection:t,...l})})}},c={args:{listFiles:!0,multiple:!0,accept:"image/*",placeholder:"Choose images...",disabled:!1},render:l=>{const[e,t]=n.useState([]);return s.jsx("div",{children:s.jsx(i,{selectedFiles:e,onChangeSelection:t,...l})})}},d={args:{listFiles:!1,multiple:!1,placeholder:"File input disabled",disabled:!0},render:l=>{const[e,t]=n.useState([]);return s.jsx("div",{children:s.jsx(i,{selectedFiles:e,onChangeSelection:t,...l})})}};var p,u,F;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    listFiles: true,
    multiple: false,
    placeholder: "Choose file...",
    disabled: false
  },
  render: (args: any) => {
    const [files, setFiles] = useState<File[]>([]);
    console.log(files);
    return <div>
        <FileInput selectedFiles={files} onChangeSelection={setFiles} {...args} />
      </div>;
  }
}`,...(F=(u=r.parameters)==null?void 0:u.docs)==null?void 0:F.source}}};var m,f,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    listFiles: true,
    multiple: true,
    placeholder: "Choose multiple files...",
    disabled: false
  },
  render: (args: any) => {
    const [files, setFiles] = useState<File[]>([]);
    return <div>
        <FileInput selectedFiles={files} onChangeSelection={setFiles} {...args} />
      </div>;
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,S,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    listFiles: true,
    multiple: false,
    placeholder: "Choose file...",
    disabled: false
  },
  render: (args: any) => {
    const [files, setFiles] = useState<File[]>([]);
    return <div>
        <FileInput selectedFiles={files} onChangeSelection={setFiles} {...args} />
      </div>;
  }
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var C,x,v;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    listFiles: true,
    multiple: true,
    accept: "image/*",
    placeholder: "Choose images...",
    disabled: false
  },
  render: (args: any) => {
    const [files, setFiles] = useState<File[]>([]);
    return <div>
        <FileInput selectedFiles={files} onChangeSelection={setFiles} {...args} />
      </div>;
  }
}`,...(v=(x=c.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,I,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    listFiles: false,
    multiple: false,
    placeholder: "File input disabled",
    disabled: true
  },
  render: (args: any) => {
    const [files, setFiles] = useState<File[]>([]);
    return <div>
        <FileInput selectedFiles={files} onChangeSelection={setFiles} {...args} />
      </div>;
  }
}`,...(j=(I=d.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const M=["Default","MultipleFiles","WithFileList","ImageOnly","Disabled"];export{r as Default,d as Disabled,c as ImageOnly,a as MultipleFiles,o as WithFileList,M as __namedExportsOrder,L as default};
