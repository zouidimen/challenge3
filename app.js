// question1: test
const dophinScore1= 96 ;
const dophinScore2 = 108 ;
const dophinScore3 = 89 ;

const koalaScore1 = 88 ;
const koalaScore2 = 91 ;
const koalaScore3 = 110 ;

const dolphinsAvg =(dophinScore1+dophinScore2+dophinScore3)/3;
console.log("dophin average:",dolphinsAvg);

const koalasAvg =(koalaScore1+koalaScore2+koalaScore3)/3;
console.log("koala average :", koalasAvg);

// question2

if (dolphinsAvg > koalasAvg) {
  console.log("Dauphins gagnent")
} else if (koalasAvg > dolphinsAvg) {
  console.log(" Koalas gagnent") 
} else {
    console.log(" Match nul") 

}
// 3

const dolphinBonusScore1 = 97;
const dolphinBonusScore2 = 112;
const dolphinBonusScore3 = 101;
const dolphinsBonusAvg = (dolphinBonusScore1 + dolphinBonusScore2 + dolphinBonusScore3) / 3
console.log("dophin bonus1 average:", dolphinsBonusAvg)

const koalasBonusScore1 = 109;
const koalasBonusScore2 = 95;
const koalasBonusScore3 = 123;
const koalasBonusAvg = (koalasBonusScore1 + koalasBonusScore2 + koalasBonusScore3) / 3
console.log("koalas bonus1 average:",koalasBonusAvg)

// Bonus 1 : Min 100 points pour gagner

if (dolphinsBonusAvg > koalasBonusAvg && dolphinsBonusAvg >= 100) {
  console.log("Dauphins gagnent")
} else if (koalasBonusAvg >dolphinsBonusAvg && koalasBonusAvg >= 100) {
   console.log(" Koalas gagnent")
} else {
console.log(" Match nul")
}

// bonus2:

const dolphinBonus2Score1 = 97;
const dolphinBonus2Score2 = 112;
const dolphinBonus2Score3 = 101;
const dolphinsBonus2Avg = (dolphinBonus2Score1 + dolphinBonus2Score2 +dolphinBonus2Score3) / 3
console.log("dophin bonus2 average:",dolphinsBonus2Avg)

const koalasBonus2Score1 = 109;
const koalasBonus2Score2 = 95;
const koalasBonus2Score3 = 106;
const koalasBonus2Avg= (koalasBonus2Score1 + koalasBonus2Score2 +koalasBonus2Score3) / 3
console.log("koala bonus2 average:", koalasBonus2Avg)

if (dolphinsBonus2Avg > koalasBonus2Avg && dolphinsBonus2Avg >= 100) {
  console.log("Dauphins gagnent")
} else if (koalasBonus2Avg > dolphinsBonus2Avg && koalasBonus2Avg >= 100) {
    console.log(" Koalas gagnent")
} else if (dolphinsBonus2Avg === koalasBonus2Avg && dolphinsBonus2Avg >= 100 && koalasBonus2Avg >= 100) {
  console.log(" Match nul")
} else {
  console.log(" Personne ne gagne") 
}
