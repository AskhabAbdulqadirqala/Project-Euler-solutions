	var findDs = function() {
		var fraction = '',
			stop = true,
			res = 1,
			j = 1,
			roof = 1000000;
		for (var i = 1; i <= roof; i++) {
			fraction = fraction + String(i);
		}
		while (stop) {
			res = res * Number(fraction[j - 1]);
			j = j * 10;
			if (j > roof) {
				stop = false;
			}
		}
		return res;
	};
