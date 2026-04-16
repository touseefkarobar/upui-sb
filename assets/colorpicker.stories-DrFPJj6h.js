import{r,j as s}from"./iframe-DKr_oYML.js";import{C as d}from"./index-BUpPkfD5.js";import{T as F}from"./Text-ClZBMQ7l.js";import{C as k}from"./index-6dbn8j0c.js";import"./index-Bjo1Nh62.js";import"./type-CgT0EiC8.js";import"./index-DvAn6bT-.js";import"./index-igyweYm5.js";import"./useOutsideToggle-BEvaE7sX.js";import"./DropdownIcon-Ta0MxeHb.js";import"./SearchIcon-DfBbu5Mf.js";import"./FilledIcon-B2fkJSSc.js";import"./ResetIcon-Bbwn7lYm.js";import"./index-BgDyFtBm.js";import"./CloseIcon-CLW0AMie.js";const W={title:"PAC Universal Plugin UI/Primitive/ColorPicker",component:d,argsTypes:{selectedColor:{description:"Currently selected color",control:{type:"color"}},savedPresets:{description:"Array of saved color presets",control:{type:"array"}},globalPresets:{description:"Object containing global color presets",control:{type:"object"}},setSelectedColor:{description:"Function to update the selected color",action:"colorChanged"}},args:{selectedColor:"",savedPresets:["#E57373","#81C784","#64B5F6","#FFFFFF","#BA68C8","#4DD0E1","#F06292","#AED581"],globalPresets:{"gcid-body-color":{color:"#ec1111",status:"active"},"gcid-white-color":{color:"#FFFFFF",status:"active"},"gcid-heading-color":{color:"#666666",status:"active"}}}},n={render:e=>{const[t,o]=r.useState(e.selectedColor);return r.useEffect(()=>{o(e.selectedColor)},[e.selectedColor]),s.jsx(d,{selectedColor:t,globalPresets:e.globalPresets,setSelectedColor:o,popupDirection:"down"})}},c=()=>{const[e,t]=r.useState(""),o={"gcid-body-color":{color:"#ec1111",status:"active"},"gcid-heading-color":{color:"#666666",status:"active"},"gcid-p2ma5h19-9gnc-jkon-ir4t-e18gozu6mzy4":{color:"#1325b1",status:"active"},"gcid-primary-color":{color:"#1dec14",status:"active"},"gcid-secondary-color":{color:"#3912e4",status:"active"},"gcid-vd1qwwe2-nze0-detk-5dr8-26wylben9ad9":{color:"#cd0909",status:"active"},"gcid-y0m7mbth-vzmq-j566-tb4p-n57ta6dy8frk":{color:"#13d8b2",status:"active"},"gcid-yynrlox7-gj8a-thep-361m-xbvav668vsep":{color:"#dc6712",status:"active"}};return s.jsxs("div",{children:[s.jsx(d,{selectedColor:e,globalPresets:o,setSelectedColor:t,popupDirection:"down"}),s.jsxs(F,{children:["selected Color : ",e]})]})},l={render:()=>{const[e,t]=r.useState("#00f");console.log(e);const[o,i]=r.useState(1);return s.jsx(k,{color:e,setColor:t,preset:[],setOpacity:i,opacity:o,popupDirection:"down"})}},a={render:()=>{const[e,t]=r.useState("#00f");console.log(e);const[o,i]=r.useState(1);return s.jsx(k,{color:e,setColor:t,preset:[],setOpacity:i,opacity:o,popupDirection:"down",enableConfirmation:!0})}};c.__docgenInfo={description:"",methods:[],displayName:"ColorPickerInstance"};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: any) => {
    const [selectedColor, setSelectedColor] = useState(args.selectedColor);
    useEffect(() => {
      setSelectedColor(args.selectedColor);
    }, [args.selectedColor]);
    return <ColorPicker selectedColor={selectedColor} globalPresets={args.globalPresets} setSelectedColor={setSelectedColor} popupDirection="down" />;
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var C,g,y;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(y=(g=c.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,b,P;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState("#00f");
    console.log(color);
    const [opacity, setOpacity] = useState(1);
    return <CustomColorPicker color={color} setColor={setColor} preset={[]} setOpacity={setOpacity} opacity={opacity} popupDirection="down" />;
  }
}`,...(P=(b=l.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var S,h,f;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState("#00f");
    console.log(color);
    const [opacity, setOpacity] = useState(1);
    return <CustomColorPicker color={color} setColor={setColor} preset={[]} setOpacity={setOpacity} opacity={opacity} popupDirection="down" enableConfirmation={true} />;
  }
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const N=["Default","ColorPickerInstance","CustomPicker","CustomPickerWithConfirmation"];export{c as ColorPickerInstance,l as CustomPicker,a as CustomPickerWithConfirmation,n as Default,N as __namedExportsOrder,W as default};
