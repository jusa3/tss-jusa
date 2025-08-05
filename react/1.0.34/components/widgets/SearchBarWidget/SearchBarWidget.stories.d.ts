import { SearchBarWidget } from './SearchBarWidget';
import { StoryObj } from '@storybook/react-vite';
declare const meta: {
    title: string;
    component: typeof SearchBarWidget;
    parameters: {
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
        api: string;
        query: string;
        selectionChangedEvent: import('storybook/internal/actions').HandlerFunction;
        parameter: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SearchBarWidgetDefault: Story;
export declare const TibNFDI4CHEM: Story;
export declare const TibDataPlant: Story;
