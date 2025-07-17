#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdk8947486Stack } from '../lib/aws-cdk-studentid-stack';

const app = new cdk.App();
new AwsCdk8947486Stack(app, 'AwsCdkStudentidStack', {
  env: {
    account: '482397833027',
    region: 'us-east-1',
  },
});
