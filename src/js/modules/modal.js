export class Modal {
    constructor(options) {
        let defaultOptions = {
            isOpen: () => { },
            isClose: () => { },
        }
        this.options = Object.assign(defaultOptions, options);
        this.modal = document.querySelector('.modal');
        this.speed = 300;
        this.animation = 'fadeInUp';
        this.isOpen = false;
        this.modalContainer = false;
        this.selectedOption = false;
        this.previousActiveElement = false;
        this.fixBlocks = document.querySelectorAll('.fix-block');
        this.focusElements = [
            'a[href]',
            'input',
            'button',
            'select',
            'textarea',
            '[tabindex]'
        ];
        this.events();
    }

    events() {
        if (this.modal) {
            document.addEventListener('click', function (e) {
                const clickedElement = e.target.closest('[data-path]');
                if (clickedElement) {
                    e.preventDefault()
                    let target = clickedElement.dataset.path;
                    let animation = clickedElement.dataset.animation;
                    let speed = clickedElement.dataset.speed;
                    let selectedOption = clickedElement.dataset.option;
                    this.animation = animation ? animation : 'fade';
                    this.speed = speed ? parseInt(speed) : 300;
                    this.modalContainer = document.querySelector(`[data-target="${target}"]`);
                    this.selectedOption = selectedOption ? selectedOption : ''
                    this.open();
                    return;
                }

                if (e.target.closest('.modal__close') || e.target.closest('.thank-popup__btn')) {
                    e.preventDefault()
                    this.close();
                    return;
                }
            }.bind(this));

            window.addEventListener('keydown', function (e) {
                if (e.keyCode == 27) {
                    if (this.isOpen) {
                        this.close();
                    }
                }

                if (e.keyCode == 9 && this.isOpen) {
                    this.focusCatch(e);
                    return;
                }

            }.bind(this));

            this.modal.addEventListener('click', function (e) {
                if (!e.target.classList.contains('modal__container') && !e.target.closest('.modal__container') && this.isOpen) {
                    this.close();
                }
            }.bind(this));
        }
    }

    open() {
        this.previousActiveElement = document.activeElement;

        this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
        this.modal.classList.add('modal--is-open');
        this.disableScroll();

        this.modalContainer.classList.add('modal-open');
        this.modalContainer.classList.add(this.animation);

        this.modalContainer.classList.add(this.animation);

        const selectedOption = document.forms.order?.elements?.option
        if (selectedOption) {
            selectedOption.value = this.selectedOption
        }

        setTimeout(() => {
            this.options.isOpen(this);
            this.modalContainer.classList.add('animate-open');
            this.isOpen = true;
            this.focusTrap();
        }, this.speed);
    }

    close() {
        if (this.modalContainer) {
            this.options.isClose(this);
            this.modalContainer.classList.remove('animate-open');
            this.isOpen = false;
            this.focusTrap();

            setTimeout(() => {
                this.modalContainer.classList.remove(this.animation);
                this.modal.classList.remove('modal--is-open');
                this.modalContainer.classList.remove('modal-open');
                this.enableScroll();
            }, this.speed);
        }
    }

    focusCatch(e) {
        const focusable = this.modalContainer.querySelectorAll(this.focusElements);
        const focusArray = Array.prototype.slice.call(focusable);
        const focusedIndex = focusArray.indexOf(document.activeElement);

        if (e.shiftKey && focusedIndex === 0) {
            focusArray[focusArray.length - 1].focus();
            e.preventDefault();
        }

        if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
            focusArray[0].focus();
            e.preventDefault();
        }
    }

    focusTrap() {
        const focusable = this.modalContainer.querySelectorAll(this.focusElements);
        if (this.isOpen) {
            focusable[0].focus();
        } else {
            this.previousActiveElement.focus();
        }
    }

    disableScroll() {
        let pagePosition = window.scrollY;
        this.lockPadding();
        document.body.classList.add('disable-scroll');
        document.body.dataset.position = pagePosition;
        document.body.style.top = -pagePosition + 'px';
    }

    enableScroll() {
        let pagePosition = parseInt(document.body.dataset.position, 10);
        this.unlockPadding();
        document.body.style.top = 'auto';
        document.body.classList.remove('disable-scroll');
        window.scroll({ top: pagePosition, left: 0 });
        document.body.removeAttribute('data-position');
    }

    lockPadding() {
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        this.fixBlocks.forEach((el) => {
            el.style.paddingRight = paddingOffset;
        });
        document.body.style.paddingRight = paddingOffset;
    }

    unlockPadding() {
        this.fixBlocks.forEach((el) => {
            el.style.paddingRight = '0px';
        });
        document.body.style.paddingRight = '0px';
    }
}