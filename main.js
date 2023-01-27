const BASE_URL = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=';
const difficultyLevel = document.querySelector('#difficulty_level');
const bodyPart = document.querySelector('#body_part');
const submitButton = document.querySelector('#submit_button');
const responseSection = document.querySelector('#response-section');
const videoElement = document.getElementById('video');
const instructionElement = document.getElementById('instructions');



submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2c538078c1msheee9f94c432bbccp194a5bjsn437f38882160',
            'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch(`${BASE_URL}${bodyPart.value}&difficulty=${difficultyLevel.value}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            // Clear previous workout elements
            responseSection.innerHTML = "";
            response.forEach(workout => {
                if(workout.name !== undefined){ // to check if workout name is fixed
                  // Create the workout element 
                  const workoutDescription = document.createElement('p');
                  workoutDescription.innerHTML = `<p>Exercise: ${workout.name}</p>`;
                  workoutDescription.classList.add('workout');
                  // Add event listener to workout element
                  workoutDescription.addEventListener('click', function (event) {
                      // Update the instruction element with the workout details
                      instructionElement.innerHTML = workout.instructions;
                      // Update the video element with the video URL
                    const video = document.querySelector('#video')

                    // Easy Chest Workouts
                    if (workout.name == "Bodyweight Flyes") {
                      video.contentWindow.location.href = "https://www.youtube.com/embed/gSTCYWHLRnw"
                      
                    }

                    if (workout.name == "Wide-grip bench press") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/yVpUZ0Tbk2M"
                    }

                    if (workout.name == "Wide-Grip Decline Barbell Bench Press") {
                      video.contentWindow.location.href = "https://www.youtube.com/embed/_HdG2PBgCcw"
                    }
                    
                    if (workout.name == "Reverse-grip incline dumbbell bench press") {
                      video.contentWindow.location.href = "https://www.youtube.com/embed/J5iwMYSZ7cE"
                    }
                    
                    if (workout.name == "Drop Push") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/xeYtZkHNPjg"
                    }

                    if (workout.name == "Neck Press") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/y90T12sTukg"
                    }

                    if (workout.name == "Incline cable chest press") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/chvZZIWje0M"
                    }

                    if (workout.name == "Cable Chest Press") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/FVWJglwid4I"
                    }

                    if (workout.name == "Hands-elevated push-up") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/HmZcKSDlIYc"
                    }

                    if (workout.name == "Cable Chest Press") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/FVWJglwid4I"
                    }

                    //Intermediate Chest Workouts
                    if (workout.name == "Dumbbell Bench Press") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/VmB1G1K7v94"
                    }

                    if (workout.name == "Pushups") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/JyCG_5l3XLk"
                    }

                    if (workout.name == "Close-grip bench press") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/-ngr1UfPerI"
                    }

                    if (workout.name == "Dumbbell Flyes") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/UKwkChzThig"
                    }

                    if (workout.name == "Incline dumbbell bench press") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/IP4oeKh1Sd4"
                    }

                    if (workout.name == "Low-cable cross-over") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/77UbTnqvVzE"
                    }

                    if (workout.name == "Barbell Bench Press - Medium Grip") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/gRVjAtPip0Y"
                    }

                    if (workout.name == "Chest dip") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/sM6XUdt1rm4?start=122"
                    }

                    if (workout.name == "Decline Dumbbell Flyes") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/ilcbmIoz9S4"
                    }

                    if (workout.name == "Incline cable chest fly") {
                      video.contentWindow.location.href = "https://www.youtube.com/embed/GtHNC-5GtR0"
                    }
                    
                    //Easy Ab Workouts

                    if (workout.name == "Dumbbell spell caster") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/fxL497_e6WI"
                    }

                    if (workout.name == "Plate Twist") {
                      video.contentWindow.location.href = "https://www.youtube.com/embed/pDTHSnoGoEc"
                    }
                    
                    if (workout.name == "Gorilla Chin/Crunch") {
                      video.contentWindow.location.href = "https://www.youtube.com/embed/5LZEO-tQ5Rg"
                    }
                    
                    if (workout.name == "Crunch - Hands Overhead") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/XbrA2n8aEHE"
                    }

                    if (workout.name == "Bosu Ball Cable Crunch With Side Bends") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/4mIbpBoWuWo"
                    }

                    if (workout.name == "Stomach Vacuum") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/14veOCV46z8"
                    }

                    if (workout.name == "Butt-Ups") { 
                      video.contentWindow.location.href = "https://www.youtube.com/embed/8myvQaaDlUU"
                    }
                    
                      
                      video.classList.remove("hide");
                      // Remove the selected class from all workout elements
                      const allWorkouts = document.querySelectorAll('.workout');
                      allWorkouts.forEach(w => w.classList.remove('selected'));
                      // Add the selected class to the workout element that was clicked
                      event.target.classList.add('selected');
                  });
                
                  // Append workout element to the response section
                  responseSection.append(workoutDescription);
                }
                else{ // hide the video element if workout name is not fixed
                  videoElement.classList.add("hide");
                }
            });
            
        })

});  

// Get the button
let topButton = document.querySelector(".top_button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
topButton.addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


