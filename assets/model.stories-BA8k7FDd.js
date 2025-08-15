import{r as i,j as e,R as g}from"./iframe-Bqxp9LPJ.js";import{S as c}from"./index-CYyhEWf3.js";import{H as L}from"./Heading-BTKhMFDq.js";import{C as P}from"./CloseIcon-CEITOzKx.js";import{F as G}from"./FilledIcon-Dmyd1mR6.js";import{C as H}from"./index-tBCPxEiM.js";import{T as R}from"./index-CJciPDVQ.js";import{T}from"./Text-CN7O6Q7n.js";import{F as s}from"./index-DiBZrWfH.js";import{I as U}from"./index-DI6BsEFs.js";import{C as a}from"./index-Yiil2E0F.js";import{B as h}from"./index-DFaIJ2EX.js";import{n as q}from"./DragIcon-DsBXv-lZ.js";import{I as V}from"./index-DfGwfBtL.js";import{I as W}from"./ImportExportIcon-CO72h4V1.js";import"./index-CI6iBeTS.js";import"./OverviewPage-DS-rcpOe.js";import"./index-C4y0oI5Y.js";import"./index-CErrjbMP.js";import"./PacAboutPage-c8D5GW_b.js";import"./index-Df-WevMF.js";import"./ChangelogPage-BdKRYRr1.js";import"./index-VmNyLPKL.js";import"./index-qtbHWsay.js";import"./index-CyFjSSFQ.js";import"./index-BxzfE3dO.js";import"./index-DCtNAeH_.js";import"./index-6Jty2E7j.js";import"./index-DHfOiW8U.js";import"./index-CXrWlA5o.js";import"./index-VaSPEf5R.js";import"./index-Cfo35gj4.js";import"./index-C3_RMFmq.js";import"./index-457bIs4W.js";import"./index-CNmxj_pC.js";import"./index-DsemmEuL.js";import"./index-BkhJxeb4.js";import"./index-DX5njF_L.js";import"./index-CXRQQTvz.js";import"./index-eAeoGphK.js";import"./MainLayout-DhfUBQE5.js";import"./index-BejoN4ys.js";import"./Label-D2s108at.js";import"./TextLink-C6ix-fs5.js";import"./FeatureRequestPage-BGwoPR9a.js";import"./LicensePage-CnWl8ZfD.js";import"./ChangelogIcon-BAiVl_WA.js";import{O as S}from"./OpenIcon-13Y0uI_x.js";import"./DocumentationIcon-yn2z7VsL.js";import"./EmailIcon-dva0tRza.js";import"./FaqIcon-BaWssTfl.js";import"./KeyIcon-BDNtxeK1.js";import"./CacheIcon-b9xbkygu.js";import"./HomeIcon-D4Vc7Vwc.js";import"./InfoIcon-CSsPatsX.js";import"./UnderlinedIcon-BPR2RLlr.js";import"./LearningIcon-C7stwO-0.js";import"./ResetIcon-bzoDBMiu.js";import"./UpdatesIcon-Cwcr8uXx.js";import"./SearchIcon-R3aBVnii.js";import"./SettingsIcon-CAvNnO1Z.js";import"./SupportIcon-CrBc5tCW.js";import"./UsersIcon-68xkl4fH.js";import"./WebsiteIcon-B3qg-qUX.js";import"./EyeIcon-DYsqo2bg.js";import"./ActionIcon-Bx2gnZ4l.js";import"./AddIcon-BB8_Qies.js";import"./BackIcon-BNe4XpUC.js";import"./ChangeIcon-DGh3me3k.js";import"./StopIcon-CkP22-xJ.js";import"./DropdownIcon-FcND1IUu.js";import"./ChevronRightIcon-05EJTVMe.js";import"./CloseDropDownIcon-jc-YTG1h.js";import"./DiviDynamicHelperIcon-DWxScsoL.js";import"./DiviCustomFieldHeplerIcon-B9Jmv0qk.js";import"./PACLogo-CTx4ocGK.js";import"./type-Bc9hys3F.js";import"./index-Dq7h7Pqt.js";import"./useOutsideToggle-DHyx2Aac.js";import"./index-i22sonE9.js";import"./index-BtqOQ_CV.js";import"./index-Dibxs_wk.js";const $="_overlay_pmizm_1",J="_modal_pmizm_27",K="_header_pmizm_47",Q="_body_pmizm_69",X="_footer_pmizm_77",Y="_modaltrigger_pmizm_87",m={overlay:$,modal:J,header:K,body:Q,footer:X,modaltrigger:Y},p=i.createContext(void 0),B=({children:o})=>{const[t,r]=i.useState(!1),[l,u]=i.useState(""),x=()=>r(!0),b=()=>{r(!1),u("")};return e.jsx(p.Provider,{value:{isOpen:t,open:x,close:b,selectedTab:l,setSelectedTab:u},children:o})},Z=({children:o})=>{const t=i.useContext(p);if(!t)throw new Error("Modal.Trigger must be used within Modal");return e.jsx("div",{className:m.modaltrigger,onClick:t.open,children:o})},ee=({children:o})=>{const t=i.useContext(p);return!t||!t.isOpen?null:e.jsx("div",{className:m.overlay,onClick:t.close,children:e.jsx("div",{className:m.modal,onClick:r=>r.stopPropagation(),children:o})})},te=({children:o})=>{const t=i.useContext(p);return!t||!t.isOpen?null:e.jsxs(c,{direction:"horizontal",className:`${m.header}`,children:[e.jsx(L,{level:2,color:"var(--pac-upui-white)",children:o}),e.jsx(G,{onClick:t.close,icon:P,color:"var(--pac-upui-white)",size:"xlarge"})," "]})},oe=({id:o,children:t})=>{const r=i.useContext(p);if(!r)throw new Error("Modal.Tab must be used within Modal");return e.jsx(R,{value:o,selected:r.selectedTab,onSelected:()=>r.setSelectedTab(o),children:t})},re=({children:o})=>{const t=i.useContext(p);return!t||!t.isOpen?null:(g.useEffect(()=>{if(t.selectedTab===""){const r=g.Children.toArray(o);for(const l of r)if(g.isValidElement(l)&&l.props.id){t.setSelectedTab(l.props.id);break}}},[o,t.selectedTab,t]),e.jsx(H,{padded:"8px",style:{backgroundColor:"var(--pac-upui-background)"},children:e.jsx(c,{direction:"horizontal",className:m.tabs,children:o})}))},ne=({id:o,children:t})=>{const r=i.useContext(p);return!r||o&&r.selectedTab&&r.selectedTab!==o?null:e.jsx("div",{className:m.body,children:t})},ie=({children:o})=>e.jsx("div",{className:m.footer,children:o}),d=B;d.Trigger=Z;d.Content=ee;d.Header=te;d.Tabs=re;d.Tab=oe;d.Body=ne;d.Footer=ie;const n=d;B.__docgenInfo={description:"",methods:[],displayName:"ModalRoot",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const _t={title:"PAC Universal Plugin UI/Primitive/Modal",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`Modal is a primitive overlay component for dialogs, popups, and modals.

Usage:
\`\`\`tsx
import Modal from "@karobar_solutions/pac-universal-plugin-ui";

<Modal>
  <Modal.Trigger>Open Modal</Modal.Trigger>
  <Modal.Content>
    <Modal.Header>Import & Export Settings</Modal.Header>
    <Modal.Tabs>
      <Modal.Tab id="tab1">Export</Modal.Tab>
      <Modal.Tab id="tab2">Import</Modal.Tab>
    </Modal.Tabs>
    <Modal.Body id="tab1">Export content...</Modal.Body>
    <Modal.Body id="tab2">Import content...</Modal.Body>
    <Modal.Footer>
      <button>Cancel</button>
      <button>Confirm</button>
    </Modal.Footer>
  </Modal.Content>
</Modal>
\`\`\``}}}},C={render:()=>{const[o,t]=i.useState(!0),[r,l]=i.useState(!0),[u,x]=i.useState(!0),[b,F]=i.useState(!0),[D,O]=i.useState(!0),[w,E]=i.useState(!0),[_,z]=i.useState(!0),A=()=>e.jsxs(c,{gap:15,children:[e.jsx(T,{children:"Exporting your Divi Assistant Settings will create a file that can be saved locally and imported into other websites."}),e.jsxs(s,{id:"exportFileName",children:[e.jsx(s.Title,{children:"Export File Name"}),e.jsx(s.Field,{children:e.jsx(U,{})})]}),e.jsxs(s,{id:"exportOptions",children:[e.jsx(s.Title,{children:"Export Options"}),e.jsx(s.Field,{children:e.jsxs(c,{children:[e.jsx(a,{checked:o,onChange:t,label:"Include Divi Assistant Settings"}),e.jsx(a,{checked:r,onChange:l,label:"Include Global Colors"}),e.jsx(a,{checked:u,onChange:x,label:"Include Divi Theme Options"}),e.jsx(a,{checked:b,onChange:F,label:"Include Theme Customizer Settings"}),e.jsx(a,{checked:D,onChange:O,label:"Include Module Presets"}),e.jsx(a,{checked:w,onChange:E,label:"Include Divi Library Layouts"}),e.jsx(a,{checked:_,onChange:z,label:"Include Theme Builder Templates"})]})})]}),e.jsx(h,{leftIcon:q,width:"stretch",children:"Export Divi Assistant Settings"})]}),N=()=>e.jsxs(c,{gap:15,children:[e.jsx(T,{children:"Importing your Divi Assistant Settings will create a file that can be saved locally and imported into other websites."}),e.jsxs(s,{id:"exportFileName",children:[e.jsx(s.Title,{children:"Import File Name"}),e.jsx(s.Description,{children:"Select the file you want to import."}),e.jsx(s.Field,{children:e.jsx(V,{})})]}),e.jsxs(s,{id:"exportOptions",children:[e.jsx(s.Title,{children:"Import Options"}),e.jsx(s.Field,{children:e.jsxs(c,{children:[e.jsx(a,{checked:o,onChange:t,label:"Include Divi Assistant Settings"}),e.jsx(a,{checked:r,onChange:l,label:"Include Global Colors"}),e.jsx(a,{checked:u,onChange:x,label:"Include Divi Theme Options"}),e.jsx(a,{checked:b,onChange:F,label:"Include Theme Customizer Settings"})]})})]}),e.jsx(h,{leftIcon:W,width:"stretch",children:"Import Image"})]});return e.jsxs(n,{children:[e.jsxs(n.Trigger,{children:[" ",e.jsx(h,{rightIcon:S,variant:"primary",children:"Open Modal"})]}),e.jsxs(n.Content,{children:[e.jsx(n.Header,{children:"Import & Export Settings"}),e.jsxs(n.Tabs,{children:[e.jsx(n.Tab,{id:"tab1",children:"Export"}),e.jsx(n.Tab,{id:"tab2",children:"Import"})]}),e.jsx(n.Body,{id:"tab1",children:e.jsx(A,{})}),e.jsx(n.Body,{id:"tab2",children:e.jsx(N,{})})]})]})}},k={render:()=>e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx(h,{rightIcon:S,variant:"secondary",children:"Open Confirmation Modal"})}),e.jsxs(n.Content,{children:[e.jsx(n.Header,{children:"Delete Item"}),e.jsx(n.Body,{id:"confirmation-body",children:e.jsx(T,{children:"Are you sure you want to proceed with this action? This cannot be undone."})}),e.jsx(n.Footer,{children:e.jsxs(c,{direction:"horizontal",gap:10,children:[e.jsx(h,{variant:"tertiary",width:"stretch",children:"Cancel"}),e.jsx(h,{width:"stretch",variant:"secondary",children:"Confirm"})]})})]})]})};var M,j,I;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [checkedDiviAssistant, setCheckedDiviAssistant] = useState(true);
    const [checkedGlobalColors, setCheckedGlobalColors] = useState(true);
    const [checkedThemeOptions, setCheckedThemeOptions] = useState(true);
    const [checkedCustomizer, setCheckedCustomizer] = useState(true);
    const [checkedModulePresets, setCheckedModulePresets] = useState(true);
    const [checkedLibraryLayouts, setCheckedLibraryLayouts] = useState(true);
    const [checkedThemeBuilder, setCheckedThemeBuilder] = useState(true);
    const Tab1 = () => {
      return <Stack gap={15}>\r
          <Text>\r
            Exporting your Divi Assistant Settings will create a file that can\r
            be saved locally and imported into other websites.\r
          </Text>\r
          <FormField id="exportFileName">\r
            <FormField.Title>Export File Name</FormField.Title>\r
            <FormField.Field>\r
              <Input />\r
            </FormField.Field>\r
          </FormField>\r
          <FormField id="exportOptions">\r
            <FormField.Title>Export Options</FormField.Title>\r
            <FormField.Field>\r
              <Stack>\r
                <Checkbox checked={checkedDiviAssistant} onChange={setCheckedDiviAssistant} label="Include Divi Assistant Settings" />\r
                <Checkbox checked={checkedGlobalColors} onChange={setCheckedGlobalColors} label="Include Global Colors" />\r
                <Checkbox checked={checkedThemeOptions} onChange={setCheckedThemeOptions} label="Include Divi Theme Options" />\r
                <Checkbox checked={checkedCustomizer} onChange={setCheckedCustomizer} label="Include Theme Customizer Settings" />\r
                <Checkbox checked={checkedModulePresets} onChange={setCheckedModulePresets} label="Include Module Presets" />\r
                <Checkbox checked={checkedLibraryLayouts} onChange={setCheckedLibraryLayouts} label="Include Divi Library Layouts" />\r
                <Checkbox checked={checkedThemeBuilder} onChange={setCheckedThemeBuilder} label="Include Theme Builder Templates" />\r
              </Stack>\r
            </FormField.Field>\r
          </FormField>\r
          <Button leftIcon={DownloadIcon} width="stretch">\r
            Export Divi Assistant Settings\r
          </Button>\r
        </Stack>;
    };
    const Tab2 = () => {
      return <Stack gap={15}>\r
          <Text>\r
            Importing your Divi Assistant Settings will create a file that can\r
            be saved locally and imported into other websites.\r
          </Text>\r
          <FormField id="exportFileName">\r
            <FormField.Title>Import File Name</FormField.Title>\r
            <FormField.Description>\r
              Select the file you want to import.\r
            </FormField.Description>\r
            <FormField.Field>\r
              <ImagePicker />\r
            </FormField.Field>\r
          </FormField>\r
          <FormField id="exportOptions">\r
            <FormField.Title>Import Options</FormField.Title>\r
            <FormField.Field>\r
              <Stack>\r
                <Checkbox checked={checkedDiviAssistant} onChange={setCheckedDiviAssistant} label="Include Divi Assistant Settings" />\r
                <Checkbox checked={checkedGlobalColors} onChange={setCheckedGlobalColors} label="Include Global Colors" />\r
                <Checkbox checked={checkedThemeOptions} onChange={setCheckedThemeOptions} label="Include Divi Theme Options" />\r
                <Checkbox checked={checkedCustomizer} onChange={setCheckedCustomizer} label="Include Theme Customizer Settings" />\r
              </Stack>\r
            </FormField.Field>\r
          </FormField>\r
          <Button leftIcon={ImportExportIcon} width="stretch">\r
            Import Image\r
          </Button>\r
        </Stack>;
    };
    return <Modal>\r
        <Modal.Trigger>\r
          {" "}\r
          <Button rightIcon={OpenIcon} variant="primary">\r
            Open Modal\r
          </Button>\r
        </Modal.Trigger>\r
        <Modal.Content>\r
          <Modal.Header>Import & Export Settings</Modal.Header>\r
