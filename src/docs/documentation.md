## Swagger Petstore - OpenAPI 3.0 Documentation - v1.0.11
*Automatically Generated at: Thu Oct 03 2024 16:17:03 GMT-0300 (Horário Padrão de Brasília)*

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
### [POST]
**Description:** Add a new pet to the store



 # /pet/findByStatus
### [GET]
**Description:** Multiple status values can be provided with comma separated strings



 # /pet/findByTags
### [GET]
**Description:** Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.



 # /pet/{petId}
### [GET]
**Description:** Returns a single pet
### [POST]
**Description:** 
### [DELETE]
**Description:** delete a pet



 # /pet/{petId}/uploadImage
### [POST]
**Description:** 



 # /store/inventory
### [GET]
**Description:** Returns a map of status codes to quantities



 # /store/order
### [POST]
**Description:** Place a new order in the store



 # /store/order/{orderId}
### [GET]
**Description:** For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
### [DELETE]
**Description:** For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors



 # /user
### [POST]
**Description:** This can only be done by the logged in user.



 # /user/createWithList
### [POST]
**Description:** Creates list of users with given input array



 # /user/login
### [GET]
**Description:** 



 # /user/logout
### [GET]
**Description:** 



 # /user/{username}
### [GET]
**Description:** 
### [PUT]
**Description:** This can only be done by the logged in user.
### [DELETE]
**Description:** This can only be done by the logged in user.


