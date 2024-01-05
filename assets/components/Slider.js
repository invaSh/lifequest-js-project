 function  Slider(slides){

    let returnSlides = ''

    slides.forEach((slide, index) => {
        returnSlides+=
        `<div class="carousel-item ${index == 0? `active` : ''}">
            <img src="${slide}" class="d-block w-100" alt="...">
        </div>
        `
    })

    return returnSlides
}


function Indicators (slides){
    let returnButtons = ''

    for(let i =0; i<slides.length; i++){
        returnButtons += `
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" ${i ==0 ? `class="active" aria-current="true" aria-label="Slide ${i+1}"` : ''} aria-label="Slide ${i+1}">
        </button>
        `
    }

    return returnButtons
}

export{Slider, Indicators}

