import{B as N}from"./BreadcrumbWidget-CxWnxSiO.js";import{Z as i,E as I}from"./globals-BpbGe8p9.js";import{G as P,_ as v,$ as F,J as L,p as M,L as U,M as w,I as x,j as R,a0 as Z,R as j}from"./widgetDescriptions-BWQxYL9a.js";import"./iframe-CTDlrwV_.js";import"./preload-helper-Dp1pzeXC.js";import"./BreadcrumbPresentation-DYwfFh6X.js";import"./badge-BlGAMJ8n.js";import"./inner_text-Dughc4p9.js";const{expect:G,waitFor:J,within:K}=__STORYBOOK_MODULE_TEST__,Q={...R,...x,...w,...U,...M,...L,...F,...v,...P},V={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",colorFirst:"",colorSecond:"",parameter:"collection=nfdi4health",onNavigateToOntology:"Console message"},Y={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:i,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"},$={api:I,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},k={api:I,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},q={iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:i,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"},z={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:i,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health",colorFirst:"red",colorSecond:"grey"},H={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:i,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health",colorFirst:"#eced8e",colorSecond:"#8eaeed",className:"custom-breadcrumb-style"},r=async({canvasElement:_})=>{const D=K(_);await J(async()=>{const E=D.getByTestId("breadcrumb");await G(E).toBeInTheDocument()},{timeout:3e3})},ir={title:"Additional Entity Metadata/BreadcrumbWidget",component:N,parameters:{layout:"centered",docs:{source:{transform:j},description:{component:Z}}},argTypes:Q,args:V},e={args:Y,play:r},o={args:$,play:r},t={args:k,play:r},a={args:q,play:r},s={args:z,play:r},n={args:H,play:r};var c,l,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: BreadcrumbWidgetDefaultArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,p,d;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var y,u,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var T,A,B;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: ErrorBreadcrumbWidgetArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(B=(A=a.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var f,S,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: CustomColorsArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var O,W,h;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: CustomStyleArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(h=(W=n.parameters)==null?void 0:W.docs)==null?void 0:h.source}}};const cr=["BreadcrumbWidgetDefault","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget","CustomColors","CustomStyle"];export{e as BreadcrumbWidgetDefault,s as CustomColors,n as CustomStyle,t as DefiningOntologyUnavailable,a as ErrorBreadcrumbWidget,o as SelectingDefiningOntology,cr as __namedExportsOrder,ir as default};
