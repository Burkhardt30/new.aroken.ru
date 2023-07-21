export const header = () => {

    const HEADER = document.querySelector('.header')
    const MAIN = document.querySelector('.main')
    
    // Внутренний отступ мэйна, равный хэдеру ======================================================================================================

    setPageOffset()
    window.addEventListener('resize', setPageOffset)
    window.addEventListener('scroll', setPageOffset)

    function setPageOffset() {
        MAIN.style.paddingTop = HEADER.offsetHeight + 'px'
    }

    // Появление хэдера при скролле ======================================================================================================

    let lastPageYOffset = window.pageYOffset
    
    toggleHeader()
    window.addEventListener('scroll', toggleHeader)

    function toggleHeader() {

        const newPageYOffset = window.pageYOffset
        
        if (newPageYOffset < HEADER.offsetHeight) {
            HEADER.classList.add('header--show')
            HEADER.classList.add('header--border-hidden')
            return false
        }

        if (newPageYOffset < lastPageYOffset) {
            HEADER.classList.add('header--show')
        } else {
            HEADER.classList.remove('header--show')
            HEADER.classList.remove('header--border-hidden')
        }

        lastPageYOffset = newPageYOffset

    }
}