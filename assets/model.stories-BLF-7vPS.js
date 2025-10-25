import{j as e,r as i}from"./iframe-hJOXlEf1.js";import{M as t}from"./index-DgSeVMRQ.js";import{S as s}from"./index-DxH6YT0m.js";import{T as l}from"./Text-CB-KaI9i.js";import{F as o}from"./index-BngdGlnF.js";import{I as A}from"./index-D9Hkgf71.js";import{C as n}from"./index-7QrXTt4f.js";import{B as r}from"./index-S-GTDi5j.js";import{m as E}from"./DragIcon-BIHvuTuT.js";import{I as L}from"./index-c_haI40f.js";import{I as z}from"./ImportExportIcon-BU6CV28e.js";import"./index-Ccp6Ax55.js";import"./OverviewPage-Dqmn5S98.js";import"./index-CAqRnNdd.js";import"./index-DwoGucPK.js";import"./PacAboutPage-C_S-e5dF.js";import"./index-BeoAD99G.js";import"./ChangelogPage-E_BgJRtm.js";import"./Heading-5m4o8EZp.js";import"./FilledIcon-uGfRsv7Y.js";import"./index-CYP_OS0_.js";import"./index-CxJ-NJG0.js";import"./index-qlzFayN4.js";import"./index-CkoITuuS.js";import"./index-_0FgCW7s.js";import"./index-CY_F9jom.js";import"./index-BHIVkyJU.js";import"./index-ClpXcASK.js";import"./index-Cd9TNrih.js";import"./index-Dcti4X3o.js";import"./index-Z7XwOXrT.js";import"./index-CBudCkjy.js";import"./index-Ctlf4lh2.js";import"./index-Bn4CTIhd.js";import"./index-Dos4NtKa.js";import"./index-i3k_2Q6Z.js";import"./index-DfpTAGdN.js";import"./index-CYUWt4qf.js";import"./index-CsasqsIm.js";import"./MainLayout-BLbSZQMu.js";import"./index-C_Pkl5EB.js";import"./index-G_M9YgtY.js";import"./index-CayzsrI3.js";import"./Label-BCS57J3E.js";import"./TextLink-CPvgTHbc.js";import"./FeatureRequestPage-fM0VUlvv.js";import"./LicensePage-DPG-JZxf.js";import"./ChangelogIcon-Df16iki-.js";import"./CloseIcon-OHq8O0rZ.js";import{O as j}from"./OpenIcon-I99aJDXT.js";import"./DocumentationIcon-mdrqUEd5.js";import"./EditIcon-4quApF1U.js";import"./EmailIcon-CEV3fFki.js";import"./FaqIcon-ChhnOPWd.js";import"./KeyIcon-D_hVXaBG.js";import"./CacheIcon-DD8FvyvT.js";import"./HomeIcon-CMnM8Jzq.js";import"./InfoIcon-CUgBZyWP.js";import"./UnderlinedIcon-DrayIxOb.js";import"./LearningIcon-BRH1Mkvf.js";import"./ResetIcon-CJIhpftE.js";import"./UpdatesIcon-UQrDnheI.js";import"./SearchIcon-JIZ8aDcJ.js";import"./SettingsIcon-CWS7gZPI.js";import"./SupportIcon-C6ZcK5Fh.js";import"./UsersIcon-Db81uzUL.js";import"./WebsiteIcon-DUXhPUIu.js";import"./EyeIcon-BRkK_fJQ.js";import"./AddIcon-Bfczf8sa.js";import"./BackIcon-Cji1ZRY6.js";import"./CheckmarkIcon-Ag4HTvyu.js";import"./DropdownIcon-DY3pm7uK.js";import"./StopIcon-B9Da5FZv.js";import"./ChevronRightIcon-DJ9P5sn3.js";import"./CloseDropDownIcon-DrPj6K8c.js";import"./DiviDynamicHelperIcon-CnjANq4M.js";import"./DiviCustomFieldHeplerIcon-DW0AWxYi.js";import"./PACLogo-BFa4Jnbf.js";import"./type-Bc9hys3F.js";import"./index-Dq7h7Pqt.js";import"./useOutsideToggle-DqFHnXN_.js";import"./index-D0epuUDV.js";import"./index-hzvip1LM.js";import"./index-Dc7ZKofM.js";const pt={title:"PAC Universal Plugin UI/Primitive/Modal",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`Modal is a primitive overlay component for dialogs, popups, and modals.

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
}`,...(I=(M=d.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};const ut=["Default","Dialogue"];export{a as Default,d as Dialogue,ut as __namedExportsOrder,pt as default};
