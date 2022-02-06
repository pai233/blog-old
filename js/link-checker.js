$(document).ready(function(){
    checkLink();
    (adsbygoogle = window.adsbygoogle || []).push({});
});
$(document).on('pjax:complete', function () {
    checkLink();   
    (adsbygoogle = window.adsbygoogle || []).push({});
});
async function checkLink(){
    //console.log("Running...")
    let link = document.getElementsByTagName('a');
    //console.log(link)
    for(var i=0;i<link.length;i++){
        if(link[i].href==="" || link[i].className==="gitter-open-chat-button")continue;
        if(!await checkLocalSite(link[i].href)){
            link[i].href = "https://go.pai233.top/#"+window.btoa(link[i].href)
            //console.log("edit.")
        }
    }
}
async function checkLocalSite(url){
    try{
        //console.log("check:",url)
        let reg = new RegExp(/\/\/(.*)\//g)
        let domain = reg.exec(url)[1].split('/')[0].split('.')
        //console.log(domain,domain[domain.length-2]+'.'+domain[domain.length-1])
        domain = {
            check: (domain[domain.length-2]+'.'+domain[domain.length-1]).split('/')[0],
            original: domain
        }
        //console.log(domain)
        if(domain.check==="pai233.top" || domain.original[0].split('/')[0]==="localhost:4000")return true;
        return false;
    }catch(err){
        return true;
    }
}