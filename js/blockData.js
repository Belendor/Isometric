const blockData = {
    topBorderCoordinates : ["15,0", "16,0", "14,1", "13,1", "12,2", "11,2", "10,3", "9,3", "8,4", "7,4", "6,5", "5,5", "4,6", "3,6", "2,7", "1,7", "0,8", "17,1", "18,1", "19,2", "20,2", "21,3", "22,3", "23,4", "24,4", "25,5", "26,5", "27,6", "28,6", "29,7", "30,7", "31,8" ],
    centerBorderCoordinates : ["31,8", "0,8", "15,16", "16,16", "14,15", "13,15", "12,14", "11,14", "10,13", "9,13", "8,12", "7,12", "6,11", "5,11", "4,10", "3,10", "2,9", "1,9", "17,15", "18,15", "19,14", "20,14", "21,13", "22,13", "23,12", "24,12", "25,11", "26,11", "27,10", "28,10", "29,9", "30,9"],
    bottomBorderCoordinates : ["15,31", "16,31", "14,30", "13,30", "12,29", "11,29", "10,28", "9,28", "8,27", "7,27", "6,26", "5,26", "4,25", "3,25", "2,24", "1,24", "0,23", "17,30", "18,30", "19,29", "20,29", "21,28", "22,28", "23,27", "24,27", "25,26", "26,26", "27,25", "28,25", "29,24", "30,24", "31,23" ],
    sideBorderCoordinates : ["0,9", "0,10", "0,11", "0,12", "0,13", "0,14", "0,15", "0,16", "0,17", "0,18", "0,19", "0,20", "0,21", "0,22", "31,9", "31,10", "31,11", "31,12", "31,13", "31,14", "31,15", "31,16", "31,17", "31,18", "31,19", "31,20", "31,21", "31,22" ],
    topCoordinates : ["15,1", "16,1", "13,2", "14,2", "15,2", "16,2", "17,2", "18,2", "11,3", "12,3", "13,3", "14,3", "15,3", "16,3", "17,3", "18,3", "19,3", "20,3", "9,4", "10,4", "11,4", "12,4", "13,4", "14,4", "15,4", "16,4", "17,4", "18,4", "19,4", "20,4", "21,4", "22,4", "7,5", "8,5", "9,5", "10,5", "11,5", "12,5", "13,5", "14,5", "15,5", "16,5", "17,5", "18,5", "16,5", "17,5", "18,5", "19,5", "20,5", "21,5", "22,5", "23,5", "24,5"],
    leftCoordinates: ["0,9", "15,31"],
    rightCoordinates: ["31,9", "16,31"],
    bottomLeftCoordinates: [],
    bottomRightCoordinates: [],
    borderColor : "white",
    topColor: "#8ADCBF",
    rightColor: "#3A3F5F",
    leftColor: "#469AB8",
    bottomLeftColor: "#353A57",
    bottomRightColor: "#353A57"
};

const filler = (from, to, y, where) =>{
    for(let i = 0; i< to - from;i++ ){
        where.push(`${from+i},${y}`)
    }
}

filler(5, 27, 6, blockData.topCoordinates)
filler(3, 29, 7, blockData.topCoordinates)
filler(1, 31, 8, blockData.topCoordinates)
filler(3, 29, 9, blockData.topCoordinates)
filler(5, 27, 10, blockData.topCoordinates)
filler(5, 27, 10, blockData.topCoordinates)
filler(7, 25, 11, blockData.topCoordinates)
filler(9, 23, 12, blockData.topCoordinates)
filler(11, 21, 13, blockData.topCoordinates)
filler(13, 19, 14, blockData.topCoordinates)
filler(15, 17, 15, blockData.topCoordinates)

filler(0, 3, 10, blockData.leftCoordinates)
filler(0, 5, 11, blockData.leftCoordinates)
filler(0, 7, 12, blockData.leftCoordinates)
filler(0, 9, 13, blockData.leftCoordinates)
filler(0, 11, 14, blockData.leftCoordinates)
filler(0, 13, 15, blockData.leftCoordinates)
filler(0, 15, 16, blockData.leftCoordinates)
filler(0, 16, 17, blockData.leftCoordinates)
filler(0, 16, 18, blockData.leftCoordinates)
filler(0, 16, 19, blockData.leftCoordinates)
filler(0, 16, 20, blockData.leftCoordinates)
filler(0, 16, 21, blockData.leftCoordinates)
filler(0, 16, 22, blockData.leftCoordinates)
filler(0, 16, 23, blockData.leftCoordinates)
filler(1, 16, 24, blockData.leftCoordinates)
filler(3, 16, 25, blockData.leftCoordinates)
filler(5, 16, 26, blockData.leftCoordinates)
filler(7, 16, 27, blockData.leftCoordinates)
filler(9, 16, 28, blockData.leftCoordinates)
filler(11, 16, 29, blockData.leftCoordinates)
filler(13, 16, 30, blockData.leftCoordinates)

filler(29, 32, 10, blockData.rightCoordinates)
filler(27, 32, 11, blockData.rightCoordinates)
filler(25, 32, 12, blockData.rightCoordinates)
filler(23, 32, 13, blockData.rightCoordinates)
filler(21, 32, 14, blockData.rightCoordinates)
filler(19, 32, 15, blockData.rightCoordinates)
filler(17, 32, 16, blockData.rightCoordinates)
filler(16, 32, 17, blockData.rightCoordinates)
filler(16, 32, 18, blockData.rightCoordinates)
filler(16, 32, 19, blockData.rightCoordinates)
filler(16, 32, 20, blockData.rightCoordinates)
filler(16, 32, 21, blockData.rightCoordinates)
filler(16, 32, 22, blockData.rightCoordinates)
filler(16, 32, 23, blockData.rightCoordinates)
filler(16, 31, 24, blockData.rightCoordinates)
filler(16, 29, 25, blockData.rightCoordinates)
filler(16, 27, 26, blockData.rightCoordinates)
filler(16, 25, 27, blockData.rightCoordinates)
filler(16, 23, 28, blockData.rightCoordinates)
filler(16, 21, 29, blockData.rightCoordinates)
filler(16, 19, 30, blockData.rightCoordinates)

const leaningFill = (side, x1, y1, x2, y2, where) => {
    if(side == "left"){
        where.push(`${x1},${y1}`)
        let xCounter = x1
        for(let i = 0; i<(x2-x1)/2;i++){
            where.push(`${xCounter+i+1},${y1+i+1}`)
            if((x2-x1-1)/2 == i){
                return
            }
            where.push(`${xCounter+i+2},${y1+i+1}`)
            xCounter += 1
        }
    }

    if(side == "right"){
        where.push(`${x1},${y1}`)
        let xCounter = x1
        for(let i = 0; i<(x2-x1)/2;i++){
            where.push(`${xCounter+i+1},${y1+i+1}`)
            if((x2-x1-1)/2 == i){
                return
            }
            where.push(`${xCounter+i+2},${y1+i+1}`)
            xCounter += 1
        }
    }
}

leaningFill("left", 0, 23, 15, 31, blockData.bottomLeftCoordinates)
leaningFill("left", 0, 22, 15, 31, blockData.bottomLeftCoordinates)
leaningFill("left", 0, 21, 15, 31, blockData.bottomLeftCoordinates)

leaningFill("right", 0, 21, 15, 31, blockData.bottomLeftCoordinates)

export default blockData