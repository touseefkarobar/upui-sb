import{j as o,r as f}from"./iframe-VhK1vUhF.js";import{D as se,S as L,a as re,M as me,b as ce,c as pe,d as ue,T as he,e as le}from"./index-BVSVWfaS.js";import{S as A}from"./index-DiaVN06I.js";import{B as T}from"./index-Df0hlqYV.js";import{A as y}from"./AddIcon-BsEOKTsX.js";import"./index-C3KF_pxN.js";import"./type-Bc9hys3F.js";import"./index-DmHENXWT.js";import"./index-DOGl4paF.js";import"./useOutsideToggle-BYctrP_N.js";import"./DropdownIcon-wIewE-L-.js";import"./SearchIcon-CQ825agl.js";import"./Text-CvNoFQvJ.js";import"./ImportExportIcon-DFP9w2BC.js";import"./FilledIcon-CY_nFRtE.js";import"./index-ClP7zx4q.js";import"./index-D66Ice2b.js";import"./CheckmarkIcon-B-d7O1C2.js";import"./CloseIcon-BV84I3jt.js";const ge="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let m=(i=21)=>{let a="",g=crypto.getRandomValues(new Uint8Array(i|=0));for(;i--;)a+=ge[g[i]&63];return a};const Re={title:"PAC Universal Plugin UI/Primitive/Draggable Fields",component:se},Ie=[{id:m(),label:"Primary",color:"#000000",isDefault:!0,colorOpacity:1},{id:m(),label:"Secondary",color:"#FF0000",isDefault:!0,colorOpacity:1}],x={render:()=>{const[i,a]=f.useState(Ie),g=e=>{const{active:d,over:n}=e;if(!n||d.id===n.id)return;const t=i.findIndex(c=>c.id===d.id),l=i.findIndex(c=>c.id===n.id);if(t===-1||l===-1)return;const r=[...i],[u]=r.splice(t,1);u&&r.splice(l,0,u),a(r)},I=(e,d)=>{a(n=>n.map(t=>t.id===e?{...t,label:d}:t))},C=(e,d)=>{a(n=>n.map(t=>t.id===e?{...t,color:d}:t))},s=(e,d)=>{a(n=>n.map(t=>t.id===e?{...t,colorOpacity:d}:t))},p=e=>{a(d=>d.filter(n=>n.id!==e))},h=()=>{const e={id:m(),label:`New Color ${i.length+1}`,color:"#888888",colorOpacity:1};a(d=>[...d,e])};return o.jsxs(A,{children:[o.jsx(L,{onDragEnd:g,items:i.map(e=>e.id),children:i.map(e=>o.jsx(se,{id:e.id,label:e.label,color:e.color,colorOpacity:e.colorOpacity,setColorOpacity:d=>s(e.id,d),onLabelChange:d=>I(e.id,d),onColorChange:d=>C(e.id,d),onDeleteHandle:()=>p(e.id),isDefault:e.isDefault},e.id))}),o.jsx(T,{onClick:h,leftIcon:y,children:"Add New Custom Color"})]})}},Ce=[{id:m(),label:"Google",url:"https://www.google.com",target:"New Tab"},{id:m(),label:"Docs",url:"https://docs.example.com",target:"Same Tab",asChild:!0}],b={render:()=>{const[i,a]=f.useState(Ce),g=({active:e,over:d,delta:n})=>{const t=i.findIndex(r=>r.id===e.id),l=i.findIndex(r=>r.id===d.id);a(r=>{const u=[...r],[c]=u.splice(t,1);return c&&(u.splice(l,0,c),(n==null?void 0:n.x)>50?c.asChild=!0:(n==null?void 0:n.x)<-50&&(c.asChild=!1)),u[0]&&(u[0].asChild=!1),u})},I=(e,d)=>{a(n=>n.map(t=>t.id===e?{...t,label:d}:t))},C=(e,d)=>{a(n=>n.map(t=>t.id===e?{...t,url:d}:t))},s=(e,d)=>{a(n=>n.map(t=>t.id===e?{...t,target:d}:t))},p=e=>{a(d=>d.filter(n=>n.id!==e))},h=()=>{const e={id:m(),label:`New Link ${i.length+1}`,url:"",target:"New Tab"};a(d=>[...d,e])};return o.jsxs(A,{children:[o.jsx(L,{onDragEnd:g,items:i.map(e=>e.id),restrictToVerticalAxisValue:!1,children:i.map(e=>o.jsx(re,{id:e.id,label:e.label,url:e.url,asChild:e.asChild,target:e.target,onLabelChange:d=>I(e.id,d),onUrlChange:d=>C(e.id,d),onSelectChange:d=>s(e.id,d),onDeleteHandle:()=>p(e.id)},e.id))}),o.jsx(T,{onClick:h,leftIcon:y,children:"Add New Custom Link"})]})}},w={render:()=>o.jsx(me,{dashIconslug:"",url:"",onSlugChange:i=>console.log(i),onURLChange:i=>console.log(i)})},fe=[{id:m(),fontName:"Poppins Classic",fontWeights:"300, 400, 500, 600"},{id:m(),fontName:"Roboto Mono",fontWeights:"100, 300, 400"}],D={render:()=>{const[i,a]=f.useState(fe),g=({active:s,over:p})=>{const h=i.findIndex(d=>d.id===s.id),e=i.findIndex(d=>d.id===p.id);h===-1||e===-1||a(d=>{const n=[...d],[t]=n.splice(h,1);return t&&n.splice(e,0,t),n})},I=s=>{a(p=>p.filter(h=>h.id!==s))},C=()=>{const s={id:m(),fontName:`New Font ${i.length+1}`,fontWeights:""};a(p=>[...p,s])};return o.jsxs(A,{children:[o.jsx(L,{onDragEnd:g,items:i.map(s=>s.id),children:i.map(s=>o.jsx(ce,{id:s.id,fontName:s.fontName,fontWeights:s.fontWeights,onDeleteHandle:()=>I(s.id)},s.id))}),o.jsx(T,{onClick:C,leftIcon:y,children:"Add New Custom Font"})]})}},S={render:()=>o.jsx(pe,{id:"preset-1"})},E={render:()=>o.jsx(ue,{id:"replace-field-1"})},ve=[{id:"template-1",title:"Template 1"},{id:"template-2",title:"Template 2"},{id:"template-3",title:"Template 3"}],k={render:()=>o.jsx(he,{role:"Administrator",templates:ve})},v=()=>{const[i,a]=f.useState(!1);return o.jsx(le,{id:"test-template",isEditable:i,onEditClick:()=>a(!0),onEditComplete:()=>a(!1)})},xe=[{id:m(),name:"Default Template",isDefault:!0},{id:m(),name:"Custom Header Template"},{id:m(),name:"Minimal Template"}],F={render:()=>{const[i,a]=f.useState(xe),[g,I]=f.useState(new Set),C=n=>{const{active:t,over:l}=n;if(!l||t.id===l.id)return;const r=i.findIndex(N=>N.id===t.id),u=i.findIndex(N=>N.id===l.id);if(r===-1||u===-1)return;const c=[...i],[j]=c.splice(r,1);j&&c.splice(u,0,j),a(c)},s=(n,t)=>{a(l=>l.map(r=>r.id===n?{...r,name:t}:r))},p=n=>{I(t=>new Set(t).add(n))},h=n=>{I(t=>{const l=new Set(t);return l.delete(n),l})},e=n=>{a(t=>t.filter(l=>l.id!==n)),I(t=>{const l=new Set(t);return l.delete(n),l})},d=()=>{const n={id:m(),name:`New Template ${i.length+1}`};a(t=>[...t,n])};return o.jsxs(A,{children:[o.jsx(L,{onDragEnd:C,items:i.map(n=>n.id),children:i.map(n=>o.jsx(le,{id:n.id,name:n.name,isEditable:g.has(n.id),onEditClick:()=>p(n.id),onEditComplete:()=>h(n.id),onNameChange:t=>s(n.id,t),onDeleteHandle:()=>e(n.id)},n.id))}),o.jsx(T,{onClick:d,leftIcon:y,children:"Add New Template"})]})}};v.__docgenInfo={description:"",methods:[],displayName:"TemplateFieldSingle"};var O,P,U;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    return <Stack>
        <SortableList onDragEnd={handleDragEnd}
      // restrictToVerticalAxisValue={true}
      items={items.map(item => item.id)}>
          {items.map(item => <DndColorField key={item.id} id={item.id} label={item.label} color={item.color} colorOpacity={item.colorOpacity} // Default opacity
        setColorOpacity={newOpacity => handleColorOpacityChange(item.id, newOpacity)} onLabelChange={label => handleLabelChange(item.id, label)} onColorChange={color => handleColorChange(item.id, color)} onDeleteHandle={() => handleDelete(item.id)} isDefault={item.isDefault} />)}
        </SortableList>
        <Button onClick={handleAdd} leftIcon={AddIcon}>
          Add New Custom Color
        </Button>
      </Stack>;
  }
}`,...(U=(P=x.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var B,H,M;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    return <Stack>
        <SortableList onDragEnd={handleDragEnd} items={items.map(item => item.id)} restrictToVerticalAxisValue={false}>
          {items.map(item => <DndLinkField key={item.id} id={item.id} label={item.label} url={item.url} asChild={item.asChild} target={item.target} onLabelChange={label => handleLabelChange(item.id, label)} onUrlChange={url => handleUrlChange(item.id, url)} onSelectChange={target => handleTargetChange(item.id, target)} onDeleteHandle={() => handleDelete(item.id)} />)}
        </SortableList>
        <Button onClick={handleAdd} leftIcon={AddIcon}>
          Add New Custom Link
        </Button>
      </Stack>;
  }
}`,...(M=(H=b.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var R,W,V;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    return <MainParentLink dashIconslug="" url="" onSlugChange={v => console.log(v)} onURLChange={v => console.log(v)} />;
  }
}`,...(V=(W=w.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var $,_,Q;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    return <Stack>
        <SortableList onDragEnd={handleDragEnd} items={items.map(item => item.id)}>
          {items.map(item => <DndFontField key={item.id} id={item.id} fontName={item.fontName} fontWeights={item.fontWeights} onDeleteHandle={() => handleDelete(item.id)} />)}
        </SortableList>
        <Button onClick={handleAdd} leftIcon={AddIcon}>
          Add New Custom Font
        </Button>
      </Stack>;
  }
}`,...(Q=(_=D.parameters)==null?void 0:_.docs)==null?void 0:Q.source}}};var G,q,J;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <DndModulePreset id={"preset-1"} />
}`,...(J=(q=S.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,X,Y;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-1"} />
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,z,ee;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <TemplateAssignmentField role="Administrator" templates={templates} />
}`,...(ee=(z=k.parameters)==null?void 0:z.docs)==null?void 0:ee.source}}};var ne,te,de;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const [editable, setEditable] = useState(false);
  return <DndTemplateField id={"test-template"} isEditable={editable} onEditClick={() => setEditable(true)} onEditComplete={() => setEditable(false)} />;
}`,...(de=(te=v.parameters)==null?void 0:te.docs)==null?void 0:de.source}}};var ie,ae,oe;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState<TemplateItem[]>(initialTemplateItems);
    const [editableItems, setEditableItems] = useState<Set<string>>(new Set());
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
    const handleNameChange = (id: string, newName: string) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        name: newName
      } : item));
    };
    const handleEditClick = (id: string) => {
      setEditableItems(prev => new Set(prev).add(id));
    };
    const handleEditComplete = (id: string) => {
      setEditableItems(prev => {
        const updated = new Set(prev);
        updated.delete(id);
        return updated;
      });
    };
    const handleDelete = (id: string) => {
      setItems(prev => prev.filter(item => item.id !== id));
      setEditableItems(prev => {
        const updated = new Set(prev);
        updated.delete(id);
        return updated;
      });
    };
    const handleAdd = () => {
      const newItem: TemplateItem = {
        id: nanoid(),
        name: \`New Template \${items.length + 1}\`
      };
      setItems(prev => [...prev, newItem]);
    };
    return <Stack>
        <SortableList onDragEnd={handleDragEnd} items={items.map(item => item.id)}>
          {items.map(item => <DndTemplateField key={item.id} id={item.id} name={item.name} isEditable={editableItems.has(item.id)} onEditClick={() => handleEditClick(item.id)} onEditComplete={() => handleEditComplete(item.id)} onNameChange={name => handleNameChange(item.id, name)} onDeleteHandle={() => handleDelete(item.id)} />)}
        </SortableList>
        <Button onClick={handleAdd} leftIcon={AddIcon}>
          Add New Template
        </Button>
      </Stack>;
  }
}`,...(oe=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const We=["ColorField","LinkField","ParentQuickLink","FontField","ModulePreset","ReplaceField","TemplateAssignment","TemplateFieldSingle","TemplateField"];export{x as ColorField,D as FontField,b as LinkField,S as ModulePreset,w as ParentQuickLink,E as ReplaceField,k as TemplateAssignment,F as TemplateField,v as TemplateFieldSingle,We as __namedExportsOrder,Re as default};
