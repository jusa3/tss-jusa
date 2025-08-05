import{G as T,p as _,I as b,J as A,F as O,v as R,as as C}from"./storyArgs-D6apI4ht.js";import{E as s}from"./globals-BpbGe8p9.js";import"./index-BPRkn2JT.js";import"./index-CossuYGe.js";import"./preload-helper-Dp1pzeXC.js";/* empty css                             */import"./flex_group-B7Kf0qQe.js";import"./flex_item-NGRFq6S7.js";const{expect:I,waitFor:D,within:S}=__STORYBOOK_MODULE_TEST__,W={...R,...O,...A,...b,..._,...T},v={api:"",iri:"",useLegacy:!0,ontologyId:"",entityType:"term",parameter:"collection=nfdi4health"},$={iri:"http://purl.obolibrary.org/obo/RXNO_0000138",api:s,entityType:"term",ontologyId:"rxno",parameter:""},w={api:s,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},h={api:s,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},i=async({canvasElement:e})=>{const t=S(e);await D(async()=>{const u=t.getByTestId("cross-ref");await I(u).toBeInTheDocument()},{timeout:3e3})};let E=0;function N(){return E++}const q={title:"Additional Entity Metadata/CrossRefTabWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:C}}},render:e=>{const t=N();return`
<div id="cross_ref_tab_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createCrossRefTab(
    {
        iri:"${e.iri}",
        api:"${e.api}",
        ontologyId:"${e.ontologyId}",
        entityType:"${e.entityType}",
        parameter:"${e.parameter}",
        useLegacy:"${e.useLegacy}",
        className:"${e.className}"
    },
    document.querySelector('#cross_ref_tab_widget_container_${t}')
)
<\/script>
        `},argTypes:W,args:v},r={args:$,play:i},o={args:w,play:i},a={args:h,play:i};var n,c,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: CrossRefTabWidget1Args,
  play: commonCrossRefWidgetPlay
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,y,l;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonCrossRefWidgetPlay
}`,...(l=(y=o.parameters)==null?void 0:y.docs)==null?void 0:l.source}}};var m,d,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonCrossRefWidgetPlay
}`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const G=["CrossRefTabWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable"];export{r as CrossRefTabWidget1,a as DefiningOntologyUnavailable,o as SelectingDefiningOntology,G as __namedExportsOrder,q as default};
