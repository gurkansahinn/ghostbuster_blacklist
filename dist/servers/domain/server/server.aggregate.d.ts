import { AggregateRoot } from "@nestjs/cqrs";
import { ServerEssentialProperties, ServerProperties } from "./valueObject/server.properties";
export declare class ServerAggregate extends AggregateRoot implements Server {
    private readonly id;
    private readonly name;
    private readonly ip;
    constructor(properties: ServerEssentialProperties);
    properties(): ServerProperties;
}
export interface Server {
    properties: () => ServerProperties;
}
