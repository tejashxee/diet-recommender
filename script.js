const foodItems = {
    veg: {
        breakfast: [
            { name: "Oatmeal", calories: 150, image: "https://plus.unsplash.com/premium_photo-1669559809547-6e4c4fe41371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2F0bWVhbHxlbnwwfHwwfHx8MA%3D%3D" },
            { name: "Greek Yogurt", calories: 100, image: "https://plus.unsplash.com/premium_photo-1674482019268-7d55dc027bf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JlZWslMjB5b2d1cnR8ZW58MHx8MHx8fDA%3D" },
            { name: "Smoothie", calories: 250, image: "https://images.unsplash.com/photo-1514995428455-447d4443fa7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtb290aGllfGVufDB8fDB8fHww" },
            { name: "Avocado Toast", calories: 300, image: "https://plus.unsplash.com/premium_photo-1661667100338-4e9bdf34ceef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZvY2FkbyUyMHRvYXN0fGVufDB8fDB8fHww" },
            { name: "Chia Pudding", calories: 200, image: "https://plus.unsplash.com/premium_photo-1663840225455-1f385f41bf9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpYSUyMHB1ZGRpbmd8ZW58MHx8MHx8fDA%3D" }
        ],
        lunch: [
            { name: "Quinoa Bowl", calories: 400, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-YNKZPSg7xaMLMGTumf83_CQAK3gH6WBgw&s" },
            { name: "Vegetable Stir Fry", calories: 300, image: "https://images.unsplash.com/photo-1627662168806-efa33a7cda86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnaXRhYmxlJTIwc3RpciUyMGZyeXxlbnwwfHwwfHx8MA%3D%3D" },
            { name: "Pasta Primavera", calories: 500, image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFzdGElMjBwcmltYXZlcmF8ZW58MHx8MHx8fDA%3D" },
            { name: "Chickpea Salad", calories: 350, image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2twZWElMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D" },
            { name: "Vegetable Wrap", calories: 400, image: "https://plus.unsplash.com/premium_photo-1664648119219-b00a63aa4bdb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZXRhYmxlJTIwd3JhcHxlbnwwfHwwfHx8MA%3D%3D" }
        ],
        dinner: [
            { name: "Vegetarian Tacos", calories: 400, image: "https://images.unsplash.com/photo-1593759608136-45eb2ad9507d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhcmlhbiUyMHRhY29zfGVufDB8fDB8fHww" },
            { name: "Lentil Soup", calories: 300, image: "https://plus.unsplash.com/premium_photo-1712678665862-3c51d1fac466?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVudGlsJTIwc291cHxlbnwwfHwwfHx8MA%3D%3D" },
            { name: "Mushroom Risotto", calories: 500, image: "https://plus.unsplash.com/premium_photo-1695240028448-9a8bf3e164f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaHJvb20lMjByaXNvdHRvfGVufDB8fDB8fHww" },
            { name: "Vegetable Curry", calories: 600, image: "https://images.unsplash.com/photo-1577186912275-4f74c57458ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhYmxlJTIwY3Vycnl8ZW58MHx8MHx8fDA%3D" }
        ]
    },
    nonVeg: {
        breakfast: [
            { name: "Scrambled Eggs", calories: 200, image: "https://plus.unsplash.com/premium_photo-1700948867117-6f306eb2d112?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjcmFtYmxlZCUyMGVnZ3N8ZW58MHx8MHx8fDA%3D" },
            { name: "Bacon and Eggs", calories: 350, image: "https://plus.unsplash.com/premium_photo-1693086421131-c0cb5a3bada3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFjb24lMjBhbmQlMjBlZ2dzfGVufDB8fDB8fHww" },
            { name: "Egg and Avocado Toast", calories: 400, image: "https://plus.unsplash.com/premium_photo-1676106624038-81d1e17573db?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZvY2FkbyUyMHRvYXN0fGVufDB8fDB8fHww" },
            { name: "Chicken Sausage", calories: 250, image: "https://plus.unsplash.com/premium_photo-1692835633672-50919fdffb75?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHNhdXNhZ2V8ZW58MHx8MHx8fDA%3D" }
        ],
        lunch: [
            { name: "Grilled Chicken Salad", calories: 350, image: "https://images.unsplash.com/photo-1604909052583-bb464043e050?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JpbGxlZCUyMGNoaWNrZW4lMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D" },
            { name: "Chicken Sandwich", calories: 450, image: "https://images.unsplash.com/photo-1666819604716-7b60a604bb76?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW4lMjBzYW5kd2ljaHxlbnwwfHwwfHx8MA%3D%3D" },
            { name: "Fish Tacos", calories: 400, image: "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaCUyMHRhY29zfGVufDB8fDB8fHww" },
            { name: "Chicken Caesar Wrap", calories: 550, image: "https://plus.unsplash.com/premium_photo-1679287668420-80c27ea4fb31?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHdyYXB8ZW58MHx8MHx8fDA%3D" }
        ],
        dinner: [
            { name: "Salmon with Asparagus", calories: 500, image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FsbW9uJTIwd2l0aCUyMGFzcGFyZ3VzfGVufDB8fDB8fHww" },
            { name: "Chicken Curry", calories: 600, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGN1cnJ5fGVufDB8fDB8fHww" },
            { name: "Shrimp Fried Rice", calories: 500, image: "https://media.istockphoto.com/id/1253232810/photo/indian-food-biryani-with-basmati-rice-and-shrimp.jpg?s=612x612&w=is&k=20&c=filaYtTqi0cOU9d6ZDDFV7LmTNCtoBXD6HPDQ9QPmgQ=" },
            { name: "Lamb Chops", calories: 650, image: "https://images.unsplash.com/photo-1659275799237-cbc057d97e7f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFtYiUyMGNob3BzfGVufDB8fDB8fHww" }
        ]
    }
};

function getRandomMeal(mealType, diet) {
    const meals = foodItems[diet][mealType];
    return meals[Math.floor(Math.random() * meals.length)];
}

function calculateBMI(weight, height) {
    height = height / 100; // convert height to meters
    return weight / (height * height);
}

function getWeightCategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Healthy';
    return 'Overweight';
}

function generateDietPlan(diet) {
    const dietPlan = {};
    let totalCalories = 0;

    for (const mealType in foodItems[diet]) {
        const meal = getRandomMeal(mealType, diet);
        dietPlan[mealType] = meal;
        totalCalories += meal.calories;
    }

    return { dietPlan, totalCalories };
}

function displayResult(bmi, category) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Your BMI: ${bmi.toFixed(2)}</h2>
        <h3>Weight Category: ${category}</h3>
    `;
    resultDiv.style.display = 'block';
}

function displayDietPlan(diet) {
    const { dietPlan, totalCalories } = generateDietPlan(diet);
    const dietPlanDiv = document.getElementById('diet-plan');
    dietPlanDiv.innerHTML = `
        <h2>Your Diet Plan:</h2>
        <div class="diet-item">
            <img src="${dietPlan.breakfast.image}" alt="${dietPlan.breakfast.name}">
            <div>Breakfast: ${dietPlan.breakfast.name} - ${dietPlan.breakfast.calories} calories</div>
        </div>
        <div class="diet-item">
            <img src="${dietPlan.lunch.image}" alt="${dietPlan.lunch.name}">
            <div>Lunch: ${dietPlan.lunch.name} - ${dietPlan.lunch.calories} calories</div>
        </div>
        <div class="diet-item">
            <img src="${dietPlan.dinner.image}" alt="${dietPlan.dinner.name}">
            <div>Dinner: ${dietPlan.dinner.name} - ${dietPlan.dinner.calories} calories</div>
        </div>
        <h3>Total Calories: ${totalCalories} calories</h3>
    `;
    dietPlanDiv.style.display = 'block';
}

document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const age = parseInt(document.getElementById('age').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const gender = document.getElementById('gender').value;
    const dietType = document.getElementById('diet-type').value;

    const bmi = calculateBMI(weight, height);
    const category = getWeightCategory(bmi);

    displayResult(bmi, category);
    displayDietPlan(dietType);
});
