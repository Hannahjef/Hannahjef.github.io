
let playerNameArray = [];
let teamBlue=[]
let teamGreen = []
let teamRed = []
let generateId = document.getElementById("counter-num")
let generateTeam = document.getElementById("counter-team")
let playerCount =2
let teamCount=2
let rows =[];
const plCount = document.querySelector('#playerCount');
const playList = document.querySelector("#newtable")
const new_Table = document.querySelector("#teamtabletable")


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
            plCount.innerText= "Current Players Count : " +playerNameArray.length


            task_delete_el.addEventListener('click', (e) => {

                list_el.removeChild(task_el);
                for(let i=0;i<playerNameArray.length;i++)
                {
                    if(playername==playerNameArray[i])
                    {
                        playerNameArray.splice(i,1);
                    }
                }
                plCount.innerText= "Current Players Count : " +playerNameArray.length
            });

    })
})



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
            teamBlue=[];
            teamGreen=[];
            teamRed=[];
            for(let i=0;i<playerNameArray.length;i++)
            {
                let temp = playerNameArray[i];
                let rand = randomNumber(0,playerNameArray.length);
                playerNameArray[i] = playerNameArray[rand];
                playerNameArray[rand]=temp;
            }
            
            for( let i=0;i<playerNameArray.length;i++)
            {
                console.log(playerNameArray[i])
            }
            if(teamCount<2 || playerNameArray.length%teamCount!=0 )
            {
                if(teamCount<2)
                {
                    alert("Invalid team count");
                    return;
                }
                else
               alert("Invalid no of Players");
               return;
            }
            else if(teamCount==2){
                
                let playerPerTeam = playerNameArray.length/teamCount;
                console.log(playerPerTeam)
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
                

            }
            else if(teamCount==3)
            {
                for(let player=0;player<playerNameArray.length;player++)
                {
    
                    
                    let playerPerTeam = playerNameArray.length/teamCount;
                    let status = false;
                   
                    while(status==false)
                    {
                        let team;
                        let randomteam = randomNumber(0,3);

                        
                    if(randomteam==0)
                    {
                       team = teamBlue;
                       
                    }
                    else if(randomteam==1)
                    {
                        team = teamGreen;

                    }
                    else{
                        team = teamRed;
                    }

                    if(team.length==playerPerTeam)
                    {
                        continue;
                    }
                    else{
                        team.push(playerNameArray[player]);
                        status = true;
                    }
                    
                }

                    
                }
            }
            console.log("Team1")
            for(let i=0;i<teamBlue.length;i++)
            {
                console.log(teamBlue[i])
            }
            console.log("Team Green")
            for(let i=0;i<teamGreen.length;i++)
            {
                console.log(teamGreen[i])
            }
            console.log("Team Red")
            for(let i=0;i<teamRed.length;i++)
            {
                console.log(teamRed[i])
            }
            generateTable() 
        }


        function generateTable() {
            if(rows.length!=0)
            {
                new_Table.removeChild(rows[0]);
                rows.pop();
            }
            //new_List.removeChild();
            //playList.removeChild();
            const new_List = document.createElement("div");
            // creates a <table> element and a <tbody> element
            
            const myBody = document.getElementsByTagName("body")[0];

            // creates <table> and <tbody> elements
          
            const myTableBody = document.createElement("tbody");
            

            // creating all cells
            for (let j = 0; j <= teamBlue.length; j++) {
              // creates a <tr> element
              const myCurrentRow = document.createElement("tr");
    
              for (let i = 0; i < teamCount; i++) {
                // creates a <td> element
                const myCurrentCell = document.createElement("td");
                let textvalue ="";
                // creates a Text Node
                if(j==0)
                {
                    myCurrentCell.style.color="white";
                switch(i)
                {
                    
                    case 0:
                        textvalue = 'Team Blue';
                        myCurrentCell.style.backgroundColor="blue";
                        break;
                    case 1:
                        textvalue = 'Team Green';
                        myCurrentCell.style.backgroundColor="green";
                        break;
                    case 2:
                        textvalue = 'Team Red';
                        myCurrentCell.style.backgroundColor="red";
                        break;
                }   
            }
            else
            {
                switch(i)
                {
                    case 0:
                        textvalue = teamBlue[j-1];
                        console.log(teamBlue[j]-1)
                        break;
                    case 1:
                        textvalue = teamGreen[j-1];
                        break;
                    case 2:
                        textvalue = teamRed[j-1];
                        break;
                }   
            }
            const currentText = document.createTextNode(
                textvalue,
              );
                // appends the Text Node we created into the cell <td>
                myCurrentCell.appendChild(currentText);
                // appends the cell <td> into the row <tr>
                myCurrentRow.appendChild(myCurrentCell);
              }
              // appends the row <tr> into <tbody>
              myTableBody.appendChild(myCurrentRow);
              
            }
    
            // appends <tbody> into <table>
            new_Table.appendChild(myTableBody);
            new_List.appendChild(new_Table);
            playList.appendChild(new_List);
            rows.push(myTableBody);
            // appends <table> into <body>
            // myBody.appendChild(myTable);
            // sets the border attribute of myTable to 2;
            //myTable.setAttribute("border", "1");
          
            
          }

          function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
    