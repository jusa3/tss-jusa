import{I as w}from"./IriWidget-BfA4Fktc.js";import{a as b,a7 as f,a8 as W,a9 as P,aa as _,I as B,a3 as C,ab as E}from"./widgetDescriptions-BWQxYL9a.js";import"./iframe-CTDlrwV_.js";import"./preload-helper-Dp1pzeXC.js";import"./link-BfhSDt6b.js";import"./screen_reader_only-BiUC_Qez.js";import"./button_icon-DPwDB7Me.js";import"./flex_item-MEW8UGuL.js";const{expect:S,waitFor:O,within:N}=__STORYBOOK_MODULE_TEST__,U={...C,...B,..._,...P,...W,...f,...b},h={iri:"",color:"text",iriText:"",urlPrefix:"",externalIcon:!0,className:""},D={iri:"http://purl.obolibrary.org/obo/NCIT_C2985"},v={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",externalIcon:!1},M={...h,iri:"http://purl.obolibrary.org/obo/NCIT_C2985",copyButton:"left"},F={iri:"http://purl.obolibrary.org/obo/OBI_0000070",urlPrefix:"https://terminology.nfdi4chem.de/ts/ontologies/vibso/terms?iri="},a=async({canvasElement:x})=>{const T=N(x);await O(async()=>{const A=T.getByTestId("iri");await S(A).toBeInTheDocument()},{timeout:3e3})},G={title:"Entity Metadata/IriWidget",component:w,parameters:{layout:"centered",docs:{description:{component:E}}},argTypes:U,args:h},r={args:D,play:a},t={args:v,play:a},o={args:M,play:a},e={args:F,play:a};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: IriWidget1Args,
  play: commonIriWidgetPlay
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,p,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: withoutExternalIconArgs,
  play: commonIriWidgetPlay
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var l,m,y;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: withCopyButtonArgs,
  play: commonIriWidgetPlay
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var d,u,I;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: withUrlPrefixArgs,
  play: commonIriWidgetPlay
}`,...(I=(u=e.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};const H=["IriWidget1","withoutExternalIcon","withCopyButton","withUrlPrefix"];export{r as IriWidget1,H as __namedExportsOrder,G as default,o as withCopyButton,e as withUrlPrefix,t as withoutExternalIcon};
