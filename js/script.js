console.log('Rozwiązanie według wskazówek z kursu:')

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
    allNames = femaleNames.concat(maleNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
  console.log('Do tablicy dodano imię ' + newName);
  console.log('Teraz tablica wygląda następująco: ' + allNames.join(' | '));
}
else {
  console.log('Imię ' + newName + ' znajduje się już w tablicy.');
}