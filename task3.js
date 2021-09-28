let First = Number(prompt('Первое число: '));
let Second = Number(prompt('Второе число: '));

if (First > Second) {
    alert(`Число ${First} - больше числа ${Second}`);
} else if (First < Second) {
    alert(`Число ${Second} - больше числа ${First}`);
} else{
    alert('Числа равны.')
}