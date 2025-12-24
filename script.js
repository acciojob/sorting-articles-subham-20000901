//your JS code here. If required.
const bands =  ['The Plot in You',
				'The Devil Wears Prada',
				'Pierce the Veil',
				'Norma Jean',
				'The Bled',
				'Say Anything',
				'The Midway State',
				'We Came as Romans',
				'Counterparts',
				'Oh, Sleeper',
				'A Skylit Drive',
	           'Anywhere But Here',
				'An Old Dog'];

function remove (ch){
	return ch.replace(/^(a |an |the )/i,"").trim();
}

bands.sort((a,b) => {
	let s1 = remove(a).toLowerCase();
	let s2 = remove(b).toLowerCase();
	if(s1<s2) return -1;
	else if(s1>s2) return 1;
	return 0;
})

const ul = document.getElementById("band");

for(let i=0; i<bands.length; i++){
	let li = document.createElement("li");
	li.innerText = bands[i];
	ul.appendChild(li);
}