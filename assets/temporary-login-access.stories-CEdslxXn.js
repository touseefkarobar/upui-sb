import{r as d,j as u}from"./iframe-BRDpGQCJ.js";import{a as D}from"./index-Dq7h7Pqt.js";import{T as l}from"./TemporaryLoginAccess-DV86lyqB.js";import"./CopyIcon-BacXyyNM.js";import"./type-CgT0EiC8.js";import"./OpenIcon-Ec5SmlUs.js";import"./ResetIcon-D2x0VykA.js";import"./index-DA9p45ZC.js";import"./FilledIcon-oFQzU9VQ.js";import"./BackIcon-BDtKHxJN.js";import"./index-CqjyYicT.js";import"./Heading-CO0rNIOZ.js";import"./index-D2FzVEZ4.js";import"./InfoIcon-D3Fp4EH2.js";import"./Text-C12X8o7k.js";import"./CheckmarkIcon-SiXjcXVw.js";import"./WelcomeIcon-RHh0zy32.js";import"./index-csjTso3F.js";import"./CloseIcon-BWbWd3Tt.js";import"./index-R_QwVcoU.js";import"./StopIcon-DoPGojmt.js";import"./index-Dj1FAnB2.js";import"./Label-CFBhTNsZ.js";import"./index-Dj9dfltl.js";import"./index-CI0fH3ly.js";const T="https://dummyjson.com/c/15ce-740f-4dca-bf5c",F={title:"PAC Universal Plugin UI/Pages/Temporary Login Access",component:l,parameters:{pageLayout:"page"}},t=()=>{const[n,a]=d.useState({accessLink:"",enable:!1,loginTime:null,failLoginCount:0}),i=e=>D.post(T,{data:JSON.stringify(e)}),g=e=>{const o={...n,enable:e,...e===!0&&{loginTime:Math.floor(Date.now()/1e3),failLoginCount:0}};a(o),i(o)},c=e=>{a(o=>{const s={...o,accessLink:e};return i(s),s})},L={accessLink:n.accessLink,onLinkChange:c,enabled:n.enable,onToggleChange:g,enabledAt:n.loginTime,failedAttempts:n.failLoginCount,textDomain:"pac-upui"};return u.jsx(l,{...L})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,m,r;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
