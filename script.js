function font(value){
    document.getElementById("tarea").style.fontFamily=value;
}
function colour(value){
    document.getElementById("tarea").style.color=value;
}
function siz(value){
    let x="";
    x=value;
    document.getElementById("tarea").style.fontSize=x;
}



//Sliding Toggle Buttons functions
function bd(){
    let x=getComputedStyle(document.getElementById("mover1"));
    let y=x.getPropertyValue("margin-left");
    if(y=='0px'){
        document.documentElement.style.setProperty("--loc1","40px");
        document.getElementById("tarea").style.fontWeight="1000";
        document.getElementById("tbtn1").style.backgroundColor="orange";
    }
    else{
        document.documentElement.style.setProperty("--loc1","0px");
        document.getElementById("tarea").style.fontWeight="100";
        document.getElementById("tbtn1").style.backgroundColor="aquamarine";
    }
}

function italic(){
    let x=getComputedStyle(document.getElementById("mover2"));
    let y=x.getPropertyValue("margin-left");
    if(y=='0px'){
        document.documentElement.style.setProperty("--loc2","40px");
        document.getElementById("tarea").style.fontStyle="italic";
        document.getElementById("tbtn2").style.backgroundColor="orange";
    }
    else{
        document.documentElement.style.setProperty("--loc2","0px");
        document.getElementById("tarea").style.fontStyle="normal";
        document.getElementById("tbtn2").style.backgroundColor="aquamarine";
    }
}
function Underline(){
    let x=getComputedStyle(document.getElementById("mover3"));
    let y=x.getPropertyValue("margin-left");
    if(y=='0px'){
        document.documentElement.style.setProperty("--loc3","40px");
        document.getElementById("tarea").style.textDecorationLine="underline";
        document.getElementById("tbtn3").style.backgroundColor="orange";
    }
    else{
        document.documentElement.style.setProperty("--loc3","0px");
        document.getElementById("tarea").style.textDecorationLine="none";;
        document.getElementById("tbtn3").style.backgroundColor="aquamarine";
    }
}
function Strikethrough(){
    let x=getComputedStyle(document.getElementById("mover4"));
    let y=x.getPropertyValue("margin-left");
    if(y=='0px'){
        document.documentElement.style.setProperty("--loc4","40px");
        document.getElementById("tarea").style.textDecorationLine="line-through";
        document.getElementById("tbtn4").style.backgroundColor="orange";
    }
    else{
        document.documentElement.style.setProperty("--loc4","0px");
        document.getElementById("tarea").style.textDecorationLine="none";
        document.getElementById("tbtn4").style.backgroundColor="aquamarine";
    }
}
//Toggle button ends here

function alignS(){
    document.getElementById("tarea").style.textAlign="start";
}
function alignR(){
    document.getElementById("tarea").style.textAlign="Right";
}
function alignC(){
    document.getElementById("tarea").style.textAlign="Center";
}
function alignJ(){
    document.getElementById("tarea").style.textAlign="Justify";
}

//utility buttons

function pri(){
    window.print();
}
function dl(){
    var cont=document.getElementById("tarea").value;
    var a=document.createElement("a");
    a.href=window.URL.createObjectURL(new Blob([cont],{type:"text/plain"}));
    a.download="file.txt";
    a.click();
}
function fr(){
    let x=prompt("Enter the value to replace:");
    let y=prompt("Enter the replacer:");
    let z=document.getElementById("tarea").value.toString();
    document.getElementById("tarea").value=z.replaceAll(x,y);;
}



// <!-- Author-Suresh Kumavat -->
// <!-- CodeClause Intern ID- CC35789 -->
// <!-- Designation- Web Development Intern -->
// <!-- Batch- Jul 2023 -->