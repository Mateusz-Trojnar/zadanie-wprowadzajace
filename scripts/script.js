const fuel = 7.76
const category = {
    basic: 1,
    standard: 1.3,
    medium: 1.6,
    premium: 2
}
const priceForOneNight = 120
const avgcombustion = 8.7
const milliseconds = 86400000
const currentYear = new Date().getFullYear()

quantity = {
    Opel: 6,
    Seat: 4,
    Hyundai: 2,
    Volvo: 1
}

const vatValue = 1.23
const percentageFromQuantity = 1.15
const percentageFromDrivingLicense = 1.2

document.querySelector("#submit").addEventListener("click", () => {

    let price = priceForOneNight
    const categoryField = parseInt(document.querySelector("#category").value)
    const drivinglicense = document.querySelector("#drivinglicense").value
    const newDrivingLicense = currentYear - drivinglicense


    if (newDrivingLicense < 5) {

        if (newDrivingLicense < 3 && categoryField == 4) {
            document.querySelector("#result").innerHTML = `Nie możesz wypożyczyć samochodu wersji premium`
        } else {


            const kilometers = document.querySelector("#kilometers").value
            const fuelCost = ((kilometers * avgcombustion) / fuel)
            const receptionCar = document.querySelector("#reception").value
            const returnCar = document.querySelector("#return").value
            const rentFrom = new Date(receptionCar).getTime()
            const rentTo = new Date(returnCar).getTime()
            const result = (rentTo / milliseconds) - (rentFrom / milliseconds)

            const car = document.querySelector("#car").value

            switch (categoryField) {
                case 1:
                    price *= category.basic
                    break

                case 2:
                    price *= category.standard
                    break

                case 3:
                    price *= category.medium
                    break

                case 4:
                    price *= category.premium
                    break

                default:
                    price *= 1
            }


            if (car == 1 && quantity.Opel > 3) {
                const nettoPrice = (result * priceForOneNight + price + fuelCost) * percentageFromDrivingLicense
                const bruttoPrice = nettoPrice * vatValue
                document.querySelector("#result").innerHTML = `Cena netto: ${nettoPrice.toFixed(2)} zł <br>Cena brutto: ${bruttoPrice.toFixed(2)} zł<br> W tym: koszty paliwa: ${fuelCost.toFixed(2)}zł, koszt wypożyczenia na ${result} dni: ${(nettoPrice - fuelCost).toFixed(2)}zł`
            } else if (car == 2 && quantity.Seat > 3) {
                const nettoPrice = (result * priceForOneNight + price + fuelCost) * percentageFromDrivingLicense
                const bruttoPrice = nettoPrice * vatValue
                document.querySelector("#result").innerHTML = `Cena netto: ${nettoPrice.toFixed(2)} zł <br>Cena brutto: ${bruttoPrice.toFixed(2)} zł<br> W tym: koszty paliwa: ${fuelCost.toFixed(2)}zł, koszt wypożyczenia na ${result} dni: ${(nettoPrice - fuelCost).toFixed(2)}zł`
            } else if (car == 3 && quantity.Hyundai < 3) {
                const nettoPrice = ((result * priceForOneNight + price + fuelCost) * percentageFromDrivingLicense) * percentageFromQuantity
                const bruttoPrice = nettoPrice * vatValue
                document.querySelector("#result").innerHTML = `Cena netto: ${nettoPrice.toFixed(2)} zł <br>Cena brutto: ${bruttoPrice.toFixed(2)} zł<br> W tym: koszty paliwa: ${fuelCost.toFixed(2)}zł, koszt wypożyczenia na ${result} dni: ${(nettoPrice - fuelCost).toFixed(2)}zł`
            } else if (car == 4 && quantity.Volvo < 3) {
                const nettoPrice = ((result * priceForOneNight + price + fuelCost) * percentageFromDrivingLicense) * percentageFromQuantity
                const bruttoPrice = nettoPrice * vatValue
                document.querySelector("#result").innerHTML = `Cena netto: ${nettoPrice.toFixed(2)} zł <br>Cena brutto: ${bruttoPrice.toFixed(2)} zł<br> W tym: koszty paliwa: ${fuelCost.toFixed(2)}zł, koszt wypożyczenia na ${result} dni: ${(nettoPrice - fuelCost).toFixed(2)}zł`
            }

        }
    } else {


        if (newDrivingLicense < 3 && categoryField == 4) {
            document.querySelector("#result").innerHTML = `Nie możesz wypożyczyć samochodu wersji premium`
        } else {

            const kilometers = document.querySelector("#kilometers").value
            const fuelCost = ((kilometers * avgcombustion) / fuel)
            const receptionCar = document.querySelector("#reception").value
            const returnCar = document.querySelector("#return").value
            const rentFrom = new Date(receptionCar).getTime()
            const rentTo = new Date(returnCar).getTime()
            const result = (rentTo / milliseconds) - (rentFrom / milliseconds)


            switch (categoryField) {
                case 1:
                    price *= category.basic
                    break

                case 2:
                    price *= category.standard
                    break

                case 3:
                    price *= category.medium
                    break

                case 4:
                    price *= category.premium
                    break

                default:
                    price *= 1
            }

            if (car == 1 && quantity.Opel > 3) {
                const nettoPrice = result * priceForOneNight + price + fuelCost
                const bruttoPrice = nettoPrice * vatValue
                document.querySelector("#result").innerHTML = `Cena netto: ${nettoPrice.toFixed(2)} zł <br>Cena brutto: ${bruttoPrice.toFixed(2)} zł<br> W tym: koszty paliwa: ${fuelCost.toFixed(2)}zł, koszt wypożyczenia na ${result} dni: ${(nettoPrice - fuelCost).toFixed(2)}zł`
            } else if (car == 2 && quantity.Seat > 3) {
                const nettoPrice = result * priceForOneNight + price + fuelCost
                const bruttoPrice = nettoPrice * vatValue
                document.querySelector("#result").innerHTML = `Cena netto: ${nettoPrice.toFixed(2)} zł <br>Cena brutto: ${bruttoPrice.toFixed(2)} zł<br> W tym: koszty paliwa: ${fuelCost.toFixed(2)}zł, koszt wypożyczenia na ${result} dni: ${(nettoPrice - fuelCost).toFixed(2)}zł`
            } else if (car == 3 && quantity.Hyundai < 3) {
                const nettoPrice = (result * priceForOneNight + price + fuelCost) * percentageFromQuantity
                const bruttoPrice = nettoPrice * vatValue
                document.querySelector("#result").innerHTML = `Cena netto: ${nettoPrice.toFixed(2)} zł <br>Cena brutto: ${bruttoPrice.toFixed(2)} zł<br> W tym: koszty paliwa: ${fuelCost.toFixed(2)}zł, koszt wypożyczenia na ${result} dni: ${(nettoPrice - fuelCost).toFixed(2)}zł`
            } else if (car == 4 && quantity.Volvo < 3) {
                const nettoPrice = (result * priceForOneNight + price + fuelCost) * percentageFromQuantity
                const bruttoPrice = nettoPrice * vatValue
                document.querySelector("#result").innerHTML = `Cena netto: ${nettoPrice.toFixed(2)} zł <br>Cena brutto: ${bruttoPrice.toFixed(2)} zł<br> W tym: koszty paliwa: ${fuelCost.toFixed(2)}zł, koszt wypożyczenia na ${result} dni: ${(nettoPrice - fuelCost).toFixed(2)}zł`
            }

        }
    }
})