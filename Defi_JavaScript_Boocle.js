/*Create a function that takes a number as an argument. Add all the numbers from 1 to the number you passed to the function. For example, if the input is 5 then your function should return 15 because 1 + 2 + 3 + 4 +5 = 15.
sumNumber(5)➞1+2+3+4+5=15
sumNumber(4)➞1+2+3+4=10*/
 
                                   
function sumNumber(num) {
    let som=0
    for(let i=1;i<=num;i++){
    som=som+i
    }
     return som
    }
console.log(sumNumber(5))
/*Exercice:
Write a function that takes an array as an argument and returns the reversion of this array.
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
reverse([ ]) ➞ [ ]*/
                                      
function reverse(array) {


     return array.reverse()  }
     console.log(reverse([1,2,3,4]))
     Exercice:
/*Create a function that accepts an array and returns the last item in the array.
getLastItem([0, 5, 6]) ➞ 6
getLastItem(["HTML", "CSS", "javascript"]) ➞ "javascript"*/
                                          
function getLastItem(array) { 

    return array[array.length-1]
}
    console.log(getLastItem([5,1,6,4]))

    /*Exercice:
Create a function that takes two arrays as arguments and returns the concatenation of two integer arrays.
concat([0, 10, 6], [900, 5, 60]) ➞ [0, 10, 6, 900, 5, 60]*/

                                        
function concat(array1,  array2) { 

    return array1.concat(array2)
 }
 console.log(concat([0,1,2,3,4],[5,6,7,8]))

 /*Exercice:
Create a function that takes an array and an item as arguments and return the index of item.If the item is not present, return -1
search([1, 5, 3], 3) ➞ 2
 search([1, 2, 3], 4) ➞ -1*/

                                          
 function search(array,  item) { 
     for (let i=0;i<=array.length;i++){
     if (array[i]==item)
     return i
     else 
     return -1
     
     }
 }
 console.log(search([5,4,1,2],5))

 /*Exercice:
Create a function that takes an array with numbers and return an array with the elements multiplied by two.
getMultipliedArr([4, 5, 3]) ➞ [8, 10, 6]
getMultipliedArr([1, 2, 6]) ➞ [2, 4, 12]*/
                                                 
                                        
function getMultipliedArr(array) { 
    let Tab=[]
    for (let i=0;i<=array.length-1;i++){

       Tab[i]= array[i]*2
    }

    return Tab }
console.log(getMultipliedArr([8, 10, 6]))

/*Exercice:
Create a function that takes as argument an array of words and transforms it into an array of each word's length.
wordLengths(["simplon", "Tunis"]) ➞ [7, 5]*/
                                                          
                                       
function wordLengths(array) { 
    let Tab=[]
    for (let i=0;i<=array.length-1;i++){
        Tab[i]=array[i].length
    }
    return Tab }
    console.log(wordLengths(["simplon", "Tunis"]))

    /*Exercice:
    Create a function that takes an array and returns the sum of all numbers in the array.
    sum([1, 8, 2]) ➞ 11
    sum([40, 0, 1]) ➞ 41*/
                            
    function sum(array) { 
       let som=0
        for (let i=0;i<=array.length-1;i++){
            som=som+array[i]
        }

        
        return som }
        console.log(sum([1, 8, 2]))
        /*Exercice:
        Create a function that takes an array of numbers and returns only the even values.
        noOdds([1, 2, 3, 4, 5, 6, 7, 8]) ➞ [2, 4, 6, 8]
        noOdds([3, 6, 8, 9, 2, 1, 4, 5]) ➞ [6, 8, 2, 4]*/
        
                          
        function noOdds(array) { 
            let Tab=[]
            let j=0
            for (let i=0;i<=array.length-1;i++){
                if (array[i] % 2==0)
                {

                Tab[j]=array[i]
                j++;
                }
            }
            return Tab
             
            


            
        }
        console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8]))
        /*Exercice:
Create a function that takes an array of numbers.and returns the largest number in the array.
findLargestNum([4, 5, 1, 3]) ➞ 5
findLargestNum([300, 200, 600, 150]) ➞ 600
findLargestNum([1000, 1001, 857, 1]) ➞ 1001*/
                                      
function findLargestNum(array) { 
    
    return Math.max(...array)
}
console.log(findLargestNum([300, 200, 600, 150]))
/*Exercice:
Create a function that takes an array of numbers.and returns the smaller number in the array.
findSmallerNum([1, 6, 5, -213]) ➞ -213
findSmallerNum([8, 7, 2, 1]) ➞ 1*/

                                       
function findSmallerNum(array) { 
    return Math.min(...array)
    
   }
   console.log(findSmallerNum([300, 200, 600, 150]))
   /*Exercice:
Create a function that takes an array and returns the difference between the biggest and smallest numbers.
diffMaxMin([44, 32, 86, 19]) ➞ 67*/

                                        
function diffMaxMin(array) { 

     return Math.max(...array)-Math.min(...array) }
                                                       
                                          

    console.log(diffMaxMin([5, 10, 15, 20, 25]))
    /*Exercice:
Create a function that takes an array as argument and returns multiply all of the values in an array by the length of the given array.
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0 ]
multiplyByLength([4, 1, 1]) ➞ ([12, 3, 3])
multiplyByLength([1, 0, 3, 3, 7, 2, 1]) ➞  [7, 0, 21, 21, 49, 14, 7]*/

                                              
function multiplyByLength(array) { 

    return array.map(x=>x*array.length)}
    console.log(multiplyByLength([4, 1, 1]))
    Exercice:
