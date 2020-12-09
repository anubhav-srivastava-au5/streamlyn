const n=prompt("enter value of n (number of image)");
for(let i=1;i<=n;i++)
{
    const x = document.getElementsByTagName('img')[i];
    let w=x.clientWidth;
    let h=x.naturalHeight;
    if(w>=500 && h>=150){
        const div = document.createElement("div");
        const iframe = document.createElement("iframe");
        div.style.marginTop="-90px";
        iframe.setAttribute('style',`height:90px;width:${w}px;border:0;background-color:red;overflow:hidden;`)
        div.append(iframe);

        x.insertAdjacentElement('afterend',div);
        console.log("hi");

        iframe.contentDocument.body.addEventListener('click',()=>{
            iframe.setAttribute('style',`background-color:blue;height:90px;width:${w}px;border:none;overflow:hidden`);
        })
    }

}
