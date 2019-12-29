module.exports = {
  validateUser
};

function validateUser(user) {
  let errors = [];

  if (!user.email || user.email.length < 4) {
    errors.push("Please include a valid email");
  }

  if (!user.password || user.password.length < 6) {
    errors.push("Please include a password with at least 6 characters");
  }

  return {
    isSuccessful: errors.length > 0 ? false : true,
    errors
  };
}
