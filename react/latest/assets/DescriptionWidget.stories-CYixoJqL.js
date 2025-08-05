import{D as O}from"./DescriptionWidget-B1Tgc23L.js";import{a as _,a1 as S,p as W,J as E,I,M as b,a2 as P,a3 as v,j as x,a4 as B}from"./widgetDescriptions-BWQxYL9a.js";import{Z as F,E as i}from"./globals-BpbGe8p9.js";import"./iframe-CTDlrwV_.js";import"./preload-helper-Dp1pzeXC.js";import"./DescriptionPresentation-DkgG-sbt.js";const{expect:M,waitFor:N,within:U}=__STORYBOOK_MODULE_TEST__,w={...x,...v,...P,...b,...I,...E,...W,...S,..._},L={api:"",iri:"",useLegacy:!0,ontologyId:"",thingType:"term",descText:"",color:"",className:"",parameter:"collection=nfdi4health"},C={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:F,ontologyId:"ncit",thingType:"term",parameter:"collection=nfdi4health"},Q={api:i,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""},V={api:i,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""},Z={api:i,iri:"http://identifiers.org/uniprot/Q9VA",thingType:"term",parameter:""},a=async({canvasElement:u})=>{const h=U(u);await N(async()=>{const f=h.getByTestId("description");await M(f).toBeInTheDocument()},{timeout:3e3})},q={title:"Entity Metadata/DescriptionWidget",component:O,parameters:{layout:"centered",docs:{description:{component:B}}},argTypes:w,args:L},e={args:C,play:a},r={args:Q,play:a},t={args:V,play:a},o={args:Z,play:a};var n,s,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: DescriptionWidget1Args,
  play: commonDescriptionWidgetPlay
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,g,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonDescriptionWidgetPlay
}`,...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var m,y,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonDescriptionWidgetPlay
}`,...(d=(y=t.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};var D,T,A;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: ErrorFetchingDataArgs,
  play: commonDescriptionWidgetPlay
}`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const z=["DescriptionWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorFetchingData"];export{t as DefiningOntologyUnavailable,e as DescriptionWidget1,o as ErrorFetchingData,r as SelectingDefiningOntology,z as __namedExportsOrder,q as default};
