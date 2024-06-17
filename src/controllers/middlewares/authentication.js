const { userRepository }= require("../../repositories/user.repository");

const { treatError } = require("../utils/errors");
const { InvalidToken } = require("../utils/errors/InvalidToken");

const jwt = require("jsonwebtoken");

async function authorize(req, res, next) {
  try{
    const token = req.headers.authorization?.split("Bearer ")[1];
    if (!token) throw new InvalidToken();

    await new Promise((resolve, reject)=>{
      jwt.verify(token, process.env.APP_SECRET_KEY, async (err, decodedToken)=>{
          try{
            if(err) throw new InvalidToken();
            const userExists = await userRepository.findById(decodedToken.id);
            if(!userExists) throw new InvalidToken();

            resolve(next());
          } catch(error){
            reject(error);
          }
        })
    });

  } catch(error) {
    const treatedError = treatError(error);
    res.status(treatedError.code).json(treatedError);
  }
}

module.exports = { authorize }
