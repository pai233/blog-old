$(document).on('pjax:complete', function () {
    if(window.location.pathname=='/server-list/'){
        checkID()
    }
    if(document.domain==="4everland.cdn.blog.pai233.top"){
        document.getElementById("4everland-footer").innerText="Accelerated & hosted by 4EVERLAND";
    }
});

$(document).ready(()=>{
    if(document.domain==="4everland.cdn.blog.pai233.top"){
        document.getElementById("4everland-footer").innerText="Accelerated & hosted by 4EVERLAND";
    }
})
function checkID(){
    console.log("LOAD DONE.")
    $.ajax({
        url: "/site_id.txt",
        success: (data)=>{
            if(!(data instanceof Object))data = JSON.parse(data)
            let get_id = document.domain.replace(/\//g,"_").replace(/\./g,"_").replace(/\-/g,"_").replace(/\:/g,"_").replace(/4everland/g,"_everland")//去除特殊符号
            console.log(data[get_id])
            if(data[get_id]===undefined)return;
            document.getElementById(data[get_id]).insertAdjacentHTML("beforeend","（当前）")
        },
        error: ()=>{
            swal({
                type: 'error',
                title: 'Get Site ID Failed',
                text: '无法获取Site ID'
            })
        }
    })
    console.log("ajax done.")  
}