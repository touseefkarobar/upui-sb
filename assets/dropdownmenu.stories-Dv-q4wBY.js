import{j as e}from"./iframe-YWs4K4M3.js";import{D as n}from"./index--m_dfmXL.js";import{E as S}from"./EditIcon-DOHsIcES.js";import{D as g}from"./TrashIcon-CD8JTwIt.js";import{S as x}from"./SettingsIcon-DLP4WbQX.js";import{C as j}from"./CopyIcon-LkeIJNjD.js";import{S as o}from"./index-DwC1gme3.js";import"./useOutsideToggle-D6WyoedE.js";import"./type-CgT0EiC8.js";const v={title:"PAC Universal Plugin UI/Composite/DropdownMenu",component:n,argTypes:{className:{description:"Custom CSS class for the dropdown wrapper",control:{type:"text"}}},parameters:{docs:{description:{component:`DropdownMenu is a compound component for building accessible dropdown menus.

Usage:
\`\`\`tsx
import DropdownMenu from "@karobar_solutions/pac-universal-plugin-ui";

<DropdownMenu>
  <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item onSelect={() => {}}>Action</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu>
\`\`\``}}}},t={render:()=>e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx("button",{type:"button",children:"Open Menu"})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{onSelect:()=>alert("Edit"),children:"Edit"}),e.jsx(n.Item,{onSelect:()=>alert("Duplicate"),children:"Duplicate"}),e.jsx(n.Item,{onSelect:()=>alert("Archive"),children:"Archive"}),e.jsx(n.Item,{onSelect:()=>alert("Delete"),children:"Delete"})]})]})},r={render:()=>e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx("button",{type:"button",children:"Actions"})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{onSelect:()=>alert("Edit"),children:"Edit"}),e.jsx(n.Item,{onSelect:()=>alert("Duplicate"),children:"Duplicate"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{onSelect:()=>alert("Archive"),children:"Archive"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{onSelect:()=>alert("Delete"),children:"Delete"})]})]})},a={render:()=>e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx("button",{type:"button",children:"Options"})}),e.jsxs(n.Content,{children:[e.jsx(n.Label,{children:"Actions"}),e.jsx(n.Item,{onSelect:()=>alert("Edit"),children:"Edit"}),e.jsx(n.Item,{onSelect:()=>alert("Duplicate"),children:"Duplicate"}),e.jsx(n.Separator,{}),e.jsx(n.Label,{children:"Danger Zone"}),e.jsx(n.Item,{onSelect:()=>alert("Delete"),children:"Delete"})]})]})},s={render:()=>e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx("button",{type:"button",children:e.jsxs(o,{direction:"horizontal",gap:6,alignItems:"center",children:[e.jsx(x,{size:"small"}),e.jsx("span",{children:"Menu"})]})})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{onSelect:()=>alert("Edit"),children:e.jsxs(o,{direction:"horizontal",gap:8,alignItems:"center",children:[e.jsx(S,{size:"small"}),e.jsx("span",{children:"Edit"})]})}),e.jsx(n.Item,{onSelect:()=>alert("Copy"),children:e.jsxs(o,{direction:"horizontal",gap:8,alignItems:"center",children:[e.jsx(j,{size:"small"}),e.jsx("span",{children:"Copy"})]})}),e.jsx(n.Separator,{}),e.jsx(n.Item,{onSelect:()=>alert("Delete"),children:e.jsxs(o,{direction:"horizontal",gap:8,alignItems:"center",children:[e.jsx(g,{size:"small"}),e.jsx("span",{children:"Delete"})]})})]})]})};var l,i,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenu.Trigger>
        <button type="button">Open Menu</button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item onSelect={() => alert("Edit")}>Edit</DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => alert("Duplicate")}>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => alert("Archive")}>Archive</DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => alert("Delete")}>Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenu.Trigger>
        <button type="button">Actions</button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item onSelect={() => alert("Edit")}>Edit</DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => alert("Duplicate")}>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item onSelect={() => alert("Archive")}>Archive</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item onSelect={() => alert("Delete")}>Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var D,m,w;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenu.Trigger>
        <button type="button">Options</button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Actions</DropdownMenu.Label>
        <DropdownMenu.Item onSelect={() => alert("Edit")}>Edit</DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => alert("Duplicate")}>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Label>Danger Zone</DropdownMenu.Label>
        <DropdownMenu.Item onSelect={() => alert("Delete")}>Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
}`,...(w=(m=a.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var M,h,I;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownMenu.Trigger>
        <button type="button">
          <Stack direction="horizontal" gap={6} alignItems="center">
            <SettingsIcon size="small" />
            <span>Menu</span>
          </Stack>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item onSelect={() => alert("Edit")}>
          <Stack direction="horizontal" gap={8} alignItems="center">
            <EditIcon size="small" />
            <span>Edit</span>
          </Stack>
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => alert("Copy")}>
          <Stack direction="horizontal" gap={8} alignItems="center">
            <CopyIcon size="small" />
            <span>Copy</span>
          </Stack>
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item onSelect={() => alert("Delete")}>
          <Stack direction="horizontal" gap={8} alignItems="center">
            <TrashIcon size="small" />
            <span>Delete</span>
          </Stack>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
}`,...(I=(h=s.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};const L=["Default","WithSeparators","WithLabels","WithIcons"];export{t as Default,s as WithIcons,a as WithLabels,r as WithSeparators,L as __namedExportsOrder,v as default};
