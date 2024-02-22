const checkAccount = (mail, password, acc) => {
  for (const account in acc) {
    if (acc[account].mail === mail) {
      if (acc[account].password === password) {
        return true;
      }
    }
  }
  return false;
};
module.exports = checkAccount;
