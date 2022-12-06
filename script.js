function downloadspeed() {

    var downspeed = document.getElementsByName("speed")[0].value;
    var filesize = document.getElementsByName("size")[0].value;

    var speedType = document.getElementsByName("speed-type")[0].value;
    var sizeType = document.getElementsByName("size-type")[0].value;

    switch (speedType) {
        case "kb":
            downspeed = (downspeed / 8) / 1024;
            break;
        case "kB":
            downspeed = downspeed / 1000;
            break;
        case "Mb":
            downspeed = downspeed / 8;
            break;
        case "MB":
            downspeed = downspeed;
            break;
    }

    switch (sizeType) {
        case "kB":
            filesize = filesize / 1000;
            break;
        case "MB":
            filesize = filesize;
            break;
        case "GB":
            filesize = filesize * 1000;
            break;
    }

    if (filesize != 0 & downspeed != 0) {
        var timeH = (filesize / downspeed) / 3600;
        var timeM = (timeH - timeH.toFixed(0)) * 60;
        var timeS = (timeH - timeH.toFixed(0)) * 3600;

        timeH = timeH.toFixed(0);
        timeM = timeM.toFixed(0);
        timeS = timeS.toFixed(0);

        if (timeM < 0){
            timeM = 0;
        }

        if (timeS < 0){
            timeS = 0;
        }

        //time = time.toFixed(2);
        document.getElementById("message").innerText = "Your file will be downloaded in: " + timeH + " h " + timeM + " m " + timeS + " s.";
    }
}
