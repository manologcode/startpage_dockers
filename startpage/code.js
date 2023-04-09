get_status('apidocker')
document.getElementById('img-apidocker').addEventListener('dblclick', get_list_dockers)

const buttons = document.getElementById("buttons")
services.forEach(item => {
    buttons.insertAdjacentHTML('beforeend', elementButton(item))
    img_label = document.getElementById(`img-${item.name}`).addEventListener('dblclick', toggle_status_docker)
    get_status(item.name)
})
document.getElementById("title").innerHTML=title
document.getElementById("main_img").src=main_img


function elementButton(data) {
    const { name, description, port_app, color = false, url_logo = false } = data
    const css_color = color ? color : "#7d7797"
    let url = window.location.origin + port_app
    return (
        `<div>
            <a href="${url}" id="${name}" class="btn" style='background-color:${css_color}'>
                <h4>${name}</h4>
            </a>
            <img id="img-${name}" class="img-icon" src=${url_logo} onerror="javascript:this.src='images/default.png'"/>
        <div>
        `
    )
}

function toggle_status_docker(){
    name_service=this.id.split('-')[1]
    url = url_api + "toggle/" + name_service
    fetch(url)
        .then(response => response.json())
        .then(status => {
            console.log(status)
            toggle_status_draw(status, name_service)
    })
}

function get_status(name_service){
    url = url_api + "status/" + name_service
    fetch(url)
        .then(response => response.json())
        .then(status => {
            toggle_status_draw(status, name_service)
    })
}

function get_list_dockers(){
    url = url_api + "list" 
    window.open(url, '_blank')
}

function toggle_status_draw(status, name_service){
    if (!document.getElementById(`img-${name_service}`))
        return null
    img_status = document.getElementById(`img-${name_service}`)
    img_status.classList.remove('exited', 'running', "error")
    img_status.classList.add(status)

    if (!document.getElementById(`${name_service}`))
        return null
    btn_status = document.getElementById(`${name_service}`)
    btn_status.classList.remove('exited', 'running', "error")
    btn_status.classList.add(status)
    if (status=='error'){
        btn_status.href="#"
        img_status.removeEventListener('dblclick', toggle_status_docker)
    }
}