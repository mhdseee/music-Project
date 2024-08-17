import weeknd from '../img/20fe582b1b0c2882a86996d87d881dcf.jpg'
import billie from '../img/2ad916c2d2c776ca0d7d0cfb534d799f.jpg'
import dua from '../img/dc7786c55692a131010eab53a0e4bad6.jpg'
import imagine from '../img/imagine dragons.jpg'
let Musics=[
    {
        singer:'The Weeknd',
        song: 'After Hours',
        album: 'After Hours',
        img: weeknd,
        id: '01'
    },
    {
        singer:'Billie Eilish',
        song: 'CHIHIRO',
        album: 'HIT ME HARD AND SOFT',
        img: billie,
        id: '02'
    },
    {
        singer:'Dua Lipa',
        song: 'Levitating',
        album: 'Future Nostalgia',
        img: dua,
        id: '03'
    },
    {
        singer:'Imagine Dragons',
        song: 'Believer',
        album: 'Evolve',
        img: imagine,
        id: '04'
    }
]
export const getMusics = ()=>{
    return Musics
}
export const getMusic= (id)=>{
    return Musics.find(Music => Music.id === id)
}