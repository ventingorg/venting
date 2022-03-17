/*
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

function todayDrunk() {
  let quantity = document.getElementById('quantity').value;

  if (quantity[0] === 'D') {
    quantity = '9';
  } else {
    quantity++;
  }

  setCookie(
    'soberDays',
    soberDays.substring(0, soberDays.length - 1) + quantity,
    futureDate
  );

  refresh();
}

function todaySober() {
  if (totalSoberDays === 0) {
    setCookie(
      'startDate',
      currDate.getFullYear() + '-' + currDate.getMonth() + '-' +
      currDate.getDate(),
      futureDate
    );
  }

  setCookie(
    'soberDays',
    soberDays.substring(0, soberDays.length - 1) + '1',
    futureDate
  );

  refresh();
}

function todayHangover() {
  setCookie(
    'soberDays',
    soberDays.substring(0, soberDays.length - 1) + 'h',
    futureDate
  );

  refresh();
}
*/
