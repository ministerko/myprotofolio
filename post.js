document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');
  fetchPost(postId);
});

async function fetchPost(id) {
  try {
    const username = 'username';
    const password = 'password';

    // Create a base64 encoded string for the Authorization header
    const base64Credentials = btoa(`${username}:${password}`);
    
    const response = await fetch(`https://blog-e0kh.onrender.com/blog-posts/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Basic ${base64Credentials}`,
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const post = await response.json();

    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-content').innerHTML = post.content;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
}

