'use strict';

function trafficLight(color) {
    if (!color) {
        return `Traffic light is undefined\nOUT OF ORDER`;
    }

    switch (color.toLowerCase()) {
        case 'red':
            return `Traffic light is red\nDON'T WALK!`;
        case 'orange':
            return `Traffic light is orange\nATTENTION!`;
        case 'green':
            return `Traffic light is green\nWALK!`;
        default:
            return `Traffic light is ${color}\nINVALID COLOR`;
    }
}

module.exports = {
    trafficLight
};