async function loadApp() {

    const categories = await getCategories();

    let html = `

    <h1>${CONFIG.APP_NAME}</h1>

    <div class="category-grid">

    `;

    categories.forEach(category => {

        html += `

        <div class="category-card">

            <div style="font-size:60px">

                ${category.Emoji}

            </div>

            <h2>${category.Category}</h2>

            <p>${category.Words} Words</p>

        </div>

        `;

    });

    html += "</div>";

    document.getElementById("app").innerHTML = html;

}

loadApp();