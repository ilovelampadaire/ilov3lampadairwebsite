/**
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2014  Loic J. Duros
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

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
	openWindow("50vw","5rem","25vw","my friends","<span><p>Here is the list of all of my friends i enjoy talking to!<br><hr><p>Wahlolly: <a href=\"https://discord.gg/CspDWhYxrN\">Discord Server</a></p><p>Michael (Mike): @mikethe223_2491 on Discord</p><p>Slinx92: <a href=\"https://slinx92.github.io/\">Website</a><a href=\"https://discord.gg/5CSFDVamPA\">Discord Server</a></p><p>SuperBro112Lol: @superbro112lol on Discord <a href=\"https://superbro112lol.neocities.org/\">Website</a></p><p>Leaf: <a href=\"https://discord.gg/AVEEaJyGY6\">Discord Server</a>, @astrumleaf on Discord</p><p>Unity (itsunitygd)</p><p>Floppy: @slashred on Discord</p><p>Buggyruy1_hi</p><p>Tema5002</p><p>Milbru</p><p>Crecher</p></span>")
}
function linkWindow(link){
	openWindow("60vw","16rem","20vw",link,"<iframe style=\"height:40rem;\" src=\""+link+"\"></iframe>");
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
