export default function BlogDetails(data) {
    return `
        <div class="col-lg-8 m-15px-tb">
            <article class="article">
                <div class="article-img d-flex justify-content-center"><img id="blogImg" src="${data.image_url}"></div>
                <div class="article-title">
                    <h2 id="blogTitle">${data.title}</h2>
                    <div class="media">
                        <div class="avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" title="" alt="">
                        </div>
                        <div class="media-body">
                            <label id="blogAuthor">${data.author}</label>
                        </div>
                    </div>
                </div>
                <div class="article-content">
                    <h4 id="blogShortDesc">${data.short_description}</h4>
                    <p id="blogDesc">${data.description}</p>
                </div>
            </article>
        </div>
    `;
}