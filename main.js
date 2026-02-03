document.querySelectorAll("#name").forEach(btn =>{
    btn.addEventListener('click', () => {
        document.getElementById("intro").scrollIntoView();
    })
})
document.querySelectorAll(".aboutmebtn").forEach(btn =>{
    btn.addEventListener('click', () => {
        document.getElementById("aboutme").scrollIntoView();
    })
})
document.querySelectorAll(".workbtn").forEach(btn =>{
    btn.addEventListener('click', () => {
        document.getElementById("work").scrollIntoView();
    })
})
document.querySelectorAll(".projectsbtn").forEach(btn =>{
    btn.addEventListener('click', () => {
        document.getElementById("projects").scrollIntoView();
    })
})