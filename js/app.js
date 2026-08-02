let categories = [];

// Load categories from JSON
async function loadCategories() {
    try {
        const response = await fetch("data/categories.json");
        categories = await response.json();
        renderHome();
    } catch (error) {
        console.error("Error loading categories:", error);

        document.getElementById("app").innerHTML = `
            <h2 style="text-align:center;color:red;">
                Failed to load categories.
            </h2>
        `;
    }
}

// Create Category Card
function createCategoryCard(category) {

    return `
        <div class="category-card">

            <div class="emoji">
                ${category.emoji}
            </div>

            <div class="category-name">
                ${category.name}
            </div>

            <div class="word-count">
                ${category.words} Words
            </div>

        </div>
    `;
}

// Render Home Screen
function renderHome() {

    const app = document.getElementById("app");

    app.innerHTML = `

        <header>

            <h1>📖 ${CONFIG.APP_NAME}</h1>

            <p>Learn • Speak • Grow</p>

        </header>

        <div class="search-box">

            <span class="material-symbols-rounded">
                search
            </span>

            <input
                id="searchInput"
                type="text"
                placeholder="Search vocabulary..."
                onkeyup="filterCategories()">

        </div>

        <section
            id="categoryGrid"
            class="category-grid">

            ${categories.map(createCategoryCard).join("")}

        </section>

        <footer>

            Version ${CONFIG.VERSION}

        </footer>

    `;
}

// Search Filter
function filterCategories() {

    const keyword = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filtered = categories.filter(category =>
        category.name.toLowerCase().includes(keyword)
    );

    document.getElementById("categoryGrid").innerHTML =
        filtered.map(createCategoryCard).join("");

}

// Start App
loadCategories();