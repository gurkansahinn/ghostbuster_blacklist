import { SequelizeModuleOptions, SequelizeOptionsFactory } from '@nestjs/sequelize';
export declare class DatabaseConfigService implements SequelizeOptionsFactory {
    createSequelizeOptions(): SequelizeModuleOptions;
}
