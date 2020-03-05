window.addEventListener('load', ()=> {
    
    scrollToLastMessage();
})

function scrollToLastMessage () {
    let lastMessage = document.getElementsByClassName('message');
    let messageLength = lastMessage.length-1;

    lastMessage[messageLength].scrollIntoView();
}