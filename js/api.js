async function getCategories() {

    const response = await fetch(CONFIG.API_URL + "?action=categories");

    return await response.json();

}