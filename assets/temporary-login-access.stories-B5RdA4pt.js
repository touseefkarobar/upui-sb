import{r as d,j as u}from"./iframe-4CSRLNwt.js";import{a as D}from"./index-Dq7h7Pqt.js";import{T as l}from"./TemporaryLoginAccess-D843-im2.js";import"./CopyIcon-BGn2YIP6.js";import"./type-CgT0EiC8.js";import"./OpenIcon-DKNxcW7I.js";import"./ResetIcon-BoCyAtmv.js";import"./index-B6ell46W.js";import"./FilledIcon-C_kDr16H.js";import"./BackIcon-xg0xG9s9.js";import"./index-UvKpEtP_.js";import"./Heading-DVf9nCoS.js";import"./index-D1YYHDp0.js";import"./InfoIcon-BPTzvaO5.js";import"./Text-Bm3Pj8vm.js";import"./CheckmarkIcon-C0E8o3xE.js";import"./WelcomeIcon-DiOgqfRb.js";import"./index-BAg-yhMn.js";import"./CloseIcon-DmVjFRgD.js";import"./index-mBLvDYGV.js";import"./StopIcon-C2q5nGPQ.js";import"./index-8FDw4Fp3.js";import"./Label-DWAfSbNe.js";import"./index-COVZJnxy.js";import"./index-BWqkS3Hq.js";const T="https://dummyjson.com/c/15ce-740f-4dca-bf5c",F={title:"PAC Universal Plugin UI/Pages/Temporary Login Access",component:l,parameters:{pageLayout:"page"}},t=()=>{const[n,a]=d.useState({accessLink:"",enable:!1,loginTime:null,failLoginCount:0}),i=e=>D.post(T,{data:JSON.stringify(e)}),g=e=>{const o={...n,enable:e,...e===!0&&{loginTime:Math.floor(Date.now()/1e3),failLoginCount:0}};a(o),i(o)},c=e=>{a(o=>{const s={...o,accessLink:e};return i(s),s})},L={accessLink:n.accessLink,onLinkChange:c,enabled:n.enable,onToggleChange:g,enabledAt:n.loginTime,failedAttempts:n.failLoginCount,textDomain:"pac-upui"};return u.jsx(l,{...L})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,m,r;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [tempLoginDetails, setTempLoginDetails] = useState<TempLoginDetails>({
    accessLink: '',
    enable: false,
    loginTime: null,
    failLoginCount: 0
  });
  const saveTempLoginDetails = (data: TempLoginDetails) => {
    return axios.post(dtmUpdateTempLoginDetails, {
      data: JSON.stringify(data)
    });
  };
  const handleToggleChangeTempLogin = (val: boolean) => {
    const updatedDetails = {
      ...tempLoginDetails,
      enable: val,
      ...(val === true && {
        loginTime: Math.floor(Date.now() / 1000),
        failLoginCount: 0
      })
    };
    setTempLoginDetails(updatedDetails);
    saveTempLoginDetails(updatedDetails);
  };
  const handleAccessLinkTempLogin = (val: string) => {
    setTempLoginDetails(prev => {
      const updatedDetails = {
        ...prev,
        accessLink: val
      };
      saveTempLoginDetails(updatedDetails);
      return updatedDetails;
    });
  };
  const tempLoginPageProps = {
    accessLink: tempLoginDetails.accessLink,
    onLinkChange: handleAccessLinkTempLogin,
    enabled: tempLoginDetails.enable,
    onToggleChange: handleToggleChangeTempLogin,
    enabledAt: tempLoginDetails.loginTime,
    failedAttempts: tempLoginDetails.failLoginCount,
    textDomain: 'pac-upui'
  };
  return <TemporaryLoginAccess {...tempLoginPageProps} />;
}`,...(r=(m=t.parameters)==null?void 0:m.docs)==null?void 0:r.source}}};const G=["Default"];export{t as Default,G as __namedExportsOrder,F as default};
