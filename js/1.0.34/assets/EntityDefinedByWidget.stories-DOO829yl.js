import{E as a}from"./globals-BpbGe8p9.js";import{B as A,G as T,p as _,I as O,J as E,F as I,v as w,ae as D}from"./storyArgs-D6apI4ht.js";import"./index-DvK3Il1G.js";import"./index-CossuYGe.js";import"./preload-helper-Dp1pzeXC.js";/* empty css                                    */const{expect:B,waitFor:v,within:N}=__STORYBOOK_MODULE_TEST__,S={...w,...I,...E,...O,..._,...T,...A},$={api:"",useLegacy:!1,iri:"",ontologyId:"",entityType:"term",parameter:"",onNavigateToOntology:"Console message"},W={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:a,entityType:"term",ontologyId:"efo"},b={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:a,ontologyId:"ons"},L={iri:"http://www.ebi.ac.uk/efo/EFO_0000400",api:a,entityType:"term",ontologyId:"efo",useLegacy:!0},r=async({canvasElement:e})=>{const t=N(e);await v(async()=>{const f=t.getByTestId("entity-defined-by");await B(f).toBeInTheDocument()},{timeout:3e3})};let P=0;function h(){return P++}const C={title:"Additional Entity Metadata/EntityDefinedByWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:D}}},render:e=>{const t=h();return`
<div id="entity_defined_by_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createEntityDefinedBy(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:${e.useLegacy},
        onNavigateToOntology:${e.onNavigateToOntology},
        className:${e.className}
    },
    document.querySelector('#entity_defined_by_widget_container_${t}')
)
<\/script>
        `},argTypes:S,args:$},o={args:W,play:r},n={args:b,play:r},i={args:L,play:r};var y,s,p;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: emptyInDefiningOntologyArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,g,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: v2ApiONSArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(d=(g=n.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var m,l,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: legacyApiArgs,
  play: commonEntityDefinedByWidgetPlay
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const G=["emptyInDefiningOntology","v2ApiONS","legacyApi"];export{G as __namedExportsOrder,C as default,o as emptyInDefiningOntology,i as legacyApi,n as v2ApiONS};
