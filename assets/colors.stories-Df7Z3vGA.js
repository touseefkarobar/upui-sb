import{j as e,y as a}from"./iframe-B4VatSrF.js";const u=[{name:"--pac-upui-background",desc:"Background",group:"General-Light-Theme"},{name:"--pac-upui-heading",desc:"Heading",group:"General-Light-Theme"},{name:"--pac-upui-description",desc:"Description",group:"General-Light-Theme"},{name:"--pac-upui-button",desc:"Button",group:"General-Light-Theme"},{name:"--pac-upui-medium",desc:"Medium",group:"General-Light-Theme"},{name:"--pac-upui-icon",desc:"Icon",group:"General-Light-Theme"},{name:"--pac-upui-white",desc:"White",group:"General-Light-Theme"},{name:"--pac-upui-green-600",desc:"Green 600",group:"Green"},{name:"--pac-upui-green-500",desc:"Green 500",group:"Green"},{name:"--pac-upui-green-400",desc:"Green 400",group:"Green"},{name:"--pac-upui-green-300",desc:"Green 300",group:"Green"},{name:"--pac-upui-green-200",desc:"Green 200",group:"Green"},{name:"--pac-upui-green-100",desc:"Green 100",group:"Green"},{name:"--pac-upui-blue-600",desc:"Blue 600",group:"Blue"},{name:"--pac-upui-blue-500",desc:"Blue 500",group:"Blue"},{name:"--pac-upui-blue-400",desc:"Blue 400",group:"Blue"},{name:"--pac-upui-blue-300",desc:"Blue 300",group:"Blue"},{name:"--pac-upui-blue-200",desc:"Blue 200",group:"Blue"},{name:"--pac-upui-blue-100",desc:"Blue 100",group:"Blue"},{name:"--pac-upui-red-600",desc:"Red 600",group:"Red"},{name:"--pac-upui-red-500",desc:"Red 500",group:"Red"},{name:"--pac-upui-red-400",desc:"Red 400",group:"Red"},{name:"--pac-upui-red-300",desc:"Red 300",group:"Red"},{name:"--pac-upui-red-200",desc:"Red 200",group:"Red"},{name:"--pac-upui-red-100",desc:"Red 100",group:"Red"},{name:"--pac-upui-yellow-600",desc:"Yellow 600",group:"Yellow"},{name:"--pac-upui-yellow-500",desc:"Yellow 500",group:"Yellow"},{name:"--pac-upui-yellow-400",desc:"Yellow 400",group:"Yellow"},{name:"--pac-upui-yellow-300",desc:"Yellow 300",group:"Yellow"},{name:"--pac-upui-yellow-200",desc:"Yellow 200",group:"Yellow"},{name:"--pac-upui-yellow-100",desc:"Yellow 100",group:"Yellow"}],t=[{name:"--pac-upui-background",desc:"Background",group:"General-Dark-Theme",color:"#0f172a"},{name:"--pac-upui-heading",desc:"Heading",group:"General-Dark-Theme",color:"#f1f5f9"},{name:"--pac-upui-description",desc:"Description",group:"General-Dark-Theme",color:"#94a3b8"},{name:"--pac-upui-button",desc:"Button",group:"General-Dark-Theme",color:"#ffffff"},{name:"--pac-upui-medium",desc:"Medium",group:"General-Dark-Theme",color:"#64748b"},{name:"--pac-upui-icon",desc:"Icon",group:"General-Dark-Theme",color:"#94a3b8"},{name:"--pac-upui-white",desc:"White",group:"General-Dark-Theme",color:"#1e293b"}],m={title:"PAC Universal Plugin UI/Globals/ColorPalette"},i=()=>{const c=u.reduce((n,r)=>{var o;return n[r.group]=n[r.group]||[],(o=n[r.group])==null||o.push(r),n},{});return e.jsxs("div",{style:{fontFamily:"sans-serif"},children:[e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("h3",{style:{margin:"16px 0 8px"},children:"Dark Theme"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:t.map(n=>e.jsxs("div",{style:{minWidth:120,display:"flex",flexDirection:"column",borderRadius:8,gap:8,border:"1px solid #e0e0e0",overflow:"hidden"},children:[e.jsx("div",{style:{width:"100%",height:80,background:n.color}}),e.jsxs("div",{style:{padding:"12px",display:"flex",flexDirection:"column",gap:4},children:[e.jsx("div",{style:{fontSize:14,fontWeight:"600",color:"var(--pac-upui-description)"},children:n.desc}),e.jsx("div",{style:{fontSize:14,color:"var(--pac-upui-medium)",fontWeight:"400",textTransform:"uppercase"},children:n.color}),e.jsxs("code",{style:{fontSize:12,color:"#888"},children:["var(",n.name,")"]})]})]},n.name))})]}),Object.entries(c).map(([n,r])=>e.jsxs("div",{style:{marginBottom:32},children:[e.jsx("h3",{style:{margin:"16px 0 8px"},children:n}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:r.map(o=>e.jsxs("div",{style:{minWidth:120,display:"flex",flexDirection:"column",borderRadius:8,gap:8,border:"1px solid #e0e0e0",overflow:"hidden"},children:[e.jsx("div",{style:{width:"100%",height:80,background:`var(${o.name})`}}),e.jsxs("div",{style:{padding:"12px",display:"flex",flexDirection:"column",gap:4},children:[e.jsx("div",{style:{fontSize:14,fontWeight:"600",color:"var(--pac-upui-description)"},children:o.desc}),e.jsx("div",{style:{fontSize:14,color:"var(--pac-upui-medium)",fontWeight:"400",textTransform:"uppercase"},children:getComputedStyle(document.documentElement).getPropertyValue(o.name)||""}),e.jsxs("code",{style:{fontSize:12,color:"#888"},onClick:()=>{navigator.clipboard.writeText("XYUZ").then(()=>{a.success("Icon name copied to clipboard!")},()=>{a.error("Failed to copy icon name.")})},children:["var(",o.name,")"]})]})]},o.name))})]},n))]})};i.__docgenInfo={description:"",methods:[],displayName:"ColorPalette"};var l,p,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const grouped = COLORS.reduce((acc, color) => {
    acc[color.group] = acc[color.group] || [];
    acc[color.group]?.push(color);
    return acc;
  }, {} as Record<string, typeof COLORS>);
  return <div style={{
    fontFamily: "sans-serif"
  }}>
      <div style={{
      marginBottom: 32
    }}>
        <h3 style={{
        margin: "16px 0 8px"
      }}>Dark Theme</h3>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24
      }}>
          {DARK_COLORS.map(color => <div key={color.name} style={{
          minWidth: 120,
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
          borderRadius: 8,
          gap: 8,
          border: "1px solid #e0e0e0",
          overflow: "hidden"
        }}>
              <div style={{
            width: "100%",
            height: 80,
            background: color.color
          }} />

              <div style={{
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: 4
          }}>
                <div style={{
              fontSize: 14,
              fontWeight: "600",
              color: "var(--pac-upui-description)"
            }}>
                  {color.desc}
                </div>

                <div style={{
              fontSize: 14,
              color: "var(--pac-upui-medium)",
              fontWeight: "400",
              textTransform: "uppercase"
            }}>
                  {color.color}
                </div>
                <code style={{
              fontSize: 12,
              color: "#888"
            }}>
                  var({color.name})
                </code>
              </div>
            </div>)}
        </div>
      </div>
      {Object.entries(grouped).map(([group, colors]) => <div key={group} style={{
      marginBottom: 32
    }}>
          <h3 style={{
        margin: "16px 0 8px"
      }}>{group}</h3>
          <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24
      }}>
            {colors.map(color => <div key={color.name} style={{
          minWidth: 120,
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
          borderRadius: 8,
          gap: 8,
          border: "1px solid #e0e0e0",
          overflow: "hidden"
        }}>
                <div style={{
            width: "100%",
            height: 80,
            background: \`var(\${color.name})\`
          }} />

                <div style={{
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: 4
          }}>
                  <div style={{
              fontSize: 14,
              fontWeight: "600",
              color: "var(--pac-upui-description)"
            }}>
                    {color.desc}
                  </div>

                  <div style={{
              fontSize: 14,
              color: "var(--pac-upui-medium)",
              fontWeight: "400",
              textTransform: "uppercase"
            }}>
                    {getComputedStyle(document.documentElement).getPropertyValue(color.name) || ""}
                  </div>
                  <code style={{
              fontSize: 12,
              color: "#888"
            }} onClick={() => {
              navigator.clipboard.writeText("XYUZ").then(() => {
                toast.success("Icon name copied to clipboard!");
              }, () => {
                toast.error("Failed to copy icon name.");
              });
            }}>
                    var({color.name})
                  </code>
                </div>
              </div>)}
          </div>
        </div>)}
    </div>;
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const g=["ColorPalette"];export{i as ColorPalette,g as __namedExportsOrder,m as default};
