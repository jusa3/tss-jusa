import{E as n}from"./globals-BpbGe8p9.js";import{G as l,a0 as u,F as T,v as D,cX as W}from"./storyArgs-D6apI4ht.js";import{c as _,j as E}from"./index-CossuYGe.js";import{W as f}from"./TermDepictionWidget-PQBgL9zs.js";import"./preload-helper-Dp1pzeXC.js";import"./model-viewer-aRaplcbF.js";import"./screen_reader_only-4z6d0yFa.js";import"./inner_text-BxYIvL8Y.js";import"./focus_trap-Bu4tvRFm.js";const{expect:w,waitFor:x,within:A}=__STORYBOOK_MODULE_TEST__,I={...D,...T,...u,...l},b={api:n,iri:"",ontologyId:"",useLegacy:!1},O={api:n,iri:"http://purl.obolibrary.org/obo/UBERON_0001443",ontologyId:"uberon",useLegacy:!1},L={api:n,iri:"http://purl.obolibrary.org/obo/UBERON_0002048",ontologyId:"uberon",useLegacy:!1},y=async({canvasElement:e})=>{const t=A(e);await x(async()=>{const o=t.getByTestId("term-depiction");await w(o).toBeInTheDocument()},{timeout:3e3})},a=new WeakMap;function S(e,t){let o=a.get(t);o||(o=_.createRoot(t),a.set(t,o)),o.render(E.jsx(f,{...e}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createDepiction:S};let B=0;function R(){return B++}const F={title:"Additional Entity Metadata/TermDepictionWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:W}}},render:e=>{const t=R();return`
<div id="term_depiction_widget_container_${t}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDepiction(
    {
        iri:"${e.iri}",
        ontologyId:"${e.ontologyId}",
        api:"${e.api}",                
        useLegacy:${e.useLegacy},
    },
    document.querySelector('#term_depiction_widget_container_${t}')
)
<\/script>
        `},argTypes:I,args:b},i={args:O,play:y},r={args:L,play:y};var s,c,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: TermDepictionWidgetExampleArgs,
  play: commonTermDepictionWidgetPlay
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,d,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: TermDepictionWidget3DArgs,
  play: commonTermDepictionWidgetPlay
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const k=["TermDepictionWidgetExample","TermDepictionWidget3D"];export{r as TermDepictionWidget3D,i as TermDepictionWidgetExample,k as __namedExportsOrder,F as default};
