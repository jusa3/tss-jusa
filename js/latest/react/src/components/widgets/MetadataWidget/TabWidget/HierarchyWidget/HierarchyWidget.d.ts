import { HierarchyWidgetProps } from '../../../../../app/types';
export declare const HIERARCHY_WIDGET_DEFAULT_VALUES: {
    readonly INCLUDE_OBSOLETE_ENTITIES: false;
    readonly PREFERRED_ROOTS: false;
    readonly KEEP_EXPANSION_STATES: false;
    readonly SHOW_SIBLINGS_ON_INIT: false;
    readonly USE_LEGACY: false;
};
declare function HierarchyWidget(props: HierarchyWidgetProps): import("react/jsx-runtime").JSX.Element;
declare function WrappedHierarchyWidget(props: HierarchyWidgetProps): import("react/jsx-runtime").JSX.Element;
export { HierarchyWidget, WrappedHierarchyWidget };
