console.log("This will be displayed in Console in the Browser")

function mycreatefunc( mymessage = "empty"){
    const mytemp = `<p> Your input = ${mymessage}</p>`
    return mytemp
}

const aabbcc = mycreatefunc("my test")

const mycontents = document.getElementsByClassName("mmm")[0]
mycontents.innerHTML =  aabbcc