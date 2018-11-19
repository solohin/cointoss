$('document').ready(function(){
   $('button').click(function(){
     var random = Math.random() * 100
     console.log(random)
     
     var tailsChance = parseFloat($('#tailsChance').val())
     
     if(random > tailsChance){
       $('#tails').hide()
       $('#heads').show()
     }else{
       $('#tails').show()
       $('#heads').hide()
     }
   })
})
