import{r as i,j as e,R as g}from"./iframe-VhK1vUhF.js";import{S as c}from"./index-DiaVN06I.js";import{H as L}from"./Heading-DmygGO_G.js";import{C as P}from"./CloseIcon-BV84I3jt.js";import{F as G}from"./FilledIcon-CY_nFRtE.js";import{C as H}from"./index-DZ_SwHxl.js";import{T as R}from"./index-CSQ9oOCo.js";import{T}from"./Text-CvNoFQvJ.js";import{F as s}from"./index-DSgwr9jR.js";import{I as U}from"./index-DmHENXWT.js";import{C as a}from"./index-DQiSgTTS.js";import{B as p}from"./index-Df0hlqYV.js";import{n as q}from"./DragIcon-CYc8gJzQ.js";import{I as V}from"./index-AfKjHV15.js";import{I as W}from"./ImportExportIcon-DFP9w2BC.js";import"./index-DlpCId4m.js";import"./OverviewPage-CtEkcc5Z.js";import"./index-DMVMbZfE.js";import"./index-C4E3FMSL.js";import"./PacAboutPage-D451-85t.js";import"./index-C6ri2Dvj.js";import"./ChangelogPage-CpMvicLG.js";import"./index-Bml0NisC.js";import"./index-DHfLwis2.js";import"./index-CND4ejfF.js";import"./index-BpZisCMl.js";import"./index-DBvgbwQK.js";import"./index-DxvsdBH2.js";import"./index-D1xlMluf.js";import"./index-BVSVWfaS.js";import"./index-B8cU9e6Y.js";import"./index-ehkaWy7X.js";import"./index-BihzrkPJ.js";import"./index-DOGl4paF.js";import"./index-CA5eO-be.js";import"./index-DllenFqr.js";import"./index-B0_TMtXR.js";import"./index-D-AhCYvp.js";import"./index-CeUc61ck.js";import"./index-YukDXEoj.js";import"./MainLayout-Ch3bzAiD.js";import"./index-E93G_LMo.js";import"./index-VbchCynY.js";import"./Label-B-fJuQi9.js";import"./TextLink-BFM9apZv.js";import"./FeatureRequestPage-fcx24QMc.js";import"./LicensePage-BZ1Ydto_.js";import"./ChangelogIcon-SpUk4dR1.js";import{O as S}from"./OpenIcon-C0UI6Zjk.js";import"./DocumentationIcon-B3wuEntM.js";import"./EmailIcon-DlZEJuwU.js";import"./FaqIcon-oQnWk5JI.js";import"./KeyIcon-4IYwgKqv.js";import"./CacheIcon-CpsnBn-k.js";import"./HomeIcon-DYFyCnLX.js";import"./InfoIcon-DC6V7YDC.js";import"./UnderlinedIcon-CMK2JS4X.js";import"./LearningIcon-tUQvGGtY.js";import"./ResetIcon-GJtNnUrm.js";import"./UpdatesIcon-hFsrzWtA.js";import"./SearchIcon-CQ825agl.js";import"./SettingsIcon-D1kgxnDJ.js";import"./SupportIcon-BtvjZzyy.js";import"./UsersIcon-CMBxDTEo.js";import"./WebsiteIcon-CtmXGhgo.js";import"./EyeIcon-BKUUMViO.js";import"./ActionIcon-BhQizxpV.js";import"./AddIcon-BsEOKTsX.js";import"./BackIcon-BvhtZRXK.js";import"./CheckmarkIcon-B-d7O1C2.js";import"./DropdownIcon-wIewE-L-.js";import"./StopIcon-DO_1BMCJ.js";import"./ChevronRightIcon-CCjzde0b.js";import"./CloseDropDownIcon-Dryfh7cQ.js";import"./DiviDynamicHelperIcon-BiexwVj8.js";import"./DiviCustomFieldHeplerIcon-CThTZD9u.js";import"./PACLogo-DoynWmMK.js";import"./type-Bc9hys3F.js";import"./index-Dq7h7Pqt.js";import"./useOutsideToggle-BYctrP_N.js";import"./index-C3KF_pxN.js";import"./index-ClP7zx4q.js";import"./index-D66Ice2b.js";const $="_overlay_1rruu_1",J="_modal_1rruu_14",K="_header_1rruu_24",Q="_body_1rruu_35",X="_footer_1rruu_39",Y="_modaltrigger_1rruu_44",m={overlay:$,modal:J,header:K,body:Q,footer:X,modaltrigger:Y},h=i.createContext(void 0),B=({children:o})=>{const[t,n]=i.useState(!1),[l,u]=i.useState(""),x=()=>n(!0),b=()=>{n(!1),u("")};return e.jsx(h.Provider,{value:{isOpen:t,open:x,close:b,selectedTab:l,setSelectedTab:u},children:o})},Z=({children:o})=>{const t=i.useContext(h);if(!t)throw new Error("Modal.Trigger must be used within Modal");return e.jsx("div",{className:m.modaltrigger,onClick:t.open,children:o})},ee=({children:o})=>{const t=i.useContext(h);return!t||!t.isOpen?null:e.jsx("div",{className:m.overlay,onClick:t.close,children:e.jsx("div",{className:m.modal,onClick:n=>n.stopPropagation(),children:o})})},te=({children:o})=>{const t=i.useContext(h);return!t||!t.isOpen?null:e.jsxs(c,{direction:"horizontal",className:`${m.header}`,children:[e.jsx(L,{level:2,color:"var(--pac-upui-white)",children:o}),e.jsx(G,{onClick:t.close,icon:P,color:"var(--pac-upui-white)",size:"xlarge"})," "]})},oe=({id:o,children:t})=>{const n=i.useContext(h);if(!n)throw new Error("Modal.Tab must be used within Modal");return e.jsx(R,{value:o,selected:n.selectedTab,onSelected:()=>n.setSelectedTab(o),children:t})},ne=({children:o})=>{const t=i.useContext(h);return!t||!t.isOpen?null:(g.useEffect(()=>{if(t.selectedTab===""){const n=g.Children.toArray(o);for(const l of n)if(g.isValidElement(l)&&l.props.id){t.setSelectedTab(l.props.id);break}}},[o,t.selectedTab,t]),e.jsx(H,{padded:"8px",style:{backgroundColor:"var(--pac-upui-background)"},children:e.jsx(c,{direction:"horizontal",className:m.tabs,children:o})}))},re=({id:o,children:t})=>{const n=i.useContext(h);return!n||o&&n.selectedTab&&n.selectedTab!==o?null:e.jsx("div",{className:m.body,children:t})},ie=({children:o})=>e.jsx("div",{className:m.footer,children:o}),d=B;d.Trigger=Z;d.Content=ee;d.Header=te;d.Tabs=ne;d.Tab=oe;d.Body=re;d.Footer=ie;const r=d;B.__docgenInfo={description:"",methods:[],displayName:"ModalRoot",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const At={title:"PAC Universal Plugin UI/Primitive/Modal",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`Modal is a primitive overlay component for dialogs, popups, and modals.

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
