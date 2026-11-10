"use strict";

const slider = document.getElementById("headSlider");
const head = document.getElementById("head");
const sizeValue = document.getElementById("sizeValue");
const startButton = document.getElementById("startButton");
const status = document.getElementById("status");

// Slider yalnızca bu sayfadaki demo karakterini değiştirir.
slider.addEventListener("input", function () {
  const size = Number(this.value);
  head.style.transform = `scale(${size / 100})`;
  sizeValue.textContent = `${size}%`;
});

// Android'de Standoff 2'yi açmayı dener.
// WebView/uygulama kapsayıcısı intent bağlantılarını desteklemelidir.
startButton.addEventListener("click", function () {
  status.textContent = "● STANDOFF 2 AÇILIŞI DENENİYOR...";
  const intent = "intent:#Intent;" +
    "action=android.intent.action.MAIN;" +
    "category=android.intent.category.LAUNCHER;" +
    "package=com.axlebolt.standoff2;" +
    "end";
  window.location.href = intent;
  setTimeout(() => {
    status.textContent = "● AÇILIŞ İSTEĞİ GÖNDERİLDİ";
  }, 1800);
});

window.addEventListener("load", () => {
  status.textContent = "● SYSTEM READY";
});
