username.addEventListener('click', function(event) {
    username.style.display = 'none';
    usernameInput.style.display = 'inline';
    usernameInput.style.marginTop = '12px'; // Following mt-1 order
    usernameInput.style.marginBottom = '16px'; // Personalized 

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
    descriptionInput.style.marginTop = '12px'; // Following mt-1 order
    descriptionInput.style.marginBottom = '16px'; // Personalized 

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
