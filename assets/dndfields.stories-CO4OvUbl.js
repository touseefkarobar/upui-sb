import{j as o,r as v}from"./iframe-CaWW7jgH.js";import{D as U,S as x,a as De,M as we,b as Se,c as Ee,d as xe,e as Le,T as Te,f as be}from"./index-DpSBSIOi.js";import{g as c}from"./generateId-C1v-VC-6.js";import{S as N}from"./index-j9EYpITY.js";import{B as O}from"./index-7mhxAB1e.js";import{A as j}from"./AddIcon-O4HgxEC9.js";import{A as ke,M as ye,B as Fe,C as Ae}from"./MediaLibraryIcon-BSw2j6cW.js";import"./index-CmvgGgph.js";import"./type-Bc9hys3F.js";import"./index-Dn5eg8K1.js";import"./index-Bc6K6RH1.js";import"./useOutsideToggle-C0w7Fiwi.js";import"./DropdownIcon-CXFYYwQd.js";import"./SearchIcon-CRgodNuM.js";import"./FilledIcon-IqRk7-rB.js";import"./ResetIcon-MqWkDdFt.js";import"./index-CpZPfm_m.js";import"./index-CZ7G1oNJ.js";import"./index-COqrdhil.js";import"./Heading-DPtYiZKK.js";import"./CloseIcon-st1BJuho.js";import"./index-DDQFMeDr.js";import"./index-DlItYQGi.js";import"./Text-CA1DT2PL.js";import"./TrashIcon-CR1br57O.js";import"./ImportExportIcon-anTemMWO.js";import"./RolesIcon-D55wqLz3.js";import"./CheckmarkIcon-CQm_xam0.js";import"./CopyIcon-DV_TqPw6.js";import"./index-BwDH66zd.js";import"./index-CEiakQqQ.js";import"./index-Bs-HCcsq.js";const Cn={title:"PAC Universal Plugin UI/Primitive/DnD Fields",component:U},Ne=[{id:c(),label:"Primary",color:"#000000",isDefault:!0,colorOpacity:1},{id:c(),label:"Secondary",color:"#FF0000",isDefault:!0,colorOpacity:1}],b={render:()=>{const[d,a]=v.useState(Ne),h=n=>{const{active:i,over:e}=n;if(!e||i.id===e.id)return;const t=d.findIndex(g=>g.id===i.id),l=d.findIndex(g=>g.id===e.id);if(t===-1||l===-1)return;const p=[...d],[I]=p.splice(t,1);I&&p.splice(l,0,I),a(p)},s=(n,i)=>{a(e=>e.map(t=>t.id===n?{...t,label:i}:t))},C=(n,i)=>{a(e=>e.map(t=>t.id===n?{...t,color:i}:t))},r=(n,i)=>{a(e=>e.map(t=>t.id===n?{...t,colorOpacity:i}:t))},m=n=>{a(i=>i.filter(e=>e.id!==n))},u=()=>{const n={id:c(),label:`New Color ${d.length+1}`,color:"#888888",colorOpacity:1};a(i=>[...i,n])};return o.jsxs(N,{children:[o.jsx(x,{onDragEnd:h,items:d.map(n=>n.id),children:d.map(n=>o.jsx(U,{id:n.id,label:n.label,color:n.color,colorOpacity:n.colorOpacity,setColorOpacity:i=>r(n.id,i),onLabelChange:i=>s(n.id,i),onColorChange:i=>C(n.id,i),onDeleteHandle:()=>m(n.id),isDefault:n.isDefault,enableConfirmation:!0,popupDirection:"down"},n.id))}),o.jsx(O,{onClick:u,leftIcon:j,children:"Add New Custom Color"})]})}},D={render:()=>{const[d,a]=v.useState("#ff0000"),[h,s]=v.useState(1);return o.jsx(U,{id:2,label:"Color Field Label",color:d,onColorChange:a,colorOpacity:h,setColorOpacity:s,onLabelChange:()=>{},onDeleteHandle:()=>{},isVariable:!0,variableTitle:"Primary",popupDirection:"down"})}},Oe=[{id:c(),label:"Google",url:"https://www.google.com",target:"New Tab"},{id:c(),label:"Docs",url:"https://docs.example.com",target:"Same Tab",asChild:!0}],w={render:()=>{const[d,a]=v.useState(Oe),h=({active:n,over:i,delta:e})=>{const t=d.findIndex(p=>p.id===n.id),l=d.findIndex(p=>p.id===i.id);a(p=>{const I=[...p],[g]=I.splice(t,1);return g&&(I.splice(l,0,g),(e==null?void 0:e.x)>50?g.asChild=!0:(e==null?void 0:e.x)<-50&&(g.asChild=!1)),I[0]&&(I[0].asChild=!1),I})},s=(n,i)=>{a(e=>e.map(t=>t.id===n?{...t,label:i}:t))},C=(n,i)=>{a(e=>e.map(t=>t.id===n?{...t,url:i}:t))},r=(n,i)=>{a(e=>e.map(t=>t.id===n?{...t,target:i}:t))},m=n=>{a(i=>i.filter(e=>e.id!==n))},u=()=>{const n={id:c(),label:`New Link ${d.length+1}`,url:"",target:"New Tab"};a(i=>[...i,n])};return o.jsxs(N,{children:[o.jsx(x,{onDragEnd:h,items:d.map(n=>n.id),restrictToVerticalAxisValue:!1,children:d.map(n=>o.jsx(De,{id:n.id,label:n.label,url:n.url,asChild:n.asChild,target:n.target,onLabelChange:i=>s(n.id,i),onUrlChange:i=>C(n.id,i),onSelectChange:i=>r(n.id,i),onDeleteHandle:()=>m(n.id)},n.id))}),o.jsx(O,{onClick:u,leftIcon:j,children:"Add New Custom Link"})]})}},S={render:()=>o.jsx(we,{dashIconslug:"",url:"",onSlugChange:d=>console.log(d),onURLChange:d=>console.log(d)})},je=[{id:c(),fontName:"Poppins Classic",fontWeights:"300, 400, 500, 600"},{id:c(),fontName:"Roboto Mono",fontWeights:"100, 300, 400"}],E={render:()=>{const[d,a]=v.useState(je),h=({active:r,over:m})=>{const u=d.findIndex(i=>i.id===r.id),n=d.findIndex(i=>i.id===m.id);u===-1||n===-1||a(i=>{const e=[...i],[t]=e.splice(u,1);return t&&e.splice(n,0,t),e})},s=r=>{a(m=>m.filter(u=>u.id!==r))},C=()=>{const r={id:c(),fontName:`New Font ${d.length+1}`,fontWeights:""};a(m=>[...m,r])};return o.jsxs(N,{children:[o.jsx(x,{onDragEnd:h,items:d.map(r=>r.id),children:d.map(r=>o.jsx(Se,{id:r.id,fontName:r.fontName,fontWeights:r.fontWeights,onDeleteHandle:()=>s(r.id)},r.id))}),o.jsx(O,{onClick:C,leftIcon:j,children:"Add New Custom Font"})]})}},L={render:()=>o.jsx(Ee,{id:"preset-1"})},T={render:()=>o.jsx(xe,{id:"replace-field-1",placeholders:["Video Title","Video URL"]})},k={render:()=>o.jsx(xe,{id:"replace-field-error-1",placeholders:["Video Title","Video URL"],cssSelectorError:"*Invalid Title",customTextError:"*Invalid link"})},Re=[{id:c(),name:"Accordion",icon:ke},{id:c(),name:"Audio",icon:ye},{id:c(),name:"Bar Counter",icon:Fe},{id:c(),name:"Code",icon:Ae}],y={render:()=>{const[d,a]=v.useState(Re),h=s=>{const{active:C,over:r}=s;!r||C.id===r.id||a(m=>{const u=m.findIndex(t=>t.id===C.id),n=m.findIndex(t=>t.id===r.id);if(u===-1||n===-1)return m;const i=[...m],[e]=i.splice(u,1);return e&&i.splice(n,0,e),i})};return o.jsx(x,{onDragEnd:h,items:d.map(s=>s.id),children:d.map(s=>o.jsx(Le,{id:s.id,moduleName:s.name,moduleIcon:s.icon},s.id))})}},Ue=[{id:"template-1",title:"Template 1"},{id:"template-2",title:"Template 2"},{id:"template-3",title:"Template 3"}],F={render:()=>o.jsx(Te,{role:"Administrator",templates:Ue,selectedTemplateId:"",placeholder:"Select a template",onSelectChange:d=>alert(`selected Templates is : ${d}`)})},f=()=>{const[d,a]=v.useState(!1);return o.jsx(be,{id:"test-template",isEditable:d,onEditClick:()=>a(!0),onEditComplete:()=>a(!1)})},Ve=[{id:c(),name:"Default Template",isDefault:!0,assigned:!0,assignedToRoles:["Administrator","Editor","Publisher","SEO"],usersList:[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"},{src:"https://i.pravatar.cc/150?img=2",alt:"User 2",userName:"Jane Smith"},{src:"https://i.pravatar.cc/150?img=3",alt:"User 3",userName:"Bob Wilson"},{src:"https://i.pravatar.cc/150?img=4",alt:"User 4",userName:"Alice Brown"},{src:"https://i.pravatar.cc/150?img=5",alt:"User 5",userName:"Charlie Davis"}]},{id:c(),name:"Custom Header Template",assigned:!0,assignedToRoles:["Manager","Reviewer"],usersList:[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"}]},{id:c(),name:"Minimal Template",assignedToRoles:["All Roles"]}],A={render:()=>{const[d,a]=v.useState(Ve),[h,s]=v.useState(new Set),C=e=>{const{active:t,over:l}=e;if(!l||t.id===l.id)return;const p=d.findIndex(R=>R.id===t.id),I=d.findIndex(R=>R.id===l.id);if(p===-1||I===-1)return;const g=[...d],[V]=g.splice(p,1);V&&g.splice(I,0,V),a(g)},r=(e,t)=>{a(l=>l.map(p=>p.id===e?{...p,name:t}:p))},m=e=>{console.log("Editing Clicked:",e),s(t=>new Set(t).add(e))},u=e=>{s(t=>{const l=new Set(t);return l.delete(e),l})},n=e=>{a(t=>t.filter(l=>l.id!==e)),s(t=>{const l=new Set(t);return l.delete(e),l})},i=()=>{const e={id:c(),name:`New Template ${d.length+1}`};a(t=>[...t,e])};return o.jsxs(N,{children:[o.jsx(x,{onDragEnd:C,items:d.map(e=>e.id),children:d.map(e=>o.jsx(be,{id:e.id,name:e.name,isDefault:e.isDefault,isEditable:h.has(e.id),onEditClick:()=>m(e.id),onEditComplete:()=>u(e.id),onNameChange:t=>r(e.id,t),onDeleteHandle:()=>n(e.id),onCopyClick:()=>alert(`Copied template: ${e.name}`),usersList:e.usersList,roles:e.assignedToRoles,variant:"secondary"},e.id))}),o.jsx(O,{onClick:i,leftIcon:j,children:"Add New Template"})]})}};f.__docgenInfo={description:"",methods:[],displayName:"TemplateFieldSingle"};var M,P,B;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(B=(P=b.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var $,H,W;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState("#ff0000");
    const [colorOpacity, setColorOpacity] = useState(1);
    return <DndColorField id={2} label="Color Field Label" color={color} onColorChange={setColor} colorOpacity={colorOpacity} setColorOpacity={setColorOpacity} onLabelChange={() => {}} onDeleteHandle={() => {}} isVariable={true} variableTitle="Primary" popupDirection="down" />;
  }
}`,...(W=(H=D.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var _,J,Q;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var z,G,q;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    return <MainParentLink dashIconslug="" url="" onSlugChange={v => console.log(v)} onURLChange={v => console.log(v)} />;
  }
}`,...(q=(G=S.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var K,X,Y;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <DndModulePreset id={"preset-1"} />
}`,...(ne=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ie,de;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-1"} placeholders={["Video Title", "Video URL"]} />
}`,...(de=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ae,oe,re;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-error-1"} placeholders={["Video Title", "Video URL"]} cssSelectorError="*Invalid Title" customTextError="*Invalid link" />
}`,...(re=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var se,le,ce;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var me,pe,ue;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:'{\n  render: () => <TemplateAssignmentField role="Administrator" templates={templates} selectedTemplateId="" placeholder="Select a template" onSelectChange={id => alert(`selected Templates is : ${id}`)} />\n}',...(ue=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,he,Ie;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const [editable, setEditable] = useState(false);
  return <DndTemplateField id={"test-template"} isEditable={editable} onEditClick={() => setEditable(true)} onEditComplete={() => setEditable(false)} />;
}`,...(Ie=(he=f.parameters)==null?void 0:he.docs)==null?void 0:Ie.source}}};var Ce,ve,fe;A.parameters={...A.parameters,docs:{...(Ce=A.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(fe=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};const vn=["ColorField","VariableColorField","LinkField","ParentQuickLink","FontField","ModulePreset","ReplaceField","ReplaceFieldWithValidation","ModuleItemList","TemplateAssignment","TemplateFieldSingle","TemplateField"];export{b as ColorField,E as FontField,w as LinkField,y as ModuleItemList,L as ModulePreset,S as ParentQuickLink,T as ReplaceField,k as ReplaceFieldWithValidation,F as TemplateAssignment,A as TemplateField,f as TemplateFieldSingle,D as VariableColorField,vn as __namedExportsOrder,Cn as default};
