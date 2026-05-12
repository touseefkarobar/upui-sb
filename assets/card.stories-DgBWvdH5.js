import{j as e}from"./iframe-D_EB6DsR.js";import{C as r}from"./index-D948NmTd.js";const I={title:"PAC Universal Plugin UI/Primitive/Card",component:r,argTypes:{bordered:{description:"Whether the card has a visible border",control:{type:"boolean"}},rounded:{description:"Whether the card has rounded corners",control:{type:"boolean"}},padded:{description:"Whether the card has internal padding (boolean or custom CSS value)",control:{type:"boolean"}},shadow:{description:"Shadow depth of the card",control:{type:"select"},options:["none","small","medium","large"]},hoverable:{description:"Whether the card shows a hover effect",control:{type:"boolean"}},children:{table:{disable:!0}}},args:{bordered:!1,rounded:!0,padded:!0,shadow:"small",hoverable:!1}},H=e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 8px"},children:"Card Title"}),e.jsx("p",{style:{margin:0,color:"#666"},children:"This is some sample content inside the card component."})]}),n={render:a=>e.jsx(r,{...a,children:H})},s={args:{bordered:!0,shadow:"none"},render:a=>e.jsx(r,{...a,children:H})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(r,{shadow:"none",children:e.jsx("p",{style:{margin:0},children:"No shadow"})}),e.jsx(r,{shadow:"small",children:e.jsx("p",{style:{margin:0},children:"Small shadow"})}),e.jsx(r,{shadow:"medium",children:e.jsx("p",{style:{margin:0},children:"Medium shadow"})}),e.jsx(r,{shadow:"large",children:e.jsx("p",{style:{margin:0},children:"Large shadow"})})]})},o={args:{hoverable:!0},render:a=>e.jsxs(r,{...a,children:[e.jsx("h3",{style:{margin:"0 0 8px"},children:"Hoverable Card"}),e.jsx("p",{style:{margin:0,color:"#666"},children:"Hover over this card to see the hover effect."})]})},t={render:()=>e.jsxs(r,{hoverable:!0,onClick:()=>alert("Card clicked!"),children:[e.jsx("h3",{style:{margin:"0 0 8px"},children:"Clickable Card"}),e.jsx("p",{style:{margin:0,color:"#666"},children:"Click this card to trigger an action. It is focusable and keyboard accessible."})]})},l={args:{padded:!1,bordered:!0},render:a=>e.jsxs(r,{...a,children:[e.jsx("img",{src:"https://placehold.co/400x200/e2e8f0/64748b?text=Card+Image",alt:"Placeholder",style:{width:"100%",display:"block",borderRadius:"8px 8px 0 0"}}),e.jsxs("div",{style:{padding:16},children:[e.jsx("h3",{style:{margin:"0 0 8px"},children:"Card with No Padding"}),e.jsx("p",{style:{margin:0,color:"#666"},children:"The card itself has no padding, allowing content like images to go edge-to-edge."})]})]})};var i,c,h;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Card {...args}>{sampleContent}</Card>
}`,...(h=(c=n.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var p,m,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    bordered: true,
    shadow: "none"
  },
  render: args => <Card {...args}>{sampleContent}</Card>
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,x,C;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 24
  }}>
      <Card shadow="none">
        <p style={{
        margin: 0
      }}>No shadow</p>
      </Card>
      <Card shadow="small">
        <p style={{
        margin: 0
      }}>Small shadow</p>
      </Card>
      <Card shadow="medium">
        <p style={{
        margin: 0
      }}>Medium shadow</p>
      </Card>
      <Card shadow="large">
        <p style={{
        margin: 0
      }}>Large shadow</p>
      </Card>
    </div>
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var b,y,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    hoverable: true
  },
  render: args => <Card {...args}>
      <h3 style={{
      margin: "0 0 8px"
    }}>Hoverable Card</h3>
      <p style={{
      margin: 0,
      color: "#666"
    }}>
        Hover over this card to see the hover effect.
      </p>
    </Card>
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var v,j,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Card hoverable onClick={() => alert("Card clicked!")}>
      <h3 style={{
      margin: "0 0 8px"
    }}>Clickable Card</h3>
      <p style={{
      margin: 0,
      color: "#666"
    }}>
        Click this card to trigger an action. It is focusable and keyboard accessible.
      </p>
    </Card>
}`,...(f=(j=t.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var k,S,P;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    padded: false,
    bordered: true
  },
  render: args => <Card {...args}>
      <img src="https://placehold.co/400x200/e2e8f0/64748b?text=Card+Image" alt="Placeholder" style={{
      width: "100%",
      display: "block",
      borderRadius: "8px 8px 0 0"
    }} />
      <div style={{
      padding: 16
    }}>
        <h3 style={{
        margin: "0 0 8px"
      }}>Card with No Padding</h3>
        <p style={{
        margin: 0,
        color: "#666"
      }}>
          The card itself has no padding, allowing content like images to go edge-to-edge.
        </p>
      </div>
    </Card>
}`,...(P=(S=l.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const T=["Default","Bordered","WithShadow","Hoverable","Clickable","NoPadding"];export{s as Bordered,t as Clickable,n as Default,o as Hoverable,l as NoPadding,d as WithShadow,T as __namedExportsOrder,I as default};
