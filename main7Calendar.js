let currentDate = new Date();
let currentMonth = months[currentDate.getMonth()];
let currentYear = currentDate.getFullYear();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthEl = document.querySelector("#month");
let prevBtn = document.querySelector("#prev-month");
let nextBtn = document.querySelector("#next-month");
let calendarDates = document.querySelector("#calendar-dates");

prevBtn.addEventListener("click", prevMonth);
nextBtn.addEventListener("click", nextMonth);

showCalendar(currentMonth, currentYear);

function prevMonth() {
  currentMonth = months[months.indexOf(currentMonth) - 1] || months[months.length -1]
  currentYear = (months.indexOf(currentMonth) === 0) ? currentYear - 1 : currentYear;
  showCalendar(currentMonth, currentYear);
}

function nextMonth() {
  currentMonth = months[(months.indexOf(currentMonth) + 1) % months.length]
  currentYear = (months.indexOf(currentMonth) === 11) ? currentYear + 1 : currentYear;
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  let firstDay = new Date(year, months.indexOf(month), 1).getDay();
  let daysInMonth = new Date(year, months.indexOf(month) + 1, 0).getDate();
  
  monthEl.innerHTML = month + " " + year;

  calendarDates.innerHTML = "";

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        row.append(cell);
      } else if (date > daysInMonth) {
        break;
    } else {
        let cell = document.createElement("td");
        let cellText = document.createTextNode(date);
        if (date === currentDate.getDate() && month === currentDate.toLocaleString('default', { month: 'long' })) {
        cell.classList.add("today");
        }
        cell.append(cellText);
        row.append(cell);
        date++;
        }
        }
        calendarDates.append(row);
        }
}
        


