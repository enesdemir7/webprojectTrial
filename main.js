function openForm() {
    document.getElementById("myForm1").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm1").style.display = "none";
  }
function openForm_() {
    document.getElementById("myForm2").style.display = "block";
  }
  
function closeForm_() {
    document.getElementById("myForm2").style.display = "none";
  }

function GirisYap() {
    document.getElementById("myForm2").style.display = "none";
    document.getElementById("myForm1").style.display = "block";
  }

  function Kayit() {
    document.getElementById("myForm1").style.display = "none";
    document.getElementById("myForm2").style.display = "block";
   
  }

function validateForm() {
    let x = document.forms["myForm1"]["email"].value;
    let y = document.forms["myForm1"]["psw"].value;
    if (x == "eneskptndcs@gmail.com" && y=="12345678") {
      alert("Successfully logged in!");
      return false;
    }
    else {
      alert("Username and password do not match!");
      return false; 
    }
  }