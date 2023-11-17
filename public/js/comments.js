console.log("this is the real newpost button")

const commentBtn = document.querySelector('#submit-comment');

// const id = document.querySelector('#exampleFormControlInput1')
const username = document.querySelector('#comment-user')
const content = document.querySelector('#comment-text')
 console.log(commentBtn)
commentBtn.addEventListener('click', async () => {    
    const commentBody = content.value
    console.log ('this button works')
    const response = await fetch(`/api/blogs/${commentBtn.dataset.id}/comments`, {
        method: 'POST',
        body: JSON.stringify({
          commentBody,
          // author_id
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

    