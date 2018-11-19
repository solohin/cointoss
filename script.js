$('document').ready(function(){
   $('button').click(function(){
     var random = Math.random() * 100
     console.log(random)
     
     var tailsChance = parseFloat($('#tailsChance').val())
     
     $('#tails, #heads').fadeOut('fast',function(){
        if(random > tailsChance){
          $('#heads').show()
        }else{
          $('#tails').show()
        }
     })
     
   })
})
