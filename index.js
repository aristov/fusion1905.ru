{
    const randomizer = arr => arr[Math.floor(Math.random() * 100 % arr.length)]

    {
        const pathmap = document.getElementById('pathmap')
        window.onscroll = () => {
            const screenbottom = window.scrollY + window.innerHeight
            pathmap.style.opacity =
                Number(pathmap.offsetTop + pathmap.clientHeight / 2 < screenbottom) || null
        }
    }

    {
        const urlmap = [
            'https://pp.vk.me/c624430/v624430762/43f1d/lHoUGQxGtz8.jpg',
            'https://pp.vk.me/c624430/v624430762/43f49/-B37c4K48AM.jpg',
            'https://pp.vk.me/c624430/v624430762/43f40/2KwdVlkPIYQ.jpg',
            'https://pp.vk.me/c624430/v624430762/43f38/0C1MjVTpaPA.jpg',
            'https://pp.vk.me/c626927/v626927762/24f57/03-W9xjtNso.jpg',
            'https://pp.vk.me/c630431/v630431762/4d8d8/JB5gWRX5C4o.jpg',
            'https://pp.vk.me/c624430/v624430762/43f5b/1F2tOhwr82Y.jpg',
        ]
        const mainphoto = document.getElementById('mainphoto')
        if(mainphoto) mainphoto.src = randomizer(urlmap)
        window.onresize = function onresize() {
            mainphoto.height = mainphoto.width
        }
        onresize()
    }
}
