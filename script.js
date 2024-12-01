var currentPlayer='X';
let moves=0;
let gameEnd=false;
const wincombinations=[
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9],
    [1,5,9],[3,5,7]
];
function clickfun(num){
    let ele=document.getElementById(num);
    if(ele.textContent) return;
    if(ele.textContent || gameEnd) return;
    moves++;
    //result.innerHTML='player: '+currentPlayer;
    console.log("before updating:"+currentPlayer);
    console.log(currentPlayer);
    ele.innerHTML=currentPlayer;
    if(checkwin(num)){
        document.getElementById('result').innerHTML=currentPlayer+' wins';
        gameEnd=true;
    }else if(moves==9){
        document.getElementById('result').innerHTML='match draw';
        gameEnd=true;
    }
    currentPlayer= (currentPlayer==='X')?'O':'X';
}
function checkwin(num){
   for(let combination of wincombinations){
    if(combination.includes(num)){
        const [a,b,c]=combination;
        let consta=document.getElementById(''+a);
        let constb=document.getElementById(''+b);
        let constc=document.getElementById(''+c);
        if(consta.textContent && constb.textContent && constc.textContent){
            if(consta.textContent===constb.textContent && consta.textContent===constc.textContent){
                return true;
            }
        }
    }
   }
   return false;
}

function change(){
    const col = ["Cyan", "Charcoal", "MidnightBlue", "DarkSlateGray", "DeepPurple", "Burgundy", "DarkGreen", "Navy", "Maroon", "ForestGreen"];
    const col1 = ["Lavender", "MintCream", "AliceBlue", "HoneyDew", "LightCyan", "Ivory", "Seashell", "FloralWhite", "MistyRose", "PowderBlue"];

    var c=Math.floor(Math.random()*10);
    console.log(c);
    document.getElementById("body").style.backgroundColor=col[c];
    document.getElementById("1").style.backgroundColor='2px solid '+col1[c];
    document.getElementById("2").style.border='2px solid white';
    document.getElementById("3").style.backgroundColor='2px solid '+col1[c];
    document.getElementById("4").style.border='2px solid white';
    document.getElementById("5").style.borbackgroundColorder='2px solid '+col1[c];
    document.getElementById("6").style.border='2px solid white';
    document.getElementById("7").style.backgroundColor='2px solid '+col1[c];
    document.getElementById("8").style.border='2px solid white';
    document.getElementById("9").style.backgroundColor='2px solid '+col1[c];
    var s=document.getElementById("result"),i=0;
    var b=document.getElementById("box");
    setInterval(()=>{
        s.style.fontSize=(50+(i%5)*10)+'px';
        s.style.height=(400+(i%5)*10)+'px';
        i++;
    },500);
    setInterval(change,500)
}
