export default function Accordion(department, services){

    const serviceItems = services.map(service => `<h5 class="service mb-3"><i class="bi bi-cursor-fill"></i>${service.service_name}</h5>`).join('');

    return  `
    <div class="individual mb-3">
        <h3 class="department">${department}</h3>
        <div class="answer">
            ${serviceItems}
            <a href="#${department}" class="text-dark">View More</a>
        </div> 
    </div>
    `
}
