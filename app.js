// // question1: test
// const dophinScore1= 96 ;
// const dophinScore2 = 108 ;
// const dophinScore3 = 89 ;

// const koalaScore1 = 88 ;
// const koalaScore2 = 91 ;
// const koalaScore3 = 110 ;

// const dolphinsAvg =(dophinScore1+dophinScore2+dophinScore3)/3;
// console.log("dophin average:",dolphinsAvg);

// const koalasAvg =(koalaScore1+koalaScore2+koalaScore3)/3;
// console.log("koala average :", koalasAvg);

// // question2

// if (dolphinsAvg > koalasAvg) {
//   console.log("Dauphins gagnent")
// } else if (koalasAvg > dolphinsAvg) {
//   console.log(" Koalas gagnent") 
// } else {
//     console.log(" Match nul") 

// }
// // 3

// const dolphinBonusScore1 = 97;
// const dolphinBonusScore2 = 112;
// const dolphinBonusScore3 = 101;
// const dolphinsBonusAvg = (dolphinBonusScore1 + dolphinBonusScore2 + dolphinBonusScore3) / 3
// console.log("dophin bonus1 average:", dolphinsBonusAvg)

// const koalasBonusScore1 = 109;
// const koalasBonusScore2 = 95;
// const koalasBonusScore3 = 123;
// const koalasBonusAvg = (koalasBonusScore1 + koalasBonusScore2 + koalasBonusScore3) / 3
// console.log("koalas bonus1 average:",koalasBonusAvg)

// // Bonus 1 : Min 100 points pour gagner

// if (dolphinsBonusAvg > koalasBonusAvg && dolphinsBonusAvg >= 100) {
//   console.log("Dauphins gagnent")
// } else if (koalasBonusAvg >dolphinsBonusAvg && koalasBonusAvg >= 100) {
//    console.log(" Koalas gagnent")
// } else {
// console.log(" Match nul")
// }

// // bonus2:

// const dolphinBonus2Score1 = 97;
// const dolphinBonus2Score2 = 112;
// const dolphinBonus2Score3 = 101;
// const dolphinsBonus2Avg = (dolphinBonus2Score1 + dolphinBonus2Score2 +dolphinBonus2Score3) / 3
// console.log("dophin bonus2 average:",dolphinsBonus2Avg)

// const koalasBonus2Score1 = 109;
// const koalasBonus2Score2 = 95;
// const koalasBonus2Score3 = 106;
// const koalasBonus2Avg= (koalasBonus2Score1 + koalasBonus2Score2 +koalasBonus2Score3) / 3
// console.log("koala bonus2 average:", koalasBonus2Avg)

// if (dolphinsBonus2Avg > koalasBonus2Avg && dolphinsBonus2Avg >= 100) {
//   console.log("Dauphins gagnent")
// } else if (koalasBonus2Avg > dolphinsBonus2Avg && koalasBonus2Avg >= 100) {
//     console.log(" Koalas gagnent")
// } else if (dolphinsBonus2Avg === koalasBonus2Avg && dolphinsBonus2Avg >= 100 && koalasBonus2Avg >= 100) {
//   console.log(" Match nul")
// } else {
//   console.log(" Personne ne gagne") 
// }

////////////////////challenge 10 min:::

// const bill = 275;
// const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(calcTip(100)); 

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);  // [125, 555, 44]
console.log(tips);   // [18.75, 111, 8.8]
console.log(total);  // [143.75, 666, 52.8]




// challenge 31/08/2025::::
// 1
// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

// // 2
// const avgDolphins1 = calcAverage(44, 23, 71);
// const avgKoalas1 = calcAverage(65, 54, 49);
// console.log("dolphins: " ,avgDolphins1 ,"koalas:", avgKoalas1)

// // 3
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No team wins...');
//   }
// }

// // 4.
// //  Data 1
// checkWinner(avgDolphins1, avgKoalas1);

// //  Data 2
// const avgDolphins2 = calcAverage(85, 54, 41);
// const avgKoalas2 = calcAverage(23, 34, 27);
// checkWinner(avgDolphins2, avgKoalas2);

