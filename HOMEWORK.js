// 1) From years in array check for leap years [1974, 1900, 1985, 2000]

let rok = [1974, 1900, 1985, 2000,];
for (let i=0; i<rok.length; i++) {
if ((rok[i] %4 == 0 &&  rok[i] %100 != 0) || (rok[i]% 400 == 0))
    {
    console.log("rok " +rok[i]+ " jest  rokiem przestepnym");
    }
else
    {
    console.log("rok " +rok[i]+ " nie jest rokiem przestepnym");
    }
}

// 2) Calculate factorial of 7.

let i = 1;
let silnia=1;
while(i<=7)
{
    silnia = silnia * i;
    i++;
    console.log(i);
    console.log(silnia);
}
console.log('! ' +silnia);

// 3) Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]

let tabela =[1,6,23,8,4,98,3,7,3,98,4,98]
let sum=0;
for ( i=0; i < tabela.length; i++){
	if( tabela[i] %2!=0){
	//console.log("liczba " +tabela[i]+ " nie jest parzysta");
sum=sum +tabela[i];
	}
}
console.log('suma liczb nieparzystych ' +sum);


// 4) Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.

let tabela = [1,6,23,8,4,98,3,7,3,98,4,98];
tabela.sort(function(a,b){
    return a-b})
min=tabela[0];
max=tabela[tabela.length-1];
	console.log("minimalna wartość "+min);
    console.log("maksymalna wartość " + max);
}
// 5) Choose longest string from the array. [‘Karol’,‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’].

 let tabela = ["Karol", "Adam", "Rogowski", "Politechnika", "Super", "Weekend"];
 let dlugosc = tabela[0];
 for (i=1; i<tabela.length; i++){
    if (dlugosc.length < tabela[i].length)
    {
 dlugosc=tabela[i];
 }
 }
 console.log(i);
 console.log(dlugosc);

// 6) Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]

let tabela = [1,6,23,8,4,98,3,7,3,98,4,98];
let max = tabela[0];
let indexx = tabela[0];
for (i=0; i<tabela.length; i++){
    if (tabela[i]> max){
        max=tabela[i]; 
}
}
for (i=0; i<tabela.length; i++){
 if (tabela[i]===max){
     indexx = i
     console.log(indexx);
    }
 }

// 7) Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
let tabela =[1,6,23,8,4,98,3,7,3,98,4,98]
let sum=0;
let indexx = 0;
let srednia = 0;
for ( i=1; i < tabela.length; i++){
   if( tabela[i] %2===0){
       console.log("liczba " +tabela[i]+ " jest parzysta");
sum=sum +tabela[i];
	}
}
for (i=1; i < tabela.length; i++){
   if( tabela[i] %2===0){
       indexx=i;
       srednia=sum/indexx;
    }
}
console.log('suma liczb parzystych ' +sum);
console.log('srednia '+srednia);

// 8) Calculate average value of items at even indexes. Zero is not considered to be even number.
[1,6,23,8,4,98,3,7,3,98,4,98]
let tabela= [1,6,23,8,4,98,3,7,3,98,4,98];
let sum=0;
let tabela1=[];
let srednia =0;
for ( i=0; i < tabela.length; i++)
{
	if( i %2 ==0&& i!=0)
	{
		tabela1.push(tabela[i]);
sum=sum + tabela[i];
		console.log(sum);
		srednia=sum/tabela1.length;
	}
}  
console.log(srednia);

//9) With a given start value of 0. Iterate the array and add even items and subtract odd ones.
[1,6,23,8,4,98,3,7,3,98,4,98]
let tabela =[1,6,23,8,4,98,3,7,3,98,4,98]
let sum=0;
let roznica = 0;
let wynik=0;
for ( i=0; i < tabela.length; i++){
    if( tabela[i] %2===0){
       // console.log("liczba " +tabela[i]+ " jest parzysta");
sum=sum +tabela[i];
	}
}
for ( i=0; i < tabela.length; i++){
    if( tabela[i] %2!=0){
        //console.log("liczba " +tabela[i]+ "  nie jest parzysta");
roznica=roznica -tabela[i];
	}
}
wynik=sum+roznica;
console.log(wynik);
