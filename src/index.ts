import ImageResizer from "./imageresizer.js";

const imageResizer = new ImageResizer("canvas");
const imgInput = document.getElementById("imgInput") as HTMLInputElement;
const widthInput = document.getElementById("x") as HTMLInputElement;
const heightInput = document.getElementById("y") as HTMLInputElement;
const resizeButton = document.getElementById(
  "resizeButton"
) as HTMLButtonElement;
resizeButton.onclick = () => {
  if (imgInput.files && imgInput.files.length > 0) {
    console.log(typeof imgInput.files[0]);
    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);
    imageResizer.resizeImage(imgInput.files[0]);
  } else {
    console.error("Invalid input");
  }
};
