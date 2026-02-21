"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAppInfoPlist = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const index_1 = require("./index");
const withAppInfoPlist = (config) => {
    return (0, config_plugins_1.withInfoPlist)(config, (config) => {
        config.modResults["AppGroup"] = (0, index_1.getAppGroup)(config);
        config.modResults["AppGroupIdentifier"] = (0, index_1.getAppGroup)(config);
        return config;
    });
};
exports.withAppInfoPlist = withAppInfoPlist;
