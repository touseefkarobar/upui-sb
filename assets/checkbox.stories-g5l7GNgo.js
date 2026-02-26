import{r as c,j as s}from"./iframe-3yMaT3T2.js";import{C as a}from"./index-Cm_oIC-g.js";const T={title:"PAC Universal Plugin UI/Primitive/Checkbox",component:a,argTypes:{checked:{description:"Checked state of the checkbox",control:{type:"boolean"}},onChange:{description:"Function to call when checkbox state changes",action:"changed"},label:{description:"Label for the checkbox",control:{type:"text"}},disabled:{description:"Disable the checkbox",control:{type:"boolean"}}},args:{checked:!0,label:"Checkbox Label",disabled:!1}},n={render:e=>{const[t,l]=c.useState(e.checked);return c.useEffect(()=>{l(e.checked)},[e.checked]),s.jsx(a,{checked:t,onChange:l,label:e.label,disabled:e.disabled})}},r={render:()=>{const[e,t]=c.useState(!0);return s.jsx(a,{checked:e,onChange:t,label:"Accept terms"})}},o={render:()=>{const[e,t]=c.useState(!1);return s.jsx(a,{checked:e,onChange:t,label:"Disabled",disabled:!0})}},d={render:()=>{const[e,t]=c.useState(!1);return s.jsx(a,{checked:e,onChange:t,label:s.jsx("span",{style:{color:"#0078d4",fontWeight:600},children:"Custom Label"})})}},h={render:()=>{const[e,t]=c.useState(!1);return s.jsx(a,{checked:e,label:"I understand that email delivery is handled by my SMTP service provider, not this plugin, and that this plugin only provides the connection settings. I have read the SMTP guide to understand how it works.",onChange:t})}};var i,k,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(args.checked);

    // Update checked state when args.checked changes
    useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);
    return <Checkbox checked={checked} onChange={setChecked} label={args.label} disabled={args.disabled} />;
  }
}`,...(u=(k=n.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var b,p,C;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Checkbox checked={checked} onChange={setChecked} label="Accept terms" />;
  }
}`,...(C=(p=r.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var m,g,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} label="Disabled" disabled />;
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,S,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} label={<span style={{
      color: "#0078d4",
      fontWeight: 600
    }}>
            Custom Label
          </span>} />;
  }
}`,...(y=(S=d.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var v,j,L;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} label={"I understand that email delivery is handled by my SMTP service provider, not this plugin, and that this plugin only provides the connection settings. I have read the SMTP guide to understand how it works."} onChange={setChecked} />;
  }
}`,...(L=(j=h.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};const w=["Default","WithLabel","Disabled","CustomLabel","WithText"];export{d as CustomLabel,n as Default,o as Disabled,r as WithLabel,h as WithText,w as __namedExportsOrder,T as default};
