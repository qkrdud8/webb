document.querySelector('.left_arrow_1').addEventListener('click', function(){

    document.querySelector('.container_2').style.display = 
            'none'
    document.querySelector('.container_1').style.display = 
            'block'
})

document.querySelector('.right_arrow_1').addEventListener('click', function(){
    
    document.querySelector('.container_1').style.display = 
            'none'
    document.querySelector('.container_2').style.display = 
            'block'

})

