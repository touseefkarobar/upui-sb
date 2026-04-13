import{j as n}from"./iframe-YWs4K4M3.js";import{P as e}from"./index-BqYDeN8y.js";import{S as h}from"./index-DwC1gme3.js";import"./useOutsideToggle-D6WyoedE.js";const u={title:"PAC Universal Plugin UI/Composite/Popover",component:e,argTypes:{className:{description:"Custom CSS class for the popover wrapper",control:{type:"text"}}},parameters:{docs:{description:{component:`Popover is a compound component for displaying floating content anchored to a trigger.

Usage:
\`\`\`tsx
import Popover from "@karobar_solutions/pac-universal-plugin-ui";

<Popover>
  <Popover.Trigger>Click me</Popover.Trigger>
  <Popover.Content>Popover content</Popover.Content>
</Popover>
\`\`\``}}}},t={render:()=>n.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:n.jsxs(e,{children:[n.jsx(e.Trigger,{children:n.jsx("button",{type:"button",children:"Toggle Popover"})}),n.jsx(e.Content,{children:n.jsxs("div",{style:{padding:16,minWidth:200},children:[n.jsx("h4",{style:{margin:"0 0 8px"},children:"Popover Title"}),n.jsx("p",{style:{margin:0,color:"#666"},children:"This is the popover content. Click the trigger or press Escape to close."})]})})]})})},o={render:()=>n.jsxs("div",{style:{padding:120,display:"flex",flexWrap:"wrap",gap:80,justifyContent:"center"},children:[n.jsxs(e,{children:[n.jsx(e.Trigger,{children:n.jsx("button",{type:"button",children:"Bottom"})}),n.jsx(e.Content,{side:"bottom",children:n.jsx("div",{style:{padding:12,minWidth:160},children:"Content below the trigger."})})]}),n.jsxs(e,{children:[n.jsx(e.Trigger,{children:n.jsx("button",{type:"button",children:"Top"})}),n.jsx(e.Content,{side:"top",children:n.jsx("div",{style:{padding:12,minWidth:160},children:"Content above the trigger."})})]}),n.jsxs(e,{children:[n.jsx(e.Trigger,{children:n.jsx("button",{type:"button",children:"Left"})}),n.jsx(e.Content,{side:"left",children:n.jsx("div",{style:{padding:12,minWidth:160},children:"Content to the left."})})]}),n.jsxs(e,{children:[n.jsx(e.Trigger,{children:n.jsx("button",{type:"button",children:"Right"})}),n.jsx(e.Content,{side:"right",children:n.jsx("div",{style:{padding:12,minWidth:160},children:"Content to the right."})})]})]})},r={render:()=>n.jsx("div",{style:{padding:100,display:"flex",justifyContent:"center"},children:n.jsxs(e,{children:[n.jsx(e.Trigger,{children:n.jsx("button",{type:"button",children:"Edit Settings"})}),n.jsx(e.Content,{side:"bottom",align:"start",children:n.jsxs("div",{style:{padding:16,minWidth:260},children:[n.jsx("h4",{style:{margin:"0 0 12px"},children:"Settings"}),n.jsxs(h,{direction:"vertical",gap:12,children:[n.jsxs("div",{children:[n.jsx("label",{htmlFor:"popover-name",style:{display:"block",marginBottom:4,fontSize:14},children:"Name"}),n.jsx("input",{id:"popover-name",type:"text",placeholder:"Enter name",style:{width:"100%",padding:"6px 8px",boxSizing:"border-box"}})]}),n.jsxs("div",{children:[n.jsx("label",{htmlFor:"popover-email",style:{display:"block",marginBottom:4,fontSize:14},children:"Email"}),n.jsx("input",{id:"popover-email",type:"email",placeholder:"Enter email",style:{width:"100%",padding:"6px 8px",boxSizing:"border-box"}})]}),n.jsx("button",{type:"button",style:{alignSelf:"flex-end",padding:"6px 16px"},children:"Save"})]})]})})]})})};var i,p,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Popover>
        <Popover.Trigger>
          <button type="button">Toggle Popover</button>
        </Popover.Trigger>
        <Popover.Content>
          <div style={{
          padding: 16,
          minWidth: 200
        }}>
            <h4 style={{
            margin: "0 0 8px"
          }}>Popover Title</h4>
            <p style={{
            margin: 0,
            color: "#666"
          }}>
              This is the popover content. Click the trigger or press Escape to close.
            </p>
          </div>
        </Popover.Content>
      </Popover>
    </div>
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var s,l,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 120,
    display: "flex",
    flexWrap: "wrap",
    gap: 80,
    justifyContent: "center"
  }}>
      <Popover>
        <Popover.Trigger>
          <button type="button">Bottom</button>
        </Popover.Trigger>
        <Popover.Content side="bottom">
          <div style={{
          padding: 12,
          minWidth: 160
        }}>Content below the trigger.</div>
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger>
          <button type="button">Top</button>
        </Popover.Trigger>
        <Popover.Content side="top">
          <div style={{
          padding: 12,
          minWidth: 160
        }}>Content above the trigger.</div>
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger>
          <button type="button">Left</button>
        </Popover.Trigger>
        <Popover.Content side="left">
          <div style={{
          padding: 12,
          minWidth: 160
        }}>Content to the left.</div>
        </Popover.Content>
      </Popover>

      <Popover>
        <Popover.Trigger>
          <button type="button">Right</button>
        </Popover.Trigger>
        <Popover.Content side="right">
          <div style={{
          padding: 12,
          minWidth: 160
        }}>Content to the right.</div>
        </Popover.Content>
      </Popover>
    </div>
}`,...(a=(l=o.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var g,c,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: "flex",
    justifyContent: "center"
  }}>
      <Popover>
        <Popover.Trigger>
          <button type="button">Edit Settings</button>
        </Popover.Trigger>
        <Popover.Content side="bottom" align="start">
          <div style={{
          padding: 16,
          minWidth: 260
        }}>
            <h4 style={{
            margin: "0 0 12px"
          }}>Settings</h4>
            <Stack direction="vertical" gap={12}>
              <div>
                <label htmlFor="popover-name" style={{
                display: "block",
                marginBottom: 4,
                fontSize: 14
              }}>
                  Name
                </label>
                <input id="popover-name" type="text" placeholder="Enter name" style={{
                width: "100%",
                padding: "6px 8px",
                boxSizing: "border-box"
              }} />
              </div>
              <div>
                <label htmlFor="popover-email" style={{
                display: "block",
                marginBottom: 4,
                fontSize: 14
              }}>
                  Email
                </label>
                <input id="popover-email" type="email" placeholder="Enter email" style={{
                width: "100%",
                padding: "6px 8px",
                boxSizing: "border-box"
              }} />
              </div>
              <button type="button" style={{
              alignSelf: "flex-end",
              padding: "6px 16px"
            }}>
                Save
              </button>
            </Stack>
          </div>
        </Popover.Content>
      </Popover>
    </div>
}`,...(v=(c=r.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};const P=["Default","Positioning","WithForm"];export{t as Default,o as Positioning,r as WithForm,P as __namedExportsOrder,u as default};
