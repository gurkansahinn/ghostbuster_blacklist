"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter({ logger: true }));
    app.useGlobalPipes(new common_1.ValidationPipe());
    const documentBuilder = new swagger_1.DocumentBuilder()
        .setTitle('Ghostbuster - Blacklist')
        .setVersion(process.env.VERSION)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, documentBuilder);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map