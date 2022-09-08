/*Пятиугольные числа вычисляются по формуле: Pn=n(3n−1)/2. Первые десять пятиугольных чисел:
1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...
Можно убедиться в том, что P4 + P7 = 22 + 70 = 92 = P8. Однако, их разность, 70 − 22 = 48, не является пятиугольным числом.
Найдите пару пятиугольных чисел Pj и Pk, для которых сумма и разность являются пятиугольными числами и значение D = |Pk − Pj| минимально, и дайте значение D в качестве ответа.
*/

var findD = function() {
	var Stop = true,
		numbers = [1, 5],
		i = 2,
		D;
	while (Stop) {
		numbers.push((i * (3 * i - 1)) / 2);
		for (var j = 0; j <= i; j++) {
			for (var k = 0; k <= i; k++) {
				if (numbers[i] === numbers[j] + numbers[k]) {
					for (var q = 0; q <= i; q++) {
						if (numbers[q] === numbers[j] - numbers[k] || numbers[q] === numbers[k] - numbers[j]) {
							D = Math.abs(numbers[j] - numbers[k]);
							Stop = false;
						}
					}
				}
			}
		}
		i++;
	}
	return D;
};
