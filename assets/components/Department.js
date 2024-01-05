export default function Department(data, departmentName) {
    const departmentData = data.filter(service => service.service_department === departmentName);

    const departmentHTML = `
        <div class="row mt-5">
            <h3 class="title text-center mb-5" id="${departmentName}">${departmentName}</h3>
            ${generateServiceCards(departmentData)}
        </div>
    `;

    return departmentHTML;
}

function generateServiceCards(services) {
    const serviceCardsHTML = services.map(service => `
        <div class="card border-light col-lg-6 col-12 mb-3">
            <div class="card-header">${service.service_name}</div>
            <div class="card-body">
                <p class="card-text">${service.service_description}</p>
            </div>
        </div>
    `).join('');

    return serviceCardsHTML;
}