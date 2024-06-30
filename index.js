const spaces = document.querySelectorAll(".space");

playerattemp = "X"
const printplayer = (space) => {
    if(!spaces[space].innerHTML){
        spaces[space].innerHTML = playerattemp
        playerattemp = playerattemp == "X" ? "O" : "X";
    }else{
        alert("Espacio Ocupado")
    }

}

spaces.forEach(space => {
    space.addEventListener("click", ()=>printplayer(space.id - 1))
} )