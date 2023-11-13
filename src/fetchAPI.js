document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchBtn");
    const mealInput = document.getElementById("mealInput");
    const mealResults = document.getElementById("mealResults");

    searchButton.addEventListener("click", function () {
        const mealName = mealInput.value;
        if (mealName.trim() !== "") {
            fetchMealData(mealName);
        }
    });

    function fetchMealData(mealName) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
            .then((response) => response.json())
            .then((data) => {
                displayMeals(data.meals);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    function displayMeals(meals) {
        mealResults.innerHTML = "";

        if (!meals) {
            mealResults.innerHTML = "<p>No meals found. Please try another search.</p>";
            return;
        }

        meals.forEach((meal) => {
            const mealDiv = document.createElement("div");
            mealDiv.className = "meal";

            const mealName = meal.strMeal;
            const mealThumb = meal.strMealThumb;

            mealDiv.innerHTML = `
                <h3>${mealName}</h3>
                <img src="${mealThumb}" alt="${mealName}"><
            `;

            mealDiv.addEventListener("click", function () {
                displayRecipe(meal);
            });

            mealResults.appendChild(mealDiv);
        });
    }

   function displayRecipe(meal) {
        
        const recipe = `
            <br><img src="${meal.strMealThumb}"><br>
            <h2>${meal.strMeal}</h2><br>
            <p><b>Ingredient: </b><br><br> ${meal.strMeasure1} ${meal.strIngredient1}, ${meal.strMeasure2} ${meal.strIngredient2}, ${meal.strMeasure3} ${meal.strIngredient3}, ${meal.strMeasure4} ${meal.strIngredient4}, ${meal.strMeasure5} ${meal.strIngredient5}, ${meal.strMeasure6} ${meal.strIngredient6}, ${meal.strMeasure7} ${meal.strIngredient7}, ${meal.strMeasure8} ${meal.strIngredient8}, ${meal.strMeasure9} ${meal.strIngredient9}, ${meal.strMeasure10} ${meal.strIngredient10}, ${meal.strMeasure11} ${meal.strIngredient11}, ${meal.strMeasure12} ${meal.strIngredient12}, ${meal.strMeasure13} ${meal.strIngredient13}, ${meal.strMeasure14} ${meal.strIngredient14}, ${meal.strMeasure15} ${meal.strIngredient15}, ${meal.strMeasure16} ${meal.strIngredient16}, ${meal.strMeasure17} ${meal.strIngredient17}, ${meal.strMeasure18} ${meal.strIngredient18}, ${meal.strMeasure19} ${meal.strIngredient19}, ${meal.strMeasure20} ${meal.strIngredient20}</p><br>

            <p><b>How to cook:</b> <br><br>${meal.strInstructions}</p><br>

            <p><b>Source: </b><br><br>${meal.strSource}</p><br>

            <p><b>Watch tutorial here:</b> <br><br>${meal.strYoutube} </p>
            
        `;

        mealResults.innerHTML = recipe;
    }
});

// Function to navigate to CRUD.html
function goToCRUDPage() {
    window.location.href = 'crud.html';
}

function toggleSlideMenu() {
    var slideMenu = document.getElementById("slide-menu");
    slideMenu.style.display = (slideMenu.style.display === "block") ? "none" : "block";
}
    


