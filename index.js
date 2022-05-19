let departureDateEntry = prompt('Digite a data de partida(formadataDD/MM/YYYY)')

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate