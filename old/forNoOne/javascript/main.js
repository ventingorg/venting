var noOneName = "No One";
const noOneNameText = document.getElementById('noOneNameText');
const noOneNameInput = document.getElementById('noOneNameInput');
const noOneNameInputWrapper = document.getElementById('noOneNameInputWrapper');
const chat = document.getElementById('chat');
const input = document.getElementById('in');
const pic = document.getElementById('pic');
const profilePic = document.getElementById('profilePic');
const imgUpload = document.getElementById('imgUpload');

input.addEventListener('keyup', function(event) {
  if(event.key === 'Enter' && input.value.length) {
    sendMsg();
  }
});

imgUpload.onchange = function (evt) {
  var tgt = evt.target || window.event.srcElement,
    files = tgt.files;

  // FileReader support
  if(FileReader && files && files.length) {
    let fr = new FileReader();
    fr.onload = function () {
      profilePic.src = fr.result;
    }
    fr.readAsDataURL(files[0]);
  }

  // Not supported
  else {
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
  noOneNameInput.addEventListener('keyup', function(event) {
    if(event.key === 'Enter' && noOneNameInput.value.length) {
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
  if(noOneNameInput.value.length != 0) {
    noOneName = noOneNameInput.value;
  }
  
  noOneNameText.innerHTML = noOneName;
}
