"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";




drawBrick();

function drawBrick(){
    context.fillStyle = "red";
    context.strokeStyle = "white"
    for(let j=0; j <= 6; j++){
        for(let i = 0; i <= 6; i++)
        Utils.fillRect(i *105 + 50*(j%2) ,j * 55,100,50);

    }
}