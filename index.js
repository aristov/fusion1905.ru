{
    const pathmap = document.getElementById('pathmap')
    window.onscroll = () => {
        const half = window.innerHeight / 2
        pathmap.style.opacity = Number(pathmap.offsetTop < window.scrollY + half) || null
    }
}
