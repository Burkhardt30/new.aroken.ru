const smoothScrollToAnchor = (e) => {

    const target = e.target.closest('[href^="#"]')

    if (!target) return

    const id = target.getAttribute('href')

    if (id.length == 1) return

    e.preventDefault()

    const headerTopHeight = 45
    const top = document.querySelector(id).getBoundingClientRect().top - headerTopHeight + window.pageYOffset

    window.scrollTo({
        top: top,
        behavior: 'smooth'
    })
}

export default smoothScrollToAnchor