import{j as o,r as v}from"./iframe-C7wscEl7.js";import{D as re,S as L,a as le,M as me,b as ce,c as pe,d as ue,T as ge,e as se}from"./index-CNBCg3IL.js";import{g as m}from"./index-Dtk0QW88.js";import{S as F}from"./index-CPsyBaU-.js";import{B as N}from"./index-BKJgL7oT.js";import{A}from"./AddIcon-C3vQ5JoV.js";import"./index-KC3juEkL.js";import"./index-X83FvaW6.js";import"./FilledIcon-S-I4GpVb.js";import"./RolesIcon-B2zd2rz3.js";import"./type-Bc9hys3F.js";import"./StopIcon-DIijbOtH.js";import"./index-CjTQB2Sh.js";import"./index-C2LyKJyn.js";import"./index-BoHIwHtO.js";import"./index-BtzI24jn.js";import"./DropdownIcon-C_SQO9jT.js";import"./ChevronRightIcon-BI6Ott6o.js";import"./Heading-DS6Z8PsO.js";import"./PACLogo-DVzXiOiq.js";import"./BackIcon-DTaGX7ix.js";import"./index-ByrPlmLl.js";import"./OverviewPage-Be_I3-S2.js";import"./Text-D5iGevih.js";import"./index-DQLdQ5zR.js";import"./index-DUw6Sxi8.js";import"./KeyIcon-CU1kIoQg.js";import"./HomeIcon-DNCOpoRB.js";import"./OpenIcon-CsFfFMg6.js";import"./SupportIcon-D6u3sR99.js";import"./UsersIcon-CMNM07ta.js";import"./index-DjlBhOnV.js";import"./EyeIcon-MUz-Wj1g.js";import"./index-DHXFCtlI.js";import"./index-C_ZYXxrW.js";import"./index-BncmDYxz.js";import"./index-Dq7h7Pqt.js";import"./index-XyYtV1y3.js";import"./InfoIcon-DHyE-l89.js";import"./TextLink-B3YVUqBV.js";import"./index-02k1QxCG.js";import"./useOutsideToggle-BNDWnRb2.js";import"./DiviExperienceHelperIcon-YnC5C2qQ.js";import"./index-D7U28h0M.js";import"./PacAboutPage-DkTGkY0a.js";import"./index-BhQWKPTc.js";import"./WebsiteIcon-DXfksjWa.js";import"./index-DLIm7HJE.js";import"./SettingsIcon-CEXfIqeR.js";import"./ChangelogPage-BI4bIdJB.js";import"./index-CHFuTcN5.js";import"./index-Br_D64t4.js";import"./TrashIcon-ZxB9YF--.js";import"./index-BJlF8vEN.js";import"./index-B_u7ipsP.js";import"./index-CqN93wzL.js";import"./index-DVoT6tuZ.js";import"./SearchIcon-C1eT057s.js";import"./ResetIcon-B2gVCHyW.js";import"./ImportExportIcon-CrbPNFbq.js";import"./index-zKFqfo3n.js";import"./index-afSTIpc0.js";import"./Label-DHrt8nlR.js";import"./index-ChIzaZUG.js";import"./index-0gA5gz9S.js";import"./CloseIcon-CphipCW0.js";import"./FaqIcon-B65cDL5x.js";import"./index-MBoaS1I_.js";import"./UnderlinedIcon-CjcOUsc-.js";import"./index-CnYIB_4a.js";import"./index-DaPdnIjZ.js";import"./index-DzxzmNVZ.js";import"./index-BINWdniO.js";import"./index-BXaWA_Uj.js";import"./FeatureRequestPage-2PqoZzXd.js";import"./EmailIcon-DJe89It-.js";import"./LicensePage-BaxAmBcL.js";import"./UpdatesIcon-Cb4D1hdI.js";import"./ChangelogIcon-08APUc0S.js";import"./DragIcon-qWNAkXxX.js";import"./WidowFixerIcon-BEx3AQPe.js";import"./CacheIcon-W1WxMA6Z.js";import"./LearningIcon-BOhLTe2z.js";const qt={title:"PAC Universal Plugin UI/Primitive/Draggable Fields",component:re},he=[{id:m(),label:"Primary",color:"#000000",isDefault:!0,colorOpacity:1},{id:m(),label:"Secondary",color:"#FF0000",isDefault:!0,colorOpacity:1}],x={render:()=>{const[d,a]=v.useState(he),I=t=>{const{active:i,over:e}=t;if(!e||i.id===e.id)return;const n=d.findIndex(c=>c.id===i.id),s=d.findIndex(c=>c.id===e.id);if(n===-1||s===-1)return;const l=[...d],[u]=l.splice(n,1);u&&l.splice(s,0,u),a(l)},h=(t,i)=>{a(e=>e.map(n=>n.id===t?{...n,label:i}:n))},C=(t,i)=>{a(e=>e.map(n=>n.id===t?{...n,color:i}:n))},r=(t,i)=>{a(e=>e.map(n=>n.id===t?{...n,colorOpacity:i}:n))},p=t=>{a(i=>i.filter(e=>e.id!==t))},g=()=>{const t={id:m(),label:`New Color ${d.length+1}`,color:"#888888",colorOpacity:1};a(i=>[...i,t])};return o.jsxs(F,{children:[o.jsx(L,{onDragEnd:I,items:d.map(t=>t.id),children:d.map(t=>o.jsx(re,{id:t.id,label:t.label,color:t.color,colorOpacity:t.colorOpacity,setColorOpacity:i=>r(t.id,i),onLabelChange:i=>h(t.id,i),onColorChange:i=>C(t.id,i),onDeleteHandle:()=>p(t.id),isDefault:t.isDefault},t.id))}),o.jsx(N,{onClick:g,leftIcon:A,children:"Add New Custom Color"})]})}},Ie=[{id:m(),label:"Google",url:"https://www.google.com",target:"New Tab"},{id:m(),label:"Docs",url:"https://docs.example.com",target:"Same Tab",asChild:!0}],b={render:()=>{const[d,a]=v.useState(Ie),I=({active:t,over:i,delta:e})=>{const n=d.findIndex(l=>l.id===t.id),s=d.findIndex(l=>l.id===i.id);a(l=>{const u=[...l],[c]=u.splice(n,1);return c&&(u.splice(s,0,c),(e==null?void 0:e.x)>50?c.asChild=!0:(e==null?void 0:e.x)<-50&&(c.asChild=!1)),u[0]&&(u[0].asChild=!1),u})},h=(t,i)=>{a(e=>e.map(n=>n.id===t?{...n,label:i}:n))},C=(t,i)=>{a(e=>e.map(n=>n.id===t?{...n,url:i}:n))},r=(t,i)=>{a(e=>e.map(n=>n.id===t?{...n,target:i}:n))},p=t=>{a(i=>i.filter(e=>e.id!==t))},g=()=>{const t={id:m(),label:`New Link ${d.length+1}`,url:"",target:"New Tab"};a(i=>[...i,t])};return o.jsxs(F,{children:[o.jsx(L,{onDragEnd:I,items:d.map(t=>t.id),restrictToVerticalAxisValue:!1,children:d.map(t=>o.jsx(le,{id:t.id,label:t.label,url:t.url,asChild:t.asChild,target:t.target,onLabelChange:i=>h(t.id,i),onUrlChange:i=>C(t.id,i),onSelectChange:i=>r(t.id,i),onDeleteHandle:()=>p(t.id)},t.id))}),o.jsx(N,{onClick:g,leftIcon:A,children:"Add New Custom Link"})]})}},w={render:()=>o.jsx(me,{dashIconslug:"",url:"",onSlugChange:d=>console.log(d),onURLChange:d=>console.log(d)})},Ce=[{id:m(),fontName:"Poppins Classic",fontWeights:"300, 400, 500, 600"},{id:m(),fontName:"Roboto Mono",fontWeights:"100, 300, 400"}],D={render:()=>{const[d,a]=v.useState(Ce),I=({active:r,over:p})=>{const g=d.findIndex(i=>i.id===r.id),t=d.findIndex(i=>i.id===p.id);g===-1||t===-1||a(i=>{const e=[...i],[n]=e.splice(g,1);return n&&e.splice(t,0,n),e})},h=r=>{a(p=>p.filter(g=>g.id!==r))},C=()=>{const r={id:m(),fontName:`New Font ${d.length+1}`,fontWeights:""};a(p=>[...p,r])};return o.jsxs(F,{children:[o.jsx(L,{onDragEnd:I,items:d.map(r=>r.id),children:d.map(r=>o.jsx(ce,{id:r.id,fontName:r.fontName,fontWeights:r.fontWeights,onDeleteHandle:()=>h(r.id)},r.id))}),o.jsx(N,{onClick:C,leftIcon:A,children:"Add New Custom Font"})]})}},S={render:()=>o.jsx(pe,{id:"preset-1"})},E={render:()=>o.jsx(ue,{id:"replace-field-1"})},ve=[{id:"template-1",title:"Template 1"},{id:"template-2",title:"Template 2"},{id:"template-3",title:"Template 3"}],k={render:()=>o.jsx(ge,{role:"Administrator",templates:ve,selectedTemplateId:"",placeholder:"Select a template",onSelectChange:d=>alert(`selected Templates is : ${d}`)})},f=()=>{const[d,a]=v.useState(!1);return o.jsx(se,{id:"test-template",isEditable:d,onEditClick:()=>a(!0),onEditComplete:()=>a(!1)})},fe=[{id:m(),name:"Default Template",isDefault:!0,assigned:!0,assignedToRoles:["Administrator","Editor","Publisher","SEO"],usersList:[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"},{src:"https://i.pravatar.cc/150?img=2",alt:"User 2",userName:"Jane Smith"},{src:"https://i.pravatar.cc/150?img=3",alt:"User 3",userName:"Bob Wilson"},{src:"https://i.pravatar.cc/150?img=4",alt:"User 4",userName:"Alice Brown"},{src:"https://i.pravatar.cc/150?img=5",alt:"User 5",userName:"Charlie Davis"}]},{id:m(),name:"Custom Header Template",assigned:!0,assignedToRoles:["Manager","Reviewer"],usersList:[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"}]},{id:m(),name:"Minimal Template",assignedToRoles:["All Roles"]}],T={render:()=>{const[d,a]=v.useState(fe),[I,h]=v.useState(new Set),C=e=>{const{active:n,over:s}=e;if(!s||n.id===s.id)return;const l=d.findIndex(y=>y.id===n.id),u=d.findIndex(y=>y.id===s.id);if(l===-1||u===-1)return;const c=[...d],[j]=c.splice(l,1);j&&c.splice(u,0,j),a(c)},r=(e,n)=>{a(s=>s.map(l=>l.id===e?{...l,name:n}:l))},p=e=>{console.log("Editing Clicked:",e),h(n=>new Set(n).add(e))},g=e=>{h(n=>{const s=new Set(n);return s.delete(e),s})},t=e=>{a(n=>n.filter(s=>s.id!==e)),h(n=>{const s=new Set(n);return s.delete(e),s})},i=()=>{const e={id:m(),name:`New Template ${d.length+1}`};a(n=>[...n,e])};return o.jsxs(F,{children:[o.jsx(L,{onDragEnd:C,items:d.map(e=>e.id),children:d.map(e=>o.jsx(se,{id:e.id,name:e.name,isDefault:e.isDefault,isEditable:I.has(e.id),onEditClick:()=>p(e.id),onEditComplete:()=>g(e.id),onNameChange:n=>r(e.id,n),onDeleteHandle:()=>t(e.id),onCopyClick:()=>alert(`Copied template: ${e.name}`),usersList:e.usersList,roles:e.assignedToRoles,variant:"secondary"},e.id))}),o.jsx(N,{onClick:i,leftIcon:A,children:"Add New Template"})]})}};f.__docgenInfo={description:"",methods:[],displayName:"TemplateFieldSingle"};var O,U,R;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(U=x.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var P,B,$;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...($=(B=b.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var M,H,W;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    return <MainParentLink dashIconslug="" url="" onSlugChange={v => console.log(v)} onURLChange={v => console.log(v)} />;
  }
}`,...(W=(H=w.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var V,_,J;D.parameters={...D.parameters,docs:{...(V=D.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(J=(_=D.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var Q,z,G;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <DndModulePreset id={"preset-1"} />
}`,...(G=(z=S.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var q,K,X;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-1"} />
}`,...(X=(K=E.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,ee;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:'{\n  render: () => <TemplateAssignmentField role="Administrator" templates={templates} selectedTemplateId="" placeholder="Select a template" onSelectChange={id => alert(`selected Templates is : ${id}`)} />\n}',...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ie;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const [editable, setEditable] = useState(false);
  return <DndTemplateField id={"test-template"} isEditable={editable} onEditClick={() => setEditable(true)} onEditComplete={() => setEditable(false)} />;
}`,...(ie=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var de,ae,oe;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(oe=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const Kt=["ColorField","LinkField","ParentQuickLink","FontField","ModulePreset","ReplaceField","TemplateAssignment","TemplateFieldSingle","TemplateField"];export{x as ColorField,D as FontField,b as LinkField,S as ModulePreset,w as ParentQuickLink,E as ReplaceField,k as TemplateAssignment,T as TemplateField,f as TemplateFieldSingle,Kt as __namedExportsOrder,qt as default};
