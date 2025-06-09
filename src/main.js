let points = 0

let swordLevel = 0

let shieldLevel = 0

let slingLevel = 0

let mageLevel = 0

function changePoint(amount){
 points = points + amount
    document.getElementById("gold").innerText = points.toFixed(1) + " gold"
}

function buySword(){
    if (points >= 10){
        changePoint(-10)
        swordLevel = swordLevel + 1
        document.getElementById("swordLevel").innerText = swordLevel
        console.log(swordLevel)
        
    }else {
        alert("You don't have enough points to buy a sword!")
        
    }
}

function buyShield(){
    if (points >= 20){
        changePoint(-20)
        shieldLevel = shieldLevel + 1
        document.getElementById("shieldLevel").innerText = shieldLevel
    }else {
        alert("You don't have enough points to buy a shield!")
    }
}

function buySling(){
    if (points >= 30){
        changePoint(-30)
        slingLevel = slingLevel + 1
        document.getElementById("slingLevel").innerText = slingLevel
    }else{
        alert("You don't have enough points to buy a sling!")
    }
}

function buyMage(){
    if (points >= 50){
        changePoint(-50)
        mageLevel = mageLevel + 1
        document.getElementById("mageLevel").innerText = mageLevel
    }else{
        alert("You don't have enough points to buy a mage!")
    }
}

function bigClick(){
    let basePoint = 1 + (swordLevel ** 1.05) +(slingLevel ** 1.10) + (mageLevel ** 1.15) 
    changePoint(basePoint)
}