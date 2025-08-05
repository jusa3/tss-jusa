import{i as _,ag as A,ah as f,ai as P,aj as b,F as W,ac as B,ak as C}from"./storyArgs-D6apI4ht.js";import"./index-CFrD0vbA.js";import"./index-CossuYGe.js";import"./preload-helper-Dp1pzeXC.js";import"./IriWidget-qI8ub-xL.js";import"./link-DU2TZsN3.js";import"./screen_reader_only-4z6d0yFa.js";import"./button_icon-CtGZnNxF.js";import"./flex_item-NGRFq6S7.js";const{expect:S,waitFor:$,within:E}=__STORYBOOK_MODULE_TEST__,N={...B,...W,...b,...P,...f,...A,..._},T={iri:"",color:"text",iriText:"",urlPrefix:"",externalIcon:!0,className:""},O={iri:"http://purl.obolibrary.org/obo/NCIT_C2985"},v={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",externalIcon:!1},U={...T,iri:"http://purl.obolibrary.org/obo/NCIT_C2985",copyButton:"left"},D={iri:"http://purl.obolibrary.org/obo/OBI_0000070",urlPrefix:"https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri="},s=async({canvasElement:r})=>{const t=E(r);await $(async()=>{const w=t.getByTestId("iri");await S(w).toBeInTheDocument()},{timeout:3e3})};let j=0;function F(){return j++}const H={title:"Entity Metadata/IriWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:C}}},render:r=>{const t=F();return`
<div id="iri_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createIri(
    {
        iri:"${r.iri}",
        iriText:"${r.iriText}",
        color:"${r.color}",
        externalIcon: ${r.externalIcon},
        urlPrefix:"${r.urlPrefix}",
        copyButton:"${r.copyButton}",
        className:"${r.className}",
    },
    document.querySelector('#iri_widget_container_${t}')
)
<\/script>
        `},argTypes:N,args:T},o={args:O,play:s},e={args:v,play:s},i={args:U,play:s},a={args:D,play:s};var n,c,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: IriWidget1Args,
  play: commonIriWidgetPlay
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,m,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: withoutExternalIconArgs,
  play: commonIriWidgetPlay
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,d,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: withCopyButtonArgs,
  play: commonIriWidgetPlay
}`,...(y=(d=i.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var I,x,h;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: withUrlPrefixArgs,
  play: commonIriWidgetPlay
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const J=["IriWidget1","withoutExternalIcon","withCopyButton","withUrlPrefix"];export{o as IriWidget1,J as __namedExportsOrder,H as default,i as withCopyButton,a as withUrlPrefix,e as withoutExternalIcon};
