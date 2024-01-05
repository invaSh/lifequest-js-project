export default function BlogPost (img_url, blog_title, blog_text, postId){
    return `
    <div class="blog-individual mt-4 col-lg-6 col-12">
    <div class="card">
      <div class="row no-gutters d-flex align-items-stretch">
        <div class="col-md-4">
          <img src="${img_url}" class="card-img" alt="Card Image">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${blog_title}</h5>
            <p class="card-text">${blog_text}</p>
            <a href="/blog-details.html?id=${postId}" class="text-decoration-underline">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
}