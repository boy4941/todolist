const onClick=()=>{

    texta=document.getElementById("add")
    text=texta.value;
  
     
    const li=document.createElement("li");
    const div=document.createElement("div");
    const button=document.createElement("button");
    const p=document.createElement("p")
    const input=document.createElement("input");

    div.id="aa"
    input.id="input"
    p.id="p"
    button.id="button"
    li.appendChild(div);
    div.appendChild(input);
    div.appendChild(p);
    document.getElementById("add-list").appendChild(li);
    div.appendChild(button);
    button.textContent="삭제";

    input.setAttribute("type",'checkbox');

    button.addEventListener("click",()=>{
        const deletet=button.closest('li')
        document.getElementById("add-list").removeChild(deletet)
    })

    p.textContent=text;

    input.addEventListener("change",(e)=>{
    if(input.checked){
        p.style.textDecorationLine="line-through"
    }else{
        p.style.textDecorationLine="none"
    }
    })

}

document.getElementById("addbutton").addEventListener("click",()=>onClick())