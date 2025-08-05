import{Z as u,E as T}from"./globals-BpbGe8p9.js";import{i as b,G as v,p as _,I as N,J as O,F as f,v as I,ar as D}from"./storyArgs-D6apI4ht.js";import"./index-9nXqWKww.js";import"./index-CossuYGe.js";import"./preload-helper-Dp1pzeXC.js";/* empty css                               */import"./flex_group-B7Kf0qQe.js";import"./flex_item-NGRFq6S7.js";const{expect:S,waitFor:W,within:$}=__STORYBOOK_MODULE_TEST__,w={...I,...f,...O,...N,..._,...v,...b},E={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",className:"",parameter:"collection=nfdi4health"},h={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:u,entityType:"term",ontologyId:"ncit"},P={api:T,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},L={api:T,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},n=async({canvasElement:e})=>{const t=$(e);await W(async()=>{const A=t.getByTestId("alternative-name");await S(A).toBeInTheDocument()},{timeout:3e3})};let B=0;function U(){return B++}const J={title:"Entity Metadata/AlternativeNameTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:D}}},render:e=>{const t=U();return`
<div id="alternative_name_tab_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createAlternativeNameTab(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:"${e.useLegacy}",
        className:"${e.className}"
    },
    document.querySelector('#alternative_name_tab_widget_container_${t}')
)
<\/script>
        `},argTypes:w,args:E},a={args:h,play:n},r={args:P,play:n},i={args:L,play:n};var o,s,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: AlternativeNameTabWidget1Args,
  play: commonAlternativeNameTabWidgetPlay
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,l,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonAlternativeNameTabWidgetPlay
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var m,y,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonAlternativeNameTabWidgetPlay
}`,...(d=(y=i.parameters)==null?void 0:y.docs)==null?void 0:d.source}}};const K=["AlternativeNameTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{a as AlternativeNameTabWidget1,i as DefiningOntologyUnavailable,r as SelectingDefiningOntology,K as __namedExportsOrder,J as default};
