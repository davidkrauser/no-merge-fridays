setTimeout(function () {
    var today = new Date();
    if (today.getDay() == 5) {
        buttons = document.getElementsByClassName("merge-box-button");
        for (i in buttons) {
            buttons[i].textContent="No Merge Friday";
            buttons[i].disabled=true;
            buttons[i].style.background="#333"
        }
    }
}, 1000);
