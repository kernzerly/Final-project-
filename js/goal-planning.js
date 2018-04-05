// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}



var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



function myFunction() {
  var text;
  var activities = document.getElementById("myInputActivityResult").value;

  switch (activities) {
    case "1":
      text = "Good start!";
      break;
    case "2":
      text = "Only three more activities to go!!";
      break;
    case "3":
      text = "Looking good!!!";
      break;
    case "4":
      text = "great, you only have one more to go!!!!";
      break;
    case "5":
      text = "Congratulations, you are in control over your     destiny!!!!!";
      break;
    case "6":
      text = "You have over exceeded expectations!!!!!!";
      break;
    case "7":
      text = "You are on a roll!!!!!!!"
      break;
    case "8":
      text = "You are exceptional!!!!!!!!"
      break;
    case "9":
      text = "No one can stop you now!!!!!!!!!"
      break;
    case "10":
      text = "You are amazing ten times over!!!!!!!!!!"
      break;
    default:
      text = "Please add a number; 1-10...";
  }
  document.getElementById("demo").innerHTML = text;
}
