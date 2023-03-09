image_array=[
    'nhk.png',
    'the wind rises.png',
    'xiao.png'
]

function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index]
  
    // Display the image
    document.getElementById('image_shower').src = `./images/2023/society/${selected_image}`

    
  }