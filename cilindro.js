var circulo =require('./circulo.js');
var PI = Math.PI;
exports.volume=function(h){

       return  circulo.area(2) * h;
        
}

exports.areaExt=function(r,h){
    return (2*circulo.area(2)) + 2*PI * r *h;
}

