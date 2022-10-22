# ReservationApi v1.1
 - This is an booking api where user can book flight , trains and cabs for their journey.
 - Once the user have authenticated themselves they can use the Authentication token inorder to access the other protected routes to book.
 - Complete backend for the reservation system.

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
    
 
  
 
