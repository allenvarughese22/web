function bclick(val){
    console.log(val)
    document.getElementById("screen").value = document.getElementById("screen").value + val
    
}

function clearscreen(){
    document.getElementById("screen").value = " "
}

function equalsign(){
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById("screen").value = result
}