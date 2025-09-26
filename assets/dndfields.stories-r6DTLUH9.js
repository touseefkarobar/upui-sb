import{j as r,r as S}from"./iframe-DFjiqDaD.js";import{D as ne,S as k,a as te,M as ie,b as de,c as ae,d as oe,T as re,e as se}from"./index-DZ7_Rh46.js";import{S as y}from"./index-BbPaMFY9.js";import{B as A}from"./index-BXYjEMOr.js";import{A as E}from"./AddIcon-0k3udBJ7.js";import"./index-DcUfXs4P.js";import"./type-Bc9hys3F.js";import"./index-C1jzEnFK.js";import"./index-BAyXUTmw.js";import"./useOutsideToggle-Br8jFkHv.js";import"./DropdownIcon-DUQoF8uN.js";import"./SearchIcon-CWKQcqPW.js";import"./Text-B5Z8gN4I.js";import"./ImportExportIcon-DyVsKnzf.js";import"./FilledIcon-Q0ZN5f3P.js";import"./index-Bu3tHo8-.js";import"./index-RPar_LcD.js";import"./CheckmarkIcon-Sghz6ET6.js";import"./CloseIcon-DclPKw2r.js";const le="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let c=(d=21)=>{let a="",g=crypto.getRandomValues(new Uint8Array(d|=0));for(;d--;)a+=le[g[d]&63];return a};const Oe={title:"PAC Universal Plugin UI/Primitive/Draggable Fields",component:ne},ce=[{id:c(),label:"Primary",color:"#000000",isDefault:!0,colorOpacity:1},{id:c(),label:"Secondary",color:"#FF0000",isDefault:!0,colorOpacity:1}],v={render:()=>{const[d,a]=S.useState(ce),g=e=>{const{active:n,over:i}=e;if(!i||n.id===i.id)return;const t=d.findIndex(u=>u.id===n.id),C=d.findIndex(u=>u.id===i.id);if(t===-1||C===-1)return;const l=[...d],[p]=l.splice(t,1);p&&l.splice(C,0,p),a(l)},h=(e,n)=>{a(i=>i.map(t=>t.id===e?{...t,label:n}:t))},I=(e,n)=>{a(i=>i.map(t=>t.id===e?{...t,color:n}:t))},o=(e,n)=>{a(i=>i.map(t=>t.id===e?{...t,colorOpacity:n}:t))},s=e=>{a(n=>n.filter(i=>i.id!==e))},m=()=>{const e={id:c(),label:`New Color ${d.length+1}`,color:"#888888",colorOpacity:1};a(n=>[...n,e])};return r.jsxs(y,{children:[r.jsx(k,{onDragEnd:g,items:d.map(e=>e.id),children:d.map(e=>r.jsx(ne,{id:e.id,label:e.label,color:e.color,colorOpacity:e.colorOpacity,setColorOpacity:n=>o(e.id,n),onLabelChange:n=>h(e.id,n),onColorChange:n=>I(e.id,n),onDeleteHandle:()=>s(e.id),isDefault:e.isDefault},e.id))}),r.jsx(A,{onClick:m,leftIcon:E,children:"Add New Custom Color"})]})}},me=[{id:c(),label:"Google",url:"https://www.google.com",target:"New Tab"},{id:c(),label:"Docs",url:"https://docs.example.com",target:"Same Tab",asChild:!0}],x={render:()=>{const[d,a]=S.useState(me),g=({active:e,over:n,delta:i})=>{const t=d.findIndex(l=>l.id===e.id),C=d.findIndex(l=>l.id===n.id);a(l=>{const p=[...l],[u]=p.splice(t,1);return u&&(p.splice(C,0,u),(i==null?void 0:i.x)>50?u.asChild=!0:(i==null?void 0:i.x)<-50&&(u.asChild=!1)),p[0]&&(p[0].asChild=!1),p})},h=(e,n)=>{a(i=>i.map(t=>t.id===e?{...t,label:n}:t))},I=(e,n)=>{a(i=>i.map(t=>t.id===e?{...t,url:n}:t))},o=(e,n)=>{a(i=>i.map(t=>t.id===e?{...t,target:n}:t))},s=e=>{a(n=>n.filter(i=>i.id!==e))},m=()=>{const e={id:c(),label:`New Link ${d.length+1}`,url:"",target:"New Tab"};a(n=>[...n,e])};return r.jsxs(y,{children:[r.jsx(k,{onDragEnd:g,items:d.map(e=>e.id),restrictToVerticalAxisValue:!1,children:d.map(e=>r.jsx(te,{id:e.id,label:e.label,url:e.url,asChild:e.asChild,target:e.target,onLabelChange:n=>h(e.id,n),onUrlChange:n=>I(e.id,n),onSelectChange:n=>o(e.id,n),onDeleteHandle:()=>s(e.id)},e.id))}),r.jsx(A,{onClick:m,leftIcon:E,children:"Add New Custom Link"})]})}},b={render:()=>r.jsx(ie,{dashIconslug:"",url:"",onSlugChange:d=>console.log(d),onURLChange:d=>console.log(d)})},pe=[{id:c(),fontName:"Poppins Classic",fontWeights:"300, 400, 500, 600"},{id:c(),fontName:"Roboto Mono",fontWeights:"100, 300, 400"}],w={render:()=>{const[d,a]=S.useState(pe),g=({active:o,over:s})=>{const m=d.findIndex(n=>n.id===o.id),e=d.findIndex(n=>n.id===s.id);m===-1||e===-1||a(n=>{const i=[...n],[t]=i.splice(m,1);return t&&i.splice(e,0,t),i})},h=o=>{a(s=>s.filter(m=>m.id!==o))},I=()=>{const o={id:c(),fontName:`New Font ${d.length+1}`,fontWeights:""};a(s=>[...s,o])};return r.jsxs(y,{children:[r.jsx(k,{onDragEnd:g,items:d.map(o=>o.id),children:d.map(o=>r.jsx(de,{id:o.id,fontName:o.fontName,fontWeights:o.fontWeights,onDeleteHandle:()=>h(o.id)},o.id))}),r.jsx(A,{onClick:I,leftIcon:E,children:"Add New Custom Font"})]})}},D={render:()=>r.jsx(ae,{id:"preset-1"})},L={render:()=>r.jsx(oe,{id:"replace-field-1"})},ue=[{id:"template-1",title:"Template 1"},{id:"template-2",title:"Template 2"},{id:"template-3",title:"Template 3"}],F={render:()=>r.jsx(re,{role:"Administrator",templates:ue})},f=()=>{const[d,a]=S.useState(!1);return r.jsx(se,{id:"test-template",isEditable:d,onEditClick:()=>a(!0),onEditComplete:()=>a(!1)})};f.__docgenInfo={description:"",methods:[],displayName:"TemplateField"};var T,N,O;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(O=(N=v.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var j,P,U;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(U=(P=x.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var R,B,M;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    return <MainParentLink dashIconslug="" url="" onSlugChange={v => console.log(v)} onURLChange={v => console.log(v)} />;
  }
}`,...(M=(B=b.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var W,V,H;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(H=(V=w.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var $,_,Q;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <DndModulePreset id={"preset-1"} />
}`,...(Q=(_=D.parameters)==null?void 0:_.docs)==null?void 0:Q.source}}};var G,q,J;L.parameters={...L.parameters,docs:{...(G=L.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-1"} />
}`,...(J=(q=L.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,X,Y;F.parameters={...F.parameters,docs:{...(K=F.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <TemplateAssignmentField role="Administrator" templates={templates} />
}`,...(Y=(X=F.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,z,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [editable, setEditable] = useState(false);
  return <DndTemplateField id={"test-template"} isEditable={editable} onEditClick={() => setEditable(true)} onEditComplete={() => setEditable(false)} />;
}`,...(ee=(z=f.parameters)==null?void 0:z.docs)==null?void 0:ee.source}}};const je=["ColorField","LinkField","ParentQuickLink","FontField","ModulePreset","ReplaceField","TemplateAssignment","TemplateField"];export{v as ColorField,w as FontField,x as LinkField,D as ModulePreset,b as ParentQuickLink,L as ReplaceField,F as TemplateAssignment,f as TemplateField,je as __namedExportsOrder,Oe as default};
