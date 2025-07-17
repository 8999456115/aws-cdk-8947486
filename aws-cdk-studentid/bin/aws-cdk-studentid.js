#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = __importStar(require("aws-cdk-lib"));
const aws_cdk_studentid_stack_1 = require("../lib/aws-cdk-studentid-stack");
const app = new cdk.App();
new aws_cdk_studentid_stack_1.AwsCdk8947486Stack(app, 'AwsCdkStudentidStack', {
    env: {
        account: '482397833027',
        region: 'us-east-1',
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLWNkay1zdHVkZW50aWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhd3MtY2RrLXN0dWRlbnRpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlEQUFtQztBQUNuQyw0RUFBb0U7QUFFcEUsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUIsSUFBSSw0Q0FBa0IsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLEVBQUU7SUFDbEQsR0FBRyxFQUFFO1FBQ0gsT0FBTyxFQUFFLGNBQWM7UUFDdkIsTUFBTSxFQUFFLFdBQVc7S0FDcEI7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQXdzQ2RrODk0NzQ4NlN0YWNrIH0gZnJvbSAnLi4vbGliL2F3cy1jZGstc3R1ZGVudGlkLXN0YWNrJztcblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcbm5ldyBBd3NDZGs4OTQ3NDg2U3RhY2soYXBwLCAnQXdzQ2RrU3R1ZGVudGlkU3RhY2snLCB7XG4gIGVudjoge1xuICAgIGFjY291bnQ6ICc0ODIzOTc4MzMwMjcnLFxuICAgIHJlZ2lvbjogJ3VzLWVhc3QtMScsXG4gIH0sXG59KTtcbiJdfQ==