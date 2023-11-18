console.log("hi")

const updateBtn = document.querySelector('.btn-primary');
const deleteBtn = document.querySelector('#delete-post')


updateBtn.addEventListener('click', async () => {
    console.log ('this button works')
    const response = await fetch(`/api/post/${updateBtn.dataset.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          content,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace(`/post/${id}`);
      } else {
        alert('Failed to edit post');
      }
    });


   deleteBtn.addEventListener('click', async () => { 
      console.log('delete')
    
        const response = await fetch(`/api/blogs/${deleteBtn.dataset.id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          document.location.replace('/'); 
        } else {
          alert('Failed to delete post');
        }
      })

