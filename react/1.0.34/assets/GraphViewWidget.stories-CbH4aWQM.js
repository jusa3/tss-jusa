import{G as E}from"./GraphViewWidget-Do7IHi24.js";import{E as s,T as u}from"./globals-BpbGe8p9.js";import{S as A,T,I as _,j as k,U as V}from"./widgetDescriptions-BWQxYL9a.js";import"./iframe-CTDlrwV_.js";import"./preload-helper-Dp1pzeXC.js";import"./popover-DqYCjRw-.js";import"./focus_trap-R_Q-U58I.js";import"./screen_reader_only-BiUC_Qez.js";import"./button_empty-zqydArgs.js";const{expect:x,waitFor:C,within:R}=__STORYBOOK_MODULE_TEST__,B={...k,..._,...T,...A},O={api:s,iri:"",ontologyId:"",rootWalk:!1},P={api:u,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!1},S={api:u,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!0},f={api:s,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1},D={api:s,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0},t=async({canvasElement:G})=>{const w=R(G);await C(async()=>{const I=w.getByTestId("graph-view");await x(I).toBeInTheDocument()},{timeout:3e3})},M={title:"Hierarchy and Graph/GraphViewWidget",component:E,parameters:{layout:"centered",docs:{description:{component:V}}},argTypes:B,args:O},r={args:P,play:t},o={args:S,play:t},a={args:f,play:t},e={args:D,play:t};var i,p,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: GraphViewWidgetExampleArgs,
  play: commonGraphViewWidgetPlay
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var n,l,g;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: RootWalkGraphExampleArgs,
  play: commonGraphViewWidgetPlay
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var m,d,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: ChebiWaterArgs,
  play: commonGraphViewWidgetPlay
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var y,W,b;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: ChebiWaterRootWalkArgs,
  play: commonGraphViewWidgetPlay
}`,...(b=(W=e.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};const Y=["GraphViewWidgetExample","RootWalkGraphExample","ChebiWater","ChebiWaterRootWalk"];export{a as ChebiWater,e as ChebiWaterRootWalk,r as GraphViewWidgetExample,o as RootWalkGraphExample,Y as __namedExportsOrder,M as default};
