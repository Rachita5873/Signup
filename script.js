function generateAccessToken() {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    return Array.from(randomBytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
  }
  


function addData() {

  try {

    let Name = document.getElementById("name").value;
    let head = document.getElementById("error1").value;
    if(Name.value===null){
     head.style.display = "block";
    }
    let Email = document.getElementById("email").value;
    let accessToken = generateAccessToken();
    let Password = document.getElementById("password1").value;

    localStorage.setItem('userName', Name);
    localStorage.setItem('email', Email);
    localStorage.setItem('pw', Password);
    localStorage.setItem('accessToken', accessToken);
  
    window.location.href = "profile.html";
}
  catch (error){

   console.log("error:", error);
  }


}

const accessToken = localStorage.getItem("accessToken");
if (!accessToken) {
    // Redirect the user to the signup page
    window.location.href = "index.html";
}