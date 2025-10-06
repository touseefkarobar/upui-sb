import{j as o,r as f}from"./iframe-BHBhYjQq.js";import{D as le,S as F,a as re,M as me,b as ce,c as pe,d as ue,T as he,e as se}from"./index-BSRYEch9.js";import{S as L}from"./index-hfYVbx_S.js";import{B as y}from"./index-HzealvQc.js";import{A}from"./AddIcon-CR4vMKGb.js";import"./index-BsFqADXT.js";import"./type-Bc9hys3F.js";import"./index-WXtnsNnQ.js";import"./index-DJ1mCYhh.js";import"./useOutsideToggle-BXaoZqFj.js";import"./DropdownIcon-BFI0RSoQ.js";import"./SearchIcon-CQ0mTVia.js";import"./Text-_q3N7_9X.js";import"./ImportExportIcon-DNmAaVFG.js";import"./FilledIcon-Cz3BrzVq.js";import"./index-D1AyBLS7.js";import"./index-IrDyx1uJ.js";import"./EditIcon-B8iztJkR.js";import"./CheckmarkIcon-BO1SBL60.js";import"./CloseIcon-B7sQNzeI.js";const ge="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let m=(i=21)=>{let a="",g=crypto.getRandomValues(new Uint8Array(i|=0));for(;i--;)a+=ge[g[i]&63];return a};const Re={title:"PAC Universal Plugin UI/Primitive/Draggable Fields",component:le},Ie=[{id:m(),label:"Primary",color:"#000000",isDefault:!0,colorOpacity:1},{id:m(),label:"Secondary",color:"#FF0000",isDefault:!0,colorOpacity:1}],x={render:()=>{const[i,a]=f.useState(Ie),g=n=>{const{active:d,over:e}=n;if(!e||d.id===e.id)return;const t=i.findIndex(c=>c.id===d.id),s=i.findIndex(c=>c.id===e.id);if(t===-1||s===-1)return;const r=[...i],[u]=r.splice(t,1);u&&r.splice(s,0,u),a(r)},I=(n,d)=>{a(e=>e.map(t=>t.id===n?{...t,label:d}:t))},C=(n,d)=>{a(e=>e.map(t=>t.id===n?{...t,color:d}:t))},l=(n,d)=>{a(e=>e.map(t=>t.id===n?{...t,colorOpacity:d}:t))},p=n=>{a(d=>d.filter(e=>e.id!==n))},h=()=>{const n={id:m(),label:`New Color ${i.length+1}`,color:"#888888",colorOpacity:1};a(d=>[...d,n])};return o.jsxs(L,{children:[o.jsx(F,{onDragEnd:g,items:i.map(n=>n.id),children:i.map(n=>o.jsx(le,{id:n.id,label:n.label,color:n.color,colorOpacity:n.colorOpacity,setColorOpacity:d=>l(n.id,d),onLabelChange:d=>I(n.id,d),onColorChange:d=>C(n.id,d),onDeleteHandle:()=>p(n.id),isDefault:n.isDefault},n.id))}),o.jsx(y,{onClick:h,leftIcon:A,children:"Add New Custom Color"})]})}},Ce=[{id:m(),label:"Google",url:"https://www.google.com",target:"New Tab"},{id:m(),label:"Docs",url:"https://docs.example.com",target:"Same Tab",asChild:!0}],b={render:()=>{const[i,a]=f.useState(Ce),g=({active:n,over:d,delta:e})=>{const t=i.findIndex(r=>r.id===n.id),s=i.findIndex(r=>r.id===d.id);a(r=>{const u=[...r],[c]=u.splice(t,1);return c&&(u.splice(s,0,c),(e==null?void 0:e.x)>50?c.asChild=!0:(e==null?void 0:e.x)<-50&&(c.asChild=!1)),u[0]&&(u[0].asChild=!1),u})},I=(n,d)=>{a(e=>e.map(t=>t.id===n?{...t,label:d}:t))},C=(n,d)=>{a(e=>e.map(t=>t.id===n?{...t,url:d}:t))},l=(n,d)=>{a(e=>e.map(t=>t.id===n?{...t,target:d}:t))},p=n=>{a(d=>d.filter(e=>e.id!==n))},h=()=>{const n={id:m(),label:`New Link ${i.length+1}`,url:"",target:"New Tab"};a(d=>[...d,n])};return o.jsxs(L,{children:[o.jsx(F,{onDragEnd:g,items:i.map(n=>n.id),restrictToVerticalAxisValue:!1,children:i.map(n=>o.jsx(re,{id:n.id,label:n.label,url:n.url,asChild:n.asChild,target:n.target,onLabelChange:d=>I(n.id,d),onUrlChange:d=>C(n.id,d),onSelectChange:d=>l(n.id,d),onDeleteHandle:()=>p(n.id)},n.id))}),o.jsx(y,{onClick:h,leftIcon:A,children:"Add New Custom Link"})]})}},w={render:()=>o.jsx(me,{dashIconslug:"",url:"",onSlugChange:i=>console.log(i),onURLChange:i=>console.log(i)})},fe=[{id:m(),fontName:"Poppins Classic",fontWeights:"300, 400, 500, 600"},{id:m(),fontName:"Roboto Mono",fontWeights:"100, 300, 400"}],D={render:()=>{const[i,a]=f.useState(fe),g=({active:l,over:p})=>{const h=i.findIndex(d=>d.id===l.id),n=i.findIndex(d=>d.id===p.id);h===-1||n===-1||a(d=>{const e=[...d],[t]=e.splice(h,1);return t&&e.splice(n,0,t),e})},I=l=>{a(p=>p.filter(h=>h.id!==l))},C=()=>{const l={id:m(),fontName:`New Font ${i.length+1}`,fontWeights:""};a(p=>[...p,l])};return o.jsxs(L,{children:[o.jsx(F,{onDragEnd:g,items:i.map(l=>l.id),children:i.map(l=>o.jsx(ce,{id:l.id,fontName:l.fontName,fontWeights:l.fontWeights,onDeleteHandle:()=>I(l.id)},l.id))}),o.jsx(y,{onClick:C,leftIcon:A,children:"Add New Custom Font"})]})}},S={render:()=>o.jsx(pe,{id:"preset-1"})},E={render:()=>o.jsx(ue,{id:"replace-field-1"})},ve=[{id:"template-1",title:"Template 1"},{id:"template-2",title:"Template 2"},{id:"template-3",title:"Template 3"}],k={render:()=>o.jsx(he,{role:"Administrator",templates:ve,selectedTemplateId:"",placeholder:"Select a template",onSelectChange:i=>alert(`selected Templates is : ${i}`)})},v=()=>{const[i,a]=f.useState(!1);return o.jsx(se,{id:"test-template",isEditable:i,onEditClick:()=>a(!0),onEditComplete:()=>a(!1)})},xe=[{id:m(),name:"Default Template",isDefault:!0},{id:m(),name:"Custom Header Template"},{id:m(),name:"Minimal Template"}],T={render:()=>{const[i,a]=f.useState(xe),[g,I]=f.useState(new Set),C=e=>{const{active:t,over:s}=e;if(!s||t.id===s.id)return;const r=i.findIndex(N=>N.id===t.id),u=i.findIndex(N=>N.id===s.id);if(r===-1||u===-1)return;const c=[...i],[j]=c.splice(r,1);j&&c.splice(u,0,j),a(c)},l=(e,t)=>{a(s=>s.map(r=>r.id===e?{...r,name:t}:r))},p=e=>{I(t=>new Set(t).add(e))},h=e=>{I(t=>{const s=new Set(t);return s.delete(e),s})},n=e=>{a(t=>t.filter(s=>s.id!==e)),I(t=>{const s=new Set(t);return s.delete(e),s})},d=()=>{const e={id:m(),name:`New Template ${i.length+1}`};a(t=>[...t,e])};return o.jsxs(L,{children:[o.jsx(F,{onDragEnd:C,items:i.map(e=>e.id),children:i.map(e=>o.jsx(se,{id:e.id,name:e.name,isDefault:e.isDefault,isEditable:g.has(e.id),onEditClick:()=>p(e.id),onEditComplete:()=>h(e.id),onNameChange:t=>l(e.id,t),onDeleteHandle:()=>n(e.id),onCopyClick:()=>alert(`Copied template: ${e.name}`)},e.id))}),o.jsx(y,{onClick:d,leftIcon:A,children:"Add New Template"})]})}};v.__docgenInfo={description:"",methods:[],displayName:"TemplateFieldSingle"};var O,P,U;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(U=(P=x.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var $,B,H;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(H=(B=b.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var M,R,W;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <MainParentLink dashIconslug="" url="" onSlugChange={v => console.log(v)} onURLChange={v => console.log(v)} />;
  }
}`,...(W=(R=w.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var V,_,Q;D.parameters={...D.parameters,docs:{...(V=D.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,z,ee;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:'{\n  render: () => <TemplateAssignmentField role="Administrator" templates={templates} selectedTemplateId="" placeholder="Select a template" onSelectChange={id => alert(`selected Templates is : ${id}`)} />\n}',...(ee=(z=k.parameters)==null?void 0:z.docs)==null?void 0:ee.source}}};var ne,te,de;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const [editable, setEditable] = useState(false);
  return <DndTemplateField id={"test-template"} isEditable={editable} onEditClick={() => setEditable(true)} onEditComplete={() => setEditable(false)} />;
}`,...(de=(te=v.parameters)==null?void 0:te.docs)==null?void 0:de.source}}};var ie,ae,oe;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
          {items.map(item => <DndTemplateField key={item.id} id={item.id} name={item.name} isDefault={item.isDefault} isEditable={editableItems.has(item.id)} onEditClick={() => handleEditClick(item.id)} onEditComplete={() => handleEditComplete(item.id)} onNameChange={name => handleNameChange(item.id, name)} onDeleteHandle={() => handleDelete(item.id)} onCopyClick={() => alert(\`Copied template: \${item.name}\`)} />)}
        </SortableList>
        <Button onClick={handleAdd} leftIcon={AddIcon}>
          Add New Template
        </Button>
      </Stack>;
  }
}`,...(oe=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const We=["ColorField","LinkField","ParentQuickLink","FontField","ModulePreset","ReplaceField","TemplateAssignment","TemplateFieldSingle","TemplateField"];export{x as ColorField,D as FontField,b as LinkField,S as ModulePreset,w as ParentQuickLink,E as ReplaceField,k as TemplateAssignment,T as TemplateField,v as TemplateFieldSingle,We as __namedExportsOrder,Re as default};
