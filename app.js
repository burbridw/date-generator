const daySettings = document.querySelector(".day-settings")
const monthSettings = document.querySelector(".month-settings")
const dateSettings = document.querySelector(".date-settings")
const yearSettings = document.querySelector(".year-settings")
const daysArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const datesArr = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"]
const yearsArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "DEL"]

function generate() {
    for ( let i = 0; i < 7; i++ ) {
        daySettings.innerHTML += `
        <div class="day-display">
        <div class="day-text">${daysArr[i]}</div>
        <div class="day-img">IMG</div>
        </div>
        `
    }
    for ( let i = 0; i < 12; i++ ) {
        monthSettings.innerHTML += `
        <div class="month-display">
        <div class="month-img">${monthsArr[i]}</div>
        </div>
        `
    }
    for ( let i = 0; i < 31; i++ ) {
        dateSettings.innerHTML += `
        <div class="date-display">
        <div class="date-text">${datesArr[i]}</div>
        </div>
        `
    }
    for ( let i = 0; i < 11; i++ ) {
        yearSettings.innerHTML += `
        <div class="year-display">
        <div class="year-text">${yearsArr[i]}</div>
        </div>
        `
    }
}

generate()