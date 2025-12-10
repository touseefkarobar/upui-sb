import{j as t}from"./iframe-BIQ_52sL.js";import{T as a}from"./TextLink-CBpQRWyq.js";const l={title:"PAC Universal Plugin UI/Typography/TextLink",component:a,tags:["autodocs"],argTypes:{href:{description:"URL",control:{type:"text"}},target:{description:"Target to Open the link",control:{type:"select"},options:["_blank","_self","_parent"]},children:{description:"Link Text",control:{type:"text"}},color:{description:"Specify Custom Color for link text",control:{type:"color"}}},args:{href:"https://www.google.com/",target:"_blank",children:"Click to Open Google"}},r={render:e=>t.jsx("div",{children:t.jsx(a,{target:e.target,href:e.href,color:e.color,children:e.children})})};var o,n,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div>
      <TextLink target={args.target} href={args.href} color={args.color}>
        {args.children}
      </TextLink>
    </div>
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const p=["Sample"];export{r as Sample,p as __namedExportsOrder,l as default};
