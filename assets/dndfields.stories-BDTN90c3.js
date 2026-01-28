import{j as a,r as f}from"./iframe-CNOrQhzL.js";import{D as he,S as x,a as fe,M as Ce,b as xe,c as De,d as Ie,e as be,T as we,f as ve}from"./index-Yo7T7djC.js";import{g as m}from"./index-B7FhRvMG.js";import{S as N}from"./index-CvSLm2Y9.js";import{B as y}from"./index-Txk62HWb.js";import{A as j}from"./AddIcon-DJbWPeoI.js";import{A as Se,z as Ee,e as Te,l as Le}from"./DragIcon-BlSkFN4X.js";import"./FilledIcon-DkPitjMY.js";import"./RolesIcon-CoGF8nGn.js";import"./type-Bc9hys3F.js";import"./StopIcon-mmtUAxh9.js";import"./CopyIcon-DffhOJxm.js";import"./index-BdE0__Zo.js";import"./index-Bx4RW36G.js";import"./index-hzpvX8QR.js";import"./index-CeJ92Hzf.js";import"./DropdownIcon-UjJX9zkR.js";import"./ChevronRightIcon-Vcvs42yR.js";import"./Heading-D_0YQaI8.js";import"./PACLogo-v4BG4mhg.js";import"./BackIcon-B2aCzSQs.js";import"./index-DlQGR-A4.js";import"./OverviewPage-ilMAvEV-.js";import"./Text-1djUnFeV.js";import"./index-JaCIZdTO.js";import"./index-Dz5mPse1.js";import"./KeyIcon-Cxz8CLmE.js";import"./HomeIcon-SmvJB4vK.js";import"./OpenIcon-DKMUpYJ_.js";import"./SupportIcon-u4I9tkSd.js";import"./UsersIcon-CQ8j5PQ1.js";import"./index-DrAPBdwP.js";import"./EyeIcon-DYmRVGz4.js";import"./index-K9W0V8FX.js";import"./index-C9Hx_e03.js";import"./index-C_Sd9B67.js";import"./index-Dq7h7Pqt.js";import"./index-CQ9M-q9S.js";import"./InfoIcon-hTJzSU9a.js";import"./TextLink-D0W87ZA7.js";import"./index-Cd8YUzSG.js";import"./useOutsideToggle-Bh2SgCRq.js";import"./DiviExperienceHelperIcon-BZBWnluD.js";import"./index-Do4hSdne.js";import"./PacAboutPage-DIcsbFXJ.js";import"./index-Bz5OOHKk.js";import"./WebsiteIcon-BNL8jUAy.js";import"./index-BtQZ4BK7.js";import"./SettingsIcon-DBTD2gdS.js";import"./ChangelogPage-BMHTeYjF.js";import"./index-DICioQ2z.js";import"./index-CpfmNiJK.js";import"./TrashIcon-C4M1rtQc.js";import"./index-qFFs7-F0.js";import"./index-DTtit_W7.js";import"./index-CEUd6_Fn.js";import"./index-DteYYoHn.js";import"./SearchIcon-ClYAV3wG.js";import"./ResetIcon-9tnWZP-2.js";import"./index-CYi8mRsl.js";import"./index-D6XbHZP2.js";import"./index-DddWsfF9.js";import"./CloseIcon-BwbXlZFS.js";import"./index-DP8_A_oe.js";import"./ImportExportIcon-BRfe83xu.js";import"./index-DcfMsxZp.js";import"./index-CBQc30Vs.js";import"./Label-BMF-d3Cd.js";import"./index-nlgH8zEj.js";import"./index-DsxA8zlD.js";import"./FaqIcon-CJASINW7.js";import"./index-BgiBO5i6.js";import"./UnderlinedIcon-C2a_Zmk2.js";import"./index-liL1LR-a.js";import"./index-By5hGlng.js";import"./index-CnQkTeC1.js";import"./FeatureRequestPage-Ctboinz_.js";import"./EmailIcon-BDToC8yG.js";import"./LicensePage-CiQpWuMk.js";import"./UpdatesIcon-s8rqp50t.js";import"./ChangelogIcon-DnrqH3Pw.js";import"./DiviVideoSliderIcon-3639yTub.js";import"./WidowFixerIcon-D1WJIXSc.js";import"./CacheIcon-C5__7Ms5.js";import"./LearningIcon-DFntWGJ_.js";const pn={title:"PAC Universal Plugin UI/Primitive/DnD Fields",component:he},ke=[{id:m(),label:"Primary",color:"#000000",isDefault:!0,colorOpacity:1},{id:m(),label:"Secondary",color:"#FF0000",isDefault:!0,colorOpacity:1}],D={render:()=>{const[d,o]=f.useState(ke),v=t=>{const{active:i,over:e}=t;if(!e||i.id===e.id)return;const n=d.findIndex(g=>g.id===i.id),l=d.findIndex(g=>g.id===e.id);if(n===-1||l===-1)return;const p=[...d],[h]=p.splice(n,1);h&&p.splice(l,0,h),o(p)},s=(t,i)=>{o(e=>e.map(n=>n.id===t?{...n,label:i}:n))},I=(t,i)=>{o(e=>e.map(n=>n.id===t?{...n,color:i}:n))},r=(t,i)=>{o(e=>e.map(n=>n.id===t?{...n,colorOpacity:i}:n))},c=t=>{o(i=>i.filter(e=>e.id!==t))},u=()=>{const t={id:m(),label:`New Color ${d.length+1}`,color:"#888888",colorOpacity:1};o(i=>[...i,t])};return a.jsxs(N,{children:[a.jsx(x,{onDragEnd:v,items:d.map(t=>t.id),children:d.map(t=>a.jsx(he,{id:t.id,label:t.label,color:t.color,colorOpacity:t.colorOpacity,setColorOpacity:i=>r(t.id,i),onLabelChange:i=>s(t.id,i),onColorChange:i=>I(t.id,i),onDeleteHandle:()=>c(t.id),isDefault:t.isDefault,enableConfirmation:!0,popupDirection:"down"},t.id))}),a.jsx(y,{onClick:u,leftIcon:j,children:"Add New Custom Color"})]})}},Ae=[{id:m(),label:"Google",url:"https://www.google.com",target:"New Tab"},{id:m(),label:"Docs",url:"https://docs.example.com",target:"Same Tab",asChild:!0}],b={render:()=>{const[d,o]=f.useState(Ae),v=({active:t,over:i,delta:e})=>{const n=d.findIndex(p=>p.id===t.id),l=d.findIndex(p=>p.id===i.id);o(p=>{const h=[...p],[g]=h.splice(n,1);return g&&(h.splice(l,0,g),(e==null?void 0:e.x)>50?g.asChild=!0:(e==null?void 0:e.x)<-50&&(g.asChild=!1)),h[0]&&(h[0].asChild=!1),h})},s=(t,i)=>{o(e=>e.map(n=>n.id===t?{...n,label:i}:n))},I=(t,i)=>{o(e=>e.map(n=>n.id===t?{...n,url:i}:n))},r=(t,i)=>{o(e=>e.map(n=>n.id===t?{...n,target:i}:n))},c=t=>{o(i=>i.filter(e=>e.id!==t))},u=()=>{const t={id:m(),label:`New Link ${d.length+1}`,url:"",target:"New Tab"};o(i=>[...i,t])};return a.jsxs(N,{children:[a.jsx(x,{onDragEnd:v,items:d.map(t=>t.id),restrictToVerticalAxisValue:!1,children:d.map(t=>a.jsx(fe,{id:t.id,label:t.label,url:t.url,asChild:t.asChild,target:t.target,onLabelChange:i=>s(t.id,i),onUrlChange:i=>I(t.id,i),onSelectChange:i=>r(t.id,i),onDeleteHandle:()=>c(t.id)},t.id))}),a.jsx(y,{onClick:u,leftIcon:j,children:"Add New Custom Link"})]})}},w={render:()=>a.jsx(Ce,{dashIconslug:"",url:"",onSlugChange:d=>console.log(d),onURLChange:d=>console.log(d)})},Fe=[{id:m(),fontName:"Poppins Classic",fontWeights:"300, 400, 500, 600"},{id:m(),fontName:"Roboto Mono",fontWeights:"100, 300, 400"}],S={render:()=>{const[d,o]=f.useState(Fe),v=({active:r,over:c})=>{const u=d.findIndex(i=>i.id===r.id),t=d.findIndex(i=>i.id===c.id);u===-1||t===-1||o(i=>{const e=[...i],[n]=e.splice(u,1);return n&&e.splice(t,0,n),e})},s=r=>{o(c=>c.filter(u=>u.id!==r))},I=()=>{const r={id:m(),fontName:`New Font ${d.length+1}`,fontWeights:""};o(c=>[...c,r])};return a.jsxs(N,{children:[a.jsx(x,{onDragEnd:v,items:d.map(r=>r.id),children:d.map(r=>a.jsx(xe,{id:r.id,fontName:r.fontName,fontWeights:r.fontWeights,onDeleteHandle:()=>s(r.id)},r.id))}),a.jsx(y,{onClick:I,leftIcon:j,children:"Add New Custom Font"})]})}},E={render:()=>a.jsx(De,{id:"preset-1"})},T={render:()=>a.jsx(Ie,{id:"replace-field-1",placeholders:["Video Title","Video URL"]})},L={render:()=>a.jsx(Ie,{id:"replace-field-error-1",placeholders:["Video Title","Video URL"],cssSelectorError:"*Invalid Title",customTextError:"*Invalid link"})},Ne=[{id:m(),name:"Accordion",icon:Se},{id:m(),name:"Audio",icon:Ee},{id:m(),name:"Bar Counter",icon:Te},{id:m(),name:"Code",icon:Le}],k={render:()=>{const[d,o]=f.useState(Ne),v=s=>{const{active:I,over:r}=s;!r||I.id===r.id||o(c=>{const u=c.findIndex(n=>n.id===I.id),t=c.findIndex(n=>n.id===r.id);if(u===-1||t===-1)return c;const i=[...c],[e]=i.splice(u,1);return e&&i.splice(t,0,e),i})};return a.jsx(x,{onDragEnd:v,items:d.map(s=>s.id),children:d.map(s=>a.jsx(be,{id:s.id,moduleName:s.name,moduleIcon:s.icon},s.id))})}},ye=[{id:"template-1",title:"Template 1"},{id:"template-2",title:"Template 2"},{id:"template-3",title:"Template 3"}],A={render:()=>a.jsx(we,{role:"Administrator",templates:ye,selectedTemplateId:"",placeholder:"Select a template",onSelectChange:d=>alert(`selected Templates is : ${d}`)})},C=()=>{const[d,o]=f.useState(!1);return a.jsx(ve,{id:"test-template",isEditable:d,onEditClick:()=>o(!0),onEditComplete:()=>o(!1)})},je=[{id:m(),name:"Default Template",isDefault:!0,assigned:!0,assignedToRoles:["Administrator","Editor","Publisher","SEO"],usersList:[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"},{src:"https://i.pravatar.cc/150?img=2",alt:"User 2",userName:"Jane Smith"},{src:"https://i.pravatar.cc/150?img=3",alt:"User 3",userName:"Bob Wilson"},{src:"https://i.pravatar.cc/150?img=4",alt:"User 4",userName:"Alice Brown"},{src:"https://i.pravatar.cc/150?img=5",alt:"User 5",userName:"Charlie Davis"}]},{id:m(),name:"Custom Header Template",assigned:!0,assignedToRoles:["Manager","Reviewer"],usersList:[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"}]},{id:m(),name:"Minimal Template",assignedToRoles:["All Roles"]}],F={render:()=>{const[d,o]=f.useState(je),[v,s]=f.useState(new Set),I=e=>{const{active:n,over:l}=e;if(!l||n.id===l.id)return;const p=d.findIndex(R=>R.id===n.id),h=d.findIndex(R=>R.id===l.id);if(p===-1||h===-1)return;const g=[...d],[U]=g.splice(p,1);U&&g.splice(h,0,U),o(g)},r=(e,n)=>{o(l=>l.map(p=>p.id===e?{...p,name:n}:p))},c=e=>{console.log("Editing Clicked:",e),s(n=>new Set(n).add(e))},u=e=>{s(n=>{const l=new Set(n);return l.delete(e),l})},t=e=>{o(n=>n.filter(l=>l.id!==e)),s(n=>{const l=new Set(n);return l.delete(e),l})},i=()=>{const e={id:m(),name:`New Template ${d.length+1}`};o(n=>[...n,e])};return a.jsxs(N,{children:[a.jsx(x,{onDragEnd:I,items:d.map(e=>e.id),children:d.map(e=>a.jsx(ve,{id:e.id,name:e.name,isDefault:e.isDefault,isEditable:v.has(e.id),onEditClick:()=>c(e.id),onEditComplete:()=>u(e.id),onNameChange:n=>r(e.id,n),onDeleteHandle:()=>t(e.id),onCopyClick:()=>alert(`Copied template: ${e.name}`),usersList:e.usersList,roles:e.assignedToRoles,variant:"secondary"},e.id))}),a.jsx(y,{onClick:i,leftIcon:j,children:"Add New Template"})]})}};C.__docgenInfo={description:"",methods:[],displayName:"TemplateFieldSingle"};var O,M,V;D.parameters={...D.parameters,docs:{...(O=D.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(H=w.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var J,z,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(z=S.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};var G,q,K;E.parameters={...E.parameters,docs:{...(G=E.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <DndModulePreset id={"preset-1"} />
}`,...(K=(q=E.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var X,Y,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-1"} placeholders={["Video Title", "Video URL"]} />
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;L.parameters={...L.parameters,docs:{...(ee=L.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-error-1"} placeholders={["Video Title", "Video URL"]} cssSelectorError="*Invalid Title" customTextError="*Invalid link" />
}`,...(ne=(te=L.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,de,oe;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(de=k.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var ae,re,se;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:'{\n  render: () => <TemplateAssignmentField role="Administrator" templates={templates} selectedTemplateId="" placeholder="Select a template" onSelectChange={id => alert(`selected Templates is : ${id}`)} />\n}',...(se=(re=A.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,me,ce;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(ge=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};const un=["ColorField","LinkField","ParentQuickLink","FontField","ModulePreset","ReplaceField","ReplaceFieldWithValidation","ModuleItemList","TemplateAssignment","TemplateFieldSingle","TemplateField"];export{D as ColorField,S as FontField,b as LinkField,k as ModuleItemList,E as ModulePreset,w as ParentQuickLink,T as ReplaceField,L as ReplaceFieldWithValidation,A as TemplateAssignment,F as TemplateField,C as TemplateFieldSingle,un as __namedExportsOrder,pn as default};
