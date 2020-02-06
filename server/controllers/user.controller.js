users = [];

module.exports = {
  createUser: async (req, res, next) => {
    users.push(req.body);
    res.json(users);
  },

  loginUser: async (req, res, next) => {
    const user = await users.filter(user => user.username === req.body.username && user.password === req.body.password);
    if (user.length > 0) {
      res.json({
        massage: 'Login successful!',
        errorMassage: null,
        Result: user
      });
    } else {
      res.json({
        massage: 'User not found!',
        errorMassage: 'Error log',
        Result: user
      });
    }

  }
}
