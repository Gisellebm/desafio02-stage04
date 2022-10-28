function calcAverage(note1, note2) {
  average = (note1 + note2) / 2
  return average
}


const listStudents = [
  {
    name: "Maria",
    note1: 95,
    note2: 85,
  },
  {
    name: "Pedro",
    note1:45,
    note2:60,
  },
  {
    name: "Ana",
    note1: 60,
    note2: 65,
  },
  {
    name: "José",
    note1: 96,
    note2: 80,
  }
]

for(let index = 0; index < listStudents.length; index++) {
  let average = calcAverage(listStudents[index].note1, listStudents[index].note2)

  if (average < 70) {
    alert(`A média do(a) aluno(a) ${listStudents[index].name} é: ${average} \nNão foi dessa vez, ${listStudents[index].name}! Tente novamente!`)
  } else {
    alert(`A média do(a) aluno(a) ${listStudents[index].name} é: ${average} \nParabéns, ${listStudents[index].name}! Você foi aprovado(a) no concurso!`)
  }
}