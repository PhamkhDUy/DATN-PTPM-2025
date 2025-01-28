const products = [
  {
    id: 1,
    title: "Giày thể thao nam",
    price: 500000,
    image: "assets/images/giay1.jpg",
    category: "New",
    description: "Giày thể thao nam chất lượng cao.",
    soLuong: 110,
    trangThai: "Còn hàng"
  },
  {
    id: 111,
    title: "Giày thể thao nam",
    price: 500000,
    image: "assets/images/giay1.jpg",
    category: "New",
    description: "Giày thể thao nam chất lượng cao.",
    soLuong: 110,
    trangThai: "Còn hàng"
  },
  {
    id: 112,
    title: "Giày thể thao nam",
    price: 500000,
    image: "assets/images/giay1.jpg",
    category: "New",
    description: "Giày thể thao nam chất lượng cao.",
    soLuong: 110,
    trangThai: "Còn hàng"
  },
  {
    id: 113,
    title: "Giày thể thao nam",
    price: 500000,
    image: "assets/images/giay1.jpg",
    category: "New",
    description: "Giày thể thao nam chất lượng cao.",
    soLuong: 110,
    trangThai: "Còn hàng"
  },
  {
    id: 114,
    title: "Giày thể thao nam",
    price: 500000,
    image: "assets/images/giay1.jpg",
    category: "New",
    description: "Giày thể thao nam chất lượng cao.",
    soLuong: 110,
    trangThai: "Còn hàng"
  },
  {
    id: 115,
    title: "Giày thể thao nam",
    price: 500000,
    image: "assets/images/giay1.jpg",
    category: "New",
    description: "Giày thể thao nam chất lượng cao.",
    soLuong: 110,
    trangThai: "Còn hàng"
  },
  {
    id: 116,
    title: "Giày thể thao nam",
    price: 500000,
    image: "assets/images/giay2.jpg",
    category: "New",
    description: "Giày thể thao nam chất lượng cao.",
    soLuong: 110,
    trangThai: "Còn hàng"
  },
  {
    id: 117,
    title: "Giày thể thao nam",
    price: 500000,
    image: "assets/images/giay2.jpg",
    category: "New",
    description: "Giày thể thao nam chất lượng cao.",
    soLuong: 110,
    trangThai: "Còn hàng"
  },
  {
    id: 118,
    title: "Giày thể thao nam",
    price: 500000,
    image: "assets/images/giay2.jpg",
    category: "New",
    description: "Giày thể thao nam chất lượng cao.",
    soLuong: 110,
    trangThai: "Còn hàng"
  },
  {
    id: 2,
    title: "Giày chạy bộ",
    price: 700000,
    image: "assets/images/giay2.jpg",
    category: "Featured",
    description: "Giày chạy bộ nhẹ, bền bỉ.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 222,
    title: "Giày chạy bộ",
    price: 700000,
    image: "assets/images/giay2.jpg",
    category: "Featured",
    description: "Giày chạy bộ nhẹ, bền bỉ.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 223,
    title: "Giày chạy bộ",
    price: 700000,
    image: "assets/images/giay2.jpg",
    category: "Featured",
    description: "Giày chạy bộ nhẹ, bền bỉ.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 224,
    title: "Giày chạy bộ",
    price: 700000,
    image: "assets/images/giay2.jpg",
    category: "Featured",
    description: "Giày chạy bộ nhẹ, bền bỉ.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 225,
    title: "Giày chạy bộ",
    price: 700000,
    image: "assets/images/giay2.jpg",
    category: "Featured",
    description: "Giày chạy bộ nhẹ, bền bỉ.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 226,
    title: "Giày chạy bộ",
    price: 700000,
    image: "assets/images/giay2.jpg",
    category: "Featured",
    description: "Giày chạy bộ nhẹ, bền bỉ.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 227,
    title: "Giày chạy bộ",
    price: 700000,
    image: "assets/images/giay2.jpg",
    category: "Featured",
    description: "Giày chạy bộ nhẹ, bền bỉ.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 228,
    title: "Giày chạy bộ",
    price: 700000,
    image: "assets/images/giay2.jpg",
    category: "Featured",
    description: "Giày chạy bộ nhẹ, bền bỉ.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 229,
    title: "Giày chạy bộ",
    price: 700000,
    image: "assets/images/giay2.jpg",
    category: "Featured",
    description: "Giày chạy bộ nhẹ, bền bỉ.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 3,
    title: "Giày đá bóng",
    price: 800000,
    image: "assets/images/giay3.jpg",
    category: "New ",
    description: "Giày đá bóng chuyên nghiệp.",
    soLuong: 110,
    trangThai: "Còn hàng"
  },
  {
    id: 4,
    title: "Giày sneaker",
    price: 1200000,
    image: "assets/images/giay4.jpg",
    category: "Featured ",
    description: "Giày sneaker thời trang.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 5,
    title: "Giày lười nam",
    price: 600000,
    image: "assets/images/giay5.jpg",
    category: "New ",
    description: "Giày lười nam thoải mái.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 6,
    title: "Giày cao gót nữ",
    price: 900000,
    image: "assets/images/giay6.jpg",
    category: "New ",
    description: "Giày cao gót nữ thanh lịch.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 7,
    title: "Giày boot nữ",
    price: 1100000,
    image: "assets/images/giay7.webp",
    category: "Featured ",
    description: "Giày boot nữ phong cách.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 8,
    title: "Giày cổ cao nữ",
    price: 1100000,
    image: "assets/images/giay8.jpg",
    category: "Featured ",
    description: "Giày cổ cao nữ phong cách.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 9,
    title: "Giày cao gót nữ",
    price: 1100000,
    image: "assets/images/giay9.jpg",
    category: " Promotion ",
    description: "Giày cao gót nữ phong cách.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 10,
    title: "Giày lười",
    price: 1100000,
    image: "assets/images/giay10.jpg",
    category: "Promotion",
    description: "Giày lười phong cách.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 11,
    title: "Giày cao gót nữ",
    price: 1100000,
    image: "assets/images/giay9.jpg",
    category: "Promotion",
    description: "Giày cao gót nữ phong cách.",
    soLuong: 110,
    trangThai: "Còn hàng"

  },
  {
    id: 12,
    title: "Giày lười",
    price: 1100000,
    image: "assets/images/giay10.jpg",
    category: "Promotion",
    description: "Giày lười phong cách.",
    soLuong: 110,
    trangThai: "Còn hàng"
  },
];
