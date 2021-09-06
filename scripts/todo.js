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

          $(document).ready(function () {
            $('#tbl').DataTable({
              "language": {
                "lengthMenu": "Mostrando _MENU_ registros por página",
                "zeroRecords": "Nada encontrado",
                "info": "Mostrando página _PAGE_ de _PAGES_",
                "infoEmpty": "Nenhum registro disponível",
                "infoFiltered": "(filtrado de _MAX_ registros no total)"
              }
            });
          });


        }
      }
    )
  }
)