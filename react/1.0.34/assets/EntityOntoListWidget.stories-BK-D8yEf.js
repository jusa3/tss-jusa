import{E as _}from"./EntityOntoListWidget-Cp_92V0P.js";import{E as s}from"./globals-BpbGe8p9.js";import{G as w,J as v,p as I,L as S,M as f,I as x,j as N,a6 as W,R as D}from"./widgetDescriptions-BWQxYL9a.js";import"./iframe-CTDlrwV_.js";import"./preload-helper-Dp1pzeXC.js";import"./EntityOntoListPresentation-CQ2vfsq5.js";const{expect:F,waitFor:P,within:b}=__STORYBOOK_MODULE_TEST__,h={...N,...x,...f,...S,...I,...v,...w},M={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"term",parameter:"",onNavigateToOntology:"Console message"},B={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:s,entityType:"term",ontologyId:"efo"},k={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:s,ontologyId:"ons"},R={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:s,entityType:"term",ontologyId:"efo",useLegacy:!0},j={iri:"http://purl.obolibrary.org/obo/HP_0000819",api:s,ontologyId:"hp"},r=async({canvasElement:E})=>{const T=b(E);await P(async()=>{const L=T.getByTestId("entity-onto-list");await F(L).toBeInTheDocument()},{timeout:3e3})},Y={title:"Additional Entity Metadata/EntityOntoListWidget",component:_,parameters:{layout:"centered",docs:{source:{transform:D},description:{component:W}}},argTypes:h,args:M},t={args:B,play:r},e={args:k,play:r},o={args:R,play:r},a={args:j,play:r};var i,n,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: v2ApiEFOArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,y,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: v2ApiONSArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(g=(y=e.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var m,l,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: legacyApiArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var A,O,u;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: exceedsMaxDisplayArgs,
  play: commonEntityOntoListWidgetPlay
}`,...(u=(O=a.parameters)==null?void 0:O.docs)==null?void 0:u.source}}};const q=["v2ApiEFO","v2ApiONS","legacyApi","exceedsMaxDisplay"];export{q as __namedExportsOrder,Y as default,a as exceedsMaxDisplay,o as legacyApi,t as v2ApiEFO,e as v2ApiONS};
