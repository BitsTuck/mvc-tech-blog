console.log("this is the real newpost button")

const updateBtn = document.querySelector('.btn-primary');

// const id = document.querySelector('#exampleFormControlInput1')
const title = document.querySelector('#exampleFormControlInput2')
const content = document.querySelector('#exampleFormControlTextarea1')

updateBtn.addEventListener('click', async () => {
    console.log ('this button works')
    const response = await fetch(`/api/blogs/`, {
        method: 'POST',
        body: JSON.stringify({
          // id,
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