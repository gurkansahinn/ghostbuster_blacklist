"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfigService = void 0;
const common_1 = require("@nestjs/common");
let DatabaseConfigService = class DatabaseConfigService {
    createSequelizeOptions() {
        return {
            dialect: 'postgres',
            host: process.env.HOST,
            port: +process.env.PORT,
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            models: [],
            autoLoadModels: true
        };
    }
};
DatabaseConfigService = __decorate([
    (0, common_1.Injectable)()
], DatabaseConfigService);
exports.DatabaseConfigService = DatabaseConfigService;
//# sourceMappingURL=database.config.service.js.map