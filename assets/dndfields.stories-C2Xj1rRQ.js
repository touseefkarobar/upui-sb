import{j as a,r as f}from"./iframe-tDaSjqNp.js";import{S as Te,a as ye,b as Fe,D as M,c as x,d as Ae,M as Ne,e as je,f as Ve,g as ke,h as Oe,T as Re,i as Ee}from"./index-Bz5lypn0.js";import{g as m}from"./generateId-C1v-VC-6.js";import{S as C}from"./index-Bu_caOuZ.js";import{B as D}from"./index-2oIfewNl.js";import{A as w}from"./AddIcon-7W4U-Mg6.js";import{A as Me,M as Ue,B as Be,C as Pe}from"./MediaLibraryIcon-hlDKMRg-.js";import{T as B}from"./Text-DUFbbiAM.js";import{F as He}from"./FilledIcon-aKYEDG5K.js";import{E as $e}from"./EditIcon-C0c0lEaP.js";import"./index-C-PockPq.js";import"./type-Bc9hys3F.js";import"./index-BCRL39lZ.js";import"./index-CUl-ir21.js";import"./useOutsideToggle-BACRP90M.js";import"./DropdownIcon-CrWUGXae.js";import"./SearchIcon-DQNZr6a8.js";import"./ResetIcon-CuJQ18YV.js";import"./index-CsmwNFdP.js";import"./index-rUAb7uM1.js";import"./index-Q-mL5Uu4.js";import"./Heading-Ehtxt0_5.js";import"./CloseIcon-DOcsaq7U.js";import"./index-DdQJX4os.js";import"./index-D0dbWC95.js";import"./TrashIcon-B-8oxpTi.js";import"./ImportExportIcon-BgKjxLpx.js";import"./CheckmarkIcon-BsKtWt1A.js";import"./CopyIcon-B3pnZSYx.js";import"./index-JRc7_g7N.js";import"./index-D1IHZeo2.js";import"./index-XyLVg-LX.js";import"./RolesIcon-L584c2qs.js";const We="_dndvideolinkfield_1nrdb_3",_e={dndvideolinkfield:We},Le=({id:d,label:o,module:h,onDeleteHandle:r,onEditClick:l,isDefault:s=!1})=>a.jsx(Te,{index:d,children:a.jsxs(C,{direction:"horizontal",className:_e.dndvideolinkfield,children:[!s&&a.jsx(ye,{}),a.jsx(B,{className:"pac-upui-h4 pac-upui-font-regular",children:o}),a.jsx(B,{className:"pac-upui-h6 pac-upui-font-semibold",style:{color:" var(--pac-upui-medium)",fontFamily:"Open sans"},children:h}),a.jsxs(C,{direction:"horizontal",gap:6,style:{marginLeft:"auto"},children:[!s&&a.jsx(He,{icon:$e,size:"xlarge",style:{cursor:"pointer"},onClick:l}),!s&&a.jsx(Fe,{onClick:r})]})]})});Le.__docgenInfo={description:`DndVideoLinkField component
Renders a draggable video link field with title, module, edit, and delete actions.
Follows accessibility and lint rules.`,methods:[],displayName:"DndVideoLinkField",props:{id:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},module:{required:!0,tsType:{name:"string"},description:""},onDeleteHandle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onEditClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isDefault:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Nn={title:"PAC Universal Plugin UI/Primitive/DnD Fields",component:M},qe=[{id:m(),label:"Primary",color:"#000000",isDefault:!0,colorOpacity:1},{id:m(),label:"Secondary",color:"#FF0000",isDefault:!0,colorOpacity:1}],S={render:()=>{const[d,o]=f.useState(qe),h=n=>{const{active:i,over:e}=n;if(!e||i.id===e.id)return;const t=d.findIndex(I=>I.id===i.id),p=d.findIndex(I=>I.id===e.id);if(t===-1||p===-1)return;const g=[...d],[v]=g.splice(t,1);v&&g.splice(p,0,v),o(g)},r=(n,i)=>{o(e=>e.map(t=>t.id===n?{...t,label:i}:t))},l=(n,i)=>{o(e=>e.map(t=>t.id===n?{...t,color:i}:t))},s=(n,i)=>{o(e=>e.map(t=>t.id===n?{...t,colorOpacity:i}:t))},c=n=>{o(i=>i.filter(e=>e.id!==n))},u=()=>{const n={id:m(),label:`New Color ${d.length+1}`,color:"#888888",colorOpacity:1};o(i=>[...i,n])};return a.jsxs(C,{children:[a.jsx(x,{onDragEnd:h,items:d.map(n=>n.id),children:d.map(n=>a.jsx(M,{id:n.id,label:n.label,color:n.color,colorOpacity:n.colorOpacity,setColorOpacity:i=>s(n.id,i),onLabelChange:i=>r(n.id,i),onColorChange:i=>l(n.id,i),onDeleteHandle:()=>c(n.id),isDefault:n.isDefault,enableConfirmation:!0,popupDirection:"down"},n.id))}),a.jsx(D,{onClick:u,leftIcon:w,children:"Add New Custom Color"})]})}},k={render:()=>{const[d,o]=f.useState("#ff0000"),[h,r]=f.useState(1);return a.jsx(M,{id:2,label:"Color Field Label",color:d,onColorChange:o,colorOpacity:h,setColorOpacity:r,onLabelChange:()=>{},onDeleteHandle:()=>{},isVariable:!0,variableTitle:"Primary",popupDirection:"down"})}},ze=[{id:m(),label:"Google",url:"https://www.google.com",target:"New Tab"},{id:m(),label:"Docs",url:"https://docs.example.com",target:"Same Tab",asChild:!0}],E={render:()=>{const[d,o]=f.useState(ze),h=({active:n,over:i,delta:e})=>{const t=d.findIndex(g=>g.id===n.id),p=d.findIndex(g=>g.id===i.id);o(g=>{const v=[...g],[I]=v.splice(t,1);return I&&(v.splice(p,0,I),(e==null?void 0:e.x)>50?I.asChild=!0:(e==null?void 0:e.x)<-50&&(I.asChild=!1)),v[0]&&(v[0].asChild=!1),v})},r=(n,i)=>{o(e=>e.map(t=>t.id===n?{...t,label:i}:t))},l=(n,i)=>{o(e=>e.map(t=>t.id===n?{...t,url:i}:t))},s=(n,i)=>{o(e=>e.map(t=>t.id===n?{...t,target:i}:t))},c=n=>{o(i=>i.filter(e=>e.id!==n))},u=()=>{const n={id:m(),label:`New Link ${d.length+1}`,url:"",target:"New Tab"};o(i=>[...i,n])};return a.jsxs(C,{children:[a.jsx(x,{onDragEnd:h,items:d.map(n=>n.id),restrictToVerticalAxisValue:!1,children:d.map(n=>a.jsx(Ae,{id:n.id,label:n.label,url:n.url,asChild:n.asChild,target:n.target,onLabelChange:i=>r(n.id,i),onUrlChange:i=>l(n.id,i),onSelectChange:i=>s(n.id,i),onDeleteHandle:()=>c(n.id)},n.id))}),a.jsx(D,{onClick:u,leftIcon:w,children:"Add New Custom Link"})]})}},L={render:()=>a.jsx(Ne,{dashIconslug:"",url:"",onSlugChange:d=>console.log(d),onURLChange:d=>console.log(d)})},Je=[{id:m(),fontName:"Poppins Classic",fontWeights:"300, 400, 500, 600"},{id:m(),fontName:"Roboto Mono",fontWeights:"100, 300, 400"}],T={render:()=>{const[d,o]=f.useState(Je),h=({active:s,over:c})=>{const u=d.findIndex(i=>i.id===s.id),n=d.findIndex(i=>i.id===c.id);u===-1||n===-1||o(i=>{const e=[...i],[t]=e.splice(u,1);return t&&e.splice(n,0,t),e})},r=s=>{o(c=>c.filter(u=>u.id!==s))},l=()=>{const s={id:m(),fontName:`New Font ${d.length+1}`,fontWeights:""};o(c=>[...c,s])};return a.jsxs(C,{children:[a.jsx(x,{onDragEnd:h,items:d.map(s=>s.id),children:d.map(s=>a.jsx(je,{id:s.id,fontName:s.fontName,fontWeights:s.fontWeights,onDeleteHandle:()=>r(s.id)},s.id))}),a.jsx(D,{onClick:l,leftIcon:w,children:"Add New Custom Font"})]})}},y={render:()=>a.jsx(Ve,{id:"preset-1"})},F={render:()=>a.jsx(ke,{id:"replace-field-1",placeholders:["Video Title","Video URL"]})},A={render:()=>a.jsx(ke,{id:"replace-field-error-1",placeholders:["Video Title","Video URL"],cssSelectorError:"*Invalid Title",customTextError:"*Invalid link"})},Qe=[{id:m(),name:"Accordion",icon:Me},{id:m(),name:"Audio",icon:Ue},{id:m(),name:"Bar Counter",icon:Be},{id:m(),name:"Code",icon:Pe}],N={render:()=>{const[d,o]=f.useState(Qe),h=r=>{const{active:l,over:s}=r;!s||l.id===s.id||o(c=>{const u=c.findIndex(t=>t.id===l.id),n=c.findIndex(t=>t.id===s.id);if(u===-1||n===-1)return c;const i=[...c],[e]=i.splice(u,1);return e&&i.splice(n,0,e),i})};return a.jsx(x,{onDragEnd:h,items:d.map(r=>r.id),children:d.map(r=>a.jsx(Oe,{id:r.id,moduleName:r.name,moduleIcon:r.icon},r.id))})}},Ge=[{id:"template-1",title:"Template 1"},{id:"template-2",title:"Template 2"},{id:"template-3",title:"Template 3"}],j={render:()=>a.jsx(Re,{role:"Administrator",templates:Ge,selectedTemplateId:"",placeholder:"Select a template",onSelectChange:d=>alert(`selected Templates is : ${d}`)})},b=()=>{const[d,o]=f.useState(!1);return a.jsx(Ee,{id:"test-template",isEditable:d,onEditClick:()=>o(!0),onEditComplete:()=>o(!1)})},Ke=[{id:m(),name:"Default Template",isDefault:!0,assigned:!0,assignedToRoles:["Administrator","Editor","Publisher","SEO"],usersList:[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"},{src:"https://i.pravatar.cc/150?img=2",alt:"User 2",userName:"Jane Smith"},{src:"https://i.pravatar.cc/150?img=3",alt:"User 3",userName:"Bob Wilson"},{src:"https://i.pravatar.cc/150?img=4",alt:"User 4",userName:"Alice Brown"},{src:"https://i.pravatar.cc/150?img=5",alt:"User 5",userName:"Charlie Davis"}]},{id:m(),name:"Custom Header Template",assigned:!0,assignedToRoles:["Manager","Reviewer"],usersList:[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"}]},{id:m(),name:"Minimal Template",assignedToRoles:["All Roles"]}],V={render:()=>{const[d,o]=f.useState(Ke),[h,r]=f.useState(new Set),l=e=>{const{active:t,over:p}=e;if(!p||t.id===p.id)return;const g=d.findIndex(R=>R.id===t.id),v=d.findIndex(R=>R.id===p.id);if(g===-1||v===-1)return;const I=[...d],[U]=I.splice(g,1);U&&I.splice(v,0,U),o(I)},s=(e,t)=>{o(p=>p.map(g=>g.id===e?{...g,name:t}:g))},c=e=>{console.log("Editing Clicked:",e),r(t=>new Set(t).add(e))},u=e=>{r(t=>{const p=new Set(t);return p.delete(e),p})},n=e=>{o(t=>t.filter(p=>p.id!==e)),r(t=>{const p=new Set(t);return p.delete(e),p})},i=()=>{const e={id:m(),name:`New Template ${d.length+1}`};o(t=>[...t,e])};return a.jsxs(C,{children:[a.jsx(x,{onDragEnd:l,items:d.map(e=>e.id),children:d.map(e=>a.jsx(Ee,{id:e.id,name:e.name,isDefault:e.isDefault,isEditable:h.has(e.id),onEditClick:()=>c(e.id),onEditComplete:()=>u(e.id),onNameChange:t=>s(e.id,t),onDeleteHandle:()=>n(e.id),onCopyClick:()=>alert(`Copied template: ${e.name}`),usersList:e.usersList,roles:e.assignedToRoles,variant:"secondary"},e.id))}),a.jsx(D,{onClick:i,leftIcon:w,children:"Add New Template"})]})}},Xe=[{id:m(),label:"Video Title 1",module:"Module A"},{id:m(),label:"Video Title 2",module:"Module B"}],O={render:()=>{const[d,o]=f.useState(Xe),h=l=>{const{active:s,over:c}=l;if(!c||s.id===c.id)return;const u=d.findIndex(t=>t.id===s.id),n=d.findIndex(t=>t.id===c.id);if(u===-1||n===-1)return;const i=[...d],[e]=i.splice(u,1);e&&i.splice(n,0,e),o(i)},r=()=>{const l={id:m(),label:`New Video ${d.length+1}`,module:"Module"};o(s=>[...s,l])};return a.jsxs(C,{children:[a.jsx(x,{onDragEnd:h,items:d.map(l=>l.id),children:d.map(l=>a.jsx(Le,{id:l.id,label:l.label,module:l.module,onEditClick:()=>alert("Edit Clicked"),onDeleteHandle:()=>alert("Delete Clicked")},l.id))}),a.jsx(D,{onClick:r,leftIcon:w,children:"Add New Video"})]})}};b.__docgenInfo={description:"",methods:[],displayName:"TemplateFieldSingle"};var P,H,$;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...($=(H=S.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var W,_,q;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState("#ff0000");
    const [colorOpacity, setColorOpacity] = useState(1);
    return <DndColorField id={2} label="Color Field Label" color={color} onColorChange={setColor} colorOpacity={colorOpacity} setColorOpacity={setColorOpacity} onLabelChange={() => {}} onDeleteHandle={() => {}} isVariable={true} variableTitle="Primary" popupDirection="down" />;
  }
}`,...(q=(_=k.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var z,J,Q;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Q=(J=E.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var G,K,X;L.parameters={...L.parameters,docs:{...(G=L.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    return <MainParentLink dashIconslug="" url="" onSlugChange={v => console.log(v)} onURLChange={v => console.log(v)} />;
  }
}`,...(X=(K=L.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,Z,ee;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,ie;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <DndModulePreset id={"preset-1"} />
}`,...(ie=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var de,ae,oe;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-1"} placeholders={["Video Title", "Video URL"]} />
}`,...(oe=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,re,le;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-error-1"} placeholders={["Video Title", "Video URL"]} cssSelectorError="*Invalid Title" customTextError="*Invalid link" />
}`,...(le=(re=A.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ce,me,pe;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(me=N.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,ge,he;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:'{\n  render: () => <TemplateAssignmentField role="Administrator" templates={templates} selectedTemplateId="" placeholder="Select a template" onSelectChange={id => alert(`selected Templates is : ${id}`)} />\n}',...(he=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var Ie,ve,fe;b.parameters={...b.parameters,docs:{...(Ie=b.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  const [editable, setEditable] = useState(false);
  return <DndTemplateField id={"test-template"} isEditable={editable} onEditClick={() => setEditable(true)} onEditComplete={() => setEditable(false)} />;
}`,...(fe=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var Ce,xe,be;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(be=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var De,we,Se;O.parameters={...O.parameters,docs:{...(De=O.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState<VideoLinkItem[]>(initialVideoLinkItems);
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
    const handleAdd = () => {
      const newItem: VideoLinkItem = {
        id: generateId(),
        label: \`New Video \${items.length + 1}\`,
        module: "Module"
      };
      setItems(prev => [...prev, newItem]);
    };
    return <Stack>
        <SortableList onDragEnd={handleDragEnd} items={items.map(item => item.id)}>
          {items.map(item => <DndVideoLinkField key={item.id} id={item.id} label={item.label} module={item.module} onEditClick={() => alert("Edit Clicked")} onDeleteHandle={() => alert("Delete Clicked")} />)}
        </SortableList>
        <Button onClick={handleAdd} leftIcon={AddIcon}>
          Add New Video
        </Button>
      </Stack>;
  }
}`,...(Se=(we=O.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};const jn=["ColorField","VariableColorField","LinkField","ParentQuickLink","FontField","ModulePreset","ReplaceField","ReplaceFieldWithValidation","ModuleItemList","TemplateAssignment","TemplateFieldSingle","TemplateField","VideoLinkField"];export{S as ColorField,T as FontField,E as LinkField,N as ModuleItemList,y as ModulePreset,L as ParentQuickLink,F as ReplaceField,A as ReplaceFieldWithValidation,j as TemplateAssignment,V as TemplateField,b as TemplateFieldSingle,k as VariableColorField,O as VideoLinkField,jn as __namedExportsOrder,Nn as default};
