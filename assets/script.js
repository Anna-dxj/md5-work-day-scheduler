// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const saveBtn = $('.saveBtn')
const currentDayDiv = $('#currentDay')
const month = dayjs().month()
const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const date = dayjs().date()
const day = dayjs().day()
const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let dayTxt;
let monthTxt;

const nowHour = dayjs().hour()
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn.on('click', handleSaveBtn)
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  // HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  applyClasses()
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  // HINT: How can the id
  // attribute of each time-block be used to do this?
  setTime()
});

function handleSaveBtn() {
  const btnClicked = $(event.target)
  console.log('yes')

}

function applyClasses () {
  for (let i = 8; i<18; i++) {
    const hourEl = $(`#hour-${i}`)
    if (nowHour === i) {
      hourEl.addClass('present')
    } else if (nowHour < i) {
      hourEl.addClass('future')
    } else {
      hourEl.addClass('past')
    }
  }
}

function saveLocalStorage () {}

function getLocalStorage () {}

function setTime () {
  for (let i=0; i<dayArr.length; i++){
    if (day === i) {
      dayTxt = dayArr[i]
    }
  }

  for (let i=0; i<monthArr.length; i++) {
    if (month === i) {
      monthTxt = monthArr[i]
    }
  }

  currentDayDiv.text(`${dayTxt}, ${monthTxt} ${date}`)
}