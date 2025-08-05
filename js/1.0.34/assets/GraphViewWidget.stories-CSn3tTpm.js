import{E as n,T as I}from"./globals-BpbGe8p9.js";import{$ as E,a0 as k,F as x,v as A,a1 as V}from"./storyArgs-D6apI4ht.js";import{c as T,j as f}from"./index-CossuYGe.js";import{W as R}from"./GraphViewWidget-DErkUdKk.js";import"./preload-helper-Dp1pzeXC.js";import"./ts4nfdiGraphStyle-BNKMM8Km.js";import"./popover-B_yoE_Z0.js";import"./focus_trap-Bu4tvRFm.js";import"./screen_reader_only-4z6d0yFa.js";import"./button_empty-26YC--8U.js";const{expect:v,waitFor:C,within:B}=__STORYBOOK_MODULE_TEST__,O={...A,...x,...k,...E},P={api:n,iri:"",ontologyId:"",rootWalk:!1},S={api:I,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!1},$={api:I,iri:"http://purl.obolibrary.org/obo/OBI_0000070",ontologyId:"vibso",rootWalk:!0},N={api:n,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!1},D={api:n,iri:"http://purl.obolibrary.org/obo/CHEBI_15377",ontologyId:"chebi",rootWalk:!0},p=async({canvasElement:r})=>{const o=B(r);await C(async()=>{const e=o.getByTestId("graph-view");await v(e).toBeInTheDocument()},{timeout:3e3})},c=new WeakMap;function j(r,o){let e=c.get(o);e||(e=T.createRoot(o),c.set(o,e)),e.render(f.jsx(R,{...r}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createGraphView:j};let H=0;function q(){return H++}const Z={title:"Hierarchy and Graph/GraphViewWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:V}}},render:r=>{const o=q();return`
<div id="graph_view_widget_container_${o}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createGraphView(
    {
        iri:"${r.iri}",
        ontologyId:"${r.ontologyId}",
        api:"${r.api}",                
        rootWalk: ${r.rootWalk},
        className:${r.className}
    },
    document.querySelector('#graph_view_widget_container_${o}')
)
<\/script>
        `},argTypes:O,args:P},a={args:S,play:p},t={args:$,play:p},i={args:N,play:p},s={args:D,play:p};var l,g,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: GraphViewWidgetExampleArgs,
  play: commonGraphViewWidgetPlay
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var m,W,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: RootWalkGraphExampleArgs,
  play: commonGraphViewWidgetPlay
}`,...(h=(W=t.parameters)==null?void 0:W.docs)==null?void 0:h.source}}};var y,u,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: ChebiWaterArgs,
  play: commonGraphViewWidgetPlay
}`,...(w=(u=i.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var b,_,G;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: ChebiWaterRootWalkArgs,
  play: commonGraphViewWidgetPlay
}`,...(G=(_=s.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};const rr=["GraphViewWidgetExample","RootWalkGraphExample","ChebiWater","ChebiWaterRootWalk"];export{i as ChebiWater,s as ChebiWaterRootWalk,a as GraphViewWidgetExample,t as RootWalkGraphExample,rr as __namedExportsOrder,Z as default};
