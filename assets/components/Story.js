
export default function Story ( storyTitle, storyDoctor){
    return `
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">${storyTitle}</h5>
                <p class="card-text">${storyDoctor}</p>
            </div>
    </div>

    `
}
