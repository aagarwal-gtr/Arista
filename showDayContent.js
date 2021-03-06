var button_roseDay = document.getElementById("rose-day");
var button_proposeDay = document.getElementById("propose-day");
var button_chocolateDay = document.getElementById("chocolate-day");
var button_teddyDay = document.getElementById("teddy-day");
var button_promiseDay = document.getElementById("promise-day");
var button_hugDay = document.getElementById("hug-day");
var button_kissDay = document.getElementById("kiss-day");
var button_valentineDay = document.getElementById("valentine-day");

var mainMenu = document.getElementById("main-menu");
var currentActiveDayContent = null;
var requestBaseURL = "http://www.google.com/";

button_roseDay.addEventListener("click", function() {
    showDayContent("rose-day");
}, false);

button_proposeDay.addEventListener("click", function() {
    showDayContent("propose-day");
}, false);

button_chocolateDay.addEventListener("click", function() {
    showDayContent("chocolate-day");
}, false);

button_teddyDay.addEventListener("click", function() {
    showDayContent("teddy-day");
}, false);

button_promiseDay.addEventListener("click", function() {
    showDayContent("promise-day");
}, false);

button_hugDay.addEventListener("click", function() {
    showDayContent("hug-day");
}, false);

button_kissDay.addEventListener("click", function() {
    showDayContent("kiss-day");
}, false);

button_valentineDay.addEventListener("click", function() {
    showDayContent("valentine-day");
}, false);

var buttonArray_backToMainMenu = document.getElementsByClassName("back-main-menu");
for(i = 0; i < buttonArray_backToMainMenu.length; i++) {
    buttonArray_backToMainMenu[i].addEventListener("click", hideDayContent, false);
}

function showAJAXLoader() {
	// Show AJAX Loader
	document.getElementById("notification-overlay").style.display = "block";
	document.getElementById("notification").style.display = "block";
	document.getElementById("ajax-loader").style.display = "block";
}

function hideAJAXLoader() {
        // Hide AJAX Loader
	document.getElementById("notification-overlay").style.display = "none";
	document.getElementById("notification").style.display = "none";
        document.getElementById("ajax-loader").style.display = "none";
}

function getAdvice(dayID) {
	// Show AJAX Loader Notification
	showAJAXLoader();
	
	var xmlHTTPRequest = new XMLHttpRequest({
		mozSystem: true
	});
	
        // Make Request URL
	var requestURL = requestBaseURL + "";
	
        xmlHTTPRequest.onreadystatechange = function() {
            if (xmlHTTPRequest.readyState == 4 && xmlHTTPRequest.status == 200) {
                // Set Advice
                document.getElementById(dayID + "-content-advice").innerHTML = xmlHTTPRequest.responseText;
                
                // Hide AJAX Loader Notification
                hideAJAXLoader();
            }
        }
        
	xmlHTTPRequest.open("GET", requestURL, true);
        
        xmlHTTPRequest.send();
}

function showDayContent(dayID) {
	mainMenu.style.display = "none";
	document.getElementById(dayID + "-content").style.display = "block";
	
	// Set Active Day Content ID
	currentActiveDayContent = dayID;
	
	// Start Retreival of Advise and Set onreadystatechange attribute
	getAdvice(dayID);
}

function hideDayContent() {
    // Remove Advice from Day Content
    document.getElementById(currentActiveDayContent + "-content-advice").innerHTML = "";
    
    // Hide Day Content
    document.getElementById(currentActiveDayContent + "-content").style.display = "none";
    
    // Show Main Menu
    mainMenu.style.display = "block";
}