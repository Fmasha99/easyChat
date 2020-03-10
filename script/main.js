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
   
    
   
    if (inputMessageArea != '') {
        sendMessageButton.addEventListener('click', ()=> {
            let createMesage = document.createElement('li');
            createMesage.className = 'message from-message';
            let messageValue =  inputMessageArea.value;
            let time = new Date().toLocaleString('ru-RU', {
                hour: "numeric", 
                minute: "numeric"
            })
             
            createMesage.innerHTML = `
            
                <div class="from-message-text">
                    <p>${messageValue}</p>
                    <p class="from-time" id="time">${time}</p>
                </div>
            `
            console.log('add-message');

           

            document.getElementById('message-items-wrapper').appendChild(createMesage);
            createMesage.scrollIntoView();
        })
    }
}