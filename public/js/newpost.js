const updateBtn = document.querySelector('#submit-post');


const title = document.querySelector('#exampleFormControlInput2')
const content = document.querySelector('#exampleFormControlTextarea1')

updateBtn.addEventListener('click', async () => {
    const blogTitle = title.value
    const blogContent = content.value
    
    const response = await fetch(`/newpost`, {
        method: 'POST',
        body: JSON.stringify({
          blogTitle,
          blogContent
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