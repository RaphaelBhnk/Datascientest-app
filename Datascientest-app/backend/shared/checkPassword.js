const isValidPassword = (password) => {
  return (
    password.length >= 5 && /\d/.test(password) && /[a-zA-Z]/.test(password)
  );
};
module.exports = isValidPassword;
