export default class ImageResizer {
  private outputElementId: string;
  private imgOutput: HTMLImageElement;
  constructor(outputElementId: string) {
    this.outputElementId = outputElementId;
    this.imgOutput = document.createElement("img");
    const outputElement = document.getElementById(this.outputElementId)!;
    if (!outputElement) {
      console.error("Invalid output element");
      return;
    } else {
      outputElement.appendChild(this.imgOutput);
    }
  }
  resizeImage(file: any) {
    const ratio = file.size;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target || typeof e.target.result !== "string") {
        console.error("Invalid file reader result");
        return;
      }
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const width = img.width;
        const height = img.height;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          console.error("Invalid canvas context");
          return;
        }
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        const dataURL = canvas.toDataURL("image/webp", 0.3);
        this.imgOutput.src = dataURL;
      };
    };
    reader.readAsDataURL(file);
  }
}
