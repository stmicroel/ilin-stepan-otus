function sum(initialValue) {
    let current = initialValue;

    let calc = (value) => {
        if (value === undefined) {
            return current;
        }

        current += value;

        return calc;
    };

    calc.valueOf = () => current;
    calc.toString = () => current;

    return calc;
}

console.log(sum(1)(2)(3)());