/* 
    para crear un repositorio nuevo usa:
    1:git add .
    2:git commit -m"ACTUALISASION DEL PROGRAMA 1"
    3:git push -u origin main
    encaso que tengas ya creado un repositoe y lo ayas borado usa 
    1:git remote rm origin
 */
// Song data
    
const songList = [
    {
        title: "01-THE OTHER SIDE - The Greatest Showman",
        file: "01-THE OTHER SIDE - The Greatest Showman (Cover Español)  David Delgado.mp3",
        cover: "01-The-Greatest-Showman-4-e1515845136461 (1).jpg"

    },
    {
        title: "02-AKEBOSHI - Demon Slayer Kimetsu no Yaiba Season 2 OP Full",
        file: "02-AKEBOSHI - Demon Slayer Kimetsu no Yaiba Season 2 OP Full (Cover Español)  David Delgado.mp3",
        cover: "02-maxresdefault.jpg"
    },
    {
        title: "03-Its not like I like You - Jibaku Shonen Hanako Kun ANIMATIC",
        file: "03-Its not like I like You - Jibaku Shonen Hanako Kun ANIMATIC  Cover Español  ft. Miree.mp3",
        cover: "03-It's not like I like You!! - Jibaku Shonen Hanako Kun ANIMATIC.jpg"
        
    },
    {
        title: "04-MYSTERY SKULLS GHOST en ESPANOL Mystery Skulls Animated",
        file: "04-MYSTERY_SKULLS_-_GHOST_en_ESPANOL__Mystery_Skulls_Animated_Cover_en_Espanol__David_Delgado.mp3",
        cover: "04-mystery_skulls_animated_ghost___thank_you_by_phychoticsilence_d897lrj-pre.jpg"
    },
    {
        title: "05-Kekkai Sensen ED Full - Sugar Song to Bitter Step",
        file: "05-Kekkai Sensen ED Full - Sugar Song to Bitter Step (Cover Español Latino)  David Delgado.mp3",
        cover: "05-8c9.jpg"
    },
    {
        title: "06LIKE FLAMES - That Time I Got Reincarnated as a Slime Opening Full",
        file: "06LIKE FLAMES - That Time I Got Reincarnated as a Slime Opening Full (Cover Español)  David Delgado.mp3",
        cover: "06-The-Slime-Diaries-That-Time-I-Got-Reincarnated-as-a-Slime.jpg"
    },
    {
        title: "07-Long Hope PhiliaBoku no Hero Academia The Movie Futari no Hero",
        file: "07-Long Hope PhiliaBoku no Hero Academia The Movie Futari no Hero - Cover Español.mp3",
        cover: "07-boku-no-hero-academia-the-movie-1-futari-no-hero.jpg"
    },
    {
        title: "08-CINDERELLA - Komi Cant Communicate OP Full",
        file: "08-CINDERELLA - Komi Cant Communicate OP Full (Cover Español)  David Delgado.mp3",
        cover: "08-komi-san-new-poster.jpg"
    },
    {
        title: "09-RISEThe Rising of the Shield Hero OP FULL",
        file: "09-RISEThe Rising of the Shield Hero OP FULL - Cover Español.mp3",
        cover: "09-c000d4c9424936cb5e0551de106bd648.jpg"
    },
    {
        title: "10-Miraculous Ladybug - SABRINA Yo quiero ser tu esclava (I wanna be your SlaveMåneskin) Hitomi Flor",
        file: "10-Miraculous Ladybug - SABRINA Yo quiero ser tu esclava (I wanna be your SlaveMåneskin) Hitomi Flor.mp3",
        cover: "10-Angie_Nasca_Designs.jpg"
    },
    {
        title: "11-Fire Force Opening FULL Inferno",
        file: "11-Fire Force Opening FULL Inferno - Cover Español Latino.mp3",
        cover: "11-Mrs. Green Apple - Inferno.jpg"
    },
    {
        title: "12-SPIDER-MAN - Duende Verde CANCIÓN ORIGINAL  David Delgado",
        file: "12-SPIDER-MAN - Duende Verde CANCIÓN ORIGINAL  David Delgado.mp3",
        cover: "12-duende-verde-willem-dafoe.jpg"
    },
    {
        title: "ENCANTO - En lo Profundo",
        file: "13-ENCANTO - En lo Profundo (Cover Español Latino) Luisa Madrigal  David Delgado.mp3",
        cover: "13-ZJKIWPCU7JAO7PWEIRRPWXG5QI.jpg"
    },
    {
        title: "14-Black Catcher - Black Clover Opening 10  Cover Español Latino",
        file: "14-Black Catcher - Black Clover Opening 10  Cover Español Latino.mp3",
        cover: "14-Black_Catcher.jpg"
    },
    {
        title: "15-Dr. STONE Opening 3 FULL",
        file: "15-Dr. STONE Opening 3 FULL Español Latino  Rakuen.mp3",
        cover: "15-dr_stone-907035932-large.jpg"
    },
    {
        title: "16-SING ",
        file: "16-SING - Im Still Standing (Cover Español Latino)  David Delgado.mp3",
        cover: "16-Sing-2-cover-1024x576.jpg"
    },
    {
        title: "17-MERRY GO ROUND - Boku no Hero Academia",
        file: "17-MERRY GO ROUND - Boku no Hero Academia OP 9 Full (Cover Español)  David Delgado.mp3",
        cover: "17-Boku no Hero Academia.jpg"
    },
]

