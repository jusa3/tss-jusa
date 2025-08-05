import{T as F}from"./TabWidget-D4cH-N0T.js";import{Z as U,a as x,E as e}from"./globals-BpbGe8p9.js";import{ac as c,F as M,G as k,H as G,L as K,p as Z,I as Y,M as j,j as Q,ao as X}from"./widgetDescriptions-BWQxYL9a.js";import"./iframe-CTDlrwV_.js";import"./preload-helper-Dp1pzeXC.js";import"./TabPresentation-DOmv7UtN.js";import"./AlternativeNameTabPresentation-D18jth9c.js";import"./flex_group-DyKh1Yxe.js";import"./flex_item-MEW8UGuL.js";import"./CrossRefTabPresentation-D9yutiKd.js";import"./OntologyInfoWidget-D7GnJ4Oo.js";import"./StructureRendering-D__qCoUh.js";import"./icon_tip-Drht4bM1.js";import"./GraphViewWidget-Do7IHi24.js";import"./popover-DqYCjRw-.js";import"./focus_trap-R_Q-U58I.js";import"./screen_reader_only-BiUC_Qez.js";import"./button_empty-zqydArgs.js";import"./TermDepictionWidget-CktdhXuI.js";import"./inner_text-Dughc4p9.js";const{expect:q,waitFor:z,within:J}=__STORYBOOK_MODULE_TEST__,$={...Q,...j,...Y,...Z,...K,...G,...k,...M},aa={api:"",parameter:"collection=nfdi4health",useLegacy:!0,ontologyId:"",entityType:"term",iri:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,hierarchyPreferredRoots:c.PREFERRED_ROOTS,hierarchyKeepExpansionStates:c.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:c.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},ea={api:U,ontologyId:"hp",iri:"http://purl.obolibrary.org/obo/HP_0000819",useLegacy:!0},ra={api:x,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},oa={api:e,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!0},ta={api:e,ontologyId:"efo",iri:"http://www.ebi.ac.uk/efo/EFO_0009644",useLegacy:!1,parameter:""},sa={api:e,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},ia={api:e,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},na={api:e,ontologyId:"ncbitaxon",iri:"http://purl.obolibrary.org/obo/NCBITaxon_2489341",useLegacy:!1,parameter:""},ga={api:e,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!0,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1},a=async({canvasElement:H})=>{const B=J(H);await z(async()=>{const C=B.getByTestId("tab");await q(C).toBeInTheDocument()},{timeout:3e3})},Pa={title:"Additional Entity Metadata/TabWidget",component:F,parameters:{layout:"centered",docs:{description:{component:X}}},argTypes:$,args:aa},r={args:ea,play:a},o={name:"OLS3",args:ra,play:a},t={name:"OLS4 V1",args:oa,play:a},s={name:"OLS4 V2",args:ta,play:a},i={args:sa,play:a},n={args:ia,play:a},g={args:na,play:a},p={args:ga,play:a};var m,l,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: DefaultArgs,
  play: commonTabWidgetPlay
}`,...(y=(l=r.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var d,T,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "OLS3",
  args: TabWidgetOLS3Args,
  play: commonTabWidgetPlay
}`,...(b=(T=o.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var u,S,O;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "OLS4 V1",
  args: TabWidgetOLS4V1Args,
  play: commonTabWidgetPlay
}`,...(O=(S=t.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var A,L,f;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "OLS4 V2",
  args: TabWidgetOLS4V2Args,
  play: commonTabWidgetPlay
}`,...(f=(L=s.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var W,_,I;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonTabWidgetPlay
}`,...(I=(_=i.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var E,h,D;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonTabWidgetPlay
}`,...(D=(h=n.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var P,N,w;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: TabWidgetLargeArgs,
  play: commonTabWidgetPlay
}`,...(w=(N=g.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var V,v,R;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: HiddenTabsArgs,
  play: commonTabWidgetPlay
}`,...(R=(v=p.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};const Na=["Default","TabWidgetOLS3","TabWidgetOLS4V1","TabWidgetOLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","TabWidgetLarge","HiddenTabs"];export{r as Default,n as DefiningOntologyUnavailable,p as HiddenTabs,i as SelectingDefiningOntology,g as TabWidgetLarge,o as TabWidgetOLS3,t as TabWidgetOLS4V1,s as TabWidgetOLS4V2,Na as __namedExportsOrder,Pa as default};
