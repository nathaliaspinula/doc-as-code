## Swagger Petstore - OpenAPI 3.0 Documentation - v1.0.11
*Automatically Generated at: Fri Oct 04 2024 11:01:32 GMT-0300 (Horário Padrão de Brasília)*

This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

_If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)

http://swagger.io/terms/

Contact
email: apiteam@swagger.io
 # /pet
### [PUT]
**Description:** Update an existing pet by Id
**Responses:**
- 200: Successful operation
- 400: Invalid ID supplied
- 404: Pet not found
- 422: Validation exception
### [POST]
**Description:** Add a new pet to the store
**Responses:**
- 200: Successful operation
- 400: Invalid input
- 422: Validation exception



 # /pet/findByStatus
### [GET]
**Description:** Multiple status values can be provided with comma separated strings
**Parameters:**
| pIn | name | description | type | required |
| --- | --- | --- | --- | --- |
| query | status | Status values that need to be considered for filter | string | false |
**Responses:**
- 200: successful operation
- 400: Invalid status value



 # /pet/findByTags
### [GET]
**Description:** Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
**Parameters:**
| pIn | name | description | type | required |
| --- | --- | --- | --- | --- |
| query | tags | Tags to filter by | array | false |
**Responses:**
- 200: successful operation
- 400: Invalid tag value



 # /pet/{petId}
### [GET]
**Description:** Returns a single pet
**Parameters:**
| pIn | name | description | type | required |
| --- | --- | --- | --- | --- |
| path | petId | ID of pet to return | integer | true |
**Responses:**
- 200: successful operation
- 400: Invalid ID supplied
- 404: Pet not found
### [POST]
**Description:** 
**Parameters:**
| pIn | name | description | type | required |
| --- | --- | --- | --- | --- |
| path | petId | ID of pet that needs to be updated | integer | true |
| query | name | Name of pet that needs to be updated | string |  |
| query | status | Status of pet that needs to be updated | string |  |
**Responses:**
- 400: Invalid input
### [DELETE]
**Description:** delete a pet
**Parameters:**
| pIn | name | description | type | required |
| --- | --- | --- | --- | --- |
| header | api_key |  | string | false |
| path | petId | Pet id to delete | integer | true |
**Responses:**
- 400: Invalid pet value



 # /pet/{petId}/uploadImage
### [POST]
**Description:** 
**Parameters:**
| pIn | name | description | type | required |
| --- | --- | --- | --- | --- |
| path | petId | ID of pet to update | integer | true |
| query | additionalMetadata | Additional Metadata | string | false |
**Responses:**
- 200: successful operation



 # /store/inventory
### [GET]
**Description:** Returns a map of status codes to quantities
**Responses:**
- 200: successful operation



 # /store/order
### [POST]
**Description:** Place a new order in the store
**Responses:**
- 200: successful operation
- 400: Invalid input
- 422: Validation exception



 # /store/order/{orderId}
### [GET]
**Description:** For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
**Parameters:**
| pIn | name | description | type | required |
| --- | --- | --- | --- | --- |
| path | orderId | ID of order that needs to be fetched | integer | true |
**Responses:**
- 200: successful operation
- 400: Invalid ID supplied
- 404: Order not found
### [DELETE]
**Description:** For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
**Parameters:**
| pIn | name | description | type | required |
| --- | --- | --- | --- | --- |
| path | orderId | ID of the order that needs to be deleted | integer | true |
**Responses:**
- 400: Invalid ID supplied
- 404: Order not found



 # /user
### [POST]
**Description:** This can only be done by the logged in user.
**Responses:**
- default: successful operation



 # /user/createWithList
### [POST]
**Description:** Creates list of users with given input array
**Responses:**
- 200: Successful operation
- default: successful operation



 # /user/login
### [GET]
**Description:** 
**Parameters:**
| pIn | name | description | type | required |
| --- | --- | --- | --- | --- |
| query | username | The user name for login | string | false |
| query | password | The password for login in clear text | string | false |
**Responses:**
- 200: successful operation
- 400: Invalid username/password supplied



 # /user/logout
### [GET]
**Description:** 
**Responses:**
- default: successful operation



 # /user/{username}
### [GET]
**Description:** 
**Parameters:**
| pIn | name | description | type | required |
| --- | --- | --- | --- | --- |
| path | username | The name that needs to be fetched. Use user1 for testing.  | string | true |
**Responses:**
- 200: successful operation
- 400: Invalid username supplied
- 404: User not found
### [PUT]
**Description:** This can only be done by the logged in user.
**Parameters:**
| pIn | name | description | type | required |
| --- | --- | --- | --- | --- |
| path | username | name that need to be deleted | string | true |
**Responses:**
- default: successful operation
### [DELETE]
**Description:** This can only be done by the logged in user.
**Parameters:**
| pIn | name | description | type | required |
| --- | --- | --- | --- | --- |
| path | username | The name that needs to be deleted | string | true |
**Responses:**
- 400: Invalid username supplied
- 404: User not found


