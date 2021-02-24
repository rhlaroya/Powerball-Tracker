function getRando(number) {
    var num = Math.round((Math.random() * number) + 1);
    num = num.toString();
    if (num.length < 2) {
        num = "0" + num;
    }
    return num;
}
function getPBNums() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById('PB1').innerHTML = getRando(69);
    document.getElementById('PB2').innerHTML = getRando(69);
    document.getElementById('PB3').innerHTML = getRando(69);
    document.getElementById('PB4').innerHTML = getRando(69);
    document.getElementById('PB5').innerHTML = getRando(69);
    document.getElementById('PB6').innerHTML = getRando(26);
    document.getElementById('PB7').innerHTML = getRando(69);
}

let clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}

let total = 0;
function bet() {
    total += 2;
    document.getElementById("total").innerHTML = total;
    noti();
}

function pp() {
    total += 3;
    document.getElementById("total").innerHTML = total;
    noti();
}

let earnings = 0;
let y = 0;
function pl(){
    // let entry = document.getElementById("entry").value;
    let entry = document.getElementById('ent').value;
    y = y + parseInt(entry);
    document.getElementById('earn').innerHTML = y;
    // earnings += entry;
    // document.getElementById("earnings").innerText = earnings;
}
document.write(earnings);

fetch('https://data.ny.gov/resource/d6yy-54nr.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
    });

function noti(){
    alert("You have/will bet the rolled numbers. Goodluck!");
}

