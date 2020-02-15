const onLoad = () => {
  document.querySelector("#submit_contact").addEventListener("click", validateValues);
}
window.addEventListener('load', onLoad);

const validateValues = () => {
  const nameInput = document.querySelector("#name_cont");
  const emailInput = document.querySelector("#email_cont");
  const pnInput = document.querySelector("#pn_cont");
  const labels = document.querySelectorAll(".labels");

  labels.forEach(e => {
    let kill = false;

    if (!nameInput.value && nameInput.value.length === 0 && e.htmlFor === "name_cont") {
      e.classList.remove('hidden')
      kill = true;
    }

    if (!emailInput.value && emailInput.value.length === 0 && e.htmlFor === "email_cont") {
      e.classList.remove('hidden')
      kill = true;
    }
    if (!!emailInput.value && emailInput.value.length > 0 && e.htmlFor === "email_cont") {
      let regex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
      let validateEmail = emailInput.value.match(regex);
      if(!validateEmail) {
        e.classList.remove('hidden')
        kill = true;
      }
    }

    if (!pnInput.value && pnInput.value.length === 0 && e.htmlFor === "pn_cont") {
      e.classList.remove('hidden')
      kill = true;
    }
    if (!!pnInput.value && pnInput.value.length > 0 && e.htmlFor === "pn_cont") {
      let regex = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
      let validateNumber = pnInput.value.match(regex);
      console.log(validateNumber)
      if (!validateNumber) {
        e.classList.remove('hidden')
        kill = true;
      }
    }

    if(kill) {
      return;
    }
    e.classList.add("hidden")
  })
}