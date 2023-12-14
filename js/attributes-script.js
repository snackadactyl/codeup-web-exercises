document.addEventListener("DOMContentLoaded", function () {
    // Function to change profile picture after 2 seconds
    setTimeout(function () {
        document.getElementById("profile-pic").src = "img/cutepuppy.jpeg";
    }, 2000);

    // Function to change profile name after 4 seconds
    setTimeout(function () {
        document.getElementById("profile-name").innerHTML = "Katie Rae";
    }, 4000);

    // Function to add a new class to profile description after 6 seconds
    setTimeout(function () {
        document.getElementById("profile-desc").classList.add("new-description");
    }, 6000);

    // Toggle background color every 2 seconds
    setInterval(function () {
        document.getElementById("profile-card").classList.toggle("alternate-background");
    }, 2000);
});
