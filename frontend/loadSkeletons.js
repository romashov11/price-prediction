export function loadSkeletons(){

    const time_container = document.getElementById("cont")
    time_container.style.display = "none";
    setTimeout( () => {
        time_container.style.display = "grid";
    }, 2000)
}