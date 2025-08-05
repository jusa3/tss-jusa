import{T as H}from"./TitleWidget-DVwaol0Q.js";import{Z as e,E as z}from"./globals-BpbGe8p9.js";import{ap as X,aq as $,a as tt,J as et,ar as ot,as as rt,p as at,I as it,a1 as st,M as nt,j as lt,at as gt}from"./widgetDescriptions-BWQxYL9a.js";import"./iframe-CTDlrwV_.js";import"./preload-helper-Dp1pzeXC.js";import"./TitlePresentation-CBIzTzp5.js";import"./link-BfhSDt6b.js";import"./screen_reader_only-BiUC_Qez.js";const{expect:ct,waitFor:pt,within:yt}=__STORYBOOK_MODULE_TEST__,mt={...lt,...nt,...st,...it,...at,...rt,...ot,...et,...tt,...$,...X},Tt={api:"",useLegacy:!0,iri:"",ontologyId:"",thingType:"term",titleText:"",defaultValue:"",className:"",parameter:"collection=nfdi4health"},ut={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term"},dt={iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology"},ht={api:z,iri:"http://purl.obolibrary.org/obo/IAO_0000631",thingType:"term",parameter:""},It={iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term",titleText:"title text"},G={iri:"http://purl.obolibrary.org/obo/NCIT_C29",api:e,ontologyId:"ncit",thingType:"term"},Wt={api:z,iri:"http://identifiers.org/uniprot/Q9VAM9",thingType:"term",parameter:""},At={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"custom-title-style"},Ot={iri:"http://purl.obolibrary.org/obo/NCIT_C2985",api:e,ontologyId:"ncit",thingType:"term",className:"none"},bt={iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology",onNavigateTo:(m,T,u)=>{console.log("Navigation with IRI, ontologyId and thingType.",m,T,u)}},ft={iri:"http://purl.obolibrary.org/obo/NCIT",api:e,ontologyId:"ncit",thingType:"ontology",href:"/"},t=async({canvasElement:m})=>{const T=yt(m);await pt(async()=>{const u=T.getByTestId("title");await ct(u).toBeInTheDocument()},{timeout:3e3})},Vt={title:"Entity Metadata/TitleWidget",component:H,parameters:{layout:"centered",docs:{description:{component:gt}}},argTypes:mt,args:Tt},o={args:ut,play:t},r={args:dt,play:t},a={args:ht,play:t},i={args:It,play:t},s={args:G,play:t},n={args:G,play:t},l={args:Wt,play:t},g={args:At,play:t},c={args:Ot,play:t},p={args:bt,play:t},y={args:ft,play:t};var d,h,I;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: TitleWidgetDefaultArgs,
  play: commonTitleWidgetPlay
}`,...(I=(h=o.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var W,A,O;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: OntologyTitleArgs,
  play: commonTitleWidgetPlay
}`,...(O=(A=r.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var b,f,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: SelectingDefiningOntologyArgs,
  play: commonTitleWidgetPlay
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var D,C,N;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: TitleWidgetWithTitleTextArgs,
  play: commonTitleWidgetPlay
}`,...(N=(C=i.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var _,P,v;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: IncorrectIriWithoutDefaultValueArgs,
  play: commonTitleWidgetPlay
}`,...(v=(P=s.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var x,V,E;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: IncorrectIriWithoutDefaultValueArgs,
  play: commonTitleWidgetPlay
}`,...(E=(V=n.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var L,w,B;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: DefiningOntologyUnavailableArgs,
  play: commonTitleWidgetPlay
}`,...(B=(w=l.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var M,U,k;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: WithStylesArgs,
  play: commonTitleWidgetPlay
}`,...(k=(U=g.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var R,Z,j;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: WithoutStylesArgs,
  play: commonTitleWidgetPlay
}`,...(j=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};var q,F,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: OntologyTitleCustomOnNavigateArgs,
  play: commonTitleWidgetPlay
}`,...(J=(F=p.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,Q,Y;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: OntologyTitleCustomLinkArgs,
  play: commonTitleWidgetPlay
}`,...(Y=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const Et=["TitleWidgetDefault","OntologyTitle","SelectingDefiningOntology","TitleWidgetWithTitleText","IncorrectIriWithDefaultValue","IncorrectIriWithoutDefaultValue","DefiningOntologyUnavailable","WithStyles","WithoutStyles","OntologyTitleCustomOnNavigate","OntologyTitleCustomLink"];export{l as DefiningOntologyUnavailable,s as IncorrectIriWithDefaultValue,n as IncorrectIriWithoutDefaultValue,r as OntologyTitle,y as OntologyTitleCustomLink,p as OntologyTitleCustomOnNavigate,a as SelectingDefiningOntology,o as TitleWidgetDefault,i as TitleWidgetWithTitleText,g as WithStyles,c as WithoutStyles,Et as __namedExportsOrder,Vt as default};
