import{r as c,j as r}from"./iframe-BWJm69Oe.js";import{C as d}from"./index-BG0zbpfV.js";import{T as j}from"./Text-CoF2Dpoy.js";import{C as h}from"./index-QoAqx1Dp.js";import"./index-Dd4oOWZc.js";import"./type-CgT0EiC8.js";import"./index-CvXRYQ4c.js";import"./index-yd26GB_h.js";import"./useOutsideToggle-BB-EJAk7.js";import"./DropdownIcon-BSeZzKwe.js";import"./SearchIcon-Bsi2UkE1.js";import"./FilledIcon-CKwN3khR.js";import"./ResetIcon-CHQtJZsu.js";import"./index-DmMEhs63.js";import"./CloseIcon-C34oVPsi.js";const W={title:"PAC Universal Plugin UI/Primitive/ColorPicker",component:d,argsTypes:{selectedColor:{description:"Currently selected color",control:{type:"color"}},savedPresets:{description:"Array of saved color presets",control:{type:"array"}},globalPresets:{description:"Object containing global color presets",control:{type:"object"}},setSelectedColor:{description:"Function to update the selected color",action:"colorChanged"}},args:{selectedColor:"",savedPresets:["#E57373","#81C784","#64B5F6","#FFFFFF","#BA68C8","#4DD0E1","#F06292","#AED581"],globalPresets:{"gcid-primary-color":{color:"#d709a4",status:"active"},"gcid-secondary-color":{color:"#2ea3f2",status:"active"},"gcid-heading-color":{color:"#666666",status:"active"},"gcid-body-color":{color:"#666666",status:"active"},"gcid-link-color":{color:"#2ea3f2",status:"active"},"gcid-bg5me0g63y":{color:"#ef2a2a",status:"active"},"gcid-iis8o8yvt1":{color:"#ffffff",status:"active"},"gcid-v4865btg3k":{color:"#d709a4",status:"active"},"gcid-g09gn0k1aj":{color:"#0e89dc",status:"active"},"gcid-wzgcwl7kq5":{color:"#750559",status:"active"},"gcid-ygoingqpt8":{color:"#3b82f6",status:"active"},"gcid-spj71pflib":{color:"#ffffff",status:"active"},"gcid-4pk0nm7yy1":{color:"#bcd4eb",status:"active"},"gcid-1f1bf5fb-a99d-4acc-8d9e-ddac074c158c":{color:"rgba(0, 0, 0, 0.7)",status:"active"},"gcid-4c79ba3d-a281-4fb6-9b14-02f9a4c793f2":{color:"#70a4bb",status:"active"},"gcid-688c464a-d6f2-4296-b592-395352c71c79":{color:"rgba(255, 255, 255, 0.04)",status:"active"},"gcid-d119accd-44d7-4f2f-b9d7-599c8463324b":{color:"rgba(255, 255, 255, 0.12)",status:"active"},"gcid-2352d280-fe84-43b1-a71e-f400c35a526a":{color:"#072130",status:"active"},"gcid-9e22d70d-67ee-4430-bed3-4bc105d4ef1e":{color:"rgba(7, 33, 48, 0.6)",status:"active"},"gcid-a78660e1-cfc7-4771-a566-6834d6a7f06a":{color:"rgba(0, 0, 0, 0.04)",status:"active"},"gcid-24b0db87-dafa-47d9-995f-b90181e18c52":{color:"rgba(0, 0, 0, 0.12)",status:"active"},"gcid-1f1b4e15-7cc6-4e13-8154-74d77a956460":{color:"#0047ff",status:"active"},"gcid-2ebbc52c-9ee6-4712-a077-fcaec9b98540":{color:"#15c586",status:"active"},"gcid-2bb820f4-8993-4899-8850-c73e9c1e988e":{color:"rgba(0, 0, 0, 0.2)",status:"active"},"gcid-b70c6ec4-3d09-43b5-80df-154e6e990bf3":{color:"#2b79ee",status:"active"},"gcid-b6c4f12c-f25d-4f61-9fb1-6e96404634cd":{color:"#f4f4f4",status:"active"},"gcid-53054839-b83d-4ef0-8659-8a010e6148fd":{color:"#333333",status:"active"}}}},a={render:e=>{const[t,o]=c.useState(e.selectedColor);return c.useEffect(()=>{o(e.selectedColor)},[e.selectedColor]),r.jsx(d,{selectedColor:t,globalPresets:e.globalPresets,setSelectedColor:o,popupDirection:"down"})}},s=()=>{const[e,t]=c.useState(""),o={"gcid-body-color":{color:"#ec1111",status:"active"},"gcid-heading-color":{color:"#666666",status:"active"},"gcid-p2ma5h19-9gnc-jkon-ir4t-e18gozu6mzy4":{color:"#1325b1",status:"active"},"gcid-primary-color":{color:"#1dec14",status:"active"},"gcid-secondary-color":{color:"#3912e4",status:"active"},"gcid-vd1qwwe2-nze0-detk-5dr8-26wylben9ad9":{color:"#cd0909",status:"active"},"gcid-y0m7mbth-vzmq-j566-tb4p-n57ta6dy8frk":{color:"#13d8b2",status:"active"},"gcid-yynrlox7-gj8a-thep-361m-xbvav668vsep":{color:"#dc6712",status:"active"}};return r.jsxs("div",{children:[r.jsx(d,{selectedColor:e,globalPresets:o,setSelectedColor:t,popupDirection:"down"}),r.jsxs(j,{children:["selected Color : ",e]})]})},i={render:()=>{const[e,t]=c.useState("#00f");console.log(e);const[o,n]=c.useState(1);return r.jsx(h,{color:e,setColor:t,preset:[],setOpacity:n,opacity:o,popupDirection:"down"})}},l={render:()=>{const[e,t]=c.useState("#00f");console.log(e);const[o,n]=c.useState(1);return r.jsx(h,{color:e,setColor:t,preset:[],setOpacity:n,opacity:o,popupDirection:"down",enableConfirmation:!0})}};s.__docgenInfo={description:"",methods:[],displayName:"ColorPickerInstance"};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: any) => {
    const [selectedColor, setSelectedColor] = useState(args.selectedColor);
    useEffect(() => {
      setSelectedColor(args.selectedColor);
    }, [args.selectedColor]);
    return <ColorPicker selectedColor={selectedColor} globalPresets={args.globalPresets} setSelectedColor={setSelectedColor} popupDirection="down" />;
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,f,m;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(m=(f=s.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var C,v,y;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState("#00f");
    console.log(color);
    const [opacity, setOpacity] = useState(1);
    return <CustomColorPicker color={color} setColor={setColor} preset={[]} setOpacity={setOpacity} opacity={opacity} popupDirection="down" />;
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var P,k,S;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState("#00f");
    console.log(color);
    const [opacity, setOpacity] = useState(1);
    return <CustomColorPicker color={color} setColor={setColor} preset={[]} setOpacity={setOpacity} opacity={opacity} popupDirection="down" enableConfirmation={true} />;
  }
}`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const N=["Default","ColorPickerInstance","CustomPicker","CustomPickerWithConfirmation"];export{s as ColorPickerInstance,i as CustomPicker,l as CustomPickerWithConfirmation,a as Default,N as __namedExportsOrder,W as default};
