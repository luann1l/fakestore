fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('product-table-body');

    // Mostrar os 10 primeiros produtos
    for (let i = 0; i < 10; i++) {
      const product = data[i];
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>$${product.price}</td>
        <td>${product.category}</td>
        <td><img src="${product.image}" alt="${product.title}" style="height: 50px;"></td>
      `;

      tableBody.appendChild(row);
    }
  })
  .catch(error => console.error('Erro ao buscar produtos:', error));