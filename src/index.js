document.addEventListener("DOMContentLoaded", function (){
    const navbuttons = document.querySelectorAll("#nav i")

    navbuttons.forEach(function(button){
        button.addEventListener("click", selectButton)
    })
})

function selectButton(event){
    event.stopPropagation()
    const select = event.target
    console.log(select)
    clearSelection()
    select.classList.add("selected")
}

function clearSelection(){
    const buttons = document.querySelectorAll("#nav i");
    console.log(buttons)
    buttons.forEach((element)=>{
        element.classList.remove("selected");
    })
}