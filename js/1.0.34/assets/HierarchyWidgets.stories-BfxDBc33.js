import{al as a,G as J,at as X,au as Z,av as Q,aw as ee,I as re,J as oe,F as ae,B as se,C as te,ax as ie,ay as ne,v as ce,az as ye}from"./storyArgs-D6apI4ht.js";import{E as o,F as pe,a as le}from"./globals-BpbGe8p9.js";import"./index-CpjN40be.js";import"./index-CossuYGe.js";import"./preload-helper-Dp1pzeXC.js";const{expect:ge,waitFor:de,within:me}=__STORYBOOK_MODULE_TEST__,ue={...ce,...ne,...ie,...te,...se,...ae,...oe,...re,...ee,...Q,...Z,...X,...J},he={apiUrl:"",backendType:"",apiKey:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",iri:"",ontologyId:"",entityType:"term",includeObsoleteEntities:a.INCLUDE_OBSOLETE_ENTITIES,preferredRoots:a.PREFERRED_ROOTS,keepExpansionStates:a.KEEP_EXPANSION_STATES,showSiblingsOnInit:a.SHOW_SIBLINGS_ON_INIT,useLegacy:a.USE_LEGACY},Te={apiUrl:o,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo"},Ie={apiUrl:o,backendType:"ols",iri:"http://purl.obolibrary.org/obo/IAO_0000120",entityType:"individual",ontologyId:"bco"},be={apiUrl:o,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",preferredRoots:!0},He={apiUrl:o,backendType:"ols",iri:"",entityType:"class",ontologyId:"uberon",includeObsoleteEntities:!0,useLegacy:!0},Se={apiUrl:o,backendType:"ols",iri:"",entityType:"property",ontologyId:"bco",useLegacy:!0},Ae={apiUrl:o,backendType:"ols",iri:"",entityType:"individual",ontologyId:"bco"},Oe={apiUrl:o,backendType:"ols",iri:"http://purl.obolibrary.org/obo/UBERON_2001747",entityType:"class",ontologyId:"uberon"},Ee={apiUrl:pe,backendType:"skosmos",iri:"http://www.yso.fi/onto/yso/p864",ontologyId:"yso"},_e={apiUrl:"https://concepts.sagepub.com/vocabularies/rest/v1/",backendType:"skosmos",iri:"https://concepts.sagepub.com/social-science/concept/economic_forecasting",ontologyId:"social-science"},Pe={apiUrl:"https://data.biodivportal.gfbio.org",backendType:"ontoportal",iri:"http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila",ontologyId:"IOC",entityType:"class",apiKey:""},ke={apiUrl:le,backendType:"ols",iri:"http://www.ebi.ac.uk/efo/EFO_0000400",entityType:"class",ontologyId:"efo",useLegacy:!0},r=async({canvasElement:e})=>{const s=me(e);await de(async()=>{const z=s.getByTestId("hierarchy");await ge(z).toBeInTheDocument()},{timeout:3e3})};let ve=0;function Re(){return ve++}const We={title:"Hierarchy and Graph/HierarchyWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:ye}}},render:e=>{const s=Re();return`        
<div id="hierarchy_semlookp_container_${s}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createHierarchy(
    {
        apiUrl:"${e.apiUrl}",
        apiKey:"${e.apiKey}",
        backendType:"${e.backendType}",
        iri:"${e.iri}",
        entityType:"${e.entityType}",
        ontologyId:"${e.ontologyId}",
        includeObsoleteEntities:${e.includeObsoleteEntities},
        useLegacy:${e.useLegacy},
        preferredRoots:${e.preferredRoots},
        keepExpansionStates:${e.keepExpansionStates},
        showSiblingsOnInit:${e.showSiblingsOnInit},
        onNavigateToEntity:${e.onNavigateToEntity},
        onNavigateToOntology:${e.onNavigateToOntology}
    },
    document.querySelector('#hierarchy_semlookp_container_${s}')
)
<\/script>
        `},argTypes:ue,args:he},t={args:Te,play:r},i={args:Ie,play:r},n={args:be,play:r},c={args:He,play:r},y={args:Se,play:r},p={args:Ae,play:r},l={args:Oe,play:r},g={args:Ee,play:r},d={args:_e,play:r},m={args:Pe,play:r},u={args:ke,play:r};var h,T,I;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: ClassHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(I=(T=t.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var b,H,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: IndividualHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(S=(H=i.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var A,O,E;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: PreferredRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(E=(O=n.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var _,P,k;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: IncludeObsoleteEntitiesArgs,
  play: commonHierarchyWidgetPlay
}`,...(k=(P=c.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var v,R,L;y.parameters={...y.parameters,docs:{...(v=y.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: PropertyRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(L=(R=y.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var f,N,w;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: IndividualRootsArgs,
  play: commonHierarchyWidgetPlay
}`,...(w=(N=p.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var U,W,$;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: LargeHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...($=(W=l.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var C,D,x;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: SkosHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(x=(D=g.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var B,F,K;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: SagePubHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(K=(F=d.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var G,Y,M;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: OntoportalHierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(M=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};var V,j,q;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: OLS3HierarchyArgs,
  play: commonHierarchyWidgetPlay
}`,...(q=(j=u.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const $e=["ClassHierarchy","IndividualHierarchy","PreferredRoots","IncludeObsoleteEntities","PropertyRoots","IndividualRoots","LargeHierarchy","SkosHierarchy","SagePubHierarchy","OntoportalHierarchy","OLS3Hierarchy"];export{t as ClassHierarchy,c as IncludeObsoleteEntities,i as IndividualHierarchy,p as IndividualRoots,l as LargeHierarchy,u as OLS3Hierarchy,m as OntoportalHierarchy,n as PreferredRoots,y as PropertyRoots,d as SagePubHierarchy,g as SkosHierarchy,$e as __namedExportsOrder,We as default};
