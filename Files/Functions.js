function openMenu()
{
    document.getElementById("sideBar").style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
}

function closeMenu()
{
    document.getElementById("sideBar").style.clipPath = "polygon(100% 0, 100% 0, 100% 0, 100% 0)";
}