import{r,j as e}from"./iframe-BA8WlzAs.js";import{D as o}from"./index-7IV6uCpi.js";import{B as t}from"./index-Cw3ZA4B6.js";import"./index-i0ItIzNE.js";import"./index-CJRwxCIy.js";import"./CloseIcon-lGJm1uAU.js";import"./type-CgT0EiC8.js";const k={title:"PAC Universal Plugin UI/Primitive/Dialog",component:o,tags:["autodocs"],argTypes:{open:{description:"Whether the dialog is open",control:{type:"boolean"}},onClose:{description:"Callback when the dialog is requested to close",action:"closed"},closeOnOverlayClick:{description:"Whether clicking the overlay closes the dialog",control:{type:"boolean"}},role:{description:"ARIA role for the dialog",control:{type:"select"},options:["dialog","alertdialog"]}},parameters:{docs:{description:{component:"A compound dialog component with Dialog, Dialog.Title, Dialog.Description, and Dialog.Actions sub-components."}}}},s={render:()=>{const[i,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",size:"small",onClick:()=>n(!0),children:"Open Confirmation Dialog"}),e.jsxs(o,{open:i,onClose:()=>n(!1),children:[e.jsx(o.Title,{children:"Confirm Action"}),e.jsx(o.Description,{children:"Are you sure you want to proceed? This action cannot be undone."}),e.jsxs(o.Actions,{children:[e.jsx(t,{variant:"secondary",size:"small",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{variant:"primary",size:"small",onClick:()=>n(!1),children:"Confirm"})]})]})]})}},l={render:()=>{const[i,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"danger",size:"small",onClick:()=>n(!0),children:"Open Alert Dialog"}),e.jsxs(o,{open:i,onClose:()=>n(!1),role:"alertdialog",closeOnOverlayClick:!1,children:[e.jsx(o.Title,{children:"Delete Item"}),e.jsx(o.Description,{children:"This will permanently delete the selected item. This action is irreversible."}),e.jsxs(o.Actions,{children:[e.jsx(t,{variant:"secondary",size:"small",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{variant:"danger",size:"small",onClick:()=>n(!1),children:"Delete"})]})]})]})}},a={render:()=>{const[i,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",size:"small",onClick:()=>n(!0),children:"Open Custom Dialog"}),e.jsxs(o,{open:i,onClose:()=>n(!1),children:[e.jsx(o.Title,{children:"Custom Content"}),e.jsx(o.Description,{children:"This dialog contains custom content below."}),e.jsxs("div",{style:{padding:"16px 0"},children:[e.jsx("label",{htmlFor:"dialog-input",style:{display:"block",marginBottom:"8px",fontWeight:500},children:"Enter your name"}),e.jsx("input",{id:"dialog-input",type:"text",placeholder:"John Doe",style:{width:"100%",padding:"8px 12px",borderRadius:"6px",border:"1px solid #ccc",fontSize:"14px",boxSizing:"border-box"}})]}),e.jsxs(o.Actions,{children:[e.jsx(t,{variant:"secondary",size:"small",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{variant:"primary",size:"small",onClick:()=>n(!1),children:"Submit"})]})]})]})}};var c,p,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="primary" size="small" onClick={() => setOpen(true)}>
          Open Confirmation Dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <Dialog.Title>Confirm Action</Dialog.Title>
          <Dialog.Description>
            Are you sure you want to proceed? This action cannot be undone.
          </Dialog.Description>
          <Dialog.Actions>
            <Button variant="secondary" size="small" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" size="small" onClick={() => setOpen(false)}>
              Confirm
            </Button>
          </Dialog.Actions>
        </Dialog>
      </>;
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="danger" size="small" onClick={() => setOpen(true)}>
          Open Alert Dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} role="alertdialog" closeOnOverlayClick={false}>
          <Dialog.Title>Delete Item</Dialog.Title>
          <Dialog.Description>
            This will permanently delete the selected item. This action is irreversible.
          </Dialog.Description>
          <Dialog.Actions>
            <Button variant="secondary" size="small" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" size="small" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </Dialog.Actions>
        </Dialog>
      </>;
  }
}`,...(g=(u=l.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,C,D;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="secondary" size="small" onClick={() => setOpen(true)}>
          Open Custom Dialog
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <Dialog.Title>Custom Content</Dialog.Title>
          <Dialog.Description>
            This dialog contains custom content below.
          </Dialog.Description>
          <div style={{
          padding: "16px 0"
        }}>
            <label htmlFor="dialog-input" style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: 500
          }}>
              Enter your name
            </label>
            <input id="dialog-input" type="text" placeholder="John Doe" style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
            boxSizing: "border-box"
          }} />
          </div>
          <Dialog.Actions>
            <Button variant="secondary" size="small" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" size="small" onClick={() => setOpen(false)}>
              Submit
            </Button>
          </Dialog.Actions>
        </Dialog>
      </>;
  }
}`,...(D=(C=a.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const z=["Confirmation","Alert","CustomContent"];export{l as Alert,s as Confirmation,a as CustomContent,z as __namedExportsOrder,k as default};
