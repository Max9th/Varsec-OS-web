function setOpenCount(count) {
    localStorage.setItem("open_count", count);
}


function getOpenCount() {
    return localStorage.getItem("open_count") || 0;
}
