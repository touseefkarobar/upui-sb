import{r,j as n}from"./iframe-CpeAJN_4.js";import{D as v,a as C,b as y,c as g,d as h,e as b,f,g as I,h as D,i as S,j,k as A,l as k,m as H}from"./DiviExperienceHelperIcon-DaesSZZL.js";import{P as T}from"./PACLogo-BXhuu9KW.js";import{C as P}from"./CopyIcon-BCDxR3wG.js";import"./type-Bc9hys3F.js";const R=[{name:"DiviAssistantIcon",Component:v},{name:"DiviCalendarIcon",Component:C},{name:"DiviCarouselMakerIcon",Component:y},{name:"DiviContactIcon",Component:g},{name:"DiviCustomFieldHeplerIcon",Component:h},{name:"DiviDynamicHelperIcon",Component:b},{name:"DiviExperienceHelperIcon",Component:f},{name:"DiviResponsiveHelperIcon",Component:I},{name:"DiviSearchHelperIcon",Component:D},{name:"DiviSocialSharingButtonsIcon",Component:S},{name:"DiviTableIcon",Component:j},{name:"DiviTabsMakerIcon",Component:A},{name:"DiviTaxonomyHelperIcon",Component:k},{name:"DiviTimerProIcon",Component:H},{name:"PACLogo",Component:T}],z={title:"PAC Universal Plugin UI/Icons/Plugins",parameters:{layout:"padded"}},o={render:()=>{const[i,p]=r.useState(""),[m,a]=r.useState(null),u=e=>{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.opacity="0",t.setAttribute("aria-hidden","true"),document.body.appendChild(t),t.select(),t.setSelectionRange(0,t.value.length);const x=document.execCommand("copy");document.body.removeChild(t),x&&(a(e),setTimeout(()=>a(null),1200))},s=R.filter(({name:e})=>e.toLowerCase().includes(i.toLowerCase().trim()));return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[n.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:n.jsx("input",{"aria-label":"Search plugin icons by name",placeholder:"Search icons...",value:i,onChange:e=>p(e.target.value),style:{padding:"8px 12px",borderRadius:8,border:"1px solid rgb(215,218,221)",minWidth:260}})}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:20,justifyContent:"center"},children:[s.map(({name:e,Component:t})=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"10px",border:"1px solid rgb(215, 218, 221)",padding:"6px",position:"relative"},children:[n.jsx("button",{type:"button",onClick:()=>u(e),style:{position:"absolute",top:"6px",right:"6px",cursor:"pointer",border:"none",background:"transparent",padding:2},title:`Copy ${e}`,children:n.jsx(P,{})}),n.jsx("div",{style:{display:"flex"},children:n.jsx(t,{})}),n.jsx("div",{children:e}),m===e?n.jsx("div",{style:{position:"absolute",bottom:"6px",background:"#1f2937",color:"white",padding:"4px 8px",borderRadius:4,fontSize:12},children:"Copied"}):null]},e)),s.length===0&&n.jsxs("div",{style:{gridColumn:"1 / -1",textAlign:"center"},children:["No icons match “",i,"”"]})]})]})}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState("");
    const [copied, setCopied] = useState<string | null>(null);
    const handleCopy = (name: string) => {
      const textArea = document.createElement("textarea");
      textArea.value = name;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      textArea.setAttribute("aria-hidden", "true");
      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, textArea.value.length);
      const success = document.execCommand("copy");
      document.body.removeChild(textArea);
      if (success) {
        setCopied(name);
        setTimeout(() => setCopied(null), 1200);
      }
    };
    const filteredIcons = icons.filter(({
      name
    }) => name.toLowerCase().includes(search.toLowerCase().trim()));
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
        <div style={{
        display: "flex",
        justifyContent: "flex-end"
      }}>
          <input aria-label="Search plugin icons by name" placeholder="Search icons..." value={search} onChange={e => setSearch(e.target.value)} style={{
          padding: "8px 12px",
          borderRadius: 8,
          border: "1px solid rgb(215,218,221)",
          minWidth: 260
        }} />
        </div>

        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: 20,
        justifyContent: "center"
      }}>
          {filteredIcons.map(({
          name,
          Component
        }) => <div key={name} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          border: "1px solid rgb(215, 218, 221)",
          padding: "6px",
          position: "relative"
        }}>
              <button type="button" onClick={() => handleCopy(name)} style={{
            position: "absolute",
            top: "6px",
            right: "6px",
            cursor: "pointer",
            border: "none",
            background: "transparent",
            padding: 2
          }} title={\`Copy \${name}\`}>
                <CopyIcon />
              </button>
              <div style={{
            display: "flex"
          }}>
                <Component />
              </div>
              <div>{name}</div>

              {copied === name ? <div style={{
            position: "absolute",
            bottom: "6px",
            background: "#1f2937",
            color: "white",
            padding: "4px 8px",
            borderRadius: 4,
            fontSize: 12
          }}>
                  Copied
                </div> : null}
            </div>)}

          {filteredIcons.length === 0 && <div style={{
          gridColumn: "1 / -1",
          textAlign: "center"
        }}>
              No icons match “{search}”
            </div>}
        </div>
      </div>;
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const B=["Plugins"];export{o as Plugins,B as __namedExportsOrder,z as default};
