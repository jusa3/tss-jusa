import{E as T,T as S}from"./globals-BpbGe8p9.js";import{bW as _,p as B,r as E,v as D,bX as W}from"./storyArgs-D6apI4ht.js";import{c as f,j as A}from"./index-CossuYGe.js";import{W as I}from"./SearchBarWidget-DYFnimvB.js";import"./preload-helper-Dp1pzeXC.js";import"./combo_box-DGiaNyzT.js";import"./popover-B_yoE_Z0.js";import"./focus_trap-Bu4tvRFm.js";import"./screen_reader_only-4z6d0yFa.js";import"./badge-SQFiMWca.js";import"./inner_text-BxYIvL8Y.js";import"./flex_item-NGRFq6S7.js";import"./flex_group-B7Kf0qQe.js";import"./toString-B_WP5qc2.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,{expect:w,waitFor:P,within:C}=__STORYBOOK_MODULE_TEST__,N={...D,...E,...B,..._};b("selectionChangedEvent");const O={api:"",query:"",selectionChangedEvent:()=>{},parameter:"collection=nfdi4health"},v={api:T,query:"*"},x={api:S,parameter:"classification=NFDI4CHEM&schema=collection"},M={api:S,parameter:"classification=DataPLANT&schema=collection"},c=async({canvasElement:e})=>{const a=C(e);await P(async()=>{const r=a.getByTestId("search-bar");await w(r).toBeInTheDocument()},{timeout:3e3})},n=new WeakMap;function q(e,a){let r=n.get(a);r||(r=f.createRoot(a),n.set(a,r)),r.render(A.jsx(I,{...e}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createSearchBar:q};let F=0;function $(){return F++}const Z={title:"Search/SearchBarWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:W}}},render:e=>{const a=$();return`
<div id="search_bar_widget_container_${a}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createSearchBar(
    {
      api:"${e.api}",
      query:"${e.query}",
      selectionChangedEvent:${e.selectionChangedEvent.toString().replace(/(\r\n|\n|\r)/gm,"")},
      parameter:"${e.parameter}",
    },
    document.querySelector('#search_bar_widget_container_${a}')
)
<\/script>
        `},argTypes:N,args:O},t={args:v,play:c},o={args:x,play:c},s={args:M,play:c};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: SearchBarWidgetDefaultArgs,
  play: commonSearchBartWidgetPlay
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,g,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: TibNFDI4CHEMArgs,
  play: commonSearchBartWidgetPlay
}`,...(l=(g=o.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,h,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: TibDataPlantArgs,
  play: commonSearchBartWidgetPlay
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const ee=["SearchBarWidgetDefault","TibNFDI4CHEM","TibDataPlant"];export{t as SearchBarWidgetDefault,s as TibDataPlant,o as TibNFDI4CHEM,ee as __namedExportsOrder,Z as default};
