console.log("this is the real newpost button")

const updateBtn = document.querySelector('.btn-primary');

const title = document.querySelector('.blog-title')
const content = document.querySelector('.blog-content')

updateBtn.addEventListener('click', async () => {
    console.log ('this button works')
    const response = await fetch(`/api/blogs/`, {
        method: 'POST',
        body: JSON.stringify({
          title,
          content
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace(`/`);
      } else {
        alert('Failed to create post');
      }
    });