import{R as a,j as o}from"./iframe-Do5aB-PF.js";const c="_grid_163o3_1",n={grid:c,"grid-cols-xs":"_grid-cols-xs_163o3_8","grid-cols-sm":"_grid-cols-sm_163o3_13","grid-cols-md":"_grid-cols-md_163o3_18","grid-cols-lg":"_grid-cols-lg_163o3_23","grid-cols-xl":"_grid-cols-xl_163o3_28"},l=a.memo(a.forwardRef(({children:i,columns:e=2,gap:m=10,className:d="",style:u={}},t)=>{const r=[];let s={};return typeof e=="number"?(s["--cols-xs"]=e,r.push(n["grid-cols-xs"])):(e.xs&&(s["--cols-xs"]=e.xs,r.push(n["grid-cols-xs"])),e.sm&&(s["--cols-sm"]=e.sm,r.push(n["grid-cols-sm"])),e.md&&(s["--cols-md"]=e.md,r.push(n["grid-cols-md"])),e.lg&&(s["--cols-lg"]=e.lg,r.push(n["grid-cols-lg"])),e.xl&&(s["--cols-xl"]=e.xl,r.push(n["grid-cols-xl"]))),o.jsx("div",{ref:t,className:[n.grid,...r,d].join(" ").trim(),style:{...s,gap:m,...u},children:i})}));l.displayName="Grid";l.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},columns:{required:!1,tsType:{name:"union",raw:`| number
| Partial<{
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  }>`,elements:[{name:"number"},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}`,signature:{properties:[{key:"xs",value:{name:"number",required:!0}},{key:"sm",value:{name:"number",required:!0}},{key:"md",value:{name:"number",required:!0}},{key:"lg",value:{name:"number",required:!0}},{key:"xl",value:{name:"number",required:!0}}]}}],raw:`Partial<{
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}>`}]},description:"",defaultValue:{value:"2",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"10",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"",defaultValue:{value:"{}",computed:!1}}}};export{l as G};
