import{j as e}from"./iframe-BIQ_52sL.js";const s=[{name:"--pac-upui-space-xsmall",desc:"Extra Small"},{name:"--pac-upui-space-small",desc:"Small"},{name:"--pac-upui-space-medium",desc:"Medium"},{name:"--pac-upui-space-large",desc:"Large"},{name:"--pac-upui-space-xlarge",desc:"Extra Large"},{name:"--pac-upui-space-2xlarge",desc:"2x Large"},{name:"--pac-upui-space-3xlarge",desc:"3x Large"}],i=[{name:"--pac-upui-width-sidebar",desc:"Sidebar Width"},{name:"--pac-upui-width-card",desc:"Card Width"}],o={title:"PAC Universal Plugin UI/Globals/Variables"},n=()=>e.jsxs("div",{style:{fontFamily:"sans-serif",maxWidth:600},children:[e.jsx("h3",{children:"Spacing Variables"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left",borderBottom:"1px solid #eee",padding:8},children:"Name"}),e.jsx("th",{style:{textAlign:"left",borderBottom:"1px solid #eee",padding:8},children:"Description"}),e.jsx("th",{style:{textAlign:"left",borderBottom:"1px solid #eee",padding:8},children:"Value"})]})}),e.jsx("tbody",{children:s.map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:8},children:e.jsx("code",{children:t.name})}),e.jsx("td",{style:{padding:8},children:t.desc}),e.jsx("td",{style:{padding:8},children:getComputedStyle(document.documentElement).getPropertyValue(t.name)||""})]},t.name))})]}),e.jsx("h3",{children:"Sizing Variables"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left",borderBottom:"1px solid #eee",padding:8},children:"Name"}),e.jsx("th",{style:{textAlign:"left",borderBottom:"1px solid #eee",padding:8},children:"Description"}),e.jsx("th",{style:{textAlign:"left",borderBottom:"1px solid #eee",padding:8},children:"Value"})]})}),e.jsx("tbody",{children:i.map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:8},children:e.jsx("code",{children:t.name})}),e.jsx("td",{style:{padding:8},children:t.desc}),e.jsx("td",{style:{padding:8},children:getComputedStyle(document.documentElement).getPropertyValue(t.name)||""})]},t.name))})]})]});n.__docgenInfo={description:"",methods:[],displayName:"Variables"};var d,l,a;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => <div style={{
  fontFamily: "sans-serif",
  maxWidth: 600
}}>
    <h3>Spacing Variables</h3>
    <table style={{
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: 32
  }}>
      <thead>
        <tr>
          <th style={{
          textAlign: "left",
          borderBottom: "1px solid #eee",
          padding: 8
        }}>
            Name
          </th>
          <th style={{
          textAlign: "left",
          borderBottom: "1px solid #eee",
          padding: 8
        }}>
            Description
          </th>
          <th style={{
          textAlign: "left",
          borderBottom: "1px solid #eee",
          padding: 8
        }}>
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        {SPACING_VARS.map(v => <tr key={v.name}>
            <td style={{
          padding: 8
        }}>
              <code>{v.name}</code>
            </td>
            <td style={{
          padding: 8
        }}>{v.desc}</td>
            <td style={{
          padding: 8
        }}>
              {getComputedStyle(document.documentElement).getPropertyValue(v.name) || ""}
            </td>
          </tr>)}
      </tbody>
    </table>

    <h3>Sizing Variables</h3>
    <table style={{
    width: "100%",
    borderCollapse: "collapse"
  }}>
      <thead>
        <tr>
          <th style={{
          textAlign: "left",
          borderBottom: "1px solid #eee",
          padding: 8
        }}>
            Name
          </th>
          <th style={{
          textAlign: "left",
          borderBottom: "1px solid #eee",
          padding: 8
        }}>
            Description
          </th>
          <th style={{
          textAlign: "left",
          borderBottom: "1px solid #eee",
          padding: 8
        }}>
            Value
          </th>
        </tr>
      </thead>
      <tbody>
        {SIZING_VARS.map(v => <tr key={v.name}>
            <td style={{
          padding: 8
        }}>
              <code>{v.name}</code>

            </td>
            <td style={{
          padding: 8
        }}>{v.desc}</td>
            <td style={{
          padding: 8
        }}>
              {getComputedStyle(document.documentElement).getPropertyValue(v.name) || ""}

            </td>
          </tr>)}
      </tbody>
    </table>
  </div>`,...(a=(l=n.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};const p=["Variables"];export{n as Variables,p as __namedExportsOrder,o as default};
