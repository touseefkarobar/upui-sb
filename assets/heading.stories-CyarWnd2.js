import{j as r}from"./iframe-Bjw1izuO.js";import{H as i}from"./Heading-5pfV_722.js";const c={title:"PAC Universal Plugin UI/Typography/Heading",component:i,tags:["autodocs"],argTypes:{level:{description:"Select Heading Level from H1 to H6",control:{type:"select"},options:[1,2,3,4,5,6]},weight:{description:"Select font weight for heading",control:{type:"select"},options:["bold","light","regular","medium","semibold","extrabold"]},color:{description:"Select Custom Color for Heading",control:{type:"color"}},children:{description:"Heading Text",control:{type:"text"}}},args:{level:1,weight:"bold",color:"var(--pac-upui-heading)",children:"This is Heading Text"}},o={render:e=>r.jsx("div",{children:r.jsx(i,{level:e.level,weight:e.weight,color:e.color,style:e.style,className:e.className,children:e.children})})};var t,l,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <div>
      <Heading level={args.level} weight={args.weight} color={args.color} style={args.style} className={args.className}>
        {args.children}
      </Heading>
    </div>
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const d=["Sample"];export{o as Sample,d as __namedExportsOrder,c as default};
