// 1. Fråga användaren om prisbelopp
let värde = prompt("Vänligen skriv in ett pris i valutan dollar ($49.99):");

// 2. Ta bort dollartecknet och konvertera till nummer
let prisString = värde.replace("$", "");
let pris = parseFloat(prisString);

// 3. Räkna fram pris efter 10% rabatt
let rabatt = pris * 0.10;
let rabatteratPris = pris - rabatt;

// 4. Visa det rabatterade priset
console.log(`Ditt nya pris är: $${rabatteratPris.toFixed(2)}`);