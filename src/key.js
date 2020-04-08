import keyCods from './keyCodeTable'
import style from './keyStyle'

class Key {
    constructor(props){
        this.key = props.key || 'a'
        this.defaultQuery = 'body'
        this.defaultScreenQuery = '.screen'
        this.screenQuery = props.screenQuery || this.defaultScreenQuery
        this.screen = global.document.querySelector(this.screenQuery)
        this.keyCode = keyCods[this.key.toLowerCase()]
        this.styleMod = {}
        this.styleDef = {...props.style}
        this.style = {...style, ...this.styleDef, ...this.styleMod} 
        this.text = props.text || this.key
        this.rutext = (props.rutext)?props.rutext:undefined
        this.func = (props.func)?this[props.func]:undefined
        this.limiter = false
        this.id = `keyId${this.keyCode+[[new Date()][0].toLocaleString()+Math.random(1000000)][0].replace(/\D/g,'')}`
        this.render(props.query || this.defaultQuery)
        //bind
        this.keyDown = this.keyDown.bind(this)
        this.keyUp = this.keyUp.bind(this)
        this.putText = this.putText.bind(this)
    }
    render(query){
        //Key presets
        const element = document.createElement('div');
        element.className = this.id
        for (let prop in this.style){
            element.style[prop] = this.style[prop]
        }
        console.log(element.style.width.length)
        element.innerHTML = (localStorage.getItem('ru') === 'true' && this.rutext!==undefined)?this.rutext.toUpperCase():this.text.toUpperCase()
        //init handlers
        element.addEventListener('mousedown', this.keyDown.bind(this)) 
        element.addEventListener('mouseup', this.keyUp.bind(this)) 
        element.addEventListener('mouseout', this.keyUp.bind(this)) 
        /*keyup & keydown inside index.js*/
        //Append to Html
        global.document.querySelector(query).appendChild(element)
        this.elem = global.document.querySelector(`.${this.id}`)
        if(this.keyCode === 20 && localStorage.getItem('caps') === 'true') this.changeColor('#DD0','black')
    }
    remove(){
        global.document.querySelector(`.${this.id}`).style.visibility = 'hidden'
    }
    putText(e,key = this.keyCode, symb = ''){
        let text = (localStorage.getItem('ru') === 'true' && this.rutext !== undefined)?this.rutext:this.text
        if (/[a-zA-Zа-яА-Я]/.test(text)) {
            let upperState = false
            if (localStorage.getItem('caps') === 'true') upperState=!upperState
            if (localStorage.getItem('shift') === 'true') upperState=!upperState
            text = (upperState)?text.toUpperCase():text
            console.log(upperState.toString())
        }
        const el = this.screen
        el.focus()
        const pos = this.getCursorPosition(el)
        let newText = el.value.split('')
        newText.splice(pos,0,(symb === '')?text: symb)
        el.value = newText.join('')
        this.setCaretPosition(el, pos+1)
    }
    keyDown(e){
        global.document.querySelector(this.screenQuery).focus()
        return (this.func)?this.func():(()=>{
            this.styleMod = {
                backgroundColor: 'darkblue'
            }
            this.update()
            this.putText(e)
        })()
    }
    keyUp(e){
        if(this.keyCode === 20 && localStorage.getItem('caps') === 'true') return false
        if(this.keyCode === 16) localStorage.setItem('shift', 'false')
        this.styleMod = {}
        this.update()
    }
    update(){
        this.style = {...style, ...this.styleDef, ...this.styleMod}  
        for (let prop in this.style){
            document.querySelector(`.${this.id}`).style[prop] = this.style[prop]
        }
    }
    // special funcs
    tab(){
        this.changeColor('darkblue')
        this.putText(event,undefined,'\t')
    }
    capslock(){ 
        this.changeColor('#DD0','black')
        localStorage.setItem('caps',(localStorage.getItem('caps') === 'false' || localStorage.getItem('caps') === null)?true:false)
    }
    shift(){
        this.changeColor('#DD0','black')
        localStorage.setItem('shift',(localStorage.getItem('shift') === 'false' || localStorage.getItem('shift') === null)?true:false)
        this.checkSwith()
    }
    ctrl(){
        this.changeColor('#DD0','black')
    }
    wind(){
        this.changeColor('#DD0','black')
    }
    alt(){
        this.changeColor('#DD0','black')
        this.checkSwith()
    }
    enter(){
        this.changeColor('#DD0','black')
    }
    delet(){
        this.changeColor('darkred')
        const el = this.screen
        const pos = this.getCursorPosition(el)
        let newText = el.value.split('')
        newText.splice(pos,1)
        el.value = newText.join('')
        this.setCaretPosition(el,pos)
    }
    win(){
        this.changeColor('#DD0','black')
    }
    back(){
        this.changeColor('darkred')
        const el = this.screen
        const pos = this.getCursorPosition(el)
        let newText = el.value.split('')
        newText.splice(pos-1,1)
        el.value = newText.join('')
        this.setCaretPosition(el,pos-1)
    }
    left(){
        this.changeColor('darkgreen')
        const el = this.screen
        this.setCaretPosition(el,this.getCursorPosition(el)-1)
    }
    right(){
        this.changeColor('darkgreen')
        const el = this.screen
        this.setCaretPosition(el,this.getCursorPosition(el)+1)
    }
    up(){
        this.changeColor('darkgreen')
        const el = this.screen
        this.setCaretPosition(el,0)
    }
    down(){
        this.changeColor('darkgreen')
        const el = this.screen
        this.setCaretPosition(el,el.value.length)
    }
    changeColor(back, color = 'white'){
        this.styleMod = {
            backgroundColor: back,
            color: color
        }
        this.update()
    }
    checkSwith(){
       if (Object.keys(global.keyes['shift'].styleMod).length !==0 && Object.keys(global.keyes['alt'].styleMod).length){
           global.keyes['shift'].keyUp()
           global.keyes['alt'].keyUp()
           localStorage.setItem('ru',(localStorage.getItem('ru') === 'false' || localStorage.getItem('ru') === null)?true:false)
           for (let key in global.keyes){
               let k = global.keyes
                if (k[key].rutext!==undefined){
                    console.log(k[key])
                    k[key].elem.innerHTML = (localStorage.getItem('ru') === 'true')?k[key].rutext.toUpperCase():k[key].text.toUpperCase()
                }
           }
       }
    }
    getCursorPosition( ctrl ) {
        var CaretPos = 0;
        if ( document.selection ) {
            ctrl.focus ();
            var Sel = document.selection.createRange();
            Sel.moveStart ('character', -ctrl.value.length);
            CaretPos = Sel.text.length;
        } else if ( ctrl.selectionStart || ctrl.selectionStart == '0' ) {
            CaretPos = ctrl.selectionStart;
        }
        return CaretPos;
    }
    setCaretPosition (elem, caretPos) {
        if (document.selection) { 
            elem.focus ();
            var range = document.selection.createRange ();
            range.moveStart ('character', -elem.value.length);
            range.moveStart ('character', caretPos);
            range.moveEnd ('character', 0);
            range.select ();
        } else if (elem.selectionStart || elem.selectionStart == '0') { 
            elem.selectionStart = caretPos;
            elem.selectionEnd = caretPos;
            elem.focus ();
        }
    }
}

export default Key


