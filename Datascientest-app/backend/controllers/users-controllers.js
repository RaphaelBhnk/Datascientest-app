const checkPassword = require("./../shared/checkPassword");
const checkAccount = require("./../shared/checkAccount");

var accounts = [
  { mail: "a@gmail.com", password: "Test123" },
  { mail: "b@gmail.com", password: "Test123" },
  { mail: "c@gmail.com", password: "Test123" },
];

const signIn = (req, res, next) => {
  const { mail, password } = req.body;
  if (checkPassword(password)) {
    accounts.push({ mail, password });
    res.json({ message: "Vous êtes inscrit" });
  } else {
    res.json({ message: "Verifiez votre mot de passe" });
  }
};

const login = (req, res, next) => {
  const { mail, password } = req.body;
  const validAccount = checkAccount(mail, password, accounts);
  if (validAccount) {
    res.json({ message: "En ligne" });
  } else {
    res.json({ message: "Il faut s'inscrire" });
  }
};

exports.signIn = signIn;
exports.login = login;
