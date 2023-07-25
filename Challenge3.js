const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

//const owed = parseInt('R' + leoBalance + sarahBalance)
//const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
//const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
//const total = "Total amount owed: "
//const result = leo + sarah + divider + divider + total + owed + divider

//console.log(result)

const owed = parseFloat(leoBalance* + sarahBalance)
const leo = `${leoName} ${leoSurname} (Owed:R ${leoBalance})\n`
const sarah = `${sarahName} ${sarahSurname} \(Owed:R${sarahBalance})\n\n`
const total = "\nTotal amount owed:\n" 
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result)