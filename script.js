// Get the list of dates in the calendar
const dateList = document.querySelectorAll('.date');

// Function to update the selected date on the screen
function updateSelectedDate(selectedDate) {
  const selectedDayElement = document.getElementById('selected-day');
  const selectedMonthElement = document.getElementById('selected-month');
  const selectedYearElement = document.getElementById('selected-year');

  selectedDayElement.textContent = selectedDate.date;
  selectedMonthElement.textContent = selectedDate.month;
  selectedYearElement.textContent = selectedDate.year;
}

// Add click event listeners to each date in the calendar
dateList.forEach(dateElement => {
  dateElement.addEventListener('click', () => {
    const date = dateElement.textContent.trim();
    const [month, day, year] = date.split(' ');

    const selectedDate = {
      date: day,
      month,
      year,
    };

    updateSelectedDate(selectedDate);
  });
});
