var Prando = require('prando');

function getMonday(d) {
		  d = new Date();
		  var day = d.getDay(),
		      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
		  var monday = new Date(d.setDate(diff));

	   	  var dd = monday.getDate();

		  var mm = monday.getMonth() + 1;

		  var yyyy = monday.getFullYear();


		 if(dd<10) 
		  {
		     dd='0'+dd;
		  } 

		 if(mm<10) 
		  {
		    mm='0'+mm;
		  } 

		 monday = dd+'/'+mm+'/'+yyyy;
		 return (monday);
}


function getSunday(d) {
		  d = new Date();
		  var day = d.getDay(),
		      diff = d.getDate() - day
		  var sunday = new Date(d.setDate(diff));

		  var dd = sunday.getDate();

		  var mm = sunday.getMonth() + 1;

		  var yyyy = sunday.getFullYear();


		 if(dd<10) 
	    	{
		      dd='0'+dd;
		    } 

		 if(mm<10) 
	     	{
	     	    mm='0'+mm;
	    	} 

		sunday = dd+'/'+mm+'/'+yyyy;
		return (sunday);
}

let rng = new Prando(getMonday(new Date) + " - " + getSunday(new Date()));

const people = ["Tayo","Samad","Dare","Yahaya", "Ifere", "Joseph Olabisi", "Moore", "Olumide", "David", "Irene"]

for(let i = 0 ; i < people.length ; i++){
    const j = rng.nextInt(0,i+1)
    const temp = people[i]
    people[i] = people[j]
    people[j] = temp
}

console.log(people)




