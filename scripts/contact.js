// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var thankyou =  document.getElementById("submit-button");

function thanksmessage (){
    let newmsg = document.getElementById("contact-page");
    newmsg.innerHTML = "Thank you for your message"
    newmsg.style.fontSize = "24px"
    newmsg.style.fontFamily = "Montserrat", "sans-serif"
}
thankyou.addEventListener("click", thanksmessage);