document.addEventListener('DOMContentLoaded', () => {
  fetchBlogPosts();
});

async function fetchBlogPosts() {
  try {
    const username = 'username';
    const password = 'password';
    
    // Create a base64 encoded string for the Authorization header
    const base64Credentials = btoa(`${username}:${password}`);
    
    const response = await fetch('https://blog-e0kh.onrender.com/blog-posts/?skip=1&limit=10', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Basic ${base64Credentials}`,
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const blogPosts = await response.json();

    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = ''; // Clear any existing content

    blogPosts.forEach((post) => {
      const createdAt = post.created_at
        ? new Date(post.created_at).toLocaleDateString()
        : 'Unknown';
      const updatedAt = post.updated_at
        ? new Date(post.updated_at).toLocaleDateString()
        : 'Unknown'; // Handle null

      const postElement = document.createElement('div');
      postElement.classList.add('project');

      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content.substring(0, 100)}... <a href="post.html?id=${post.id}" style="text-decoration:none; color:aqua;">Read More</a></p>
        <p><small>Published on: ${createdAt}</small></p>
        <p><small>Updated on: ${updatedAt}</small></p>
      `;

      blogPostsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }
}
