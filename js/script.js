document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("square-form");
  const sideInput = document.getElementById("side");
  const resultContainer = document.getElementById("result");
  const areaResult = document.getElementById("area-result");
  const perimeterResult = document.getElementById("perimeter-result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const side = parseFloat(sideInput.value);

    //Validasi Input
    if (isNaN(side) || side <= 0) {
      alert("Masukkan angka yang valid untuk panjang sisi!");
      return;
    }

    //Hitung Luas & Keliling
    const area = side * side;
    const perimeter = 4 * side;

    //Tampilkan Hasil
    areaResult.textContent = area;
    perimeterResult.textContent = perimeter;

    //Animasi Tampilkan Hasil
    resultContainer.classList.remove("hidden");
    resultContainer.style.animation = "fadeIn 0.5s ease";
  });
});
