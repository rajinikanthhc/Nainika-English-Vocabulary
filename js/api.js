const API = {

    async getCategories() {

        const response = await fetch(
            CONFIG.API_URL + "?action=categories"
        );

        const json = await response.json();

        return json.data;

    },

    async getWords(category = "") {

        let url = CONFIG.API_URL + "?action=words";

        if (category) {

            url += "&category=" + encodeURIComponent(category);

        }

        const response = await fetch(url);

        const json = await response.json();

        return json.data;

    }

};