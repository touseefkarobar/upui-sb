import{R as q,j as s}from"./iframe-C-7ArFf6.js";import{C as x}from"./CloseIcon-Ce1dxn_p.js";const b="_button_t92sq_1",h="_buttonLink_t92sq_15",g="_fit_t92sq_30",R="_stretch_t92sq_33",j="_small_t92sq_36",N="_large_t92sq_39",T="_hide_t92sq_42",v="_dismiss_t92sq_46",w="_primary_t92sq_73",E="_secondary_t92sq_81",L="_tertiary_t92sq_89",V="_danger_t92sq_97",k="_disabled_t92sq_105",B="_spinner_t92sq_110",C="_spin_t92sq_110",S="_icon_t92sq_133",e={button:b,buttonLink:h,fit:g,stretch:R,small:j,large:N,hide:T,dismiss:v,primary:w,secondary:E,tertiary:L,danger:V,disabled:k,spinner:B,spin:C,"spinner-small":"_spinner-small_t92sq_118","spinner-large":"_spinner-large_t92sq_122",icon:S},$=q.forwardRef(({href:p,variant:u="primary",size:t="large",loading:a=!1,disabled:m=!1,className:_="",width:d="fit",leftIcon:r,rightIcon:l,children:f,style:o,...y},c)=>{const i=n=>n?q.isValidElement(n)?s.jsx("span",{className:`${e.icon} ${a?e.hide:""}`,children:n}):typeof n=="function"?s.jsx("span",{className:`${e.icon} ${a?e.hide:""}`,children:s.jsx(n,{color:"white",size:t==="large"?"base":"small"})}):null:null;return s.jsx(s.Fragment,{children:u==="dismiss"?s.jsxs("button",{ref:c,className:`
        ${e.dismiss}
                ${e[d]}
        pac-upui-h4 pac-upui-font-medium

      `,style:{...o},...y,children:[s.jsx("span",{children:"Dismiss"}),s.jsx("span",{children:s.jsx(x,{size:"xlarge"})})]}):p?s.jsxs("a",{ref:c,href:p,target:"_blank",rel:"noreferrer",className:`
                    ${e[d]}
                    ${p?e.buttonLink:""}
        ${e.button}
        ${e[u]}
        ${e[t]}
        ${m||a?e.disabled:""}
        ${_}
        ${t==="large"?"pac-upui-h3 pac-upui-font-semibold":"pac-upui-h6 pac-upui-font-semibold"}
      `,style:{paddingLeft:r?"6px":"12px",paddingRight:l?"6px":"12px",...o},children:[a&&s.jsx("span",{className:`${e.spinner} ${t==="large"?e["spinner-large"]:e["spinner-small"]}`}),i(r),s.jsx("span",{className:`${a?e.hide:""}`,children:f}),i(l)]}):s.jsxs("button",{ref:c,className:`
                    ${e[d]}
        ${e.button}
        ${e[u]}
        ${e[t]}
        ${m||a?e.disabled:""}
        ${_}
        ${t==="large"?"pac-upui-h3 pac-upui-font-semibold":"pac-upui-h6 pac-upui-font-semibold"}
      `,style:{paddingLeft:r?"6px":"12px",paddingRight:l?"6px":"12px",...o},disabled:m||a,...y,children:[a&&s.jsx("span",{className:`${e.spinner} ${t==="large"?e["spinner-large"]:e["spinner-small"]}`}),i(r),s.jsx("span",{className:`${a?e.hide:""}`,children:f}),i(l)]})})});$.displayName="Button";$.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'danger' |'dismiss'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'dismiss'"}]},description:"",defaultValue:{value:'"primary"',computed:!1}},href:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:'"large"',computed:!1}},width:{required:!1,tsType:{name:"union",raw:'"fit" | "stretch"',elements:[{name:"literal",value:'"fit"'},{name:"literal",value:'"stretch"'}]},description:"",defaultValue:{value:'"fit"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"union",raw:"React.ElementType | ReactNode",elements:[{name:"ReactElementType",raw:"React.ElementType"},{name:"ReactNode"}]},description:""},rightIcon:{required:!1,tsType:{name:"union",raw:"React.ElementType | ReactNode",elements:[{name:"ReactElementType",raw:"React.ElementType"},{name:"ReactNode"}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]};export{$ as B};
