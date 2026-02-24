import{R as o,j as e}from"./iframe-CBGcgu9u.js";import{T as r}from"./index-DHZ4vP1w.js";import"./CloseIcon-DanjXDfh.js";import"./type-Bc9hys3F.js";const z={title:"PAC Universal Plugin UI/Primitive/Tag Input",component:r,tags:["autodocs"]},d={args:{placeholder:"Type an email address"},render:a=>{const[s,t]=o.useState([]);return e.jsx("div",{children:e.jsx(r,{...a,value:s,onChange:n=>{t(n),console.log("Tags changed:",n)}})})}},g={args:{placeholder:"Add more contacts"},render:a=>{const[s,t]=o.useState(["email@domain.com","support@domain.com"]);return e.jsx("div",{children:e.jsx(r,{...a,value:s,onChange:n=>{t(n),console.log("Tags changed:",n)}})})}},i={args:{placeholder:"Cannot edit in disabled state",disabled:!0},render:a=>e.jsx("div",{children:e.jsx(r,{...a,value:["email@domain.com","support@domain.com"],onChange:s=>{console.log("Disabled input tried to change:",s)}})})},l={args:{placeholder:"Enter email addresses",allowedList:["email"]},render:a=>{const[s,t]=o.useState([]);return e.jsx("div",{children:e.jsx(r,{...a,value:s,onChange:n=>{t(n)}})})}},c={args:{placeholder:"Enter IPv4 addresses",allowedList:["ip-address"]},render:a=>{const[s,t]=o.useState([]);return e.jsx("div",{children:e.jsx(r,{...a,value:s,onChange:n=>{t(n)}})})}},p={args:{placeholder:"Enter emails or IPv4 addresses",allowedList:["email","ip-address"]},render:a=>{const[s,t]=o.useState([]);return e.jsx("div",{children:e.jsx(r,{...a,value:s,onChange:n=>{t(n)}})})}},u={args:{placeholder:"Any tag value is allowed",allowedList:void 0},render:a=>{const[s,t]=o.useState([]);return e.jsx("div",{children:e.jsx(r,{...a,value:s,onChange:n=>{t(n)}})})}};var m,T,h;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(T=d.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var v,x,I;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(x=g.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var C,S,R;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(S=i.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var j,y,P;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter email addresses",
    allowedList: ["email"]
  },
  render: (args: React.ComponentProps<typeof TagInput>) => {
    const [tags, setTags] = React.useState<string[]>([]);
    return <div>
        <TagInput {...args} value={tags} onChange={nextTags => {
        setTags(nextTags);
      }} />
      </div>;
  }
}`,...(P=(y=l.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var f,E,w;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter IPv4 addresses",
    allowedList: ["ip-address"]
  },
  render: (args: React.ComponentProps<typeof TagInput>) => {
    const [tags, setTags] = React.useState<string[]>([]);
    return <div>
        <TagInput {...args} value={tags} onChange={nextTags => {
        setTags(nextTags);
      }} />
      </div>;
  }
}`,...(w=(E=c.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var b,L,A;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter emails or IPv4 addresses",
    allowedList: ["email", "ip-address"]
  },
  render: (args: React.ComponentProps<typeof TagInput>) => {
    const [tags, setTags] = React.useState<string[]>([]);
    return <div>
        <TagInput {...args} value={tags} onChange={nextTags => {
        setTags(nextTags);
      }} />
      </div>;
  }
}`,...(A=(L=p.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var O,D,W;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    placeholder: "Any tag value is allowed",
    allowedList: undefined
  },
  render: (args: React.ComponentProps<typeof TagInput>) => {
    const [tags, setTags] = React.useState<string[]>([]);
    return <div>
        <TagInput {...args} value={tags} onChange={nextTags => {
        setTags(nextTags);
      }} />
      </div>;
  }
}`,...(W=(D=u.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const B=["Default","WithInitialTags","Disabled","EmailOnly","IpAddressOnly","EmailOrIp","WithoutRestriction"];export{d as Default,i as Disabled,l as EmailOnly,p as EmailOrIp,c as IpAddressOnly,g as WithInitialTags,u as WithoutRestriction,B as __namedExportsOrder,z as default};
