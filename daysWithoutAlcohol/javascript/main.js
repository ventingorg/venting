const futureDate = 'Sat, 01 Jan 2022 12:00:00 UTC';
const months = {0:'Jan', 1:'Feb', 2:'Mar', 3:'Apr', 4:'May', 5:'Jun', 6:'Jul', 7:'Aug', 8:'Sep', 9:'Oct', 10:'Nov', 11:'Dic'};
const username = document.getElementById('username');
const usernameInput = document.getElementById('username-input');
const description = document.getElementById('description');
const descriptionInput = document.getElementById('description-input');
const calendar = document.getElementById('calendar');
const title = document.getElementById('title');
const bubble = document.getElementById('bubble');
const svgNS = 'http://www.w3.org/2000/svg';
const dayVectorSize = '10';
const soberColor = '#27d545';
const lowDrunkColor = '#440e0e';
const midDrunkColor = '#6d0000';
const highDrunkColor = '#a62626';
const wastedColor = '#f85149';
const upcomingDayColor = '#161b22';
const currDate = new Date();
const currDay = currDate.getDay();
var totalSoberDays = 0;
var totalDays = 0;
var soberDays;
var startDate;
var curr;

function refresh() {
    location.reload();
}

username.addEventListener('click', function(event) {
    username.style.display = 'none';
    usernameInput.style.display = 'inline';
    usernameInput.style.marginTop = '12px'; //Following mt-1 order
    usernameInput.style.marginBottom = '16px'; //Personalized 

    usernameInput.addEventListener('keyup', function(event) {
        if(event.key === 'Enter' && usernameInput.value.length) {
            setCookie('username', usernameInput.value, futureDate);
            username.style.display = 'inline';
            usernameInput.style.display = 'none';
            refresh();
        }
    });

    usernameInput.select();
});

description.addEventListener('click', function(event) {
    description.style.display = 'none';
    descriptionInput.style.display = 'inline';
    descriptionInput.style.marginTop = '12px'; //Following mt-1 order
    descriptionInput.style.marginBottom = '16px'; //Personalized 

    descriptionInput.addEventListener('keyup', function(event) {
        if(event.key === 'Enter' && descriptionInput.value.length) {
            setCookie('description', descriptionInput.value, futureDate);
            description.style.display = 'inline';
            descriptionInput.style.display = 'none';
            refresh();
        }
    });

    descriptionInput.select();
});

if(!document.cookie.length) {
    setCookie('soberDays', getNewCalendar(), futureDate);
}

soberDays = getCookie('soberDays');
startDate = getCookie('startDate').split('-');
startDate = startDate[2] + ' ' + months[startDate[1]] + ' ' + startDate[0];

if(currDay >= soberDays.length - 364) {
    soberDays = soberDays + '0';
    setCookie('soberDays', soberDays, futureDate);
}

else if(soberDays.length == 371 && currDay == 0){
    soberDays = soberDays.substr(7) + '0';
    setCookie('soberDays', soberDays, futureDate);
}

function getNewCalendar() {
    let response;
    for(response = ''; response.length < 364; response += '0');

    for(let i = 0; i <= currDay; ++i) {
        response += '0';
    }

    return response;
}

function deleteCookie(key) {
    document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

function incrementDrunkDays() {
    let quantity = document.getElementById('quantity').value;

    if(quantity[0] === 'D') {
        quantity = '9';
    }

    else {
        quantity++;
    }

    setCookie('soberDays', soberDays.substr(0,soberDays.length-1) + quantity, futureDate);
    refresh();
}

function setCookie(key, value, expires) {
    document.cookie = key + '=' + value + '; expires=' + expires + '; path=/;';
}

function getCookie(cname) {
    let name = cname + '=';
    let ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return '';
}

function incrementSoberDays() {
    if(totalSoberDays == 0) {
        setCookie('startDate', currDate.getFullYear() + '-' + currDate.getMonth() + '-' + currDate.getDate(), futureDate);
    }

    setCookie('soberDays', soberDays.substr(0,soberDays.length-1) + '1', futureDate);
    refresh();
}

for(let i = 0, k = 0; i <= 52; ++i) {
    let newWeekContainer = document.createElement('div');
    newWeekContainer.setAttribute('class', 'week');

    for(let j = 0; j < 7 && k < soberDays.length; ++j) {
        let curr = soberDays[k];
        let dayRect = document.createElementNS(svgNS, 'rect');
        dayRect.setAttribute('width', dayVectorSize);
        dayRect.setAttribute('height', dayVectorSize);
        dayRect.setAttribute('rx', '2px');

        if(soberDays[k] == '0') {
            dayRect.setAttribute('fill', upcomingDayColor);
        }

        else if(soberDays[k] == '1') { 
            totalSoberDays++;
            dayRect.setAttribute('fill', soberColor);
        }

        else {
            dayRect.addEventListener('mouseover', function(event) {
                let toBubble = '';
                let thisLeft = event.target.getBoundingClientRect().left;
                let thisTop = event.target.getBoundingClientRect().top;

                if(curr == '9') {
                    toBubble = 'Wasted';
                    bubble.style.left = (thisLeft-30) + 'px';
                }

                else {
                    toBubble = curr-1 + ' can';
                    if(curr-1 != 1) toBubble += 's';
                    toBubble += ' of beer';
                    bubble.style.left = (thisLeft-60) + 'px';
                }

                bubble.style.top = (thisTop-40) + 'px';
                bubble.innerHTML = '<strong>' + toBubble + '</strong>';
                bubble.removeAttribute('hidden');
            }, false);

            dayRect.addEventListener('mouseout', function(event) {
                bubble.style.top = '1px';
                bubble.style.left = '1px';
                bubble.setAttribute('hidden', 'hidden');
            }, false);

            if(soberDays[k] == '2' || soberDays[k] == '3') {
                dayRect.setAttribute('fill', lowDrunkColor);
            }

            else if(soberDays[k] == '4' || soberDays[k] == '5') {
                dayRect.setAttribute('fill', midDrunkColor);
            }

            else if(soberDays[k] == '6' || soberDays[k] == '7') {
                dayRect.setAttribute('fill', highDrunkColor);
            }

            else if(soberDays[k] == '8' || soberDays[k] == '9') {
                dayRect.setAttribute('fill', wastedColor);
            }
        }
        
        k++;
        if(totalSoberDays > 0) totalDays++;

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

if(totalSoberDays == 0) {
    title.innerHTML = 'Not started yet.';
}
else {
    title.innerHTML = 'Started on ' + startDate + ', ' + totalSoberDays + ' total sober days out of ' + totalDays + ' days.';
}

curr = getCookie('username');

if(curr.length) {
    username.innerHTML = curr;
    usernameInput.value = curr;
}

curr = getCookie('description');

if(curr.length) {
    description.innerHTML = curr;
    descriptionInput.value = curr;
}
