const Prando = require('prando').default;
const { members } = require('./constants')
const { getNearestMonday,getNextSunday,deterministicShuffle} = require('./utils');


function getWeekRangeString(){
	return getNearestMonday() + " - " + getNextSunday()
}

function generateRandomPairings(){
	let rng = new Prando(getWeekRangeString());
	const pairings = []
	const shuffledMembers = deterministicShuffle(members,rng)
	for(let i =0 ; i < shuffledMembers.length ; i+=2){
		const pairing = `<li>${shuffledMembers[i]} - ${shuffledMembers[i+1]}</li>`;
		pairings.push(pairing)
	}

	const element = document.getElementById("app")
	let content = '<div>'
	content += `<h2> Pairings for the week ${getWeekRangeString()}</h2>`
	content += '<ul>'
	pairings.forEach((pair) => content+= pair)
	content += '</ul>'
	element.innerHTML = content

}

generateRandomPairings()



