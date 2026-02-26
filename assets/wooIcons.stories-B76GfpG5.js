import{r as l,j as e}from"./iframe-3yMaT3T2.js";import{C as y}from"./CopyIcon-8TIFzGsd.js";import{W as I,a as g,b as h,c as W,d as f,e as b,f as v,g as P,h as S,i as j,j as k,k as A,l as T,m as R,n as w,o as z,p as D,q as E,r as B,s as L,t as N,u as U,v as _,w as G}from"./WooBreadCrumbIcon-Do7UQ4lT.js";import"./type-Bc9hys3F.js";const M=[{name:"WooCartTotalIcon",Component:I},{name:"WooCheckoutInfoIcon",Component:g},{name:"WooCheckoutShippingIcon",Component:h},{name:"WooCheckoutPaymentIcon",Component:W},{name:"WooCheckoutBillingIcon",Component:f},{name:"WooCheckoutDetailsIcon",Component:b},{name:"WooBreadCrumbIcon",Component:v},{name:"WooCartProductsIcon",Component:P},{name:"WooCrossSellsIcon",Component:S},{name:"WooProductDescIcon",Component:j},{name:"WooAddToCartIcon",Component:k},{name:"WooNoticeIcon",Component:A},{name:"WooProductTitleIcon",Component:T},{name:"WooProductUpSellIcon",Component:R},{name:"WooProductIcon",Component:w},{name:"WooProductRatingIcon",Component:z},{name:"WooProductPriceIcon",Component:D},{name:"WooProductMetaIcon",Component:E},{name:"WooProductReviewIcon",Component:B},{name:"WooProductStockIcon",Component:L},{name:"WooProductTabsIcon",Component:N},{name:"WooProductGalleryIcon",Component:U},{name:"WooProductImagesIcon",Component:_},{name:"WooProductInfoIcon",Component:G}],F={title:"PAC Universal Plugin UI/Icons/WooCommerce Icons",parameters:{layout:"padded"},argTypes:{size:{description:"Size of the icon",control:{type:"select"},options:["xsmall","small","medium","large","xlarge"]},color:{control:{type:"color"},defaultValue:"var(--pac-upui-icon)"}},args:{size:"xlarge"}},t={render:r=>{const[m,c]=l.useState(null),[a,C]=l.useState(""),x=o=>{const n=document.createElement("textarea");n.value=o,n.style.position="fixed",n.style.opacity="0",n.setAttribute("aria-hidden","true"),document.body.appendChild(n),n.select(),n.setSelectionRange(0,n.value.length);const i=document.execCommand("copy");return document.body.removeChild(n),i&&(c(o),setTimeout(()=>c(null),1200)),i},s=M.filter(({name:o})=>o.toLowerCase().includes(a.toLowerCase().trim()));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsx("input",{"aria-label":"Search Woo icons by name",placeholder:"Search icons...",value:a,onChange:o=>C(o.target.value),style:{padding:"8px 12px",borderRadius:8,border:"1px solid rgb(215,218,221)",minWidth:260}})}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:20,justifyContent:"center"},children:[s.map(({name:o,Component:n})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"8px",border:"1px solid rgb(215, 218, 221)",padding:"8px",position:"relative"},children:[e.jsx("button",{type:"button",onClick:()=>x(o),style:{position:"absolute",top:"6px",right:"6px",cursor:"pointer",border:"none",background:"transparent",padding:2},title:`Copy ${o}`,children:e.jsx(y,{})}),e.jsx("div",{style:{display:"flex"},children:e.jsx(n,{size:r.size,color:r.color})}),e.jsx("div",{style:{textAlign:"center"},children:o}),m===o?e.jsx("div",{style:{position:"absolute",bottom:"6px",background:"#1f2937",color:"white",padding:"4px 8px",borderRadius:4,fontSize:12},children:"Copied"}):null]},o)),s.length===0&&e.jsxs("div",{style:{gridColumn:"1 / -1",textAlign:"center"},children:["No icons match “",a,"”"]})]})]})}};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <input aria-label="Search Woo icons by name" placeholder="Search icons..." value={search} onChange={e => setSearch(e.target.value)} style={{
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
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const H=["WooCommerceIcons"];export{t as WooCommerceIcons,H as __namedExportsOrder,F as default};
