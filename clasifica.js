const frutas = [
  'Manzana',
  'Banana',
  'Manzana',
  'Naranja',
  'Fresa',
  'Banana',
  'Uva',
  'Manzana',
  'Fresa',
  'Pera',
  'Banana',
  'Uva',
  'Mango',
  'Manzana'
];

const conteo = frutas.reduce((acc, fruta) => {
  acc[fruta] = (acc[fruta] || 0) + 1;
  return acc;
}, {});

for (const fruta in conteo) {
  console.log(fruta, '= ', conteo[fruta]);
}