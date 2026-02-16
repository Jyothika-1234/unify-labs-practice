// 1. Create a function to process logic
function runLogicEngine(input) {
    if (input > 10) {
        return "High Power Mode";
    } else if (input > 0) {
        return "Stable Operations";
    } else {
        return "System Idle";
    }
}

// 2. Test it and update the display
let testValue = 15; 
display.innerText = runLogicEngine(testValue);
