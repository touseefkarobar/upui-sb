import{j as s,R as y}from"./iframe-BLdnLKZn.js";import{C as q}from"./CloseIcon-CUUpgnMR.js";const $="_button_t92sq_1",x="_buttonLink_t92sq_15",b="_fit_t92sq_30",h="_stretch_t92sq_33",g="_small_t92sq_36",R="_large_t92sq_39",j="_hide_t92sq_42",T="_dismiss_t92sq_46",v="_primary_t92sq_73",N="_secondary_t92sq_81",w="_tertiary_t92sq_89",E="_danger_t92sq_97",L="_disabled_t92sq_105",V="_spinner_t92sq_110",k="_spin_t92sq_110",B="_icon_t92sq_133",e={button:$,buttonLink:x,fit:b,stretch:h,small:g,large:R,hide:j,dismiss:T,primary:v,secondary:N,tertiary:w,danger:E,disabled:L,spinner:V,spin:k,"spinner-small":"_spinner-small_t92sq_118","spinner-large":"_spinner-large_t92sq_122",icon:B},C=({href:p,variant:u="primary",size:t="large",loading:a=!1,disabled:m=!1,className:o="",width:c="fit",leftIcon:r,rightIcon:i,children:_,style:d,...f})=>{const l=n=>n?y.isValidElement(n)?s.jsx("span",{className:`${e.icon} ${a?e.hide:""}`,children:n}):typeof n=="function"?s.jsx("span",{className:`${e.icon} ${a?e.hide:""}`,children:s.jsx(n,{color:"white",size:t==="large"?"base":"small"})}):null:null;return s.jsx(s.Fragment,{children:u==="dismiss"?s.jsxs("button",{className:`
        ${e.dismiss} 
                ${e[c]}
        pac-upui-h4 pac-upui-font-medium

      `,style:{...d},...f,children:[s.jsx("span",{children:"Dismiss"}),s.jsx("span",{children:s.jsx(q,{size:"xlarge"})})]}):p?s.jsxs("a",{href:p,target:"_blank",className:`
                    ${e[c]}
                    ${p?e.buttonLink:""}
        ${e.button} 
        ${e[u]} 
        ${e[t]} 
        ${m||a?e.disabled:""} 
        ${o}
        ${t==="large"?"pac-upui-h3 pac-upui-font-semibold":"pac-upui-h6 pac-upui-font-semibold"}
      `,style:{paddingLeft:r?"6px":"12px",paddingRight:i?"6px":"12px",...d},children:[a&&s.jsx("span",{className:`${e.spinner} ${t==="large"?e["spinner-large"]:e["spinner-small"]}`}),l(r),s.jsx("span",{className:`${a?e.hide:""}`,children:_}),l(i)]}):s.jsxs("button",{className:`
                    ${e[c]}
        ${e.button} 
        ${e[u]} 
        ${e[t]} 
        ${m||a?e.disabled:""} 
        ${o}
        ${t==="large"?"pac-upui-h3 pac-upui-font-semibold":"pac-upui-h6 pac-upui-font-semibold"}
      `,style:{paddingLeft:r?"6px":"12px",paddingRight:i?"6px":"12px",...d},disabled:m||a,...f,children:[a&&s.jsx("span",{className:`${e.spinner} ${t==="large"?e["spinner-large"]:e["spinner-small"]}`}),l(r),s.jsx("span",{className:`${a?e.hide:""}`,children:_}),l(i)]})})};C.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'danger' |'dismiss'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'dismiss'"}]},description:"",defaultValue:{value:'"primary"',computed:!1}},href:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:'"large"',computed:!1}},width:{required:!1,tsType:{name:"union",raw:'"fit" | "stretch"',elements:[{name:"literal",value:'"fit"'},{name:"literal",value:'"stretch"'}]},description:"",defaultValue:{value:'"fit"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"union",raw:"React.ElementType | ReactNode",elements:[{name:"ReactElementType",raw:"React.ElementType"},{name:"ReactNode"}]},description:""},rightIcon:{required:!1,tsType:{name:"union",raw:"React.ElementType | ReactNode",elements:[{name:"ReactElementType",raw:"React.ElementType"},{name:"ReactNode"}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]};export{C as B};
