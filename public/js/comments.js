const commentBtn = document.querySelector('#submit-comment');


const username = document.querySelector('#comment-user')
const content = document.querySelector('#comment-text')

commentBtn.addEventListener('click', async () => {    
    const commentBody = content.value

    const response = await fetch(`/api/blogs/${commentBtn.dataset.id}/comments`, {
        method: 'POST',
        body: JSON.stringify({
          commentBody,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace(`/`);
      } else {
        alert('Failed to create comment');
      }
    });

    