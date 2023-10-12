import * as React from "react";
import { CSSProperties } from "react";
import "./Utils.scss";
export declare const CommonHeader: () => React.JSX.Element;
export declare const PropsTable: React.FC<{
    children?: React.ReactNode;
}>;
export declare const PropsHeader: React.FC<{
    children?: React.ReactNode;
}>;
export declare const Prop: React.FC<{
    name: string;
    type: string;
    default?: string;
    description: React.ReactNode;
}>;
export declare const StandardProps: () => React.JSX.Element;
export declare const AnchoredProps: () => React.JSX.Element;
export declare const ResizableProps: () => React.JSX.Element;
export declare const DemoUI: () => React.JSX.Element;
export declare const StateDriven: React.FC;
export declare const StateDrivenSize: () => React.JSX.Element;
export declare const AnchoredDefaultOrdering: () => React.JSX.Element;
export declare const SpaceDemoStacked1: () => React.JSX.Element;
export declare const blue: CSSProperties;
export declare const red: CSSProperties;
export declare const green: CSSProperties;
export declare const description: (props: string, additional?: React.ReactNode) => React.JSX.Element;
export declare const lorem: React.JSX.Element;
