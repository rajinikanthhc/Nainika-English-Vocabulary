async function loadCategories() {

    const response = await fetch(CONFIG.API_URL + "?action=categories");

    const result = await response.json();

    renderCategories(result.data);

}

function renderCategories(categories) {

    let html = `
        <h1>Nainika English Vocabulary</h1>
        <div class="category-grid">
    `;

    categories.forEach(category => {

        html += `
            <div class="category-card">
                <div style="font-size:60px">${category.Emoji}</div>
                <h2>${category.Category}</h2>
                <p>${category.Words} Words</p>
            </div>
        `;

    });

    html += `</div>`;

    document.getElementById("app").innerHTML = html;

}

loadCategories();