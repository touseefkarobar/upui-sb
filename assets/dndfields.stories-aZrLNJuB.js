import{j as s,r as f}from"./iframe-3yMaT3T2.js";import{D as he,S as x,a as fe,M as Ce,b as xe,c as De,d as Ie,e as be,T as we,f as ve}from"./index-BIvVjMrZ.js";import{g as m}from"./generateId-C1v-VC-6.js";import{S as N}from"./index-Cq_oKzTF.js";import{B as y}from"./index-DSAhj7ZZ.js";import{A as j}from"./AddIcon-DVY_Sj-f.js";import{A as Se,M as Ee,B as Te,C as Le}from"./MediaLibraryIcon-CNgUw-4i.js";import"./index-C8n3kyKq.js";import"./type-Bc9hys3F.js";import"./index-RiRS8x10.js";import"./index-DU02_Imf.js";import"./useOutsideToggle-Bu8Gmw0G.js";import"./DropdownIcon-DJ3KIUD_.js";import"./SearchIcon-C-EHnviJ.js";import"./FilledIcon-Crppz9YI.js";import"./ResetIcon-BejSt8Qx.js";import"./index-JYw7ZEY0.js";import"./index-CjDXqB-T.js";import"./index-CAMJaZB0.js";import"./Heading-CLxuHMzM.js";import"./CloseIcon-7VB8nj1V.js";import"./index-B_ixkBPl.js";import"./index-Cd6mnHrP.js";import"./Text-D5UJD15F.js";import"./TrashIcon-BQijKmTw.js";import"./ImportExportIcon-C_NXq-fx.js";import"./RolesIcon-ChCuE-GU.js";import"./CheckmarkIcon-DNs1Ain0.js";import"./CopyIcon-8TIFzGsd.js";import"./index-D0Xl8gy7.js";import"./index-CNbW4o_n.js";import"./index-DJDbDGHc.js";const un={title:"PAC Universal Plugin UI/Primitive/DnD Fields",component:he},ke=[{id:m(),label:"Primary",color:"#000000",isDefault:!0,colorOpacity:1},{id:m(),label:"Secondary",color:"#FF0000",isDefault:!0,colorOpacity:1}],D={render:()=>{const[d,a]=f.useState(ke),v=n=>{const{active:i,over:e}=n;if(!e||i.id===e.id)return;const t=d.findIndex(g=>g.id===i.id),l=d.findIndex(g=>g.id===e.id);if(t===-1||l===-1)return;const p=[...d],[h]=p.splice(t,1);h&&p.splice(l,0,h),a(p)},r=(n,i)=>{a(e=>e.map(t=>t.id===n?{...t,label:i}:t))},I=(n,i)=>{a(e=>e.map(t=>t.id===n?{...t,color:i}:t))},o=(n,i)=>{a(e=>e.map(t=>t.id===n?{...t,colorOpacity:i}:t))},c=n=>{a(i=>i.filter(e=>e.id!==n))},u=()=>{const n={id:m(),label:`New Color ${d.length+1}`,color:"#888888",colorOpacity:1};a(i=>[...i,n])};return s.jsxs(N,{children:[s.jsx(x,{onDragEnd:v,items:d.map(n=>n.id),children:d.map(n=>s.jsx(he,{id:n.id,label:n.label,color:n.color,colorOpacity:n.colorOpacity,setColorOpacity:i=>o(n.id,i),onLabelChange:i=>r(n.id,i),onColorChange:i=>I(n.id,i),onDeleteHandle:()=>c(n.id),isDefault:n.isDefault,enableConfirmation:!0,popupDirection:"down"},n.id))}),s.jsx(y,{onClick:u,leftIcon:j,children:"Add New Custom Color"})]})}},Ae=[{id:m(),label:"Google",url:"https://www.google.com",target:"New Tab"},{id:m(),label:"Docs",url:"https://docs.example.com",target:"Same Tab",asChild:!0}],b={render:()=>{const[d,a]=f.useState(Ae),v=({active:n,over:i,delta:e})=>{const t=d.findIndex(p=>p.id===n.id),l=d.findIndex(p=>p.id===i.id);a(p=>{const h=[...p],[g]=h.splice(t,1);return g&&(h.splice(l,0,g),(e==null?void 0:e.x)>50?g.asChild=!0:(e==null?void 0:e.x)<-50&&(g.asChild=!1)),h[0]&&(h[0].asChild=!1),h})},r=(n,i)=>{a(e=>e.map(t=>t.id===n?{...t,label:i}:t))},I=(n,i)=>{a(e=>e.map(t=>t.id===n?{...t,url:i}:t))},o=(n,i)=>{a(e=>e.map(t=>t.id===n?{...t,target:i}:t))},c=n=>{a(i=>i.filter(e=>e.id!==n))},u=()=>{const n={id:m(),label:`New Link ${d.length+1}`,url:"",target:"New Tab"};a(i=>[...i,n])};return s.jsxs(N,{children:[s.jsx(x,{onDragEnd:v,items:d.map(n=>n.id),restrictToVerticalAxisValue:!1,children:d.map(n=>s.jsx(fe,{id:n.id,label:n.label,url:n.url,asChild:n.asChild,target:n.target,onLabelChange:i=>r(n.id,i),onUrlChange:i=>I(n.id,i),onSelectChange:i=>o(n.id,i),onDeleteHandle:()=>c(n.id)},n.id))}),s.jsx(y,{onClick:u,leftIcon:j,children:"Add New Custom Link"})]})}},w={render:()=>s.jsx(Ce,{dashIconslug:"",url:"",onSlugChange:d=>console.log(d),onURLChange:d=>console.log(d)})},Fe=[{id:m(),fontName:"Poppins Classic",fontWeights:"300, 400, 500, 600"},{id:m(),fontName:"Roboto Mono",fontWeights:"100, 300, 400"}],S={render:()=>{const[d,a]=f.useState(Fe),v=({active:o,over:c})=>{const u=d.findIndex(i=>i.id===o.id),n=d.findIndex(i=>i.id===c.id);u===-1||n===-1||a(i=>{const e=[...i],[t]=e.splice(u,1);return t&&e.splice(n,0,t),e})},r=o=>{a(c=>c.filter(u=>u.id!==o))},I=()=>{const o={id:m(),fontName:`New Font ${d.length+1}`,fontWeights:""};a(c=>[...c,o])};return s.jsxs(N,{children:[s.jsx(x,{onDragEnd:v,items:d.map(o=>o.id),children:d.map(o=>s.jsx(xe,{id:o.id,fontName:o.fontName,fontWeights:o.fontWeights,onDeleteHandle:()=>r(o.id)},o.id))}),s.jsx(y,{onClick:I,leftIcon:j,children:"Add New Custom Font"})]})}},E={render:()=>s.jsx(De,{id:"preset-1"})},T={render:()=>s.jsx(Ie,{id:"replace-field-1",placeholders:["Video Title","Video URL"]})},L={render:()=>s.jsx(Ie,{id:"replace-field-error-1",placeholders:["Video Title","Video URL"],cssSelectorError:"*Invalid Title",customTextError:"*Invalid link"})},Ne=[{id:m(),name:"Accordion",icon:Se},{id:m(),name:"Audio",icon:Ee},{id:m(),name:"Bar Counter",icon:Te},{id:m(),name:"Code",icon:Le}],k={render:()=>{const[d,a]=f.useState(Ne),v=r=>{const{active:I,over:o}=r;!o||I.id===o.id||a(c=>{const u=c.findIndex(t=>t.id===I.id),n=c.findIndex(t=>t.id===o.id);if(u===-1||n===-1)return c;const i=[...c],[e]=i.splice(u,1);return e&&i.splice(n,0,e),i})};return s.jsx(x,{onDragEnd:v,items:d.map(r=>r.id),children:d.map(r=>s.jsx(be,{id:r.id,moduleName:r.name,moduleIcon:r.icon},r.id))})}},ye=[{id:"template-1",title:"Template 1"},{id:"template-2",title:"Template 2"},{id:"template-3",title:"Template 3"}],A={render:()=>s.jsx(we,{role:"Administrator",templates:ye,selectedTemplateId:"",placeholder:"Select a template",onSelectChange:d=>alert(`selected Templates is : ${d}`)})},C=()=>{const[d,a]=f.useState(!1);return s.jsx(ve,{id:"test-template",isEditable:d,onEditClick:()=>a(!0),onEditComplete:()=>a(!1)})},je=[{id:m(),name:"Default Template",isDefault:!0,assigned:!0,assignedToRoles:["Administrator","Editor","Publisher","SEO"],usersList:[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"},{src:"https://i.pravatar.cc/150?img=2",alt:"User 2",userName:"Jane Smith"},{src:"https://i.pravatar.cc/150?img=3",alt:"User 3",userName:"Bob Wilson"},{src:"https://i.pravatar.cc/150?img=4",alt:"User 4",userName:"Alice Brown"},{src:"https://i.pravatar.cc/150?img=5",alt:"User 5",userName:"Charlie Davis"}]},{id:m(),name:"Custom Header Template",assigned:!0,assignedToRoles:["Manager","Reviewer"],usersList:[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"}]},{id:m(),name:"Minimal Template",assignedToRoles:["All Roles"]}],F={render:()=>{const[d,a]=f.useState(je),[v,r]=f.useState(new Set),I=e=>{const{active:t,over:l}=e;if(!l||t.id===l.id)return;const p=d.findIndex(R=>R.id===t.id),h=d.findIndex(R=>R.id===l.id);if(p===-1||h===-1)return;const g=[...d],[U]=g.splice(p,1);U&&g.splice(h,0,U),a(g)},o=(e,t)=>{a(l=>l.map(p=>p.id===e?{...p,name:t}:p))},c=e=>{console.log("Editing Clicked:",e),r(t=>new Set(t).add(e))},u=e=>{r(t=>{const l=new Set(t);return l.delete(e),l})},n=e=>{a(t=>t.filter(l=>l.id!==e)),r(t=>{const l=new Set(t);return l.delete(e),l})},i=()=>{const e={id:m(),name:`New Template ${d.length+1}`};a(t=>[...t,e])};return s.jsxs(N,{children:[s.jsx(x,{onDragEnd:I,items:d.map(e=>e.id),children:d.map(e=>s.jsx(ve,{id:e.id,name:e.name,isDefault:e.isDefault,isEditable:v.has(e.id),onEditClick:()=>c(e.id),onEditComplete:()=>u(e.id),onNameChange:t=>o(e.id,t),onDeleteHandle:()=>n(e.id),onCopyClick:()=>alert(`Copied template: ${e.name}`),usersList:e.usersList,roles:e.assignedToRoles,variant:"secondary"},e.id))}),s.jsx(y,{onClick:i,leftIcon:j,children:"Add New Template"})]})}};C.__docgenInfo={description:"",methods:[],displayName:"TemplateFieldSingle"};var O,M,V;D.parameters={...D.parameters,docs:{...(O=D.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
        setColorOpacity={newOpacity => handleColorOpacityChange(item.id, newOpacity)} onLabelChange={label => handleLabelChange(item.id, label)} onColorChange={color => handleColorChange(item.id, color)} onDeleteHandle={() => handleDelete(item.id)} isDefault={item.isDefault} enableConfirmation={true} popupDirection="down" />)}
        </SortableList>
        <Button onClick={handleAdd} leftIcon={AddIcon}>
          Add New Custom Color
        </Button>
      </Stack>;
  }
}`,...(V=(M=D.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var B,P,$;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...($=(P=b.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var W,H,_;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    return <MainParentLink dashIconslug="" url="" onSlugChange={v => console.log(v)} onURLChange={v => console.log(v)} />;
  }
}`,...(_=(H=w.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var J,Q,z;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(z=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:z.source}}};var G,q,K;E.parameters={...E.parameters,docs:{...(G=E.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <DndModulePreset id={"preset-1"} />
}`,...(K=(q=E.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var X,Y,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-1"} placeholders={["Video Title", "Video URL"]} />
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;L.parameters={...L.parameters,docs:{...(ee=L.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-error-1"} placeholders={["Video Title", "Video URL"]} cssSelectorError="*Invalid Title" customTextError="*Invalid link" />
}`,...(te=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ie,de,ae;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState<ModuleItem[]>(initialModuleItems);
    const handleDragEnd = (event: any) => {
      const {
        active,
        over
      } = event;
      if (!over || active.id === over.id) return;
      setItems(prev => {
        const oldIndex = prev.findIndex(item => item.id === active.id);
        const newIndex = prev.findIndex(item => item.id === over.id);
        if (oldIndex === -1 || newIndex === -1) return prev;
        const updated = [...prev];
        const [moved] = updated.splice(oldIndex, 1);
        if (moved) updated.splice(newIndex, 0, moved);
        return updated;
      });
    };
    return <SortableList onDragEnd={handleDragEnd} items={items.map(item => item.id)}>
        {items.map(item => <DndModuleItem key={item.id} id={item.id} moduleName={item.name} moduleIcon={item.icon} />)}
      </SortableList>;
  }
}`,...(ae=(de=k.parameters)==null?void 0:de.docs)==null?void 0:ae.source}}};var se,oe,re;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:'{\n  render: () => <TemplateAssignmentField role="Administrator" templates={templates} selectedTemplateId="" placeholder="Select a template" onSelectChange={id => alert(`selected Templates is : ${id}`)} />\n}',...(re=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var le,me,ce;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const [editable, setEditable] = useState(false);
  return <DndTemplateField id={"test-template"} isEditable={editable} onEditClick={() => setEditable(true)} onEditComplete={() => setEditable(false)} />;
}`,...(ce=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var pe,ue,ge;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
      console.log("Editing Clicked:", id);
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
          {items.map(item => <DndTemplateField key={item.id} id={item.id} name={item.name} isDefault={item.isDefault} isEditable={editableItems.has(item.id)} onEditClick={() => handleEditClick(item.id)} onEditComplete={() => handleEditComplete(item.id)} onNameChange={name => handleNameChange(item.id, name)} onDeleteHandle={() => handleDelete(item.id)} onCopyClick={() => alert(\`Copied template: \${item.name}\`)}
        // badgeStatus={item.assigned ? "active" : "inactive"}
        // badgeText={item.assigned ? item.assignedToRoles?.[0] : "Unassigned"}
        usersList={item.usersList} roles={item.assignedToRoles} variant="secondary" />)}
        </SortableList>
        <Button onClick={handleAdd} leftIcon={AddIcon}>
          Add New Template
        </Button>
      </Stack>;
  }
}`,...(ge=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};const gn=["ColorField","LinkField","ParentQuickLink","FontField","ModulePreset","ReplaceField","ReplaceFieldWithValidation","ModuleItemList","TemplateAssignment","TemplateFieldSingle","TemplateField"];export{D as ColorField,S as FontField,b as LinkField,k as ModuleItemList,E as ModulePreset,w as ParentQuickLink,T as ReplaceField,L as ReplaceFieldWithValidation,A as TemplateAssignment,F as TemplateField,C as TemplateFieldSingle,gn as __namedExportsOrder,un as default};
