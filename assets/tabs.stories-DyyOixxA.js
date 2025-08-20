import{j as e,r as h}from"./iframe-Dx3ork6N.js";import{T as t}from"./index-DCjxaLkT.js";import{S as b}from"./index-GlJgyPyO.js";const f={title:"PAC Universal Plugin UI/Primitive/Tab",component:t,argTypes:{value:{control:"text"},selected:{description:"value of selected tab",control:"text"},onSelected:{action:"selected"}},args:{value:"home",selected:"home"}},s={render:r=>e.jsx(t,{...r,children:"Home"})},n={render:()=>e.jsx(t,{value:"profile",selected:"profile",children:"Profile"})},a={render:()=>{const[r,o]=h.useState("");return e.jsxs(e.Fragment,{children:[e.jsxs(b,{direction:"horizontal",gap:8,children:[e.jsx(t,{value:"home",selected:r,onSelected:o,children:"home"}),e.jsx(t,{value:"about",selected:r,onSelected:o,children:"About"}),e.jsx(t,{value:"services",selected:r,onSelected:o,children:"services"})]}),e.jsxs("div",{style:{marginTop:16},children:["Selected: ",r??"none"]})]})}};var c,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Tab {...args}>Home</Tab>
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var i,m,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Tab value="profile" selected="profile">\r
      Profile\r
    </Tab>
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,S,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string>("");
    return <>\r
        <Stack direction="horizontal" gap={8}>\r
          <Tab value="home" selected={selected} onSelected={setSelected}>\r
            home\r
          </Tab>\r
          <Tab value="about" selected={selected} onSelected={setSelected}>\r
            About\r
          </Tab>\r
          <Tab value="services" selected={selected} onSelected={setSelected}>\r
            services\r
          </Tab>\r
        </Stack>\r
        <div style={{
        marginTop: 16
      }}>Selected: {selected ?? "none"}</div>\r
      </>;
  }
}`,...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const j=["Default","Selected","WithSelectionHandler"];export{s as Default,n as Selected,a as WithSelectionHandler,j as __namedExportsOrder,f as default};
