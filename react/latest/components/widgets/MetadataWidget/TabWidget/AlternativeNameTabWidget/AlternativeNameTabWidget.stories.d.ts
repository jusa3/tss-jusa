import { AlternativeNameTabWidget } from './AlternativeNameTabWidget';
import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: typeof AlternativeNameTabWidget;
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
        readonly useLegacy: true;
        readonly iri: "";
        readonly ontologyId: "";
        readonly entityType: "term";
        readonly className: "";
        readonly parameter: "collection=nfdi4health";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const AlternativeNameTabWidget1: Story;
export declare const SelectingDefiningOntology: Story;
export declare const DefiningOntologyUnavailable: Story;
