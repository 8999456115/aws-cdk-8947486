# AWS CDK Project

This is an AWS CDK project using **TypeScript** to define and deploy cloud infrastructure.

## 📦 Project Structure

- `bin/`: Entry point for CDK app
- `lib/`: Stack and construct definitions
- `cdk.out/`: CDK output (auto-generated)
- `test/`: Unit tests
- `cdk.json`: CDK CLI config
- `tsconfig.json`: TypeScript config
- `package.json`: Project dependencies

## 🚀 Getting Started

### Prerequisites
- Node.js
- AWS CLI
- AWS CDK (`npm install -g aws-cdk`)

### Setup
```bash
npm install        # Install dependencies
cdk bootstrap      # Bootstrap your environment
cdk deploy         # Deploy stack to AWS
cdk synth          # Generate CloudFormation template
