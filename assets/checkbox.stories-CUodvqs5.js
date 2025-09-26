import{r as s,j as t}from"./iframe-e6Pjwgff.js";import{C as a}from"./index-DNY5arM_.js";const D={title:"PAC Universal Plugin UI/Primitive/Checkbox",component:a,argTypes:{checked:{description:"Checked state of the checkbox",control:{type:"boolean"}},onChange:{description:"Function to call when checkbox state changes",action:"changed"},label:{description:"Label for the checkbox",control:{type:"text"}},disabled:{description:"Disable the checkbox",control:{type:"boolean"}}},args:{checked:!0,label:"Checkbox Label",disabled:!1}},r={render:e=>{const[c,h]=s.useState(e.checked);return s.useEffect(()=>{h(e.checked)},[e.checked]),t.jsx(a,{checked:c,onChange:h,label:e.label,disabled:e.disabled})}},n={render:()=>{const[e,c]=s.useState(!0);return t.jsx(a,{checked:e,onChange:c,label:"Accept terms"})}},o={render:()=>{const[e,c]=s.useState(!1);return t.jsx(a,{checked:e,onChange:c,label:"Disabled",disabled:!0})}},d={render:()=>{const[e,c]=s.useState(!1);return t.jsx(a,{checked:e,onChange:c,label:t.jsx("span",{style:{color:"#0078d4",fontWeight:600},children:"Custom Label"})})}};var l,k,b;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(args.checked);

    // Update checked state when args.checked changes
    useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);
    return <Checkbox checked={checked} onChange={setChecked} label={args.label} disabled={args.disabled} />;
  }
}`,...(b=(k=r.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var i,u,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Checkbox checked={checked} onChange={setChecked} label="Accept terms" />;
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var C,m,g;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} label="Disabled" disabled />;
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,f,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox checked={checked} onChange={setChecked} label={<span style={{
      color: "#0078d4",
      fontWeight: 600
    }}>\r
            Custom Label\r
          </span>} />;
  }
}`,...(S=(f=d.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const y=["Default","WithLabel","Disabled","CustomLabel"];export{d as CustomLabel,r as Default,o as Disabled,n as WithLabel,y as __namedExportsOrder,D as default};
