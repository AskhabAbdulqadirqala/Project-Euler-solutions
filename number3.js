var srav = function () {
    var sim, x=600851475143, max=0, prostota=true;
    for_1: for (var i = 2; i <= Math.trunc(x/2); i=i+1) {

        if (x%i===0) {
            for (var j = 2; j <= i; j++) {
                if (i%j===0 && i!==j) {
                    prostota=false;
                    continue for_1;
                } else {prostota=true;}
            }
        if (prostota===true){max=i;}
        }
        }
    return max;
 };
