import{b as r}from"./iframe-CTDlrwV_.js";import{O as k,u as w,m as E,l as O,r as I,bc as S}from"./widgetDescriptions-BWQxYL9a.js";import{E as v}from"./EntityDefinedByPresentation-BrS9s1nS.js";function L(c){const{iri:a,api:p,parameter:l,entityType:t,ontologyId:b,useLegacy:o,className:m}=c,g=new k(p),{data:s,isLoading:h,isSuccess:f,isError:u,error:T}=w(["entityDefinedBy",p,l,t,a,b,o],async()=>{let i,d,y;if(o){const e=(await g.getEntityResponse(a,t,void 0,l,o))._embedded;i=e[Object.keys(e)[0]].filter(n=>n.is_defining_ontology).map(n=>n.ontology_name),d=t||S(Object.keys(e)[0]),y=e[Object.keys(e)[0]][0].label}else{const e=await g.getEntityObject(a,t,b,l,o);i=e.getDefinedBy().filter(n=>n!=e.getOntologyId()),d=t||e.getType(),y=e.getLabel()||""}return i=i.sort(),{ontoList:i,entityType:d,label:y}});return r.jsxs("div",{"data-testid":"entity-defined-by",children:[f&&s&&r.jsx(v,{ontolist:s.ontoList,entityType:s.entityType,label:s.label,iri:a,onNavigateToOntology:c.onNavigateToOntology,className:m}),h&&r.jsx(E,{}),u&&r.jsx(O,{children:I(T,"ontology list")})]})}L.__docgenInfo={description:"",methods:[],displayName:"EntityDefinedByWidget",props:{api:{required:!0,tsType:{name:"string"},description:"The API instance for the API call."},entityType:{required:!1,tsType:{name:"entityTypeNames[number]",raw:"typeof entityTypeNames[number]"},description:"Sets the type of the entity whose information you want to fetch."},ontologyId:{required:!0,tsType:{name:"string"},description:"Select a specific ontology by id"},iri:{required:!0,tsType:{name:"string"},description:"Entity IRI whose information you want to fetch."},parameter:{required:!1,tsType:{name:"string"},description:`Additional parameters to pass to the API.

Each parameter can be combined via
the special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign
<i><b>,</b></i>. The following keys could be used:<br/> <br/>
 <table>
 <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
 <tr><td>lang</td><td>Set the language for the response e.g. <b><i>en</i></b>, <b><i>de</i></b>, <b><i>fr</i></b>. The default value is <b><i>en</i></b>.</td></tr>
 <tr><td>collection</td><td>Restrict a search to a terminology subset e.g. <b><i>collection=nfdi4health</i></b></td></tr>
 <tr><td>database</td><td>Restrict a search via the API Gateway to specific terminology software stacks, choose from <b><i>ols</i></b>, <b><i>ontoportal</i></b>, or <b><i>skosmos</i></b></td></tr>
</table>`},useLegacy:{required:!1,tsType:{name:"boolean"},description:"Toggle between OLS3 (legacy) and OLS4 API versions."},className:{required:!1,tsType:{name:"string"},description:"CSS class for styling"},onNavigateToOntology:{required:!1,tsType:{name:"union",raw:`((
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
@param entity.parents obtains the list of parent entities of the clicked entity (only OLS, Skosmos)`}}};export{L as E};
