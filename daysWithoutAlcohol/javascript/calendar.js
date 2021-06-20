function refresh() {
    location.reload();
}

function getNewCalendar() {
    let response;
    for (response = ''; response.length < 364; response += '0');

    for (let i = 0; i <= currDay; ++i) {
        response += '0';
    }

    return response;
}

function incrementDrunkDays() {
    let quantity = document.getElementById('quantity').value;

    if (quantity[0] === 'D') {
        quantity = '9';
    }

    else {
        quantity++;
    }

    setCookie('soberDays', soberDays.substr(0,soberDays.length-1) + quantity, futureDate);
    refresh();
}

function incrementSoberDays() {
    if (totalSoberDays == 0) {
        setCookie('startDate', currDate.getFullYear() + '-' + currDate.getMonth() + '-' + currDate.getDate(), futureDate);
    }

    setCookie('soberDays', soberDays.substr(0,soberDays.length-1) + '1', futureDate);
    refresh();
}
