import { HierarchyWidget } from './HierarchyWidget';
import { manuallyEmbedOnNavigate } from '../../../../../app/util';
import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: typeof HierarchyWidget;
    parameters: {
        layout: string;
        docs: {
            source: {
                transform: typeof manuallyEmbedOnNavigate;
            };
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        [x: string]: import('storybook/internal/csf').InputType;
    };
    args: {
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
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ClassHierarchy: Story;
export declare const IndividualHierarchy: Story;
export declare const PreferredRoots: Story;
export declare const IncludeObsoleteEntities: Story;
export declare const PropertyRoots: Story;
export declare const IndividualRoots: Story;
export declare const LargeHierarchy: Story;
export declare const SkosHierarchy: Story;
export declare const SagePubHierarchy: Story;
export declare const OntoportalHierarchy: Story;
export declare const OLS3Hierarchy: Story;
