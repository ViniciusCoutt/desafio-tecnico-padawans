fetch('https://jsonplaceholder.typicode.com/posts').then(
  response => {
    response.json().then(
      data => {
        if (data.length > 0) {
          let contentTable = ""

          data.forEach((item) => {
            contentTable += "<tr>"
            contentTable += "<td>" + item.userId + "</td>"
            contentTable += "<td>" + item.title + "</td></tr>"

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

