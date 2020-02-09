const mongoose = require("mongoose");
const asyncHandler = require('express-async-handler');
mongoose.set("useCreateIndex", true);

module.exports = asyncHandler( async () => {
  await mongoose.connect(`${process.env.LOCAL_DB_URI}/${process.env.DB_NAME}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('connected successfully to mongo')
});

// module.exports = () => {
//   mongoose
//     .connect(`${process.env.DB_URI}`, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true
//     })
//     .then(() => console.log('You are now connected to mongo'))
//     .catch(err => console.error('something went wrong', err));
// };
