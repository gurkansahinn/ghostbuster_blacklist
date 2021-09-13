"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultDatabaseOptions = void 0;
exports.defaultDatabaseOptions = {
    dialect: "postgres",
    host: process.env.HOST,
    port: +process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    synchronize: true,
};
//# sourceMappingURL=default.database.options.js.map