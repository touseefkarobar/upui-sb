import{j as e,r as h}from"./iframe-oPkPdY_c.js";import{T as r}from"./index-9bSdyKHe.js";import{S as b}from"./index-DlLvfeFo.js";const f={title:"PAC Universal Plugin UI/Primitive/Tab",component:r,argTypes:{value:{control:"text"},selected:{description:"value of selected tab",control:"text"},onSelected:{action:"selected"}},args:{value:"home",selected:"home"}},s={render:t=>e.jsx(r,{...t,children:"Home"})},n={render:()=>e.jsx(r,{value:"profile",selected:"profile",children:"Profile"})},a={render:()=>{const[t,o]=h.useState("");return e.jsxs(e.Fragment,{children:[e.jsxs(b,{direction:"horizontal",gap:8,children:[e.jsx(r,{value:"home",selected:t,onSelected:o,children:"home"}),e.jsx(r,{value:"about",selected:t,onSelected:o,children:"About"}),e.jsx(r,{value:"services",selected:t,onSelected:o,children:"services"})]}),e.jsxs("div",{style:{marginTop:16},children:["Selected: ",t??"none"]})]})}};var c,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Tab {...args}>Home</Tab>
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var i,m,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Tab value="profile" selected="profile">
      Profile
    </Tab>
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,S,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string>("");
    return <>
        <Stack direction="horizontal" gap={8}>
          <Tab value="home" selected={selected} onSelected={setSelected}>
            home
          </Tab>
          <Tab value="about" selected={selected} onSelected={setSelected}>
            About
          </Tab>
          <Tab value="services" selected={selected} onSelected={setSelected}>
            services
          </Tab>
        </Stack>
        <div style={{
        marginTop: 16
      }}>Selected: {selected ?? "none"}</div>
      </>;
  }
}`,...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const j=["Default","Selected","WithSelectionHandler"];export{s as Default,n as Selected,a as WithSelectionHandler,j as __namedExportsOrder,f as default};
