import{r as c,j as s}from"./iframe-PtkeRAzv.js";import{C as i}from"./index-9Gdwl_ou.js";import{T as b}from"./Text-CUxco-rn.js";import{C as F}from"./index-C1-f8PXX.js";import"./index-CTsbhkTO.js";import"./type-Bc9hys3F.js";import"./index-Bn-Ff8-0.js";import"./index-BoAeIr4r.js";import"./useOutsideToggle-BILq6Ehu.js";import"./DropdownIcon-pnLzCBHE.js";import"./SearchIcon-CZgGEvug.js";const L={title:"PAC Universal Plugin UI/Primitive/ColorPicker",component:i,argsTypes:{selectedColor:{description:"Currently selected color",control:{type:"color"}},savedPresets:{description:"Array of saved color presets",control:{type:"array"}},globalPresets:{description:"Object containing global color presets",control:{type:"object"}},setSelectedColor:{description:"Function to update the selected color",action:"colorChanged"}},args:{selectedColor:"",savedPresets:["#E57373","#81C784","#64B5F6","#FFFFFF","#BA68C8","#4DD0E1","#F06292","#AED581"],globalPresets:{"gcid-body-color":{color:"#ec1111",active:"yes"},"gcid-white-color":{color:"#FFFFFF",active:"yes"},"gcid-heading-color":{color:"#666666",active:"yes"}}}},l={render:e=>{const[r,o]=c.useState(e.selectedColor);return c.useEffect(()=>{o(e.selectedColor)},[e.selectedColor]),s.jsx(i,{selectedColor:r,savedPresets:e.savedPresets,globalPresets:e.globalPresets,setSelectedColor:o,popupDirection:"up"})}},t=()=>{const[e,r]=c.useState(""),o=["#E57373","#81C784","#64B5F6","#FFF176","#BA68C8","#4DD0E1","#F06292","#AED581"],a={"gcid-body-color":{color:"#ec1111",active:"yes"},"gcid-heading-color":{color:"#666666",active:"yes"},"gcid-p2ma5h19-9gnc-jkon-ir4t-e18gozu6mzy4":{color:"#1325b1",active:"yes"},"gcid-primary-color":{color:"#1dec14",active:"yes"},"gcid-secondary-color":{color:"#3912e4",active:"yes"},"gcid-vd1qwwe2-nze0-detk-5dr8-26wylben9ad9":{color:"#cd0909",active:"yes"},"gcid-y0m7mbth-vzmq-j566-tb4p-n57ta6dy8frk":{color:"#13d8b2",active:"yes"},"gcid-yynrlox7-gj8a-thep-361m-xbvav668vsep":{color:"#dc6712",active:"yes"}};return s.jsxs("div",{children:[s.jsx(i,{selectedColor:e,savedPresets:o,globalPresets:a,setSelectedColor:r}),s.jsxs(b,{children:["selected Color : ",e]})]})},n={render:()=>{const[e,r]=c.useState("#00f"),[o,a]=c.useState(1);return s.jsx(F,{color:e,setColor:r,preset:[],setOpacity:a,opacity:o,popupDirection:"down"})}};t.__docgenInfo={description:"",methods:[],displayName:"ColorPickerInstance"};var d,p,g;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: any) => {
    const [selectedColor, setSelectedColor] = useState(args.selectedColor);
    useEffect(() => {
      setSelectedColor(args.selectedColor);
    }, [args.selectedColor]);
    return <ColorPicker selectedColor={selectedColor} savedPresets={args.savedPresets} globalPresets={args.globalPresets} setSelectedColor={setSelectedColor} popupDirection="up" />;
  }
}`,...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var C,y,m;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [selectedColor, setSelectedColor] = useState("");
  const savedPresets = ["#E57373",
  // Light red
  "#81C784",
  // Light green
  "#64B5F6",
  // Light blue
  "#FFF176",
  // Light yellow
  "#BA68C8",
  // Light purple
  "#4DD0E1",
  // Light teal
  "#F06292",
  // Light pink
  "#AED581" // Light lime
  ];
  const globalPresets = {
    "gcid-body-color": {
      color: "#ec1111",
      active: "yes"
    },
    "gcid-heading-color": {
      color: "#666666",
      active: "yes"
    },
    "gcid-p2ma5h19-9gnc-jkon-ir4t-e18gozu6mzy4": {
      color: "#1325b1",
      active: "yes"
    },
    "gcid-primary-color": {
      color: "#1dec14",
      active: "yes"
    },
    "gcid-secondary-color": {
      color: "#3912e4",
      active: "yes"
    },
    "gcid-vd1qwwe2-nze0-detk-5dr8-26wylben9ad9": {
      color: "#cd0909",
      active: "yes"
    },
    "gcid-y0m7mbth-vzmq-j566-tb4p-n57ta6dy8frk": {
      color: "#13d8b2",
      active: "yes"
    },
    "gcid-yynrlox7-gj8a-thep-361m-xbvav668vsep": {
      color: "#dc6712",
      active: "yes"
    }
  };
  return <div>
      <ColorPicker selectedColor={selectedColor} savedPresets={savedPresets} globalPresets={globalPresets} setSelectedColor={setSelectedColor} />
      <Text>selected Color : {selectedColor}</Text>
    </div>;
}`,...(m=(y=t.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var u,v,P;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState("#00f");
    const [opacity, setOpacity] = useState(1);
    return <CustomColorPicker color={color} setColor={setColor} preset={[]} setOpacity={setOpacity} opacity={opacity} popupDirection="down" />;
  }
}`,...(P=(v=n.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const B=["Default","ColorPickerInstance","CustomPicker"];export{t as ColorPickerInstance,n as CustomPicker,l as Default,B as __namedExportsOrder,L as default};
