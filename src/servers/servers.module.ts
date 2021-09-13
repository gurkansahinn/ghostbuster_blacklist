import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { SequelizeModule } from "@nestjs/sequelize";
import { defaultDatabaseOptions } from "src/database/default.database.options";
import { serverDomains } from "./domain/domains";

@Module({
    imports: [
        CqrsModule,
        SequelizeModule.forRoot({
            ...defaultDatabaseOptions,
            name: 'serverDb',
            database: 'servers'
        })
    ],
    controllers: [],
    providers: [...serverDomains]
})
export class ServersModule { }