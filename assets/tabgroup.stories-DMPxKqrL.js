import{j as a,r as m}from"./iframe-C-7ArFf6.js";import{T as n}from"./index-CK6GGcna.js";import{S as P}from"./SettingsIcon-gKlB0_fg.js";import{S as f}from"./SearchIcon-Peu-tTRY.js";import{C as S}from"./CacheIcon-Dw3prj-v.js";import{S as o}from"./index-l4Gs6nl2.js";import"./type-Bc9hys3F.js";const k={title:"PAC Universal Plugin UI/Composite/TabGroup",component:n,argTypes:{defaultValue:{description:"The default active tab value (uncontrolled)",control:{type:"text"}},value:{description:"The active tab value (controlled)",control:{type:"text"}},orientation:{description:"Orientation of the tab list",control:{type:"radio"},options:["horizontal","vertical"]},onChange:{action:"changed",description:"Callback fired when the active tab changes"}},args:{defaultValue:"tab1",orientation:"horizontal"},parameters:{docs:{description:{component:`TabGroup is a compound component for building accessible tabbed interfaces.

Usage:
\`\`\`tsx
import TabGroup from "@karobar_solutions/pac-universal-plugin-ui";

<TabGroup defaultValue="tab1">
  <TabGroup.List>
    <TabGroup.Tab value="tab1">Tab 1</TabGroup.Tab>
    <TabGroup.Tab value="tab2">Tab 2</TabGroup.Tab>
  </TabGroup.List>
  <TabGroup.Panel value="tab1">Content 1</TabGroup.Panel>
  <TabGroup.Panel value="tab2">Content 2</TabGroup.Panel>
</TabGroup>
\`\`\``}}}},t={render:e=>a.jsxs(n,{defaultValue:e.defaultValue,orientation:e.orientation,children:[a.jsxs(n.List,{children:[a.jsx(n.Tab,{value:"tab1",children:"General"}),a.jsx(n.Tab,{value:"tab2",children:"Settings"}),a.jsx(n.Tab,{value:"tab3",children:"Advanced"})]}),a.jsx(n.Panel,{value:"tab1",children:a.jsx("div",{style:{padding:16},children:"General content goes here."})}),a.jsx(n.Panel,{value:"tab2",children:a.jsx("div",{style:{padding:16},children:"Settings content goes here."})}),a.jsx(n.Panel,{value:"tab3",children:a.jsx("div",{style:{padding:16},children:"Advanced content goes here."})})]})},r={render:()=>{const[e,j]=m.useState("tab1");return a.jsxs("div",{children:[a.jsxs(n,{value:e,onChange:j,children:[a.jsxs(n.List,{children:[a.jsx(n.Tab,{value:"tab1",children:"First"}),a.jsx(n.Tab,{value:"tab2",children:"Second"}),a.jsx(n.Tab,{value:"tab3",children:"Third"})]}),a.jsx(n.Panel,{value:"tab1",children:a.jsx("div",{style:{padding:16},children:"First panel content."})}),a.jsx(n.Panel,{value:"tab2",children:a.jsx("div",{style:{padding:16},children:"Second panel content."})}),a.jsx(n.Panel,{value:"tab3",children:a.jsx("div",{style:{padding:16},children:"Third panel content."})})]}),a.jsxs("div",{style:{marginTop:16,color:"#888"},children:["Active tab: ",a.jsx("strong",{children:e})]})]})}},i={render:()=>a.jsxs(n,{defaultValue:"tab1",orientation:"vertical",children:[a.jsxs(n.List,{children:[a.jsx(n.Tab,{value:"tab1",children:"Profile"}),a.jsx(n.Tab,{value:"tab2",children:"Account"}),a.jsx(n.Tab,{value:"tab3",children:"Notifications"}),a.jsx(n.Tab,{value:"tab4",disabled:!0,children:"Billing"})]}),a.jsx(n.Panel,{value:"tab1",children:a.jsx("div",{style:{padding:16},children:"Profile settings content."})}),a.jsx(n.Panel,{value:"tab2",children:a.jsx("div",{style:{padding:16},children:"Account settings content."})}),a.jsx(n.Panel,{value:"tab3",children:a.jsx("div",{style:{padding:16},children:"Notification preferences content."})}),a.jsx(n.Panel,{value:"tab4",children:a.jsx("div",{style:{padding:16},children:"Billing information content."})})]})},l={render:()=>a.jsxs(n,{defaultValue:"tab1",children:[a.jsxs(n.List,{children:[a.jsx(n.Tab,{value:"tab1",children:a.jsxs(o,{direction:"horizontal",gap:6,alignItems:"center",children:[a.jsx(f,{size:"small"}),a.jsx("span",{children:"Search"})]})}),a.jsx(n.Tab,{value:"tab2",children:a.jsxs(o,{direction:"horizontal",gap:6,alignItems:"center",children:[a.jsx(P,{size:"small"}),a.jsx("span",{children:"Settings"})]})}),a.jsx(n.Tab,{value:"tab3",children:a.jsxs(o,{direction:"horizontal",gap:6,alignItems:"center",children:[a.jsx(S,{size:"small"}),a.jsx("span",{children:"Cache"})]})})]}),a.jsx(n.Panel,{value:"tab1",children:a.jsx("div",{style:{padding:16},children:"Search panel content."})}),a.jsx(n.Panel,{value:"tab2",children:a.jsx("div",{style:{padding:16},children:"Settings panel content."})}),a.jsx(n.Panel,{value:"tab3",children:a.jsx("div",{style:{padding:16},children:"Cache panel content."})})]})};var s,d,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => <TabGroup defaultValue={args.defaultValue} orientation={args.orientation}>
      <TabGroup.List>
        <TabGroup.Tab value="tab1">General</TabGroup.Tab>
        <TabGroup.Tab value="tab2">Settings</TabGroup.Tab>
        <TabGroup.Tab value="tab3">Advanced</TabGroup.Tab>
      </TabGroup.List>
      <TabGroup.Panel value="tab1">
        <div style={{
        padding: 16
      }}>General content goes here.</div>
      </TabGroup.Panel>
      <TabGroup.Panel value="tab2">
        <div style={{
        padding: 16
      }}>Settings content goes here.</div>
      </TabGroup.Panel>
      <TabGroup.Panel value="tab3">
        <div style={{
        padding: 16
      }}>Advanced content goes here.</div>
      </TabGroup.Panel>
    </TabGroup>
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var b,u,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState("tab1");
    return <div>
        <TabGroup value={activeTab} onChange={setActiveTab}>
          <TabGroup.List>
            <TabGroup.Tab value="tab1">First</TabGroup.Tab>
            <TabGroup.Tab value="tab2">Second</TabGroup.Tab>
            <TabGroup.Tab value="tab3">Third</TabGroup.Tab>
          </TabGroup.List>
          <TabGroup.Panel value="tab1">
            <div style={{
            padding: 16
          }}>First panel content.</div>
          </TabGroup.Panel>
          <TabGroup.Panel value="tab2">
            <div style={{
            padding: 16
          }}>Second panel content.</div>
          </TabGroup.Panel>
          <TabGroup.Panel value="tab3">
            <div style={{
            padding: 16
          }}>Third panel content.</div>
          </TabGroup.Panel>
        </TabGroup>
        <div style={{
        marginTop: 16,
        color: "#888"
      }}>
          Active tab: <strong>{activeTab}</strong>
        </div>
      </div>;
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var T,v,h;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <TabGroup defaultValue="tab1" orientation="vertical">
      <TabGroup.List>
        <TabGroup.Tab value="tab1">Profile</TabGroup.Tab>
        <TabGroup.Tab value="tab2">Account</TabGroup.Tab>
        <TabGroup.Tab value="tab3">Notifications</TabGroup.Tab>
        <TabGroup.Tab value="tab4" disabled>Billing</TabGroup.Tab>
      </TabGroup.List>
      <TabGroup.Panel value="tab1">
        <div style={{
        padding: 16
      }}>Profile settings content.</div>
      </TabGroup.Panel>
      <TabGroup.Panel value="tab2">
        <div style={{
        padding: 16
      }}>Account settings content.</div>
      </TabGroup.Panel>
      <TabGroup.Panel value="tab3">
        <div style={{
        padding: 16
      }}>Notification preferences content.</div>
      </TabGroup.Panel>
      <TabGroup.Panel value="tab4">
        <div style={{
        padding: 16
      }}>Billing information content.</div>
      </TabGroup.Panel>
    </TabGroup>
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var G,g,x;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <TabGroup defaultValue="tab1">
      <TabGroup.List>
        <TabGroup.Tab value="tab1">
          <Stack direction="horizontal" gap={6} alignItems="center">
            <SearchIcon size="small" />
            <span>Search</span>
          </Stack>
        </TabGroup.Tab>
        <TabGroup.Tab value="tab2">
          <Stack direction="horizontal" gap={6} alignItems="center">
            <SettingsIcon size="small" />
            <span>Settings</span>
          </Stack>
        </TabGroup.Tab>
        <TabGroup.Tab value="tab3">
          <Stack direction="horizontal" gap={6} alignItems="center">
            <CacheIcon size="small" />
            <span>Cache</span>
          </Stack>
        </TabGroup.Tab>
      </TabGroup.List>
      <TabGroup.Panel value="tab1">
        <div style={{
        padding: 16
      }}>Search panel content.</div>
      </TabGroup.Panel>
      <TabGroup.Panel value="tab2">
        <div style={{
        padding: 16
      }}>Settings panel content.</div>
      </TabGroup.Panel>
      <TabGroup.Panel value="tab3">
        <div style={{
        padding: 16
      }}>Cache panel content.</div>
      </TabGroup.Panel>
    </TabGroup>
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const B=["Default","Controlled","Vertical","WithIcons"];export{r as Controlled,t as Default,i as Vertical,l as WithIcons,B as __namedExportsOrder,k as default};
