let blogs = []


function addBlog(event){
    event.preventDefault()

    let projectName = document.getElementById('input-project-name').value
    // let date = document.getElementById('input-end').valueAsDate
    let description = document.getElementById('input-description').value
    // let technology = document.getElementById()
    let image = document.getElementById('input-blog-image').files

    image = URL.createObjectURL(image[0])

    let blog = {
            projectName,
            // date,
            description,
            // technology,
            image
    }  
    

    blogs.push(blog)
    renderBlogs()                                  
    console.log(blogs);
}

function renderBlogs(){

    document.getElementById('contents').innerHTML = ''

    for (let i = 0; i < blogs.length; i++) { 
        
        document.getElementById('contents').innerHTML += `
        <div class="blog-list-item">
                  <div>
                      <img src="${blogs[i].image}" alt="" style="width:100%; border-radius: 10px;">
                  </div>
                  <a href="my-project-detail.html"><h3>${blogs[i].projectName}</h3></a>
                  <div>
                      durasi : 3 bulan
                  </div>
                  <div>
                      <p>${blogs[i].description}</p>
                  </div>
                  <div class="blog-techology">
                      <i class="fa-brands fa-js fa-2x"></i>
                      <i class="fa-brands fa-node fa-2x"></i>
                      <i class="fa-brands fa-github fa-2x"></i>
                      <i class="fa-brands fa-python fa-2x"></i>
                  </div>
                  <div class="blog-list-button">
                      <a href="">edit</a>
                      <a href="">delete</a>
                  </div>
              </div>`

    }
}