document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger')
.addEventListener("click", () =>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'

    }
    else{
        document.querySelector('.ham').style.display = 'none'
        document.querySelector('.cross').style.display = 'inline'
    }
})

var a;
function show_hide(){
    if(a==1){
    document.getElementById("cont").style.display="inline";
    return a=0;
}
else {
    document.getElementById("cont").style.display="none";
    return a=1;
}
}
var b;
function toggle(){
    if(b==1){
    document.getElementById("sowd").style.display="inline";
    return b=0;
}
else {
    document.getElementById("sowd").style.display="none";
    return b=1;
}
}

