import{Z as fe,a as Oe,E as l}from"./globals-BpbGe8p9.js";import{al as D,G as Se,p as Ie,z as Ne,B as Ee,C as Ae,J as Le,I as xe,F as _e,v as De,Q as ve,f as je,g as we,O as We,h as Pe,y as Me,x as $e,R as Re,am as Be,an as Ve,ao as ke,ap as Ce}from"./storyArgs-D6apI4ht.js";import{j as t,c as Fe}from"./index-CossuYGe.js";import{I as He}from"./IriWidget-qI8ub-xL.js";import{B as Ke}from"./BreadcrumbPresentation-ByOvu-lU.js";import{T as Ue,c as Qe}from"./index-Bay4zPsg.js";import{D as Ge}from"./DescriptionWidget-D8nseTUt.js";import{T as M,c as Ze}from"./index-x1c1tHO2.js";import{E as qe,c as Je}from"./index-CpRtMJ_p.js";import{E as Ye,c as ze}from"./index-DvK3Il1G.js";/* empty css                             */import{E as v}from"./flex_group-B7Kf0qQe.js";import{E as c}from"./flex_item-NGRFq6S7.js";import{E as Xe}from"./link-DU2TZsN3.js";import{c as et}from"./index-C-59gUnl.js";import{c as tt}from"./index-Dv4Njow7.js";import{c as at}from"./index-CFrD0vbA.js";import{c as ot}from"./index-9nXqWKww.js";import{c as rt}from"./index-BPRkn2JT.js";import{c as it}from"./index-CpjN40be.js";import"./preload-helper-Dp1pzeXC.js";import"./button_icon-CtGZnNxF.js";import"./badge-SQFiMWca.js";import"./inner_text-BxYIvL8Y.js";import"./OntologyInfoWidget-Bz71syTX.js";import"./StructureRendering-s9on-pGJ.js";import"./icon_tip-DknG74Nq.js";/* empty css                                 */import"./GraphViewWidget-DErkUdKk.js";import"./ts4nfdiGraphStyle-BNKMM8Km.js";import"./popover-B_yoE_Z0.js";import"./focus_trap-Bu4tvRFm.js";import"./screen_reader_only-4z6d0yFa.js";import"./button_empty-26YC--8U.js";import"./TermDepictionWidget-PQBgL9zs.js";import"./model-viewer-aRaplcbF.js";/* empty css                        *//* empty css                          *//* empty css                                   *//* empty css                                    */import"./BreadcrumbWidget-DZaFGhLP.js";/* empty css                               *//* empty css                             */const{expect:nt,waitFor:st,within:ct}=__STORYBOOK_MODULE_TEST__,lt={...De,..._e,...xe,...Le,...Ae,...Ee,...Ne,...Ie,...Se},mt={api:"",useLegacy:!0,ontologyId:"",entityType:"term",iri:"",termLink:"",altNamesTab:!0,hierarchyTab:!0,crossRefTab:!0,terminologyInfoTab:!0,graphViewTab:!0,termDepictionTab:!0,hierarchyPreferredRoots:D.PREFERRED_ROOTS,hierarchyKeepExpansionStates:D.KEEP_EXPANSION_STATES,hierarchyShowSiblingsOnInit:D.SHOW_SIBLINGS_ON_INIT,onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message",parameter:""},gt={api:fe,ontologyId:"uberon",iri:"http://purl.obolibrary.org/obo/UBERON_0001443",entityType:"term"},yt={api:Oe,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"},dt={api:l,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term"},pt={api:l,ontologyId:"ncit",iri:"http://purl.obolibrary.org/obo/NCIT_C2984",entityType:"term",useLegacy:!1,parameter:""},Tt={api:l,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},bt={api:l,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},ht={api:l,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo"},ut={api:l,ontologyId:"uberon",iri:"http://purl.obolibrary.org/obo/UBERON_0001443",entityType:"term",useLegacy:!1,parameter:"",altNamesTab:!1,hierarchyTab:!1,crossRefTab:!1,terminologyInfoTab:!1,graphViewTab:!1,termDepictionTab:!1},ft={api:l,iri:"http://purl.obolibrary.org/obo/HP_0000819",ontologyId:"efo",termLink:"https://www.ebi.ac.uk/ols4/ontologies/efo/classes/http%253A%252F%252Fpurl.obolibrary.org%252Fobo%252FHP_0000819"},n=async({canvasElement:e})=>{const o=ct(e);await st(async()=>{const i=o.getByTestId("metadata");await nt(i).toBeInTheDocument()},{timeout:3e3})};function Ot(e){const{iri:o,api:i,ontologyId:h,entityType:y,parameter:x,useLegacy:m,onNavigateToOntology:j,hierarchyTab:me,crossRefTab:ge,terminologyInfoTab:ye,graphViewTab:de,termDepictionTab:pe,altNamesTab:Te,termLink:w,className:W}=e,P=new We(i),s=W||"ts4nfdi-metadata-style",{data:_,isLoading:d,isSuccess:be,isError:he,error:p}=Pe(["metadata",i,x,y,o,h,m],async()=>{let a,T,g;if(m){const r=(await P.getEntityResponse(o,y,void 0,x,m))._embedded;a=Ve({_embedded:{[Object.keys(r)[0]]:ke(r[Object.keys(r)[0]],m,h)}}),T=r[Object.keys(r)[0]].map(b=>b.ontology_name),g=r[Object.keys(r)[0]].filter(b=>b.is_defining_ontology).map(b=>b.ontology_name)}else a=await P.getEntityObject(o,y,h,x,m),T=a.getAppearsIn(),g=a.getDefinedBy();return g=g.filter(r=>r!=a.getOntologyId()).sort(),T=T.filter(r=>r!=a.getOntologyId()&&!g.includes(r)).sort(),{entity:a,ontoList:T,definedBy:g}});function ue(a){return t.jsx("div",{className:s,"data-testid":"metadata",children:t.jsxs(v,{direction:"column",children:[t.jsx(c,{grow:!1,style:{maxWidth:600},children:w?t.jsx(Xe,{href:w,target:"_blank",external:!1,children:t.jsx(M,{title:a.entity.getLabel(),className:`${s}-title`,isLoading:d,error:p})}):t.jsx(M,{title:a.entity.getLabel(),className:`${s}-title`,isLoading:d,error:p})}),t.jsx(c,{grow:!1,children:t.jsx("span",{children:t.jsx(Ke,{onNavigateToOntology:e.onNavigateToOntology,ontologyId:h||a.entity.getOntologyId(),ontologyName:a.entity.getOntologyId(),shortForm:a.entity.getShortForm(),className:`${s}-breadcrumb`})})}),t.jsx(c,{children:t.jsx(v,{direction:"column",children:t.jsx(c,{children:t.jsx(v,{children:t.jsx(c,{grow:!1,style:{maxWidth:600},children:t.jsx(He,{iri:o,className:`${s}-iri`})})})})})}),t.jsx(c,{style:{maxWidth:600},children:t.jsx(Ge,{description:a.entity.getDescription(),className:`${s}-description`,isLoading:d,error:p})}),t.jsxs("div",{style:{margin:"0 12px 0",maxWidth:600},children:[t.jsx(qe,{iri:e.iri,label:a.entity.getLabel()||"",ontolist:a.ontoList,entityType:y||a.entity.getType(),onNavigateToOntology:j,className:`${s}-entity-onto-list`}),t.jsx(Ye,{iri:e.iri,ontolist:a.definedBy,label:a.entity.getLabel()||"",entityType:y||a.entity.getType(),onNavigateToOntology:j,className:`${s}-entity-defined-by`})]}),t.jsx(c,{children:t.jsx(Ue,{data:a.entity,isLoading:d,error:p,iri:o,entityType:e.entityType,api:i,ontologyId:e.ontologyId?e.ontologyId:a.entity.getOntologyId(),useLegacy:m,hierarchyTab:me,crossRefTab:ge,terminologyInfoTab:ye,termDepictionTab:pe,graphViewTab:de,altNamesTab:Te,hierarchyPreferredRoots:e.hierarchyPreferredRoots,hierarchyShowSiblingsOnInit:e.hierarchyShowSiblingsOnInit,hierarchyKeepExpansionStates:e.hierarchyKeepExpansionStates,onNavigateToEntity:e.onNavigateToEntity,onNavigateToOntology:e.onNavigateToOntology,onNavigateToDisambiguate:e.onNavigateToDisambiguate,className:W})})]})})}return t.jsxs(t.Fragment,{children:[d&&t.jsx(Me,{}),he&&t.jsx($e,{children:Re(p,"metadata")}),be&&_&&t.jsx(t.Fragment,{children:Be(_.entity)?ue(_):null})]})}function St(e){const o=new ve;return t.jsx(je,{colorMode:"light",globalStyles:!1,children:t.jsx(we,{client:o,children:t.jsx(Ot,{iri:e.iri,ontologyId:e.ontologyId,api:e.api,entityType:e.entityType,parameter:e.parameter,useLegacy:e.useLegacy,termLink:e.termLink,altNamesTab:e.altNamesTab,hierarchyTab:e.hierarchyTab,crossRefTab:e.crossRefTab,terminologyInfoTab:e.terminologyInfoTab,graphViewTab:e.graphViewTab,termDepictionTab:e.termDepictionTab,hierarchyPreferredRoots:e.hierarchyPreferredRoots,hierarchyShowSiblingsOnInit:e.hierarchyShowSiblingsOnInit,hierarchyKeepExpansionStates:e.hierarchyKeepExpansionStates,onNavigateToEntity:e.onNavigateToEntity,onNavigateToOntology:e.onNavigateToOntology,onNavigateToDisambiguate:e.onNavigateToDisambiguate,className:e.className})})})}const $=new WeakMap;function It(e,o){let i=$.get(o);i||(i=Fe.createRoot(o),$.set(o,i)),i.render(t.jsx(St,{...e}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createMetadata:It,createTab:Qe,createHierarchy:it,createCrossRefTab:rt,createAlternativeNameTab:ot,createBreadcrumb:et,createDescription:tt,createEntityDefinedBy:ze,createEntityOntoList:Je,createIri:at,createTitle:Ze};let Nt=0;function Et(){return Nt++}const pa={title:"Entity Metadata/MetadataWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:Ce}}},render:e=>{const o=Et();return`
<div id="metadata_widget_container_${o}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createMetadata(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy},
        termLink: "${e.termLink}",
        altNamesTab: ${e.altNamesTab},
        hierarchyTab: ${e.hierarchyTab},
        crossRefTab: ${e.crossRefTab},
        terminologyInfoTab: ${e.terminologyInfoTab},
        graphViewTab: ${e.graphViewTab},
        termDepictionTab: ${e.termDepictionTab},
        hierarchyPreferredRoots:${e.hierarchyPreferredRoots},
        hierarchyKeepExpansionStates:${e.hierarchyKeepExpansionStates},
        hierarchyShowSiblingsOnInit:${e.hierarchyShowSiblingsOnInit},
        onNavigateToEntity:${e.onNavigateToEntity},
        onNavigateToOntology:${e.onNavigateToOntology},
        onNavigateToDisambiguate:${e.onNavigateToDisambiguate},
        className:"${e.className}"
    },
    document.querySelector('#metadata_widget_container_${o}')
)
<\/script>
        `},argTypes:lt,args:mt},u={name:"Metadata Widget",args:gt,play:n},f={name:"OLS3",args:yt,play:n},O={name:"OLS4 V1",args:dt,play:n},S={name:"OLS4 V2",args:pt,play:n},I={args:Tt,play:n},N={args:bt,play:n},E={args:ht,play:n},A={name:"Hidden Tabs",args:ut,play:n},L={args:ft,play:n};var R,B,V;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Metadata Widget",
  args: MetadataWidget1Args,
  play: commonMetadataWidgetPlay
}`,...(V=(B=u.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var k,C,F;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "OLS3",
  args: OLS3Args,
  play: commonMetadataWidgetPlay
}`,...(F=(C=f.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var H,K,U;O.parameters={...O.parameters,docs:{...(H=O.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "OLS4 V1",
  args: OLS4V1Args,
  play: commonMetadataWidgetPlay
}`,...(U=(K=O.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Q,G,Z;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "OLS4 V2",
  args: OLS4V2Args,
  play: commonMetadataWidgetPlay
}`,...(Z=(G=S.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};var q,J,Y;I.parameters={...I.parameters,docs:{...(q=I.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonMetadataWidgetPlay
}`,...(Y=(J=I.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var z,X,ee;N.parameters={...N.parameters,docs:{...(z=N.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonMetadataWidgetPlay
}`,...(ee=(X=N.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var te,ae,oe;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: DefinedByAlsoAppearsInWidgetsArgs,
  play: commonMetadataWidgetPlay
}`,...(oe=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,ie,ne;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: "Hidden Tabs",
  args: HiddenTabsArgs,
  play: commonMetadataWidgetPlay
}`,...(ne=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var se,ce,le;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: TermAsLinkArgs,
  play: commonMetadataWidgetPlay
}`,...(le=(ce=L.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const Ta=["MetadataWidget1","OLS3","OLS4V1","OLS4V2","SelectingDefiningOntology","DefiningOntologyUnavailable","DefinedByAlsoAppearsInWidgets","HiddenTabs","TermAsLink"];export{E as DefinedByAlsoAppearsInWidgets,N as DefiningOntologyUnavailable,A as HiddenTabs,u as MetadataWidget1,f as OLS3,O as OLS4V1,S as OLS4V2,I as SelectingDefiningOntology,L as TermAsLink,Ta as __namedExportsOrder,pa as default};
