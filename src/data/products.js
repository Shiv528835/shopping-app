const products = [
  // ===== T-Shirts =====
  {
    id: 1,
    category: "T-Shirts",
    name: "Classic White Tee",
    price: 20,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    category: "T-Shirts",
    name: "Black Graphic Tee",
    price: 25,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    category: "T-Shirts",
    name: "Striped Navy T-Shirt",
    price: 22,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 10,
    category: "T-Shirts",
    name: "Red Polo Tee",
    price: 28,
    image: "https://www.swagshirts99.com/wp-content/uploads/2015/05/red-polo-tee.jpg"
  },

  // ===== Jeans =====
  {
    id: 4,
    category: "Jeans",
    name: "Slim Fit Jeans",
    price: 40,
    image: "https://assets.woolworthsstatic.co.za/Slim-Fit-Jeans-BLUE-507601166.jpg?V=E52E&o=eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvcHJvZHVjdHMvaGVyby8yMDIzLTEyLTE5LzUwNzYwMTE2Nl9CTFVFX2hlcm8uanBnIn0&"
  },
  {
    id: 5,
    category: "Jeans",
    name: "Regular Fit Denim",
    price: 42,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    category: "Jeans",
    name: "Ripped Blue Jeans",
    price: 50,
    image: "https://media-photos.depop.com/b0/31645156/1140961110_2135757c1f2f48d69e9ca3b692f6b39e/P0.jpg"
  },
  {
    id: 11,
    category: "Jeans",
    name: "Black Skinny Jeans",
    price: 45,
    image: "https://hips.hearstapps.com/bpc.h-cdn.co/assets/16/50/1481757514-hm-shaping-skinny-jeans-black.jpg%3fcrop%3d1.0xw:1xh%3bcenter%2ctop%26resize%3d768:*"
  },

  // ===== Sneakers =====
  {
    id: 7,
    category: "Sneakers",
    name: "White Low-Tops",
    price: 60,
    image: "https://tse2.mm.bing.net/th/id/OIP.5-dey9rnf9hsCOkmo9eU1QHaJi?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 8,
    category: "Sneakers",
    name: "Black Runners",
    price: 65,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 9,
    category: "Sneakers",
    name: "High-Top Trainers",
    price: 70,
    image: "https://tse1.mm.bing.net/th/id/OIP.dgH6ZHHfHS8_qbyokfLuuQHaJK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 12,
    category: "Sneakers",
    name: "Red Sports Shoes",
    price: 68,
    image: "https://th.bing.com/th/id/OIP.sOXX4QE7VQq-Y7ygzbzIegHaF1?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },

  // ===== Jackets =====
  {
    id: 13,
    category: "Jackets",
    name: "Leather Jacket",
    price: 120,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 14,
    category: "Jackets",
    name: "Denim Jacket",
    price: 80,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSYy9W1LecNu8KBXu2czHirRUDSmEmjQnOc_uGt4ZLd7jSktNrnSVw1-RRy8WcNT4fd0JiKDQWXYP0PsTBzNwicEBefHzmJ5lvOIu9VleEyRtedc5ShYZsT_A"
  },

  // ===== Hoodies =====
  {
    id: 15,
    category: "Hoodies",
    name: "Grey Hoodie",
    price: 50,
    image: "data:image/webp;base64,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"
  },
  {
    id: 16,
    category: "Hoodies",
    name: "Black Zip Hoodie",
    price: 55,
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQHr61rcLxgTpJeymGq5LVz-FQUzwjfnur8rRaFpFhvwPIRH8gL3QcU-NcjFGaH_m7Pyv2pI1KYgk-zfkV-oUbyOQQn6S2xt8Uc5DIdf3rBdTfXdX6k9DcC"
  },

  // ===== Accessories =====
  {
    id: 17,
    category: "Accessories",
    name: "Baseball Cap",
    price: 15,
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQP0OPizi5o-NfKo7qZXA8ZklVYGz6LRAqsdF6BGgVE4GrHKoPYuq-Q8Z0BQs0ZBEERBp8u7FpCAuQScijxTeTpW-oBdXhAE5fzBA_36oXQxfqvbGNf8peuLjQF"
  },
  {
    id: 18,
    category: "Accessories",
    name: "Leather Belt",
    price: 25,
    image: "https://blingqueen.in/cdn/shop/files/02758c7e-58f7-440b-9d9c-4b1c78fe282e_720x.jpg?v=1753696235https://blingqueen.in/cdn/shop/files/02758c7e-58f7-440b-9d9c-4b1c78fe282e_720x.jpg?v=1753696235"
  }
];

export default products;
