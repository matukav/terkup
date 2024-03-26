const radiusI = document.querySelector("#radius")
const heightI = document.querySelector("#height")
const volumeI = document.querySelector("#volume")
const calcButton = document.querySelector("#calcButton")

calcButton.addEventListener("click", () => {
    startCalc()
})

function startCalc(){
    const radius = Number(radiusI.value)
    const height = Number(heightI.value)
    const volume = calcVolume(radius, height)
    volumeI.value = volume
}

function calcVolume(radius, height){
    return 1.0/3.0 * Math.pow(radius, 2) * Math.PI * height
}