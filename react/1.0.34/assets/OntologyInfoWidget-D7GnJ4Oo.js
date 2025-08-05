import{b as e}from"./iframe-CTDlrwV_.js";import{O as C,u as q,k as A,m as V,l as c,r as B,v as P,y as z,z as R,x as g}from"./widgetDescriptions-BWQxYL9a.js";import{g as y}from"./StructureRendering-D__qCoUh.js";import{E as a}from"./flex_item-MEW8UGuL.js";const _=!0;function W(i){const{ontologyId:h,api:m,parameter:u,hasTitle:f=_,useLegacy:p,showBadges:r,className:b,...x}=i,T=new C(m),l={onNavigateToEntity:i.onNavigateToEntity,onNavigateToOntology:i.onNavigateToOntology,onNavigateToDisambiguate:i.onNavigateToDisambiguate},j=b||"ts4nfdi-ontologyy-info-style",{data:n,isLoading:I,isSuccess:O,isError:k,error:S}=q(["ontologyInfo",i],()=>T.getOntologyObject(h,u,p));function w(t){return e.jsx(e.Fragment,{children:(t.getIri()||t.getOntologyPurl())&&e.jsxs(a,{children:[e.jsx("b",{children:"Ontology IRI:"}),e.jsx("p",{children:e.jsx("a",{id:"ontologyIri",href:t.getIri()||t.getOntologyPurl(),children:t.getIri()||t.getOntologyPurl()})})]})})}function v(t){return e.jsx(e.Fragment,{children:t.getVersionIri()&&e.jsxs(a,{children:[e.jsx("b",{children:"Version IRI:"}),e.jsx("p",{children:e.jsx("a",{id:"versionIri",href:t.getVersionIri(),children:t.getVersionIri()})})]})})}function L(t){return e.jsx(e.Fragment,{children:t.getSourceFileTimestamp()&&e.jsxs(a,{children:[e.jsx("b",{children:"Last loaded:"}),e.jsx("p",{children:new Date(t.getSourceFileTimestamp()).toString()})]})})}function E(t){return e.jsx(e.Fragment,{children:t.getOntologyId()&&e.jsxs(a,{children:[e.jsx("b",{children:"Ontology ID:"}),e.jsx("p",{children:t.getOntologyId()})]})})}function N(t){return e.jsx(e.Fragment,{children:t.getVersion()&&e.jsxs(a,{children:[e.jsx("b",{children:"Version:"}),e.jsx("p",{children:t.getVersion()})]})})}function F(t){return e.jsx(e.Fragment,{children:t.getNumClasses()&&e.jsxs(a,{children:[e.jsx("b",{children:"Number of classes:"}),e.jsx("p",{children:t.getNumClasses().toLocaleString()})]})})}function D(t){return e.jsx(e.Fragment,{children:t.getAnnotationPredicates().map(o=>{const s=t.getAnnotationById(o);return s.length==0?e.jsx(e.Fragment,{}):e.jsxs(a,{grow:!1,children:[e.jsxs("b",{children:[P(z(R(t.getAnnotationTitleById(o)))),":"]}),s.length>1?e.jsxs(e.Fragment,{children:[e.jsx("ul",{children:s.map(d=>e.jsx("li",{id:d.value,children:y(t,d,r,l)},g()))}),e.jsx("p",{})]}):e.jsx("p",{children:y(t,s[0],r,l)},g())]},o)})})}return e.jsx("div",{className:j,"data-testid":"ontology-info",children:e.jsxs(A,{title:f?"Ontology Information":"",layout:"horizontal",style:i.width?{width:i.width}:{},children:[I&&e.jsx(V,{size:"s"}),O&&n!==void 0&&e.jsxs(c,{...x,children:[w(n),v(n),L(n),e.jsxs(e.Fragment,{children:[E(n),N(n),F(n)]}),D(n)]}),k&&e.jsx(c,{children:B(S,"information")})]})})}W.__docgenInfo={description:"",methods:[],displayName:"OntologyInfoWidget",props:{api:{required:!0,tsType:{name:"string"},description:"The API instance for the API call."},ontologyId:{required:!0,tsType:{name:"string"},description:"Select a specific ontology by id"},hasTitle:{required:!1,tsType:{name:"boolean"},description:"Show title, default is true"},showBadges:{required:!1,tsType:{name:"boolean"},description:"If true (default), entity badges linking to their defining ontologies are shown."},parameter:{required:!1,tsType:{name:"string"},description:""},useLegacy:{required:!1,tsType:{name:"boolean"},description:"Toggle between OLS3 (legacy) and OLS4 API versions."},width:{required:!1,tsType:{name:"number"},description:"The container width for a target widget render function. Example: EuiCard for OntologyInfoWidget"},onNavigateToEntity:{required:!1,tsType:{name:"union",raw:`((
  ontologyId: string,
  entityType?: string,
  entity?: EntityData,
) => void) | string`,elements:[{name:"unknown"},{name:"string"}]},description:`This function is called every time an entity link is clicked
@param ontologyId obtains the ontologyId of the current ontology
@param entityType obtains the entityType of the clicked entity
@param entity.iri obtains the iri of the clicked entity
@param entity.label obtains the label of the clicked entity
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`},onNavigateToOntology:{required:!1,tsType:{name:"union",raw:`((
  ontologyId: string,
  entityType?: string,
  entity?: EntityData,
) => void) | string`,elements:[{name:"unknown"},{name:"string"}]},description:`This function is called every time an entity link is clicked
@param ontologyId obtains the ontologyId of the clicked badge
@param entityType obtains the entityType of the clicked badge
@param entity.iri obtains the iri of the clicked badge (can be empty)
@param entity.label obtains the label of the clicked badge
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`},onNavigateToDisambiguate:{required:!1,tsType:{name:"union",raw:"((entityType: string, entity?: EntityData) => void) | string",elements:[{name:"unknown"},{name:"string"}]},description:`This function is called every time a disambiguation badge is clicked
@param entityType obtains the entityType of the clicked badge
@param entity.iri obtains the iri of the clicked badge (can be empty)
@param entity.label obtains the label of the clicked badge
@param entity.definedBy obtains the list of ontologies the clicked entity is defined in (only OLS)
@param entity.hasChildren obtains a boolean indicating whether the clicked entity has child entities
@param entity.numDescendants obtains the number of hierarchical descendants of the clicked entity (only OLS)
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`},className:{required:!1,tsType:{name:"string"},description:"CSS class for styling"}}};export{W as O};
