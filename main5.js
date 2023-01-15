const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c538078c1msheee9f94c432bbccp194a5bjsn437f38882160',
		'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com'
	}
};


const submitButton3 = document.querySelector('.submit_button3');
const food = document.querySelector('#food');
const paragraph = document.querySelector('#food_input');


submitButton3.addEventListener('click', (event) => {
    event.preventDefault();
    const BASE_URL = `https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${food.value}`;
    console.log('11',BASE_URL, food.value)
    fetch(BASE_URL, option)
        .then(response => response.json())
        .then(result => {
            console.log(Array.isArray(result))
            console.log(typeof result, '14',result)

            //Function to display calories of food selected by the user to the main page

    function displayCalories() {
        let items = result.items;
        for (let item of items) {
         console.log('4',item.name, item.calories)
         paragraph.textContent = `Food: ${item.name}; Calories: ${item.calories}; Carbs: ${item.carbohydrates_total_g}g; Cholesterol: ${item.cholesterol_mg}mg; Fat: ${item.fat_total_g}g; Protein: ${item.protein_g}g; Sodium: ${item.sodium_mg}mg; Sugar: ${item.sugar_g}g; Fiber: ${item.fiber_g}g; Potassium: ${item.potassium_mg}mg; Serving Size: ${item.serving_size_g}g; `;
        //figure out why I can't get a new line to display
            //add error message for invalid food input
        }
            }
            displayCalories();



              


        })
    
        .catch(err => console.error(err));
})


const submitButton4 = document.querySelector('#submit_button4');
submitButton4.addEventListener('click', (event) => {
    event.preventDefault();
    //Function to calculate maintenance calories Metric
    function calculateMaintenanceCaloriesMetric() {
        const weight = parseFloat(document.querySelector('#weight1').value);
        const height = parseFloat(document.querySelector('#height1').value);
        const age = parseFloat(document.querySelector('#age1').value);
        const activityLevel = document.querySelector('#activity_level2').value;
        const genderElements = document.querySelectorAll('.gender1');
        let gender = '';
        for (let i = 0; i < genderElements.length; i++) {
            if (genderElements[i].checked) {
                gender = genderElements[i].value;
            }
        }
        if (age < 14 || age > 81) {
            alert('Please enter a valid age');
            
        }
        if (height < 1 || height > 250) {
            alert('Please enter a valid height');
            
        }
        if (weight < 1) {
            alert('Please enter a valid weight');
            
        }

    let maintenanceCalories = 0;
    let mildWeightLoss = -500;
    let moderateWeightLoss = -1000;
    let extremeWeightLoss = -2000;
    let mildWeightGain = 500;
    let moderateWeightGain = 1000;
    let extremeWeightGain = 2000;

        let BMR = 0;
        if (gender === 'Male') {
            BMR = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        } else if (gender === 'Female') {
            BMR = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
        }
        let calorie_info1 = document.querySelector("#calorie_info1");
        if (activityLevel === 'BMR') {
            calorie_info1.textContent = `Your BMR is ${BMR} calories per day`;
        } else if (activityLevel === "sedentary") {
            calorie_info1.textContent = "You need " + (BMR * 1.2) + " calories per day to maintain your weight";
        } else if (activityLevel === "lightly_active") {
            calorie_info1.textContent = "You need " + (BMR * 1.375) + " calories per day to maintain your weight";
        } else if (activityLevel === "moderately_active") {
            calorie_info1.textContent = "You need " + (BMR * 1.55) + " calories per day to maintain your weight";
        } else if (activityLevel === "active") {
            calorie_info1.textContent = "You need " + (BMR * 1.725) + " calories per day to maintain your weight";
        } else if (activityLevel === "very_active") {
            calorie_info1.textContent = "You need " + (BMR * 1.9) + " calories per day to maintain your weight";
        } else if (activityLevel === "extra_active") {
            calorie_info1.textContent = "You need " + (BMR * 2.1) + " calories per day to maintain your weight";
        }
    }
    calculateMaintenanceCaloriesMetric();
});

