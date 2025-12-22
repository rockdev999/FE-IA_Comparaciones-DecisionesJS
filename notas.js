let nota = [90, 45, 60, 75, 0];

for (i=0; i<=4; i++) {
    console.log("nota:", nota[i]);
    if (nota >= 90) {
        console.log("Excelente")
    } else if (nota >= 75 && nota <= 89) {
        console.log("Bien")
    } else if (nota >= 60 && nota <= 74) {
        console.log("Suficiente")
    } else if (nota < 60) {
        console.log("Reprobado")
    }
}