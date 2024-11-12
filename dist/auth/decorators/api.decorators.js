"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiAuth = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
exports.ApiAuth = (() => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({
        status: 401,
        description: "Missing or invalid token"
    }), (0, swagger_1.ApiResponse)({
        status: 403,
        description: "Missing role"
    }), (0, swagger_1.ApiResponse)({
        status: 500,
        description: "Server erros"
    }));
});
//# sourceMappingURL=api.decorators.js.map