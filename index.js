let zIndexLast=100;
function openWindow(width,top,left,title,content){
	let win=document.createElement("div");
	win.classList.add("window");
	[win.style.width,win.style.top,win.style.left]=[width,top,left];
	win.innerHTML='<div class="window-header"></div><div class="window-content">'+content+'</div>';
	win.children[0].innerText=title;
	let rem=document.createElement("a");rem.classList.add("winrem");
	rem.addEventListener("click",()=>{win.remove();})
	win.children[0].appendChild(rem);
	zIndexLast++;
	win.style.zIndex=zIndexLast;
	document.querySelector("div#windows").appendChild(win);
	
	let holding=false,pos=[];
	document.body.addEventListener("mousedown",(e)=>{
		//console.log(e);
		if(e.target!=win.children[0]){return;}
		pos=[e.screenX,e.screenY];holding=true;document.body.style.userSelect="none";
		zIndexLast++;
		win.style.zIndex=zIndexLast;
	})
	document.body.addEventListener("mouseup",()=>{
		holding=false;document.body.style.userSelect="unset";
	});
	document.body.addEventListener("mousemove",(e)=>{
		if(holding){
			let dif=[e.screenX-pos[0],e.screenY-pos[1]];
			win.style.left=(win.getBoundingClientRect().left+dif[0])+"px";
			win.style.top = (win.getBoundingClientRect().top+dif[1])+"px";
			pos=[e.screenX,e.screenY];
		}
	})
};
function imageWindow(image,width,top,left,title,content){
	content="<span style=\"width: -webkit-fill-available;display:inline-block;\">"+content+"</span><img style=\"width:min( 20%, 12rem );margin:12px 0px;\" src=\""+image+"\"></img>";
	openWindow(width,top,left,title,content);
}
function aboutWindow(){
	imageWindow("https://cdn.discordapp.com/avatars/1056952213056004118/81b3a4b0ff97199c14b093cb1bac7d4e?size=1024","80vw","10rem","10vw","about me","<p>Hi! My name's ilovelampadaire. I'm french, i make YouTube videos and i like programming.</p><p>I use HTML, CSS, and JavaScript for web development, and also Python for anything else.</p><p>I use VS Code, Sublime Text, and Atom as my text editors.</p><p>This website has been inspired by <a onclick=\"linkWindow('https://noxyyk.me/')\">Noxyyk</a> and got better thanks to help from <a onclick=\"linkWindow('https://ponali.github.io/')\">Ponali</a>.</p>");
}
function contactWindow(){
	openWindow("50vw","30rem","25vw","contact me","<p>If you wish to contact me, or see my social media accounts, you can always use my <a href=\"https://linktr.ee/ilovelampadaireyt\">Linktree</a>, or view my <a href=\"https://www.youtube.com/@ilovelampadaire\">YouTube channel</a>.</p>");
}
function galleryWindow(){
	openWindow("60vw","16rem","20vw","gallery","<iframe style=\"height:30rem;\" src=\"gallery.html\"></iframe>");
}
function friendsWindow(){
	openWindow("50vw","5rem","25vw","my friends","<span><p>Here is the list of all of my friends i enjoy talking to!<br><hr><p>Wahlolly: <a href=\"https://discord.gg/CspDWhYxrN\">Discord Server</a></p><p>Michael (Mike): @mikethe223_2491 on Discord</p><p>Slinx92: <a href=\"https://slinx92.github.io/\">Website</a><a href=\"https://discord.gg/5CSFDVamPA\">Discord Server</a></p><p>Teleporter cell(Not longer called "Teleportercell". Now called "user3485873"): @superbro112lol(@user3485873) on Discord</p><p>Leaf: <a href=\"https://discord.gg/AVEEaJyGY6\">Discord Server</a>, @astrumleaf on Discord</p><p>Unity (itsunitygd)</p><p>Floppy: @slashred on Discord</p><p>Buggyruy1_hi</p><p>Tema5002</p><p>Milbru</p><p>Crecher</p></span>")
}
function linkWindow(link){
	openWindow("60vw","16rem","20vw",link,"<iframe style=\"height:40rem;\" src=\""+link+"\"></iframe>");
}

