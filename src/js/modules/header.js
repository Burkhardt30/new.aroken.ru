export const header = () => {

    const HEADER = document.querySelector('.header')
    const MAIN = document.querySelector('.main')
    
    // Внутренний отступ мэйна, равный хэдеру ======================================================================================================

    window.addEventListener('load', setPageOffset)
    window.addEventListener('resize', setPageOffset)
    window.addEventListener('scroll', setPageOffset)

    function setPageOffset() {
        MAIN.style.paddingTop = HEADER.offsetHeight + 15 + 'px'
    }

    // Появление хэдера при скролле ======================================================================================================

    let lastPageYOffset = window.pageYOffset
    window.addEventListener('scroll', toggleHeader)

    function toggleHeader() {

        const newPageYOffset = window.pageYOffset
        
        if (newPageYOffset < HEADER.offsetHeight) {
            HEADER.classList.add('header--show')
            return false
        }

        if (newPageYOffset < lastPageYOffset) {
            HEADER.classList.add('header--show')
        } else {
            HEADER.classList.remove('header--show')
        }

        lastPageYOffset = newPageYOffset

    }
}