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
    if (!food.value) {
        paragraph.textContent = "Please enter a valid food item.";
    } else {
        const BASE_URL = `https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${food.value}`;
        fetch(BASE_URL, option)
            .then(response => {
                if(!response.ok) {
                    throw new Error('Invalid food input');
                }
                return response.json();
            })
            .then(result => {
                if(result.items.length === 0) {
                    throw new Error('Invalid food input');
                }
                function displayCalories() {
                    let items = result.items;
                    for (let item of items) {
                        paragraph.textContent = `Food: ${item.name}; Calories: ${item.calories}; Carbs: ${item.carbohydrates_total_g}g; Cholesterol: ${item.cholesterol_mg}mg; Fat: ${item.fat_total_g}g; Protein: ${item.protein_g}g; Sodium: ${item.sodium_mg}mg; Sugar: ${item.sugar_g}g; Fiber: ${item.fiber_g}g; Potassium: ${item.potassium_mg}mg; Serving Size: ${item.serving_size_g}g; `;
                    }
                }
                displayCalories();
            })
            .catch(err => {
                paragraph.textContent = "Invalid food input";
                console.error(err);
            });
    }
});




const submitButton2 = document.querySelector('.submit_button2');
submitButton2.addEventListener('click', (event) => {
    event.preventDefault();


    //Function to calculate maintenance calories US

    function calculateMaintenanceCaloriesUS() {
        const weight = parseFloat(document.querySelector('#weight').value);
        const height = parseFloat(document.querySelector('#height').value);
        const inches = parseFloat(document.querySelector('#height2').value);
        const age = parseFloat(document.querySelector('#age').value);
        const activityLevel = document.querySelector('#activity_level1').value;
        const genderElements = document.querySelectorAll('.gender');
        let gender = '';
        for (let i = 0; i < genderElements.length; i++) {
            if (genderElements[i].checked) {
                gender = genderElements[i].value;
                
            }
        }
        if (age < 14 || age > 81) {
            alert('Please enter a valid age');
        }
        if (height < 0 || height > 8) {
            alert('Please enter a valid height');
        }
        if (inches < 0 || inches > 12) {
            alert('Please enter a valid height');
        }

        if (weight < 0) {
            alert('Please enter a valid weight');
        }
    
        let BMR = 0;
if (gender === 'Male') {
    BMR = 66 + (6.2 * weight) + (12.7 * (height * 12 + inches)) - (6.76 * age);
} else if (gender === 'Female') {
    BMR = 655 + (4.35 * weight) + (4.7 * (height * 12 + inches)) - (4.7 * age);
} else {
    alert("Invalid gender input. Please select 'Male' or 'Female'.");
}

let maintenanceCalories = 0;
let mildWeightLoss = -500;
let moderateWeightLoss = -1000;
let extremeWeightLoss = -2000;
let mildWeightGain = 500;
let moderateWeightGain = 1000;
let extremeWeightGain = 2000;

console.log(typeof activityLevel)
        
switch (activityLevel) {
    case "BMR":
        maintenanceCalories = BMR;
        break;
    case "sedentary":
        maintenanceCalories = BMR * 1.2;
        break;
    case "lightly_active":
        maintenanceCalories = BMR * 1.375;
        break;
    case "moderately_active":
        maintenanceCalories = BMR * 1.55;
        break;
    case "very_active":
        maintenanceCalories = BMR * 1.725;
        break;
    case "extra_active":
        maintenanceCalories = BMR * 1.9;
        break;
    default:
        alert("Invalid activity level input. Please select one of the options.");

        console.log(activityLevel, maintenanceCalories)
        
}
        

        document.querySelector("#calorie_info").innerHTML = `
        
        <strong>Your daily calorie intake based on you activity level and goals is:</strong> <br> <br>
        <strong>Your estimated maintenance calories are: ${Math.ceil(maintenanceCalories)} calories <br>
        <strong>Mild Weight Loss:</strong> ${Math.ceil(maintenanceCalories + mildWeightLoss)} calories - 0.5 pound a week <br>
        <strong>Moderate Weight Loss:</strong> ${Math.ceil(maintenanceCalories + moderateWeightLoss)} calories - 1 pound a week <br>
        <strong>Extreme Weight Loss:</strong> ${Math.ceil(maintenanceCalories + extremeWeightLoss)} calories - 2 pounds a week<br>
        <strong>Mild Weight Gain:</strong> ${Math.ceil(maintenanceCalories + mildWeightGain)} calories - 0.5 pound a week<br>
        <strong>Moderate Weight Gain:</strong> ${Math.ceil(maintenanceCalories + moderateWeightGain)} calories - 1 pound a week<br>
        <strong>Extreme Weight Gain:</strong> ${Math.ceil(maintenanceCalories + extremeWeightGain)} calories - 2 pounds a week`;

        

    }

    calculateMaintenanceCaloriesUS();


   

})



