import{j as s,r as f}from"./iframe-0mXiPHae.js";import{D as oe,S as F,a as re,M as me,b as ce,c as pe,d as ue,T as ge,e as le}from"./index-ZpFKjY_4.js";import{g as m}from"./generateId-C1v-VC-6.js";import{S as L}from"./index-D2_v78Cm.js";import{B as A}from"./index-TatRUhp-.js";import{A as y}from"./AddIcon-BHMK0-bf.js";import"./index-CBpk1Fmj.js";import"./type-Bc9hys3F.js";import"./index-IEXID6Fq.js";import"./index-CqEIVkGk.js";import"./useOutsideToggle-CWXyxS4q.js";import"./DropdownIcon-Cu_DUKRA.js";import"./SearchIcon-BrjuOXLD.js";import"./FilledIcon-CSjxdJiT.js";import"./ResetIcon-Bhsug1Vo.js";import"./Text-DF-Wtqy2.js";import"./ImportExportIcon-BCeDCIpX.js";import"./index-B8NSwYwP.js";import"./index-CP-jceyk.js";import"./EditIcon-BOELrPKr.js";import"./CheckmarkIcon-C7FG9LSQ.js";import"./index-BO_ZYQpw.js";import"./CloseIcon-Dte3I7Km.js";const Ve={title:"PAC Universal Plugin UI/Primitive/Draggable Fields",component:oe},he=[{id:m(),label:"Primary",color:"#000000",isDefault:!0,colorOpacity:1},{id:m(),label:"Secondary",color:"#FF0000",isDefault:!0,colorOpacity:1}],x={render:()=>{const[i,a]=f.useState(he),I=n=>{const{active:d,over:e}=n;if(!e||d.id===e.id)return;const t=i.findIndex(c=>c.id===d.id),l=i.findIndex(c=>c.id===e.id);if(t===-1||l===-1)return;const r=[...i],[u]=r.splice(t,1);u&&r.splice(l,0,u),a(r)},h=(n,d)=>{a(e=>e.map(t=>t.id===n?{...t,label:d}:t))},C=(n,d)=>{a(e=>e.map(t=>t.id===n?{...t,color:d}:t))},o=(n,d)=>{a(e=>e.map(t=>t.id===n?{...t,colorOpacity:d}:t))},p=n=>{a(d=>d.filter(e=>e.id!==n))},g=()=>{const n={id:m(),label:`New Color ${i.length+1}`,color:"#888888",colorOpacity:1};a(d=>[...d,n])};return s.jsxs(L,{children:[s.jsx(F,{onDragEnd:I,items:i.map(n=>n.id),children:i.map(n=>s.jsx(oe,{id:n.id,label:n.label,color:n.color,colorOpacity:n.colorOpacity,setColorOpacity:d=>o(n.id,d),onLabelChange:d=>h(n.id,d),onColorChange:d=>C(n.id,d),onDeleteHandle:()=>p(n.id),isDefault:n.isDefault},n.id))}),s.jsx(A,{onClick:g,leftIcon:y,children:"Add New Custom Color"})]})}},Ie=[{id:m(),label:"Google",url:"https://www.google.com",target:"New Tab"},{id:m(),label:"Docs",url:"https://docs.example.com",target:"Same Tab",asChild:!0}],b={render:()=>{const[i,a]=f.useState(Ie),I=({active:n,over:d,delta:e})=>{const t=i.findIndex(r=>r.id===n.id),l=i.findIndex(r=>r.id===d.id);a(r=>{const u=[...r],[c]=u.splice(t,1);return c&&(u.splice(l,0,c),(e==null?void 0:e.x)>50?c.asChild=!0:(e==null?void 0:e.x)<-50&&(c.asChild=!1)),u[0]&&(u[0].asChild=!1),u})},h=(n,d)=>{a(e=>e.map(t=>t.id===n?{...t,label:d}:t))},C=(n,d)=>{a(e=>e.map(t=>t.id===n?{...t,url:d}:t))},o=(n,d)=>{a(e=>e.map(t=>t.id===n?{...t,target:d}:t))},p=n=>{a(d=>d.filter(e=>e.id!==n))},g=()=>{const n={id:m(),label:`New Link ${i.length+1}`,url:"",target:"New Tab"};a(d=>[...d,n])};return s.jsxs(L,{children:[s.jsx(F,{onDragEnd:I,items:i.map(n=>n.id),restrictToVerticalAxisValue:!1,children:i.map(n=>s.jsx(re,{id:n.id,label:n.label,url:n.url,asChild:n.asChild,target:n.target,onLabelChange:d=>h(n.id,d),onUrlChange:d=>C(n.id,d),onSelectChange:d=>o(n.id,d),onDeleteHandle:()=>p(n.id)},n.id))}),s.jsx(A,{onClick:g,leftIcon:y,children:"Add New Custom Link"})]})}},w={render:()=>s.jsx(me,{dashIconslug:"",url:"",onSlugChange:i=>console.log(i),onURLChange:i=>console.log(i)})},Ce=[{id:m(),fontName:"Poppins Classic",fontWeights:"300, 400, 500, 600"},{id:m(),fontName:"Roboto Mono",fontWeights:"100, 300, 400"}],D={render:()=>{const[i,a]=f.useState(Ce),I=({active:o,over:p})=>{const g=i.findIndex(d=>d.id===o.id),n=i.findIndex(d=>d.id===p.id);g===-1||n===-1||a(d=>{const e=[...d],[t]=e.splice(g,1);return t&&e.splice(n,0,t),e})},h=o=>{a(p=>p.filter(g=>g.id!==o))},C=()=>{const o={id:m(),fontName:`New Font ${i.length+1}`,fontWeights:""};a(p=>[...p,o])};return s.jsxs(L,{children:[s.jsx(F,{onDragEnd:I,items:i.map(o=>o.id),children:i.map(o=>s.jsx(ce,{id:o.id,fontName:o.fontName,fontWeights:o.fontWeights,onDeleteHandle:()=>h(o.id)},o.id))}),s.jsx(A,{onClick:C,leftIcon:y,children:"Add New Custom Font"})]})}},S={render:()=>s.jsx(pe,{id:"preset-1"})},E={render:()=>s.jsx(ue,{id:"replace-field-1"})},fe=[{id:"template-1",title:"Template 1"},{id:"template-2",title:"Template 2"},{id:"template-3",title:"Template 3"}],T={render:()=>s.jsx(ge,{role:"Administrator",templates:fe,selectedTemplateId:"",placeholder:"Select a template",onSelectChange:i=>alert(`selected Templates is : ${i}`)})},v=()=>{const[i,a]=f.useState(!1);return s.jsx(le,{id:"test-template",isEditable:i,onEditClick:()=>a(!0),onEditComplete:()=>a(!1)})},ve=[{id:m(),name:"Default Template",isDefault:!0,assigned:!0,assignedToRole:"Administrator"},{id:m(),name:"Custom Header Template",assigned:!0,assignedToRole:"Manager"},{id:m(),name:"Minimal Template"}],k={render:()=>{const[i,a]=f.useState(ve),[I,h]=f.useState(new Set),C=e=>{const{active:t,over:l}=e;if(!l||t.id===l.id)return;const r=i.findIndex(N=>N.id===t.id),u=i.findIndex(N=>N.id===l.id);if(r===-1||u===-1)return;const c=[...i],[j]=c.splice(r,1);j&&c.splice(u,0,j),a(c)},o=(e,t)=>{a(l=>l.map(r=>r.id===e?{...r,name:t}:r))},p=e=>{h(t=>new Set(t).add(e))},g=e=>{h(t=>{const l=new Set(t);return l.delete(e),l})},n=e=>{a(t=>t.filter(l=>l.id!==e)),h(t=>{const l=new Set(t);return l.delete(e),l})},d=()=>{const e={id:m(),name:`New Template ${i.length+1}`};a(t=>[...t,e])};return s.jsxs(L,{children:[s.jsx(F,{onDragEnd:C,items:i.map(e=>e.id),children:i.map(e=>s.jsx(le,{id:e.id,name:e.name,isDefault:e.isDefault,isEditable:I.has(e.id),onEditClick:()=>p(e.id),onEditComplete:()=>g(e.id),onNameChange:t=>o(e.id,t),onDeleteHandle:()=>n(e.id),onCopyClick:()=>alert(`Copied template: ${e.name}`),badgeStatus:e.assigned?"active":"inactive",badgeText:e.assigned?e.assignedToRole:"Unassigned"},e.id))}),s.jsx(A,{onClick:d,leftIcon:y,children:"Add New Template"})]})}};v.__docgenInfo={description:"",methods:[],displayName:"TemplateFieldSingle"};var O,P,U;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        id: generateId(),
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
}`,...(U=(P=x.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var R,$,B;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
        id: generateId(),
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
}`,...(B=($=b.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var M,H,W;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <MainParentLink dashIconslug="" url="" onSlugChange={v => console.log(v)} onURLChange={v => console.log(v)} />;
  }
}`,...(W=(H=w.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var V,_,Q;D.parameters={...D.parameters,docs:{...(V=D.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
        id: generateId(),
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
}`,...(Q=(_=D.parameters)==null?void 0:_.docs)==null?void 0:Q.source}}};var z,G,q;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <DndModulePreset id={"preset-1"} />
}`,...(q=(G=S.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var J,K,X;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-1"} />
}`,...(X=(K=E.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,ee;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:'{\n  render: () => <TemplateAssignmentField role="Administrator" templates={templates} selectedTemplateId="" placeholder="Select a template" onSelectChange={id => alert(`selected Templates is : ${id}`)} />\n}',...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,de;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const [editable, setEditable] = useState(false);
  return <DndTemplateField id={"test-template"} isEditable={editable} onEditClick={() => setEditable(true)} onEditComplete={() => setEditable(false)} />;
}`,...(de=(te=v.parameters)==null?void 0:te.docs)==null?void 0:de.source}}};var ie,ae,se;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
        id: generateId(),
        name: \`New Template \${items.length + 1}\`
      };
      setItems(prev => [...prev, newItem]);
    };
    return <Stack>
        <SortableList onDragEnd={handleDragEnd} items={items.map(item => item.id)}>
          {items.map(item => <DndTemplateField key={item.id} id={item.id} name={item.name} isDefault={item.isDefault} isEditable={editableItems.has(item.id)} onEditClick={() => handleEditClick(item.id)} onEditComplete={() => handleEditComplete(item.id)} onNameChange={name => handleNameChange(item.id, name)} onDeleteHandle={() => handleDelete(item.id)} onCopyClick={() => alert(\`Copied template: \${item.name}\`)} badgeStatus={item.assigned ? "active" : "inactive"} badgeText={item.assigned ? item.assignedToRole : "Unassigned"} />)}
        </SortableList>
        <Button onClick={handleAdd} leftIcon={AddIcon}>
          Add New Template
        </Button>
      </Stack>;
  }
}`,...(se=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const _e=["ColorField","LinkField","ParentQuickLink","FontField","ModulePreset","ReplaceField","TemplateAssignment","TemplateFieldSingle","TemplateField"];export{x as ColorField,D as FontField,b as LinkField,S as ModulePreset,w as ParentQuickLink,E as ReplaceField,T as TemplateAssignment,k as TemplateField,v as TemplateFieldSingle,_e as __namedExportsOrder,Ve as default};
