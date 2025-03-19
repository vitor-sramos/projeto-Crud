const db = require("../db/db");

const userController = {
    getUser: (req, res) => {
        const q = "select * from usuario";

        db.query(q, (err, data) => {
            if (err) {
                return res.status(404).json({message: "Erro ao buscar usuários"});
            };
            return res.status(200).json({message: "Busca realizada com sucesso!", data});
        })
    }
};

module.exports = userController;