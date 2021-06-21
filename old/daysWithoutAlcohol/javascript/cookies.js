/*
 * Cookies so far:
 * description - 
 * soberDays - 
 * startDate - 
 * username - 
 */

function getCookie(cname) {
  let name = cname + '=';
  let ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
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

function setCookie(key, value, expires) {
  document.cookie = key + '=' + value + '; expires=' + expires + '; path=/;';
}

function deleteCookie(key) {
  document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}
