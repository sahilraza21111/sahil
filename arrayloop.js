let num = prompt("Enter a number");
if (num === null || num.trim() === ""){
    num = 5;
} else {
    num = parseInt(num);
}
for (let i = 1; i <=10; i++){
    console.log(num, "x", i, "=", i*num);
}