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
                    console.log('100',workout.name)
                    if (workout.name == "Bodyweight Flyes") {
                        videoElement.src = "https://www.youtube.com/watch?v=p243tCuvAfY";
                      }
                      else if(workout.name == "push ups"){
                        videoElement.src = "https://www.youtube.com/watch?v=p243tCuvAfY";
                      }
                      videoElement.classList.remove("hide");
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


