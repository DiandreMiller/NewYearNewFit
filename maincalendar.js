window.onload = function() {
    // Get the current date
    const currentDate = new Date();
  
    // Get the current month and year
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
  
    // Create the table element
    const table = document.createElement('table');
  
    // Add event listeners to the "previous" and "next" buttons
    const prevButton = document.querySelector('#prev');
    prevButton.addEventListener('click', function() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      updateCalendar();
    });
  
    const nextButton = document.querySelector('#next');
    nextButton.addEventListener('click', function() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      updateCalendar();
    });
  
    // Function to update the calendar
    function updateCalendar() {
      // Clear the table
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }
  
      // Create the table header
      const headerRow = document.createElement('tr');
      const prevCell = document.createElement('th');
      prevCell.innerHTML = '<';
      prevCell.style.backgroundColor = 'whitesmoke';
      headerRow.append(prevCell);
      const titleCell = document.createElement('th');
      titleCell.colSpan = 5;
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      titleCell.innerHTML = months[currentMonth] + ' ' + currentYear;
      titleCell.style.backgroundImage = 'radial-gradient(circle, red, whitesmoke)';
      headerRow.append(titleCell);
      const nextCell = document.createElement('th');
      nextCell.innerHTML = '>';
      nextCell.style.backgroundColor = 'whitesmoke)';
      headerRow.append(nextCell);
      table.append(headerRow);
  
      // Create the table body
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const bodyRow = document.createElement('tr');
      for (let i = 0; i < 7; i++) {
        const dayCell = document.createElement('td');
        dayCell.innerHTML = days[i];
        bodyRow.append(dayCell);
      }
      table.append(bodyRow)
  
      // Fill in the days of the month
      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
      let day = 1;
      let stop = false;
      while (!stop) {
        const row = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
          const cell = document.createElement('td');
          if (i < firstDay && day === 1) {
              for (let j = 0; j < firstDay; j++) {
                  cell.innerHTML = "";
                  row.append(cell)
              }         } else if (day > lastDay) {
                stop = true;
              } else {
                cell.innerHTML = day;
                day++;
                row.append(cell);
              }
            }
            if(row.childNodes.length > 0) {
              table.append(row);
            }
          }
      
          // Add the table to the calendar container
          const calendarContainer = document.querySelector('#calendar');
          calendarContainer.innerHTML = '';
          calendarContainer.append(table);
    }
  
      
        // Update the calendar for the first time
        updateCalendar();
        
}
      


      
  

  

