import api from "./api.js";

class JokeApi {
    getRandomJoke() {
        return api.get("jokes/random");
    }
}

export default new JokeApi();