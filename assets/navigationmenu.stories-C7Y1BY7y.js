import{j as e}from"./iframe-DKr_oYML.js";import{N as a}from"./index-Oipf8Vb7.js";import{S as p}from"./SettingsIcon-Dk6h0PWQ.js";import{S as I}from"./SearchIcon-DfBbu5Mf.js";import{C as d}from"./CacheIcon-BKHi6d8e.js";import{S as N}from"./SupportIcon-CnjZJ40F.js";import{U as M}from"./UsersIcon-CEeu10rb.js";import{B as x}from"./index-yS1VfeZh.js";import"./type-CgT0EiC8.js";const k={title:"PAC Universal Plugin UI/Composite/NavigationMenu",component:a,argTypes:{"aria-label":{description:"Accessible label for the navigation landmark",control:{type:"text"}}},args:{"aria-label":"Main navigation"},parameters:{docs:{description:{component:`NavigationMenu is a compound component for building accessible navigation menus with keyboard support and roving tabindex.

Usage:
\`\`\`tsx
import NavigationMenu from "@karobar_solutions/pac-universal-plugin-ui";

<NavigationMenu aria-label="Main navigation">
  <NavigationMenu.Item active>Home</NavigationMenu.Item>
  <NavigationMenu.Item href="/about">About</NavigationMenu.Item>
</NavigationMenu>
\`\`\``}}}},n={render:h=>e.jsxs(a,{"aria-label":h["aria-label"],children:[e.jsx(a.Item,{active:!0,onClick:()=>alert("Dashboard"),children:"Dashboard"}),e.jsx(a.Item,{onClick:()=>alert("Settings"),children:"Settings"}),e.jsx(a.Item,{onClick:()=>alert("Users"),children:"Users"}),e.jsx(a.Item,{disabled:!0,children:"Analytics"}),e.jsx(a.Item,{href:"#",children:"Documentation"})]})},i={render:()=>e.jsxs(a,{"aria-label":"Grouped navigation",children:[e.jsxs(a.Group,{label:"General",children:[e.jsx(a.Item,{active:!0,icon:e.jsx(p,{size:"small"}),children:"Settings"}),e.jsx(a.Item,{icon:e.jsx(I,{size:"small"}),children:"Search"})]}),e.jsxs(a.Group,{label:"System",children:[e.jsx(a.Item,{icon:e.jsx(d,{size:"small"}),children:"Cache"}),e.jsx(a.Item,{icon:e.jsx(M,{size:"small"}),children:"Users"}),e.jsx(a.Item,{icon:e.jsx(N,{size:"small"}),badge:e.jsx(x,{variant:"active"}),children:"Support"})]})]})},t={render:()=>e.jsxs(a,{"aria-label":"Navigation with separators",children:[e.jsx(a.Item,{active:!0,icon:e.jsx(p,{size:"small"}),children:"Dashboard"}),e.jsx(a.Item,{icon:e.jsx(M,{size:"small"}),children:"Users"}),e.jsx(a.Separator,{}),e.jsx(a.Item,{icon:e.jsx(d,{size:"small"}),children:"Performance"}),e.jsx(a.Item,{icon:e.jsx(I,{size:"small"}),children:"Search"}),e.jsx(a.Separator,{}),e.jsx(a.Item,{icon:e.jsx(N,{size:"small"}),children:"Help & Support"})]})};var o,r,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => <NavigationMenu aria-label={args["aria-label"]}>
      <NavigationMenu.Item active onClick={() => alert("Dashboard")}>
        Dashboard
      </NavigationMenu.Item>
      <NavigationMenu.Item onClick={() => alert("Settings")}>
        Settings
      </NavigationMenu.Item>
      <NavigationMenu.Item onClick={() => alert("Users")}>
        Users
      </NavigationMenu.Item>
      <NavigationMenu.Item disabled>
        Analytics
      </NavigationMenu.Item>
      <NavigationMenu.Item href="#">
        Documentation
      </NavigationMenu.Item>
    </NavigationMenu>
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var l,c,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <NavigationMenu aria-label="Grouped navigation">
      <NavigationMenu.Group label="General">
        <NavigationMenu.Item active icon={<SettingsIcon size="small" />}>
          Settings
        </NavigationMenu.Item>
        <NavigationMenu.Item icon={<SearchIcon size="small" />}>
          Search
        </NavigationMenu.Item>
      </NavigationMenu.Group>
      <NavigationMenu.Group label="System">
        <NavigationMenu.Item icon={<CacheIcon size="small" />}>
          Cache
        </NavigationMenu.Item>
        <NavigationMenu.Item icon={<UsersIcon size="small" />}>
          Users
        </NavigationMenu.Item>
        <NavigationMenu.Item icon={<SupportIcon size="small" />} badge={<Badge variant="active" />}>
          Support
        </NavigationMenu.Item>
      </NavigationMenu.Group>
    </NavigationMenu>
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,g,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <NavigationMenu aria-label="Navigation with separators">
      <NavigationMenu.Item active icon={<SettingsIcon size="small" />}>
        Dashboard
      </NavigationMenu.Item>
      <NavigationMenu.Item icon={<UsersIcon size="small" />}>
        Users
      </NavigationMenu.Item>
      <NavigationMenu.Separator />
      <NavigationMenu.Item icon={<CacheIcon size="small" />}>
        Performance
      </NavigationMenu.Item>
      <NavigationMenu.Item icon={<SearchIcon size="small" />}>
        Search
      </NavigationMenu.Item>
      <NavigationMenu.Separator />
      <NavigationMenu.Item icon={<SupportIcon size="small" />}>
        Help & Support
      </NavigationMenu.Item>
    </NavigationMenu>
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const y=["Default","WithGroups","WithSeparators"];export{n as Default,i as WithGroups,t as WithSeparators,y as __namedExportsOrder,k as default};
