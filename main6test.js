BASE_URL = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=';
const difficultyLevel = document.querySelector('#difficulty_level');
const bodyPart = document.querySelector('#body_part');
const submitButton = document.querySelector('#submit_button');
const responseSection = document.querySelector('#response-section');
const videoElement = document.getElementById('video');
const instructionElement = document.getElementById('instructions');

const chestVideos = {
    "Bodyweight Flyes": "<iframe width='560' height='315' src='https://www.youtube.com/embed/gSTCYWHLRnw' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
    "Wide-grip bench press": "https://www.youtube.com/watch?v=p243tCuvAfY",
    "Wide-Grip Decline Barbell Bench Press": "https://www.youtube.com/watch?v=p243tCuvAfY",
    // add more exercises and their corresponding video URLs here
  }
  

const absVideos = {
    "Dumbbell spell caster": "https://www.youtube.com/watch?v=p243tCuvAfY",
}

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
          workoutDescription.setAttribute("data-instructions", workout.instructions);
          let videoUrl;
          if(bodyPart.value === "chest"){
            videoUrl = chestVideos[workout.name];
          }else if(bodyPart.value === "abs"){
            videoUrl = absVideos[workout.name];
          }
          if(videoUrl){
              workoutDescription.setAttribute("data-video", videoUrl);
          }else{
              workoutDescription.setAttribute("data-video", "https://www.youtube.com/");
          }
          workoutDescription.addEventListener('click', function (event) {
              // Update the instruction element with the workout details
              instructionElement.innerHTML = workout.instructions;
              // Update the video element with the video URL
              if (workout.name === "Bodyweight Flyes") {
                videoElement.src = "https://www.youtube.com/embed/gSTCYWHLRnw";
                videoElement.innerHTML = `<iframe width="560" height="315" src="${event.target.getAttribute("data-video")}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
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
.catch(err => console.error(err));

