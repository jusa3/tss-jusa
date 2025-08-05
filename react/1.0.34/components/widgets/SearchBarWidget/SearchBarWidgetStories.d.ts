export declare const SearchBarWidgetStoryArgTypes: {
    [x: string]: import('storybook/internal/csf').InputType;
};
export declare const SearchBarWidgetStoryArgsReact: {
    api: string;
    query: string;
    selectionChangedEvent: import('storybook/actions').HandlerFunction;
    parameter: string;
};
export declare const SearchBarWidgetStoryArgs: {
    api: string;
    query: string;
    selectionChangedEvent: () => void;
    parameter: string;
};
export declare const SearchBarWidgetDefaultArgs: {
    api: string;
    query: string;
};
export declare const TibNFDI4CHEMArgs: {
    api: string;
    parameter: string;
};
export declare const TibDataPlantArgs: {
    api: string;
    parameter: string;
};
export declare const commonSearchBartWidgetPlay: ({ canvasElement }: {
    canvasElement: HTMLElement;
}) => Promise<void>;
