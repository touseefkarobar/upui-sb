import{j as a,r as v}from"./iframe-DgQL_yY7.js";import{D as U,S as f,a as Ee,M as Le,b as Te,c as ye,d as Se,e as Fe,T as Ae,f as ke,g as Ne}from"./index-_fbXOMOw.js";import{g as p}from"./generateId-C1v-VC-6.js";import{S as b}from"./index-D6eaAEFW.js";import{B as D}from"./index-Dr2EBkkA.js";import{A as w}from"./AddIcon-BVuz0X3g.js";import{A as Ve,M as je,B as Oe,C as Me}from"./MediaLibraryIcon-CjAH8KyR.js";import"./index-BDzsTLw6.js";import"./type-CgT0EiC8.js";import"./index-CROUAY1t.js";import"./index-BM9giAx_.js";import"./useOutsideToggle-F3A-fDUd.js";import"./DropdownIcon-DssvTRMk.js";import"./SearchIcon-BD-DpibT.js";import"./FilledIcon-Crjgm33U.js";import"./ResetIcon-BICDTYpq.js";import"./index-Dixcj2mG.js";import"./index-DSdTTXkr.js";import"./index-BYWKLYDB.js";import"./Heading-Bx_vXH7w.js";import"./CloseIcon-D7g8lby1.js";import"./index-D3dwQLck.js";import"./index-BOfPIJ-l.js";import"./index-CfvLKcpk.js";import"./Text-ChFGrXxA.js";import"./TrashIcon-CK0SQWu3.js";import"./ImportExportIcon-CZ9VvNln.js";import"./EditIcon-CYYKGUlG.js";import"./CheckmarkIcon-BJ4OCftv.js";import"./CopyIcon-DDjJEYY0.js";import"./index-DEDDK9GU.js";import"./index-uVY8Pf8g.js";import"./index-BG0j0qZW.js";import"./RolesIcon-MY7xPHvr.js";const kn={title:"PAC Universal Plugin UI/Primitive/DnD Fields",component:U},Ue=[{id:p(),label:"Primary",color:"#000000",isDefault:!0,colorOpacity:1},{id:p(),label:"Secondary",color:"#FF0000",isDefault:!0,colorOpacity:1}],S={render:()=>{const[d,o]=v.useState(Ue),g=n=>{const{active:i,over:e}=n;if(!e||i.id===e.id)return;const t=d.findIndex(h=>h.id===i.id),m=d.findIndex(h=>h.id===e.id);if(t===-1||m===-1)return;const I=[...d],[C]=I.splice(t,1);C&&I.splice(m,0,C),o(I)},r=(n,i)=>{o(e=>e.map(t=>t.id===n?{...t,label:i}:t))},l=(n,i)=>{o(e=>e.map(t=>t.id===n?{...t,color:i}:t))},s=(n,i)=>{o(e=>e.map(t=>t.id===n?{...t,colorOpacity:i}:t))},c=n=>{o(i=>i.filter(e=>e.id!==n))},u=()=>{const n={id:p(),label:`New Color ${d.length+1}`,color:"#888888",colorOpacity:1};o(i=>[...i,n])};return a.jsxs(b,{children:[a.jsx(f,{onDragEnd:g,items:d.map(n=>n.id),children:d.map(n=>a.jsx(U,{id:n.id,label:n.label,color:n.color,colorOpacity:n.colorOpacity,setColorOpacity:i=>s(n.id,i),onLabelChange:i=>r(n.id,i),onColorChange:i=>l(n.id,i),onDeleteHandle:()=>c(n.id),isDefault:n.isDefault,enableConfirmation:!0,popupDirection:"down"},n.id))}),a.jsx(D,{onClick:u,leftIcon:w,children:"Add New Custom Color"})]})}},k={render:()=>{const[d,o]=v.useState("#ff0000"),[g,r]=v.useState(1);return a.jsx(U,{id:2,label:"Color Field Label",color:d,onColorChange:o,colorOpacity:g,setColorOpacity:r,onLabelChange:()=>{},onDeleteHandle:()=>{},isVariable:!0,variableTitle:"Primary",popupDirection:"down"})}},Re=[{id:p(),label:"Google",url:"https://www.google.com",target:"New Tab"},{id:p(),label:"Docs",url:"https://docs.example.com",target:"Same Tab",asChild:!0}],E={render:()=>{const[d,o]=v.useState(Re),g=({active:n,over:i,delta:e})=>{const t=d.findIndex(I=>I.id===n.id),m=d.findIndex(I=>I.id===i.id);o(I=>{const C=[...I],[h]=C.splice(t,1);return h&&(C.splice(m,0,h),(e==null?void 0:e.x)>50?h.asChild=!0:(e==null?void 0:e.x)<-50&&(h.asChild=!1)),C[0]&&(C[0].asChild=!1),C})},r=(n,i)=>{o(e=>e.map(t=>t.id===n?{...t,label:i}:t))},l=(n,i)=>{o(e=>e.map(t=>t.id===n?{...t,url:i}:t))},s=(n,i)=>{o(e=>e.map(t=>t.id===n?{...t,target:i}:t))},c=n=>{o(i=>i.filter(e=>e.id!==n))},u=()=>{const n={id:p(),label:`New Link ${d.length+1}`,url:"",target:"New Tab"};o(i=>[...i,n])};return a.jsxs(b,{children:[a.jsx(f,{onDragEnd:g,items:d.map(n=>n.id),restrictToVerticalAxisValue:!1,children:d.map(n=>a.jsx(Ee,{id:n.id,label:n.label,url:n.url,asChild:n.asChild,target:n.target,onLabelChange:i=>r(n.id,i),onUrlChange:i=>l(n.id,i),onSelectChange:i=>s(n.id,i),onDeleteHandle:()=>c(n.id)},n.id))}),a.jsx(D,{onClick:u,leftIcon:w,children:"Add New Custom Link"})]})}},L={render:()=>a.jsx(Le,{dashIconslug:"",url:"",onSlugChange:d=>console.log(d),onURLChange:d=>console.log(d)})},Be=[{id:p(),fontName:"Poppins Classic",fontWeights:"300, 400, 500, 600"},{id:p(),fontName:"Roboto Mono",fontWeights:"100, 300, 400"}],T={render:()=>{const[d,o]=v.useState(Be),g=({active:s,over:c})=>{const u=d.findIndex(i=>i.id===s.id),n=d.findIndex(i=>i.id===c.id);u===-1||n===-1||o(i=>{const e=[...i],[t]=e.splice(u,1);return t&&e.splice(n,0,t),e})},r=s=>{o(c=>c.filter(u=>u.id!==s))},l=()=>{const s={id:p(),fontName:`New Font ${d.length+1}`,fontWeights:""};o(c=>[...c,s])};return a.jsxs(b,{children:[a.jsx(f,{onDragEnd:g,items:d.map(s=>s.id),children:d.map(s=>a.jsx(Te,{id:s.id,fontName:s.fontName,fontWeights:s.fontWeights,onDeleteHandle:()=>r(s.id)},s.id))}),a.jsx(D,{onClick:l,leftIcon:w,children:"Add New Custom Font"})]})}},y={render:()=>a.jsx(ye,{id:"preset-1"})},F={render:()=>a.jsx(Se,{id:"replace-field-1",placeholders:["Video Title","Video URL"]})},A={render:()=>a.jsx(Se,{id:"replace-field-error-1",placeholders:["Video Title","Video URL"],cssSelectorError:"*Invalid Title",customTextError:"*Invalid link"})},Pe=[{id:p(),name:"Accordion",icon:Ve},{id:p(),name:"Audio",icon:je},{id:p(),name:"Bar Counter",icon:Oe},{id:p(),name:"Code",icon:Me}],N={render:()=>{const[d,o]=v.useState(Pe),g=r=>{const{active:l,over:s}=r;!s||l.id===s.id||o(c=>{const u=c.findIndex(t=>t.id===l.id),n=c.findIndex(t=>t.id===s.id);if(u===-1||n===-1)return c;const i=[...c],[e]=i.splice(u,1);return e&&i.splice(n,0,e),i})};return a.jsx(f,{onDragEnd:g,items:d.map(r=>r.id),children:d.map(r=>a.jsx(Fe,{id:r.id,moduleName:r.name,moduleIcon:r.icon},r.id))})}},$e=[{id:"template-1",title:"Template 1"},{id:"template-2",title:"Template 2"},{id:"template-3",title:"Template 3"}],V={render:()=>a.jsx(Ae,{role:"Administrator",templates:$e,selectedTemplateId:"",placeholder:"Select a template",onSelectChange:d=>alert(`selected Templates is : ${d}`)})},x=()=>{const[d,o]=v.useState(!1);return a.jsx(ke,{id:"test-template",isEditable:d,onEditClick:()=>o(!0),onEditComplete:()=>o(!1)})},He=[{id:p(),name:"Default Template",isDefault:!0,assigned:!0,assignedToRoles:["Administrator","Editor","Publisher","SEO"],usersList:[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"},{src:"https://i.pravatar.cc/150?img=2",alt:"User 2",userName:"Jane Smith"},{src:"https://i.pravatar.cc/150?img=3",alt:"User 3",userName:"Bob Wilson"},{src:"https://i.pravatar.cc/150?img=4",alt:"User 4",userName:"Alice Brown"},{src:"https://i.pravatar.cc/150?img=5",alt:"User 5",userName:"Charlie Davis"}]},{id:p(),name:"Custom Header Template",assigned:!0,assignedToRoles:["Manager","Reviewer"],usersList:[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"}]},{id:p(),name:"Minimal Template"}],j={render:()=>{const[d,o]=v.useState(He),[g,r]=v.useState(new Set),l=e=>{const{active:t,over:m}=e;if(!m||t.id===m.id)return;const I=d.findIndex(M=>M.id===t.id),C=d.findIndex(M=>M.id===m.id);if(I===-1||C===-1)return;const h=[...d],[R]=h.splice(I,1);R&&h.splice(C,0,R),o(h)},s=(e,t)=>{o(m=>m.map(I=>I.id===e?{...I,name:t}:I))},c=e=>{console.log("Editing Clicked:",e),r(t=>new Set(t).add(e))},u=e=>{r(t=>{const m=new Set(t);return m.delete(e),m})},n=e=>{o(t=>t.filter(m=>m.id!==e)),r(t=>{const m=new Set(t);return m.delete(e),m})},i=()=>{const e={id:p(),name:`New Template ${d.length+1}`};o(t=>[...t,e])};return a.jsxs(b,{children:[a.jsx(f,{onDragEnd:l,items:d.map(e=>e.id),children:d.map((e,t)=>a.jsx(ke,{id:e.id,name:e.name,isDefault:e.isDefault,isEditable:g.has(e.id),onEditClick:()=>c(e.id),onEditComplete:()=>u(e.id),onNameChange:m=>s(e.id,m),onDeleteHandle:()=>n(e.id),onCopyClick:()=>alert(`Copied template: ${e.name}`),usersList:e.usersList,roles:e.assignedToRoles,variant:"secondary",description:t===d.length-1?"What a description":void 0},e.id))}),a.jsx(D,{onClick:i,leftIcon:w,children:"Add New Template"})]})}},We=[{id:p(),label:"Video Title 1",module:"Module A"},{id:p(),label:"Video Title 2",module:"Module B"}],O={render:()=>{const[d,o]=v.useState(We),g=l=>{const{active:s,over:c}=l;if(!c||s.id===c.id)return;const u=d.findIndex(t=>t.id===s.id),n=d.findIndex(t=>t.id===c.id);if(u===-1||n===-1)return;const i=[...d],[e]=i.splice(u,1);e&&i.splice(n,0,e),o(i)},r=()=>{const l={id:p(),label:`New Video ${d.length+1}`,module:"Module"};o(s=>[...s,l])};return a.jsxs(b,{children:[a.jsx(f,{onDragEnd:g,items:d.map(l=>l.id),children:d.map(l=>a.jsx(Ne,{id:l.id,label:l.label,module:l.module,showCloneIcon:!0,onEditClick:()=>alert("Edit Clicked"),onCloneClick:()=>alert("Clone Clicked"),onDeleteHandle:()=>alert("Delete Clicked")},l.id))}),a.jsx(D,{onClick:r,leftIcon:w,children:"Add New Video"})]})}};x.__docgenInfo={description:"",methods:[],displayName:"TemplateFieldSingle"};var B,P,$;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...($=(P=S.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var H,W,_;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState("#ff0000");
    const [colorOpacity, setColorOpacity] = useState(1);
    return <DndColorField id={2} label="Color Field Label" color={color} onColorChange={setColor} colorOpacity={colorOpacity} setColorOpacity={setColorOpacity} onLabelChange={() => {}} onDeleteHandle={() => {}} isVariable={true} variableTitle="Primary" popupDirection="down" />;
  }
}`,...(_=(W=k.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var J,Q,z;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(z=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:z.source}}};var G,q,K;L.parameters={...L.parameters,docs:{...(G=L.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    return <MainParentLink dashIconslug="" url="" onSlugChange={v => console.log(v)} onURLChange={v => console.log(v)} />;
  }
}`,...(K=(q=L.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var X,Y,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <DndModulePreset id={"preset-1"} />
}`,...(te=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ie,de,oe;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-1"} placeholders={["Video Title", "Video URL"]} />
}`,...(oe=(de=F.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};var ae,se,re;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <DndReplaceField id={"replace-field-error-1"} placeholders={["Video Title", "Video URL"]} cssSelectorError="*Invalid Title" customTextError="*Invalid link" />
}`,...(re=(se=A.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var le,ce,me;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(me=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,ue,Ie;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:'{\n  render: () => <TemplateAssignmentField role="Administrator" templates={templates} selectedTemplateId="" placeholder="Select a template" onSelectChange={id => alert(`selected Templates is : ${id}`)} />\n}',...(Ie=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:Ie.source}}};var ge,he,Ce;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const [editable, setEditable] = useState(false);
  return <DndTemplateField id={"test-template"} isEditable={editable} onEditClick={() => setEditable(true)} onEditComplete={() => setEditable(false)} />;
}`,...(Ce=(he=x.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var ve,fe,xe;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
          {items.map((item, index) => <DndTemplateField key={item.id} id={item.id} name={item.name} isDefault={item.isDefault} isEditable={editableItems.has(item.id)} onEditClick={() => handleEditClick(item.id)} onEditComplete={() => handleEditComplete(item.id)} onNameChange={name => handleNameChange(item.id, name)} onDeleteHandle={() => handleDelete(item.id)} onCopyClick={() => alert(\`Copied template: \${item.name}\`)}
        // badgeStatus={item.assigned ? "active" : "inactive"}
        // badgeText={item.assigned ? item.assignedToRoles?.[0] : "Unassigned"}
        usersList={item.usersList} roles={item.assignedToRoles} variant="secondary" description={index === items.length - 1 ? "What a description" : undefined} />)}
        </SortableList>
        <Button onClick={handleAdd} leftIcon={AddIcon}>
          Add New Template
        </Button>
      </Stack>;
  }
}`,...(xe=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var be,De,we;O.parameters={...O.parameters,docs:{...(be=O.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
          {items.map(item => <DndVideoLinkField key={item.id} id={item.id} label={item.label} module={item.module} showCloneIcon onEditClick={() => alert("Edit Clicked")} onCloneClick={() => alert("Clone Clicked")} onDeleteHandle={() => alert("Delete Clicked")} />)}
        </SortableList>
        <Button onClick={handleAdd} leftIcon={AddIcon}>
          Add New Video
        </Button>
      </Stack>;
  }
}`,...(we=(De=O.parameters)==null?void 0:De.docs)==null?void 0:we.source}}};const En=["ColorField","VariableColorField","LinkField","ParentQuickLink","FontField","ModulePreset","ReplaceField","ReplaceFieldWithValidation","ModuleItemList","TemplateAssignment","TemplateFieldSingle","TemplateField","VideoLinkField"];export{S as ColorField,T as FontField,E as LinkField,N as ModuleItemList,y as ModulePreset,L as ParentQuickLink,F as ReplaceField,A as ReplaceFieldWithValidation,V as TemplateAssignment,j as TemplateField,x as TemplateFieldSingle,k as VariableColorField,O as VideoLinkField,En as __namedExportsOrder,kn as default};
