import userRepository from "../repositories/userRepository.js";

class UserController {
    constructor() {
        this.showCreateForm = this.showCreateForm.bind(this);
        this.create = this.create.bind(this);
    }

    showCreateForm(req, res) {
        res.render("createUser", { error: null });
    }

    async create(req, res) {
        try {
            await userRepository.create(req.body);
            // Redirigir al inicio después de registrar
            res.redirect("/");
        } catch (error) {
            // Manejar error de duplicado (código 11000) de MongoDB para email único
            let errorMessage = error.message;
            if (error.code === 11000) {
                errorMessage = "Ese correo ya está siendo usado por otro ranchero.";
            }
            res.render("createUser", { error: errorMessage });
        }
    }
}

export default new UserController();
