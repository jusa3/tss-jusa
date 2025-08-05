import{b as o}from"./iframe-CTDlrwV_.js";import{O as y,u as h,bb as u}from"./widgetDescriptions-BWQxYL9a.js";import{A as g}from"./AlternativeNameTabPresentation-D18jth9c.js";function f(d){const{iri:t,api:a,parameter:i,entityType:n,ontologyId:r,useLegacy:s,className:c}=d,l=new y(a),{data:e,isLoading:m,error:p}=h(["alternativeNameTab",a,i,n,t,r,s],async()=>l.getEntityObject(t,n,r,i,s));return o.jsx("div",{"data-testid":"alternative-name",children:o.jsx(g,{synonyms:e?u(e)?e.getSynonyms().map(b=>b.value):[]:[],isLoading:m,error:p,className:c})})}f.__docgenInfo={description:"",methods:[],displayName:"AlternativeNameTabWidget",props:{api:{required:!0,tsType:{name:"string"},description:"The API instance for the API call."},entityType:{required:!1,tsType:{name:"entityTypeNames[number]",raw:"typeof entityTypeNames[number]"},description:"Sets the type of the entity whose information you want to fetch."},ontologyId:{required:!1,tsType:{name:"string"},description:"Select a specific ontology by id"},iri:{required:!0,tsType:{name:"string"},description:"Entity IRI whose information you want to fetch."},parameter:{required:!1,tsType:{name:"string"},description:`Additional parameters to pass to the API.

Each parameter can be combined via
the special character <i><b>&</b></i>. The values of a parameter key can be combined with a comma sign
<i><b>,</b></i>. The following keys could be used:<br/> <br/>
 <table>
 <thead><tr><th>Parameter</th><th>Description</th></tr></thead>
 <tr><td>lang</td><td>Set the language for the response e.g. <b><i>en</i></b>, <b><i>de</i></b>, <b><i>fr</i></b>. The default value is <b><i>en</i></b>.</td></tr>
 <tr><td>collection</td><td>Restrict a search to a terminology subset e.g. <b><i>collection=nfdi4health</i></b></td></tr>
 <tr><td>database</td><td>Restrict a search via the API Gateway to specific terminology software stacks, choose from <b><i>ols</i></b>, <b><i>ontoportal</i></b>, or <b><i>skosmos</i></b></td></tr>
</table>`},useLegacy:{required:!1,tsType:{name:"boolean"},description:"Toggle between OLS3 (legacy) and OLS4 API versions."},className:{required:!1,tsType:{name:"string"},description:"CSS class for styling"}}};export{f as A};
