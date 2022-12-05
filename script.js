function downloadspeed() {

    var downspeed = document.getElementsByName("speed")[0].value;
    var filesize = document.getElementsByName("size")[0].value;

    var speedType = document.getElementsByName("speed-type")[0].value;
    var sizeType = document.getElementsByName("size-type")[0].value;

    switch(speedType){
        case "Kb":
            downspeed = (downspeed / 8) / 1024;
            break;
        case "KB":
            downspeed = downspeed / 1024;
            break;
        case "Mb":
            downspeed = downspeed / 8;
            break;
        case "MB":
            downspeed = downspeed;
            break;
    }

    if (filesize != 0 & downspeed != 0) {
        var time = filesize / downspeed;
        time = time.toFixed(2);
        document.getElementById("message").innerText = "Your file will be downloaded in: " + time + " s";
    }
}
