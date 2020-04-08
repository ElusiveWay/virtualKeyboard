import Key from './key'
import keyCods from './keyCodeTable'
import keyList from './keyList'

document.body.style.fontSize = '1.5vw'
//Create Wrapper
const wrapper = global.document.createElement('div');
wrapper.className = 'wrapper'
wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'column'
global.document.body.appendChild(wrapper)
//Create Screen
const screen = global.document.createElement('textarea');
screen.className = 'screen'
screen.style.height = '200px'
screen.style.resize = 'none'
wrapper.appendChild(screen)
//Create Keyboard
const keyboard = global.document.createElement('div');
keyboard.className = 'keyboard'
keyboard.style.display = 'grid'
keyboard.style.padding = '5px'
keyboard.style.gridGap = '5px'
keyboard.style.gridTemplateColumns = "1fr ".repeat(15)
keyboard.style.gridTemplateRows = "1fr ".repeat(5)
wrapper.appendChild(keyboard)
//render All Keys
const keys = {}
keyList.forEach((v)=>{
    keys[v.key] = new Key({...v,query:'.keyboard'})
})
// Key press handlers
const clickDown = (e) => {
     e.preventDefault()
     for(let key in keyCods){
        if (e.keyCode == keyCods[key]){
            try {
                 keys[key].keyDown()
            }
            catch(e){
                new Error('There is no such key on the virtual keyboard')
            }
            
        }
     }
}
global.document.body.onkeydown = clickDown
const clickUp = (e) => {
    e.preventDefault()
     for(let key in keyCods){
        if (e.keyCode == keyCods[key]){
            try {
                keys[key].keyUp()
            }
            catch(e){
                console.warn('There is no such key on the virtual keyboard')
            }
        }
     }
}
global.document.body.onkeyup = clickUp