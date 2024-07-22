$(window).on("load", function() {
    let percent = 1;
    let interval = setInterval(function() {
        if (percent <= 100) {
            $(".loading__percent").text(percent < 10 ? "0" + percent : percent);
            percent++;
        } else {
            clearInterval(interval);
            $(".loading").slideUp("slow");
        }
    }, 10); // Adjust the interval time as needed
});