/*Create a function takes an array of numbers, negate all elements contained within.
Negating a positive value -+n will return -n, because all +'s are removed
Negating a negative value --n will return n, because the first - turns the second minus into a +.
negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]
negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]*/
                                              
                                                   
function negate(array) { 

    return array.map(el => -el) }
    console.log(negate([1, 2, 3, 4]))
    Exercice:
/*Create a function that takes an array of strings and returns the words that are exactly four letters.
isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]
isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]*/

                                                   

function isFourLetters(array){
    return array.filter(el=> el.length===4 )
}

    console.log(isFourLetters(["Tomato", "Potato", "Pair"]))
    
    /*Create a function that takes an array ,a string and returns the addition of the string ending to each member in an array
addEnding(["clever", "meek", "hurried"], "ly") ➞ ["cleverly", "meekly", "hurriedly"]
addEnding(["new", "pander", "scoop"], "er") ➞ ["newer", "panderer", “scooper"]*/


                                               
function addEnding(array, ending){ 
                                                  
return array.map(el=> el+ending)


}
console.log(addEnding(["clever", "meek", "hurried"], "ly"))
/*Exercice:
Create a function to remove all null values from an array.
removeNull(["a", null, "b", null]) ➞ ["a", "b"]
removeNull([7, 8, null, 9]) ➞ [7, 8, 9]
removeNull([null, null, null, null, null]) ➞ [ ]*/

                                                 
function removeNull(array) {
   
     return  array.filter(el=> el!=null)}
     console.log(removeNull(["a", null, "b", null]))
     Exercice:
/*Create a function that takes an array of numbers and remove any numbers that are divisible by 13,return the amended array.
unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
// 182 and 637 are divisible by 13.
unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.*/
       
                                   
function unlucky(nums) { 

    return nums.filter(el=> el%13!=0) }
    console.log(unlucky([53, 182, 435, 591, 637]))
    /*Exercice:
Create a function that takes an array,return the incrementing (+1) for each odd number and decrementing (-1) for each even number.
transform([1, 2, 3, 4, 5]) ➞ [2, 1, 4, 3, 6]
transform([3, 3, 4, 3]) ➞ [4, 4, 3, 4]
transform([2, 2, 0, 8, 10]) ➞ [1, 1, -1, 7, 9]*/
                  
                   
function transform(array) { 
   return array.map(el=> (el%2==0?el-1:el+1))

 }
 console.log(transform([2, 2, 0, 8, 10]))
 /*Exercice:
Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.Zero is a non-negative number
filterArray([1, 2, "e", "f"]) ➞ [1, 2]
filterArray([1, "s", "m", 0, 15]) ➞ [1, 0, 15]*/

                                       
function filterArray(array) {
    return array.filter(el=> el>=0 )
}
console.log(filterArray([1, "s", "m", 0, 15]))
/*Exercice:

A group of friends have decided to start a society. The name will be the first letter of each of their names, sorted in alphabetical order.
Create a function that takes in an array of names as argument and returns the name of the society.
societyName(["Manel", "Sheima", "Amira"]) ➞ "AMS"
societyName(["Saief", "Mouna", "Sirine"]) ➞ "SMS"*/
                                     
                                       
function societyName(friends) { 
    
 return    friends.map((name) => name[0]).sort().join('')
 }
console.log(societyName(["Manel", "Sheima", "Amira"]))
/*Exercice:
Create a function that takes an array of arrays with numbers and return a new (single) array with the largest numbers of each.
findLargestNums([[9, 2, 3, 1], [20, 70, 40, 90], [4, 2, 3]]) ➞ [9, 90,4]
findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]*/
        
                                       
function findLargestNums(array) { 
   let Tab=array.map(el =>Math.max.apply(null,el))
   return Tab
}
     console.log(findLargestNums([[9, 2, 3, 1], [20, 70, 40, 90], [4, 2, 3]]))
     /*Exercice:
Create a function that takes an array of strings and return an array, sorted from shortest to longest.
shortToLong(["Google", "Apple", "Microsoft"])➞ ["Apple", "Google", "Microsoft"]
shortToLong(["Simplon", "Skills", "Development"])➞ ["Skills", "Simplon","Development"]*/

                                        
function shortToLong(array) {
    return array.sort((a,b)=>a.length-b.length)
      }
console.log(shortToLong(["Simplon", "Skills", "Development"]))
/*Exercice:
Write two functions:
toArray(), which converts a number to an array of its digits.
toNumber(), which converts an array of digits back to its number.

toArray(201) ➞ [2, 0, 1]
toNumber([4, 8, 8]) ➞ 488
toArray(7) ➞ [7]*/
                                         
function toArray(num) {
    let strin=num.toString().split('').map(el=>parseInt(el))
    console.log(strin)
     
    return strin
     }
     console.log(toArray(501))
                                    
function toNumber(array) { 

    return parseInt(array.join('')) }
    console.log(toNumber([1,2,3,4]))

   /* Exercice:
Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
spelling("bee") ➞ ["b", "be", "bee"]
spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]*/

                                        
function spelling(array) { 
    
    return }

    
