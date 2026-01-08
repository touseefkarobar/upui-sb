import{j as r,r as C}from"./iframe-C_mbGr6E.js";import{D as ce,S as F,a as ge,M as he,b as Ie,c as ve,d as pe,T as Ce,e as ue}from"./index-UzPUCauh.js";import{g as m}from"./index-CcptxaAj.js";import{S as N}from"./index-DFrVZ8ok.js";import{B as A}from"./index-DoemwjGB.js";import{A as y}from"./AddIcon-DE5_d94W.js";import"./index-B2Dsv3SL.js";import"./index-Ng7iCJfV.js";import"./FilledIcon-BLjMrMwz.js";import"./RolesIcon-DBkAoV7V.js";import"./type-Bc9hys3F.js";import"./StopIcon-DiwnLtxu.js";import"./index-CbpyFLMr.js";import"./index-M-wglii-.js";import"./index-Bhy6UyWs.js";import"./index-BNXIhyFq.js";import"./DropdownIcon-7aoJJi2r.js";import"./ChevronRightIcon-F78reQh5.js";import"./Heading-JginFKr5.js";import"./PACLogo-BSRssItg.js";import"./BackIcon-ux0AX9TM.js";import"./index-BVTBjUFv.js";import"./OverviewPage-DgcrNzVt.js";import"./Text-DevI4lgS.js";import"./index-CbpScquj.js";import"./index-DOFVQmzu.js";import"./KeyIcon-DgRmHBna.js";import"./HomeIcon-De9VQo_h.js";import"./OpenIcon-CoQ6KoVZ.js";import"./SupportIcon-LHuKj7YB.js";import"./UsersIcon-CMuvvSAe.js";import"./index-C5IMM1Hi.js";import"./EyeIcon-DmsMH4M6.js";import"./index-CVzsxRPH.js";import"./index-C77A0jMh.js";import"./index-mIkS9aP6.js";import"./index-Dq7h7Pqt.js";import"./index-BuWNiPYD.js";import"./InfoIcon-DN5ZhDiw.js";import"./TextLink-BAP1xQCw.js";import"./index-Culi8oCA.js";import"./useOutsideToggle-dpvxOcRN.js";import"./DiviExperienceHelperIcon-DcgmmL-c.js";import"./index-UMeNgrcj.js";import"./PacAboutPage-CU6THGjj.js";import"./index-BrCJtLyL.js";import"./WebsiteIcon-4bbRhbK-.js";import"./index-D9clC1WI.js";import"./SettingsIcon-yLHm0IJC.js";import"./ChangelogPage-CP3MMlH9.js";import"./index-Cns5xIDP.js";import"./index-B6f4Gl8q.js";import"./TrashIcon-m0q7TROK.js";import"./index-B57lB24z.js";import"./index-OQKymPjC.js";import"./index-CEsefGam.js";import"./index-DKJmn8zY.js";import"./SearchIcon-Dv34hWQY.js";import"./ResetIcon-CXfcqy4t.js";import"./ImportExportIcon-CBC_ejMs.js";import"./index-BwDobtPv.js";import"./index-DTzWuNn-.js";import"./Label-BhqKhasP.js";import"./index-sCAKu21q.js";import"./index-B5BXiO9T.js";import"./CloseIcon-B56ik5QM.js";import"./FaqIcon-CFv3SFmT.js";import"./index-DU36kkjY.js";import"./UnderlinedIcon-CtCc54RX.js";import"./index-B3UDdMo-.js";import"./index-C0Ha9CmN.js";import"./index-CF1_ZWN3.js";import"./index-DpkgUUxC.js";import"./index-Dv6P1OZG.js";import"./FeatureRequestPage-DlwXXKDz.js";import"./EmailIcon-BlGrbpTs.js";import"./LicensePage-6JIrnqoR.js";import"./UpdatesIcon-DQmyMtWF.js";import"./ChangelogIcon-S8lB_NzX.js";import"./DragIcon-C0I51wnZ.js";import"./WidowFixerIcon-BczzKI7w.js";import"./CacheIcon-1lqN1aNV.js";import"./LearningIcon-LyUzzQZZ.js";const Zt={title:"PAC Universal Plugin UI/Primitive/Draggable Fields",component:ce},fe=[{id:m(),label:"Primary",color:"#000000",isDefault:!0,colorOpacity:1},{id:m(),label:"Secondary",color:"#FF0000",isDefault:!0,colorOpacity:1}],x={render:()=>{const[d,a]=C.useState(fe),I=t=>{const{active:i,over:e}=t;if(!e||i.id===e.id)return;const n=d.findIndex(c=>c.id===i.id),s=d.findIndex(c=>c.id===e.id);if(n===-1||s===-1)return;const l=[...d],[u]=l.splice(n,1);u&&l.splice(s,0,u),a(l)},h=(t,i)=>{a(e=>e.map(n=>n.id===t?{...n,label:i}:n))},v=(t,i)=>{a(e=>e.map(n=>n.id===t?{...n,color:i}:n))},o=(t,i)=>{a(e=>e.map(n=>n.id===t?{...n,colorOpacity:i}:n))},p=t=>{a(i=>i.filter(e=>e.id!==t))},g=()=>{const t={id:m(),label:`New Color ${d.length+1}`,color:"#888888",colorOpacity:1};a(i=>[...i,t])};return r.jsxs(N,{children:[r.jsx(F,{onDragEnd:I,items:d.map(t=>t.id),children:d.map(t=>r.jsx(ce,{id:t.id,label:t.label,color:t.color,colorOpacity:t.colorOpacity,setColorOpacity:i=>o(t.id,i),onLabelChange:i=>h(t.id,i),onColorChange:i=>v(t.id,i),onDeleteHandle:()=>p(t.id),isDefault:t.isDefault,enableConfirmation:!0},t.id))}),r.jsx(A,{onClick:g,leftIcon:y,children:"Add New Custom Color"})]})}},xe=[{id:m(),label:"Google",url:"https://www.google.com",target:"New Tab"},{id:m(),label:"Docs",url:"https://docs.example.com",target:"Same Tab",asChild:!0}],b={render:()=>{const[d,a]=C.useState(xe),I=({active:t,over:i,delta:e})=>{const n=d.findIndex(l=>l.id===t.id),s=d.findIndex(l=>l.id===i.id);a(l=>{const u=[...l],[c]=u.splice(n,1);return c&&(u.splice(s,0,c),(e==null?void 0:e.x)>50?c.asChild=!0:(e==null?void 0:e.x)<-50&&(c.asChild=!1)),u[0]&&(u[0].asChild=!1),u})},h=(t,i)=>{a(e=>e.map(n=>n.id===t?{...n,label:i}:n))},v=(t,i)=>{a(e=>e.map(n=>n.id===t?{...n,url:i}:n))},o=(t,i)=>{a(e=>e.map(n=>n.id===t?{...n,target:i}:n))},p=t=>{a(i=>i.filter(e=>e.id!==t))},g=()=>{const t={id:m(),label:`New Link ${d.length+1}`,url:"",target:"New Tab"};a(i=>[...i,t])};return r.jsxs(N,{children:[r.jsx(F,{onDragEnd:I,items:d.map(t=>t.id),restrictToVerticalAxisValue:!1,children:d.map(t=>r.jsx(ge,{id:t.id,label:t.label,url:t.url,asChild:t.asChild,target:t.target,onLabelChange:i=>h(t.id,i),onUrlChange:i=>v(t.id,i),onSelectChange:i=>o(t.id,i),onDeleteHandle:()=>p(t.id)},t.id))}),r.jsx(A,{onClick:g,leftIcon:y,children:"Add New Custom Link"})]})}},w={render:()=>r.jsx(he,{dashIconslug:"",url:"",onSlugChange:d=>console.log(d),onURLChange:d=>console.log(d)})},be=[{id:m(),fontName:"Poppins Classic",fontWeights:"300, 400, 500, 600"},{id:m(),fontName:"Roboto Mono",fontWeights:"100, 300, 400"}],D={render:()=>{const[d,a]=C.useState(be),I=({active:o,over:p})=>{const g=d.findIndex(i=>i.id===o.id),t=d.findIndex(i=>i.id===p.id);g===-1||t===-1||a(i=>{const e=[...i],[n]=e.splice(g,1);return n&&e.splice(t,0,n),e})},h=o=>{a(p=>p.filter(g=>g.id!==o))},v=()=>{const o={id:m(),fontName:`New Font ${d.length+1}`,fontWeights:""};a(p=>[...p,o])};return r.jsxs(N,{children:[r.jsx(F,{onDragEnd:I,items:d.map(o=>o.id),children:d.map(o=>r.jsx(Ie,{id:o.id,fontName:o.fontName,fontWeights:o.fontWeights,onDeleteHandle:()=>h(o.id)},o.id))}),r.jsx(A,{onClick:v,leftIcon:y,children:"Add New Custom Font"})]})}},S={render:()=>r.jsx(ve,{id:"preset-1"})},E={render:()=>r.jsx(pe,{id:"replace-field-1",placeholders:["Video Title","Video URL"]})},T={render:()=>r.jsx(pe,{id:"replace-field-error-1",placeholders:["Video Title","Video URL"],cssSelectorError:"*Invalid Title",customTextError:"*Invalid link"})},we=[{id:"template-1",title:"Template 1"},{id:"template-2",title:"Template 2"},{id:"template-3",title:"Template 3"}],k={render:()=>r.jsx(Ce,{role:"Administrator",templates:we,selectedTemplateId:"",placeholder:"Select a template",onSelectChange:d=>alert(`selected Templates is : ${d}`)})},f=()=>{const[d,a]=C.useState(!1);return r.jsx(ue,{id:"test-template",isEditable:d,onEditClick:()=>a(!0),onEditComplete:()=>a(!1)})},De=[{id:m(),name:"Default Template",isDefault:!0,assigned:!0,assignedToRoles:["Administrator","Editor","Publisher","SEO"],usersList:[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"},{src:"https://i.pravatar.cc/150?img=2",alt:"User 2",userName:"Jane Smith"},{src:"https://i.pravatar.cc/150?img=3",alt:"User 3",userName:"Bob Wilson"},{src:"https://i.pravatar.cc/150?img=4",alt:"User 4",userName:"Alice Brown"},{src:"https://i.pravatar.cc/150?img=5",alt:"User 5",userName:"Charlie Davis"}]},{id:m(),name:"Custom Header Template",assigned:!0,assignedToRoles:["Manager","Reviewer"],usersList:[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"}]},{id:m(),name:"Minimal Template",assignedToRoles:["All Roles"]}],L={render:()=>{const[d,a]=C.useState(De),[I,h]=C.useState(new Set),v=e=>{const{active:n,over:s}=e;if(!s||n.id===s.id)return;const l=d.findIndex(j=>j.id===n.id),u=d.findIndex(j=>j.id===s.id);if(l===-1||u===-1)return;const c=[...d],[R]=c.splice(l,1);R&&c.splice(u,0,R),a(c)},o=(e,n)=>{a(s=>s.map(l=>l.id===e?{...l,name:n}:l))},p=e=>{console.log("Editing Clicked:",e),h(n=>new Set(n).add(e))},g=e=>{h(n=>{const s=new Set(n);return s.delete(e),s})},t=e=>{a(n=>n.filter(s=>s.id!==e)),h(n=>{const s=new Set(n);return s.delete(e),s})},i=()=>{const e={id:m(),name:`New Template ${d.length+1}`};a(n=>[...n,e])};return r.jsxs(N,{children:[r.jsx(F,{onDragEnd:v,items:d.map(e=>e.id),children:d.map(e=>r.jsx(ue,{id:e.id,name:e.name,isDefault:e.isDefault,isEditable:I.has(e.id),onEditClick:()=>p(e.id),onEditComplete:()=>g(e.id),onNameChange:n=>o(e.id,n),onDeleteHandle:()=>t(e.id),onCopyClick:()=>alert(`Copied template: ${e.name}`),usersList:e.usersList,roles:e.assignedToRoles,variant:"secondary"},e.id))}),r.jsx(A,{onClick:i,leftIcon:y,children:"Add New Template"})]})}};f.__docgenInfo={description:"",methods:[],displayName:"TemplateFieldSingle"};var U,O,V;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
        setColorOpacity={newOpacity => handleColorOpacityChange(item.id, newOpacity)} onLabelChange={label => handleLabelChange(item.id, label)} onColorChange={color => handleColorChange(item.id, color)} onDeleteHandle={() => handleDelete(item.id)} isDefault={item.isDefault} enableConfirmation={true} />)}
        </SortableList>
        <Button onClick={handleAdd} leftIcon={AddIcon}>
          Add New Custom Color
        </Button>
      </Stack>;
  }
}`,...(V=(O=x.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var P,B,$;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...($=(B=b.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var W,M,H;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    return <MainParentLink dashIconslug="" url="" onSlugChange={v => console.log(v)} onURLChange={v => console.log(v)} />;
  }
}`,...(H=(M=w.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var _,J,Q;D.parameters={...D.parameters,docs:{...(_=D.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(Q=(J=D.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var z,G,q;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <DndModulePreset id={"preset-1"} />
}`,...(q=(G=S.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var K,X,Y;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-1"} placeholders={["Video Title", "Video URL"]} />
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-error-1"} placeholders={["Video Title", "Video URL"]} cssSelectorError="*Invalid Title" customTextError="*Invalid link" />
}`,...(te=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ie,de;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:'{\n  render: () => <TemplateAssignmentField role="Administrator" templates={templates} selectedTemplateId="" placeholder="Select a template" onSelectChange={id => alert(`selected Templates is : ${id}`)} />\n}',...(de=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ae,re,oe;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const [editable, setEditable] = useState(false);
  return <DndTemplateField id={"test-template"} isEditable={editable} onEditClick={() => setEditable(true)} onEditComplete={() => setEditable(false)} />;
}`,...(oe=(re=f.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,le,me;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(me=(le=L.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};const en=["ColorField","LinkField","ParentQuickLink","FontField","ModulePreset","ReplaceField","ReplaceFieldWithValidation","TemplateAssignment","TemplateFieldSingle","TemplateField"];export{x as ColorField,D as FontField,b as LinkField,S as ModulePreset,w as ParentQuickLink,E as ReplaceField,T as ReplaceFieldWithValidation,k as TemplateAssignment,L as TemplateField,f as TemplateFieldSingle,en as __namedExportsOrder,Zt as default};
