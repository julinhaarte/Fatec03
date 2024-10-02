const jsonwebtoken = require ('jsonwebtoken');

exports.PRIVATE_KEY = "1011FFF"
exports.user = {
    name: "Julinha",
    email: "julinha@julinha.com"
};

exports.tokenValited = (resquest, response, next) => {
 
    const [, token] = resquest.headers.authorization?.split("") || ["", ""];
   
    if (!token) return response.status(401).send("Acesso negado. Nenhum token fornecido.");
   
    try {
      const payload = jsonwebtoken.verify(token, this.PRIVATE_KEY);
      const userIdFromToken = typeof payload != "string" && payload.user;
   
      if (!this.user && userIdFromToken) {
        return response.status(401).json({
            message: "Token Inválido"
        });
      }
   
      request.headers["user"] = payload.user;
   
      return next();
    } catch (error) {
      console.log(error);
      return response.status(401).json({message:"O token não é válido"});
    }
  };