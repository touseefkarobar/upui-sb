import{R as b,j as e}from"./iframe-ByHnCtgm.js";import{R as p}from"./index-C-bn2VmC.js";import{I as r}from"./index-Cma38oJR.js";import{S as C}from"./index-BWqIlW_H.js";import{C as S}from"./index-BhUmYLbq.js";import{F as n}from"./index-Bn-rxkiE.js";import{C as I}from"./index-DhXkYZYh.js";import{D as j}from"./TrashIcon-CMkzXLUA.js";import{F as W}from"./FilledIcon-CIJhOWd6.js";import"./index-DgUpiy1Q.js";import"./CloseIcon-BFNStdVP.js";import"./type-Bc9hys3F.js";import"./AddIcon-CZaXwo5H.js";import"./Label-DviAMUDX.js";import"./Text-DDuLt3Cj.js";const D="\nRepeatableSection renders any form UI multiple times and drives it with an array of values.\n\n- Use `value` + `onChange` for controlled lists, or `defaultValue`/ `initialCount` for uncontrolled usage.\n- Provide `createItem` so newly added rows get meaningful defaults.\n- The child can be static JSX or a render function that receives `{ index, id, value, onValueChange, remove }` to wire inputs and a delete control.\n- Customize the add button through `addButtonLabel`, `addButtonIcon`, `buttonProps`, and limit growth with `maxItems`.\n",B={title:"PAC Universal Plugin UI/Primitive/RepeatableSection",component:p,tags:["autodocs"],parameters:{docs:{description:{component:D}}}},o={render:()=>{const h=[{name:"Small Tablets",minWidth:"600px",maxWidth:"767px",code:"body { font-size: 16px; }"},{name:"Large Tablets",minWidth:"768px",maxWidth:"1023px",code:".container { padding: 32px; }"}],[l,x]=b.useState(h),s=()=>({name:"",minWidth:"",maxWidth:"",code:""});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(p,{addButtonLabel:"Add New Media Query",value:l,onChange:x,createItem:s,maxItems:5,children:({id:a,value:i=s(),onValueChange:d,remove:F})=>{const g=`${a}-name`,v=`${a}-min-width`,y=`${a}-max-width`,f=`${a}-code`;return e.jsx(S,{padded:"10px",rounded:!0,style:{background:"var(--pac-upui-background)"},children:e.jsxs(C,{children:[e.jsxs(n,{id:g,children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[e.jsx(n.Title,{children:"Custom Media Query Name"}),e.jsx(W,{onClick:F,icon:j,size:"xlarge"})]}),e.jsx(n.Description,{children:"Give this custom query an easy-to-recognize label."}),e.jsx(n.Field,{children:e.jsx(r,{value:i.name,onChange:t=>d({...i,name:t.target.value})})})]}),e.jsxs(n,{id:v,children:[e.jsx(n.Title,{children:"Min Width"}),e.jsx(n.Description,{children:"Starting breakpoint (e.g. 768px)."}),e.jsx(n.Field,{children:e.jsx(r,{value:i.minWidth,onChange:t=>d({...i,minWidth:t.target.value})})})]}),e.jsxs(n,{id:y,children:[e.jsx(n.Title,{children:"Max Width"}),e.jsx(n.Description,{children:"Ending breakpoint (e.g. 1023px)."}),e.jsx(n.Field,{children:e.jsx(r,{value:i.maxWidth,onChange:t=>d({...i,maxWidth:t.target.value})})})]}),e.jsxs(n,{id:f,children:[e.jsx(n.Title,{children:"Custom CSS"}),e.jsx(n.Description,{children:"Styles applied while this media query is active."}),e.jsx(n.Field,{children:e.jsx(I,{value:i.code,onChange:t=>d({...i,code:t}),height:300,language:"css"})})]})]})})}}),e.jsx("pre",{style:{margin:0,padding:"16px",background:"rgba(57, 81, 106, 0.12)",borderRadius:"12px",fontSize:"12px"},children:JSON.stringify(l,null,2)})]})},parameters:{docs:{description:{story:"Demonstrates a controlled RepeatableSection that manages an array of media query definitions, including custom defaults, a delete action, and live JSON output of the hydrated data."}}}};var m,c,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const defaultMediaQueries = [{
      name: "Small Tablets",
      minWidth: "600px",
      maxWidth: "767px",
      code: "body { font-size: 16px; }"
    }, {
      name: "Large Tablets",
      minWidth: "768px",
      maxWidth: "1023px",
      code: ".container { padding: 32px; }"
    }];
    const [queries, setQueries] = React.useState(defaultMediaQueries);
    const createMediaQuery = () => ({
      name: "",
      minWidth: "",
      maxWidth: "",
      code: ""
    });
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <RepeatableSection addButtonLabel="Add New Media Query" value={queries} onChange={setQueries} createItem={createMediaQuery} maxItems={5}>
          {({
          id,
          value = createMediaQuery(),
          onValueChange,
          remove
        }) => {
          const nameId = \`\${id}-name\`;
          const minWidthId = \`\${id}-min-width\`;
          const maxWidthId = \`\${id}-max-width\`;
          const codeId = \`\${id}-code\`;
          return <Container padded="10px" rounded style={{
            background: "var(--pac-upui-background)"
          }}>
                <Stack>
                  <FormField id={nameId}>
                    <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%"
                }}>
                      <FormField.Title>Custom Media Query Name</FormField.Title>
                      <FilledIcon onClick={remove} icon={DeleteIcon} size="xlarge" />
                    </div>
                    <FormField.Description>
                      Give this custom query an easy-to-recognize label.
                    </FormField.Description>
                    <FormField.Field>
                      <Input value={value.name} onChange={event => onValueChange({
                    ...value,
                    name: event.target.value
                  })} />
                    </FormField.Field>
                  </FormField>
                  <FormField id={minWidthId}>
                    <FormField.Title>Min Width</FormField.Title>
                    <FormField.Description>
                      Starting breakpoint (e.g. 768px).
                    </FormField.Description>
                    <FormField.Field>
                      <Input value={value.minWidth} onChange={event => onValueChange({
                    ...value,
                    minWidth: event.target.value
                  })} />
                    </FormField.Field>
                  </FormField>
                  <FormField id={maxWidthId}>
                    <FormField.Title>Max Width</FormField.Title>
                    <FormField.Description>
                      Ending breakpoint (e.g. 1023px).
                    </FormField.Description>
                    <FormField.Field>
                      <Input value={value.maxWidth} onChange={event => onValueChange({
                    ...value,
                    maxWidth: event.target.value
                  })} />
                    </FormField.Field>
                  </FormField>
                  <FormField id={codeId}>
                    <FormField.Title>Custom CSS</FormField.Title>
                    <FormField.Description>
                      Styles applied while this media query is active.
                    </FormField.Description>
                    <FormField.Field>
                      <CodeEditor value={value.code} onChange={code => onValueChange({
                    ...value,
                    code
                  })} height={300} language="css" />
                    </FormField.Field>
                  </FormField>
                </Stack>
              </Container>;
        }}
        </RepeatableSection>

        <pre style={{
        margin: 0,
        padding: "16px",
        background: "rgba(57, 81, 106, 0.12)",
        borderRadius: "12px",
        fontSize: "12px"
      }}>
          {JSON.stringify(queries, null, 2)}
        </pre>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a controlled RepeatableSection that manages an array of media query definitions, including custom defaults, a delete action, and live JSON output of the hydrated data."
      }
    }
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const U=["MediaQueriesSection"];export{o as MediaQueriesSection,U as __namedExportsOrder,B as default};
