import { EntityOntoListWidget } from './EntityOntoListWidget';
import { manuallyEmbedOnNavigate } from '../../../../app/util';
import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: typeof EntityOntoListWidget;
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
        readonly api: "";
        readonly useLegacy: false;
        readonly iri: "";
        readonly ontologyId: "";
        readonly entityType: "term";
        readonly parameter: "";
        readonly onNavigateToOntology: "Console message";
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const v2ApiEFO: Story;
export declare const v2ApiONS: Story;
export declare const legacyApi: Story;
export declare const exceedsMaxDisplay: Story;
