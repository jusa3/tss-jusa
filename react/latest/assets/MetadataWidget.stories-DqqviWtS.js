import{M as x}from"./MetadataWidget-hTGVAV11.js";import{Z as G,a as K,E as e}from"./globals-BpbGe8p9.js";import{ac as c,J as Z,p as Y,F as j,G as J,H as Q,M as X,L as q,I as z,j as $,ad as aa,R as ea}from"./widgetDescriptions-BWQxYL9a.js";import"./iframe-CTDlrwV_.js";import"./preload-helper-Dp1pzeXC.js";import"./IriWidget-BfA4Fktc.js";import"./link-BfhSDt6b.js";import"./screen_reader_only-BiUC_Qez.js";import"./button_icon-DPwDB7Me.js";import"./flex_item-MEW8UGuL.js";import"./BreadcrumbPresentation-DYwfFh6X.js";import"./badge-BlGAMJ8n.js";import"./inner_text-Dughc4p9.js";import"./TabPresentation-DOmv7UtN.js";import"./AlternativeNameTabPresentation-D18jth9c.js";import"./flex_group-DyKh1Yxe.js";import"./CrossRefTabPresentation-D9yutiKd.js";import"./OntologyInfoWidget-D7GnJ4Oo.js";import"./StructureRendering-D__qCoUh.js";import"./icon_tip-Drht4bM1.js";import"./GraphViewWidget-Do7IHi24.js";import"./popover-DqYCjRw-.js";import"./focus_trap-R_Q-U58I.js";import"./button_empty-zqydArgs.js";import"./TermDepictionWidget-CktdhXuI.js";import"./DescriptionPresentation-DkgG-sbt.js";import"./TitlePresentation-CBIzTzp5.js";import"./EntityOntoListPresentation-CQ2vfsq5.js";import"./EntityDefinedByPresentation-BrS9s1nS.js";const{expect:ra,waitFor:ta,within:oa}=__STORYBOOK_MODULE_TEST__,sa={...$,...z,...q,...X,...Q,...J,...j,...Y,...Z},ia={api:"",useLegacy:!0,ontologyId:"",entityType:"term",iri:"",termLink:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,graphViewTab:!0,termDepictionTab:!0,hierarchyPreferredRoots:c.PREFERRED_ROOTS,hierarchyKeepExpansionStates:c.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:c.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message",parameter:""},na={api:G,ontologyId:"uberon",iri:"http://purl.obolibrary.org/obo/UBERON_0001443",entityType:"term"},pa={api:K,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"},ga={api:e,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"},ma={api:e,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:""},ca={api:e,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},la={api:e,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},ya={api:e,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo"},da={api:e,ontologyId:"uberon",iri:"http://purl.obolibrary.org/obo/UBERON_0001443",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!1,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1,graphViewTab:!1,termDepictionTab:!1},Ta={api:e,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo",termLink:"https://www.ebi.ac.uk/ols4/ontologies/efo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FHP_0000819"},a=async({canvasElement:U})=>{const F=oa(U);await ta(async()=>{const k=F.getByTestId("metadata");await ra(k).toBeInTheDocument()},{timeout:3e3})},Za={title:"Entity Metadata/MetadataWidget",component:x,parameters:{layout:"centered",docs:{source:{transform:ea},description:{component:aa}}},argTypes:sa,args:ia},r={name:"Metadata Widget",args:na,play:a},t={name:"OLS3",args:pa,play:a},o={name:"OLS4 V1",args:ga,play:a},s={name:"OLS4 V2",args:ma,play:a},i={args:ca,play:a},n={args:la,play:a},p={args:ya,play:a},g={args:da,play:a},m={args:Ta,play:a};var l,y,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Metadata Widget",
  args: MetadataWidget1Args,
  play: commonMetadataWidgetPlay
}`,...(d=(y=r.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};var T,u,b;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "OLS3",
  args: OLS3Args,
  play: commonMetadataWidgetPlay
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var A,S,O;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "OLS4 V1",
  args: OLS4V1Args,
  play: commonMetadataWidgetPlay
}`,...(O=(S=o.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var I,L,f;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "OLS4 V2",
  args: OLS4V2Args,
  play: commonMetadataWidgetPlay
}`,...(f=(L=s.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var _,M,h;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonMetadataWidgetPlay
}`,...(h=(M=i.parameters)==null?void 0:M.docs)==null?void 0:h.source}}};var E,W,D;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonMetadataWidgetPlay
}`,...(D=(W=n.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var N,P,V;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: DefinedByAlsoAppearsInWidgetsArgs,
  play: commonMetadataWidgetPlay
}`,...(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var B,R,v;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: HiddenTabsArgs,
  play: commonMetadataWidgetPlay
}`,...(v=(R=g.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var H,w,C;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: TermAsLinkArgs,
  play: commonMetadataWidgetPlay
}`,...(C=(w=m.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const Ya=["MetadataWidget1","OLS3","OLS4V1","OLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","DefinedByAlsoAppearsInWidgets","HiddenTabs","TermAsLink"];export{p as DefinedByAlsoAppearsInWidgets,n as DefiningOntologyUnavailable,g as HiddenTabs,r as MetadataWidget1,t as OLS3,o as OLS4V1,s as OLS4V2,i as SelectingDefiningOntology,m as TermAsLink,Ya as __namedExportsOrder,Za as default};
