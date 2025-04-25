cursor = document.getElementById("cursor");
window.addEventListener("mousemove", (elem) => {
    cursor.style.top = elem.clientY + "px"
    cursor.style.left = elem.clientX + "px"
})

