"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerAggregate = void 0;
const cqrs_1 = require("@nestjs/cqrs");
class ServerAggregate extends cqrs_1.AggregateRoot {
    constructor(properties) {
        super();
        Object.assign(this, properties);
    }
    properties() {
        return {
            id: this.id,
            name: this.name,
            ip: this.ip
        };
    }
}
exports.ServerAggregate = ServerAggregate;
//# sourceMappingURL=server.aggregate.js.map