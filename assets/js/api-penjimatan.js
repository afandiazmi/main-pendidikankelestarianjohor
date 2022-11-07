// let jumlahPenjimatanRMAir = 0;
// let jumlahPenguranganPembebasanCO2Air = 0;
// let jumlahPenjimatanRMElektrik = 0;
// let jumlahPenguranganPembebasanCO2Elektrik = 0;
// let kutipan3R = 0;
// let penguranganKarbonKutipan3R = 0;
// let jumlahPenjimatanKeseluruhan = 0;
// let jumlahPenguranganKarbonKeseluruhan

const request1 = fetch("https://elestari.pendidikankelestarianjohor.edu.my/api/auditTenaga/main")
  .then((response) => response.json())
  .then(function (data) {
    document.querySelector(".jumlahPenjimatanRMAir").textContent = Math.round(data["data"].jumlahPenjimatanRM.Air);
  });

const request2 = fetch("https://elestari.pendidikankelestarianjohor.edu.my/api/auditTenaga/main")
  .then((response) => response.json())
  .then(function (data) {
    document.querySelector(".jumlahPenguranganPembebasanCO2Air").textContent = Math.round(
      data["data"].jumlahPenguranganPembebasanCO2.Air
    ).toFixed(2);
  });

const request3 = fetch("https://elestari.pendidikankelestarianjohor.edu.my/api/auditTenaga/main")
  .then((response) => response.json())
  .then(function (data) {
    document.querySelector(".jumlahPenjimatanRMElektrik").textContent = Math.round(
      data["data"].jumlahPenjimatanRM.Elektrik
    ).toFixed(2);
  });
const request4 = fetch("https://elestari.pendidikankelestarianjohor.edu.my/api/auditTenaga/main")
  .then((response) => response.json())
  .then(function (data) {
    document.querySelector(".jumlahPenguranganPembebasanCO2Elektrik").textContent = Math.round(
      data["data"].jumlahPenguranganPembebasanCO2.Elektrik
    ).toFixed(2);
  });

const request5 = fetch("https://elestari.pendidikankelestarianjohor.edu.my/api/auditTenaga/main")
  .then((response) => response.json())
  .then(function (data) {
    document.querySelector(".jumlahPenjimatanKeseluruhan").textContent = Math.round(
      data["data"].jumlahPenjimatanRMKeseluruhan
    ).toFixed(2);
  });

const request6 = fetch("https://elestari.pendidikankelestarianjohor.edu.my/api/auditTenaga/main")
  .then((response) => response.json())
  .then(function (data) {
    document.querySelector(".jumlahPenguranganKarbonKeseluruhan").textContent = Math.round(
      data["data"].jumlahPenguranganPembebasanCO2Keseluruhan
    ).toFixed(2);
  });

request1, request2, request3, request4, request5, request6;

//

//
//

// document.querySelector(".kutipan3R").textContent = kutipan3R;
// document.querySelector(".penguranganKarbonKutipan3R").textContent = penguranganKarbonKutipan3R;

// document.querySelector(".jumlahPenjimatanKeseluruhan").textContent = jumlahPenjimatanKeseluruhan;
// document.querySelector(".jumlahPenguranganKarbonKeseluruhan").textContent = jumlahPenguranganKarbonKeseluruhan;
