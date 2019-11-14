const Prando = require('prando');
const { members } = require('./constants')
const { getNearestMonday,getNearestSunday,deterministicShuffle} = require('./utils');


function generateRandomPairings(){
	let rng = new Prando(getNearestMonday(new Date) + " - " + getNearestSunday(new Date()));
	const shuffledMembers = deterministicShuffle(members,rng)
	for(let i =0 ; i < shuffledMembers.length ; i+=2){
		console.log(shuffledMembers[i] + "-" + shuffledMembers[i+1])
	}

}

generateRandomPairings()



