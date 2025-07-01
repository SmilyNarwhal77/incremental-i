const achievements = [
    {
        name: "Achievement: What does this do?",
        check: function () {
            if(started > 0) return true
        },
        gotten: false,
        requirement: "Click the button.",
        rewardfunc: function () {},
        sayreward: "",
        havenoreward: true,
    },
    {
        name: "Achievement: What about this?",
        check: function () {
            if(paused > 0) return true
        },
        gotten: false,
        requirement: "Click the button again.",
        rewardfunc: function () {},
        sayreward: "",
        havenoreward: true,
    },
    {
        name: "Secret Achievement: It's not a clicker game!",
        check: function () {
            if((started + paused) > 100) return true
        },
        gotten: false,
        requirement: "Click the button 100 times",
        rewardfunc: function () {
            gold += goldmulti
        },
        sayreward: "You get 1🪙",
    },
    {
        name: "Secret Achievement: Stop clicking it!",
        check: function () {
            if((started + paused) > 1000) return true
        },
        gotten: false,
        requirement: "Click the button 1000 times",
        rewardfunc: function () {
            gold--
        },
        sayreward: "You lose 1🪙",
    },
    {
        name: "Secret Achievement: Fine. Have gold.",
        check: function () {
            if((started + paused) > 5000) return true
        },
        gotten: false,
        requirement: "Click the button 5000 times",
        rewardfunc: function () {
            gold += 3 * goldmulti
        },
        sayreward: "You get 3🪙",
    },
    {
        name: "Achievement: Starting Off!",
        check: function () {
            if(n >= 2000) return true
        },
        gotten: false,
        requirement: "More than 2000 Factorial",
        rewardfunc: function () {},
        sayreward: "",
        havenoreward: true,
    },
    {
        name: "Achievement: 15000 Digits?!",
        check: function () {
            if(logn >= 15000) return true
        },
        gotten: false,
        requirement: "Get e15000",
        rewardfunc: function () {
            gold += goldmulti
        },
        sayreward: "You get 1🪙",
    },
    {
        name: "Achievement: The First Rebirth!",
        check: function () {
            if(rebirths == 1) return true
        },
        gotten: false,
        requirement: "Rebirth once",
        rewardfunc: function () {
            gold += 5 * goldmulti;
        },
        sayreward: "You get 5🪙"
    },
    {
        name: "Secret Achievement: Developer!",
        check: function() {
            if(lotsOfDevs >= 1) return true
        },
        gotten: false,
        requirement: "Type a dev's name",
        rewardfunc: function () {
            diamonds += diamondmulti
        },
        sayreward: "You get 1💎",
    },
    {
        name: "Secret Achievement: Another Developer!",
        check: function() {
            if(lotsOfDevs >= 2) return true
        },
        gotten: false,
        requirement: "Type another dev's name",
        rewardfunc: function () {
            diamonds += 2 * diamondmulti;
        },
        sayreward: "You get 2💎",
    },
    {
        name: "Secret Achievement: So many devs!?!",
        check: function() {
            if(lotsOfDevs >= 3) return true
        },
        gotten: false,
        requirement: "Type too many dev's names...",
        rewardfunc: function () {
            diamonds += 3 * diamondmulti
        },
        sayreward: "You get 3💎",
    },
    {
        name: "Secret Achievement: ARE YOU STALKING THE DEVS?!",
        check: function() {
            if(lotsOfDevs >= 4) return true
        },
        gotten: false,
        requirement: "Type too many dev's names",
        rewardfunc: function () {
            diamonds -= 5;
        },
        sayreward: "You have too many💎. Lose 5.",
    },
    {
        name: "Secret Achievement: ARE <b>YOU</b> A DEV!!??",
        check: function() {
            if(lotsOfDevs >= 10) return true
        },
        gotten: false,
        requirement: "Know all the devs",
        rewardfunc: function () {
            diamonds += 9 * diamondmulti;
        },
        sayreward: "You get too many 💎",
    },
    /*{
        name: "Secret Achievement: The very nice number",
        check:
    },*/
    {
        name: "Secret Achievement: Hacker! GET OUT!",
        check: function() {
            if (hackAttempts = 1 && hacker) return true
        },
        gotten: false,
        requirement: "Open the console using F12",
        rewardfunc: function () {
            diamonds = 0;
            gold = 0;
            diamondmulti = 0;
            goldmulti = 0;
            hacker = false
        },
        sayreward: "Lose all diamonds and gold",
    },
    {
        name: "Secret Achievement: I TOLD YOU TO STOP!",
        check: function() {
            if (hackAttempts >= 2 && hacker) return true
        },
        gotten: false,
        requirement: "Keep Hacking...",
        rewardfunc: function () {
            diamonds = 0;
            gold = 0;
            diamondmulti = 0;
            goldmulti = 0;
            hacker = false
        },
        sayreward: "Lose all diamonds and gold... again.",
    },]
function b() {
    achievements.forEach((achievement)=> {
        if(achievement.gotten) return;
        if(achievement.check()) {
            achievement.gotten = true;
            achievement.rewardfunc();
            document.getElementById("achdisplay").innerHTML = achievement.name + "<br>Requirement: " + achievement.requirement;
            let c = (!achievement.havenoreward) ? ("<br>Reward: " + achievement.sayreward) : "";
            document.getElementById("achdisplay").innerHTML += c;
            document.getElementById("openclosethis").style.display = "block";
            setTimeout(()=>{
                document.getElementById("openclosethis").style.display = "none";
            }, 1500)
        }
    })
}
setInterval(b, 100)