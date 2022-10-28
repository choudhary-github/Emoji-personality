
const myEmojis = ["👨‍💻", "🧛‍♀️" ,"🥗"];
const emojiContainer = document.getElementById("emoji-container");
const pushBtn = document.getElementById("push-btn")
const emojiInput = document.getElementById("emoji-input")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")


pushBtn.addEventListener("click", function(){
    let value = emojiInput.value
    if(value){
        myEmojis.push(value)
    }
    else{
        myEmojis
    }
    // console.log(myEmojis);
    render()
})
popBtn.addEventListener("click", function(){
    myEmojis.pop()
    render()
})

unshiftBtn.addEventListener("click", function(){
    let value = emojiInput.value
    if(value){
        myEmojis.unshift(value)
    }
    else{
        myEmojis
    }
    // console.log(myEmojis);
    render()
})
shiftBtn.addEventListener("click", function(){
    myEmojis.shift()
    render()
})

function render(){
    emojiContainer.innerHTML = ""
    for(let i=0; i < myEmojis.length; i++){
        const emoji = document.createElement('span');
        emoji.textContent = myEmojis[i];
        emojiContainer.append(emoji);
        emojiInput.value = "";
    }
}
render()