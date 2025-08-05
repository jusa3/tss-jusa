import{i as f,aa as O,p as I,G as S,F as W,J as E,ab as b,ac as $,v,ad as w}from"./storyArgs-D6apI4ht.js";import{Z as x,E as s}from"./globals-BpbGe8p9.js";import"./index-Dv4Njow7.js";import"./index-CossuYGe.js";import"./preload-helper-Dp1pzeXC.js";import"./DescriptionWidget-D8nseTUt.js";const{expect:N,waitFor:P,within:F}=__STORYBOOK_MODULE_TEST__,L={...v,...$,...b,...E,...W,...S,...I,...O,...f},B={api:"",iri:"",useLegacy:!0,ontologyId:"",thingType:"term",descText:"",color:"",className:"",parameter:"collection=nfdi4health"},U={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:x,ontologyId:"ncit",thingType:"term",parameter:"collection=nfdi4health"},M={api:s,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""},C={api:s,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""},Q={api:s,iri:"http://identifiers.org/uniprot/Q9VA",thingType:"term",parameter:""},n=async({canvasElement:e})=>{const t=F(e);await P(async()=>{const _=t.getByTestId("description");await N(_).toBeInTheDocument()},{timeout:3e3})};let V=0;function Z(){return V++}const Y={title:"Entity Metadata/DescriptionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:w}}},render:e=>{const t=Z();return`
<div id="description_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDescription(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",
        descText:"${e.descText}",
        thingType:"${e.thingType}",
        parameter:"${e.parameter}",
        color:"${e.color}",
        useLegacy:"${e.useLegacy}",
        className:"${e.className}",
        
    },
    document.querySelector('#description_widget_container_${t}')
)
<\/script>
        `},argTypes:L,args:B},r={args:U,play:n},o={args:M,play:n},i={args:C,play:n},a={args:Q,play:n};var c,p,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: DescriptionWidget1Args,
  play: commonDescriptionWidgetPlay
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var l,d,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonDescriptionWidgetPlay
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var y,u,D;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonDescriptionWidgetPlay
}`,...(D=(u=i.parameters)==null?void 0:u.docs)==null?void 0:D.source}}};var T,A,h;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: ErrorFetchingDataArgs,
  play: commonDescriptionWidgetPlay
}`,...(h=(A=a.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};const k=["DescriptionWidget1","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorFetchingData"];export{i as DefiningOntologyUnavailable,r as DescriptionWidget1,a as ErrorFetchingData,o as SelectingDefiningOntology,k as __namedExportsOrder,Y as default};
