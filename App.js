window.addEventListener('DOMContentLoaded', init);
const opts = ['+', '-', '*', '/', '9', '8', '7', '6', '5', '4',
'3', '2', '1', '0', '.'];//all keys

const specs = ['+', '-', '*', '/']; 



function init(){
	console.log('ready');
	let dec = false;
	let eva = false;

	//main container area
	const container= document.createElement('div');
	container.classList.add('container');
	container.style.maxWidth = '600px';
	container.style.margin = 'auto';
	document.body.appendChild(container);

    //screen output area
	const output = document.createElement('input');
	output.setAttribute('type', 'text');
	output.classList.add('output');
	output.style.width = '600px';
	output.style.lineHeight = '50px';
	//centers content
	output.style.fontSize = '3em';
	output.style.textAlign = 'right';
	container.appendChild(output);

    //holds keys for the calculator
	const main = document.createElement('div');
	main.classList.add('main');
	main.style.width = '100%';
	container.appendChild(main);

	opts.forEach(function(val){
		//console.log(val);
		//outputs the vaules in the array as keys
		btnMaker(val, addOutput);
		//creates the buttons

	})
	btnMaker('=', evalOutput);
	btnMaker('Clear', clrOutput);

	function evalOutput(){
		console.log('=');
		if(output.value===''){
			output.style.border = 'red 1px solid';
		}
		else{
			output.value = eval(output.value);
		}

	}

	function clrOutput(){
		output.value = "";
		output.style.border = 'black 1px solid';


	}

	function btnMaker(txt,myfunction){
		let btn = document.createElement('button');
		btn.setAttribute('type', 'button');
		btn.style.width = '23%';
		btn.style.lineHeight = '50px';
		btn.style.margin = '1%';
		btn.style.fontSize = '2em';
		btn.val= txt;
		btn.textContent = txt;
		btn.addEventListener('click', myfunction);
		main.appendChild(btn);


	}

	function addOutput(e){
	console.log(dec);
	output.style.border = 'green 1px solid';	
	//console.log(e.target.val);
	let char = e.target.val;
	
	if(char == '.'){
		if(dec){
			char = '';
			output.style.boarder = 'red 1px solid';
			//this stops the user from placing more than one decimal
		}else{
			dec = true;
		}

	}
	eva =specs.includes(char);
if(eva){
	dec= false;
		
}output.value += char;
}
}