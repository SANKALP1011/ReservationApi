# ReservationApi v1.1
 - This is an booking api where user can book flight , trains and cabs for their journey.
 - Once the user have authenticated themselves they can use the Authentication token inorder to access the other protected routes to book.
 - Complete backend for the reservation system.
 
 # Postman Link
 > [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/24017825-e9898502-94c3-4a47-b980-89142bbf3adb?action=collection%2Ffork&collection-url=entityId%3D24017825-e9898502-94c3-4a47-b980-89142bbf3adb%26entityType%3Dcollection%26workspaceId%3D3198dfc5-3073-439e-8560-ae541475bc1d)

# Stack 
  - Express
  - Node
  - MongoDB Atlas
  
 # Authentication 
   - Json Web Token
  
 # Deployment 
   - Heroku (Under progress)
 # Documenation
   - Swagger (Under progress)

# Routes 
  - User
    - /SignUp
    - /LogIn
  - Booking 
    - /bookCab
    - /bookFlight
    - /bookTrain
    - /bookingDetails/:id
    - /cancelBooking
  - Cabs
    - /addCabs
    - /allCabs
    - /cabsById/:id
    - /limitedCabs
  - Flights
    - /addFlights
    - /allFlights
    - /flight/:id
    - /limitedFlight
  - Train
    - /addTrains
    - /allTrains
    - /trains/:id
    - /limitTrains
 
# Postman Sample Output (Authentication Routes)
  - User Sign Up
  ``` json
  [
  {
    "UserName": "Gokuuuuuuu",
    "Email": "ghhh@l.com",
    "Password": "gokuu123",
    "isLoggedIn": false,
    "hasBooking": false,
    "UserBookingDetails": [],
    "_id": "63542a508b48b8ca699b7273",
    "createdAt": "2022-10-22T17:37:20.054Z",
    "updatedAt": "2022-10-22T17:37:20.054Z",
    "__v": 0
}
]
  ```
 - User Log In
   ``` json
   [
   {
    "updateLoginStatus": {
        "_id": "63540b2c0856bd9956ae5da4",
        "UserName": "Gokuuuuuuu",
        "Email": "goku@g,ail.com",
        "Password": "gokuu123",
        "isLoggedIn": true,
        "hasBooking": true,
        "UserBookingDetails": null,
        "createdAt": "2022-10-22T15:24:28.806Z",
        "updatedAt": "2022-10-22T17:39:18.437Z",
        "__v": 0
    },
    "LogInToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQYXNzd29yZCI6eyJfaWQiOiI2MzU0MGIyYzA4NTZiZDk5NTZhZTVkYTQiLCJVc2VyTmFtZSI6Ikdva3V1dXV1dXUiLCJFbWFpbCI6Imdva3VAZyxhaWwuY29tIiwiUGFzc3dvcmQiOiJnb2t1dTEyMyIsImlzTG9nZ2VkSW4iOnRydWUsImhhc0Jvb2tpbmciOnRydWUsIlVzZXJCb29raW5nRGV0YWlscyI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMi0xMC0yMlQxNToyNDoyOC44MDZaIiwidXBkYXRlZEF0IjoiMjAyMi0xMC0yMlQxNzozOToxOC40MzdaIiwiX192IjowfSwiaWF0IjoxNjY2NDYwMzYzLCJleHAiOjE2NjY1NDY3NjN9.axokP91hfn5cLWHSZhJOs1yy1KESnxR5qjZtRwksO7k"
}
]
   ```

    
 
  
 
