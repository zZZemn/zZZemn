const happyFace = document.querySelector('.happy')
const sadFace = document.querySelector('.sad')        
const scaredFace = document.querySelector('.scared')
const tiredFace = document.querySelector('.tired')
const angryFace = document.querySelector('.angry')
const coolFace = document.querySelector('.cool')
const funnyFace = document.querySelector('.funny')
const loveFace = document.querySelector('.love')

const happyText = document.querySelector('.happy-text')
const sadText = document.querySelector('.sad-text')        
const scaredText = document.querySelector('.scared-text')
const tiredText = document.querySelector('.tired-text')
const angryText = document.querySelector('.angry-text')
const coolText = document.querySelector('.cool-text')
const funnyText = document.querySelector('.funny-text')
const loveText = document.querySelector('.love-text')




happyFace.addEventListener('click', () => {
    if(sadFace.classList.contains('sad')){
        sadFace.classList.add('active')
        sadText.classList.add('active')
        happyFace.classList.remove('active')
        happyText.classList.remove('active')
    }
})


sadFace.addEventListener('click', () => {
    if(scaredFace.classList.contains('scared')){
        scaredFace.classList.add('active')
        scaredText.classList.add('active')
        sadFace.classList.remove('active')
        sadText.classList.remove('active')
    }
})

scaredFace.addEventListener('click', () => {
    if(tiredFace.classList.contains('tired')){
        tiredFace.classList.add('active')
        tiredText.classList.add('active')
        scaredFace.classList.remove('active')
        scaredText.classList.remove('active')
    }
})

tiredFace.addEventListener('click', () => {
    if(angryFace.classList.contains('angry')){
        angryFace.classList.add('active')
        angryText.classList.add('active')
        tiredFace.classList.remove('active')
        tiredText.classList.remove('active')
    }
})

angryFace.addEventListener('click', () => {
    if(coolFace.classList.contains('cool')){
        coolFace.classList.add('active')
        coolText.classList.add('active')
        angryFace.classList.remove('active')
        angryText.classList.remove('active')
    }
})

coolFace.addEventListener('click', () => {
    if(funnyFace.classList.contains('funny')){
        funnyFace.classList.add('active')
        funnyText.classList.add('active')
        coolFace.classList.remove('active')
        coolText.classList.remove('active')
    }
})

funnyFace.addEventListener('click', () => {
    if(loveFace.classList.contains('love')){
        loveFace.classList.add('active')
        loveText.classList.add('active')
        funnyFace.classList.remove('active')
        funnyText.classList.remove('active')
    }
})

loveFace.addEventListener('click', () => {
    if(happyFace.classList.contains('happy')){
        happyFace.classList.add('active')
        happyText.classList.add('active')
        loveFace.classList.remove('active')
        loveText.classList.remove('active')
    }
})






