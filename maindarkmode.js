// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }

// window.onload = function myFunction() {
//     document.querySelector("#dark-mode-btn").addEventListener("click", function() {
//         var element = document.body;
//         element.classList.toggle("dark-mode");

//         var isDarkMode = element.classList.contains("dark-mode");

//         localStorage.setItem("darkMode", isDarkMode);
//     });

//     var darkMode = localStorage.getItem("darkMode");
//     if (darkMode === "true") {
//         document.body.classList.add("dark-mode");
//     }
// };

window.onload = function myFunction() {
    document.querySelector("#dark-mode-btn").addEventListener("click", toggleDarkMode);
    var darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") {
        document.body.classList.add("dark-mode");
    }
  };
  
  function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var isDarkMode = element.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
  }
  


console.log('hello darkness my old friend')


