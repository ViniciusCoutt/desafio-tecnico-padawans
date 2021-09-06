fetch('https://jsonplaceholder.typicode.com/posts').then(
  response => {
    response.json().then(
      data => {
        if (data.length > 0) {
          let contentTable = ""

          data.forEach((item) => {
            contentTable += "<tr>"
            contentTable += "<td>" + item.userId + "</td>"
            contentTable += "<td>" + item.title + "</td>"
            contentTable += "<td>" + item.body + "</td></tr>"

          })
          document.getElementById('data').innerHTML = contentTable
        }
      }
    )
  }
)