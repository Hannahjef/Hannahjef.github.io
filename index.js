
let playerNameArray = [];
window.addEventListener('load',() => {
    const form = document.querySelector('#addPlayerForm');
    const input = document.querySelector('#addplayername');
    const list_el = document.querySelector('#playerlist');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const playername = input.value;

        if(!playername)
        {
            alert("Enter the player name");
            return;
        }
        else if(playerNameArray.includes(playername))
        {
            alert("Player name already exists, Enter a different name");
            return;
        }
        playerNameArray.push(playername);
            const task_el = document.createElement("div");
            task_el.classList.add("task");

            const task_content_el = document.createElement("div");
            task_content_el.classList.add("content");
            //task_content_el.innerText=playername;
            
            
            task_el.appendChild(task_content_el)

            const task_input_el = document.createElement("input");
            task_input_el.classList.add("text");
            task_input_el.type="text";
            task_input_el.value=playername;
            task_input_el.setAttribute("readonly","readonly");

            task_content_el.appendChild(task_input_el);

            

            const task_delete_el = document.createElement("button")
             task_delete_el.innerHTML="X";
            

             task_content_el.appendChild(task_delete_el)


            list_el.appendChild(task_el);
            input.value='';



            task_delete_el.addEventListener('click', (e) => {

                list_el.removeChild(task_el);
                for(let i=0;i<playerNameArray.length;i++)
                {
                    if(playername==playerNameArray[i])
                    {
                        playerNameArray.splice(i,1);
                    }
                }
            });

    })
})
let generateId = document.getElementById("counter-num")
let generateTeam = document.getElementById("counter-team")
let playerCount =2
let teamCount=1

function incrementPlayers(){
if(playerCount<12)
{
    playerCount+=1
generateId.innerText=playerCount
}

}
function decrementPlayers(){
    if(playerCount>2)
    {
        playerCount-=1
    generateId.innerText=playerCount
    }
}
    function decrementTeam(){
       
        if(teamCount>1)
        {
            teamCount-=1
            generateTeam.innerText=teamCount
        }
    }
        function incrementTeam(){
           // Console.log("increment");
            if(teamCount<3)
            {
                teamCount+=1
                generateTeam.innerText=teamCount
            }
        }
        function Print(){
         for(let i=0;i<playerNameArray.length;i++)
         {
            console.log(playerNameArray[i]);
         }
        }

        function assignTeams(){
            
            if(teamCount<2 || playerNameArray.length%teamCount!=0 )
            {
                if(teamCount<2)
                {
                    console.log("Invalid team count");
                }
                else
                console.log("Invalid player count");
            }
            else if(teamCount==2){
                
                let playerPerTeam = playerNameArray.length/teamCount;
                console.log(playerPerTeam)
                let teamBlue=[]
                let teamGreen = []
                for (let i=0;i<playerNameArray.length;i++)
                {
                    let randomValue = Math.random(1,500023);
                    randomValue = randomValue * Math.pow(10,5)
                    randomValue=Math.trunc(randomValue);
                    console.log(randomValue);
                    if(randomValue%2==0 && teamBlue.length!=playerPerTeam)
                    {
                        teamBlue.push(playerNameArray[i])
                    }
                    else if(teamGreen.length!=playerPerTeam){
                        teamGreen.push(playerNameArray[i])

                    }
                    else if(teamBlue.length!=playerPerTeam){
                        teamBlue.push(playerNameArray[i])
                    }
                }
                console.log("team 1")
                for(let i=0;i<teamBlue.length;i++)
                {
                    console.log(teamBlue[i]);
                }
                console.log("team 2")
                for(let i=0;i<teamGreen.length;i++)
                {
                    console.log(teamGreen[i]);
                }
                


            }
        }
    