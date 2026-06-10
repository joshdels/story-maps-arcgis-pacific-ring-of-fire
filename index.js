const images = [
  "https://images.gmanews.tv/webpics/2026/06/Sarangani_earthquake_2026_06_10_05_16_39.jpg",
  "https://www.stuff.co.nz/media/images/9Tzi8ywRz924XE3uHaD6DZ3Ef+IdbOiYlvIROR5vlqUeRrexTocZGobKRJ9od%2Fgnk3B%2FCeKTmTAsIjj6Q0YaYVLLquPCEw6padklLo9jGyjdmWs7YEtuPgT6t6o5DdieRH41ryTvRGccXxeER%2FuJHdl9C89kOro2wnsdGzBX90ykuYYsqD+L3aWz1y2ERlu0T4HXxOIrAc3GdofemLYij7XgG3Lh2bxDeUHieLlISLg=",
  "https://image.cnbcfm.com/api/v1/image/108317982-17809126402026-06-08t051403z_433354413_rc21plapom1f_rtrmadp_0_philippines-quake.jpeg?v=1780912741",
  "https://newsinfo.inquirer.net/files/2026/06/One-of-the-buildings-at-the-Notre-Dame-of-Dadiangas-University-in-General-Santos-City-collapsed-after-a-magnitude-7.0-earthquake-struck-Mindanao-on-Monday-June-8-2026.png",
  "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2026/06/1024/512/philippines-earthquake-aftermath-1.jpeg?ve=1&tl=1",
];

let currentIndex = 0;

const imageElement = document.getElementById("carousel-image");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function updateImage() {
  imageElement.src = images[currentIndex];
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});
