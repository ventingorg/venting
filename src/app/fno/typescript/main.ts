/*
const noOne = new NoOne();
const noOneNameText = document.getElementById('noOneNameText');
const noOneNameInput = document.getElementById('noOneNameInput');
const noOneNameInputWrapper = document.getElementById('noOneNameInputWrapper');
const chat = document.getElementById('chat');
const input = document.getElementById('in');
const pic = document.getElementById('pic');
const profilePic = document.getElementById('profilePic');
const imgUpload = document.getElementById('imgUpload');
const party = document.getElementById('party');
var noOneName = noOne.getRandomName();
var partyMembers = 1;

noOneNameText.innerHTML = noOneName;

input.addEventListener('keyup', function(event) {
  if (event.key === 'Enter' && input.value.length) {
    sendMsg();
  }
});

imgUpload.onchange = function (evt) {
  var tgt = evt.target || window.event.srcElement,
    files = tgt.files;

  // FileReader support
  if (FileReader && files && files.length) {
    let fr = new FileReader();

    fr.onload = function () {
      profilePic.src = fr.result;
    }

    fr.readAsDataURL(files[0]);
  } else {
    // Not supported
    // fallback -- perhaps submit the input to an iframe and temporarily store
    // them on the server until the user's session ends.
  }
}

pic.addEventListener('click', function(event) {
  imgUpload.click();
});

noOneNameText.addEventListener('click', function(event) {
  noOneNameText.style.display = 'none';
  noOneNameInputWrapper.style.display = 'inline';
  noOneNameInput.value = noOneName;

  noOneNameInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && noOneNameInput.value.length) {
      setName();
      noOneNameText.style.display = 'inline';
      noOneNameInputWrapper.style.display = 'none';
    }
  });

  noOneNameInput.select();
});

function appendMsg(msg) {
  let newMsgContainer = document.createElement('div');
  let newSpeechBalloon = document.createElement('span');
  let newMsgText = document.createTextNode(msg);

  newMsgContainer.className = 'player';
  newSpeechBalloon.className = 'message';
  newMsgContainer.appendChild(newSpeechBalloon);
  newSpeechBalloon.appendChild(newMsgText);

  chat.appendChild(newMsgContainer);
}

function sendMsg() {
  appendMsg(input.value);
  input.value = '';
  chat.scrollTop = chat.scrollHeight;
}

function setName() {
  if (noOneNameInput.value.length !== 0) {
    noOneName = noOneNameInput.value;
  }

  noOneNameText.innerHTML = noOneName;
}

function addNoOne() {
  let newNoOneContainer = document.createElement('span');
  let newPicContainer = document.createElement('div');
  let newImgProfilePic = document.createElement('img');
  let newImgCamera = document.createElement('img');
  let newImgUpload = document.createElement('input');
  let newNameText = document.createElement('span');
  let newNameInput = document.createElement('input');
  let newNameInputWrapper = document.createElement('span');
  let newNoOneName = noOne.getRandomName();

  partyMembers++;

  newImgProfilePic.setAttribute('src', 'imgs/pp.png');
  newImgProfilePic.setAttribute('class', 'profilePic');
  newImgProfilePic.setAttribute('id', 'profilePic' + partyMembers);
  newImgProfilePic.setAttribute('width', '32px');
  newImgProfilePic.setAttribute('height', '32px');

  newImgCamera.setAttribute('src', 'imgs/newPic.svg');
  newImgCamera.setAttribute('class', 'newPic');
  newImgCamera.setAttribute('width', '30px');

  newImgUpload.setAttribute('type', 'file');
  newImgUpload.setAttribute('id', 'imgUpload' + partyMembers);
  newImgUpload.setAttribute('style', 'display:none');
  newImgUpload.setAttribute('accept', 'image/x-png,image/gif,image/jpeg');

  newPicContainer.setAttribute('id', 'pic' + partyMembers);

  newNameText.setAttribute('id', 'noOneNameText' + partyMembers);
  newNameText.setAttribute('class', 'noOneNameText');
  newNameText.innerHTML = newNoOneName;

  newNameInputWrapper.setAttribute(
      'id', 'noOneNameInputWrapper' + partyMembers);
  newNameInputWrapper.setAttribute('class', 'noOneNameInputWrapper');

  newNameInput.setAttribute('type', 'text');
  newNameInput.setAttribute('class', 'input');
  newNameInput.setAttribute('id', 'noOneNameInput' + partyMembers);
  newNameInput.setAttribute('value', newNoOneName);

  newNoOneContainer.setAttribute('id', 'noOneName' + partyMembers);
  newNoOneContainer.setAttribute('class', 'noOneName');

  newImgUpload.onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement,
    files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
      let fr = new FileReader();
      fr.onload = function () {
        newImgProfilePic.src = fr.result;
      }
      fr.readAsDataURL(files[0]);
    } else {
      // Not supported
      // fallback -- perhaps submit the input to an iframe and temporarily store
      // them on the server until the user's session ends.
    }
  }

  newPicContainer.addEventListener('click', function(event) {
    newImgUpload.click();
  });

  newNameText.addEventListener('click', function(event) {
    newNameText.style.display = 'none';
    newNameInputWrapper.style.display = 'inline';
    newNameInput.value = newNameText.innerHTML;

    newNameInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter' && newNameInput.value.length) {
        if (newNameInput.value.length !== 0) {
          newNameText.innerHTML = newNameInput.value;
        }

        newNameText.style.display = 'inline';
        newNameInputWrapper.style.display = 'none';
      }
    });

    newNameInput.select();
  });

  newNameInputWrapper.appendChild(newNameInput);
  newPicContainer.appendChild(newImgProfilePic);
  newPicContainer.appendChild(newImgCamera);
  newPicContainer.appendChild(newImgUpload);

  newNoOneContainer.appendChild(newPicContainer);
  newNoOneContainer.appendChild(newNameText);
  newNoOneContainer.appendChild(newNameInputWrapper);

  party.appendChild(newNoOneContainer);
}
*/
