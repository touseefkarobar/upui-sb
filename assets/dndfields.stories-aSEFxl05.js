import{j as a,r as y}from"./iframe-BPwHjVT2.js";import{D as Y,S,a as Z,M as z,b as ee,c as ne,d as te,T as ie}from"./index-vwxSeQyA.js";import{S as k}from"./index-QEYlb6i-.js";import{B as A}from"./index-CJeZyYV7.js";import{A as F}from"./AddIcon-2E1L_gLk.js";import"./index-Cl-E1MOG.js";import"./type-Bc9hys3F.js";import"./index-ChyxB4VP.js";import"./index-bra4Rr2l.js";import"./useOutsideToggle-D3-LxBIw.js";import"./DropdownIcon-BxiapYI6.js";import"./SearchIcon-BK_JbnUB.js";import"./Text-DKulg_Nl.js";import"./ImportExportIcon-DT_nNNUK.js";import"./FilledIcon-D9F05rr5.js";import"./index-C0wbfh_C.js";import"./index-CkpYd08p.js";import"./CloseIcon-DaYC912R.js";const de="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let c=(d=21)=>{let o="",h=crypto.getRandomValues(new Uint8Array(d|=0));for(;d--;)o+=de[h[d]&63];return o};const ke={title:"PAC Universal Plugin UI/Primitive/Draggable Fields",component:Y},oe=[{id:c(),label:"Primary",color:"#000000",isDefault:!0,colorOpacity:1},{id:c(),label:"Secondary",color:"#FF0000",isDefault:!0,colorOpacity:1}],C={render:()=>{const[d,o]=y.useState(oe),h=e=>{const{active:n,over:i}=e;if(!i||n.id===i.id)return;const t=d.findIndex(u=>u.id===n.id),f=d.findIndex(u=>u.id===i.id);if(t===-1||f===-1)return;const l=[...d],[p]=l.splice(t,1);p&&l.splice(f,0,p),o(l)},g=(e,n)=>{o(i=>i.map(t=>t.id===e?{...t,label:n}:t))},I=(e,n)=>{o(i=>i.map(t=>t.id===e?{...t,color:n}:t))},r=(e,n)=>{o(i=>i.map(t=>t.id===e?{...t,colorOpacity:n}:t))},s=e=>{o(n=>n.filter(i=>i.id!==e))},m=()=>{const e={id:c(),label:`New Color ${d.length+1}`,color:"#888888",colorOpacity:1};o(n=>[...n,e])};return a.jsxs(k,{children:[a.jsx(S,{onDragEnd:h,items:d.map(e=>e.id),children:d.map(e=>a.jsx(Y,{id:e.id,label:e.label,color:e.color,colorOpacity:e.colorOpacity,setColorOpacity:n=>r(e.id,n),onLabelChange:n=>g(e.id,n),onColorChange:n=>I(e.id,n),onDeleteHandle:()=>s(e.id),isDefault:e.isDefault},e.id))}),a.jsx(A,{onClick:m,leftIcon:F,children:"Add New Custom Color"})]})}},re=[{id:c(),label:"Google",url:"https://www.google.com",target:"New Tab"},{id:c(),label:"Docs",url:"https://docs.example.com",target:"Same Tab",asChild:!0}],v={render:()=>{const[d,o]=y.useState(re),h=({active:e,over:n,delta:i})=>{const t=d.findIndex(l=>l.id===e.id),f=d.findIndex(l=>l.id===n.id);o(l=>{const p=[...l],[u]=p.splice(t,1);return u&&(p.splice(f,0,u),(i==null?void 0:i.x)>50?u.asChild=!0:(i==null?void 0:i.x)<-50&&(u.asChild=!1)),p[0]&&(p[0].asChild=!1),p})},g=(e,n)=>{o(i=>i.map(t=>t.id===e?{...t,label:n}:t))},I=(e,n)=>{o(i=>i.map(t=>t.id===e?{...t,url:n}:t))},r=(e,n)=>{o(i=>i.map(t=>t.id===e?{...t,target:n}:t))},s=e=>{o(n=>n.filter(i=>i.id!==e))},m=()=>{const e={id:c(),label:`New Link ${d.length+1}`,url:"",target:"New Tab"};o(n=>[...n,e])};return a.jsxs(k,{children:[a.jsx(S,{onDragEnd:h,items:d.map(e=>e.id),restrictToVerticalAxisValue:!1,children:d.map(e=>a.jsx(Z,{id:e.id,label:e.label,url:e.url,asChild:e.asChild,target:e.target,onLabelChange:n=>g(e.id,n),onUrlChange:n=>I(e.id,n),onSelectChange:n=>r(e.id,n),onDeleteHandle:()=>s(e.id)},e.id))}),a.jsx(A,{onClick:m,leftIcon:F,children:"Add New Custom Link"})]})}},x={render:()=>a.jsx(z,{dashIconslug:"",url:"",onSlugChange:d=>console.log(d),onURLChange:d=>console.log(d)})},ae=[{id:c(),fontName:"Poppins Classic",fontWeights:"300, 400, 500, 600"},{id:c(),fontName:"Roboto Mono",fontWeights:"100, 300, 400"}],b={render:()=>{const[d,o]=y.useState(ae),h=({active:r,over:s})=>{const m=d.findIndex(n=>n.id===r.id),e=d.findIndex(n=>n.id===s.id);m===-1||e===-1||o(n=>{const i=[...n],[t]=i.splice(m,1);return t&&i.splice(e,0,t),i})},g=r=>{o(s=>s.filter(m=>m.id!==r))},I=()=>{const r={id:c(),fontName:`New Font ${d.length+1}`,fontWeights:""};o(s=>[...s,r])};return a.jsxs(k,{children:[a.jsx(S,{onDragEnd:h,items:d.map(r=>r.id),children:d.map(r=>a.jsx(ee,{id:r.id,fontName:r.fontName,fontWeights:r.fontWeights,onDeleteHandle:()=>g(r.id)},r.id))}),a.jsx(A,{onClick:I,leftIcon:F,children:"Add New Custom Font"})]})}},w={render:()=>a.jsx(ne,{id:"preset-1"})},D={render:()=>a.jsx(te,{id:"replace-field-1"})},se=[{id:"template-1",title:"Template 1"},{id:"template-2",title:"Template 2"},{id:"template-3",title:"Template 3"}],L={render:()=>a.jsx(ie,{role:"Administrator",templates:se})};var N,O,T;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState<ColorItem[]>(initialItems);
    const handleDragEnd = (event: any) => {
      const {
        active,
        over
      } = event;
      if (!over || active.id === over.id) return;
      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);
      if (oldIndex === -1 || newIndex === -1) return;
      const updated = [...items];
      const [moved] = updated.splice(oldIndex, 1);
      moved && updated.splice(newIndex, 0, moved);
      setItems(updated);
    };
    const handleLabelChange = (id: string, newLabel: string) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        label: newLabel
      } : item));
    };
    const handleColorChange = (id: string, newColor: string) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        color: newColor
      } : item));
    };
    const handleColorOpacityChange = (id: string, newOpacity: number) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        colorOpacity: newOpacity
      } : item));
    };
    const handleDelete = (id: string) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    const handleAdd = () => {
      const newItem: ColorItem = {
        id: nanoid(),
        label: \`New Color \${items.length + 1}\`,
        color: "#888888",
        colorOpacity: 1 // Default opacity
      };
      setItems(prev => [...prev, newItem]);
    };
    return <Stack>\r
        <SortableList onDragEnd={handleDragEnd}
      // restrictToVerticalAxisValue={true}
      items={items.map(item => item.id)}>\r
          {items.map(item => <DndColorField key={item.id} id={item.id} label={item.label} color={item.color} colorOpacity={item.colorOpacity} // Default opacity
        setColorOpacity={newOpacity => handleColorOpacityChange(item.id, newOpacity)} onLabelChange={label => handleLabelChange(item.id, label)} onColorChange={color => handleColorChange(item.id, color)} onDeleteHandle={() => handleDelete(item.id)} isDefault={item.isDefault} />)}\r
        </SortableList>\r
        <Button onClick={handleAdd} leftIcon={AddIcon}>\r
          Add New Custom Color\r
        </Button>\r
      </Stack>;
  }
}`,...(T=(O=C.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var E,j,P;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState<LinkItem[]>(initialLinkItems);
    const handleDragEnd = ({
      active,
      over,
      delta
    }: any) => {
      // if (!over || active.id === over.id) return;

      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);
      // if (oldIndex === -1 || newIndex === -1) return;

      setItems(prev => {
        const updated = [...prev];
        const [moved] = updated.splice(oldIndex, 1);
        if (moved) {
          updated.splice(newIndex, 0, moved);

          // Assign hierarchy based on horizontal drag direction
          if (delta?.x > 50) {
            moved.asChild = true;
          } else if (delta?.x < -50) {
            moved.asChild = false;
          }
        }

        // Ensure first item is always top-level
        if (updated[0]) {
          updated[0].asChild = false;
        }
        return updated;
      });
    };
    const handleLabelChange = (id: string, newLabel: string) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        label: newLabel
      } : item));
    };
    const handleUrlChange = (id: string, newUrl: string) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        url: newUrl
      } : item));
    };
    const handleTargetChange = (id: string, newTarget: any) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        target: newTarget
      } : item));
    };
    const handleDelete = (id: string) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    const handleAdd = () => {
      const newItem: LinkItem = {
        id: nanoid(),
        label: \`New Link \${items.length + 1}\`,
        url: "",
        target: "New Tab"
      };
      setItems(prev => [...prev, newItem]);
    };
    return <Stack>\r
        <SortableList onDragEnd={handleDragEnd} items={items.map(item => item.id)} restrictToVerticalAxisValue={false}>\r
          {items.map(item => <DndLinkField key={item.id} id={item.id} label={item.label} url={item.url} asChild={item.asChild} target={item.target} onLabelChange={label => handleLabelChange(item.id, label)} onUrlChange={url => handleUrlChange(item.id, url)} onSelectChange={target => handleTargetChange(item.id, target)} onDeleteHandle={() => handleDelete(item.id)} />)}\r
        </SortableList>\r
        <Button onClick={handleAdd} leftIcon={AddIcon}>\r
          Add New Custom Link\r
        </Button>\r
      </Stack>;
  }
}`,...(P=(j=v.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var U,R,B;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    return <MainParentLink dashIconslug="" url="" onSlugChange={v => console.log(v)} onURLChange={v => console.log(v)} />;
  }
}`,...(B=(R=x.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var M,W,V;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState<FontItem[]>(initialFontItems);
    const handleDragEnd = ({
      active,
      over
    }: any) => {
      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);
      if (oldIndex === -1 || newIndex === -1) return;
      setItems(prev => {
        const updated = [...prev];
        const [moved] = updated.splice(oldIndex, 1);
        if (moved) updated.splice(newIndex, 0, moved);
        return updated;
      });
    };
    const handleDelete = (id: string) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    const handleAdd = () => {
      const newItem: FontItem = {
        id: nanoid(),
        fontName: \`New Font \${items.length + 1}\`,
        fontWeights: ""
      };
      setItems(prev => [...prev, newItem]);
    };
    return <Stack>\r
        <SortableList onDragEnd={handleDragEnd} items={items.map(item => item.id)}>\r
          {items.map(item => <DndFontField key={item.id} id={item.id} fontName={item.fontName} fontWeights={item.fontWeights} onDeleteHandle={() => handleDelete(item.id)} />)}\r
        </SortableList>\r
        <Button onClick={handleAdd} leftIcon={AddIcon}>\r
          Add New Custom Font\r
        </Button>\r
      </Stack>;
  }
}`,...(V=(W=b.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var H,$,Q;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <DndModulePreset id={"preset-1"} />
}`,...(Q=($=w.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var _,G,q;D.parameters={...D.parameters,docs:{...(_=D.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-1"} />
}`,...(q=(G=D.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var J,K,X;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <TemplateAssignmentField role="Administrator" templates={templates} />
}`,...(X=(K=L.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};const Ae=["ColorField","LinkField","ParentQuickLink","FontField","ModulePreset","ReplaceField","TemplateAssignment"];export{C as ColorField,b as FontField,v as LinkField,w as ModulePreset,x as ParentQuickLink,D as ReplaceField,L as TemplateAssignment,Ae as __namedExportsOrder,ke as default};
