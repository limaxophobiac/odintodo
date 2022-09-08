function blockScreen(zIndex){
    let k = document.createElement('div');
    k.setAttribute("id", "blocker");
    k.style.width = "100vw";
    k.style.height = "100vh";
    k.style.position = "fixed";
    k.style.top = "0";
    k.style.left = "0";
    k.style.zIndex = ""+zIndex;
    document.body.appendChild(k);
    k.style.transition = "backdrop-filter 0.2s"
    k.style.transition = "background-color 0.2s"
    setTimeout(function(){ k.style.backgroundColor = "rgba(0, 0, 0, 0.4)"; k.style.backdropFilter = "blur(2px)";}, 0);
}

function unBlockScreen(){
    let k = document.getElementById("blocker");
    k.style.transition = "backdrop-filter 0.2s"
    k.style.transition = "background-color 0.2s"
    setTimeout(function(){ k.style.backgroundColor = "rgba(0, 0, 0, 0.0)"; k.style.backdropFilter = "blur(0px)";}, 0);
    setTimeout(function(){k.remove();}, 200);
}

export {blockScreen, unBlockScreen};