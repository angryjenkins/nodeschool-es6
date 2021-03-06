const PI = 3.141592;

let _sqrt = function(s, x, last){
    return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
};

function sqrt(s){
    return _sqrt(s, s/2.0, 0.0);
};

function square(x){
    return x * x;
};

export default {
	PI: PI,
	// _sqrt: sqrt,
    sqrt: sqrt,
    square: square
}



// export const PI = 3.141592;

// var _sqrt = function(s, x, last){
//     return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
// };

// export function sqrt(s){
//     return _sqrt(s, s/2.0, 0.0);
// };

// export function square(x){
//     return x * x;
// };


