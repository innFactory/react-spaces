import * as React from "react";
import { CSSProperties } from "react";
import "./Utils.scss";
export declare const CommonHeader: () => JSX.Element;
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
export declare const StandardProps: () => JSX.Element;
export declare const AnchoredProps: () => JSX.Element;
export declare const ResizableProps: () => JSX.Element;
export declare const DemoUI: () => JSX.Element;
export declare const StateDriven: React.FC;
export declare const StateDrivenSize: () => JSX.Element;
export declare const AnchoredDefaultOrdering: () => JSX.Element;
export declare const SpaceDemoStacked1: () => JSX.Element;
export declare const blue: CSSProperties;
export declare const red: CSSProperties;
export declare const green: CSSProperties;
export declare const description: (props: string, additional?: React.ReactNode) => JSX.Element;
export declare const lorem: JSX.Element;
