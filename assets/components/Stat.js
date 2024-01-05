export default function Stat(target, desc){
    return `
        <div class="stat col-lg-4 col-12 mx-5 px-4 text-center">
            <h1 class="count" data-target="${target}">0</h1>
            <h5>${desc}</h5>
        </div>
    
    `
}