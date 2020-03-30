var counter = 0

const rain = () => Math.random() < 0.25

do {
    counter += 1
} while (!rain())

if (counter != 1) {
    console.log(`have been raining ${counter} times `)
} else {
    console.log(`have been raining ${counter} time `)
}
