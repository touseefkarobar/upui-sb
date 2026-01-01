import{A as G}from"./index-q50-C4yz.js";import"./iframe-DCskRTGa.js";import"./index-BQaOjih7.js";const z={title:"PAC Universal Plugin UI/Primitive/Avatar Group",component:G,tags:["autodocs"],parameters:{docs:{description:{component:"AvatarGroup displays multiple avatars in either a list or cluster layout. It supports showing a count for additional users beyond the displayed limit."}}},argTypes:{variant:{control:{type:"select"},options:["list","cluster"],description:"Display variant for the avatar group",table:{defaultValue:{summary:"list"}}},avatars:{description:"Array of avatar objects with src, alt, and userName properties",control:{type:"object"}}}},a=[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"},{src:"https://i.pravatar.cc/150?img=2",alt:"User 2",userName:"Jane Smith"},{src:"https://i.pravatar.cc/150?img=3",alt:"User 3",userName:"Bob Wilson"},{src:"https://i.pravatar.cc/150?img=4",alt:"User 4",userName:"Alice Brown"},{src:"https://i.pravatar.cc/150?img=5",alt:"User 5",userName:"Charlie Davis"}],r={args:{avatars:a,variant:"list"}},s={args:{avatars:a.slice(0,3),variant:"list"}},e={args:{avatars:[...a,{src:"https://i.pravatar.cc/150?img=6",alt:"User 6",userName:"David Lee"},{src:"https://i.pravatar.cc/150?img=7",alt:"User 7",userName:"Eva Martinez"},{src:"https://i.pravatar.cc/150?img=8",alt:"User 8",userName:"Frank Miller"}],variant:"list"}},t={args:{avatars:a.slice(0,1),variant:"cluster"}},n={args:{avatars:a.slice(0,2),variant:"cluster"}},i={args:{avatars:a.slice(0,3),variant:"cluster"}},c={args:{avatars:a.slice(0,4),variant:"cluster"}},o={args:{avatars:[{userName:"John Doe"},{userName:"Jane Smith"},{userName:"Bob Wilson"},{userName:"Alice Brown"},{userName:"Charlie Davis"}],variant:"list"}},l={args:{avatars:[{src:"https://i.pravatar.cc/150?img=1",alt:"User 1",userName:"John Doe"},{userName:"Jane Smith"},{src:"https://i.pravatar.cc/150?img=3",alt:"User 3",userName:"Bob Wilson"},{userName:"Alice Brown"}],variant:"list"}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    avatars: sampleAvatars,
    variant: "list"
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,g,d;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    avatars: sampleAvatars.slice(0, 3),
    variant: "list"
  }
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var h,N,A;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    avatars: [...sampleAvatars, {
      src: "https://i.pravatar.cc/150?img=6",
      alt: "User 6",
      userName: "David Lee"
    }, {
      src: "https://i.pravatar.cc/150?img=7",
      alt: "User 7",
      userName: "Eva Martinez"
    }, {
      src: "https://i.pravatar.cc/150?img=8",
      alt: "User 8",
      userName: "Frank Miller"
    }],
    variant: "list"
  }
}`,...(A=(N=e.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var U,S,C;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    avatars: sampleAvatars.slice(0, 1),
    variant: "cluster"
  }
}`,...(C=(S=t.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var y,b,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    avatars: sampleAvatars.slice(0, 2),
    variant: "cluster"
  }
}`,...(D=(b=n.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var W,B,J;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    avatars: sampleAvatars.slice(0, 3),
    variant: "cluster"
  }
}`,...(J=(B=i.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var w,L,M;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    avatars: sampleAvatars.slice(0, 4),
    variant: "cluster"
  }
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var T,f,F;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    avatars: [{
      userName: "John Doe"
    }, {
      userName: "Jane Smith"
    }, {
      userName: "Bob Wilson"
    }, {
      userName: "Alice Brown"
    }, {
      userName: "Charlie Davis"
    }],
    variant: "list"
  }
}`,...(F=(f=o.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var k,x,E;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    avatars: [{
      src: "https://i.pravatar.cc/150?img=1",
      alt: "User 1",
      userName: "John Doe"
    }, {
      userName: "Jane Smith"
    }, {
      src: "https://i.pravatar.cc/150?img=3",
      alt: "User 3",
      userName: "Bob Wilson"
    }, {
      userName: "Alice Brown"
    }],
    variant: "list"
  }
}`,...(E=(x=l.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const I=["ListVariant","ListWithThreeUsers","ListWithManyUsers","ClusterSingleAvatar","ClusterTwoAvatars","ClusterThreeAvatars","ClusterFourAvatars","WithFallbackNames","MixedContent"];export{c as ClusterFourAvatars,t as ClusterSingleAvatar,i as ClusterThreeAvatars,n as ClusterTwoAvatars,r as ListVariant,e as ListWithManyUsers,s as ListWithThreeUsers,l as MixedContent,o as WithFallbackNames,I as __namedExportsOrder,z as default};
