window.addEventListener('load', ()=> {
    
    scrollToLastMessage();
    addMessage();
})

function scrollToLastMessage () {
    let lastMessage = document.getElementsByClassName('message');
    let messageLength = lastMessage.length-1;

    lastMessage[messageLength].scrollIntoView();
}

function addMessage () {
    let sendMessageButton = document.getElementById('send-message');
    let inputMessageArea = document.getElementById('input-message');
   
    if (inputMessageArea !== '') {
        sendMessageButton.addEventListener('click', ()=> {
            let createMesage = document.createElement('li');
            createMesage.className = 'from-message';
            console.log('add-message');
        })
    }
}