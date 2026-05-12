//1

const filmes = ["johan wick", "interstller", "Magnafsant 7"]

filmes.push("Titanc")

console.log(filmes)
console.log("anatal filmer", filmes.length)

//Del 2
const songs = ["Blinding Lights", "Shape of You", "Someone Like You", "Bohemian Rhapsody", "Rolling in the Deep"]

let deletedSong = songs.pop()

console.log("Borttagen låt: " + deletedSong + ". Listan ser nu ut såhär: ", songs)

//Del 3
const kunder = ['Anna', 'Bertil', 'Cecilia', 'David', 'Elin'];

kunder.unshift('Herman')
console.log(kunder)

console.log(`${kunder.shift()} togs bort, nu ser kön ut såhär ${kunder}`)

//Del 4
const bokhyllaBöcker = ["The Hobbit", "The Lord of the Rings", "Harry Potter", "1984"]

console.log(bokhyllaBöcker)

const utvaldaBöcker = [bokhyllaBöcker.slice(1, 2), bokhyllaBöcker.slice(3, 4)]

console.log(utvaldaBöcker)

//Del 5
const elever = ['Alma', 'Bengt', 'Carla', 'David', 'Emil', 'Freja', 'Gustav', 'Hanna', 'Isak', 'Josefin'];

console.log(elever);

console.log(elever.includes('Alma'))

console.log(elever.indexOf('Alma'))

console.log(elever.join(', '))