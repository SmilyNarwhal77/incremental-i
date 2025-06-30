let n = 1;
let logn = 0;
let a;
function changeby() {
    logn += Math.log10(n);
    n++;
} 

function display() {
    document.getElementById("e").textContent = Math.floor(logn);
    document.getElementById("num").textContent = 10 ** (logn - Math.floor(logn));
    document.getElementById("n").textContent = n;
}

function start() {
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