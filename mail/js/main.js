const EmailArray = ["lory.rox.01@gmail.com", "ciao@gmail.com", "sd@gmail.com"];
const PswArray = ["1000", "1001", "1002"];
const submitButton = document.getElementById("submit-button");
let signIn;
const resultSuccess = document.getElementById("result-success");

submitButton.addEventListener("click", function () {
  const userEmailInput = document.getElementById("user-email-input");
  const userEmail = userEmailInput.value;
  const userPswInput = document.getElementById("user-psw-input");
  const userPsw = userPswInput.value;
  console.log(userEmail);
  for (let i = 0; i < EmailArray.length; i++) {
    console.log(i);

    if (userEmail === EmailArray[i] && userPsw === PswArray[i]) {
      signIn = true;
      //   console.log("email giusta");
      break;
    } else {
      signIn = false;
      //   console.log("email sbagliata");
    }
  }
  console.log(signIn);

  if (signIn == true) {
    console.log("Benvenuto");
    resultSuccess.className = "row justify-content-center d-none";
  } else {
    console.log("Email e/o Password errati, riprova");
    alert("Email errata");
  }
});
