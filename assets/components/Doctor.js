export default function Doctor(img, doc_name, department){
    return `
    <div class="card col-lg-4 col-12 d-flex mt-5">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body flex-fill d-flex flex-column">
            <h5 class="card-title">${doc_name}</h5>
            <p class="card-text">${department}</p>
        </div>
    </div>
    
    `
}