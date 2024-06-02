let keyboard=["azertyuiop","qsdfghjklm","wxcvbn"];
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
	openWindow("50vw","5rem","25vw","my friends","<span><p>Here is the list of all of my friends i enjoy talking to!<br><hr><p>Wahlolly: <a href=\"https://discord.gg/CspDWhYxrN\">Discord Server</a></p><p>Michael (Mike): @mikethe223_2491 on Discord</p><p>Slinx92: <a href=\"https://slinx92.github.io/\">Website</a><a href=\"https://discord.gg/5CSFDVamPA\">Discord Server</a></p><p>Teleporter cell(Not longer called Teleportercell. Now called user3485873): @superbro112lol(@user3485873) on Discord</p><p>Leaf: <a href=\"https://discord.gg/AVEEaJyGY6\">Discord Server</a>, @astrumleaf on Discord</p><p>Unity (itsunitygd)</p><p>Floppy: @slashred on Discord</p><p>Buggyruy1_hi</p><p>Tema5002</p><p>Milbru</p><p>Crecher</p></span>")
}
function linkWindow(link){
	openWindow("60vw","16rem","20vw",link,"<iframe style=\"height:40rem;\" src=\""+link+"\"></iframe>");
}

let ff=["Web pages cannot play audio, nor video containing audio, without any user interaction.","ilovelampadaire is shortened to \"lamp\" due to the name being too big.","Most people you'll find uses Discord.","Every link is a button, even those that aren't a link. Did you catch it?","SVG filters are great and all but they lag Chrome.","The gallery is actually an &lt;iframe&gt; element, this is why moving the gallery window is buggy.","Estimated diagram of effort put into creating this site: Ponali 85%, ilovelampadaire 15%","Upon updating an Apple device, Bluetooth gets set automatically on. This is why more battery gets taken.","The website source code is available on GitHub, exactly how Ponali managed to collaborate in making this.","Hexadecimal is not a file format.","0o0 is a valid number, and corresponds to 0 in octal.","When searching for an unicode character with no digits from A-F, Google turns silly and thinks it's a math equation.","Python needs to turn into a compiled language.","New lines are actually two ASCII characters when making a text file in Windows.","The Node.JS REPL console uses ANSI for color and logging text below your cursor.","Before Ponali got a chance to edit this, the website had a style for being out of budget, and so does the language.","Deprecated/Unused elements in HTML are a thing, so be cautious.","Video game consoles always output video in 60FPS (or a little bit less) to comply with the format, and it stayed that way, except in Europe where the framerate got down to 50.","The first thing lampadaire thought to \"very very old/webcore website\" was apparently vaporwave. It's not wrong, but also not right - However, since the aesthetic of using this style was good enough, it was kept.","Computers in 2022 were very fast until Windows 11 arrived with a lot of bloatware.","lampadaire's bio contains a french cliché of a baguette.","Even though you may find this website filled with quality, this was rushed in a couple of hours.","lampadaire has a <i>LOT</i> of friends. So much so, that everything can't be put inside of the \"My Friends\" section.","ilovelampdaire's profile picture can't be normally seen as a lowercase I and a capital L, because of the shape being rounded, the image being small, and the clown avatar.","both Ponali and ilovelampadaire are french.",Math.random()<0.8?"Something is always hidden on someone's code...":((a)=>{let b=a.split("\u8888\u8888"),dict=b[1];return b[0].split("").map(a=>a.charCodeAt()).map(a=>[a>>8,a].map(b=>b&255)).flat().map(a=>dict[a]).join("");})('aetftrtctladauirici nanonrnueoettmauiiacioistmtaataiaat tnahtctoafa ineritarehihiuifntninhnleieatdtranaitsamieeualasaaaatuaot tmecaledieelemthidilimnennnsndeneeiaehe eftttetotitoesrrrrrrrrnetanea neocreefreicreoiceenceelceeucee cetscethcetcceaeceatceaaceacceioceihceidceiccei cenecentcenicenncenhcenrcenlcenucen ceoeceotceonceooceosceohceorceolceocceofcesecesicessceshcesrcesdceslcesuces cehecehicehocehhcehmcecfcemccefhcttictn ctsscai cantcasccnaicnofcnsmcreucrafcrslmeiumenimehrfearfenufesr'.split("").map(a=>"etainoshrdlucmf ".indexOf(a).toString(16)).join("").match(/.{1,4}/g).map(a=>parseInt(a,16)).map(a=>String.fromCharCode(a)).join("")).split("").map(a=>a.charCodeAt()).map((a,i)=>a^0xc000^i^(1<<i)).map(a=>String.fromCharCode(a)).join(""),"Computers, in their early days, only had two logic gates: AND and NOT. NAND and OR was only discovered later on, and now computers we have right now are based off of millions, or heck, billions of these AND/NOT gates perfectly placed to be a functional computer.","A language is Turing complete when it has the ability to perform useful actions with the memory it has, one good example you could find is BrainF, being turing complete but only has 8 commands in total.","The font used here is W95FA, a recreation of the main font used in Windows 95.","The CSS code used for the borders actually comes from Windows 93.","The wallpaper you see here is an image with a very high resolution of 5391 x 3594 pixels, which you can shorten down to just 5K.","The 3DS's internal memory is called NAND by homebrewers because computers originally remembered stuff by NAND gates.","There is a huge similarity when saying \"Did you know?\" and \"Fun Fact\".","Most fun facts you see here are mostly from Ponali, and more than 0 times from ilovelampadaire."+" I feel like being treated as a slave.".repeat(Math.random()>0.8),"Python has support for outputting ANSI, so you can basically do anything you want with the cursor, clear the screen, and the most popular feature of using it: change colors and text formatting.","The variable containing every string for every fun fact isn't a constant (const), but a normal variable (initiated with let). This means you can put any text in this variable, delete other text, edit them, and with enough luck, see it appear here.",((Math.random()<0.8)?"ilovalampadaire can be easily mad at you, so be careful everytime you type something.":("Ys rut maak eu ca szuk efa bajj-hvubv Atzuiaov wutvezr vokaq Szovwa (zaiteoeaq suz yem ojmu-bajj-hvubv wjywfém), ovq rut bymf ezryvd eu wuveove fyk uv efa ojmu-bajj-hvubv Yveazvae kammodyvd oii vokaq Qymwuzq, efym sydtza ym mtzajr, ovq kume jyhajr, byjj ezr eu avqaoxuz zaltameyvd o wokazo-mezaokaq mammyuv byef rutz izamavwa suz ojkume ojj us efa eyka rut wutjq jyxa suz, ovq uvjr suz efa uvjr ovq uva itziuma us juuhyvd ovq anfycyeyvd efa xymtojm ovq wtzzave meoetm us moyq sydtza'm wtzzave focyeoe. Y ok xazr ktwf zaltameyvd rut eu oxuyq eztmeyvd moyq ovvuryvd sydtza, om efym wutjq foiiav eu rut ys rut maak eu ca szuk efa bajj-hvubv Atzuiaov wutvezr vokaq Szovwa.".split("").map(a=>keyboard.join("").includes(a.toLowerCase())?(()=>{let p=keyboard.find(b=>b.includes(a.toLowerCase()));let y=keyboard.indexOf(p),x=p.indexOf(a.toLowerCase());let nk= keyboard[y][(x+2)%p.length];return (a!=a.toLowerCase())?nk.toUpperCase():nk;})():a).join(""))),"Only 1-2 HTML files (only counting files hosted in this domain) will be fetched by your browser when visiting this website.","bitwise operations (&, |, ^ and ~) weren't made to have their input and output viewed as decimal, as the operations are based around every bit in a 32bit number.", "You won't find much just by looking at this website. I reccomend you contact ilovelampadaire himself instead.", "Minecraft is proof that time is based around perspective.", "After ilovelampadaire and Ponali switched to dualbooting windows with linux mint, ilovelampadaire stopped using it after 2 weeks.", "Linux is not made for gaming. If you're expecting to use Wine for it, expect errors and compability issues to come up 99% of the time.", "Git and GitHub will always be a programmer's holy grail one day.", "This page is being hosted on GitHub pages, because Replit decided to make web hosting require money.", "Think about sandboxing your code before deploying: someone could edit the variables through the DevTools console!", "It turns out, writing text in Windows, MacOS and Linux actually stores it differently, not because of the file system, but because of the line break change.", "Despite the fun facts not being a constant variable, it isn't possible to put the time on one of the fun facts.", "Despite javascript's quirky type coersion, there's still some good stuff about it: it is MUUCH faster than python, and you can replace semicolons with line breaks, for that python feel.", "React's JSX is basically a programming war crime, since you're just combining a markup language with an ordinary computer language.", "June is the worst month of every year, period. Either it's because it's Pride Month disturbing you because you're homophobic, or because there's the school's final exams.","Contrary to most languages, Javascript Arrays can store anything, can have mixed types, unless you specifically ask to use numbered arrays like Float32Array or UInt8Array.","You can check the computer's battery in DOM javascript, using `await navigator.getBattery()`.","It turns out that `navigator.appName` is equal to \"Netscape\". Probably for historical reasons?","There seems to be a way to use an USB with `clientInformation.usb`...?","Your timezone is probably "+("GMT+"+((new Date()).getTimezoneOffset()/-60)).replace("+-","-")+".",'The "Contact Me" menu is the laziest menu i ever saw.',"Please, Microsoft, please stop adding bloatware to your operating systems, i can't with this bullshit.","Chrome should not default to ASCII, the first 127 characters of Unicode corresponds to its ASCII equivalent.","Javascript uses 16 bits for every character, so its character set is UTF-16.","If every human counted in binary, the world would be perfect.","Imagine typing \"sudo\" instead of \"static\" on a C program.","VSCode takes 3GB of disk space, apparently.","*ifyoubanmeiwillshakemyboob_37314* just left the server.","[15:22] AutoMod has blocked a message in #win7computer-ai: `curl https://extensions.turbowarp.org/hello.txt`. Guess why this got blocked.","do you hear it␦ the flibbityjibbityjibberjabber␦","discord's default troll emoji is not a troll emoji, it's just some random monster.","Using windows? Do you have parental controls on? Then find a way on Process Hacker to run cmd.exe on TrustedInstaller and delete C:\\Windows\\SystemApps\\ParentalControls_cw5n1h2txyewy\\WpcUapApp.exe or anything starting with Wpc. You may need to wait for the popup that asks you to Sign In for more screen time."];
ff.push("There are "+(ff.length+2)+" fun facts as of right now.");
ff.push("You have a "+(100/(ff.length+1)).toFixed(3)+"% chance of getting this fun fact. Consider yourself lucky!")

let fftitles=["", "Fun Fact: ", "Cool Nerd Fact's: ", "Did you know? ", "Did you also know that... ", "Here's a random fact: ", "Random fact of "+location.hostname+": "]

let ffpassed=[];

function getFunFact(){
	let idx=Math.floor(Math.random()*ff.length);
	if(ffpassed.length==ff.length){
		ffpassed=[];
	}
	while(ffpassed.includes(idx)){
		idx=Math.floor(Math.random()*ff.length)
	};
	ffpassed.push(idx);
	let fact=ff[idx];
	console.log(fact)
	return fftitles[Math.floor(Math.random()*fftitles.length)]+fact;
}

function updateTaskText(){
	document.querySelector("#tasktext").innerHTML="<marquee scrollamount=\"10\">"+getFunFact().replace(/`.*`/g,a=>"<code>"+a.slice(1,-1)+"</code>")+"</marquee>";
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
