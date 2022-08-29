window.addEventListener('load', ()=>{
   
   document.addEventListener('click', e =>{
      e.preventDefault();
      var target = e.target
      var button = document.querySelector('#button')
      var timeOne = document.querySelector('form #start')
      var timeTwo = document.querySelector('form #end')
      var chimes = document.querySelector('.chimes')
      
      if(target === button){
         if(timeOne.value === '' || timeTwo.value === ''){
            alert("Time is missing")
         } else{
            let a = timeOne.value.split(":")
            let b = timeTwo.value.split(":")
            const difference = (a, b)=>{
               let start = a[0]
               let end = b[0]
               let c = end - start
               
               var arr = []
               if(c < 0){
                  c = c + 24
                  for(i=1;i<c;i++){
                     arr.push(i)
                  }
                  start = Number(start)
                  end = Number(end)
                  if(start === 13){
                     start = 1
                  } else if(start === 14){
                     start = 2
                  }else if(start === 15){
                     start = 3
                  }else if(start === 16){
                     start = 4
                  }else if(start === 17){
                     start = 5
                  }else if(start === 18){
                     start = 6
                  }else if(start === 19){
                     start = 7
                  }else if(start === 20){
                     start = 8
                  }else if(start === 21){
                     start = 9
                  }else if(start === 22){
                     start = 10
                  }else if(start === 23){
                     start = 11
                  }else if(start === 0){
                     start = 12
                  }
                  
                  var arrSum = 0
                  for(i=0;i<arr.length;i++){
                     arrSum += start + arr[i]
                  }

                  const total = arrSum + start + end
   
                  return total
                  
               }else{
                  for(i=1;i<c;i++){
                     arr.push(i)
                  }
                  var sub = 0
                  for(i=0;i<arr.length;i++){
                     sub += arr[i]
                  }
                  start = Number(start)
                  end = Number(end)
                  if(start === 13){
                     start = 1
                  } else if(start === 14){
                     start = 2
                  }else if(start === 15){
                     start = 3
                  }else if(start === 16){
                     start = 4
                  }else if(start === 17){
                     start = 5
                  }else if(start === 18){
                     start = 6
                  }else if(start === 19){
                     start = 7
                  }else if(start === 20){
                     start = 8
                  }else if(start === 21){
                     start = 9
                  }else if(start === 22){
                     start = 10
                  }else if(start === 23){
                     start = 11
                  }else if(start === 0){
                     start = 12
                  }
                  if(end === 13){
                     end = 1
                  }else if(end === 14){
                     end = 2
                  }else if(end === 15){
                     end = 3
                  }else if(end === 16){
                     end = 4
                  }else if(end === 17){
                     end = 5
                  }else if(end === 18){
                     end = 6
                  }else if(end === 19){
                     end = 7
                  }else if(end === 20){
                     end = 8
                  }else if(end === 21){
                     end = 9
                  }else if(end === 22){
                     end = 10
                  }else if(end === 23){
                     end = 11
                  }else if(end === 0){
                     end = 12
                  }
                  const total = sub + start + end
      
                  return total
               }
            }
            chimes.innerHTML = difference(a,b)
         }
      }

   })
})