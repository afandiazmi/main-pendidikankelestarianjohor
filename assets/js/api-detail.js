// document.querySelector(".jumlahPenjimatanRMAir").textContent = Math.round(data["data"].jumlahPenjimatanRM.Air);

const MUAR = document.querySelector(".MUARSR");
const TANGKAK = document.querySelector(".TANGKAK");
const KOTA_TINGGI = document.querySelector(".KOTA_TINGGI");
const SEGAMAT = document.querySelector(".SEGAMAT");
const PASIR_GUDANG = document.querySelector(".PASIR_GUDANG");
const KULAI = document.querySelector(".KULAI");
const BATU_PAHAT = document.querySelector(".BATU_PAHAT");
const PONTIAN = document.querySelector(".PONTIAN");
const JOHOR_BAHRU = document.querySelector(".JOHOR_BAHRU");
const KLUANG = document.querySelector(".KLUANG");
const MERSING = document.querySelector(".MERSING");

const detail1 = fetch("https://elestari.pendidikankelestarianjohor.edu.my/api/pemarkahan/detail")
  .then((response) => response.json())
  .then(function (data) {
    if (data.data.MUAR.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah[0]) {
      const htmlMuarsr1 = `<section class="shop-page padding-tb">
    <div class="container">
    <div class="row">
      <div class="col-lg-9 col-12 sticky-widget">
        <div class="shop-product-wrap grid row">
          <div class="col-lg-4 col-md-6 col-12">
         
            <div class="product-item">
              <div class="product-thumb">
                <img src="${data.data.MUAR.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah[0].logoURL}" alt="logoSekolah" />
              </div>
              <div class="product-content">
                <h6><a>"${data.data.MUAR.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah[0].nama}"</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>`;
      MUAR.insertAdjacentHTML("beforeend", htmlMuarsr1);
    } else if (data.data.MUAR.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah[1]) {
      const htmlMuarsr2 = `<section class="shop-page padding-tb">
    <div class="container">
    <div class="row">
      <div class="col-lg-9 col-12 sticky-widget">
        <div class="shop-product-wrap grid row">
          <div class="col-lg-4 col-md-6 col-12">
         
            <div class="product-item">
              <div class="product-thumb">
                <img src="${data.data.MUAR.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah[1].logoURL}" alt="logoSekolah" />
              </div>
              <div class="product-content">
                <h6><a>"${data.data.MUAR.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah[1].nama}"</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>`;
      MUAR.insertAdjacentHTML("beforeend", htmlMuarsr2);
    } else if (data.data.MUAR.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah[2]) {
      const htmlMuarsr3 = `<section class="shop-page padding-tb">
    <div class="container">
    <div class="row">
      <div class="col-lg-9 col-12 sticky-widget">
        <div class="shop-product-wrap grid row">
          <div class="col-lg-4 col-md-6 col-12">
         
            <div class="product-item">
              <div class="product-thumb">
                <img src="${data.data.MUAR.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah[2].logoURL}" alt="logoSekolah" />
              </div>
              <div class="product-content">
                <h6><a>"${data.data.MUAR.SEKOLAH_SHOWCASE_KELESTARIAN.Rendah[2].nama}"</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>`;
      MUAR.insertAdjacentHTML("beforeend", htmlMuarsr3);
    }
  });

detail1;
