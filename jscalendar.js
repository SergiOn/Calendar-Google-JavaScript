//*	Calendar on JS
console.log("Calendar on JS");

var date = new Date();
var dayNumber = date.getDate();
//console.log(typeof dayNumber);
// console.log(date.getDay());

var today = document.querySelector(".day" + dayNumber);
//console.log(today);
today.classList.add("today");

var thisEvent;


calendar.addEventListener("click", function(event) {
/* *** ***** Calendar ***** *** */
	var classActive = document.getElementsByClassName('active');
	for (var i = classActive.length - 1; i >= 0; i--) {
		if ((classActive[i] !== event.target && event.target.classList.contains("day")) || event.target.classList.contains("event") || (event.target.classList.contains("task") || (event.target.parentNode.classList.contains("task") && event.target.nodeName !== "INPUT"))) {
			classActive[i].classList.remove("active");
		}
	}
	if (event.target.classList.contains("day")) {
		btneventdel.style.display = "none";
		btntaskdel.style.display = "none";
		calevent.checked = true;
		document.querySelector(".calevent > span").style.display = "";
		document.querySelector(".calevent label[for=\"caltask\"]").style.display = "";
		document.querySelector(".caltask > span").style.display = "";
		document.querySelector(".caltask label[for=\"calevent\"]").style.display = "";
		document.querySelector(".calevent label input").value = "";
		document.querySelector(".calevent label p").style.visibility = "";
		document.querySelector(".calevent label input").removeAttribute("readonly");
		btnevent.value = "Создать мероприятие";
		document.querySelector(".caltask label input").value = "";
		document.querySelector(".caltask label textarea").value = "";
		document.querySelector(".caltask label input").removeAttribute("readonly");
		document.querySelector(".caltask label textarea").removeAttribute("readonly");
		btntask.value = "Создать задачу";

		if (event.target.classList.contains("active")) {
			event.target.classList.remove("active");
			tooltip.style.display = "";
		} else {
			event.target.classList.add("active");
			tooltip.style.display = "block";
		}
	} else if (event.target.classList.contains("event")) {
		if (document.querySelector(".active") === null) {
			window.thisEvent = event.target;

			tooltip.style.display = "block";
			calevent.checked = true;
			document.querySelector(".calevent > span").style.display = "none";
			document.querySelector(".calevent label[for=\"caltask\"]").style.display = "none";
			btneventdel.style.display = "";
			btnevent.value = "Изменить мероприятие";
			document.querySelector(".calevent label p").style.visibility = "hidden";
			document.querySelector(".calevent label input").value = event.target.innerHTML;
			document.querySelector(".calevent label input").setAttribute("readonly", "");
		}
	} else if (event.target.classList.contains("task") || (event.target.parentNode.classList.contains("task") && event.target.nodeName !== "INPUT")) {
		if (document.querySelector(".active") === null) {
			if (event.target.classList.contains("task")) {
				window.thisEvent = event.target;

				document.querySelector(".caltask label input").value = event.target.querySelector("span").innerHTML;
				document.querySelector(".caltask label textarea").value = event.target.querySelector("div").innerHTML;
			} else if (event.target.parentNode.classList.contains("task") && event.target.nodeName !== "INPUT") {
				window.thisEvent = event.target.parentNode;

				document.querySelector(".caltask label input").value = event.target.innerHTML;
				document.querySelector(".caltask label textarea").value = event.target.parentNode.querySelector("div").innerHTML;
			}

			tooltip.style.display = "block";
			caltask.checked = true;
			document.querySelector(".caltask > span").style.display = "none";
			document.querySelector(".caltask label[for=\"calevent\"]").style.display = "none";
			btntaskdel.style.display = "";
			btntask.value = "Изменить задачу";
			document.querySelector(".caltask label input").setAttribute("readonly", "");
			document.querySelector(".caltask label textarea").setAttribute("readonly", "");
			document.querySelector(".caltask label textarea").style.outline = "none";
		}
	}
	var eventTarg = [
		event.target.id, 
		event.target.parentNode.id, 
		event.target.parentNode.parentNode.id, 
		event.target.parentNode.parentNode.parentNode.id
	];
	if (eventTarg.indexOf("tooltip") === -1) {
		switch (true) {
			case event.clientY < 245 && event.clientX < 285:
				tooltip.className = "beforel";
				tooltip.style.transform = "translate(-25%, 0)";
				tooltip.style.top = event.clientY + 14 + "px";
				break;
			case event.clientY < 245 && document.documentElement.clientWidth - event.clientX < 245:
				tooltip.className = "beforer";
				tooltip.style.transform = "translate(-75%, 0)";
				tooltip.style.top = event.clientY + 14 + "px";
				break;
			case event.clientY < 245:
				tooltip.className = "before";
				tooltip.style.transform = "translate(-50%, 0)";
				tooltip.style.top = event.clientY + 14 + "px";
				break;
			case event.clientX < 285:
				tooltip.className = "afterl";
				tooltip.style.transform = "translate(-25%, -100%)";
				tooltip.style.top = event.clientY - 14 + "px";
				break;
			case document.documentElement.clientWidth - event.clientX < 245:
				tooltip.className = "afterr";
				tooltip.style.transform = "translate(-75%, -100%)";
				tooltip.style.top = event.clientY - 14 + "px";
				break;
			default:
				tooltip.className = "after";
				tooltip.style.transform = "translate(-50%, -100%)";
				tooltip.style.top = event.clientY - 14 + "px";
				break;
		}
		tooltip.style.left = event.clientX + "px";
		// console.log("X: "+event.clientX + " Y: "+event.clientY);
	}
/* *** ***** end Calendar ***** *** */

/* *** ***** Tooltop ***** *** */
	if (event.target.classList.contains("closetooltip") && classActive[0] !== undefined) {
		classActive[0].classList.remove("active");
		tooltip.style.display = "none";
	} else if (event.target.classList.contains("closetooltip")) {
		tooltip.style.display = "none";
	}
	
	var monthDays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
	var monthName = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля"];
	if (event.target.classList.contains("day")) {
		var allDate = new Date(date.getFullYear(), date.getMonth(), event.target.dataset.day);

		var thisDay = document.getElementsByClassName("thisday");
		for (i = 0; i < thisDay.length; i++) {
			thisDay[i].innerHTML = monthDays[allDate.getDay()] + ", " + allDate.getDate() + " " + monthName[allDate.getMonth()];
		}
	}
/* *** ***** end Tooltop ***** *** */


	// console.log("event.target:");
	// console.log(event.target);
	// console.log(event.target.parentNode.id !== "tooltip");
	// console.log(event.target.parentNode);
	// console.log(event.target.nodeName);

	// event.stopPropagation();


	
	var elementsInputCal = document.querySelectorAll(".day .task input");
	for (i = 0; i < elementsInputCal.length; i++) {
		elementsInputCal[i].addEventListener("change", function() {
			if (this.checked) {
				this.parentNode.classList.add("check");
			} else {
				this.parentNode.classList.remove("check");
			}
		});
	}
	
});


