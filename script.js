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

for(let list of listStudents) {
  let average = calcAverage(list.note1, list.note2)

  if (average < 70) {
    alert(`A média do(a) aluno(a) ${list.name} é: ${average} \nNão foi dessa vez, ${list.name}! Tente novamente!`)
  } else {
    alert(`A média do(a) aluno(a) ${list.name} é: ${average} \nParabéns, ${list.name}! Você foi aprovado(a) no concurso!`)
  }
}