// Canción actual
let actualSong = null

// Capturar elementos del DOM para trabajar con JS
const songs = document.getElementById("songs")
const audio = document.getElementById("audio")
const cover = document.getElementById("cover")
const title = document.getElementById("title")
const play = document.getElementById("play")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
progressContainer.addEventListener("click", setProgress)

// Escuchar el elemento AUDIO
audio.addEventListener("timeupdate", updateProgress)

// Escuchar clicks en los controles
play.addEventListener("click", () => {
    if (audio.paused) {
        playSong()   
    } else {
        pauseSong()
    }
})

next.addEventListener("click", () => nextSong())
prev.addEventListener("click", () => prevSong())

// Cargar canciones y mostrar el listado
function loadSongs() {
    songList.forEach((song, index) => {
        // Crear li
        const li = document.createElement("li")
        // Crear a
        const link = document.createElement("a")
        // Hidratar a
        link.textContent = song.title
        link.href = "#"
        // Escuchar clicks
        link.addEventListener("click", () => loadSong(index))
        // Añadir a li
        li.appendChild(link)
        // Aañadir li a ul
        songs.appendChild(li)
    })
}

// Cargar canción seleccionada aqui ()estoy
function loadSong(songIndex) {
    if (songIndex !== actualSong) {
        changeActiveClass(actualSong, songIndex)
        actualSong = songIndex
        audio.src = "./audio/" + songList[songIndex].file
        playSong()
        changeSongtitle(songIndex)
        changeCover(songIndex)
    }
}

// Actualizar barra de progreso de la canción
function updateProgress(event) {
    const {duration, currentTime} = event.srcElement
    const percent = (currentTime / duration) * 100
    progress.style.width = percent + "%" 
}

// Hacer la barra de progreso clicable
function setProgress(event) {
    const totalWidth = this.offsetWidth
    const progressWidth = event.offsetX
    const current = (progressWidth / totalWidth) * audio.duration
    audio.currentTime = current
}

// Actualiar controles
function updateControls() {
    if (audio.paused) {
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    } else {
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
    }
}

// Reproducir canción
function playSong() {
    if (actualSong !== null) {
        audio.play()
        updateControls()
    }
}

// Pausar canción
function pauseSong() {
    audio.pause()
    updateControls()
}

// Cambiar clase activa
function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a")
    if (lastIndex !== null) {
        links[lastIndex].classList.remove("active")
    }
    links[newIndex].classList.add("active")
}

// Cambiar el cover de la canción
function changeCover(songIndex) {
    cover.src = "./img/" + songList[songIndex].cover
}

// Cambiar el título de la canción
function changeSongtitle(songIndex) {
     title.innerText = songList[songIndex].title
}

// Anterior canción
function prevSong() {
    if (actualSong > 0) {
        loadSong(actualSong - 1)
    } else {
        loadSong(songList.length - 1)
    }
}

// Siguiente canción
function nextSong() {
    if (actualSong < songList.length -1) {
        loadSong(actualSong + 1)
    } else {
        loadSong(0)
    }
}

// Lanzar siguiente canción cuando se acaba la actual
audio.addEventListener("ended", () => nextSong())

// GO!
loadSongs()