/**
 * Cookies so far:
 *   - description
 *   - soberDays
 *   - startDate
 *   - username
 *

function getCookie(cookieName) {
  let name = cookieName + '=';
  let cookieArray = document.cookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let currentCookie = cookieArray[i];

    // Interesting way of doing this.
    while (currentCookie.charAt(0) === ' ') {
      currentCookie = currentCookie.substring(1);
    }

    if (currentCookie.indexOf(name) === 0) {
      return currentCookie.substring(name.length, currentCookie.length);
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
 */
