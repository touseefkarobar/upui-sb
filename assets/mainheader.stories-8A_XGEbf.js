import{j as e,r as b}from"./iframe-BdSb4ebm.js";import{M as i}from"./index-DRclMTjx.js";import{B as h,F as f,K as g}from"./KeyIcon-CBNwu1Td.js";import{U as M}from"./UsersIcon-B_fig-mV.js";import{S as A}from"./SupportIcon-DV_Hu9We.js";import{I as C}from"./InfoIcon-A9eL9BpR.js";import{I}from"./ImportExportIcon-qzDeA6kc.js";import{M as n}from"./index-BbHd01Ne.js";import"./FilledIcon-CnE9lIBG.js";import"./DropdownIcon-DIeg15BM.js";import"./type-Bc9hys3F.js";import"./Heading-BR177-iI.js";import"./AddIcon-CccLA-Ka.js";import"./useOutsideToggle-DIREm8rE.js";import"./DiviCustomFieldHeplerIcon-Ch2RmUTR.js";import"./DiviDynamicHelperIcon-DJSWquIo.js";import"./PACLogo-WA-2jrt6.js";import"./index-D4xEymsa.js";import"./index-CKnBnKJx.js";import"./index-CZwOX2Lh.js";import"./index-CqyDz2mV.js";import"./CloseIcon-DsnXaTTV.js";import"./index-CvZVEFU9.js";const z={title:"PAC Universal Plugin UI/Composite/MainHeader",component:i,parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#f5f6fa"},{name:"dark",value:"#222"}]}}},a={render:()=>{const[l,m]=b.useState("divi-responsive-helper"),v={version:"0.0.9",userAvatar:"https://bc3-production-assets-cdn.basecamp-static.com/4677743/people/BAhpBJQn1wI=--4b34d6ad2aa165f177c7e08ebb0fbb25e7fb5da0/avatar/in/260/90ad41c3cfd4e50976d4a0fad1ef44c8.avif?v=1",userName:"Muhammad Touseef",activeMenu:"",plugins:[{id:"divi-assistant",name:"Divi Assistant"},{id:"divi-dynamic-content-helper",name:"Divi Dynamic Content Helper"},{id:"divi-contact-form-helper",name:"Divi Contact Form Helper"},{id:"divi-custom-fields-helper",name:"Divi Custom Fields Helper"},{id:"divi-events-calendar",name:"Divi Events Calendar"},{id:"divi-taxonomy-helper",name:"Divi Taxonomy Helper"},{id:"divi-search-helper",name:"Divi Search Helper"},{id:"divi-table-of-contents-maker",name:"Divi Table of Contents Maker"},{id:"divi-carousel-maker",name:"Divi Carousel Maker"},{id:"divi-responsive-helper",name:"Divi Responsive Helper"},{id:"divi-social-sharing-buttons-maker",name:"Divi Social Sharing Buttons Maker"},{id:"divi-timer-pro",name:"Divi Timer Pro"},{id:"divi-tabs-maker",name:"Divi Tabs Maker"}],activePluginId:l,onPluginSelect:u=>m(u),onAvatarClick:()=>console.log("Go to Admin Page")};return e.jsxs(i,{...v,children:[e.jsx(i.Action,{id:"changelog",tooltip:"Changelog",icon:h,onClick:()=>console.log("Open changelog")}),e.jsx(i.Action,{id:"feature-request",tooltip:"Feature Request",icon:f,onClick:()=>console.log("Open Feature Request")}),e.jsx(i.Action,{id:"license-activation",tooltip:"License Key",icon:g,onClick:()=>console.log("Open License Activation")}),e.jsx(i.Action,{tooltip:"Our Community",icon:M,onClick:()=>window.open("https://www.peeayecreative.com/community/space/divi-assistant/home","_blank")}),e.jsx(i.Action,{tooltip:"Support",icon:A,onClick:()=>window.open("https://www.peeayecreative.com/support/","_blank")}),e.jsx(i.Action,{tooltip:"About",icon:C,onClick:()=>window.open("https://www.peeayecreative.com","_blank")}),e.jsxs(n,{children:[e.jsxs(n.Trigger,{children:[" ",e.jsx(i.Action,{tooltip:"Import/Export",icon:I,onClick:()=>{}})]}),e.jsxs(n.Content,{children:[e.jsx(n.Header,{children:"Import & Export Settings"}),e.jsxs(n.Tabs,{children:[e.jsx(n.Tab,{id:"tab1",children:"Export"}),e.jsx(n.Tab,{id:"tab2",children:"Import"})]}),e.jsx(n.Body,{id:"tab1",children:"Export content..."}),e.jsx(n.Body,{id:"tab2",children:"Import content..."})]})]})]})}},o=()=>e.jsx(i,{userName:"Muhammad Touseef",userAvatar:"https://bc3-production-assets-cdn.basecamp-static.com/4677743/people/BAhpBJQn1wI=--4b34d6ad2aa165f177c7e08ebb0fbb25e7fb5da0/avatar/in/260/90ad41c3cfd4e50976d4a0fad1ef44c8.avif?v=1",plugins:"Pee-Aye Creative",activePluginId:"Pee-Aye Creative"});o.__docgenInfo={description:"",methods:[],displayName:"PACAboutPageHeader"};var t,r,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const [activePluginId, setActivePluginId] = useState("divi-responsive-helper");
    const plugins = [{
      id: "divi-assistant",
      name: "Divi Assistant"
    }, {
      id: "divi-dynamic-content-helper",
      name: "Divi Dynamic Content Helper"
    }, {
      id: "divi-contact-form-helper",
      name: "Divi Contact Form Helper"
    }, {
      id: "divi-custom-fields-helper",
      name: "Divi Custom Fields Helper"
    }, {
      id: "divi-events-calendar",
      name: "Divi Events Calendar"
    }, {
      id: "divi-taxonomy-helper",
      name: "Divi Taxonomy Helper"
    }, {
      id: "divi-search-helper",
      name: "Divi Search Helper"
    }, {
      id: "divi-table-of-contents-maker",
      name: "Divi Table of Contents Maker"
    }, {
      id: "divi-carousel-maker",
      name: "Divi Carousel Maker"
    }, {
      id: "divi-responsive-helper",
      name: "Divi Responsive Helper"
    }, {
      id: "divi-social-sharing-buttons-maker",
      name: "Divi Social Sharing Buttons Maker"
    }, {
      id: "divi-timer-pro",
      name: "Divi Timer Pro"
    }, {
      id: "divi-tabs-maker",
      name: "Divi Tabs Maker"
    }];
    const MainheaderProps = {
      version: "0.0.9",
      userAvatar: "https://bc3-production-assets-cdn.basecamp-static.com/4677743/people/BAhpBJQn1wI=--4b34d6ad2aa165f177c7e08ebb0fbb25e7fb5da0/avatar/in/260/90ad41c3cfd4e50976d4a0fad1ef44c8.avif?v=1",
      userName: "Muhammad Touseef",
      activeMenu: "",
      plugins,
      activePluginId,
      onPluginSelect: (id: any) => setActivePluginId(id),
      onAvatarClick: () => console.log("Go to Admin Page")
    };
    return <MainHeader {...MainheaderProps}>
        <MainHeader.Action id="changelog" tooltip="Changelog" icon={BulletListIcon} onClick={() => console.log("Open changelog")} />

        <MainHeader.Action id="feature-request" tooltip="Feature Request" icon={FeatureRequestIcon} onClick={() => console.log("Open Feature Request")} />
        <MainHeader.Action id="license-activation" tooltip="License Key" icon={KeyIcon} onClick={() => console.log("Open License Activation")} />
        <MainHeader.Action tooltip="Our Community" icon={UsersIcon} onClick={() => window.open("https://www.peeayecreative.com/community/space/divi-assistant/home", "_blank")} />

        <MainHeader.Action tooltip="Support" icon={SupportIcon} onClick={() => window.open("https://www.peeayecreative.com/support/", "_blank")} />

        <MainHeader.Action tooltip="About" icon={InfoIcon} onClick={() => window.open("https://www.peeayecreative.com", "_blank")} />

        <Modal>
          <Modal.Trigger>
            {" "}
            <MainHeader.Action tooltip="Import/Export" icon={ImportExportIcon} onClick={() => {}} />
          </Modal.Trigger>
          <Modal.Content>
            <Modal.Header>Import & Export Settings</Modal.Header>
            <Modal.Tabs>
              <Modal.Tab id="tab1">Export</Modal.Tab>
              <Modal.Tab id="tab2">Import</Modal.Tab>
            </Modal.Tabs>
            <Modal.Body id="tab1">Export content...</Modal.Body>
            <Modal.Body id="tab2">Import content...</Modal.Body>
          </Modal.Content>
        </Modal>
      </MainHeader>;
  }
}`,...(s=(r=a.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:'() => <MainHeader userName={"Muhammad Touseef"} userAvatar={"https://bc3-production-assets-cdn.basecamp-static.com/4677743/people/BAhpBJQn1wI=--4b34d6ad2aa165f177c7e08ebb0fbb25e7fb5da0/avatar/in/260/90ad41c3cfd4e50976d4a0fad1ef44c8.avif?v=1"} plugins={"Pee-Aye Creative"} activePluginId={"Pee-Aye Creative"} />',...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const V=["Default","PACAboutPageHeader"];export{a as Default,o as PACAboutPageHeader,V as __namedExportsOrder,z as default};
