import blockData from "./blockData.js"

const canvas = document.querySelector(".canvas");
const canvas1 = document.querySelector(".canvas.second");
const canvas2 = document.querySelector(".canvas.third");

let canvasHTML = "";

class Canvas {
  constructor(x, y, pixelSize) {
    this.buildCanvas(x, y);
  }

  buildCanvas(x, y) {
    let boardPixels = "";

    for (let i = 0; i < y; i++) {
      let rowPixels = "";

      for (let j = 0; j < x; j++) {
        rowPixels += `<div data-xy="${j},${i}" class="pixel"></div>`;

      }

      boardPixels += `<div class="row">${rowPixels}</div>`;
    }

    canvasHTML = boardPixels;
  }
}

new Canvas(32, 32, 66);

canvas.innerHTML = canvasHTML;
canvas1.innerHTML = canvasHTML;
canvas2.innerHTML = canvasHTML;


class Block{
    constructor(canvas, number){
        this.number = number
        this.canvas = canvas
        this.borderColor = blockData.borderColor
        this.topColor = blockData.topColor
        this.leftColor = blockData.leftColor
        this.rightColor = blockData.rightColor
        this.borderColor = blockData.borderColor
        this.bottomLeftColor = blockData.bottomLeftColor
        this.backgroundColor = 'grey'
        this.drawBlock()
        this.moveBlock()
    }
    drawBlock(){
        this.drawTop()
        this.drawLeft()
        this.drawRight()
        this.drawBorder()
        this.drawShades()
    }
    drawTop(){
        for(let i =0; i<blockData.topBorderCoordinates.length;i++){
            const chosenPixel = this.canvas.querySelector(`[data-xy='${blockData.topBorderCoordinates[i]}']`)
            chosenPixel.style.backgroundColor = this.topColor
        }


        for(let i =0; i<blockData.topCoordinates.length;i++){
            const chosenPixel = this.canvas.querySelector(`[data-xy='${blockData.topCoordinates[i]}']`)
            chosenPixel.style.backgroundColor = this.topColor
        }
    }
    drawLeft(){
        for(let i =0; i<blockData.leftCoordinates.length;i++){
            const chosenPixel = this.canvas.querySelector(`[data-xy='${blockData.leftCoordinates[i]}']`)
            chosenPixel.style.backgroundColor = this.leftColor
        }
    }
    drawRight(){
        for(let i =0; i<blockData.rightCoordinates.length;i++){
            const chosenPixel = this.canvas.querySelector(`[data-xy='${blockData.rightCoordinates[i]}']`)
            chosenPixel.style.backgroundColor = this.rightColor
        }
    }
    drawBorder(){

        for(let i =0; i<blockData.centerBorderCoordinates.length;i++){
            const chosenPixel = this.canvas.querySelector(`[data-xy='${blockData.centerBorderCoordinates[i]}']`)
            chosenPixel.style.backgroundColor = this.borderColor
        }
    }
    drawShades(){
        for(let i =0; i<blockData. bottomLeftCoordinates.length;i++){
            const chosenPixel = this.canvas.querySelector(`[data-xy='${blockData. bottomLeftCoordinates[i]}']`)
            chosenPixel.style.backgroundColor = this.bottomLeftColor
        }
        // for(let i =0; i<blockData. bottomRightCoordinates.length;i++){
        //     const chosenPixel = canvas.querySelector(`[data-xy='${blockData. bottomRightCoordinates[i]}']`)
        //     chosenPixel.style.backgroundColor = this.bottomLeftColor
        // }
    }
    moveBlock(){
        if(this.number == 1){
            this.canvas.style.marginTop = "90px"
            this.canvas.style.marginLeft = "-160px"
        }
        if(this.number == 2){
            this.canvas.style.marginTop = "180px"
            this.canvas.style.marginLeft = "-160px"
        }
    }
}

new Block(canvas, 0);
new Block(canvas1, 1);
new Block(canvas2, 2);
