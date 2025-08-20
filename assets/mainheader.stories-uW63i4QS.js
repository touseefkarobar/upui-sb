import{j as i,r as u}from"./iframe-BrFNDJt9.js";import{M as e}from"./index-CnZ7YrJR.js";import{B as f,F as h,K as b}from"./KeyIcon-DMOqD2Wt.js";import{U as g}from"./UsersIcon-U-BOxAZR.js";import{S as A}from"./SupportIcon-CX4yn2Lo.js";import{I as k}from"./InfoIcon-COVawJr8.js";import"./FilledIcon-DIPzP4Ua.js";import"./DropdownIcon-BZWEeern.js";import"./type-Bc9hys3F.js";import"./Heading-BDsHbMWF.js";import"./AddIcon-BlyreLdM.js";import"./useOutsideToggle-BVTP1hu5.js";import"./DiviCustomFieldHeplerIcon-BZh3MKXl.js";import"./DiviDynamicHelperIcon-CrQuLq57.js";import"./PACLogo-Cg6lgSXL.js";import"./index-D8ed7UmS.js";import"./index-BR9sBGHT.js";import"./index-DU2lcgdh.js";const E={title:"PAC Universal Plugin UI/Composite/MainHeader",component:e,parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#f5f6fa"},{name:"dark",value:"#222"}]}}},a={render:()=>{const[p,l]=u.useState("divi-responsive-helper"),m={version:"0.0.9",userAvatar:"https://bc3-production-assets-cdn.basecamp-static.com/4677743/people/BAhpBJQn1wI=--4b34d6ad2aa165f177c7e08ebb0fbb25e7fb5da0/avatar/in/260/90ad41c3cfd4e50976d4a0fad1ef44c8.avif?v=1",userName:"Muhammad Touseef",activeMenu:"",plugins:[{id:"divi-assistant",name:"Divi Assistant"},{id:"divi-dynamic-helper",name:"Divi Dynamic Helper"},{id:"divi-contact-form-helper",name:"Divi Contact Form Helper"},{id:"divi-custom-fields-helper",name:"Divi Custom Fields Helper"},{id:"divi-events-calendar",name:"Divi Events Calendar"},{id:"divi-taxonomy-helper",name:"Divi Taxonomy Helper"},{id:"divi-search-helper",name:"Divi Search Helper"},{id:"divi-table-of-contents-maker",name:"Divi Table of Contents Maker"},{id:"divi-carousel-maker",name:"Divi Carousel Maker"},{id:"divi-responsive-helper",name:"Divi Responsive Helper"},{id:"divi-social-sharing-buttons-maker",name:"Divi Social Sharing Buttons Maker"},{id:"divi-timer-pro",name:"Divi Timer Pro"},{id:"divi-tabs-maker",name:"Divi Tabs Maker"}],activePluginId:p,onPluginSelect:v=>l(v),onAvatarClick:()=>console.log("Go to Admin Page")};return i.jsxs(e,{...m,children:[i.jsx(e.Action,{id:"changelog",tooltip:"Changelog",icon:f,onClick:()=>console.log("Open changelog")}),i.jsx(e.Action,{id:"feature-request",tooltip:"Feature Request",icon:h,onClick:()=>console.log("Open Feature Request")}),i.jsx(e.Action,{id:"license-activation",tooltip:"License Key",icon:b,onClick:()=>console.log("Open License Activation")}),i.jsx(e.Action,{tooltip:"Our Community",icon:g,onClick:()=>window.open("https://www.peeayecreative.com/community/space/divi-assistant/home","_blank")}),i.jsx(e.Action,{tooltip:"Support",icon:A,onClick:()=>window.open("https://www.peeayecreative.com/support/","_blank")}),i.jsx(e.Action,{tooltip:"About",icon:k,onClick:()=>window.open("https://www.peeayecreative.com","_blank")})]})}},n=()=>i.jsx(e,{userName:"Muhammad Touseef",userAvatar:"https://bc3-production-assets-cdn.basecamp-static.com/4677743/people/BAhpBJQn1wI=--4b34d6ad2aa165f177c7e08ebb0fbb25e7fb5da0/avatar/in/260/90ad41c3cfd4e50976d4a0fad1ef44c8.avif?v=1",plugins:"Pee-Aye Creative",activePluginId:"Pee-Aye Creative"});n.__docgenInfo={description:"",methods:[],displayName:"PACAboutPageHeader"};var o,t,r;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [activePluginId, setActivePluginId] = useState("divi-responsive-helper");
    const plugins = [{
      id: "divi-assistant",
      name: "Divi Assistant"
    }, {
      id: "divi-dynamic-helper",
      name: "Divi Dynamic Helper"
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
    return <MainHeader {...MainheaderProps}>\r
        <MainHeader.Action id="changelog" tooltip="Changelog" icon={BulletListIcon} onClick={() => console.log("Open changelog")} />\r
\r
        <MainHeader.Action id="feature-request" tooltip="Feature Request" icon={FeatureRequestIcon} onClick={() => console.log("Open Feature Request")} />\r
        <MainHeader.Action id="license-activation" tooltip="License Key" icon={KeyIcon} onClick={() => console.log("Open License Activation")} />\r
        <MainHeader.Action tooltip="Our Community" icon={UsersIcon} onClick={() => window.open("https://www.peeayecreative.com/community/space/divi-assistant/home", "_blank")} />\r
\r
        <MainHeader.Action tooltip="Support" icon={SupportIcon} onClick={() => window.open("https://www.peeayecreative.com/support/", "_blank")} />\r
\r
        <MainHeader.Action tooltip="About" icon={InfoIcon} onClick={() => window.open("https://www.peeayecreative.com", "_blank")} />\r
      </MainHeader>;
  }
}`,...(r=(t=a.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var s,c,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:'() => <MainHeader userName={"Muhammad Touseef"} userAvatar={"https://bc3-production-assets-cdn.basecamp-static.com/4677743/people/BAhpBJQn1wI=--4b34d6ad2aa165f177c7e08ebb0fbb25e7fb5da0/avatar/in/260/90ad41c3cfd4e50976d4a0fad1ef44c8.avif?v=1"} plugins={"Pee-Aye Creative"} activePluginId={"Pee-Aye Creative"} />',...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const K=["Default","PACAboutPageHeader"];export{a as Default,n as PACAboutPageHeader,K as __namedExportsOrder,E as default};
