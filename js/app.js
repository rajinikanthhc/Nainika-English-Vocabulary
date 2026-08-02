let categories = [];

async function loadCategories() {
    try {

        const response = await fetch("data/categories.json");
        categories = await response.json();

        showHome();

    } catch (err) {

        document.getElementById("app").innerHTML =
            "<h2>Unable to load categories.</h2>";

        console.error(err);

    }
}

function showHome() {

    APP.currentScreen = "home";

    const app = document.getElementById("app");

    app.innerHTML = `

<header class="header">

    <h1>🌈 Hello, Nainika!</h1>

    <p>What would you like to learn today?</p>

</header>

<section class="category-grid">

${categories.map(createCategoryCard).join("")}

</section>

<footer>

Version ${CONFIG.VERSION}

</footer>

`;

    bindCategoryEvents();

}

function createCategoryCard(category) {

    return `

<div
class="category-card"
data-category="${category.name}">

<div
class="emoji">

${category.emoji}

</div>

<h2>

${category.name}

</h2>

<p>

${category.words} Words

</p>

<button class="learn-btn">

Start Learning →

</button>

</div>

`;

}

function bindCategoryEvents() {

    document
        .querySelectorAll(".category-card")
        .forEach(card => {

            card.addEventListener("click", () => {

                APP.selectedCategory =
                    card.dataset.category;

                showLevels();

            });

        });

}

function showLevels() {

    APP.currentScreen = "levels";

    const app =
        document.getElementById("app");

    app.innerHTML = `

<header class="header">

<button
class="back-btn">

← Back

</button>

<h1>

${APP.selectedCategory}

</h1>

<p>

Choose your learning stage

</p>

</header>

<div class="level-grid">

${levelCard("🌱","Beginner",1)}

${levelCard("📘","Reader",2)}

${levelCard("🧩","Builder",3)}

${levelCard("🔍","Explorer",4)}

${levelCard("🏆","Master",5)}

</div>

`;

    document
        .querySelector(".back-btn")
        .addEventListener("click", showHome);

}

function levelCard(icon,name,level){

return`

<div class="level-card">

<div class="emoji">

${icon}

</div>

<h2>

${name}

</h2>

</div>

`;

}

loadCategories();