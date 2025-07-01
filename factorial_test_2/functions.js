let n = 1;
let logn = 0;
let a = 0;
let diamonds = 0;
let gold = 0;
let started = 0;
let paused = 0;
let typedText = "";
const devs = ["keegan", "thisisnotadev", "totaallyadev", "smilynarwhal77", "keegangaming23", "elias", "et507024", "funcartride", "1248lychee1632", "royalsgamedevelopers"]
let devsTyped = []
let hacker = false
let hackAttempts = 0
for (let d = 0; d <= devs.length; d++) {
    devsTyped.push(false);
}
let lotsOfDevs = 0
let rebirths = 0;
let diamondmulti = 1;
let goldmulti = 1;
function changeby() {
    logn += Math.log10(n);
    n++;
} 

function display() {
    if(Math.floor(logn) <= 1e9) {
        document.getElementById("e").textContent = Math.floor(logn);
        document.getElementById("num").textContent = 10 ** (logn - Math.floor(logn));
        document.getElementById("n").textContent = n;
    }else if(Math.floor(logn) > 1e9) {
        document.getElementById("e").textContent = "e" + Math.floor(Math.log10(logn));
        document.getElementById("num").textContent = 10 ** (Math.log10(logn) - Math.floor(Math.log10(logn)));
    }
}

function start() {
    started ++
    a = setInterval(() => {
        changeby();
        display();
    }, 1);
    document.getElementById("button").textContent = "Pause!";
    document.getElementById("button").onclick = () => {
        stop();
    }
}

function stop() {
    paused ++
    clearInterval(a);
    document.getElementById("button").textContent = "Start!";
    document.getElementById("button").onclick = () => {
        start();
    }
}

function lag() {
    for(let i=0;i<1000;i++) {
        setInterval(() => {
            changeby();
            display();
        }, 1);
    }
}

function removelag() {
    for(let i=0;i<100000;i++) {
        clearInterval(i)
    }
}

function currencyupdate() {
    function diamondupdate() {
        document.getElementById("diamonddisplay").textContent = diamonds
    }
    function goldupdate() {
        document.getElementById("golddisplay").textContent = gold;
    }
    setInterval(()=> {
        diamondupdate();
        goldupdate();
    }, 100)
}

function attemptrebirth() {
    if(gold <= (10 ** rebirths)) {
        gold -= (10 ** rebirths);
        goldmulti++;
        diamonds++;
        rebirths++;
        logn = 0;
        n = 1;
        removelag();
    }
}
currencyupdate();
document.addEventListener("keydown", function(event) {
    /*if (event.key == "F12") {
        hacker = true;
        hackAttempts++
    }*/
    typedText += String(event.key)
    let typingADev = false;
    for(let i =0; i<devs.length;i++) {
        if ((devs[i].includes(typedText))&& !typingADev && (devsTyped[i] != true)) {
            if (typedText == devs[i]) {
                devsTyped[i] = true;
                lotsOfDevs++
            }
            typingADev = true
        }
        if (!typingADev) {
            typedText = ""
        }
        
    }
})
//Saving code goes here:
function saveGame() {
    let allthebeans = [] // all the achievement booleans
    achievements.forEach((achievement)=>{
        allthebeans += achievement.gotten;
    });
    localStorage.setItem("n", n);
    localStorage.setItem("logn", logn);
    localStorage.setItem("diamonds", diamonds);
    localStorage.setItem("gold", gold);
    localStorage.setItem("diamondmulti", diamondmulti);
    localStorage.setItem("goldmulti", goldmulti);
    
}
//End of saving code!
//Start of loading code!
function loadGame() {
    
}