console.log("hi")

const updateBtn = document.querySelector('.btn-primary');
const deleteBtn = document.querySelector('.btn-danger')

// const id = window.location.toString().split('/')[
//     window.location.toString().split('/').length - 1
//   ];

updateBtn.addEventListener('click', () => {
    console.log ('this button works')
    const response = fetch(`/api/post/${id}`, {
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

deleteBtn.addEventListener('click', () => {
    console.log('this button also works')
})


