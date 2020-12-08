// bubble sort algorithm

function bubbleSort(array) {
    let n = array.length
     while (n > 0) {              //while there are at least 2 number in the array
      let lastModifiedIndex = 0   //define a variable and initialize it to 0
      for (let currentIndex = 1; currentIndex < n; currentIndex++) { //start the current index at 1 and keep going up 
                                                                     //unitl it not less than array.length then move
                                                                     //to the next index
        
        if (array[currentIndex - 1] > array[currentIndex]) { // if the item at the previous index is greater than the 
                                                             //item at the `currentIndex`
          // swap
          let temp = array[currentIndex - 1] //define a temporary variable
          array[currentIndex - 1] = array[currentIndex]  //take the lower index number and move it up 1 index
          array[currentIndex] = temp         //take the higher index number and move it to the left
          lastModifiedIndex = currentIndex   //save the index that was changed and start the process over
        }
      }
      n = lastModifiedIndex // save the last index that was changed so we know not to iterate past it since all previous 
                            //values are sorted
    }
  }
  
  let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
  let array2 = [44, 55, 33, 22, 11, 77, 66, 88, 99]
  let array3 = [83, 56, 32, 33, 96, 78, 52, 67]
  let array4 = [-12, 11, -15, -10, -9, -1, 2, -3, -13, -14, 4, -5, -6, 7, -8]
  
  bubbleSort(array)
  console.log(array)

  bubbleSort(array2)
  console.log(array2)

  bubbleSort(array3)
  console.log(array3)

  bubbleSort(array4)
  console.log(array4)