import postRepository from "../repositories/postRepository.js";
import userRepository from "../repositories/userRepository.js";

class PostService {
    async createPost(userId, postData) {
        const user = await userRepository.findById(userId);
        if (!user) throw new Error("Usuario no encontrado");

        // Procesar hashtags: convertir string separado por comas a array
        if (typeof postData.hashtags === "string") {
            postData.hashtags = postData.hashtags
                .split(",")
                .map(tag => tag.trim())
                .filter(tag => tag.length > 0);
        }

        return await postRepository.create({ ...postData, user: user._id });
    }

    async getPosts() {
        return await postRepository.findAll();
    }

    async getPostById(postId) {
        return await postRepository.findById(postId);
    }

    async getPostsByUser(userId) {
        return await postRepository.findByUser(userId);
    }

    async updatePost(postId, postData) {
        // Procesar hashtags: convertir string separado por comas a array
        if (typeof postData.hashtags === "string") {
            postData.hashtags = postData.hashtags
                .split(",")
                .map(tag => tag.trim())
                .filter(tag => tag.length > 0);
        }

        return await postRepository.update(postId, postData);
    }

    async deletePost(postId) {
        return await postRepository.delete(postId);
    }
}

export default new PostService();