\r
          <Modal.Tabs>\r
            <Modal.Tab id="tab1">Export</Modal.Tab>\r
            <Modal.Tab id="tab2">Import</Modal.Tab>\r
          </Modal.Tabs>\r
\r
          <Modal.Body id="tab1">\r
            <Tab1 />\r
          </Modal.Body>\r
          <Modal.Body id="tab2">\r
            <Tab2 />\r
          </Modal.Body>\r
        </Modal.Content>\r
      </Modal>;
  }
}`,...(I=(j=C.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var y,f,v;k.parameters={...k.parameters,docs:{...(y=k.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Modal>\r
      <Modal.Trigger>\r
        <Button rightIcon={OpenIcon} variant="secondary">\r
          Open Confirmation Modal\r
        </Button>\r
      </Modal.Trigger>\r
\r
      <Modal.Content>\r
        <Modal.Header>Delete Item</Modal.Header>\r
\r
        <Modal.Body id="confirmation-body">\r
          <Text>\r
            Are you sure you want to proceed with this action? This cannot be\r
            undone.\r
          </Text>\r
        </Modal.Body>\r
        <Modal.Footer>\r
          <Stack direction="horizontal" gap={10}>\r
            <Button variant="tertiary" width="stretch">\r
              Cancel\r
            </Button>\r
            <Button width="stretch" variant="secondary">\r
              Confirm\r
            </Button>\r
          </Stack>\r
        </Modal.Footer>\r
      </Modal.Content>\r
    </Modal>
}`,...(v=(f=k.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const zt=["Default","Dialogue"];export{C as Default,k as Dialogue,zt as __namedExportsOrder,_t as default};
