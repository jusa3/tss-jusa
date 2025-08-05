import { Ontology, Ontologies, Entity, Thing, Individual } from '../model/interfaces';
import { EntityTypeName, ThingTypeName } from '../model/ModelTypeCheck';
import { Hierarchy } from '../model/interfaces/Hierarchy';
import { BuildHierarchyProps, HierarchyBuilder, HierarchyIriProp, LoadHierarchyChildrenProps } from './HierarchyBuilder';
import { Select } from '../model/interfaces/Select';
import { EntityData } from '../app/types';
interface PaginationParams {
    size?: string;
    page?: string;
}
interface SortingParams {
    sortField: string | number;
    sortDir?: "asc" | "desc";
}
interface ContentParams {
    ontologyId?: string;
    termIri?: string;
    propertyIri?: string;
    individualIri?: string;
    queryString?: string;
}
export type apiCallFn = (paginationParams?: PaginationParams, sortingParams?: SortingParams, contentParams?: ContentParams, parameter?: string, useLegacy?: boolean, abortSignal?: AbortSignal) => Promise<any>;
interface SearchQueryParams {
    query: string;
    exactMatch?: boolean;
    showObsoleteTerms?: boolean;
    types?: string;
    ontology?: string;
    groupByIri?: boolean;
}
interface SelectQueryParams {
    query: string;
}
interface SuggestQueryParams {
    query: string;
}
interface JsTreeParams {
    viewMode?: string;
    siblings?: boolean;
    child?: string;
}
export type JSTreeNode = {
    id: string;
    parent: string;
    iri: string;
    text: string;
    state: {
        opened: boolean;
    };
    children: boolean;
    a_attr: {
        iri: string;
        ontology_name: string;
        title: string;
        class: string;
    };
    ontology_name: string;
};
export declare class OlsApi implements HierarchyBuilder {
    private axiosInstance;
    constructor(api: string);
    private buildParamsForGet;
    private buildPaginationParams;
    private buildParamsForSearch;
    /**
     * Function for creating an object from string of parameters for axios input params
     * @param parameter
     * @private
     */
    private buildOtherParams;
    private buildParamsForEntities;
    private buildParamsForSelect;
    private buildParamsForSuggest;
    private check_for_errors;
    private makeCall;
    getOntologies: apiCallFn;
    /**
     * Fetch all ontologies. Currently only available for useLegacy since parameters aren't allowed in the OLS v2 API ontologies endpoint
     * @param parameter
     * @param useLegacy
     */
    getOntologiesData(parameter?: string, useLegacy?: boolean): Promise<Ontologies>;
    /**
     * Is used to fetch all terms from the api
     * @param paginationParams
     * @param sortingParams
     * @param contentParams
     * @param parameter
     * @param `useLegacy` Depending on the value of `useLegacy`, `"terms"` (`useLegacy == true`) or `"classes"` (`useLegacy == false`) will be used in the query url
     */
    getTerms: apiCallFn;
    getProperties: apiCallFn;
    getIndividuals: apiCallFn;
    getOntology: apiCallFn;
    /**
     * Is used to fetch an entity from the /entities endpoint in the api in ols4.
     * Always requires the respective object IRI in contentParams to be set
     * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
     * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
     */
    getEntity: apiCallFn;
    /**
     * Is used to fetch a term from the api
     * @param paginationParams
     * @param sortingParams
     * @param `contentParams` Always requires the respective object IRI in `contentParams` to be set.
     *                      If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results.
     *                      If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology.
     * @param parameter
     * @param `useLegacy` Depending on the value of `useLegacy`, `"terms"` (`useLegacy == true`) or `"classes"` (`useLegacy == false`) will be used in the query url
     * @param abortSignal
     */
    getTerm: apiCallFn;
    /**
     * Is used to fetch a property from the api in ols3.
     * Always requires the respective object IRI in contentParams to be set
     * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
     * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
     */
    getProperty: apiCallFn;
    /**
     * Is used to fetch an individual from the api in ols3.
     * Always requires the respective object IRI in contentParams to be set
     * If ontologyId is undefined in contentParams, the object will be queried from all ontologies, containing a list of results
     * If an ontologyId is provided in contentParams, the returned list will only contain the object from that specific ontology
     */
    getIndividual: apiCallFn;
    search: (queryParams: SearchQueryParams, paginationParams: PaginationParams, contentParams?: ContentParams, parameter?: string, abortSignal?: AbortSignal) => Promise<any>;
    select: (queryParams: SelectQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string) => Promise<any>;
    searchTs4nfdiGateway: (queryParams: SelectQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string, ts4nfdiGateway?: boolean) => Promise<any>;
    /**
     * Fetch select data.
     * @param queryParams
     * @param paginationParams
     * @param contentParams
     * @param parameter
     */
    getSelectData(queryParams: SelectQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string, ts4nfdiGateway?: boolean): Promise<Select>;
    suggest: (queryParams: SuggestQueryParams, paginationParams?: PaginationParams, contentParams?: ContentParams, parameter?: string) => Promise<any>;
    /**
     * getTermTree:
     * This method always requires an ontologyId in contentParams
     * 1) If no termIri is defined in contentParams, the ontology roots will be queried
     * 2) If a termIri is defined but no child in jsTreeParams, the hierarchy containing that term will be queried
     * 3) If a termIri is defined and also a child in jsTreeParams, the subhierarchy of that child will be queried
     */
    getTermTree: (contentParams: ContentParams, treeParams: JsTreeParams) => Promise<any>;
    getTermRelations: (contentParams: ContentParams) => Promise<any>;
    /**
     * Returns the whole entity response json with a comfortable wrapper handling entityType, ontologyId and useLegacy
     * @param iri
     * @param entityType queries specific routes if provided and infers type if not
     * @param ontologyId queries ontology routes if provided, otherwise not
     * @param parameter
     * @param useLegacy affects how entityType is inferred if not provided
     */
    getEntityResponse(iri: string, entityType?: EntityTypeName, ontologyId?: string, parameter?: string, useLegacy?: boolean): Promise<any>;
    /**
     * Returns an Entity object (implementing 'Class', 'Property' or 'Individual').
     * Indirectly fetches the response JSON for the specified entityType, iri, ontologyId, parameter and API version (useLegacy).
     *
     * @param entityType
     * @param iri
     * @param ontologyId
     * @param parameter
     * @param useLegacy
     */
    getEntityObject(iri: string, entityType?: EntityTypeName, ontologyId?: string, parameter?: string, useLegacy?: boolean): Promise<Entity>;
    /**
     * Returns an Ontology object.
     * Indirectly fetches the response JSON for the specified ontologyId, parameter and API version (useLegacy).
     *
     * @param ontologyId
     * @param parameter
     * @param useLegacy
     */
    getOntologyObject(ontologyId: string, parameter?: string, useLegacy?: boolean): Promise<Ontology>;
    getThingObject(iri?: string, thingType?: ThingTypeName, ontologyId?: string, parameter?: string, useLegacy?: boolean): Promise<Thing>;
    private getEntityWithEntityTypeProvided;
    private getEntityWithInferredEntityType;
    getAncestors(iri: string, entityType: EntityTypeName, ontologyId: string, useLegacy?: boolean, includeObsoleteEntities?: boolean): Promise<Entity[]>;
    getJSTree(iri: string, entityType: EntityTypeName, ontologyId: string): Promise<JSTreeNode[]>;
    getChildren(iri: string, entityType: EntityTypeName, ontologyId: string, includeObsoleteEntities?: boolean, useLegacy?: boolean): Promise<Entity[]>;
    getRootEntities(entityType: EntityTypeName, ontologyId: string, preferredRoots?: boolean, includeObsoleteEntities?: boolean, useLegacy?: boolean): Promise<Entity[]>;
    getClassInstances(iri: string, ontologyId: string): Promise<Individual[]>;
    buildHierarchyWithIri(props: BuildHierarchyProps & HierarchyIriProp): Promise<Hierarchy>;
    jsTreeNodeToEntityData(jsTreeNode: JSTreeNode): EntityData;
    entityToEntityData(entity: Entity): EntityData;
    buildRootHierarchy(props: {
        ontologyId: string;
        entityType: EntityTypeName;
    } & BuildHierarchyProps): Promise<Hierarchy>;
    buildHierarchyWithEntity(props: {
        mainEntity: Entity;
        ontologyId: string;
        entityType: EntityTypeName;
    } & BuildHierarchyProps): Promise<Hierarchy>;
    loadHierarchyChildren(props: LoadHierarchyChildrenProps): Promise<EntityData[]>;
}
export {};
