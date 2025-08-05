import { CrossRefTabWidget } from './CrossRefTabWidget';
import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: typeof CrossRefTabWidget;
    parameters: {
        layout: string;
        docs: {
            description: {
                component: string;
            };
        };
    };
    argTypes: {
        [x: string]: import('storybook/internal/csf').InputType;
    };
    args: {
        readonly api: "";
        readonly iri: "";
        readonly useLegacy: true;
        readonly ontologyId: "";
        readonly entityType: "term";
        readonly parameter: "collection=nfdi4health";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const CrossRefTabWidget1: Story;
export declare const SelectingDefiningOntology: Story;
export declare const DefiningOntologyUnavailable: Story;
