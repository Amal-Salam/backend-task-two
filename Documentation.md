
# REST API Documentation

## Introduction

This documentation provides detailed information on how to use the REST API for managing person records. The API supports Create, Read, Update, and Delete (CRUD) operations on person resources. It is built using Node.js and MongoDB for data storage.

## Table of Contents

1. [Getting Started](#getting-started)
   - [Setup Instructions](#setup-instructions)
   - [API Endpoint](#api-endpoint)
2. [API Endpoints](#api-endpoints)
   - [Create a Person](#create-a-person)
   - [Retrieve a Person](#retrieve-a-person)
   - [Update a Person](#update-a-person)
   - [Delete a Person](#delete-a-person)
3. [Request and Response Formats](#request-and-response-formats)
   - [Create Request](#create-request)
   - [Create Response](#create-response)
   - [Retrieve Response](#retrieve-response)
   - [Update Request](#update-request)
   - [Update Response](#update-response)
   - [Delete Response](#delete-response)
4. [Sample Usage](#sample-usage)
5. [Known Limitations](#known-limitations)
6. [Local Deployment](#local-deployment)
7. [Hosting](#hosting)

## Getting Started

### Setup Instructions

To get started with this API, follow these steps:

1. Clone the GitHub repository to your local machine:
 git clone https://github.com/your-username/your-api-repo.git

2. Install the required dependencies:

   cd your-api-repo
   npm install

3. Set up your MongoDB database and configure the connection in the `config.js` file.

4. Start the server:


### API Endpoint

The API is accessible at the following endpoint:

```
https://yourdomain.com/api
```

## API Endpoints

### Create a Person

- **Endpoint:** `/api`
- **Method:** POST
- **Request Format:** JSON

#### Create Request

```json
{
  "name": "Aaron Warner"
  
}
```

#### Create Response

```json
{
  "message": "Person created successfully",
  "person": {
    "name": "Aaron Warner"
  }
}
```

### Retrieve a Person

- **Endpoint:** `/api/_id`
- **Method:** GET

#### Retrieve Response

```json
{
  "name": "Aaron Warner"

}
```

### Update a Person

- **Endpoint:** `/api/_id`
- **Method:** PATCH
- **Request Format:** JSON

#### Update Request

```json
{
  "name": "Benjamin Thomas Barnes"
}
```

#### Update Response

```json
{
  "message": "Person updated successfully",
  "person": {
    "name": "Benjamin Thomas Barnes",
    
  }
}
```

### Delete a Person

- **Endpoint:** `/api/_id`
- **Method:** DELETE

#### Delete Response

```json
{
  "message": "Person deleted successfully"
}
```

## Sample Usage via Postman

### Create a Person
POST  "Content-Type: application/x-www-form-urlencoded" {
  name: Anakin Skywalker
} https://yourdomain.com/api

### Retrieve a Person
https://yourdomain.com/api/_id

### Update a Person

PATCH "Content-Type: application/x-www-form-urlencoded"{
  name: Darth Vader
} https://yourdomain.com/api/_id

### Delete a Person
DELETE https://yourdomain.com/api/_id


## Known Limitations

- The API currently supports only basic CRUD operations on persons.
- Validation for input data is limited to string fields only.

## Local Deployment

To deploy the API locally, follow the [Setup Instructions](#setup-instructions) and replace the API endpoint with `http://localhost:your-port`.

## Hosting

The API is hosted at `https://yourdomain.com/api`. Ensure it is accessible and working properly before deploying it to production.

For more details, refer to the source code and UML diagrams available in the [GitHub repository](https://github.com/your-username/your-api-repo).

**Note:** Replace placeholders like `your-username`, `your-api-repo`, and `yourdomain.com` with actual values in your documentation.
