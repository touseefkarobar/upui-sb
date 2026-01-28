import{j as e,r as A}from"./iframe-CNOrQhzL.js";import{L as t}from"./index-CpfmNiJK.js";import{S as B}from"./index-CvSLm2Y9.js";import"./index-Bx4RW36G.js";import"./index-hzpvX8QR.js";import"./TrashIcon-C4M1rtQc.js";import"./type-Bc9hys3F.js";import"./FilledIcon-DkPitjMY.js";import"./CopyIcon-DffhOJxm.js";import"./RolesIcon-CoGF8nGn.js";import"./index-BdE0__Zo.js";import"./index-qFFs7-F0.js";import"./Text-1djUnFeV.js";const F={title:"Primitives/ListCard",component:t,parameters:{layout:"padded"},tags:["autodocs"]},a={render:()=>e.jsxs(B,{direction:"vertical",children:[e.jsx(t,{role:"All Roles",showStatusBadge:!0,badgeText:"Template: All Roles",badgeStatus:"active",showEditIcon:!0,onEditClick:()=>alert("EditClicked")}),e.jsx(t,{role:"Administrator",showStatusBadge:!0,badgeText:"Template: Administrator",badgeStatus:"active",showEditIcon:!0,onEditClick:()=>alert("EditClicked")}),e.jsx(t,{role:"Editors",showStatusBadge:!0,badgeText:"Template: Editors",badgeStatus:"active",showEditIcon:!0,onEditClick:()=>alert("EditClicked")})]})},r={render:()=>e.jsxs(B,{direction:"vertical",children:[e.jsx(t,{user:{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"},showStatusBadge:!0,badgeText:"Template: All Roles",badgeStatus:"active",showEditIcon:!0,onEditClick:()=>alert("EditClicked"),showDeleteIcon:!0,onDeleteClick:()=>alert("DeleteClicked")}),e.jsx(t,{user:{src:"https://i.pravatar.cc/150?img=2",alt:"User 2",userName:"Jane Smith"},showStatusBadge:!0,badgeText:"Template: Administrator",badgeStatus:"active",showEditIcon:!0,onEditClick:()=>alert("EditClicked"),showDeleteIcon:!0,onDeleteClick:()=>alert("DeleteClicked")}),e.jsx(t,{user:{src:"https://i.pravatar.cc/150?img=3",alt:"User 3",userName:"Bob Johnson"},showStatusBadge:!0,badgeText:"Template: Editors",badgeStatus:"active",showEditIcon:!0,onEditClick:()=>alert("EditClicked"),showDeleteIcon:!0,onDeleteClick:()=>alert("DeleteClicked")}),e.jsx(t,{user:{src:"https://i.pravatar.cc/150?img=4",alt:"User 4",userName:"Alice Williams"},showStatusBadge:!0,badgeText:"Template: Unassigned",badgeStatus:"inactive",showEditIcon:!0,onEditClick:()=>alert("EditClicked"),showDeleteIcon:!0,onDeleteClick:()=>alert("DeleteClicked")})]})},s={render:()=>e.jsx(t,{role:"All Roles"})},o={render:()=>e.jsx(t,{user:{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"}})},i={render:()=>{const[c,d]=A.useState(!1);return e.jsx(t,{role:"All Roles",showCheckbox:!0,checked:c,onChange:d})}},l={render:()=>{const[c,d]=A.useState(!1);return e.jsx(t,{role:"All Roles",showCheckbox:!0,checked:c,onChange:d,disabled:!0,message:"This role already has a template assigned."})}};var n,u,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Stack direction="vertical">
      <ListCard role="All Roles" showStatusBadge badgeText="Template: All Roles" badgeStatus="active" showEditIcon onEditClick={() => alert("EditClicked")} />
      <ListCard role="Administrator" showStatusBadge badgeText="Template: Administrator" badgeStatus="active" showEditIcon onEditClick={() => alert("EditClicked")} />
      <ListCard role="Editors" showStatusBadge badgeText="Template: Editors" badgeStatus="active" showEditIcon onEditClick={() => alert("EditClicked")} />
    </Stack>
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,p,C;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Stack direction="vertical">
      <ListCard user={{
      src: "https://i.pravatar.cc/150?img=1",
      alt: "User 1",
      userName: "John Doe"
    }} showStatusBadge badgeText="Template: All Roles" badgeStatus="active" showEditIcon onEditClick={() => alert("EditClicked")} showDeleteIcon onDeleteClick={() => alert("DeleteClicked")} />
      <ListCard user={{
      src: "https://i.pravatar.cc/150?img=2",
      alt: "User 2",
      userName: "Jane Smith"
    }} showStatusBadge badgeText="Template: Administrator" badgeStatus="active" showEditIcon onEditClick={() => alert("EditClicked")} showDeleteIcon onDeleteClick={() => alert("DeleteClicked")} />
      <ListCard user={{
      src: "https://i.pravatar.cc/150?img=3",
      alt: "User 3",
      userName: "Bob Johnson"
    }} showStatusBadge badgeText="Template: Editors" badgeStatus="active" showEditIcon onEditClick={() => alert("EditClicked")} showDeleteIcon onDeleteClick={() => alert("DeleteClicked")} />
      <ListCard user={{
      src: "https://i.pravatar.cc/150?img=4",
      alt: "User 4",
      userName: "Alice Williams"
    }} showStatusBadge badgeText="Template: Unassigned" badgeStatus="inactive" showEditIcon onEditClick={() => alert("EditClicked")} showDeleteIcon onDeleteClick={() => alert("DeleteClicked")} />
    </Stack>
}`,...(C=(p=r.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var k,g,E;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <ListCard role="All Roles" />
}`,...(E=(g=s.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var S,w,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ListCard user={{
    src: "https://i.pravatar.cc/150?img=1",
    alt: "User 1",
    userName: "John Doe"
  }} />
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var b,T,D;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <ListCard role="All Roles" showCheckbox checked={checked} onChange={setChecked} />;
  }
}`,...(D=(T=i.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var v,I,R;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <ListCard role="All Roles" showCheckbox checked={checked} onChange={setChecked} disabled message="This role already has a template assigned." />;
  }
}`,...(R=(I=l.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const G=["Templates_to_Roles","Templates_to_Users","RoleCard","UserCard","RoleCardWithCheckBox","RoleCardWithCheckBoxDisabledState"];export{s as RoleCard,i as RoleCardWithCheckBox,l as RoleCardWithCheckBoxDisabledState,a as Templates_to_Roles,r as Templates_to_Users,o as UserCard,G as __namedExportsOrder,F as default};
