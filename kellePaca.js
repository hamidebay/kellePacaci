
//ciftlikteki hayvanlar
let hayvanlar = ["inek", "tavuk", "koyun", "tavuk", "domuz", "tavuk", "koyun", "tavuk"];
let toplamBacak = 0;

//hayvanlarin cinsine göre bacak sayisini toplayan döngü
for (let i = 0; i < hayvanlar.length; i++) {
  let hayvanCinsi = hayvanlar[i];
  if (
    hayvanCinsi == "inek" ||
    hayvanCinsi == "koyun" ||
    hayvanCinsi == "domuz"
  ) {
    toplamBacak += 4;
  } else {
    toplamBacak += 2;
  }
 }
console.log(toplamBacak);
alert(toplamBacak);
