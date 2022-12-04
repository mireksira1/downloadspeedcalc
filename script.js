function downloadspeed() {

    var downspeed = document.getElementsByName("speed")[0].value;
    var filesize = document.getElementsByName("size")[0].value;

    if (filesize != 0 & downspeed != 0) {
        var time = filesize / downspeed;
        time = time.toFixed(2);
        document.getElementById("message").innerText = "Your file will be downloaded in: " + time + " s";
    }
}
