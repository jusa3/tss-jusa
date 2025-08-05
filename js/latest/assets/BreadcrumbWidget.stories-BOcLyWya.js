import{Z as l,E as D}from"./globals-BpbGe8p9.js";import{B as v,a7 as E,a8 as $,G as P,p as w,I as F,J as U,F as x,v as L,a9 as M}from"./storyArgs-D6apI4ht.js";import"./index-C-59gUnl.js";import"./index-CossuYGe.js";import"./preload-helper-Dp1pzeXC.js";import"./BreadcrumbWidget-DZaFGhLP.js";import"./BreadcrumbPresentation-ByOvu-lU.js";import"./badge-SQFiMWca.js";import"./inner_text-BxYIvL8Y.js";const{expect:Z,waitFor:j,within:q}=__STORYBOOK_MODULE_TEST__,G={...L,...x,...U,...F,...w,...P,...$,...E,...v},J={api:"",useLegacy:!0,iri:"",ontologyId:"",entityType:"term",colorFirst:"",colorSecond:"",parameter:"collection=nfdi4health",onNavigateToOntology:"Console message"},K={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:l,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"},Q={api:D,iri:"http://purl.obolibrary.org/obo/IAO_0000631",entityType:"term",parameter:""},R={api:D,iri:"http://identifiers.org/uniprot/Q9VAM9",entityType:"term",parameter:""},V={iri:"http://purl.obolibrary.org/obo/NCIT_C2985987654345678",api:l,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health"},Y={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:l,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health",colorFirst:"red",colorSecond:"grey"},k={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:l,ontologyId:"ncit",entityType:"term",parameter:"collection=nfdi4health",colorFirst:"#eced8e",colorSecond:"#8eaeed",className:"custom-breadcrumb-style"},e=async({canvasElement:r})=>{const o=q(r);await j(async()=>{const N=o.getByTestId("breadcrumb");await Z(N).toBeInTheDocument()},{timeout:3e3})};let z=0;function H(){return z++}const cr={title:"Additional Entity Metadata/BreadcrumbWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:M}}},render:r=>{const o=H();return`
<div id="breadcrumb_widget_container_${o}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createBreadcrumb(
    {
        iri:"${r.iri}",
        ontologyId:"${r.ontologyId}",
        api:"${r.api}",
        entityType:"${r.entityType}",
        colorFirst:"${r.colorFirst}",
        colorSecond:"${r.colorSecond}",
        parameter:"${r.parameter}",
        onNavigateToOntology:${r.onNavigateToOntology},
        className: "${r.className}"
    },
    document.querySelector('#breadcrumb_widget_container_${o}')
)
<\/script>
        `},argTypes:G,args:J},t={args:K,play:e},a={args:Q,play:e},i={args:R,play:e},n={args:V,play:e},s={args:Y,play:e},c={args:k,play:e};var m,p,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: BreadcrumbWidgetDefaultArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var d,y,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(u=(y=a.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var b,T,A;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(A=(T=i.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var B,S,f;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: ErrorBreadcrumbWidgetArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var _,C,I;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: CustomColorsArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var O,W,h;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: CustomStyleArgs,
  play: commonBreadcrumbWidgetPlay
}`,...(h=(W=c.parameters)==null?void 0:W.docs)==null?void 0:h.source}}};const lr=["BreadcrumbWidgetDefault","SelectingDefiningOntology","DefiningOntologyUnavailable","ErrorBreadcrumbWidget","CustomColors","CustomStyle"];export{t as BreadcrumbWidgetDefault,s as CustomColors,c as CustomStyle,i as DefiningOntologyUnavailable,n as ErrorBreadcrumbWidget,a as SelectingDefiningOntology,lr as __namedExportsOrder,cr as default};
