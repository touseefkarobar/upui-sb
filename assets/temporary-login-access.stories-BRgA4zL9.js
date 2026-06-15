import{r as d,j as u}from"./iframe-CRG9BGu-.js";import{a as D}from"./index-Dq7h7Pqt.js";import{T as l}from"./TemporaryLoginAccess-ECdhaF71.js";import"./CopyIcon-oVuqHK-_.js";import"./type-CgT0EiC8.js";import"./OpenIcon-CfVS4n2j.js";import"./ResetIcon-R78H6TN-.js";import"./index-DZRlIWMl.js";import"./FilledIcon-CVlV6JOW.js";import"./BackIcon-DzhE7tNg.js";import"./index-BPup0kjA.js";import"./Heading-D6Qq-17u.js";import"./index-DgJHbgBD.js";import"./InfoIcon-Cl28mQRo.js";import"./Text-CYdK4AbI.js";import"./CheckmarkIcon-BJDmsa1g.js";import"./WelcomeIcon-BR04ar4U.js";import"./index-CifSDP94.js";import"./CloseIcon-yuoYjFte.js";import"./index-Dfe6r8sF.js";import"./StopIcon-BKLvWIxz.js";import"./index-CqTD_nUN.js";import"./Label-2GrEbqrd.js";import"./index-ChoG4d2E.js";import"./index-CSkMdIMK.js";const T="https://dummyjson.com/c/15ce-740f-4dca-bf5c",F={title:"PAC Universal Plugin UI/Pages/Temporary Login Access",component:l,parameters:{pageLayout:"page"}},t=()=>{const[n,a]=d.useState({accessLink:"",enable:!1,loginTime:null,failLoginCount:0}),i=e=>D.post(T,{data:JSON.stringify(e)}),g=e=>{const o={...n,enable:e,...e===!0&&{loginTime:Math.floor(Date.now()/1e3),failLoginCount:0}};a(o),i(o)},c=e=>{a(o=>{const s={...o,accessLink:e};return i(s),s})},L={accessLink:n.accessLink,onLinkChange:c,enabled:n.enable,onToggleChange:g,enabledAt:n.loginTime,failedAttempts:n.failLoginCount,textDomain:"pac-upui"};return u.jsx(l,{...L})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,m,r;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
