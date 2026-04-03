import{j as e,r as b}from"./iframe-DUD7WYS4.js";import{M as i}from"./index-j9rfCVcz.js";import{B as f,F as M,K as x}from"./KeyIcon-B6jNHVsL.js";import{U as A}from"./UsersIcon-B1nOs3rW.js";import{S as C}from"./SupportIcon-D0fNR56X.js";import{I as k}from"./InfoIcon-BXxc1MFI.js";import{I as y}from"./ImportExportIcon-BzWYh_-f.js";import{M as n,u as I}from"./index-CzBe3No5.js";import{T as w}from"./Text-VT96SzBo.js";import{S as u}from"./index--KP7Itue.js";import{B as r}from"./index-DmKHXBUC.js";import{R as H}from"./ResetIcon-BrwSmgcn.js";import"./FilledIcon-C84fDcJ4.js";import"./DropdownIcon-CPwyFly-.js";import"./type-CgT0EiC8.js";import"./Heading-Bk9dLfn0.js";import"./AddIcon-CLTo_CXI.js";import"./useOutsideToggle-DSQOym7A.js";import"./DiviMigrationHelperIcon-CtGDSxdP.js";import"./PACLogo-DiFwAh_L.js";import"./index-BsQc5stx.js";import"./index-HEpB2994.js";import"./index-Crjx3oBx.js";import"./index-uhwntRUg.js";import"./index-3Vsulo6k.js";import"./CloseIcon-C0fcdRi8.js";import"./index-l2lwyjqv.js";const oe={title:"PAC Universal Plugin UI/Composite/MainHeader",component:i,parameters:{backgrounds:{default:"light",values:[{name:"light",value:"#f5f6fa"},{name:"dark",value:"#222"}]}}},t={render:()=>{const[a,v]=b.useState("divi-event-calendar-module"),h={version:"0.0.9",userAvatar:"https://bc3-production-assets-cdn.basecamp-static.com/4677743/people/BAhpBJQn1wI=--4b34d6ad2aa165f177c7e08ebb0fbb25e7fb5da0/avatar/in/260/90ad41c3cfd4e50976d4a0fad1ef44c8.avif?v=1",userName:"Muhammad Touseef",activeMenu:"",plugins:[{id:"divi-assistant",name:"Divi Assistant"},{id:"divi-dynamic-helper",name:"Divi Dynamic Content Helper"},{id:"divi-contact-form-helper",name:"Divi Contact Form Helper"},{id:"divi-custom-fields-helper",name:"Divi Custom Fields Helper"},{id:"divi-event-calendar-module",name:"Divi Events Calendar"},{id:"divi-taxonomy-helper",name:"Divi Taxonomy Helper"},{id:"divi-search-helper",name:"Divi Search Helper"},{id:"divi-table-of-contents-maker",name:"Divi Table of Contents Maker"},{id:"divi-carousel-maker",name:"Divi Carousel Maker"},{id:"divi-responsive-helper",name:"Divi Responsive Helper"},{id:"divi-social-sharing-buttons",name:"Divi Social Sharing Buttons Maker"},{id:"divi-timer-pro",name:"Divi Timer Pro"},{id:"divi-tabs-maker",name:"Divi Tabs Maker"},{id:"divi-migration-helper",name:"Divi Migration Helper"}],activePluginId:a,onPluginSelect:g=>v(g),onAvatarClick:()=>console.log("Go to Admin Page")};return e.jsxs(i,{...h,children:[e.jsx(i.Action,{id:"changelog",tooltip:"Changelog",icon:f,onClick:()=>console.log("Open changelog")}),e.jsx(i.Action,{id:"feature-request",tooltip:"Feature Request",icon:M,onClick:()=>console.log("Open Feature Request")}),e.jsx(i.Action,{id:"license-activation",tooltip:"License Key",icon:x,onClick:()=>console.log("Open License Activation")}),e.jsx(i.Action,{tooltip:"Our Community",icon:A,onClick:()=>window.open("https://www.peeayecreative.com/community/space/divi-assistant/home","_blank")}),e.jsx(i.Action,{tooltip:"Support",icon:C,onClick:()=>window.open("https://www.peeayecreative.com/support/","_blank")}),e.jsx(i.Action,{tooltip:"About",icon:k,onClick:()=>window.open("https://www.peeayecreative.com","_blank")}),e.jsxs(n,{children:[e.jsxs(n.Trigger,{children:[" ",e.jsx(i.Action,{tooltip:"Import/Export",icon:y,onClick:()=>{}})]}),e.jsxs(n.Content,{children:[e.jsx(n.Header,{children:"Import & Export Settings"}),e.jsxs(n.Tabs,{children:[e.jsx(n.Tab,{id:"tab1",children:"Export"}),e.jsx(n.Tab,{id:"tab2",children:"Import"})]}),e.jsx(n.Body,{id:"tab1",children:"Export content..."}),e.jsx(n.Body,{id:"tab2",children:"Import content..."})]})]}),e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx(i.Action,{tooltip:"Reset",icon:H,onClick:()=>{}})}),e.jsxs(n.Content,{children:[e.jsx(n.Header,{children:"Reset"}),e.jsx(n.Body,{id:"confirmation-body",children:e.jsxs(u,{gap:15,children:[e.jsx(w,{children:"This will return all settings throughout Divi Assistant to their default values. Are you sure you want to do this?"}),e.jsx(D,{})]})})]})]})]})}},D=()=>{const{close:a}=I();return e.jsxs(u,{direction:"horizontal",children:[e.jsx(r,{variant:"danger",width:"stretch",onClick:a,children:"No"}),e.jsx(r,{width:"stretch",variant:"secondary",children:"Yes"})]})},o=()=>e.jsx(i,{userName:"Muhammad Touseef",userAvatar:"https://bc3-production-assets-cdn.basecamp-static.com/4677743/people/BAhpBJQn1wI=--4b34d6ad2aa165f177c7e08ebb0fbb25e7fb5da0/avatar/in/260/90ad41c3cfd4e50976d4a0fad1ef44c8.avif?v=1",plugins:"Pee-Aye Creative",activePluginId:"Pee-Aye Creative"});o.__docgenInfo={description:"",methods:[],displayName:"PACAboutPageHeader"};var s,d,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const [activePluginId, setActivePluginId] = useState("divi-event-calendar-module");
    const plugins = [{
      id: "divi-assistant",
      name: "Divi Assistant"
    }, {
      id: "divi-dynamic-helper",
      name: "Divi Dynamic Content Helper"
    }, {
      id: "divi-contact-form-helper",
      name: "Divi Contact Form Helper"
    }, {
      id: "divi-custom-fields-helper",
      name: "Divi Custom Fields Helper"
    }, {
      id: "divi-event-calendar-module",
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
      id: "divi-social-sharing-buttons",
      name: "Divi Social Sharing Buttons Maker"
    }, {
      id: "divi-timer-pro",
      name: "Divi Timer Pro"
    }, {
      id: "divi-tabs-maker",
      name: "Divi Tabs Maker"
    }, {
      id: "divi-migration-helper",
      name: "Divi Migration Helper"
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

        <Modal>
          <Modal.Trigger>
            <MainHeader.Action tooltip="Reset" icon={ResetIcon} onClick={() => {}} />
          </Modal.Trigger>

          <Modal.Content>
            <Modal.Header>Reset</Modal.Header>

            <Modal.Body id="confirmation-body">
              <Stack gap={15}>
                <Text>
                  This will return all settings throughout Divi Assistant to
                  their default values. Are you sure you want to do this?
                </Text>
                {/* Code for ModalButtons is available is below in commented format*/}
                <ModalButtons />
                {/* **********************************************************
                 const ModalButtons = () => {
                  const { close } = useModal();
                  
                  return (
                    <Stack direction="horizontal">
                      <Button 
                        variant="danger" 
                        width="stretch" 
                        onClick={close}
                      >
                        No
                      </Button>
                      <Button width="stretch" variant="secondary">
                        Yes
                      </Button>
                    </Stack>
                  );
                 };**************************************************************/}
              </Stack>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </MainHeader>;
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,p,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:'() => <MainHeader userName={"Muhammad Touseef"} userAvatar={"https://bc3-production-assets-cdn.basecamp-static.com/4677743/people/BAhpBJQn1wI=--4b34d6ad2aa165f177c7e08ebb0fbb25e7fb5da0/avatar/in/260/90ad41c3cfd4e50976d4a0fad1ef44c8.avif?v=1"} plugins={"Pee-Aye Creative"} activePluginId={"Pee-Aye Creative"} />',...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const te=["Default","PACAboutPageHeader"];export{t as Default,o as PACAboutPageHeader,te as __namedExportsOrder,oe as default};
