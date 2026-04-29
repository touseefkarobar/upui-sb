import{j as e}from"./iframe-a_Xm9z3c.js";import{C as u}from"./index-CDBoKOzt.js";const J={title:"PAC Universal Plugin UI/Data Display/ComplexityMeter",component:u,tags:["autodocs"],argTypes:{value:{description:"Complexity value (0-100)",control:{type:"range",min:0,max:100,step:1}},label:{description:"Custom label displayed below the percentage",control:{type:"text"}},size:{description:"Width of the meter in pixels",control:{type:"number",min:120,max:500,step:10}},animationDuration:{description:"Needle animation duration in milliseconds",control:{type:"number",min:0,max:3e3,step:100}},animateOnView:{description:"Animate the needle when the meter scrolls into view",control:{type:"boolean"}}},args:{value:50,label:"Moderate Complexity",size:240,animationDuration:1200,animateOnView:!0},parameters:{layout:"centered"}},a={args:{value:50,label:"Moderate Complexity"}},r={args:{value:21,label:"Low Complexity"}},o={args:{value:55,label:"Moderate Complexity"}},l={args:{value:81,label:"High Complexity"}},t={args:{value:99,label:"Ultra High Complexity"}},s={args:{value:0,label:"No Complexity"}},n={args:{value:100,label:"Maximum Complexity"}},i={args:{value:40,label:"Low-Moderate",size:160}},m={args:{value:72,label:"High Complexity",size:360}},p={args:{value:65}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:40,flexWrap:"wrap",justifyContent:"center"},children:[e.jsx(u,{value:21,label:"Low Complexity"}),e.jsx(u,{value:55,label:"Moderate Complexity"}),e.jsx(u,{value:81,label:"High Complexity"})]})};var d,x,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: 50,
    label: "Moderate Complexity"
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,C,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: 21,
    label: "Low Complexity"
  }
}`,...(v=(C=r.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var b,h,M;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 55,
    label: "Moderate Complexity"
  }
}`,...(M=(h=o.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var S,w,L;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 81,
    label: "High Complexity"
  }
}`,...(L=(w=l.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var f,H,z;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 99,
    label: "Ultra High Complexity"
  }
}`,...(z=(H=t.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var j,D,U;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 0,
    label: "No Complexity"
  }
}`,...(U=(D=s.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var N,A,O;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 100,
    label: "Maximum Complexity"
  }
}`,...(O=(A=n.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var W,E,F;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: 40,
    label: "Low-Moderate",
    size: 160
  }
}`,...(F=(E=i.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var P,V,Z;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: 72,
    label: "High Complexity",
    size: 360
  }
}`,...(Z=(V=m.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var _,I,R;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 65
  }
}`,...(R=(I=p.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var T,k,q;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 40,
    flexWrap: "wrap",
    justifyContent: "center"
  }}>
      <ComplexityMeter value={21} label="Low Complexity" />
      <ComplexityMeter value={55} label="Moderate Complexity" />
      <ComplexityMeter value={81} label="High Complexity" />
    </div>
}`,...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const K=["Default","LowComplexity","ModerateComplexity","HighComplexity","UltraHighComplexity","Zero","Full","SmallSize","LargeSize","NoLabel","AllLevels"];export{c as AllLevels,a as Default,n as Full,l as HighComplexity,m as LargeSize,r as LowComplexity,o as ModerateComplexity,p as NoLabel,i as SmallSize,t as UltraHighComplexity,s as Zero,K as __namedExportsOrder,J as default};
