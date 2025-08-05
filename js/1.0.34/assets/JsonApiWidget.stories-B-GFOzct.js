import{Z as p}from"./globals-BpbGe8p9.js";import{a2 as d,a3 as g,a4 as m,Q as y,f as l,g as A,a5 as x,a6 as _}from"./storyArgs-D6apI4ht.js";import{j as n,c as f}from"./index-CossuYGe.js";import"./preload-helper-Dp1pzeXC.js";const{expect:T,waitFor:b,within:S}=__STORYBOOK_MODULE_TEST__,W={...m,...g,...d},w={apiQuery:"",buttonText:"",buttonSize:"m"},J={apiQuery:p+"ontologies/atc",buttonText:"show JSON",buttonSize:"m"},j=async({canvasElement:t})=>{const e=S(t);await b(async()=>{const o=e.getByTestId("json-api");await T(o).toBeInTheDocument()},{timeout:3e3})};function Q(t){const{apiQuery:e,buttonText:o,buttonSize:u}=t;return n.jsx(x,{href:e,target:"_blank",size:u||"m","data-testid":"json-api",children:o})}function z(t){const e=new y;return n.jsx(l,{colorMode:"light",children:n.jsx(A,{client:e,children:n.jsx(Q,{apiQuery:t.apiQuery,buttonText:t.buttonText,buttonSize:t.buttonSize})})})}const s=new WeakMap;function h(t,e){let o=s.get(e);o||(o=f.createRoot(e),s.set(e,o)),o.render(n.jsx(z,{...t}))}window.ts4nfdiWidgets={...window.ts4nfdiWidgets,createJsonApi:h};let D=0;function E(){return D++}const I={title:"API/JsonApiWidget",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:_}}},render:t=>{const e=E();return`
<div id="json_api_widget_container_${e}"></div>

<script type="text/javascript">
window['ts4nfdiWidgets'].createJsonApi(
    {
        apiQuery:"${t.apiQuery}",
        buttonText:"${t.buttonText}",
        buttonSize:"${t.buttonSize}",
    },
    document.querySelector('#json_api_widget_container_${e}')
)
<\/script>
        `},argTypes:W,args:w},i={args:J,play:j};var r,a,c;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: JsonApiWidgetDefaultArgs,
  play: commonJsonApiWidgetPlay
}`,...(c=(a=i.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const $=["JsonApiWidgetDefault"];export{i as JsonApiWidgetDefault,$ as __namedExportsOrder,I as default};
