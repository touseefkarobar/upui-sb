import{r as l,j as e}from"./iframe-Bmx6Esag.js";import{C}from"./CopyIcon-DwGd6Imd.js";import{D,a as x,b as g,c as y,d as b,e as h,f,g as S,h as A,i as P,j,k as T,l as M,m as w,n as B,o as L,p as z,q as E,r as R,s as V,t as F,u as H,v as k,w as O,x as W,y as G,z as N,A as _,B as U,C as X,E as $,F as q,G as J,H as K,I as Q,J as Y,K as Z,L as nn,M as en,N as on,O as tn,P as an,Q as sn,R as cn,S as rn,T as ln,U as mn,V as dn,W as pn,X as vn,Y as In,Z as un,_ as Cn,$ as Dn,a0 as xn}from"./DiviVideoSliderIcon-CQm_Bm65.js";import"./type-Bc9hys3F.js";const gn=[{name:"DiviBlogIcon",Component:D},{name:"DiviPresetManagerIcon",Component:x},{name:"DiviHelpIcon",Component:g},{name:"DiviContactFormIcon",Component:y},{name:"DiviPricingTablesIcon",Component:b},{name:"DiviButtonIcon",Component:h},{name:"DiviCodeIcon",Component:f},{name:"DiviLayersIcon",Component:S},{name:"DiviHeroIcon",Component:A},{name:"DiviAudioIcon",Component:P},{name:"DiviTabsIcon",Component:j},{name:"DiviVariableManagerIcon",Component:T},{name:"DiviImageIcon",Component:M},{name:"DiviFilterablePortfolioIcon",Component:w},{name:"DiviSidebarIcon",Component:B},{name:"DiviTestimonialIcon",Component:L},{name:"DiviDividerIcon",Component:z},{name:"DiviBuilderSettingsIcon",Component:E},{name:"DiviLoginIcon",Component:R},{name:"DiviMapIcon",Component:V},{name:"DiviMenuIcon",Component:F},{name:"DiviParentActionIconsOnHoverIcon",Component:H},{name:"DiviTextIcon",Component:k},{name:"DiviIconListIcon",Component:O},{name:"DiviPostSliderIcon",Component:W},{name:"DiviSocialMediaFollowIcon",Component:G},{name:"DiviActionIconsOnHoverIcon",Component:N},{name:"DiviEventsModuleIcon",Component:_},{name:"DiviIconIcon",Component:U},{name:"DiviNumberCounterIcon",Component:X},{name:"DiviPaginationIcon",Component:$},{name:"DiviCanvasPortalIcon",Component:q},{name:"DiviSliderIcon",Component:J},{name:"DiviXRayIcon",Component:K},{name:"DiviCircleCounterIcon",Component:Q},{name:"DiviPostContentIcon",Component:Y},{name:"DiviPostCarouselIcon",Component:Z},{name:"DiviPortfolioIcon",Component:nn},{name:"DiviCountdownTimerIcon",Component:en},{name:"DiviBarCountersIcon",Component:on},{name:"DiviBuilderWindowIcon",Component:tn},{name:"DiviEmailOptionIcon",Component:an},{name:"DiviPersonIcon",Component:sn},{name:"DiviGroupIcon",Component:cn},{name:"DiviCallToActionIcon",Component:rn},{name:"DiviSearchIcon",Component:ln},{name:"DiviBlurbIcon",Component:mn},{name:"DiviInspectorIcon",Component:dn},{name:"DiviVideoIcon",Component:pn},{name:"DiviGroupCarouselIcon",Component:vn},{name:"DiviWireframeViewIcon",Component:In},{name:"DiviPostTitleIcon",Component:un},{name:"DiviLottieIcon",Component:Cn},{name:"DiviCommentsIcon",Component:Dn},{name:"DiviVideoSliderIcon",Component:xn}],Sn={title:"PAC Universal Plugin UI/Icons/Divi Modules",parameters:{layout:"padded"},argTypes:{size:{description:"Size of the icon",control:{type:"select"},options:["xsmall","small","medium","large","xlarge"]},color:{control:{type:"color"},defaultValue:"var(--pac-upui-icon)"}},args:{size:"xlarge"}},i={render:a=>{const[v,s]=l.useState(null),[t,I]=l.useState(""),u=n=>{const o=document.createElement("textarea");o.value=n,o.style.position="fixed",o.style.opacity="0",o.setAttribute("aria-hidden","true"),document.body.appendChild(o),o.select(),o.setSelectionRange(0,o.value.length);const r=document.execCommand("copy");return document.body.removeChild(o),r?(s(n),setTimeout(()=>s(null),1200)):console.error("Failed to copy icon name."),r},c=gn.filter(({name:n})=>n.toLowerCase().includes(t.toLowerCase().trim()));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx("input",{"aria-label":"Search icons by name",placeholder:"Search icons...",value:t,onChange:n=>I(n.target.value),style:{padding:"8px 12px",borderRadius:8,border:"1px solid rgb(215,218,221)",minWidth:260}})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:20,justifyContent:"center"},children:[c.map(({name:n,Component:o})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px",border:"1px solid rgb(215, 218, 221)",padding:"8px",position:"relative"},children:[e.jsx("button",{type:"button",onClick:()=>u(n),style:{position:"absolute",top:"6px",right:"6px",cursor:"pointer",border:"none",background:"transparent",padding:2},title:`Copy ${n}`,children:e.jsx(C,{})}),e.jsx("div",{style:{display:"flex"},children:e.jsx(o,{size:a.size,color:a.color})}),e.jsx("div",{style:{textAlign:"center"},children:n}),v===n?e.jsx("div",{style:{position:"absolute",bottom:"6px",background:"#1f2937",color:"white",padding:"4px 8px",borderRadius:4,fontSize:12},children:"Copied"}):null]},n)),c.length===0&&e.jsxs("div",{style:{gridColumn:"1 / -1",textAlign:"center"},children:["No icons match “",t,"”"]})]})]})}};var m,d,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [copied, setCopied] = useState<string | null>(null);
    const [search, setSearch] = useState("");
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
      } else {
        console.error("Failed to copy icon name.");
      }
      return success;
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
          <input aria-label="Search icons by name" placeholder="Search icons..." value={search} onChange={e => setSearch(e.target.value)} style={{
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
          gap: "8px",
          border: "1px solid rgb(215, 218, 221)",
          padding: "8px",
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
                <Component size={args.size as any} color={args.color} />
              </div>
              <div style={{
            textAlign: "center"
          }}>{name}</div>

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
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const An=["DiviModules"];export{i as DiviModules,An as __namedExportsOrder,Sn as default};
