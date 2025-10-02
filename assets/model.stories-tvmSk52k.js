import{r as i,j as e,R as g}from"./iframe-C2PwrmL6.js";import{S as c}from"./index-CgK9kCzS.js";import{H as L}from"./Heading-DJkxV2zF.js";import{C as P}from"./CloseIcon-FHohtTuD.js";import{F as G}from"./FilledIcon-B7nqRu8O.js";import{C as H}from"./index-CoiVzHTp.js";import{T as R}from"./index-DjXf72qd.js";import{T}from"./Text-dEsSjqR-.js";import{F as s}from"./index-CcNj-zUh.js";import{I as U}from"./index-DI0qc9ke.js";import{C as a}from"./index-CU8TNp95.js";import{B as p}from"./index-Bc-FF2w7.js";import{n as q}from"./DragIcon-eqR22_LV.js";import{I as V}from"./index-CwT8_ZZq.js";import{I as W}from"./ImportExportIcon-ChocjGbK.js";import"./index-BJj2SACO.js";import"./OverviewPage-pZKbJ-S0.js";import"./index-Bg1TVN8m.js";import"./index-DB3HLdfd.js";import"./PacAboutPage-DH0h9WqZ.js";import"./index-5sQFjt8S.js";import"./ChangelogPage-B7vNOY-X.js";import"./index-DosD1fEm.js";import"./index-Cre6-kVm.js";import"./index-C9jUuqGu.js";import"./index-BPe2GEfz.js";import"./index-Z_SWeCHr.js";import"./index-Dd6rTR2B.js";import"./index-BQHbfl7W.js";import"./index-DsXgJwDw.js";import"./index-DL2AblaG.js";import"./index-CvihvwEn.js";import"./index-D5YWnPpz.js";import"./index-9l6spWnD.js";import"./index-CnOHBjIY.js";import"./index-CXCCQMfv.js";import"./index-B5TXEQ_f.js";import"./index-tgiyAaCb.js";import"./index-CA5eUx9r.js";import"./index-DWQxv3Xx.js";import"./MainLayout-JhilWUAU.js";import"./index-B3szdh3y.js";import"./index-D13DDbK8.js";import"./Label-Cnumd8we.js";import"./TextLink-kKDc-8PS.js";import"./FeatureRequestPage-BJswboZN.js";import"./LicensePage-D2Na_3kk.js";import"./ChangelogIcon-DbzJ496j.js";import{O as S}from"./OpenIcon-BEwyKNXm.js";import"./DocumentationIcon-B3rO2HnV.js";import"./EmailIcon-C7vixahF.js";import"./FaqIcon-4yjGLR3x.js";import"./KeyIcon-CWHBBWZx.js";import"./CacheIcon-D8N9zUwb.js";import"./HomeIcon-CRZSGvCY.js";import"./InfoIcon-edncdzfI.js";import"./UnderlinedIcon-CkiamtDh.js";import"./LearningIcon-DK62ppIZ.js";import"./ResetIcon-dGAiy3KL.js";import"./UpdatesIcon-Dgnkvome.js";import"./SearchIcon-u3bBArvV.js";import"./SettingsIcon-DYC1kXYG.js";import"./SupportIcon-DvRcx2Xl.js";import"./UsersIcon-BFV0PEqJ.js";import"./WebsiteIcon-D8s2RgNE.js";import"./EyeIcon-BCVGJT-W.js";import"./ActionIcon-CIcgETdq.js";import"./AddIcon-CZ_yuUDv.js";import"./BackIcon-RBujjxl_.js";import"./CheckmarkIcon-COeirYDM.js";import"./DropdownIcon-phYjjWkm.js";import"./StopIcon-Bq65FFQf.js";import"./ChevronRightIcon-DK-oHTqW.js";import"./CloseDropDownIcon-D4IgT5jd.js";import"./DiviDynamicHelperIcon-CbaJaq_c.js";import"./DiviCustomFieldHeplerIcon-Bm74Stno.js";import"./PACLogo-DZk0ngTw.js";import"./type-Bc9hys3F.js";import"./index-Dq7h7Pqt.js";import"./useOutsideToggle-BvYW-YFu.js";import"./index-Bt0B2DQr.js";import"./index-wy69LEAK.js";import"./index-CJcOA0-L.js";const $="_overlay_1rruu_1",J="_modal_1rruu_14",K="_header_1rruu_24",Q="_body_1rruu_35",X="_footer_1rruu_39",Y="_modaltrigger_1rruu_44",m={overlay:$,modal:J,header:K,body:Q,footer:X,modaltrigger:Y},h=i.createContext(void 0),B=({children:o})=>{const[t,n]=i.useState(!1),[l,u]=i.useState(""),x=()=>n(!0),b=()=>{n(!1),u("")};return e.jsx(h.Provider,{value:{isOpen:t,open:x,close:b,selectedTab:l,setSelectedTab:u},children:o})},Z=({children:o})=>{const t=i.useContext(h);if(!t)throw new Error("Modal.Trigger must be used within Modal");return e.jsx("div",{className:m.modaltrigger,onClick:t.open,children:o})},ee=({children:o})=>{const t=i.useContext(h);return!t||!t.isOpen?null:e.jsx("div",{className:m.overlay,onClick:t.close,children:e.jsx("div",{className:m.modal,onClick:n=>n.stopPropagation(),children:o})})},te=({children:o})=>{const t=i.useContext(h);return!t||!t.isOpen?null:e.jsxs(c,{direction:"horizontal",className:`${m.header}`,children:[e.jsx(L,{level:2,color:"var(--pac-upui-white)",children:o}),e.jsx(G,{onClick:t.close,icon:P,color:"var(--pac-upui-white)",size:"xlarge"})," "]})},oe=({id:o,children:t})=>{const n=i.useContext(h);if(!n)throw new Error("Modal.Tab must be used within Modal");return e.jsx(R,{value:o,selected:n.selectedTab,onSelected:()=>n.setSelectedTab(o),children:t})},ne=({children:o})=>{const t=i.useContext(h);return!t||!t.isOpen?null:(g.useEffect(()=>{if(t.selectedTab===""){const n=g.Children.toArray(o);for(const l of n)if(g.isValidElement(l)&&l.props.id){t.setSelectedTab(l.props.id);break}}},[o,t.selectedTab,t]),e.jsx(H,{padded:"8px",style:{backgroundColor:"var(--pac-upui-background)"},children:e.jsx(c,{direction:"horizontal",className:m.tabs,children:o})}))},re=({id:o,children:t})=>{const n=i.useContext(h);return!n||o&&n.selectedTab&&n.selectedTab!==o?null:e.jsx("div",{className:m.body,children:t})},ie=({children:o})=>e.jsx("div",{className:m.footer,children:o}),d=B;d.Trigger=Z;d.Content=ee;d.Header=te;d.Tabs=ne;d.Tab=oe;d.Body=re;d.Footer=ie;const r=d;B.__docgenInfo={description:"",methods:[],displayName:"ModalRoot",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const At={title:"PAC Universal Plugin UI/Primitive/Modal",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`Modal is a primitive overlay component for dialogs, popups, and modals.

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
\`\`\``}}}},C={render:()=>{const[o,t]=i.useState(!0),[n,l]=i.useState(!0),[u,x]=i.useState(!0),[b,F]=i.useState(!0),[D,O]=i.useState(!0),[w,E]=i.useState(!0),[_,A]=i.useState(!0),z=()=>e.jsxs(c,{gap:15,children:[e.jsx(T,{children:"Exporting your Divi Assistant Settings will create a file that can be saved locally and imported into other websites."}),e.jsxs(s,{id:"exportFileName",children:[e.jsx(s.Title,{children:"Export File Name"}),e.jsx(s.Field,{children:e.jsx(U,{})})]}),e.jsxs(s,{id:"exportOptions",children:[e.jsx(s.Title,{children:"Export Options"}),e.jsx(s.Field,{children:e.jsxs(c,{children:[e.jsx(a,{checked:o,onChange:t,label:"Include Divi Assistant Settings"}),e.jsx(a,{checked:n,onChange:l,label:"Include Global Colors"}),e.jsx(a,{checked:u,onChange:x,label:"Include Divi Theme Options"}),e.jsx(a,{checked:b,onChange:F,label:"Include Theme Customizer Settings"}),e.jsx(a,{checked:D,onChange:O,label:"Include Module Presets"}),e.jsx(a,{checked:w,onChange:E,label:"Include Divi Library Layouts"}),e.jsx(a,{checked:_,onChange:A,label:"Include Theme Builder Templates"})]})})]}),e.jsx(p,{leftIcon:q,width:"stretch",children:"Export Divi Assistant Settings"})]}),N=()=>e.jsxs(c,{gap:15,children:[e.jsx(T,{children:"Importing your Divi Assistant Settings will create a file that can be saved locally and imported into other websites."}),e.jsxs(s,{id:"exportFileName",children:[e.jsx(s.Title,{children:"Import File Name"}),e.jsx(s.Description,{children:"Select the file you want to import."}),e.jsx(s.Field,{children:e.jsx(V,{})})]}),e.jsxs(s,{id:"exportOptions",children:[e.jsx(s.Title,{children:"Import Options"}),e.jsx(s.Field,{children:e.jsxs(c,{children:[e.jsx(a,{checked:o,onChange:t,label:"Include Divi Assistant Settings"}),e.jsx(a,{checked:n,onChange:l,label:"Include Global Colors"}),e.jsx(a,{checked:u,onChange:x,label:"Include Divi Theme Options"}),e.jsx(a,{checked:b,onChange:F,label:"Include Theme Customizer Settings"})]})})]}),e.jsx(p,{leftIcon:W,width:"stretch",children:"Import Image"})]});return e.jsxs(r,{children:[e.jsxs(r.Trigger,{children:[" ",e.jsx(p,{rightIcon:S,variant:"primary",children:"Open Modal"})]}),e.jsxs(r.Content,{children:[e.jsx(r.Header,{children:"Import & Export Settings"}),e.jsxs(r.Tabs,{children:[e.jsx(r.Tab,{id:"tab1",children:"Export"}),e.jsx(r.Tab,{id:"tab2",children:"Import"})]}),e.jsx(r.Body,{id:"tab1",children:e.jsx(z,{})}),e.jsx(r.Body,{id:"tab2",children:e.jsx(N,{})})]})]})}},k={render:()=>e.jsxs(r,{children:[e.jsx(r.Trigger,{children:e.jsx(p,{rightIcon:S,variant:"secondary",children:"Open Confirmation Modal"})}),e.jsxs(r.Content,{children:[e.jsx(r.Header,{children:"Delete Item"}),e.jsx(r.Body,{id:"confirmation-body",children:e.jsx(T,{children:"Are you sure you want to proceed with this action? This cannot be undone."})}),e.jsx(r.Footer,{children:e.jsxs(c,{direction:"horizontal",gap:10,children:[e.jsx(p,{variant:"tertiary",width:"stretch",children:"Cancel"}),e.jsx(p,{width:"stretch",variant:"secondary",children:"Confirm"})]})})]})]})};var M,j,I;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [checkedDiviAssistant, setCheckedDiviAssistant] = useState(true);
    const [checkedGlobalColors, setCheckedGlobalColors] = useState(true);
    const [checkedThemeOptions, setCheckedThemeOptions] = useState(true);
    const [checkedCustomizer, setCheckedCustomizer] = useState(true);
    const [checkedModulePresets, setCheckedModulePresets] = useState(true);
    const [checkedLibraryLayouts, setCheckedLibraryLayouts] = useState(true);
    const [checkedThemeBuilder, setCheckedThemeBuilder] = useState(true);
    const Tab1 = () => {
      return <Stack gap={15}>
          <Text>
            Exporting your Divi Assistant Settings will create a file that can
            be saved locally and imported into other websites.
          </Text>
          <FormField id="exportFileName">
            <FormField.Title>Export File Name</FormField.Title>
            <FormField.Field>
              <Input />
            </FormField.Field>
          </FormField>
          <FormField id="exportOptions">
            <FormField.Title>Export Options</FormField.Title>
            <FormField.Field>
              <Stack>
                <Checkbox checked={checkedDiviAssistant} onChange={setCheckedDiviAssistant} label="Include Divi Assistant Settings" />
                <Checkbox checked={checkedGlobalColors} onChange={setCheckedGlobalColors} label="Include Global Colors" />
                <Checkbox checked={checkedThemeOptions} onChange={setCheckedThemeOptions} label="Include Divi Theme Options" />
                <Checkbox checked={checkedCustomizer} onChange={setCheckedCustomizer} label="Include Theme Customizer Settings" />
                <Checkbox checked={checkedModulePresets} onChange={setCheckedModulePresets} label="Include Module Presets" />
                <Checkbox checked={checkedLibraryLayouts} onChange={setCheckedLibraryLayouts} label="Include Divi Library Layouts" />
                <Checkbox checked={checkedThemeBuilder} onChange={setCheckedThemeBuilder} label="Include Theme Builder Templates" />
              </Stack>
            </FormField.Field>
          </FormField>
          <Button leftIcon={DownloadIcon} width="stretch">
            Export Divi Assistant Settings
          </Button>
        </Stack>;
    };
    const Tab2 = () => {
      return <Stack gap={15}>
          <Text>
            Importing your Divi Assistant Settings will create a file that can
            be saved locally and imported into other websites.
          </Text>
          <FormField id="exportFileName">
            <FormField.Title>Import File Name</FormField.Title>
            <FormField.Description>
              Select the file you want to import.
            </FormField.Description>
            <FormField.Field>
              <ImagePicker />
            </FormField.Field>
          </FormField>
          <FormField id="exportOptions">
            <FormField.Title>Import Options</FormField.Title>
            <FormField.Field>
              <Stack>
                <Checkbox checked={checkedDiviAssistant} onChange={setCheckedDiviAssistant} label="Include Divi Assistant Settings" />
                <Checkbox checked={checkedGlobalColors} onChange={setCheckedGlobalColors} label="Include Global Colors" />
                <Checkbox checked={checkedThemeOptions} onChange={setCheckedThemeOptions} label="Include Divi Theme Options" />
                <Checkbox checked={checkedCustomizer} onChange={setCheckedCustomizer} label="Include Theme Customizer Settings" />
              </Stack>
            </FormField.Field>
          </FormField>
          <Button leftIcon={ImportExportIcon} width="stretch">
            Import Image
          </Button>
        </Stack>;
    };
    return <Modal>
        <Modal.Trigger>
          {" "}
          <Button rightIcon={OpenIcon} variant="primary">
            Open Modal
          </Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header>Import & Export Settings</Modal.Header>

          <Modal.Tabs>
            <Modal.Tab id="tab1">Export</Modal.Tab>
            <Modal.Tab id="tab2">Import</Modal.Tab>
          </Modal.Tabs>

          <Modal.Body id="tab1">
            <Tab1 />
          </Modal.Body>
          <Modal.Body id="tab2">
            <Tab2 />
          </Modal.Body>
        </Modal.Content>
      </Modal>;
  }
}`,...(I=(j=C.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var y,f,v;k.parameters={...k.parameters,docs:{...(y=k.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Modal>
      <Modal.Trigger>
        <Button rightIcon={OpenIcon} variant="secondary">
          Open Confirmation Modal
        </Button>
      </Modal.Trigger>

      <Modal.Content>
        <Modal.Header>Delete Item</Modal.Header>

        <Modal.Body id="confirmation-body">
          <Text>
            Are you sure you want to proceed with this action? This cannot be
            undone.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Stack direction="horizontal" gap={10}>
            <Button variant="tertiary" width="stretch">
              Cancel
            </Button>
            <Button width="stretch" variant="secondary">
              Confirm
            </Button>
          </Stack>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
}`,...(v=(f=k.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const zt=["Default","Dialogue"];export{C as Default,k as Dialogue,zt as __namedExportsOrder,At as default};
