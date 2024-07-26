// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event |event listener for the page to load
window.addEventListener('DOMContentLoaded', (event) => {
    // Get the HTML element with the ID 'blog-posts' and store
  const blogPostsContainer = document.getElementById('blog-posts');
//check if element exists
  if (blogPostsContainer) {
    // retrieval from localStorage
      const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
// loop
      blogPosts.forEach(post => {
        //create new content as div to represent a submit blog post
          const postEl = document.createElement('div');
          postEl.classList.add('post');
          //add post and set HTML to display accordingly |https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
          postEl.innerHTML = `
              <h2>${post.title}</h2>
              <p>${post.content}</p>
              <p>Posted by: ${post.username}</p>
          `;
          //append newly created div to the container
          blogPostsContainer.appendChild(postEl);
      });
  }
});