import{j as a,R as y}from"./iframe--RnYEJaH.js";import{C as $}from"./CloseIcon-SQQuOVfl.js";const x="_button_ppdz9_1",b="_buttonLink_ppdz9_29",h="_fit_ppdz9_59",g="_stretch_ppdz9_65",R="_small_ppdz9_71",j="_large_ppdz9_77",z="_hide_ppdz9_83",T="_dismiss_ppdz9_91",v="_primary_ppdz9_145",N="_secondary_ppdz9_161",q="_tertiary_ppdz9_177",w="_danger_ppdz9_193",E="_disabled_ppdz9_209",L="_spinner_ppdz9_219",V="_spin_ppdz9_219",k="_icon_ppdz9_265",e={button:x,buttonLink:b,fit:h,stretch:g,small:R,large:j,hide:z,dismiss:T,primary:v,secondary:N,tertiary:q,danger:w,disabled:E,spinner:L,spin:V,"spinner-small":"_spinner-small_ppdz9_235","spinner-large":"_spinner-large_ppdz9_243",icon:k},B=({href:p,variant:d="primary",size:t="large",loading:s=!1,disabled:u=!1,className:o="",width:m="fit",leftIcon:r,rightIcon:i,children:_,style:c,...f})=>{const l=n=>n?y.isValidElement(n)?a.jsx("span",{className:`${e.icon} ${s?e.hide:""}`,children:n}):typeof n=="function"?a.jsx("span",{className:`${e.icon} ${s?e.hide:""}`,children:a.jsx(n,{color:"white",size:t==="large"?"base":"small"})}):null:null;return a.jsx(a.Fragment,{children:d==="dismiss"?a.jsxs("button",{className:`
        ${e.dismiss} 
                ${e[m]}
        pac-upui-h4 pac-upui-font-medium

      `,style:{...c},...f,children:[a.jsx("span",{children:"Dismiss"}),a.jsx("span",{children:a.jsx($,{size:"xlarge"})})]}):p?a.jsxs("a",{href:p,target:"_blank",className:`
                    ${e[m]}
                    ${p?e.buttonLink:""}
        ${e.button} 
        ${e[d]} 
        ${e[t]} 
        ${u||s?e.disabled:""} 
        ${o}
        ${t==="large"?"pac-upui-h3 pac-upui-font-semibold":"pac-upui-h6 pac-upui-font-semibold"}
      `,style:{paddingLeft:r?"6px":"12px",paddingRight:i?"6px":"12px",...c},children:[s&&a.jsx("span",{className:`${e.spinner} ${t==="large"?e["spinner-large"]:e["spinner-small"]}`}),l(r),a.jsx("span",{className:`${s?e.hide:""}`,children:_}),l(i)]}):a.jsxs("button",{className:`
                    ${e[m]}
        ${e.button} 
        ${e[d]} 
        ${e[t]} 
        ${u||s?e.disabled:""} 
        ${o}
        ${t==="large"?"pac-upui-h3 pac-upui-font-semibold":"pac-upui-h6 pac-upui-font-semibold"}
      `,style:{paddingLeft:r?"6px":"12px",paddingRight:i?"6px":"12px",...c},disabled:u||s,...f,children:[s&&a.jsx("span",{className:`${e.spinner} ${t==="large"?e["spinner-large"]:e["spinner-small"]}`}),l(r),a.jsx("span",{className:`${s?e.hide:""}`,children:_}),l(i)]})})};B.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'danger' |'dismiss'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'dismiss'"}]},description:"",defaultValue:{value:'"primary"',computed:!1}},href:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:'"large"',computed:!1}},width:{required:!1,tsType:{name:"union",raw:'"fit" | "stretch"',elements:[{name:"literal",value:'"fit"'},{name:"literal",value:'"stretch"'}]},description:"",defaultValue:{value:'"fit"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"union",raw:"React.ElementType | ReactNode",elements:[{name:"ReactElementType",raw:"React.ElementType"},{name:"ReactNode"}]},description:""},rightIcon:{required:!1,tsType:{name:"union",raw:"React.ElementType | ReactNode",elements:[{name:"ReactElementType",raw:"React.ElementType"},{name:"ReactNode"}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]};export{B};
