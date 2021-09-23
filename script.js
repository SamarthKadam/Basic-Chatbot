const inptext=document.getElementById('textmg');
const sendbutton=document.querySelector('.png')
const anime=document.querySelector('.msgloading');
const contentsection=document.querySelector('.content');
const userInfo=[];
let msginfo;
console.log(userInfo);


///This is initial message that happens first
///message is the class and theme of the bot ,user is the class of the usermessages and it has its theme

function Animation()
{
    const initial=setTimeout(function(){

        anime.classList.remove('dis');
    }, 1000);
    setTimeout(function(){
        anime.classList.add('dis');
        clearTimeout(initial);
        
    }, 3000);
}




function addusersMsg(msg){
    let message=`<div class="need"><div class="user">${msg}</div></div>`;
    contentsection.insertAdjacentHTML('beforeend',message);
    let x=0;
    x++;
    if(x===5)
    {
    window.scrollTo(0,100);
    }
    Animation();
}


function addHello(){
    const html=`<div class="message">Hello, how may I help you ?</div>`///message
    contentsection.insertAdjacentHTML('beforeend',html);
}

const initial=setTimeout(function(){

    anime.classList.remove('dis');
}, 1000);
setTimeout(function(){
    anime.classList.add('dis');
    clearTimeout(initial);
     addHello();
    
}, 3000);

sendbutton.addEventListener('click',function(){
    msginfo=inptext.value;
    addusersMsg(msginfo)

    
})


















///1st step is to hover the element and message the  user about ANY STUFF   REquired?
///Bot should ask the user that =Hello ,How may I help you
//So there are two way two types of text if bot text the color of the inserting adjacent html should be differnt color and user should be different and even about that small arrow