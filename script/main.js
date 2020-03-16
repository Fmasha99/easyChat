
    scrollToLastMessage();
    addMessage();
    let mass = localStorage.getItem('message')
    let readyMass = mass.split(',')


function scrollToLastMessage () {
    let lastMessage = document.getElementsByClassName('message');
    let messageLength = lastMessage.length-1;

    lastMessage[messageLength].scrollIntoView();
}

let addPost = (post) => {
    console.log(post)
    if (post !== '') {
        let createMesage = document.createElement('li');
        createMesage.className = 'message from-message';
        let time = new Date().toLocaleString('ru-RU', {
            hour: "numeric", 
            minute: "numeric"
        })
         
        createMesage.innerHTML = `
        
            <div class="from-message-text">
                <p>${post}</p>
                <p class="from-time" id="time">${time}</p>
            </div>
        `

        document.getElementById('message-items-wrapper').appendChild(createMesage);
        
        readyMass.push(post)
        console.log(readyMass)
        clearInputField();
        createMesage.scrollIntoView();
    }
}

function addMessage () {
    let sendMessageButton = document.getElementById('send-message');
    let inputMessageArea = document.getElementById('input-message');
   
 

    // sendMessageButton.addEventListener('click', ()=> {
    //     if (inputMessageArea.value !== '') {
    //         let createMesage = document.createElement('li');
    //         createMesage.className = 'message from-message';
    //         let messageValue =  inputMessageArea.value;
    //         let time = new Date().toLocaleString('ru-RU', {
    //             hour: "numeric", 
    //             minute: "numeric"
    //         })
                     
    //         createMesage.innerHTML = `
                    
    //             <div class="from-message-text">
    //                 <p>${messageValue}</p>
    //                 <p class="from-time" id="time">${time}</p>
    //             </div>
    //         `
        
    //         document.getElementById('message-items-wrapper').appendChild(createMesage);
                    
    //         readyMass.push(inputMessageArea.value)
    //         console.log(readyMass)
    //         clearInputField();
    //         createMesage.scrollIntoView();
    //     }
    //}) //addEventListener 
    
    // inputMessageArea.addEventListener('keyup', function(event) {
    //     if (event.keyCode == 13) {
    //         if (inputMessageArea.value !== '') {
    //             let createMesage = document.createElement('li');
    //             createMesage.className = 'message from-message';
    //             let messageValue =  inputMessageArea.value;
    //             let time = new Date().toLocaleString('ru-RU', {
    //                 hour: "numeric", 
    //                 minute: "numeric"
    //             })
                 
    //             createMesage.innerHTML = `
                
    //                 <div class="from-message-text">
    //                     <p>${messageValue}</p>
    //                     <p class="from-time" id="time">${time}</p>
    //                 </div>
    //             `
    
    //             document.getElementById('message-items-wrapper').appendChild(createMesage);
    //             clearInputField();
    //             createMesage.scrollIntoView();
    //         }
    //         console.log('enter');

    //         sendMessageButton.click();
    //     }
    // })
    
} //addMessage ()

function clearInputField () {
    document.getElementById('input-message').value = '';
}