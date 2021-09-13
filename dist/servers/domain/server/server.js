"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountImplement = void 0;
class AccountImplement extends AggregateRoot {
    constructor(properties) {
        super();
        Object.assign(this, properties);
    }
    properties() {
        return {
            id: this.id,
            name: this.name,
        };
    }
    compareId(id) {
        return id === this.id;
    }
}
exports.AccountImplement = AccountImplement;
//# sourceMappingURL=server.js.map