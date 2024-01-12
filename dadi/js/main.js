const playButton = document.getElementById("submit-button");
const playerCol = document.getElementById("player-col");
const cpuCol = document.getElementById("cpu-col");

playButton.addEventListener("click", function () {
  const dN = parseInt(document.getElementById("dice-number").value);

  // mydice
  const mydiceArray = [0];

  for (let i = 0; i < dN; i++) {
    const mydice = Math.floor(Math.random() * 6 + 1);
    console.log(mydice);
    mydiceArray.unshift(mydice);
    playerCol.innerHTML += `
    <div class="bg-primary my-1 text-center">${mydice}</div>
    
    `;
  }
  console.log(mydiceArray);

  let mydiceSum = 0;

  for (let i = 0; i < dN; i++) {
    mydiceSum += mydiceArray[i];
  }

  console.log(mydiceSum);

  // cpudice
  const cpudiceArray = [0];
  for (let i = 0; i < dN; i++) {
    const cpudice = Math.floor(Math.random() * 6 + 1);
    console.log(cpudice);
    cpudiceArray.unshift(cpudice);
    cpuCol.innerHTML += `
    <div class="bg-info my-1 text-center">${cpudice}</div>
    
    `;
  }
  console.log(cpudiceArray);

  let cpudiceSum = 0;

  for (let i = 0; i < dN; i++) {
    cpudiceSum += cpudiceArray[i];
  }

  console.log(cpudiceSum);

  let resultPlayer = 0;
  let resultCpu = 0;

  if (mydiceSum > cpudiceSum) {
    resultPlayer = "bg-success";
    resultCpu = "bg-danger";
    console.log("hai vinto");
  } else if (mydiceSum < cpudiceSum) {
    resultPlayer = "bg-danger";
    resultCpu = "bg-success";
    console.log("hai perso");
  } else {
    resultCpu = resultPlayer = "bg-warning";
    console.log("pareggio");
  }

  playerCol.innerHTML += `<div class="${resultPlayer} my-1 text-center">${mydiceSum}</div>`;
  cpuCol.innerHTML += `<div class="${resultCpu} my-1 text-center">${cpudiceSum}</div>`;
});
