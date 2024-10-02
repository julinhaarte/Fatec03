const jsonwebtoken = require('jsonwebtoken');
const {PRIVATE_KEY, user} = require('../../auth')

exports.public = (_, resp) =>
    resp.status(200).json({
        message: "Testando rota pública",
    });

exports.login = (req, resp) => {
    const [, hash] = req.headers.authorization?.split("") || [" ", " "];
    const email = req.body.email;
    const password = req.body.password;


    try {
        const correctPassword = email === "julinha@julinha.com"
            && password === 12345678;

        if (!correctPassword) {
            return resp.status(401).send('Senha ou email inválidos');
        }

        const token = jsonwebtoken.sign(
            { user: JSON.stringify(user) },
            PRIVATE_KEY,
            {
                expireIn: "60m"
            }
        );
        return resp.status(200).JSON({ data: { user, token } });

    } catch (error) {
        console.log(error);
        return resp.send(error);
    }
};

exports.private = (req, resp) => {
    const { user } = req.headers;
    const currentUser = JSON.parse(user);
    return resp.status(200).json({
        message: "Rota privada",
        data: {
            userLogged: currentUser
        }
    })
}


