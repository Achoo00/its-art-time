
// 2023 January
image_array_2023jan_m=[
    'alexalex.png',
    'berd.png',
    'vampire.png',
    'white person.png',
    'zebra.png'
]
image_array_2023jan_s=[
    'week 1 - subaru.png',
    'week 2 - kiara.jpg',
    'week 3 - alex.jpg',
    'week 4 -maqiua.jpg'
]

image_array_2023jan_w=[
    'berd.png',
    'magnus bride.png',
    'white person.png',
    'zelda.png'
]


// 2023 February
image_array_2023feb_m=[
    'cyberpunk.jpg',
    'genshin 1.jpg',
    'genshin 2.jpg',
    'pancreas.png',
    'weathering with you.jpg'
]
image_array_2023feb_s=[
    'eren yee eye frame.png',
    'nhk.png',
    'the wind rises.png',
    'xiao.png'
]
image_array_2023feb_w=[
    'clown.png',
    'couples.jpg',
    'dreams.jpg',
    'neeko.png',
    'nighttime.PNG'
]


// 2023 March
image_array_2023mar_m=[
    'aot happy memory.png'
]
image_array_2023mar_s=[
    'beidou is bae bw.png',
    'city thumbnail.png'
]
image_array_2023mar_w=[
    'happy memory.png'
]


// 2022 October
image_array_2022oct_m=[
    'ahri.png',
    'lucy.png',
    'mob.png'
]
image_array_2022oct_s=[
    'day 1 pochita.jpg',
    'day 2 sputter and flare .png',
    'day 3 yuu.png',
    'day 4 rhitta.gif',
    'day 5 historia.jpg',
    'day 6 touko.jpg',
    'day 7 shouko.gif',
    'day 8 birb.gif',
    'day 9 aot blade big.gif',
    'day 9 aot sword.gif',
    'day 10 picture.jpg',
    'day 11 gilbert.jpg',
    'day 12 lelouch.jpg',
    'day 13 caitlin.jpg',
    'day 14 misaki.jpg',
    'day 15 clara.gif',
    'day 16 reg.gif',
    'day 17 yuuko.gif',
    'day 18 matamune.jpg',
    'day 19 pingu.gif',
    'day 20 narrarator.jpg',
    'day 21 captain mizuki.jpg',
    'day 22 pt 1 kaguya.jpg',
    'day 22 pt 2 miyuki.jpg',
    'day 24 light yagami.jpg',
    'day 25 asobi_hanako.gif',
    'day 26 escanor.jpg',
    'day 27 takaki.jpg',
    'day 29 maqiua.jpg',
    'maqiua 2.png'
]
image_array_2022oct_w=[
    'blue spring ride.png',
    'candy.png',
    'fruits basket.png',
    'ghibli.png',
    'ghost.png',
    'leaves.png',
    'maid sama.png',
    'orange.png',
    'pumpkin.png',
    'raphtalia.png',
    'tea.png',
    'tokyo ghoul.png',
    'vaporean.png'
]



function get_random_image(){
    // Get a random index
    // Get an image at the random_index
    // Display the image

  
    da = Math.floor(Math.random()*12); // Random number between 0 and 11
    if (da == 0){
        random_index_0 = Math.floor(Math.random() * image_array_2023jan_m.length);
        selected_image = image_array_2023jan_m[random_index_0]
        document.getElementById('image_shower').src = `./images/2023/january/mrreqiuem/${selected_image}`
        
    } else if (da == 1) {
        random_index_1 = Math.floor(Math.random() * image_array_2023jan_s.length);
        selected_image = image_array_2023jan_s[random_index_1]
        document.getElementById('image_shower').src = `./images/2023/january/society/${selected_image}`

    } else if (da == 2){
        random_index_2 = Math.floor(Math.random() * image_array_2023jan_w.length);
        selected_image = image_array_2023jan_w[random_index_2]
        document.getElementById('image_shower').src = `./images/2023/january/wadini/${selected_image}`

    }else if (da == 3) {
        random_index_3 = Math.floor(Math.random() * image_array_2023feb_m.length);
        selected_image = image_array_2023feb_m[random_index_3]
        document.getElementById('image_shower').src = `./images/2023/february/mrreqiuem/${selected_image}`

    } else if (da == 4){
        random_index_4 = Math.floor(Math.random() * image_array_2023feb_w.length);
        selected_image = image_array_2023feb_w[random_index_4]
        document.getElementById('image_shower').src = `./images/2023/february/society/${selected_image}`

    }else if (da == 5) {
        random_index_5 = Math.floor(Math.random() * image_array_2023feb_w.length);
        selected_image = image_array_2023feb_s[random_index_5]
        document.getElementById('image_shower').src = `./images/2023/february/wadini/${selected_image}`

    } else if (da == 6){
        random_index_6 = Math.floor(Math.random() * image_array_3.length);
        selected_image = image_array_2023mar_m[random_index_6]
        document.getElementById('image_shower').src = `./images/2023/march/mrreqiuem/${selected_image}`

    }else if (da == 7) {
        random_index_7 = Math.floor(Math.random() * image_array_2023mar_s.length);
        selected_image = image_array_2023mar_s[random_index_7]
        document.getElementById('image_shower').src = `./images/2023/march/society/${selected_image}`

    } else if (da == 8){
        random_index_8 = Math.floor(Math.random() * image_array_2023mar_w.length);
        selected_image = image_array_2023mar_w[random_index_8]
        document.getElementById('image_shower').src = `./images/2023/march/wadini/${selected_image}`

    }else if (da == 9) {
        random_index_9 = Math.floor(Math.random() * image_array_2022oct_m.length);
        selected_image = image_array_2022oct_m[random_index_9]
        document.getElementById('image_shower').src = `./images/2022/october/mrreqiuem/${selected_image}`

    } else if (da == 10){
        random_index_10 = Math.floor(Math.random() * image_array_2022oct_s.length);
        selected_image = image_array_2022oct_s[random_index_10]
        document.getElementById('image_shower').src = `./images/2022/october/society/${selected_image}`

    }else if (da == 11) {
        random_index_11 = Math.floor(Math.random() * image_array_2022oct_w.length);
        selected_image = image_array_2022oct_w[random_index_11]
        document.getElementById('image_shower').src = `./images/2022/october/wadini/${selected_image}`

    }
  }