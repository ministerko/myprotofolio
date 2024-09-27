document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');
  fetchPost(postId);
});

async function fetchPost(id) {
  try {

    
    const response = await fetch(`https://blog-e0kh.onrender.com/blog-posts/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        
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

