import{r as d,j as u}from"./iframe-D_EB6DsR.js";import{a as D}from"./index-Dq7h7Pqt.js";import{T as l}from"./TemporaryLoginAccess-BS1tWGf2.js";import"./CopyIcon-DTUbV8Je.js";import"./type-CgT0EiC8.js";import"./OpenIcon-Bm4yWc_U.js";import"./ResetIcon-Bn_S04oj.js";import"./index--VqEURXW.js";import"./FilledIcon-B8NQm0HL.js";import"./BackIcon-y9RJ5zQ5.js";import"./index-1un3TAj6.js";import"./Heading-CC49VvOX.js";import"./index-EJ92ukfs.js";import"./InfoIcon-omdOG_h-.js";import"./Text-BDzs8qHI.js";import"./CheckmarkIcon-BMxNW660.js";import"./WelcomeIcon-DOMF5Z2N.js";import"./index-Cg6TBj2w.js";import"./CloseIcon-C7mpzfNe.js";import"./index-DyBVcJ4N.js";import"./StopIcon-fyEbwRKy.js";import"./index-MXpr_UnA.js";import"./Label-DfByFa3U.js";import"./index-Ds3pKd9H.js";import"./index-BHzSlOcd.js";const T="https://dummyjson.com/c/15ce-740f-4dca-bf5c",F={title:"PAC Universal Plugin UI/Pages/Temporary Login Access",component:l,parameters:{pageLayout:"page"}},t=()=>{const[n,a]=d.useState({accessLink:"",enable:!1,loginTime:null,failLoginCount:0}),i=e=>D.post(T,{data:JSON.stringify(e)}),g=e=>{const o={...n,enable:e,...e===!0&&{loginTime:Math.floor(Date.now()/1e3),failLoginCount:0}};a(o),i(o)},c=e=>{a(o=>{const s={...o,accessLink:e};return i(s),s})},L={accessLink:n.accessLink,onLinkChange:c,enabled:n.enable,onToggleChange:g,enabledAt:n.loginTime,failedAttempts:n.failLoginCount,textDomain:"pac-upui"};return u.jsx(l,{...L})};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,m,r;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
