import{j as r}from"./iframe-kt3fQevv.js";import{E as n}from"./index-CbzSyOvq.js";const h={title:"PAC Universal Plugin UI/Primitive/ErrorBoundary",component:n,tags:["autodocs"],argTypes:{fallback:{description:"Custom fallback UI to display when an error is caught",control:!1},onError:{description:"Callback invoked when an error is caught",action:"error caught"}},parameters:{docs:{description:{component:"ErrorBoundary catches JavaScript errors in its child component tree and displays a fallback UI instead of crashing the whole application."}}}},e={render:()=>r.jsx(n,{children:r.jsxs("div",{style:{padding:"16px",border:"1px solid #e0e0e0",borderRadius:"8px"},children:[r.jsx("h3",{style:{margin:"0 0 8px"},children:"Everything is fine"}),r.jsx("p",{style:{margin:0},children:"This content renders normally because no error was thrown."})]})})},p=()=>{throw new Error("Test error: Something went wrong!")},o={render:()=>r.jsx(n,{onError:l=>console.log("Caught:",l.message),children:r.jsx(p,{})})};var s,a,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <ErrorBoundary>
      <div style={{
      padding: "16px",
      border: "1px solid #e0e0e0",
      borderRadius: "8px"
    }}>
        <h3 style={{
        margin: "0 0 8px"
      }}>Everything is fine</h3>
        <p style={{
        margin: 0
      }}>
          This content renders normally because no error was thrown.
        </p>
      </div>
    </ErrorBoundary>
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var i,d,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <ErrorBoundary onError={error => console.log("Caught:", error.message)}>
      <BuggyComponent />
    </ErrorBoundary>
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const g=["Default","WithError"];export{e as Default,o as WithError,g as __namedExportsOrder,h as default};
