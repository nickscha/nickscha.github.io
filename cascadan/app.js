function toogle(selector) {
    var ele = document.querySelector(selector)

    if (ele.style.display != "none") {
        ele.style.display = "none";
    } else {
        ele.style.display = "unset"
    }

}