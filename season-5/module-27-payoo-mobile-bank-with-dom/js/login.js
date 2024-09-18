// learning - 1 => The default behavior of a form submission in HTML is to refresh the page, which happens because the browser is programmed to reload the page and send form data to the server. This is typically the desired action when using traditional form submissions. However, in modern web development, you may want to handle form submissions dynamically without refreshing the page (e.g., for form validation or sending data via AJAX). for more link : https://www.tutorialspoint.com/how-to-stop-refreshing-the-page-on-submit-in-javascript 
const loginButton = document.getElementById('button-login');
loginButton.addEventListener('click', function(event){
    event.preventDefault(); // learning-1 : to prevent refresh the page
    // console.log("login button clicked");
    const phoneNumber = document.getElementById("phone-number").value;
    // console.log(phoneNumber);
    const pinNumber = document.getElementById("pin-number").value;
    // console.log(pinNumber);
    if (phoneNumber === '1' && pinNumber === '1') {
        console.log("logged in");
        window.location.href = "/home.html";
    } else {
        alert("wrong inputs");
    }
})