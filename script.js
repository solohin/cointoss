$('document').ready(function(){
  var heads = 0
  var tails = 0
  
  var bestHeadsStreak = 0
  var bestTailsStreak = 0
  
  var lastStreak = 0
  var lastHeads = null
  
  function calcStats(isHeads){
    if(lastHeads){
      heads++
    }else{
      tails++
    }
    
    if(lastHeads === isHeads){
      lastStreak++
    }else{
      if(isHeads){
        bestHeadsStreak = Math.max(lastStreak, bestHeadsStreak)
      }else{
        bestTailsStreak = Math.max(lastStreak, bestTailsStreak)
      }
      lastStreak = 1
    }
    
    lastHeads = isHeads
  }
  
  function showStats(){
    $('#stats').show()
    var text = 'Heads: ' + heads + ' ' + Math.round(heads/(heads+tails)*100) + '% \n'
    text += 'Tails: ' + tails + ' ' + Math.round(tails/(heads+tails)*100) + '% \n'
//     text += 'Best heads streak: ' + bestHeadsStreak + '\n'
//     text += 'Best tails streak: ' + bestTailsStreak + '\n'
    $('#stats').text(text)
  }
  showStats()
  var needRender = false
   $('button').click(function(){
     var random = Math.random() * 100
     console.log(random)
     
     var tailsChance = parseFloat($('#tailsChance').val())
     needRender = true
     
     $('#tails, #heads').slideUp(100)
     
     setTimeout(function(){
       if(!needRender)return
       needRender = false
       
        if(random > tailsChance){
          $('#heads').slideDown(200)
          calcStats(true)
        }else{
          $('#tails').slideDown(200)
          calcStats(false)
        }
        showStats()
     }, 110)
   })
})
