import{R as x,j as e}from"./iframe-DT09OBbH.js";import{T as d}from"./index-RMXnfxcc.js";import"./CloseIcon-DT7s_0wo.js";import"./type-Bc9hys3F.js";const j={title:"PAC Universal Plugin UI/Primitive/Tag Input",component:d,tags:["autodocs"]},t={args:{placeholder:"Type an email address"},render:a=>{const[n,g]=x.useState([]);return e.jsx("div",{children:e.jsx(d,{...a,value:n,onChange:s=>{g(s),console.log("Tags changed:",s)}})})}},o={args:{placeholder:"Add more contacts"},render:a=>{const[n,g]=x.useState(["email@domain.com","support@domain.com"]);return e.jsx("div",{children:e.jsx(d,{...a,value:n,onChange:s=>{g(s),console.log("Tags changed:",s)}})})}},r={args:{placeholder:"Cannot edit in disabled state",disabled:!0},render:a=>e.jsx("div",{children:e.jsx(d,{...a,value:["email@domain.com","support@domain.com"],onChange:n=>{console.log("Disabled input tried to change:",n)}})})};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: "Type an email address"
  },
  render: (args: React.ComponentProps<typeof TagInput>) => {
    const [tags, setTags] = React.useState<string[]>([]);
    return <div>
        <TagInput {...args} value={tags} onChange={nextTags => {
        setTags(nextTags);
        console.log("Tags changed:", nextTags);
      }} />
      </div>;
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: "Add more contacts"
  },
  render: (args: React.ComponentProps<typeof TagInput>) => {
    const [tags, setTags] = React.useState<string[]>(["email@domain.com", "support@domain.com"]);
    return <div>
        <TagInput {...args} value={tags} onChange={nextTags => {
        setTags(nextTags);
        console.log("Tags changed:", nextTags);
      }} />
      </div>;
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var T,h,v;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: "Cannot edit in disabled state",
    disabled: true
  },
  render: (args: React.ComponentProps<typeof TagInput>) => {
    return <div>
        <TagInput {...args} value={["email@domain.com", "support@domain.com"]} onChange={nextTags => {
        console.log("Disabled input tried to change:", nextTags);
      }} />
      </div>;
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const R=["Default","WithInitialTags","Disabled"];export{t as Default,r as Disabled,o as WithInitialTags,R as __namedExportsOrder,j as default};