var createEvent;
var createTask;
var createInp;
var createSpan;
var createDiv;
btnevent.onclick = function(event) {
	if (document.querySelector(".active") === null) {
		if (document.querySelector(".calevent label input").hasAttribute("readonly")) {
			document.querySelector(".calevent label input").removeAttribute("readonly");
			btnevent.value = "Сохранить изменения";
		} else {
			document.querySelector(".calevent label input").setAttribute("readonly", "");
			btnevent.value = "Изменить мероприятие";
			thisEvent.innerHTML = document.querySelector(".calevent label input").value;
			// tooltip.style.display = "";
		}
	} else {
		if (!document.querySelector(".calevent label input").value) {
			return;
		}
		createEvent = document.createElement('div');
		createEvent.className = "event";
		createEvent.innerHTML = document.querySelector(".calevent label input").value;
		document.querySelector(".active").appendChild(createEvent);
		tooltip.style.display = "";
		document.querySelector(".active").classList.remove("active");
	}
}
btneventdel.onclick = function(event) {
	thisEvent.parentNode.removeChild(thisEvent);
	tooltip.style.display = "";
}

btntask.onclick = function(event) {
	if (document.querySelector(".active") === null) {
		if (document.querySelector(".caltask label input").hasAttribute("readonly")) {
			document.querySelector(".caltask label input").removeAttribute("readonly");
			document.querySelector(".caltask label textarea").removeAttribute("readonly");
			document.querySelector(".caltask label textarea").style.outline = "";
			btntask.value = "Сохранить изменения";
		} else {
			document.querySelector(".caltask label input").setAttribute("readonly", "");
			document.querySelector(".caltask label textarea").setAttribute("readonly", "");
			document.querySelector(".caltask label textarea").style.outline = "none";
			btntask.value = "Изменить задачу";
			thisEvent.querySelector("span").innerHTML = document.querySelector(".caltask label input").value;
			thisEvent.querySelector("div").innerHTML = document.querySelector(".caltask label textarea").value;
			tooltip.style.display = "";
		}
	} else {
		if (!document.querySelector(".caltask label input").value) {
			return;
		}
		createTask = document.createElement('div');
		createTask.className = "task";
		createInp = document.createElement('input');
		createInp.type = "checkbox";
		createSpan = document.createElement('span');
		createSpan.innerHTML = document.querySelector(".caltask label input").value;
		createDiv = document.createElement('div');
		createDiv.innerHTML = document.querySelector(".caltask label textarea").value;
		createTask.appendChild(createInp);
		createTask.appendChild(createSpan);
		createTask.appendChild(createDiv);
		document.querySelector(".active").appendChild(createTask);
		// tooltip.style.display = "";
		document.querySelector(".active").classList.remove("active");
	}
}
btntaskdel.onclick = function(event) {
	thisEvent.parentNode.removeChild(thisEvent);
	tooltip.style.display = "";
}

