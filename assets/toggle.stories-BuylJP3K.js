import{r as c,j as t}from"./iframe-BZQVp5bL.js";import{T as a}from"./index-bt08SUEP.js";const D={title:"PAC Universal Plugin UI/Primitive/Toggle",component:a,argTypes:{checked:{description:"Checked state of the toggle",control:"boolean"},onChange:{action:"changed"},label:{description:"Label for the toggle",control:"text"},disabled:{description:"Disable the toggle",control:"boolean"}},args:{checked:!1,label:"Toggle me",disabled:!1}},r={render:e=>{const[s,l]=c.useState(e.checked);return c.useEffect(()=>{l(e.checked)},[e.checked]),t.jsx(a,{checked:s,onChange:l,label:e.label,disabled:e.disabled})}},n={render:()=>{const[e,s]=c.useState(!0);return console.log("checked",e),t.jsx(a,{checked:e,onChange:s,label:"Enable feature"})}},o={render:()=>{const[e,s]=c.useState(!1);return t.jsx(a,{checked:e,onChange:s,label:"Disabled",disabled:!0})}},d={render:()=>{const[e,s]=c.useState(!1);return t.jsx(a,{checked:e,onChange:s,label:t.jsx("span",{style:{color:"#0078d4",fontWeight:600},children:"Custom Label"})})}};var h,u,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(args.checked);
    useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);
    return <Toggle checked={checked} onChange={setChecked} label={args.label} disabled={args.disabled} />;
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var i,k,b;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    console.log("checked", checked);
    return <Toggle checked={checked} onChange={setChecked} label="Enable feature" />;
  }
}`,...(b=(k=n.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var m,p,C;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Toggle checked={checked} onChange={setChecked} label="Disabled" disabled />;
  }
}`,...(C=(p=o.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var f,S,x;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Toggle checked={checked} onChange={setChecked} label={<span style={{
      color: "#0078d4",
      fontWeight: 600
    }}>
            Custom Label
          </span>} />;
  }
}`,...(x=(S=d.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const E=["Default","WithLabel","Disabled","CustomLabel"];export{d as CustomLabel,r as Default,o as Disabled,n as WithLabel,E as __namedExportsOrder,D as default};
