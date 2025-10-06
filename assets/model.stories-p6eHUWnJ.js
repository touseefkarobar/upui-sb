import{j as e,r as i}from"./iframe-BdSb4ebm.js";import{M as t}from"./index-BbHd01Ne.js";import{S as s}from"./index-CqyDz2mV.js";import{T as l}from"./Text-iV-n9ZSW.js";import{F as o}from"./index-8_7b9uRY.js";import{I as A}from"./index-DoGyi5uE.js";import{C as n}from"./index-DT1PcOiu.js";import{B as r}from"./index-jxSIHZjP.js";import{m as E}from"./DragIcon-BMSDYOpK.js";import{I as L}from"./index-BKJCbNIw.js";import{I as z}from"./ImportExportIcon-qzDeA6kc.js";import"./index-CzBoCf6F.js";import"./OverviewPage-BdLzT_jK.js";import"./index-DRclMTjx.js";import"./index-oEsWBSH9.js";import"./PacAboutPage-BpI4X91i.js";import"./index-yow9qwGW.js";import"./ChangelogPage-DFVhfVrP.js";import"./Heading-BR177-iI.js";import"./FilledIcon-CnE9lIBG.js";import"./index-DKsky1lY.js";import"./index-D0Diw0wC.js";import"./index-BiM2ttF9.js";import"./index-0hJcC3ta.js";import"./index-D4xEymsa.js";import"./index-qpDThYTA.js";import"./index-BUyOAVdP.js";import"./index-CWiM2SZ6.js";import"./index-DOj9xQGX.js";import"./index-CKnBnKJx.js";import"./index-CpZnJW1u.js";import"./index-CFyRo3IA.js";import"./index-C6qpvckZ.js";import"./index-5RLe4E6V.js";import"./index-D4Rdfp4M.js";import"./index-YpJ_JKBQ.js";import"./index-Ddvte-tU.js";import"./index-CZwOX2Lh.js";import"./index-BKQV_RT-.js";import"./MainLayout-Cmraao9P.js";import"./index-BLdHY2cA.js";import"./index-CvZVEFU9.js";import"./index-DGhxLx8p.js";import"./Label-CBoerQAI.js";import"./TextLink-xuZtrDTN.js";import"./FeatureRequestPage-Oz-2gDs_.js";import"./LicensePage-BEsWVc8J.js";import"./ChangelogIcon-CmbtUkUk.js";import"./CloseIcon-DsnXaTTV.js";import{O as j}from"./OpenIcon-DBZbVxJG.js";import"./DocumentationIcon-DFqD06j7.js";import"./EditIcon-B1GyLCVu.js";import"./EmailIcon-P9RfrK_r.js";import"./FaqIcon-CW8Gghci.js";import"./KeyIcon-CBNwu1Td.js";import"./CacheIcon-B4bbzGG-.js";import"./HomeIcon-CtUdoRIJ.js";import"./InfoIcon-A9eL9BpR.js";import"./UnderlinedIcon-D7o03Kfz.js";import"./LearningIcon-CRYSdojK.js";import"./ResetIcon-L3DywAZv.js";import"./UpdatesIcon-CH6MUIlu.js";import"./SearchIcon-CUC_DcMO.js";import"./SettingsIcon-BEqM6xkz.js";import"./SupportIcon-DV_Hu9We.js";import"./UsersIcon-B_fig-mV.js";import"./WebsiteIcon-u13GPJbk.js";import"./EyeIcon-Bn9a_75F.js";import"./ActionIcon-ClYOGC6o.js";import"./AddIcon-CccLA-Ka.js";import"./BackIcon-BoKY5m-e.js";import"./CheckmarkIcon-CMOATlD_.js";import"./DropdownIcon-DIeg15BM.js";import"./StopIcon-VBkuuXUm.js";import"./ChevronRightIcon-aTC6pfoa.js";import"./CloseDropDownIcon-wFF-SStD.js";import"./DiviDynamicHelperIcon-DJSWquIo.js";import"./DiviCustomFieldHeplerIcon-Ch2RmUTR.js";import"./PACLogo-WA-2jrt6.js";import"./type-Bc9hys3F.js";import"./index-Dq7h7Pqt.js";import"./useOutsideToggle-DIREm8rE.js";import"./index-CrGJqcNv.js";import"./index-CNUF2PB-.js";import"./index-DV5lWZup.js";const ut={title:"PAC Universal Plugin UI/Primitive/Modal",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`Modal is a primitive overlay component for dialogs, popups, and modals.

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
\`\`\``}}}},a={render:()=>{const[c,m]=i.useState(!0),[h,p]=i.useState(!0),[u,x]=i.useState(!0),[b,C]=i.useState(!0),[y,S]=i.useState(!0),[v,B]=i.useState(!0),[D,f]=i.useState(!0),O=()=>e.jsxs(s,{gap:15,children:[e.jsx(l,{children:"Exporting your Divi Assistant Settings will create a file that can be saved locally and imported into other websites."}),e.jsxs(o,{id:"exportFileName",children:[e.jsx(o.Title,{children:"Export File Name"}),e.jsx(o.Field,{children:e.jsx(A,{})})]}),e.jsxs(o,{id:"exportOptions",children:[e.jsx(o.Title,{children:"Export Options"}),e.jsx(o.Field,{children:e.jsxs(s,{children:[e.jsx(n,{checked:c,onChange:m,label:"Include Divi Assistant Settings"}),e.jsx(n,{checked:h,onChange:p,label:"Include Global Colors"}),e.jsx(n,{checked:u,onChange:x,label:"Include Divi Theme Options"}),e.jsx(n,{checked:b,onChange:C,label:"Include Theme Customizer Settings"}),e.jsx(n,{checked:y,onChange:S,label:"Include Module Presets"}),e.jsx(n,{checked:v,onChange:B,label:"Include Divi Library Layouts"}),e.jsx(n,{checked:D,onChange:f,label:"Include Theme Builder Templates"})]})})]}),e.jsx(r,{leftIcon:E,width:"stretch",children:"Export Divi Assistant Settings"})]}),w=()=>e.jsxs(s,{gap:15,children:[e.jsx(l,{children:"Importing your Divi Assistant Settings will create a file that can be saved locally and imported into other websites."}),e.jsxs(o,{id:"exportFileName",children:[e.jsx(o.Title,{children:"Import File Name"}),e.jsx(o.Description,{children:"Select the file you want to import."}),e.jsx(o.Field,{children:e.jsx(L,{})})]}),e.jsxs(o,{id:"exportOptions",children:[e.jsx(o.Title,{children:"Import Options"}),e.jsx(o.Field,{children:e.jsxs(s,{children:[e.jsx(n,{checked:c,onChange:m,label:"Include Divi Assistant Settings"}),e.jsx(n,{checked:h,onChange:p,label:"Include Global Colors"}),e.jsx(n,{checked:u,onChange:x,label:"Include Divi Theme Options"}),e.jsx(n,{checked:b,onChange:C,label:"Include Theme Customizer Settings"})]})})]}),e.jsx(r,{leftIcon:z,width:"stretch",children:"Import Image"})]});return e.jsxs(t,{children:[e.jsxs(t.Trigger,{children:[" ",e.jsx(r,{rightIcon:j,variant:"primary",children:"Open Modal"})]}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{children:"Import & Export Settings"}),e.jsxs(t.Tabs,{children:[e.jsx(t.Tab,{id:"tab1",children:"Export"}),e.jsx(t.Tab,{id:"tab2",children:"Import"})]}),e.jsx(t.Body,{id:"tab1",children:e.jsx(O,{})}),e.jsx(t.Body,{id:"tab2",children:e.jsx(w,{})})]})]})}},d={render:()=>e.jsxs(t,{children:[e.jsx(t.Trigger,{children:e.jsx(r,{rightIcon:j,variant:"secondary",children:"Open Confirmation Modal"})}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{children:"Delete Item"}),e.jsx(t.Body,{id:"confirmation-body",children:e.jsx(l,{children:"Are you sure you want to proceed with this action? This cannot be undone."})}),e.jsx(t.Footer,{children:e.jsxs(s,{direction:"horizontal",gap:10,children:[e.jsx(r,{variant:"tertiary",width:"stretch",children:"Cancel"}),e.jsx(r,{width:"stretch",variant:"secondary",children:"Confirm"})]})})]})]})};var k,g,F;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(F=(g=a.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};var T,M,I;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(I=(M=d.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};const xt=["Default","Dialogue"];export{a as Default,d as Dialogue,xt as __namedExportsOrder,ut as default};
