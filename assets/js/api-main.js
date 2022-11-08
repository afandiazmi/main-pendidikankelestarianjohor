const main1 = fetch("https://elestari.pendidikankelestarianjohor.edu.my/api/pemarkahan/main")
  .then((response) => response.json())
  .then(function (data) {
    document.querySelector(".sskSK-Muar").textContent = data["data"].MUAR.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".sskSMK-Muar").textContent = data["data"].MUAR.SEKOLAH_SHOWCASE_KELESTARIAN.Menengah;
    document.querySelector(".stskSK-Muar").textContent = data["data"].MUAR.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".stskSMK-Muar").textContent = data["data"].MUAR.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Menengah;

    document.querySelector(".sskSK-Tangkak").textContent = data["data"].TANGKAK.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".sskSMK-Tangkak").textContent = data["data"].TANGKAK.SEKOLAH_SHOWCASE_KELESTARIAN.Menengah;
    document.querySelector(".stskSK-Tangkak").textContent = data["data"].TANGKAK.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".stskSMK-Tangkak").textContent = data["data"].TANGKAK.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Menengah;

    document.querySelector(".sskSK-KotaTinggi").textContent = data["data"].KOTA_TINGGI.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".sskSMK-KotaTinggi").textContent = data["data"].KOTA_TINGGI.SEKOLAH_SHOWCASE_KELESTARIAN.Menengah;
    document.querySelector(".stskSK-KotaTinggi").textContent = data["data"].KOTA_TINGGI.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".stskSMK-KotaTinggi").textContent = data["data"].KOTA_TINGGI.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Menengah;

    document.querySelector(".sskSK-Segamat").textContent = data["data"].SEGAMAT.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".sskSMK-Segamat").textContent = data["data"].SEGAMAT.SEKOLAH_SHOWCASE_KELESTARIAN.Menengah;
    document.querySelector(".stskSK-Segamat").textContent = data["data"].SEGAMAT.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".stskSMK-Segamat").textContent = data["data"].SEGAMAT.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Menengah;

    document.querySelector(".sskSK-PasirGudang").textContent = data["data"].PASIR_GUDANG.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".sskSMK-PasirGudang").textContent = data["data"].PASIR_GUDANG.SEKOLAH_SHOWCASE_KELESTARIAN.Menengah;
    document.querySelector(".stskSK-PasirGudang").textContent = data["data"].PASIR_GUDANG.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".stskSMK-PasirGudang").textContent = data["data"].PASIR_GUDANG.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Menengah;

    document.querySelector(".sskSK-Kulai").textContent = data["data"].KULAI.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".sskSMK-Kulai").textContent = data["data"].KULAI.SEKOLAH_SHOWCASE_KELESTARIAN.Menengah;
    document.querySelector(".stskSK-Kulai").textContent = data["data"].KULAI.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".stskSMK-Kulai").textContent = data["data"].KULAI.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Menengah;

    document.querySelector(".sskSK-BatuPahat").textContent = data["data"].BATU_PAHAT.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".sskSMK-BatuPahat").textContent = data["data"].BATU_PAHAT.SEKOLAH_SHOWCASE_KELESTARIAN.Menengah;
    document.querySelector(".stskSK-BatuPahat").textContent = data["data"].BATU_PAHAT.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".stskSMK-BatuPahat").textContent = data["data"].BATU_PAHAT.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Menengah;

    document.querySelector(".sskSK-Pontian").textContent = data["data"].PONTIAN.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".sskSMK-Pontian").textContent = data["data"].PONTIAN.SEKOLAH_SHOWCASE_KELESTARIAN.Menengah;
    document.querySelector(".stskSK-Pontian").textContent = data["data"].PONTIAN.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".stskSMK-Pontian").textContent = data["data"].PONTIAN.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Menengah;

    document.querySelector(".sskSK-JohorBahru").textContent = data["data"].JOHOR_BAHRU.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".sskSMK-JohorBahru").textContent = data["data"].JOHOR_BAHRU.SEKOLAH_SHOWCASE_KELESTARIAN.Menengah;
    document.querySelector(".stskSK-JohorBahru").textContent = data["data"].JOHOR_BAHRU.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".stskSMK-JohorBahru").textContent = data["data"].JOHOR_BAHRU.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Menengah;

    document.querySelector(".sskSK-Kluang").textContent = data["data"].KLUANG.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".sskSMK-Kluang").textContent = data["data"].KLUANG.SEKOLAH_SHOWCASE_KELESTARIAN.Menengah;
    document.querySelector(".stskSK-Kluang").textContent = data["data"].KLUANG.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".stskSMK-Kluang").textContent = data["data"].KLUANG.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Menengah;

    document.querySelector(".sskSK-Mersing").textContent = data["data"].MERSING.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".sskSMK-Mersing").textContent = data["data"].MERSING.SEKOLAH_SHOWCASE_KELESTARIAN.Menengah;
    document.querySelector(".stskSK-Mersing").textContent = data["data"].MERSING.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Rendah;
    document.querySelector(".stskSMK-Mersing").textContent = data["data"].MERSING.SEKOLAH_TRANSISI_SHOWCASE_KELESTARIAN.Menengah;
  });

main1;

// document.querySelector(".jumlahPenjimatanRMAir").textContent = Math.round(data["data"].jumlahPenjimatanRM.Air);
// sskSK-Muar
