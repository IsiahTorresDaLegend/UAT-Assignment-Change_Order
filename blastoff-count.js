// For loop, for countdown. Created a function called bettercountdown()
function blastoff() {
    // Binding keeps track of time, displays time to user.
    let currTime = 10;
    // for loop, created binding "i" to start at "1". Loop will keep going until "i" is equal to 11.
    // Will increment "i" by 1 everytime the loop runs. 
    for (let i = 1; i <= 11; i++) {
        // Mind that currTime is decreasing while "i" is increasing. if i == 11, then currTime == 0. 
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer, when timer ends, message "Blastoff!!!" is displayed.
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
                // 1000 as in 1 second, keeps track of how much time is left.
            }, 1000 * i);
            // Since "i" is increasing, when i == 6, half of our time has already been depleted. 
        } else if (i > 6) {
            setTimeout(function () {
                // When this is the case, the message will change and contain a warning. 
                // Use this function to decide where the timer goes. currTime is the decreasing counter displayed to user.
                document.getElementById("countdownTimer").innerHTML =
                    "Warning! Less than half way to launch! Time left = " + currTime;
                // Keep track of time as it goes by, Timer goes from 10 to 0 as loop continues.
                // Decrements by 1.
                currTime--;
            }, 1000 * i);
            // "else" is your catch all. It handles every other conditions not specified.
        } else {
            setTimeout(function () {
                // If timer is not done, and if it isn't almost done, then this is how the timer will be displayed. 
                document.getElementById("countdownTimer").innerHTML = "T-minus = " + currTime
                currTime--;
            }, 1000 * i);
        }
    }
}