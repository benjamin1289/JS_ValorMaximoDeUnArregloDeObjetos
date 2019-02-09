Array.prototype.maxValue = function(key = null){
    if(this.length == 0)
        return 0;

    if(!!!key || isNaN( parseFloat( this[0][key] ) ) )
        return NaN;

    let max = Math.max.apply(Math, this.map(function(obj) { return obj[key]; }));
    return max;
}


let array = [
				{id:1, nombre:'Roman', 		edad:12},
				{id:2, nombre:'Rosalia', 	edad:13},
				{id:3, nombre:'Shadea', 	edad:18},
				{id:4, nombre:'Romario', 	edad:5 },
				{id:4, nombre:'Alejandro', 	edad:21}
			];

let maximo = array.maxValue('edad');

console.log("Valor Maximo: ", maximo)
