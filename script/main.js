
scrollToLastMessage();

// let mass = localStorage.getItem('message')
// let readyMass = mass.split(',')
let itemsArray = [];

localStorage.setItem('items', itemsArray);
const data = localStorage.getItem('items');


function scrollToLastMessage () {
    let lastMessage = document.getElementsByClassName('message');
    let messageLength = lastMessage.length-1;

    lastMessage[messageLength].scrollIntoView();
}

let addPost = (post) => {
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
        
        // localStorage.setItem('message', post);
        itemsArray.push(post)
        console.log(itemsArray)
        clearInputField();
        createMesage.scrollIntoView();
    }
} //addPost()


//add message to history by press enter
document.getElementById('input-message').addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        addPost(document.getElementById('input-message').value)
    }
})

function clearInputField () {
    document.getElementById('input-message').value = '';
}