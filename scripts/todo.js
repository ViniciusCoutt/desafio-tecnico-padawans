fetch('https://jsonplaceholder.typicode.com/todos').then(
  response => {
    response.json().then(
      data => {
        if (data.length > 0) {
          let contentTable = ""

          data.forEach((item) => {
            contentTable += "<tr>"
            contentTable += "<td>" + item.userId + "</td>"
            contentTable += "<td>" + item.title + "</td>"
            if (item.completed == true) {
              contentTable += "<td>" + "<input type='checkbox' checked>" + "</td></tr>"
            } else {
              contentTable += "<td>" + "<input type='checkbox'>" + "</td></tr>"
            }

          })
          document.getElementById('data').innerHTML = contentTable
        }
      }
    )
  }
)