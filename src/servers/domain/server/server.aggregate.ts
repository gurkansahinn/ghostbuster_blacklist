import { AggregateRoot } from "@nestjs/cqrs";
import { ServerEssentialProperties, ServerProperties } from "./valueObject/server.properties";

export class ServerAggregate extends AggregateRoot implements Server {
    private readonly id: string;
    private readonly name: string;
    private readonly ip: string;

    constructor(
        properties: ServerEssentialProperties,
    ) {
        super();
        Object.assign(this, properties);
    }

    properties(): ServerProperties {
        return {
            id: this.id,
            name: this.name,
            ip: this.ip
        };
    }
}

export interface Server {
    properties: () => ServerProperties;
}