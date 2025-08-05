import{ac as a,J as q,ag as z,ah as Q,ai as $,aj as rr,L as er,M as ar,I as or,G as sr,H as tr,ak as ir,al as cr,j as nr,am as yr,R as pr,an as lr}from"./widgetDescriptions-BWQxYL9a.js";import{E as e,F as gr,a as dr}from"./globals-BpbGe8p9.js";import"./iframe-CTDlrwV_.js";import"./preload-helper-Dp1pzeXC.js";const{expect:mr,waitFor:ur,within:hr}=__STORYBOOK_MODULE_TEST__,Tr={...nr,...cr,...ir,...tr,...sr,...or,...ar,...er,...rr,...$,...Q,...z,...q},Hr={apiUrl:"",backendType:"",apiKey:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"term",includeObsoleteEntities:a.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:a.PREFERRED_ROOTS,keepExpansionStates:a.KEEP_EXPANSION_STATES,showSiblingsOnInit:a.SHOW_SIBLINGS_ON_INIT,useLegacy:a.USE_LEGACY},Ir={apiUrl:e,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"},br={apiUrl:e,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"},Ar={apiUrl:e,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0},Sr={apiUrl:e,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0},Or={apiUrl:e,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0},Er={apiUrl:e,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"},_r={apiUrl:e,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"},Pr={apiUrl:gr,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"},kr={apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"},Rr={apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""},Lr={apiUrl:dr,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo",useLegacy:!0},r=async({canvasElement:J})=>{const X=hr(J);await ur(async()=>{const Z=X.getByTestId("hierarchy");await mr(Z).toBeInTheDocument()},{timeout:3e3})},Wr={title:"Hierarchy and Graph/HierarchyWidget",component:lr,parameters:{layout:"centered",docs:{source:{transform:pr},description:{component:yr}}},argTypes:Tr,args:Hr},o={args:Ir,play:r},s={args:br,play:r},t={args:Ar,play:r},i={args:Sr,play:r},c={args:Or,play:r},n={args:Er,play:r},y={args:_r,play:r},p={args:Pr,play:r},l={args:kr,play:r},g={args:Rr,play:r},d={args:Lr,play:r};var m,u,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: ClassHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var T,H,I;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: IndividualHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(I=(H=s.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var b,A,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: PreferredRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(S=(A=t.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};var O,E,_;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: IncludeObsoleteEntitiesArgs,
  play: commonHierarchyWidgetPlay
}`,...(_=(E=i.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var P,k,R;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: PropertyRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(R=(k=c.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var L,f,v;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: IndividualRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var N,U,W;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: LargeHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(W=(U=y.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var w,C,D;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: SkosHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(D=(C=p.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var B,F,x;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: SagePubHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(x=(F=l.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var G,K,M;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: OntoportalHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(M=(K=g.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Y,j,V;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: OLS3HierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(V=(j=d.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};const wr=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy"];export{o as ClassHierarchy,i as IncludeObsoleteEntities,s as IndividualHierarchy,n as IndividualRoots,y as LargeHierarchy,d as OLS3Hierarchy,g as OntoportalHierarchy,t as PreferredRoots,c as PropertyRoots,l as SagePubHierarchy,p as SkosHierarchy,wr as __namedExportsOrder,Wr as default};
