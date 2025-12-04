import{r as c,j as s}from"./iframe-0mXiPHae.js";import{C as a}from"./index-Dy1VxbrP.js";import{T as P}from"./Text-DF-Wtqy2.js";import{C as h}from"./index-CBpk1Fmj.js";import"./index-D2_v78Cm.js";import"./type-Bc9hys3F.js";import"./index-IEXID6Fq.js";import"./index-CqEIVkGk.js";import"./useOutsideToggle-CWXyxS4q.js";import"./DropdownIcon-Cu_DUKRA.js";import"./SearchIcon-BrjuOXLD.js";import"./FilledIcon-CSjxdJiT.js";import"./ResetIcon-Bhsug1Vo.js";const I={title:"PAC Universal Plugin UI/Primitive/ColorPicker",component:a,argsTypes:{selectedColor:{description:"Currently selected color",control:{type:"color"}},savedPresets:{description:"Array of saved color presets",control:{type:"array"}},globalPresets:{description:"Object containing global color presets",control:{type:"object"}},setSelectedColor:{description:"Function to update the selected color",action:"colorChanged"}},args:{selectedColor:"",savedPresets:["#E57373","#81C784","#64B5F6","#FFFFFF","#BA68C8","#4DD0E1","#F06292","#AED581"],globalPresets:{"gcid-body-color":{color:"#ec1111",status:"active"},"gcid-white-color":{color:"#FFFFFF",status:"active"},"gcid-heading-color":{color:"#666666",status:"active"}}}},l={render:e=>{const[t,o]=c.useState(e.selectedColor);return c.useEffect(()=>{o(e.selectedColor)},[e.selectedColor]),s.jsx(a,{selectedColor:t,globalPresets:e.globalPresets,setSelectedColor:o,popupDirection:"down"})}},r=()=>{const[e,t]=c.useState(""),o={"gcid-body-color":{color:"#ec1111",status:"active"},"gcid-heading-color":{color:"#666666",status:"active"},"gcid-p2ma5h19-9gnc-jkon-ir4t-e18gozu6mzy4":{color:"#1325b1",status:"active"},"gcid-primary-color":{color:"#1dec14",status:"active"},"gcid-secondary-color":{color:"#3912e4",status:"active"},"gcid-vd1qwwe2-nze0-detk-5dr8-26wylben9ad9":{color:"#cd0909",status:"active"},"gcid-y0m7mbth-vzmq-j566-tb4p-n57ta6dy8frk":{color:"#13d8b2",status:"active"},"gcid-yynrlox7-gj8a-thep-361m-xbvav668vsep":{color:"#dc6712",status:"active"}};return s.jsxs("div",{children:[s.jsx(a,{selectedColor:e,globalPresets:o,setSelectedColor:t,popupDirection:"down"}),s.jsxs(P,{children:["selected Color : ",e]})]})},n={render:()=>{const[e,t]=c.useState("#00f");console.log(e);const[o,b]=c.useState(1);return s.jsx(h,{color:e,setColor:t,preset:[],setOpacity:b,opacity:o,popupDirection:"down"})}};r.__docgenInfo={description:"",methods:[],displayName:"ColorPickerInstance"};var i,d,p;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => {
    const [selectedColor, setSelectedColor] = useState(args.selectedColor);
    useEffect(() => {
      setSelectedColor(args.selectedColor);
    }, [args.selectedColor]);
    return <ColorPicker selectedColor={selectedColor} globalPresets={args.globalPresets} setSelectedColor={setSelectedColor} popupDirection="down" />;
  }
}`,...(p=(d=l.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,C;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [selectedColor, setSelectedColor] = useState("");
  // const savedPresets = [
  //   "#E57373", // Light red
  //   "#81C784", // Light green
  //   "#64B5F6", // Light blue
  //   "#FFF176", // Light yellow
  //   "#BA68C8", // Light purple
  //   "#4DD0E1", // Light teal
  //   "#F06292", // Light pink
  //   "#AED581", // Light lime
  // ];

  const globalPresets = {
    "gcid-body-color": {
      color: "#ec1111",
      status: "active"
    },
    "gcid-heading-color": {
      color: "#666666",
      status: "active"
    },
    "gcid-p2ma5h19-9gnc-jkon-ir4t-e18gozu6mzy4": {
      color: "#1325b1",
      status: "active"
    },
    "gcid-primary-color": {
      color: "#1dec14",
      status: "active"
    },
    "gcid-secondary-color": {
      color: "#3912e4",
      status: "active"
    },
    "gcid-vd1qwwe2-nze0-detk-5dr8-26wylben9ad9": {
      color: "#cd0909",
      status: "active"
    },
    "gcid-y0m7mbth-vzmq-j566-tb4p-n57ta6dy8frk": {
      color: "#13d8b2",
      status: "active"
    },
    "gcid-yynrlox7-gj8a-thep-361m-xbvav668vsep": {
      color: "#dc6712",
      status: "active"
    }
  };
  return <div>
      <ColorPicker selectedColor={selectedColor} globalPresets={globalPresets} setSelectedColor={setSelectedColor} popupDirection="down" />
      <Text>selected Color : {selectedColor}</Text>
    </div>;
}`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var m,v,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState("#00f");
    console.log(color);
    const [opacity, setOpacity] = useState(1);
    return <CustomColorPicker color={color} setColor={setColor} preset={[]} setOpacity={setOpacity} opacity={opacity} popupDirection="down" />;
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const T=["Default","ColorPickerInstance","CustomPicker"];export{r as ColorPickerInstance,n as CustomPicker,l as Default,T as __namedExportsOrder,I as default};
