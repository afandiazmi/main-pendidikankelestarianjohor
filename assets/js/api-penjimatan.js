const request1 = fetch("https://elestari.pendidikankelestarianjohor.edu.my/api/auditTenaga/main")
  .then((response) => response.json())
  .then(function (data) {
    document.querySelector(".jumlahPenjimatanRMAir").textContent = data["data"].jumlahPenjimatanRM.Air.toFixed(2);
    document.querySelector(".jumlahPenguranganPembebasanCO2Air").textContent = data["data"].jumlahPenguranganPembebasanCO2.Air.toFixed(2);

    document.querySelector(".jumlahPenjimatanRMElektrik").textContent = data["data"].jumlahPenjimatanRM.Elektrik.toFixed(2);
    document.querySelector(".jumlahPenguranganPembebasanCO2Elektrik").textContent =
      data["data"].jumlahPenguranganPembebasanCO2.Elektrik.toFixed(2);

    document.querySelector(".jumlahPenjimatanKeseluruhan").textContent = data["data"].jumlahPenjimatanRMKeseluruhan.toFixed(2);
    document.querySelector(".jumlahPenguranganKarbonKeseluruhan").textContent =
      data["data"].jumlahPenguranganPembebasanCO2Keseluruhan.toFixed(2);

    document.querySelector(".kutipan3R").textContent = data["data"].jumlahKutipanKitarSemula.toFixed(2);
    document.querySelector(".penguranganKarbonKutipan3R").textContent = data["data"].jumlahPenguranganPembebasanCO2.KitarSemula.toFixed(2);
  });

request1;
//

//
//

// document.querySelector(".kutipan3R").textContent = kutipan3R;
// document.querySelector(".penguranganKarbonKutipan3R").textContent = penguranganKarbonKutipan3R;

// document.querySelector(".jumlahPenjimatanKeseluruhan").textContent = jumlahPenjimatanKeseluruhan;
// document.querySelector(".jumlahPenguranganKarbonKeseluruhan").textContent = jumlahPenguranganKarbonKeseluruhan;
