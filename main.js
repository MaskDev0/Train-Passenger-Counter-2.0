let countEl = document.getElementById("count-el");
let incrementEl = document.getElementById("increment-btn")
let saveEl = document.getElementById("save-btn")
let entryEl = document.getElementById("entry-el")
let count = 0;

incrementEl.addEventListener("click", function () {
  count += 1
  countEl.textContent = count;
})
saveEl.addEventListener("click", function () {
  message = count + " - ";
  entryEl.textContent += message; 
  count = 0
  countEl.textContent = count;
})



