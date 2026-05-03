import{r as d,j as u}from"./iframe-CKuY2OyM.js";import{a as D}from"./index-Dq7h7Pqt.js";import{T as l}from"./TemporaryLoginAccess-C9RuTyWW.js";import"./CopyIcon-BZ-U3b9p.js";import"./type-CgT0EiC8.js";import"./OpenIcon-Ch2uvLCL.js";import"./ResetIcon-jy2XO4eN.js";import"./index-BnDSBrGC.js";import"./FilledIcon-DF7-9oqI.js";import"./BackIcon-BNGrHzFz.js";import"./index-C-_FFCe8.js";import"./Heading-DW0lUOvL.js";import"./index-C4UCRkBg.js";import"./InfoIcon-Dg2qqYOs.js";import"./Text-wIvj6HUp.js";import"./CheckmarkIcon-CPq-rkr1.js";import"./WelcomeIcon-DtR21b8w.js";import"./index-C9mFH4Z_.js";import"./CloseIcon-By-n5xMo.js";import"./index-49xVhZbQ.js";import"./StopIcon-C34mFUrq.js";import"./index-F-35SUkE.js";import"./Label-DsGU8QCZ.js";import"./index-V7Xse2ll.js";import"./index-BO0Tup0U.js";const T="https://dummyjson.com/c/15ce-740f-4dca-bf5c",F={title:"PAC Universal Plugin UI/Pages/Temporary Login Access",component:l,parameters:{pageLayout:"page"}},t=()=>{const[n,a]=d.useState({accessLink:"",enable:!1,loginTime:null,failLoginCount:0}),i=e=>D.post(T,{data:JSON.stringify(e)}),g=e=>{const o={...n,enable:e,...e===!0&&{loginTime:Math.floor(Date.now()/1e3),failLoginCount:0}};a(o),i(o)},c=e=>{a(o=>{const s={...o,accessLink:e};return i(s),s})},L={accessLink:n.accessLink,onLinkChange:c,enabled:n.enable,onToggleChange:g,enabledAt:n.loginTime,failedAttempts:n.failLoginCount,textDomain:"pac-upui"};return u.jsx(l,{...L})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,m,r;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
