import{r as i,j as e,R as g}from"./iframe-C_4GIzKJ.js";import{S as c}from"./index-BuuCRCUi.js";import{H as L}from"./Heading-DhS4RopR.js";import{C as P}from"./CloseIcon-C8UZEaBT.js";import{F as G}from"./FilledIcon-BoZD7w7I.js";import{C as H}from"./index-DVYIAmY9.js";import{T as R}from"./index-C5pi6BdE.js";import{T}from"./Text-D975vQw0.js";import{F as s}from"./index-C6YwVNkp.js";import{I as U}from"./index-B_3UFFmA.js";import{C as a}from"./index-Cr0-070h.js";import{B as p}from"./index-cI3hA5az.js";import{n as q}from"./DragIcon-DKi7qt3P.js";import{I as V}from"./index-SJskFLZQ.js";import{I as W}from"./ImportExportIcon-B8_Nwqsz.js";import"./index-DBC0mcpu.js";import"./OverviewPage-i99XE39H.js";import"./index-ChHGzt7X.js";import"./index-BfpqRizh.js";import"./PacAboutPage-Br38us9u.js";import"./index-bTQIbJlD.js";import"./ChangelogPage-CG98fZn_.js";import"./index-BAZGeEXi.js";import"./index-6SHza0Wx.js";import"./index-veLwp8AL.js";import"./index-DSLudp6s.js";import"./index-CGbmHSb8.js";import"./index-gNzW-Tnl.js";import"./index-rq_KOg1a.js";import"./index-DfhigBlA.js";import"./index-DK31MCyK.js";import"./index-DedXAn0y.js";import"./index-Xn_FPEZM.js";import"./index-CPbor_uM.js";import"./index-CiFKsWEc.js";import"./index-7R1ALbMd.js";import"./index-ClyIWZlh.js";import"./index-D1zTOhzv.js";import"./index-UQ7toWC8.js";import"./index-C4U2DqR7.js";import"./MainLayout-BehCQkqN.js";import"./index-BmZJ4xSe.js";import"./index-Bvsn11lJ.js";import"./Label-D2uBnvJE.js";import"./TextLink-DzJW5bo0.js";import"./FeatureRequestPage-ClO-tL5Q.js";import"./LicensePage-CVuBJJ-5.js";import"./ChangelogIcon-BeVvxK_8.js";import{O as S}from"./OpenIcon-DFMqWSpY.js";import"./DocumentationIcon-DyF8t8jK.js";import"./EmailIcon-BKVmQ3Bw.js";import"./FaqIcon-Cq1VWPA5.js";import"./KeyIcon-DbDX3crF.js";import"./CacheIcon-BINaewKY.js";import"./HomeIcon-LECGAmVB.js";import"./InfoIcon-D-bdmr4c.js";import"./UnderlinedIcon-C1ZvdT9t.js";import"./LearningIcon-BKBtgZvz.js";import"./ResetIcon-C9dQ_yek.js";import"./UpdatesIcon-CzFsQHas.js";import"./SearchIcon-rTmhpz2t.js";import"./SettingsIcon-D0eKSUa2.js";import"./SupportIcon-DpQF_maR.js";import"./UsersIcon-DmKpwgVN.js";import"./WebsiteIcon-DGc1d1Vd.js";import"./EyeIcon-DNyugeZs.js";import"./ActionIcon-BXjT3KAZ.js";import"./AddIcon-FQ8yeUd2.js";import"./BackIcon-C3awhwq8.js";import"./CheckmarkIcon-hhWro0gx.js";import"./DropdownIcon-BIy6e6DS.js";import"./StopIcon-f4j6xdYs.js";import"./ChevronRightIcon-DO4amiM1.js";import"./CloseDropDownIcon-Ce4Qi2j_.js";import"./DiviDynamicHelperIcon-CgTA0NY0.js";import"./DiviCustomFieldHeplerIcon-DdgrNgyN.js";import"./PACLogo-CdrZA4va.js";import"./type-Bc9hys3F.js";import"./index-Dq7h7Pqt.js";import"./useOutsideToggle-Cn3-BZ1E.js";import"./index-COvJscgd.js";import"./index-zNVgYdSC.js";import"./index-BoGxgBsl.js";const $="_overlay_1rruu_1",J="_modal_1rruu_14",K="_header_1rruu_24",Q="_body_1rruu_35",X="_footer_1rruu_39",Y="_modaltrigger_1rruu_44",m={overlay:$,modal:J,header:K,body:Q,footer:X,modaltrigger:Y},h=i.createContext(void 0),B=({children:o})=>{const[t,n]=i.useState(!1),[l,u]=i.useState(""),x=()=>n(!0),b=()=>{n(!1),u("")};return e.jsx(h.Provider,{value:{isOpen:t,open:x,close:b,selectedTab:l,setSelectedTab:u},children:o})},Z=({children:o})=>{const t=i.useContext(h);if(!t)throw new Error("Modal.Trigger must be used within Modal");return e.jsx("div",{className:m.modaltrigger,onClick:t.open,children:o})},ee=({children:o})=>{const t=i.useContext(h);return!t||!t.isOpen?null:e.jsx("div",{className:m.overlay,onClick:t.close,children:e.jsx("div",{className:m.modal,onClick:n=>n.stopPropagation(),children:o})})},te=({children:o})=>{const t=i.useContext(h);return!t||!t.isOpen?null:e.jsxs(c,{direction:"horizontal",className:`${m.header}`,children:[e.jsx(L,{level:2,color:"var(--pac-upui-white)",children:o}),e.jsx(G,{onClick:t.close,icon:P,color:"var(--pac-upui-white)",size:"xlarge"})," "]})},oe=({id:o,children:t})=>{const n=i.useContext(h);if(!n)throw new Error("Modal.Tab must be used within Modal");return e.jsx(R,{value:o,selected:n.selectedTab,onSelected:()=>n.setSelectedTab(o),children:t})},ne=({children:o})=>{const t=i.useContext(h);return!t||!t.isOpen?null:(g.useEffect(()=>{if(t.selectedTab===""){const n=g.Children.toArray(o);for(const l of n)if(g.isValidElement(l)&&l.props.id){t.setSelectedTab(l.props.id);break}}},[o,t.selectedTab,t]),e.jsx(H,{padded:"8px",style:{backgroundColor:"var(--pac-upui-background)"},children:e.jsx(c,{direction:"horizontal",className:m.tabs,children:o})}))},re=({id:o,children:t})=>{const n=i.useContext(h);return!n||o&&n.selectedTab&&n.selectedTab!==o?null:e.jsx("div",{className:m.body,children:t})},ie=({children:o})=>e.jsx("div",{className:m.footer,children:o}),d=B;d.Trigger=Z;d.Content=ee;d.Header=te;d.Tabs=ne;d.Tab=oe;d.Body=re;d.Footer=ie;const r=d;B.__docgenInfo={description:"",methods:[],displayName:"ModalRoot",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const At={title:"PAC Universal Plugin UI/Primitive/Modal",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`Modal is a primitive overlay component for dialogs, popups, and modals.

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
