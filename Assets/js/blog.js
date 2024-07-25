window.addEventListener('DOMContentLoaded', (event) => {
  const blogPostsContainer = document.getElementById('blog-posts');

  if (blogPostsContainer) {
      const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

      blogPosts.forEach(post => {
          const postEl = document.createElement('div');
          postEl.classList.add('post');
          postEl.innerHTML = `
              <h2>${post.title}</h2>
              <p>${post.content}</p>
              <p>Posted by: ${post.username}</p>
          `;
          blogPostsContainer.appendChild(postEl);
      });
  }
});