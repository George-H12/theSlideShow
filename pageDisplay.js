window.addEventListener('load', function() {
    document.getElementById('r1').checked = true;
    });
    
    
    document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector("#slide1 p");
    const textToType = textElement.textContent;
    textElement.textContent = '';
    
    
    
    
    function typeText(index){
    let delay = 100;
    if (index === 0){
    textElement.textContent = '';
    delay = 300;
    }
    
    
    textElement.textContent += textToType.charAt(index);
    
    
    setTimeout(function() {
    typeText((index + 1) % textToType.length);
    }, delay);
    }
    
    
    typeText(0);
    
    
    });
    