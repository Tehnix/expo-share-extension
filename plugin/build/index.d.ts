import { type ExpoConfig } from "@expo/config-types";
import { ConfigPlugin } from "expo/config-plugins";
import * as v from "valibot";
/**
 * Get the app group for the app by:
 * - Checking if AppGroup or AppGroupIdentifier is set in the info.plist configuation value.
 * - Falling back to the bundle identifier.
 *
 * This allows to user to control the app group in case it doesn't match their
 * bundle identifier.
 */
export declare const getAppGroup: (config: ExpoConfig) => any;
export declare const getAppBundleIdentifier: (config: ExpoConfig) => string;
export declare const getShareExtensionBundleIdentifier: (config: ExpoConfig) => string;
export declare const getShareExtensionName: (config: ExpoConfig) => string;
export declare const getShareExtensionEntitlementsFileName: (config: ExpoConfig) => string;
declare const rgbaSchema: v.ObjectSchema<{
    readonly red: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 255, undefined>]>;
    readonly green: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 255, undefined>]>;
    readonly blue: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 255, undefined>]>;
    readonly alpha: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.MinValueAction<number, 0, undefined>, v.MaxValueAction<number, 255, undefined>]>;
}, undefined>;
export type BackgroundColor = v.InferOutput<typeof rgbaSchema>;
declare const heightSchema: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.MinValueAction<number, 50, undefined>, v.MaxValueAction<number, 1000, undefined>]>;
export type Height = v.InferOutput<typeof heightSchema>;
type ActivationType = "image" | "video" | "text" | "url" | "file";
export type ActivationRule = {
    type: ActivationType;
    max?: number;
};
declare const withShareExtension: ConfigPlugin<{
    activationRules?: ActivationRule[];
    backgroundColor?: BackgroundColor;
    height?: Height;
    excludedPackages?: string[];
    googleServicesFile?: string;
    preprocessingFile?: string;
}>;
export default withShareExtension;
