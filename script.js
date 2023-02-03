function togglehide()
{
    let btn=document.getElementById("btn1");
    let section=document.getElementById("section");
    let head=document.getElementsByClassName("header");
    if(section.style.display!='none' && head.style.display!='none')
    {
            section.style.display="grid";
            head.style.display="flex";

    }
    else{
        section.style.display="block";
        head.style.display="block";

    }
}