const dog_pic = document.getElementById("dog")
const dogie = document.getElementById("dogie")


function dogPhotos(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(json => {
            console.log(json.message)
            dog_pic.innerHTML = `<img src = "${json.message}"/>`
    })

}

dogie.onclick = () => dogPhotos()
