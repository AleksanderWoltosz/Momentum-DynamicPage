//  DOM
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// options
const showAmPm = true;

// show time
function showTime() {
    let today = new Date();
    hour = today.getHours();
    min = today.getMinutes();
    sec = today.getSeconds();

    // Check if AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr format
    hour = hour % 12 || 12;

    // Time outpout
    time.innerHTML = `${(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}
    ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function SetBgGreet(){
    let today = new Date(),
    hour = today.getHours()


    if(hour < 12){
        // Morning
        document.body.style.backgroundImage = "url('../img/morning.jpg";
        greeting.textContent = 'Good Morning,';
    } else if (hour < 18){
        // afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg";
        greeting.textContent = 'Good Afternoon,';
    }else{
        // evening
        document.body.style.backgroundImage = "url('../img/evening.jpg";
        greeting.textContent = 'Good Evening,';
        document.body.style.color = 'white';
    }
}

// Get name
function getName(){
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter name here]';
    }else {
        name.textContent = localStorage.getItem('name');
    }
}

// set name
function setName(e){
    if(e.type === 'keypress'){
        // make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }

    }else{
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get foucs
function getFocus(){
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter focus here]';
    }else {
        name.textContent = localStorage.getItem('name');
    }
}

// set focus
function setFocus(e){
    if(e.type === 'keypress'){
        // make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }

    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// running
showTime();
SetBgGreet();
getName();
getFocus();