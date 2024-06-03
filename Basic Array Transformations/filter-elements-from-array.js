/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      output.push(arr[i]);
    }
  }
  return output;
};

//arr[i], arr dizisinin i indeksindeki elemanına erişir.
//fn ise bir fonksiyondur ve bir argüman alır (bu durumda arr[i]), ve bir değer döndürür.
//fn(arr[i]) ifadesi, fn fonksiyonunu arr[i] elemanı ile çağırır.
//Virgül operatörü , soldan sağa doğru iki operandı da değerlendirir ve ikinci operandın değerini döndürür.
//if(fn(arr[i]), i) ifadesinde, önce fn(arr[i]) değerlendirilir, ancak sonucu göz ardı edilir. Sonra i değerlendirilir ve ifadenin tamamının sonucu olarak kullanılır.