let ff=["Web pages cannot play audio, nor video containing audio, without any user interaction.","ilovelampadaire is shortened to \"lamp\" due to the name being too big.","Most people you'll find uses Discord.","Every link is a button, even those that aren't a link. Did you catch it?","SVG filters are great and all but they lag Chrome.","The gallery is actually an &lt;iframe&gt; element, this is why moving the gallery window is buggy.","Estimated diagram of effort put into creating this site: Ponali 85%, ilovelampadaire 15%","Upon updating an Apple device, Bluetooth gets set automatically on. This is why more battery gets taken.","The website source code is available on GitHub, exactly how Ponali managed to collaborate in making this.","Hexadecimal is not a file format.","0o0 is a valid number, and corresponds to 0 in octal.","When searching for an unicode character with no digits from A-F, Google turns silly and thinks it's a math equation.","Python needs to turn into a compiled language.","New lines are actually two ASCII characters when making a text file in Windows.","The Node.JS REPL console uses ANSI for color and logging text below your cursor.","Before Ponali got a chance to edit this, the website had a style for being out of budget, and so does the language.","Deprecated/Unused elements in HTML are a thing, so be cautious.","Video game consoles always output video in 60FPS (or a little bit less) to comply with the format, and it stayed that way, except in Europe where the framerate got down to 50.","The first thing lampadaire thought to \"very very old/webcore website\" was apparently vaporwave. It's not wrong, but also not right - However, since the aesthetic of using this style was good enough, it was kept.","Computers in 2022 were very fast until Windows 11 arrived with a lot of bloatware.","lampadaire's bio contains a french cliché of a baguette.","Even though you may find this website filled with quality, this was rushed in a couple of hours.","lampadaire has a <i>LOT</i> of friends. So much so, that everything can't be put inside of the \"My Friends\" section.","ilovelampdaire's profile picture can't be normally seen as a lowercase I and a capital L, because of the shape being rounded, the image being small, and the clown avatar.","both Ponali and ilovelampadaire are french.","Computers, in their early days, only had two logic gates: AND and NOT. NAND and OR was only discovered later on, and now computers we have right now are based off of millions, or heck, billions of these AND/NOT gates perfectly placed to be a functional computer.","A language is Turing complete when it has the ability to perform useful actions with the memory it has, one good example you could find is BrainF, being turing complete but only has 8 commands in total.","The font used here is W95FA, a recreation of the main font used in Windows 95.","The CSS code used for the borders actually comes from Windows 93.","The wallpaper you see here is an image with a very high resolution of 5391 x 3594 pixels, which you can shorten down to just 5K.","The 3DS's internal memory is called NAND by homebrewers because computers originally remembered stuff by NAND gates.","There is a huge similarity when saying \"Did you know?\" and \"Fun Fact\".","Python has support for outputting ANSI, so you can basically do anything you want with the cursor, clear the screen, and the most popular feature of using it: change colors and text formatting.","The variable containing every string for every fun fact isn't a constant (const), but a normal variable (initiated with let). This means you can put any text in this variable, delete other text, edit them, and with enough luck, see it appear here.","Only 1-2 HTML files (only counting files hosted in this domain) will be fetched by your browser when visiting this website.","bitwise operations (&, |, ^ and ~) weren't made to have their input and output viewed as decimal, as the operations are based around every bit in a 32bit number."];
ff.push("There are "+(ff.length+1)+" fun facts as of right now.")

function getFunFact(){
	return "Fun Fact: "+ff[Math.floor(Math.random()*ff.length)];
}

function updateTaskText(){
	document.querySelector("#tasktext").innerHTML="<marquee scrollamount=\"10\">"+getFunFact()+"</marquee>";
}

window.onload=(()=>{
	let d=document,Q=(a)=>d.querySelectorAll(a),q=(a)=>Q(a)[0];
	updateTaskText();
	q("#tasktext").addEventListener("click",updateTaskText);
	q("#settings #wallpaperEffect").addEventListener("click",()=>{
		if(q("#background").classList.contains("svgf")){q("#background").classList.remove("svgf")};
		if(q("#settings #wallpaperEffect").checked){q("#background").classList.add("svgf")}
	})
})
