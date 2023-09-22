// №1
// for( let i = 1; i<=100;i++){
//     console.log(i)
// }



// №2
// for( let i = 100; i>=1; i--){
//     console.log(i)
// }

// №3
// for( let i = 1; i<=100; i++){
//     if (i%2==0){
//         console.log(i)
//     }
   
// }

//4

// a = [];
// for (let i = 0; i<=10; i++){
//     a+='x';
// }
// console.log(a)

//5
// b = [];
// for (let i = 1; i<=10; i++){
//     b+=i;
// }
// console.log(b)


//6
// c=[1,2,12,5,6,7,8];
// for (let i = 0; i <= c.length -1; i++ )
// {
//     if (c[i]>0 && c[i]<10)
//     {
//         console.log(c[i])
//     }
// }

//7
// d=[1,2,12,5,6,7,8];
// for (let i = 0; i <= d.length -1; i++ )
// {
//     if (d[i]==5)
//     {
//         console.log(d[i])
//     }
// }

//8
// k=[1,2,12,5,6,7,8];
// sum=0
// for (let i = 0; i <= k.length -1; i++ )
// {
//     sum+=i;
    
// }
// console.log(sum)

//9
// j=[1,2,12,5,6,7,8];
// sum=0
// for (let i = 0; i <= j.length -1; i++ )
// {
//     sum+=i**2;
    
// }
// console.log(sum)

//10
// e=[1,2,12,5,6,7,8];
// sum=0
// for (let i = 0; i <= e.length -1; i++ )
// {
//     sum+=i;
//     del=sum/(e.length-1)
    
// }
// console.log(del)

//11
// let number = prompt("Введите число")
// let fact= 1
// for (let i = 1 ; i<=number; i++){
//     fact*=i
// }
// console.log(fact)

//12
// mass=[];
// for (let i = 10; i>=1; i--){
//     mass+=i
// }
// console.log(mass)

//13
// massiv=[-6,5,-10,6,7,-2]
// summa=0;
// for (let i = 0; i<=massiv.length-1; i++){
//     if(massiv[i]>0){
//         summa+=massiv[i]
//     }
// }
// console.log(summa)

//14
// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i =0; i<=arr.length-1; i++ ){
//     let str = String(arr[i])
//     if (str[0] == 1 || str[0] == 2 || str[0] == 5){
//         console.log(str)
//     }
// }

//15
// let arr2 = [10, 20, 30, 50, 235, 3000];
// for (let i = arr2.length-1; i>=0; i--){
//     console.log(arr2[i])
// }

//16
// let six = [2,1,78,3,6,5]
// for (let i = 0; i<=six.length-1; i++){
//     let str = String(six[i])
//     if (str == i) {
//         console.log(str, i)
//     }
// }

//17
// let mass17 = [8,9,5,3,63,1323]
// for (let i = 0; i<=mass17.length-1; i++){ 
//     document.write(mass17[i] + '<br>')
// }

//18 
// let mass17 = [8,9,5,3,63,1323]
// for (let i = 0; i<=mass17.length-1; i++){ 
//     document.write("<p>" + mass17[i] + '</p>')
// }

//19
// let week = ['monday','tuesday','wensday','thursday','friday','saturday','sunday']
// for (let i = 0; i<=week.length-1; i++){ 
//     if(i>=5 )
//     {
//         document.write("<p><b>" + week[i] + '</b></p>')
//     }
//     else{
//         document.write("<p>" + week[i] + '</p>')
//     }
// }

//20
// let day = 1;
// let week = ['monday','tuesday','wensday','thursday','friday','saturday','sunday']
// for (let i = 0; i<=week.length-1; i++) {
//     if (i==day) {
//         document.write("<p><i>" + week[i] + "</i> </p>")
//     }
//     else {
//         document.write("<p>" + week[i] + '</p>')
//     }
// }

//21
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for (let key in obj) {
//     upsalary = obj[key] + obj[key] * 0.1
//     console.log(upsalary)
// }

//22
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for (let key in obj) {
//     if(obj[key] <=400){
//         upsalary = obj[key] + obj[key] * 0.1
//         console.log(upsalary)
//     }
// }

//23
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj = {};
// for (let i = 0; i <= arr1.length-1; i++){
//     obj[arr1[i]] = arr2[i]

// }
// console.log(obj)

//24
// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let sum = 0;
// let del = 0;
// for (let key in obj) {
//     sum += Number(key)
//     del += obj[key]
// }
// let answer = sum/del
// console.log(answer)

//25
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let a =[];
// let b = [];
// for (let key in obj) {
//     a.push(key)
//     b.push(obj[key])
// }
// console.log(a,b)

//26
// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// let a =[]
// let keys = Object.keys(obj)
// for (let i =0; i<=keys.length-1; i++ ){
//         let str = String(obj[i])
//         if (str[0] == 1 || str[0] == 2 ){
//             a.push(str)
//         }
//     }
//     console.log(a)


//27
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj ={}
// let key = 0;
// for (let i = 0; i<=arr.length-1; i++){
//         obj[key+=1] = arr[i]
    
   
// }
// console.log(obj)

//28
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj ={}
// let key = 1;
// for (let i = 0; i<=arr.length-1; i++){
//         obj[arr[i]] = key+i
// }
// console.log(obj)