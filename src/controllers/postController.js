import postService from "../services/postService.js";
import userRepository from "../repositories/userRepository.js";

class PostController {
    constructor() {
        this.create = this.create.bind(this);
        this.getAll = this.getAll.bind(this);
        this.showCreateForm = this.showCreateForm.bind(this);
        this.showEditForm = this.showEditForm.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async create(req, res) {
        try {
            const { userId } = req.body;
            const post = await postService.createPost(userId, req.body);
            res.redirect("/posts");
        } catch (error) {
            const users = await userRepository.findAll();
            res.render("createPost", { error: error.message, users });
        }
    }

    async getAll(req, res) {
        try {
            const posts = await postService.getPosts();
            res.render("posts", { posts });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async showCreateForm(req, res) {
        try {
            const users = await userRepository.findAll();
            res.render("createPost", { error: null, users });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async showEditForm(req, res) {
        try {
            const post = await postService.getPostById(req.params.id);
            const users = await userRepository.findAll();
            if (!post) return res.redirect("/posts");
            res.render("editPost", { post, error: null, users });
        } catch (error) {
            console.error("Error en showEditForm:", error);
            res.redirect("/posts");
        }
    }

    async update(req, res) {
        try {
            await postService.updatePost(req.params.id, req.body);
            res.redirect("/posts");
        } catch (error) {
            const post = await postService.getPostById(req.params.id);
            const users = await userRepository.findAll();
            res.render("editPost", { post, error: error.message, users });
        }
    }

    async delete(req, res) {
        try {
            await postService.deletePost(req.params.id);
            res.redirect("/posts");
        } catch (error) {
            console.error("Error al eliminar el post:", error);
            res.redirect("/posts");
        }
    }
}

export default new PostController();
