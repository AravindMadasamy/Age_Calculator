function calculateAge() {
  const birthdate = document.getElementById("birthdate").value;
  const result = document.getElementById("result");

  if (!birthdate) {
    result.textContent = "Please select a birthdate.";
    return;
  }

  const birth = new Date(birthdate);
  const today = new Date();

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML = `You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.`;
}
