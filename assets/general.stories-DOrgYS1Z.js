import{j as e}from"./iframe-DR19B53t.js";const a=[{name:"--pac-upui-space-xsmall",desc:"Extra Small"},{name:"--pac-upui-space-small",desc:"Small"},{name:"--pac-upui-space-medium",desc:"Medium"},{name:"--pac-upui-space-large",desc:"Large"},{name:"--pac-upui-space-xlarge",desc:"Extra Large"},{name:"--pac-upui-space-2xlarge",desc:"2x Large"},{name:"--pac-upui-space-3xlarge",desc:"3x Large"}],s=[{name:"--pac-upui-width-sidebar",desc:"Sidebar Width"},{name:"--pac-upui-width-card",desc:"Card Width"}],o={title:"PAC Universal Plugin UI/Globals/Variables"},t=()=>e.jsxs("div",{style:{fontFamily:"sans-serif",maxWidth:600},children:[e.jsx("h3",{children:"Spacing Variables"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",marginBottom:32},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left",borderBottom:"1px solid #eee",padding:8},children:"Name"}),e.jsx("th",{style:{textAlign:"left",borderBottom:"1px solid #eee",padding:8},children:"Description"}),e.jsx("th",{style:{textAlign:"left",borderBottom:"1px solid #eee",padding:8},children:"Value"})]})}),e.jsx("tbody",{children:a.map(n=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:8},children:e.jsx("code",{children:n.name})}),e.jsx("td",{style:{padding:8},children:n.desc}),e.jsx("td",{style:{padding:8},children:getComputedStyle(document.documentElement).getPropertyValue(n.name)||""})]},n.name))})]}),e.jsx("h3",{children:"Sizing Variables"}),e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left",borderBottom:"1px solid #eee",padding:8},children:"Name"}),e.jsx("th",{style:{textAlign:"left",borderBottom:"1px solid #eee",padding:8},children:"Description"}),e.jsx("th",{style:{textAlign:"left",borderBottom:"1px solid #eee",padding:8},children:"Value"})]})}),e.jsx("tbody",{children:s.map(n=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:8},children:e.jsx("code",{children:n.name})}),e.jsx("td",{style:{padding:8},children:n.desc}),e.jsx("td",{style:{padding:8},children:getComputedStyle(document.documentElement).getPropertyValue(n.name)||""})]},n.name))})]})]});t.__docgenInfo={description:"",methods:[],displayName:"SpacingAndSizing"};var d,r,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => <div style={{
  fontFamily: "sans-serif",
  maxWidth: 600
}}>\r
    <h3>Spacing Variables</h3>\r
    <table style={{
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: 32
  }}>\r
      <thead>\r
        <tr>\r
          <th style={{
          textAlign: "left",
          borderBottom: "1px solid #eee",
          padding: 8
        }}>\r
            Name\r
          </th>\r
          <th style={{
          textAlign: "left",
          borderBottom: "1px solid #eee",
          padding: 8
        }}>\r
            Description\r
          </th>\r
          <th style={{
          textAlign: "left",
          borderBottom: "1px solid #eee",
          padding: 8
        }}>\r
            Value\r
          </th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        {SPACING_VARS.map(v => <tr key={v.name}>\r
            <td style={{
          padding: 8
        }}>\r
              <code>{v.name}</code>\r
            </td>\r
            <td style={{
          padding: 8
        }}>{v.desc}</td>\r
            <td style={{
          padding: 8
        }}>\r
              {getComputedStyle(document.documentElement).getPropertyValue(v.name) || ""}\r
            </td>\r
          </tr>)}\r
      </tbody>\r
    </table>\r
\r
    <h3>Sizing Variables</h3>\r
    <table style={{
    width: "100%",
    borderCollapse: "collapse"
  }}>\r
      <thead>\r
        <tr>\r
          <th style={{
          textAlign: "left",
          borderBottom: "1px solid #eee",
          padding: 8
        }}>\r
            Name\r
          </th>\r
          <th style={{
          textAlign: "left",
          borderBottom: "1px solid #eee",
          padding: 8
        }}>\r
            Description\r
          </th>\r
          <th style={{
          textAlign: "left",
          borderBottom: "1px solid #eee",
          padding: 8
        }}>\r
            Value\r
          </th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        {SIZING_VARS.map(v => <tr key={v.name}>\r
            <td style={{
          padding: 8
        }}>\r
              <code>{v.name}</code>\r
\r
            </td>\r
            <td style={{
          padding: 8
        }}>{v.desc}</td>\r
            <td style={{
          padding: 8
        }}>\r
              {getComputedStyle(document.documentElement).getPropertyValue(v.name) || ""}\r
\r
            </td>\r
          </tr>)}\r
      </tbody>\r
    </table>\r
  </div>`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const p=["SpacingAndSizing"];export{t as SpacingAndSizing,p as __namedExportsOrder,o as default};
