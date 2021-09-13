"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServersModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const sequelize_1 = require("@nestjs/sequelize");
const default_database_options_1 = require("../database/default.database.options");
const domains_1 = require("./domain/domains");
let ServersModule = class ServersModule {
};
ServersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            sequelize_1.SequelizeModule.forRoot(Object.assign(Object.assign({}, default_database_options_1.defaultDatabaseOptions), { name: 'serverDb', database: 'servers' }))
        ],
        controllers: [],
        providers: [...domains_1.serverDomains]
    })
], ServersModule);
exports.ServersModule = ServersModule;
//# sourceMappingURL=servers.module.js.map