const express = require('express')
const path = require('path');
const app = express()
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware logs the data //
const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
}

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
// // Gets All Reservations //
// app.get('/api/tables', (req, res) => {
//   res.json(reservation);
// });
// // Get Waitlist //
// app.get('/api/waitlist', (req, res) => {
//   res.json(waitlist);
// });
// app.post('/api/clear', (req, res) => {
//     reservation = [];
//     waitlist = [];
// });

// // Create New Reservation //
// app.post("/api/tables", function(req, res) {
//   var newReservation = req.body;
//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   // newReservation = newReservation.name
//   // .name.replace(/\s+/g, "").toLowerCase() 
//   console.log(newReservation);
//   if (reservation.length > 4) {
//     waitlist.push(newReservation);
    
//   } else {
      
//     reservation.push(newReservation);
//   }
//   res.json(newReservation);
  
// });



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));