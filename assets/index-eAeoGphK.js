import{j as u}from"./iframe-Bqxp9LPJ.js";const d="_grid_1ji9q_1",n={grid:d,"grid-cols-xs":"_grid-cols-xs_1ji9q_15","grid-cols-sm":"_grid-cols-sm_1ji9q_25","grid-cols-md":"_grid-cols-md_1ji9q_35","grid-cols-lg":"_grid-cols-lg_1ji9q_45","grid-cols-xl":"_grid-cols-xl_1ji9q_55"},t=({children:i,columns:e=2,gap:l=10,className:a="",style:m={}})=>{const r=[];let s={};return typeof e=="number"?(s["--cols-xs"]=e,r.push(n["grid-cols-xs"])):(e.xs&&(s["--cols-xs"]=e.xs,r.push(n["grid-cols-xs"])),e.sm&&(s["--cols-sm"]=e.sm,r.push(n["grid-cols-sm"])),e.md&&(s["--cols-md"]=e.md,r.push(n["grid-cols-md"])),e.lg&&(s["--cols-lg"]=e.lg,r.push(n["grid-cols-lg"])),e.xl&&(s["--cols-xl"]=e.xl,r.push(n["grid-cols-xl"]))),u.jsx("div",{className:[n.grid,...r,a].join(" ").trim(),style:{...s,gap:l,...m},children:i})};t.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},columns:{required:!1,tsType:{name:"union",raw:`| number\r
| Partial<{\r
    xs: number;\r
    sm: number;\r
    md: number;\r
    lg: number;\r
    xl: number;\r
  }>`,elements:[{name:"number"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{\r
  xs: number;\r
  sm: number;\r
  md: number;\r
  lg: number;\r
  xl: number;\r
}`,signature:{properties:[{key:"xs",value:{name:"number",required:!0}},{key:"sm",value:{name:"number",required:!0}},{key:"md",value:{name:"number",required:!0}},{key:"lg",value:{name:"number",required:!0}},{key:"xl",value:{name:"number",required:!0}}]}}],raw:`Partial<{\r
  xs: number;\r
  sm: number;\r
  md: number;\r
  lg: number;\r
  xl: number;\r
}>`}]},description:"",defaultValue:{value:"2",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"10",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}}}};export{t as G};
