var findDivisible = function() {
        var min = 0, Stop1 = true, k=1;
        while(Stop1) {
            var i=1, Stop2=true;
            while (Stop2) {
                if (k%i===0) {i++;}
                else {Stop2=false;}

                if (i===21) {min=k; Stop1=false;}
            }
            k++;
        }
        return min;
    };
