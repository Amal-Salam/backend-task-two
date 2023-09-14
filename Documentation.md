
# REST API Documentation

## Introduction

This documentation provides detailed information on how to use the REST API for managing person records. The API supports Create, Read, Update, and Delete (CRUD) operations on person resources. It is built using Node.js and MongoDB for data storage.

## Table of Contents


1. [API Endpoints](#api-endpoints)
   - [Create a Person](#create-a-person)
   - [Retrieve a Person](#retrieve-a-person)
   - [Update a Person](#update-a-person)
   - [Delete a Person](#delete-a-person)
2. [Request and Response Formats](#request-and-response-formats)
   - [Create Request](#create-request)
   - [Create Response](#create-response)
   - [Retrieve Response](#retrieve-response)
   - [Update Request](#update-request)
   - [Update Response](#update-response)
   - [Delete Response](#delete-response)
3. [Sample Usage](#sample-usage)
4. [Known Limitations](#known-limitations)
5. [Local Deployment](#local-deployment)
6. [Hosting](#hosting)



## Getting Started
   Please refer to the README.md file.

## API Endpoints

### Create a Person

- **Endpoint:** `/api`
- **Method:** POST
- **Request Format:** JSON or X-WWW-FORM-URLENCODED 

#### Create Request

``` JSON or X-WWW-FORM-URLENCODED
{
  "name": "Aaron Warner"
  
}
```

#### Create Response

```JSON or X-WWW-FORM-URLENCODED
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

``` JSON or X-WWW-FORM-URLENCODED
{
  "name": "Aaron Warner"

}
```

### Update a Person

- **Endpoint:** `/api/_id`
- **Method:** PATCH
- **Request Format:** JSON or X-WWW-FORM-URLENCODED

#### Update Request

```JSON or X-WWW-FORM-URLENCODED
{
  "name": "Benjamin Thomas Barnes"
}
```

#### Update Response

```JSON or X-WWW-FORM-URLENCODED
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

```
{
  "message": "Person deleted successfully"
}
```

## Sample Usage via Postman

### Create a Person
POST  "Content-Type: application/x-www-form-urlencoded" or application/json {
  name: Anakin Skywalker
} https://hng-backend-2.onrender.com/api

### Retrieve a Person
https://hng-backend-2.onrender.com/api/_id

### Update a Person

PATCH "Content-Type: application/x-www-form-urlencoded or application/json"{
  name: Darth Vader
} https://hng-backend-2.onrender.com/api/_id

### Delete a Person
DELETE https://hng-backend-2.onrender.com/api/_id


## Known Limitations

- The API currently supports only basic CRUD operations on persons.
- Validation for input data is limited to string fields only.

## Local Deployment

To deploy the API locally, follow the [Setup Instructions](#setup-instructions) and replace the API endpoint with `http://localhost:your-port`.

## Hosting

The API is hosted at `https://hng-backend-2.onrender.com/api`. Ensure it is accessible and working properly before deploying it to production.

For more details, refer to the source code and UML diagrams available in the [GitHub repository](https://github.com/Amal-Salam/backend-task-two/tree/main).

