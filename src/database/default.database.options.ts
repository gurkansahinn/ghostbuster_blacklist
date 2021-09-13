import { SequelizeModuleOptions } from "@nestjs/sequelize";

export const defaultDatabaseOptions: SequelizeModuleOptions = {
    dialect: "postgres",
    host: process.env.HOST,
    port: +process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    synchronize: true,
}