const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// MongoDB connection
const dbURI = 'mongodb+srv://vaibhavsalve645:FsbxDbYVNw3cB42p@cluster0.m4md1.mongodb.net/paykeeperData?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json
//for sign up
// User schema
const userSchema = new mongoose.Schema({
  userType: { type: String, required: true },
  name: { type: String, required: true },
  shopName: { type: String },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});


const User = mongoose.model('User', userSchema);

// Routes
app.post('/api/users/signup', async (req, res) => {
  try {
      const { userType, shopName , name, mobile, email, password } = req.body;
      if (!userType || !name || !mobile || !email || !password) {
          return res.status(400).json({ message: 'All fields are required' });
      }

      const newUser = new User({ userType, name,shopName, mobile, email, password });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      console.error('Error during user signup:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

//for sign in 
// Assuming you have `User` model set up for MongoDB
const bcrypt = require('bcrypt'); // For password comparison

app.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  console.log("Received email:", email);

  try {
      const user = await User.findOne({ email });
      if (!user) {
          console.log("User not found");
          return res.status(400).json({ message: 'User not found' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          console.log("Invalid credentials");
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      console.log("Sign-in successful");
      req.session.user = user;
      res.status(200).json({ message: 'Sign in successful' });
  } catch (error) {
      console.error("Error in /signin route:", error);
      res.status(500).json({ message: 'Server error' });
  }
});




// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
