"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: "https://" + process.env.allowedOrigin,
            credentials: true
        }
    });
    app.use(cookieParser());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Ocso API')
        .setDescription('API for Oxxo')
        .setVersion('0.8')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map