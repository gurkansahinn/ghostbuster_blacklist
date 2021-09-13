import { AggregateRoot } from "@nestjs/cqrs";
export declare class ServerAggregate extends AggregateRoot implements Server {
    private readonly id;
    private readonly name;
    private readonly ip;
    constructor(properties: ServerEssentialProperties);
    properties(): ServerProperties;
}
export declare type ServerEssentialProperties = Required<{
    readonly id: string;
    readonly name: string;
    readonly ip: string;
}>;
export declare type ServerProperties = ServerEssentialProperties;
export interface Server {
    properties: () => ServerProperties;
}
