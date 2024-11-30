"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsService = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const common_1 = require("@nestjs/common");
let AwsService = class AwsService {
    constructor() {
        this.s3 = new client_s3_1.S3Client({
            region: "us-east-1",
            credentials: {
                accessKeyId: process.env.accesskey_bucket,
                secretAccessKey: process.env.secretkey_bucket,
            }
        });
    }
    async uploadFile(file) {
        const key = file.originalname;
        const url = `https://nest-ocso-test.s3.amazonaws.com/${key}`;
        const bucket = "nest-ocso-test-otto";
        const command = new client_s3_1.PutObjectCommand({
            Key: key,
            Body: file.buffer,
            Bucket: bucket,
        });
        await this.s3.send(command);
        return url;
    }
};
exports.AwsService = AwsService;
exports.AwsService = AwsService = __decorate([
    (0, common_1.Injectable)()
], AwsService);
//# sourceMappingURL=aws.service.js.map