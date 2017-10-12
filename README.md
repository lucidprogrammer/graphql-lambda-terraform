# Overview

This is an example graphql endpoint packaged as a aws lambda function deployed to an aws api gateway. All the infrastructure required is provisioned using terraform, only thing you need to use this is your AWS credentials.

The code is structured to hold more than one lambda function. i.e. Currently the src/ folder contains only graphql folder. You can add additional lambda functions, and modify the main.tf if needed.

The sample here does not use terraform backend configuration. For production, it is advisable to use a backend like S3.

# Configure and Create graphql endpoint using Aws Lambda and Aws api_gateway

## Prerequisites

Make sure you have installed terraform & zip installed.

## Clone this repo & install dependencies

## Set environment variables.

```
export TF_VAR_aws_access_key=yourawsaccesskey
export TF_VAR_aws_secret_key=yourawssecretkey
export TF_VAR_region=awsregion

```
## Run locally
```
yarn run graphql-server

```
## Deploy infrastructure

If you wish to change names of variables, for example, path or name of api etc, review variables.tf. But not mandatory.

Run the following command.

```
yarn run test-deploy

```

You should see the _url_ where the deployment is available. Take a note of that and use in the following steps to test it.
## From your browser

Just browse to the _url_ path output you received in the previous step
## Using Curl

```
//_url_ is the url you received while running the script.
curl -X POST _url_ -d '{"query": "{users{firstName} }" }' -H 'Content-Type: application/json'

```

## Using AWS API Test Console

Select _Method_ as POST in the dropdown list.

_Query String_, provide the following

```
query= "{users{firstName} }"

```
_Headers_, provide the following,
```
Content-Type: application/json

```

Click _Test_ button.
