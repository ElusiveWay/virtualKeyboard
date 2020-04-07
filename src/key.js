import keyCods from './keyCodeTable'
import style from './keyStyle'

class Key {
    constructor(props){
        this.key = props.key || 'a'
        this.defaultQuery = 'body'
        this.defaultScreenQuery = '.screen'
        this.screenQuery = props.screenQuery || this.defaultScreenQuery
        this.keyCode = keyCods[this.key.toLowerCase()]
        this.styleMod = {}
        this.styleDef = {...props.style}
        this.style = {...style, ...this.styleDef, ...this.styleMod} 
        this.text = props.text || this.key
        this.func = props.func || undefined
        this.id = `keyId${this.keyCode+[[new Date()][0].toLocaleString()+Math.random(1000000)][0].replace(/\D/g,'')}`
        this.render(props.query || this.defaultQuery)
    }
    render(query){
        //Key presets
        const element = document.createElement('div');
        element.className = this.id
        for (let prop in this.style){
            element.style[prop] = this.style[prop]
        }
        console.log(element.style.width.length)
        element.innerHTML = this.text.toUpperCase()
        //init handlers
        element.addEventListener('clickdown', this.keyDown) 
        element.addEventListener('clickup', this.keyDown) 
        /*keyup & keydown inside index.js*/
        //Append to Html
        global.document.querySelector(query).appendChild(element)
    }
    remove(){
        global.document.querySelector(`.${this.id}`).style.visibility = 'hidden'
    }
    putText(key){
        global.document.querySelector(this.screenQuery).value += key
    }
    keyDown(e){
        return (this.func)?this.func():(()=>{
            this.styleMod = {
                backgroundColor: 'darkblue'
            }
            this.update()
            this.putText(this.text)
        })()
    }
    keyUp(e){
        this.styleMod = {}
        this.update()
    }
    update(){
        this.style = {...style, ...this.styleDef, ...this.styleMod}  
        for (let prop in this.style){
            document.querySelector(`.${this.id}`).style[prop] = this.style[prop]
        }
    }
}

export default Key