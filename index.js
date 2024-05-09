let birthYear = prompt("Який у вас рік народження?");
let city = prompt("В якому місті ви живете?");
let favoriteSport = prompt("Який у вас улюблений вид спорту?");

if (birthYear && city && favoriteSport) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  let userDate = "Твій вік: " + age + "\n";

  if (city === "Київ") {
    userDate += "Ти живеш у столиці України.\n";
  } else if (city === "Вашингтон") {
    userDate += "Ти живеш у столиці США.\n";
  } else if (city === "Лондон") {
    userDate += "Ти живеш у столиці Великої Британії.\n";
  } else {
    userDate += "Ти живеш у місті" + " " + city + ".\n";
  }

  switch (favoriteSport) {
    case "футбол":
      userDate += "Круто! Хочеш стати як Пеле?";
      break;
    case "баскетбол":
      userDate += "Круто! Хочеш стати як Майкл Джордан?";
      break;
    case "теніс":
      userDate += "Круто! Хочеш стати як Роджер Федерер?";
      break;
    default:
      userDate += "Твій улюблений спорт - " + favoriteSport + ".";
  }

  alert(userDate);
} else {
  let missingInputs = [];
  if (!birthYear) {
    missingInputs = ["рік народження"];
  }
  if (!city) {
    missingInputs = ["місто"];
  }
  if (!favoriteSport) {
    missingInputs = ["вид спорту"];
  }

  alert("Ви не ввели " + missingInputs);
}
