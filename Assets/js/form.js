// event listener for submit after blog form completed| https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
document.getElementById('blog-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // values for form collection|https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  //empty field |https://stackoverflow.com/questions/9056112/javascript-shorthand-if-else-and-returning
  if (!username || !title || !content) {
    alert('Please fill out all fields.');
    return;
  }
  // grouping for object json parse 
  const blogPost = {
    username,
    title,
    content,
  };
  // retrieve existing blog posts from localStorage |https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
  let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  // add new post to array |https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  blogPosts.push(blogPost);
  // store updated array |https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  // redirect user to next page html to view | https://developer.mozilla.org/en-US/docs/Web/API/Location/href
  window.location.href = 'blog.html';
});

