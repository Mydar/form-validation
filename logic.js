
  function validate() {
    var fname = document.getElementById('firstname');
    var lname = document.getElementById('lastname');
    var Email = document.getElementById('email');
    var Password = document.getElementById('password');
    var CPassword = document.getElementById('confirm-password');

    if(fname.value.trim() == "" || lname.value.trim() == "" || Email.value.trim() == "" || Password.value.trim() == "" || CPassword.trim() == "") {
      alert('Please fill out all fields');
    }
    else if(Password.value.length < 8 || Password.value.length > 16) {
        alert('password should have between 8 to 16 characters');
      }
    else if(Password !== CPassword) {
        alert('Confirm that passwords match');
      }
  }
