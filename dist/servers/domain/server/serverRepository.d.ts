import { Server } from "./serverAggregate";
export interface ServerRepository {
    newId: () => Promise<string>;
    save: (server: Server | Server[]) => Promise<void>;
    findById: (id: string) => Promise<Server | undefined>;
    findByName: (name: string) => Promise<Server | undefined>;
    findByIp: (ip: string) => Promise<Server | undefined>;
}
