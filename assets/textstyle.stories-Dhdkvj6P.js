import{r as c,j as e}from"./iframe-sA0AJjb6.js";import{T as o}from"./index-CosAbooj.js";import{F as t}from"./index-B_esP2Gx.js";import"./UnderlinedIcon-CbnHPccK.js";import"./type-Bc9hys3F.js";import"./index-DX5JDm-p.js";import"./Label-YVp6h2IK.js";import"./Text-F2YrE36q.js";const F={title:"PAC Universal Plugin UI/Primitive/TextStyle",component:o,parameters:{docs:{description:{component:`The \`TextStyle\` component allows users to toggle various text formatting options such as italic, uppercase, capitalization, underline, and line-through.

**Usage:**
\`\`\`tsx
import TextStyle from "../../components/form/TextStyle";

const [styleState, setStyleState] = useState({
  italic: false,
  uppercase: false,
  capitalize: false,
  underline: false,
  line_through: false,
});

<TextStyle value={styleState} onChange={setStyleState} />
\`\`\``}}}},s={render:()=>{const[l,i]=c.useState({italic:!1,uppercase:!1,capitalize:!1,underline:!1,line_through:!1});return console.log(l),e.jsx(e.Fragment,{children:e.jsxs(t,{id:"text-style",describedBy:"text-style-desc",children:[e.jsx(t.Title,{children:"Text Style"}),e.jsx(t.Description,{children:"Choose the style of text."}),e.jsx(t.Field,{children:e.jsx(o,{value:l,onChange:i})})]})})}};var n,r,a;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const [styleState, setStyleState] = useState({
      italic: false,
      uppercase: false,
      capitalize: false,
      underline: false,
      line_through: false
    });
    console.log(styleState);
    return <>
        <FormField id="text-style" describedBy="text-style-desc">
          <FormField.Title>Text Style</FormField.Title>
          <FormField.Description>
            Choose the style of text.
          </FormField.Description>
          <FormField.Field>
            <TextStyle value={styleState} onChange={setStyleState} />
          </FormField.Field>
        </FormField>
      </>;
  }
}`,...(a=(r=s.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const h=["Default"];export{s as Default,h as __namedExportsOrder,F as default};
