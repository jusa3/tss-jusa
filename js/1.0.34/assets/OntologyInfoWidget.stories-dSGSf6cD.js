import{Z as N,E as W}from"./globals-BpbGe8p9.js";import{z as A,B as E,C as _,G as w,H as B,p as P,a0 as S,K as L,v as $,aU as h}from"./storyArgs-D6apI4ht.js";import{c as D,j as x}from"./index-CossuYGe.js";import{W as b}from"./OntologyInfoWidget-Bz71syTX.js";import"./preload-helper-Dp1pzeXC.js";import"./StructureRendering-s9on-pGJ.js";import"./icon_tip-DknG74Nq.js";/* empty css                                 */import"./flex_item-NGRFq6S7.js";const{expect:j,waitFor:C,within:M}=__STORYBOOK_MODULE_TEST__,R={...$,...L,...S,...P,...B,...w,..._,...E,...A},q={api:"",useLegacy:!0,ontologyId:"",hasTitle:!0,showBadges:!0,parameter:"",onNavigateToEntity:"Console message",onNavigateToOntology:"Console message",onNavigateToDisambiguate:"Console message"},K={api:N,ontologyId:"atc"},U={api:N,ontologyId:"ncit"},Z={api:W,useLegacy:!1,ontologyId:"mp"},k={api:W,useLegacy:!1,ontologyId:"afo",onNavigateToEntity:"Navigate to EBI page",onNavigateToOntology:"Navigate to EBI page",onNavigateToDisambiguate:"Navigate to EBI page"},r=async({canvasElement:o})=>{const t=M(o);await C(async()=>{const e=t.getByTestId("ontology-info");await j(e).toBeInTheDocument()},{timeout:3e3})},i=new WeakMap;function z(o,t){let e=i.get(t);e||(e=D.createRoot(t),i.set(t,e)),e.render(x.jsx(b,{...o}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createOntologyInfo:z};let F=0;function G(){return F++}const ao={title:"Ontology Metadata/OntologyInfoWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:h}}},render:o=>{const t=G();return`
<div id="ontology_info_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createOntologyInfo(
    {
        ontologyId:"${o.ontologyId}",
        api:"${o.api}",
        parameter:"${o.parameter}",
        useLegacy:${o.useLegacy},
        hasTitle:${o.hasTitle},
        showBadges:${o.showBadges},
        onNavigateToEntity:${o.onNavigateToEntity},
        onNavigateToOntology:${o.onNavigateToOntology},
        onNavigateToDisambiguate:${o.onNavigateToDisambiguate},
        className:${o.className}
    },
    document.querySelector('#ontology_info_widget_container_${t}')
)
<\/script>
        `},argTypes:R,args:q},a={args:K,play:r},n={args:U,play:r},s={args:Z,play:r},g={args:k,play:r};var y,c,p;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: OntologyInfoWidget1Args,
  play: commonOntologyInfoWidgetPlay
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: OntologyInfoWidget2Args,
  play: commonOntologyInfoWidgetPlay
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var I,f,u;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: OntologyInfoWidgetOLS4APIArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(u=(f=s.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var O,T,v;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: NavigateToEBIPageArgs,
  play: commonOntologyInfoWidgetPlay
}`,...(v=(T=g.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const no=["OntologyInfoWidget1","OntologyInfoWidget2","OntologyInfoWidgetOLS4API","NavigateToEBIPage"];export{g as NavigateToEBIPage,a as OntologyInfoWidget1,n as OntologyInfoWidget2,s as OntologyInfoWidgetOLS4API,no as __namedExportsOrder,ao as default};
