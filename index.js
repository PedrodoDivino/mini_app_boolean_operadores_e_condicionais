let departureDateEntry = prompt('Digite a data de partida(formadataDD/MM/YYYY)')

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let choseOption = prompt("Escolha como gostaria de exibir o tempo de partida \n 1- Segundos \n2- Minutos \n3- Horas \n 4- Dias")

if (choseOption ==1 ){
    let secondsOfDeparture = math.round(dateDiff / 1000)
    alert("Tempo de vôo" + secondsOfDeparture + "Segundos ")
}