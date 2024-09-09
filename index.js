// user input
const date = document.getElementById("date");
const uber = document.getElementById("uber");
const deliverro = document.getElementById("deliverro");
const justEat = document.getElementById("justEat");
const pdq = document.getElementById("pdq");
const online1 = document.getElementById("online1");
const online2 = document.getElementById("online2");
const cash = document.getElementById("cash");
const adj = document.getElementById("adj");
const exp = document.getElementById("exp");
const com = document.getElementById("com");
const submit = document.getElementById("submit");
// For show result
const showDate = document.getElementById("showDate");
const showDay = document.getElementById("showDay");
const showUber = document.getElementById("showUber");
const showDeliverro = document.getElementById("showDeliverro");
const showJustEat = document.getElementById("showJustEat");
const showPdq = document.getElementById("showPdq");
const showOnline1 = document.getElementById("showOnline1");
const showOnline2 = document.getElementById("showOnline2");
const showCash = document.getElementById("showCash");
const showAdj = document.getElementById("showAdj");
const showExp = document.getElementById("showExp");
const showCom = document.getElementById("showCom");
const showRemainCash = document.getElementById("showRemainCash");
const showTotal = document.getElementById("showTotal");
const calculated = document.getElementById("calculated");
const bonanzaCacl = document.getElementById("bonanzaCacl");

submit.addEventListener("click", (event) => {
  event.preventDefault();

  bonanzaCacl.style.display = "none";
  calculated.style.display = "block";
  printDate();
  let totalSale = 0;
  showUber.innerHTML = uber.value;
  showJustEat.innerHTML = justEat.value;
  showDeliverro.innerHTML = deliverro.value;
  showPdq.innerHTML = pdq.value;
  showOnline1.innerHTML = online1.value;
  showOnline2.innerHTML = online2.value;
  showCash.innerHTML = cash.value;
  showExp.innerHTML = exp.value;
  showAdj.innerHTML = adj.value;
  showCom.innerHTML = com.value;
  showRemainCash.innerHTML = (
    parseFloat(cash.value) -
    (parseFloat(exp.value) + parseFloat(com.value) + parseFloat(adj.value))
  ).toFixed(2);

  let sale =
    parseFloat(uber.value) +
    parseFloat(justEat.value) +
    parseFloat(deliverro.value) +
    parseFloat(pdq.value) +
    parseFloat(online1.value) +
    parseFloat(online2.value) +
    parseFloat(cash.value);

  totalSale += sale;

  showTotal.innerHTML = totalSale.toFixed(2);
});

function printDate() {
  const dateInput = document.getElementById("dateInput").value;
  if (!dateInput) {
    showDate.innerHTML = "Please select a date!";
    showDay.innerHTML = "No Day";
    return;
  }

  const selectedDate = new Date(dateInput);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[selectedDate.getDay()];
  const formattedDate = selectedDate.toLocaleDateString();
  showDate.innerHTML = formattedDate;
  showDay.innerHTML = dayOfWeek;
}
