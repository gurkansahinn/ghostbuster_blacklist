export type ServerEssentialProperties = Required<{
    readonly id: string;
    readonly name: string;
    readonly ip: string;
}>;

export type ServerProperties = ServerEssentialProperties;