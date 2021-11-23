function ShowMore()
{
    document.getElementById("info").classList.remove('showless');
    document.getElementById("button").classList.remove('less');
    document.getElementById("info").classList.add('showmore');
    document.getElementById("button").classList.add('more');
    document.getElementById("dots").classList.add('nodots');
}

function ShowLess()
{
    document.getElementById("dots").classList.remove('nodots');
    document.getElementById("info").classList.remove('showmore');
    document.getElementById("button").classList.remove('more');
    document.getElementById("info").classList.add('showless');
    document.getElementById("button").classList.add('less');
    
}