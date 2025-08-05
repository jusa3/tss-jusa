export declare const HierarchyWidgetStoryArgTypes: {
    [x: string]: import('storybook/internal/csf').InputType;
};
export declare const HierarchyWidgetStoryArgs: {
    readonly apiUrl: "";
    readonly backendType: "";
    readonly apiKey: "";
    readonly onNavigateToEntity: "Console message";
    readonly onNavigateToOntology: "Console message";
    readonly iri: "";
    readonly ontologyId: "";
    readonly entityType: "term";
    readonly includeObsoleteEntities: false;
    readonly preferredRoots: false;
    readonly keepExpansionStates: false;
    readonly showSiblingsOnInit: false;
    readonly useLegacy: false;
};
export declare const ClassHierarchyArgs: {
    readonly apiUrl: "https://www.ebi.ac.uk/ols4/api/";
    readonly backendType: "ols";
    readonly iri: "http://www.ebi.ac.uk/efo/EFO_0000400";
    readonly entityType: "class";
    readonly ontologyId: "efo";
};
export declare const IndividualHierarchyArgs: {
    readonly apiUrl: "https://www.ebi.ac.uk/ols4/api/";
    readonly backendType: "ols";
    readonly iri: "http://purl.obolibrary.org/obo/IAO_0000120";
    readonly entityType: "individual";
    readonly ontologyId: "bco";
};
export declare const PreferredRootsArgs: {
    readonly apiUrl: "https://www.ebi.ac.uk/ols4/api/";
    readonly backendType: "ols";
    readonly iri: "";
    readonly entityType: "class";
    readonly ontologyId: "uberon";
    readonly preferredRoots: true;
};
export declare const IncludeObsoleteEntitiesArgs: {
    readonly apiUrl: "https://www.ebi.ac.uk/ols4/api/";
    readonly backendType: "ols";
    readonly iri: "";
    readonly entityType: "class";
    readonly ontologyId: "uberon";
    readonly includeObsoleteEntities: true;
    readonly useLegacy: true;
};
export declare const PropertyRootsArgs: {
    readonly apiUrl: "https://www.ebi.ac.uk/ols4/api/";
    readonly backendType: "ols";
    readonly iri: "";
    readonly entityType: "property";
    readonly ontologyId: "bco";
    readonly useLegacy: true;
};
export declare const IndividualRootsArgs: {
    readonly apiUrl: "https://www.ebi.ac.uk/ols4/api/";
    readonly backendType: "ols";
    readonly iri: "";
    readonly entityType: "individual";
    readonly ontologyId: "bco";
};
export declare const LargeHierarchyArgs: {
    readonly apiUrl: "https://www.ebi.ac.uk/ols4/api/";
    readonly backendType: "ols";
    readonly iri: "http://purl.obolibrary.org/obo/UBERON_2001747";
    readonly entityType: "class";
    readonly ontologyId: "uberon";
};
export declare const SkosHierarchyArgs: {
    readonly apiUrl: "https://api.finto.fi/rest/v1";
    readonly backendType: "skosmos";
    readonly iri: "http://www.yso.fi/onto/yso/p864";
    readonly ontologyId: "yso";
};
export declare const SagePubHierarchyArgs: {
    readonly apiUrl: "https://concepts.sagepub.com/vocabularies/rest/v1/";
    readonly backendType: "skosmos";
    readonly iri: "https://concepts.sagepub.com/social-science/concept/economic_forecasting";
    readonly ontologyId: "social-science";
};
export declare const OntoportalHierarchyArgs: {
    readonly apiUrl: "https://data.biodivportal.gfbio.org";
    readonly backendType: "ontoportal";
    readonly iri: "http://terminologies.gfbio.org/terms/IOC_Strigops-habroptila";
    readonly ontologyId: "IOC";
    readonly entityType: "class";
    readonly apiKey: "";
};
export declare const OLS3HierarchyArgs: {
    readonly apiUrl: "https://ols3-semanticlookup.zbmed.de/ols/api/";
    readonly backendType: "ols";
    readonly iri: "http://www.ebi.ac.uk/efo/EFO_0000400";
    readonly entityType: "class";
    readonly ontologyId: "efo";
    readonly useLegacy: true;
};
export declare const commonHierarchyWidgetPlay: ({ canvasElement }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
