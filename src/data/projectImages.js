import bookImage from "../images/Book.png";
import bookCardImage from "../images/BookCard.png";
import bookiImage from "../images/Booki.png";
import bookiCardImage from "../images/BookiCard.png";
import kasaImage from "../images/Kasa.png";
import kasaCardImage from "../images/KasaCard.png";
import performanceImage from "../images/Performance.png";
import performanceCardImage from "../images/PerformanceCard.png";
import sophieImage from "../images/Sophie.png";
import sophieCardImage from "../images/SophieCard.png";

const projectImages = {
  "/src/images/Book.png": bookImage,
  "/src/images/BookCard.png": bookCardImage,
  "/src/images/Booki.png": bookiImage,
  "/src/images/BookiCard.png": bookiCardImage,
  "/src/images/Kasa.png": kasaImage,
  "/src/images/KasaCard.png": kasaCardImage,
  "/src/images/Performance.png": performanceImage,
  "/src/images/PerformanceCard.png": performanceCardImage,
  "/src/images/Sophie.png": sophieImage,
  "/src/images/SophieCard.png": sophieCardImage,
};

export function resolveProjectImage(imagePath) {
  return projectImages[imagePath] ?? imagePath;
}
