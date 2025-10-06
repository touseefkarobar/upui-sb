import{r as l,j as s}from"./iframe-TCBjmSRU.js";import{C as n}from"./index-CJc3Ntru.js";import{T as v}from"./Text-CyuY3tiK.js";import"./index-Rab1y9Dn.js";import"./type-Bc9hys3F.js";import"./index-CfbNJEVo.js";import"./index-B5-nE774.js";import"./index-C8lGknNm.js";import"./useOutsideToggle-BaaKzY0L.js";import"./DropdownIcon-CXUaRtyC.js";import"./SearchIcon-DBhAOUEo.js";const E={title:"PAC Universal Plugin UI/Primitive/ColorPicker",component:n,argsTypes:{selectedColor:{description:"Currently selected color",control:{type:"color"}},savedPresets:{description:"Array of saved color presets",control:{type:"array"}},globalPresets:{description:"Object containing global color presets",control:{type:"object"}},setSelectedColor:{description:"Function to update the selected color",action:"colorChanged"}},args:{selectedColor:"",savedPresets:["#E57373","#81C784","#64B5F6","#FFFFFF","#BA68C8","#4DD0E1","#F06292","#AED581"],globalPresets:{"gcid-body-color":{color:"#ec1111",active:"yes"},"gcid-white-color":{color:"#FFFFFF",active:"yes"},"gcid-heading-color":{color:"#666666",active:"yes"}}}},t={render:e=>{const[c,r]=l.useState(e.selectedColor);return l.useEffect(()=>{r(e.selectedColor)},[e.selectedColor]),s.jsx(n,{selectedColor:c,savedPresets:e.savedPresets,globalPresets:e.globalPresets,setSelectedColor:r,popupDirection:"up"})}},o=()=>{const[e,c]=l.useState(""),r=["#E57373","#81C784","#64B5F6","#FFF176","#BA68C8","#4DD0E1","#F06292","#AED581"],C={"gcid-body-color":{color:"#ec1111",active:"yes"},"gcid-heading-color":{color:"#666666",active:"yes"},"gcid-p2ma5h19-9gnc-jkon-ir4t-e18gozu6mzy4":{color:"#1325b1",active:"yes"},"gcid-primary-color":{color:"#1dec14",active:"yes"},"gcid-secondary-color":{color:"#3912e4",active:"yes"},"gcid-vd1qwwe2-nze0-detk-5dr8-26wylben9ad9":{color:"#cd0909",active:"yes"},"gcid-y0m7mbth-vzmq-j566-tb4p-n57ta6dy8frk":{color:"#13d8b2",active:"yes"},"gcid-yynrlox7-gj8a-thep-361m-xbvav668vsep":{color:"#dc6712",active:"yes"}};return s.jsxs("div",{children:[s.jsx(n,{selectedColor:e,savedPresets:r,globalPresets:C,setSelectedColor:c}),s.jsxs(v,{children:["selected Color : ",e]})]})};o.__docgenInfo={description:"",methods:[],displayName:"ColorPickerInstance"};var d,i,a;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: any) => {
    const [selectedColor, setSelectedColor] = useState(args.selectedColor);
    useEffect(() => {
      setSelectedColor(args.selectedColor);
    }, [args.selectedColor]);
    return <ColorPicker selectedColor={selectedColor} savedPresets={args.savedPresets} globalPresets={args.globalPresets} setSelectedColor={setSelectedColor} popupDirection="up" />;
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var p,g,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const D=["Default","ColorPickerInstance"];export{o as ColorPickerInstance,t as Default,D as __namedExportsOrder,E as default};
