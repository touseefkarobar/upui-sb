import{j as o}from"./iframe-C-7ArFf6.js";import{B as r}from"./index-p_ZZMtpV.js";const x={title:"PAC Universal Plugin UI/Primitive/Breadcrumb",component:r,argTypes:{items:{description:"Array of breadcrumb items with label, optional href, and optional icon",control:{type:"object"}},separator:{description:"Custom separator between breadcrumb items",control:{type:"text"}}},args:{separator:"/"}},a={args:{items:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Details"}]},render:e=>o.jsx(r,{...e})},s={args:{items:[{label:"Home",href:"#"},{label:"Settings",href:"#"},{label:"Profile"}],separator:">"},render:e=>o.jsx(r,{...e})},n={args:{items:[{label:"Dashboard"}]},render:e=>o.jsx(r,{...e})},t={args:{items:[{label:"Home",href:"#"},{label:"Category",href:"#"},{label:"Subcategory",href:"#"},{label:"Products",href:"#"},{label:"Product Details",href:"#"},{label:"Reviews"}]},render:e=>o.jsx(r,{...e})};var l,m,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "#"
    }, {
      label: "Products",
      href: "#"
    }, {
      label: "Details"
    }]
  },
  render: args => <Breadcrumb {...args} />
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var i,b,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "#"
    }, {
      label: "Settings",
      href: "#"
    }, {
      label: "Profile"
    }],
    separator: ">"
  },
  render: args => <Breadcrumb {...args} />
}`,...(d=(b=s.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var p,u,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Dashboard"
    }]
  },
  render: args => <Breadcrumb {...args} />
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,h,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "#"
    }, {
      label: "Category",
      href: "#"
    }, {
      label: "Subcategory",
      href: "#"
    }, {
      label: "Products",
      href: "#"
    }, {
      label: "Product Details",
      href: "#"
    }, {
      label: "Reviews"
    }]
  },
  render: args => <Breadcrumb {...args} />
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const D=["Default","WithCustomSeparator","SingleItem","ManyItems"];export{a as Default,t as ManyItems,n as SingleItem,s as WithCustomSeparator,D as __namedExportsOrder,x as default};
