    var findPollindrom = function() {
        var max = 0, maxSum=0,
            mbPol;

        var isItPol = function (array) {
            var isIt = true;
            for (var i = 0; i <= array.length; i++) {
                if (array[i] !== array[array.length-i-1]) {
                    isIt = false;
                }
            }
            return isIt;
        };

        for (var i = 1; i < 1000; i++) {
            for (var j = 1; j < 1000; j++) {
                mbPol = String(i * j);
                if (isItPol(mbPol) && i+j>=maxSum) {
                    max = i * j; maxSum=i+j;
                }
            }
        }
        return max;
    };
