const { userRepository }= require("../../repositories/user.repository");

const { treatError } = require("../utils/errors");
const { InvalidToken } = require("../utils/errors/InvalidToken");

const jwt = require("jsonwebtoken");

function authorize(req, res, next) {
  try{
    const token = req.headers.authorization;
    if (!token) throw new InvalidToken();

    jwt.verify(token, process.env.APP_SECRET_KEY, async (err, decodedToken)=>{
      if(err) throw new InvalidToken();

      const userExists = await userRepository.findById(decodedToken.id);
      if(!userExists) throw new InvalidToken();

      next();
    })

  } catch(error) {
    const treatedError = treatError(error);
    res.status(treatedError.code).json(treatedError);
  }
}

module.exports = { authorize }
