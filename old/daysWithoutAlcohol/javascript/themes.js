function updateThemeToDark() {
  soberColor = '#27d545';
  lowDrunkColor = '#440e0e';
  midDrunkColor = '#6d0000';
  highDrunkColor = '#a62626';
  wastedColor = '#f85149';
  upcomingDayColor = '#161b22';
  themeInput.checked = true;
}

function updateThemeToLight() {
  soberColor = '#9be9a8'; // Green
  lowDrunkColor = '#e99b9b';
  midDrunkColor = '#c44040';
  highDrunkColor = '#a13030';
  wastedColor = '#6e2121';
  upcomingDayColor = '#ebedf0';
  themeInput.checked = false;
}

function updateTheme() {
  if (themeInput.checked) {
    updateThemeToDark();
    setCookie('themeMode', 'darkMode', futureDate);
  }

  else {
    updateThemeToLight();
    setCookie('themeMode', 'lightMode', futureDate);
  }

  refresh();
}
