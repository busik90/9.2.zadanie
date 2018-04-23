console.log('Rozwiązanie według wskazówek z kursu:');

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

console.log();
console.log('-----------------------------------------------------');
console.log();
console.log('Moje rozwiązanie:');

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
    maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
    allNames = femaleNames.concat(maleNames);

function addName(newName) {
  if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
    console.log('Do tablicy dodano imię ' + newName);
    console.log('Teraz tablica wygląda następująco: ' + allNames.join(' | '));
  }
  else {
    console.log('Imię ' + newName + ' znajduje się już w tablicy.');
  }
}

addName('Marian');
addName('Asia');
addName('Paweł');
addName('Marian');