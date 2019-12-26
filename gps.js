function gps(s, x) {
    // your code
    let secondsConversion = s / 3600
    let left = 0;
    let right = 1

    let differenceArr = [];

    while (left < right){
        let difference = x[right] - x[left]
        differenceArr.push(difference)
        left++
        right++

        if (differenceArr.length === x.length - 1){
          break;
        }
    }

    let alteredArr = differenceArr.map(d => d / secondsConversion)
    return Math.max(...alteredArr)

}