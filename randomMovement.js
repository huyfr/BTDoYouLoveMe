function clickAndHover(type) {
    let height = Math.round(Math.random()*window.innerHeight);
    let width = Math.round(Math.random()*window.innerWidth);

    if (type === 1)
    {
        alert("<3");
    }
    else
    {
        document.getElementById("no").style.top = height +"px";
        document.getElementById("no").style.left = width +"px";
    }
}