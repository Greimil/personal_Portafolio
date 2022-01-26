window.addEventListener("load",()=>{
    const btn_menu = document.querySelector(".btn-menu")
    
    
    if(btn_menu){
        btn_menu.addEventListener("click",()=>{
            const menu_items = document.querySelector(".menu-items")
            menu_items.classList.toggle("show")
        })
    }

    const links = document.querySelectorAll(".a-nav-link")
    
    links.forEach(link => {
        const menu_items = document.querySelector(".menu-items")
        link.addEventListener("click",()=> menu_items.classList.toggle("show"))
    })
    
})




