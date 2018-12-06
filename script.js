// Code goes here

// Add your code here
var eq
var ok = 0
var notok = 0
var aufgabe = ""

$(function() {

  if(Cookies.get("notok") !== undefined) { 
    notok = parseInt(Cookies.get("notok"))
  }
  if(Cookies.get("ok") !== undefined) {
    ok = parseInt(Cookies.get("ok"))
  }

  $(".aufgabe").html(showAufgabe()); 
  $("#check").click(function() {
    check()
  })
  $("#delete").click(function() {
    deleteCookie()
  })
  showErgebnis()
})

function showAufgabe() {
  var a = getRandomInt(0,8)
  console.log(a)
  switch (a[0]) {
    case 0:
      eq = getMult()
      break;
    case 1:
      eq = getMultX1()
      break;
    case 2:
      eq = getMultX2()
      break;
    case 3:
      eq = getAdd1() 
      break;
    case 4:
      eq = getAdd2() 
      break;
    case 5:
      eq = getAdd2() 
      break;
    case 6:
      eq = getAus() 
      break;
    case 7:
      eq = getAus() 
      break;
    case 8:
      eq = getAus() 
      break;
  }
  $(".aufgabe").html(aufgabe)
  
}

function showErgebnis() {

  Cookies.set('ok', ok)
  Cookies.set('notok', notok)
  if(ok+notok !== 0) {
    $("#title").html("Richtig: "+ ok +" von "+(ok+notok)+" ("+(Math.floor(ok/(notok+ok)*100)+"%)"))
  } else {
    $("#title").html("Aufgabe")
  }
}

function check() {
  var l = $("#loesung").val()
  if(l !== "") {
    
    l = l.replace(/ /g, '')
    eq = eq.replace(/\+\-/g, '-')
    if(eq == l) {
      ok++
      $(".old").append("<div class='ok'>"+aufgabe+""+eq+"</div>")
    } else {
      notok++
      $(".old").append("<div class='notok'>"+aufgabe+"<s>"+l+"</s> <b>"+eq+"</b> </div>")
    }
    showErgebnis()
    showAufgabe()
    $("#loesung").val("")
  }
}


function getMult() {
  var a = getRandomInt(-10,10)
  var b = getRandomInt(-10,10)
  aufgabe = (a[0]+" * "+b[0]+" = "); 
  return a[0]*b[0]+""
}
function getMultX1() {
  var a = getRandomInt(-10,10)
  var b = getRandomInt(-10,10)
  aufgabe = (a[0]+"x * "+b[0]+" = ");
  if(a[0]*b[0] === 0) {
    return "0"
  } 
  return a[0]*b[0]+"x"
}
function getMultX2() {
  var a = getRandomInt(-10,10)
  var b = getRandomInt(-10,10)
  //var a = [-1,"(-1)"]
  //var b = [0,"0"]

  aufgabe = (a[0]+" * "+b[0]+"x = ");
  if(a[0]*b[0] === 0) {
    return "0"
  }  
  return a[0]*b[0]+"x"
}

function getAdd1() {
  var a = getRandomInt(-10,10);
  var b = getRandomInt(-10,10);
  aufgabe = (a[0]+"x + "+b[0]+"x = "); 
  if(a[0]+b[0] === 0) {
    return "0"
  } 
  return a[0]+b[0]+"x"
}

function getAus() {
  var a = getRandomInt(-10,-1);
  var b = getRandomInt(-10,10);
  var c = getRandomInt(1,10);
  aufgabe = (a[0]+" * ("+b[0]+"x - "+c[1]+") = "); 
  return (a[0]*b[0])+"x+"+(a[0]*c[0]*-1)
}

function getAdd2() {
  var a = getRandomInt(-10,10)
  var b = getRandomInt(-10,10)
  var c = getRandomInt(-10,10)
  aufgabe = (a[0]+"x + "+b[1]+" + x * "+c[1]+" = "); 
  if(a[0]+c[0] === 0 && b[0] === 0) {
    return "0";
  }
  if(a[0]+c[0] == 0) {
    return b[0]+""
  } 
  if(b[0]==0) {
    return (a[0]+c[0])+"x"
  }
  return (a[0]+c[0])+"x+"+b[0]
}

function deleteCookie() {
  console.log("delete")
  if($("#pw").val() == "pw") {
    ok = 0
    notok = 0
    showErgebnis()
  }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    var klz = z
    if(Math.abs(z) != z){
      klz = "("+z+")"
    }

    return [z,klz]
}
