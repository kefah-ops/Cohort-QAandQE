fetch("http://localhost:5000/products")
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById("product-list");

    data.forEach(product => {
      const listItem = document.createElement("li");
      listItem.textContent = `${product.name} - $${product.price}`;  // Corrected here
      productList.appendChild(listItem);
    });
  })
  .catch(error => console.error("Error fetching data:", error));
