document.querySelector('.left_arrow_1').addEventListener('click', function(){

    document.querySelector('.container_1').style.display = 
                'block'
    document.querySelector('.container_2').style.display = 
                'none'
})

document.querySelector('.right_arrow_1').addEventListener('click', function(){
    
        document.querySelector('.container_1').style.display = 
                'none'
        document.querySelector('.container_2').style.display = 
                'block'
})

document.querySelector('.left_arrow_2').addEventListener('click', function(){

        document.querySelector('.container_3').style.display = 
                    'block'
        document.querySelector('.container_4').style.display = 
                    'none'
    })
    
    document.querySelector('.right_arrow_2').addEventListener('click', function(){
        
            document.querySelector('.container_3').style.display = 
                    'none'
            document.querySelector('.container_4').style.display = 
                    'block'
    })
    