var sbar = true;
function toggle_sidebar() {
    if(sbar){
        document.getElementById("sidebar").style.marginLeft = "-260px"
        document.getElementById("content").style.marginLeft = "0px";
    }
    else {
        document.getElementById("sidebar").style.marginLeft = "0px"
        document.getElementById("content").style.marginLeft = "250px";
    }
    sbar = !sbar;    
}

function load_menu() {
	var sidemenu = document.getElementById("sidemenu");
	menu.forEach(function (section){
		var new_node = document.createElement("li");
		new_node.innerText = section.section_title;
		new_node.className = "sidemenutitle";
		sidemenu.appendChild(new_node);
		section.entries.forEach(function(entry){
			var new_node = document.createElement("li");
			new_node.innerText = entry.title;
			new_node.className = "sidemenubit";
			new_node.setAttribute("onclick", "location.href = '" + entry.link + "'");
			sidemenu.appendChild(new_node);
		});
		sidemenu.appendChild(document.createElement("hr"));
	});
	sidemenu.lastChild.remove();
}

load_menu();