const displayed = document.querySelectorAll('.displayed-img')
const button = document.querySelector('button')
const textarea = document.getElementById('effect')
const images = document.querySelector("section")
const display = document.querySelector('.display')

images.addEventListener('mouseover',display_image)
button.addEventListener("click", effect);

function display_image(e){
    image = String(e.target.src).split("/").pop()
    if (image != 'undefined')
        display.src = 'images/' + image
 
}

function effect(){ 
    if (textarea.value == 'blur'){
        image = display.src;
        image = image.split('/').pop()
        index = image.lastIndexOf('.')
        image = image.split('')
        image [index] = 'B.'
        temp =''
        for(i = 0 ; i < image.length; i++){
            temp += image[i]
        }
        image = temp
        display.src = 'images/' +image
        textarea.value = ''}
    else {
        alert("Invalid letter, please enter a different effect")
        textarea.value =''

    }
    }

