const detail1 = fetch("https://elestari.pendidikankelestarianjohor.edu.my/api/pemarkahan/detail")
  .then((response) => response.json())
  .then(function (data) {
    // console.log("DETAIL");
    // console.log(data["data"]);
  });
detail1;

// document.querySelector(".jumlahPenjimatanRMAir").textContent = Math.round(data["data"].jumlahPenjimatanRM.Air);
