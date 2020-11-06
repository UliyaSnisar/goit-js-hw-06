// reduce, filter, sort
// Получи массив всех умений всех пользователей(поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// Write code under this line
const getSortedUniqueSkills = (array) => array.reduce((acc,{skills}) => acc.concat(skills), []).filter((value, index, array) => array.indexOf(value) === index).sort();

// console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
