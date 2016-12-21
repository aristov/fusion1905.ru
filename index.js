{
    const pathmap = document.getElementById('pathmap')
    window.onscroll = () => {
        const halfscreen = window.scrollY + window.innerHeight / 2
        pathmap.style.opacity = Number(pathmap.offsetTop < halfscreen) || null
    }
}
