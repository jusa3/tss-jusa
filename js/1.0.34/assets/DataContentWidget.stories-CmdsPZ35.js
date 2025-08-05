import{Z as d}from"./globals-BpbGe8p9.js";import{p as w,v as E,Q as A,f as N,g as O,O as T,h as b,w as L,x as p,y as I,D as F}from"./storyArgs-D6apI4ht.js";import{j as e,c as P}from"./index-CossuYGe.js";import"./preload-helper-Dp1pzeXC.js";const{within:G,expect:J,waitFor:V}=__STORYBOOK_MODULE_TEST__,$={...E,...w},c={api:"",parameter:""},H={...c,api:d,parameter:"collection=nfdi4health"},M={...c,api:d,parameter:"collection=safety"},Q={...c,api:d,parameter:"collection=safety"};function R(a){const{api:r,parameter:n,...j}=a,_=new T(r),{data:t,isLoading:D,isError:v,dataUpdatedAt:l}=b(["ontologiesData",r,n],async()=>_.getOntologiesData(a.parameter));return e.jsx(e.Fragment,{children:e.jsx(L,{"data-testid":"data-content",title:"Data Content",description:l?`Updated ${new Date(l).toLocaleString()}`:"",layout:"horizontal",children:e.jsxs(p,{...j,children:[v&&e.jsx(p,{children:"No data content available"}),D?e.jsx(I,{size:"s"}):e.jsxs("ul",{children:[t!=null&&t.getTotalOntologies()?e.jsxs("li",{children:[t==null?void 0:t.getTotalOntologies().toLocaleString()," ","ontologies and terminologies"]}):e.jsx("li",{style:{fontStyle:"italic"},children:"ontology number not available"}),t!=null&&t.getNumClasses()?e.jsxs("li",{children:[t==null?void 0:t.getNumClasses().toLocaleString()," terms"]}):e.jsx("li",{style:{fontStyle:"italic"},children:"term number not available"}),t!=null&&t.getNumProperties()?e.jsxs("li",{children:[t==null?void 0:t.getNumProperties().toLocaleString()," ","properties"]}):e.jsx("li",{style:{fontStyle:"italic"},children:"property number not available"}),t!=null&&t.getNumIndividuals()?e.jsxs("li",{children:[t==null?void 0:t.getNumIndividuals().toLocaleString()," ","individuals"]}):e.jsx("li",{style:{fontStyle:"italic"},children:"individual number not available"})," "]})]})})})}function U(a){const r=new A;return e.jsx(N,{colorMode:"light",children:e.jsx(O,{client:r,children:e.jsx(R,{api:a.api,parameter:a.parameter})})})}const g=new WeakMap;function q(a,r){let n=g.get(r);n||(n=P.createRoot(r),g.set(r,n)),n.render(e.jsx(U,{...a}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createDataContent:q};let z=0;function B(){return z++}const X={title:"Search/DataContentWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:F}}},render:a=>{const r=B();return`
<div id="data_content_widget_container_${r}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createDataContent(
    {
      api:"${a.api}",
      parameter:"${a.parameter}",
    },
    document.querySelector('#data_content_widget_container_${r}')
)
<\/script>
        `},argTypes:$,args:c},i={args:H},s={args:M},o={args:Q};var m,u,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: NFDI4HealthDataContentWidgetArgs
}`,...(y=(u=i.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var x,C,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: SafetyDataContentWidgetArgs
}`,...(h=(C=s.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var f,S,W;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: ErrorDataContentWidgetArgs
}`,...(W=(S=o.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};const tt=["NFDI4HealthDataContentWidget","SafetyDataContentWidget","ErrorDataContentWidget"];export{o as ErrorDataContentWidget,i as NFDI4HealthDataContentWidget,s as SafetyDataContentWidget,tt as __namedExportsOrder,X as default};
