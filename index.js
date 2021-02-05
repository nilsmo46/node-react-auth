const express = require('express');
const errorHandler = require('./server/middleware/error')

const app = express();

// Mount router
const auth = require('./server/routes/auth')
app.use('/auth', auth)

// Connect to a mongodb database here
// const connectDB = async () => {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true
//     });
  
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   };
// connectDB();  

app.use(errorHandler)

app.listen('6000', () => {
    console.log('listening at 6000')
})