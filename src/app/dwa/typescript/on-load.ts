/*
const futureDate = 'Wed, 01 Jan 3000 12:00:00 UTC';
const months = {
  0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun', 6: 'Jul',
  7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dic'
};
const username = document.getElementById('username');
const usernameInput = document.getElementById('username-input');
const themeInput = document.getElementById('theme-switch');
const description = document.getElementById('description');
const descriptionInput = document.getElementById('description-input');
const calendar = document.getElementById('calendar');
const title = document.getElementById('title');
const bubble = document.getElementById('bubble');
const totalSoberDaysHTML = document.getElementById('total-sober-days-h1');
const percentageSoberDaysHTML = document.getElementById('percentage-total-h1');
const totalDaysHTML = document.getElementById('total-days-h3');
const totalSoberMonthHTML = document.getElementById('total-sober-month-h1');
const percentageSoberMonthHTML = document.getElementById('percentage-month-h1');
const totalMonthHTML = document.getElementById('total-month-h3');
const longestStreakHTML = document.getElementById('longest-streak');
const currentStreakHTML = document.getElementById('current-streak');
const startDateHTML = document.getElementById('start-date-h1');
const svgNS = 'http://www.w3.org/2000/svg';
const dayVectorSize = '10';
const currDate = new Date();
const currDay = currDate.getDay();
const themeMode = getCookie('themeMode');
var soberColor;
var hangoverColor;
var lowDrunkColor;
var midDrunkColor;
var highDrunkColor;
var wastedColor;
var upcomingDayColor;
var totalSoberDays = 0;
var totalDays = 0;
var soberDays = getCookie('soberDays');
var soberDaysThisMonth = 0;
var startDate = getCookie('startDate');
var curr;
var longestStreak = getCookie('longestStreak');
var currentStreak = 0;

if (!soberDays.length) {
  setCookie('soberDays', getNewCalendar(), futureDate);
}

if (!longestStreak) {
  setCookie('longestStreak', 0, futureDate);
  longestStreak = 0;
}

if (!themeMode.length) {
  setCookie('themeMode', 'lightMode', futureDate);
  updateThemeToLight();
} else if (themeMode === 'lightMode') {
  updateThemeToLight();
} else {
  updateThemeToDark();
}

if (startDate.length) {
  startDate = startDate.split('-');

  if (startDate.length === 3) {
    startDate = startDate[2] + ' ' + months[startDate[1]] + ' ' + startDate[0];
  }
}

if (currDay >= soberDays.length - 364) {
  soberDays = soberDays + '0';
  setCookie('soberDays', soberDays, futureDate);
} else if (soberDays.length === 371 && currDay === 0) {
  soberDays = soberDays.substring(7) + '0';
  setCookie('soberDays', soberDays, futureDate);
}

for (let i = 0, k = 0; i <= 52; ++i) {
  let newWeekContainer = document.createElement('div');
  newWeekContainer.setAttribute('class', 'week');

  for (let j = 0; j < 7 && k < soberDays.length; ++j) {
    let curr = soberDays[k];
    let dayRect = document.createElementNS(svgNS, 'rect');
    dayRect.setAttribute('width', dayVectorSize);
    dayRect.setAttribute('height', dayVectorSize);
    dayRect.setAttribute('rx', '2px');

    if (soberDays[k] === '0') {
      dayRect.setAttribute('fill', upcomingDayColor);
    } else if (soberDays[k] === '1') {
      totalSoberDays++;
      dayRect.setAttribute('fill', soberColor);
      currentStreak++;

      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
        setCookie('longestStreak', longestStreak, futureDate);
      }

      if (k >= soberDays.length - currDate.getDate()) {
        soberDaysThisMonth++;
      }
    } else {
      dayRect.addEventListener('mouseover', function(event) {
        let toBubble = '';
        let thisLeft = event.target.getBoundingClientRect().left;
        let thisTop = event.target.getBoundingClientRect().top;

        if (curr === '9') {
          toBubble = 'Wasted';
          bubble.style.left = (thisLeft - 30) + 'px';
        } else if (curr >= '0' && curr < '9') {
          toBubble = curr - 1 + ' can';

          if (curr - 1 != 1) {
            toBubble += 's';
          }

          toBubble += ' of beer';
          bubble.style.left = (thisLeft - 60) + 'px';
        } else if (curr === 'h') {
          toBubble = 'Hangover';
          bubble.style.left = (thisLeft - 50) + 'px';
        } else {
          toBubble = 'Beyond wasted';
          bubble.style.left = (thisLeft - 50) + 'px';
        }

        bubble.style.top = (thisTop - 40) + 'px';
        bubble.innerHTML = '<strong>' + toBubble + '</strong>';
        bubble.removeAttribute('hidden');
      }, false);

      dayRect.addEventListener('mouseout', function(event) {
        bubble.style.top = '1px';
        bubble.style.left = '1px';
        bubble.setAttribute('hidden', 'hidden');
      }, false);

      if (soberDays[k] === '2' || soberDays[k] === '3') {
        currentStreak = 0;
        dayRect.setAttribute('fill', lowDrunkColor);
      } else if (soberDays[k] === '4' || soberDays[k] === '5') {
        currentStreak = 0;
        dayRect.setAttribute('fill', midDrunkColor);
      } else if (soberDays[k] === '6' || soberDays[k] === '7') {
        currentStreak = 0;
        dayRect.setAttribute('fill', highDrunkColor);
      } else if (soberDays[k] === '8' || soberDays[k] === '9') {
        currentStreak = 0;
        dayRect.setAttribute('fill', wastedColor);
      } else if (soberDays[k] === 'h') {
        currentStreak++;
        dayRect.setAttribute('fill', hangoverColor);

        if (k > soberDays.length - currDate.getDate()) {
          soberDaysThisMonth++;
        }
      } else {
        currentStreak = 0;
        dayRect.setAttribute('fill', 'black');
      }
    }

    k++;

    if (totalSoberDays > 0) {
      totalDays++;
    }

    let newDayVector = document.createElementNS(svgNS, 'svg');
    newDayVector.setAttribute('width', dayVectorSize);
    newDayVector.setAttribute('height', dayVectorSize);
    newDayVector.appendChild(dayRect);

    let newDayContainer = document.createElement('div');
    newDayContainer.appendChild(newDayVector);
    newWeekContainer.appendChild(newDayContainer);
  }

  calendar.appendChild(newWeekContainer);
}

if (totalSoberDays === 0) {
  title.innerHTML = 'Not started yet.';
} else {
  let totalPercentage;
  let monthPercentage;
  let today = currDate.getDate();

  startDateHTML.innerHTML = startDate;
  totalSoberDaysHTML.innerHTML = totalSoberDays;
  totalDaysHTML.innerHTML = '/' + totalDays;
  totalSoberMonthHTML.innerHTML = soberDaysThisMonth;
  totalMonthHTML.innerHTML = '/' + today;
  longestStreakHTML.innerHTML = longestStreak;
  currentStreakHTML.innerHTML = currentStreak;
  totalPercentage = ((totalSoberDays * 100) / totalDays).toFixed(2);
  monthPercentage = ((soberDaysThisMonth * 100) / today).toFixed(2);
  percentageSoberDaysHTML.innerHTML = totalPercentage + '%';
  percentageSoberMonthHTML.innerHTML = monthPercentage + '%';
}

curr = getCookie('username');

if (curr.length) {
  username.innerHTML = curr;
  usernameInput.value = curr;
}

curr = getCookie('description');

if (curr.length) {
  description.innerHTML = curr;
  descriptionInput.value = curr;
}
*/
