// check off specific Todos by clicking
$('ul').on('click', 'li', function () {

	$(this).toggleClass('completed');
});

$('li').click(function (e) {
	if (e.offsetX > e.target.offsetLeft) {
		console.log("no")
	}
	else {
		console.log("yes")
	}
})

//click on x to delete todos
$('ul').on('click', 'span', function (event) {
	// $(this).remove(); // this will only remove the span element
	$(this).parent().fadeOut(function () {
		$(this).remove();
	}); //this will also remove the parent element of span, that is the list element enclosing the clicked span

	event.stopPropagation();
});


function myFunction() {
	document.getElementById("demo").innerHTML = x;
}

var customUL = document.querySelector(".todoList");

document.getElementById('myDate').valueAsDate = new Date();

//adding todos to the list
$("input[type='text']").keypress(function (event) {
	if (event.which === 13) {
		var todoText = $(this).val();
		//create new li and add to ul

		var x = document.getElementById("myDate").valueAsDate;
		var daysDiff=dateDiffInDays(new Date(), new Date(x));

		// $('ul').prepend('<li><span><i class="fas fa-trash-alt"></i></span> ' + todoText + '        	Deadline:' + x + ' </li>');
		//add progress bar
		

		var iconNode = document.createElement("i");
		iconNode.classList.add("fas")
		iconNode.classList.add("fa-trash-alt")
		console.log(new Date())
		console.log(x)
		

		var todoParaNode = document.createElement("p");
		var todoTextNode = document.createTextNode(todoText)
		todoParaNode.appendChild(todoTextNode);
		todoParaNode.classList.add("todoText")

		var progressnode = document.createElement("progress");
		console.log(daysDiff);
		progressnode.setAttribute("value",new Date());
		progressnode.setAttribute("max", new Date(x));
		//to get meaningfull progress bar
		// progressnode.setAttribute("value","5");
		// progressnode.setAttribute("max", "10");
		

		var deadLineParaNode = document.createElement("p");
		var deadLineTextNode = document.createTextNode("  	Days Left:   " + daysDiff)
		deadLineParaNode.appendChild(deadLineTextNode);
		deadLineParaNode.classList.add("deadlineText")

		var spanNode = document.createElement("span");
		spanNode.appendChild(iconNode);

		var ListNode = document.createElement("li");
		ListNode.appendChild(spanNode);
		ListNode.appendChild(todoParaNode);
		ListNode.appendChild(progressnode);
		ListNode.appendChild(deadLineParaNode); 
		customUL.appendChild(ListNode);	

		//clearing the input field after hitting enter
		$(this).val('');
	}
});

//Toggling input field
$('#toggle-form').click(function () {
	$("input[type='text']").fadeToggle();
	$("input[type='date']").fadeToggle()
});


// const progressBarFull = document.getElementById('progressBarFull');
// let questionCounter = 5;
// const MAX_QUESTIONS = 10;
// progressBarFull.style.width = `${(new Date() / new Date(x)) * 100}%`;

function dateDiffInDays(date1, date2) {
    // round to the nearest whole number
    return Math.round((date2-date1)/(1000*60*60*24));
}



// Date.prototype.toDateInputValue = (function() {
//     var local = new Date(this);
//     local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
//     return local.toJSON().slice(0,10);
// });
// document.getElementById('myDate').value = new Date().toDateInputValue();