const cars = [
  {
    id: 1,
    image: "image/download (1).jpeg",
    type: "ghost",
    name: "Rolls-Royce Ghost 2021",
    content: "Nền tảng của Rolls-Royce Ghost mới là cấu trúc nhôm linh hoạt giống như Phantom và Cullinan. Trên mẫu xe Ghost mới. các chi tiết như vách ngăn, sàn xe, bậc cửa và thanh khung dầm xe được tính toán và thiết kế lại để đáp ứng với nhu cầu của những khách hàng thượng lưu của hãng xe Anh quốc, vừa đảm bảo thú vị khi lái nhưng cũng phải thoải mái.",
    qty : 0
  },
  {
    id: 2,
    image: "image/Rolls-Royce-Ghost-Black-Badge-2022-ra-mat-thi-truong-Viet-gia-tu-hon-33-ty-dong-0.jpg",
    type: "ghost",
    name: "Rolls-Royce Ghost Black Badge 2022",
    content: "Từ lâu, Rolls-Royce Motor Cars đã luôn thu hút những vị khách hàng độc đáo – họ là những cá nhân ưa thích sự mới mẻ, những người đã làm nên sự nghiệp của mình bằng cách bước lên vị trí tiên phong và không ngừng chinh phục các giới hạn. Những vị chủ nhân này, dù là phái đẹp hay phái mạnh, đều rất rõ ràng trong phong thái riêng.",
    qty : 0
  },
  {
    id: 3,
    image: "image/rolls-royce-ghost-2016-moi-100-duoc-chao-ban-hon-1-trieu-usd-tai-viet-nam-259230j.webp",
    type: "ghost",
    name: "Rolls-Royce Ghost 2016",
    content: "Đây chính là chiếc Rolls-Royce Ghost Series II thế hệ thứ nhất mới nhất tại Việt Nam còn sót lại trên thị trường. Thuộc đời 2016, thế nhưng xe vẫn còn mới tinh và chưa từng đăng kí. Xe được đưa về bởi Rolls-Royce Motor Cars Hanoi (nhà phân phối cũ của Rolls-Royce tại Việt Nam), sau khi chuyển quyền phân phối cho một đơn vị khác, chiếc Ghost Series II này đang được chào bán lại với giá rẻ hơn nhiều so thời điểm trước đây.",
    qty : 0
  },
  {
    id: 4,
    image: "image/images.jpeg",
    type: "ghost",
    name: "Mansory Rolls Royce Ghost based on the Rolls Royce Ghost V 12 | Mansory",
    content: "New 72-Plate Ghost, Starlight Headliner with Shooting Star, Illuminated Front Grille, Rear Theatre Configuration, Single Coachline in Charles Blue, Bespoke Interior Scheme in Grace White/Scivaro Grey/Charles Blue.",
    qty : 0
  },
  // {
  //   id: 5,
  //   image: "image/Rolls-Royce-Phantom-1-8067-1652772439.jpg",
  //   type: "phantom",
  //   name:"Rolls-Royce Phantom 2023",
  //   content: "Phantom 2023 không thay đổi nhiều về ngoại thất, bởi mục tiêu của các nhà thiết kế Rolls-Royce là duy trì vẻ ngoài vượt thời gian của mẫu sedan siêu sang. Lưới tản nhiệt Pantheon được chiếu sáng – tương tự dòng Ghost – với dải viền ngang mới bóng loáng. Đèn pha nâng cấp lên toàn LED với hình sao cắt bằng laser, tạo cảm giác hàng nghìn ngôi sao đặt bên trong cụm đèn."
  // },
  // {
  //   id: 6,
  //   image: "image/2022-Rolls-Royce-Phantom-2.jpg",
  //   type: "phantom",
  //   name:"Rolls-Royce Phantom VIII Series 2",
  //   content: "Ở phiên bản nâng cấp này, Rolls-Royce Phantom Series II sẽ khác biệt đôi chút so với Series I trước đây thông qua một vài chi tiết ngoại thất. Thứ Rolls-Royce tập trung nhất ở bản nâng cấp này chính là sự trải nghiệm của khách hàng thông qua các công nghệ và khả năng cá nhân hóa vô tận với các màu sơn và tùy chọn mới."
  // },
  // {
  //   id: 7,
  //   image: "image/2022-Rolls-Royce-Phantom-2.jpg",
  //   type: "phantom",
  //   name:"Rolls-Royce Phantom VIII Series 2",
  //   content: "Ở phiên bản nâng cấp này, Rolls-Royce Phantom Series II sẽ khác biệt đôi chút so với Series I trước đây thông qua một vài chi tiết ngoại thất. Thứ Rolls-Royce tập trung nhất ở bản nâng cấp này chính là sự trải nghiệm của khách hàng thông qua các công nghệ và khả năng cá nhân hóa vô tận với các màu sơn và tùy chọn mới."
  // },
  // {
  //   id: 8,
  //   image: "image/2022-Rolls-Royce-Phantom-2.jpg",
  //   type: "phantom",
  //   name:"Rolls-Royce Phantom VIII Series 2",
  //   content: "Ở phiên bản nâng cấp này, Rolls-Royce Phantom Series II sẽ khác biệt đôi chút so với Series I trước đây thông qua một vài chi tiết ngoại thất. Thứ Rolls-Royce tập trung nhất ở bản nâng cấp này chính là sự trải nghiệm của khách hàng thông qua các công nghệ và khả năng cá nhân hóa vô tận với các màu sơn và tùy chọn mới."
  // },
  // {
  //   id: 9,
  //   image: "image/images (1).jpeg",
  //   type: "Phantom-EWB",
  //   name:"Rolls-Royce Phantom VIII Series 2",
  //   content: "Ở phiên bản nâng cấp này, Rolls-Royce Phantom Series II sẽ khác biệt đôi chút so với Series I trước đây thông qua một vài chi tiết ngoại thất. Thứ Rolls-Royce tập trung nhất ở bản nâng cấp này chính là sự trải nghiệm của khách hàng thông qua các công nghệ và khả năng cá nhân hóa vô tận với các màu sơn và tùy chọn mới."
  // },
  // {
  //   id: 10,
  //   image: "image/images (1).jpeg",
  //   type: "Phantom-EWB",
  //   name:"Rolls-Royce Phantom VIII Series 2",
  //   content: "Ở phiên bản nâng cấp này, Rolls-Royce Phantom Series II sẽ khác biệt đôi chút so với Series I trước đây thông qua một vài chi tiết ngoại thất. Thứ Rolls-Royce tập trung nhất ở bản nâng cấp này chính là sự trải nghiệm của khách hàng thông qua các công nghệ và khả năng cá nhân hóa vô tận với các màu sơn và tùy chọn mới."
  // },
  // {
  //   id: 11,
  //   image: "image/images (1).jpeg",
  //   type: "Phantom-EWB",
  //   name:"Rolls-Royce Phantom VIII Series 2",
  //   content: "Ở phiên bản nâng cấp này, Rolls-Royce Phantom Series II sẽ khác biệt đôi chút so với Series I trước đây thông qua một vài chi tiết ngoại thất. Thứ Rolls-Royce tập trung nhất ở bản nâng cấp này chính là sự trải nghiệm của khách hàng thông qua các công nghệ và khả năng cá nhân hóa vô tận với các màu sơn và tùy chọn mới."
  // },
  // {
  //   id: 12,
  //   image: "image/images (1).jpeg",
  //   type: "Phantom-EWB",
  //   name:"Rolls-Royce Phantom VIII Series 2",
  //   content: "Ở phiên bản nâng cấp này, Rolls-Royce Phantom Series II sẽ khác biệt đôi chút so với Series I trước đây thông qua một vài chi tiết ngoại thất. Thứ Rolls-Royce tập trung nhất ở bản nâng cấp này chính là sự trải nghiệm của khách hàng thông qua các công nghệ và khả năng cá nhân hóa vô tận với các màu sơn và tùy chọn mới."
  // },
  // {
  //   id: 13,
  //   image: "  image/images (2).jpeg",
  //   type: "Wraith",
  //   name:"Rolls-Royce Phantom VIII Series 2",
  //   content: "Ở phiên bản nâng cấp này, Rolls-Royce Phantom Series II sẽ khác biệt đôi chút so với Series I trước đây thông qua một vài chi tiết ngoại thất. Thứ Rolls-Royce tập trung nhất ở bản nâng cấp này chính là sự trải nghiệm của khách hàng thông qua các công nghệ và khả năng cá nhân hóa vô tận với các màu sơn và tùy chọn mới."
  // },
  // {
  //   id: 14,
  //   image: "  image/images (2).jpeg",
  //   type: "Wraith",
  //   name:"Rolls-Royce Phantom VIII Series 2",
  //   content: "Ở phiên bản nâng cấp này, Rolls-Royce Phantom Series II sẽ khác biệt đôi chút so với Series I trước đây thông qua một vài chi tiết ngoại thất. Thứ Rolls-Royce tập trung nhất ở bản nâng cấp này chính là sự trải nghiệm của khách hàng thông qua các công nghệ và khả năng cá nhân hóa vô tận với các màu sơn và tùy chọn mới."
  // },
  // {
  //   id: 15,
  //   image: "  image/images (2).jpeg",
  //   type: "Wraith",
  //   name:"Rolls-Royce Phantom VIII Series 2",
  //   content: "Ở phiên bản nâng cấp này, Rolls-Royce Phantom Series II sẽ khác biệt đôi chút so với Series I trước đây thông qua một vài chi tiết ngoại thất. Thứ Rolls-Royce tập trung nhất ở bản nâng cấp này chính là sự trải nghiệm của khách hàng thông qua các công nghệ và khả năng cá nhân hóa vô tận với các màu sơn và tùy chọn mới."
  // },
  // {
  //   id: 16,
  //   image: "image/images (2).jpeg",
  //   type: "Wraith",
  //   name:"Rolls-Royce Phantom VIII Series 2",
  //   content: "Ở phiên bản nâng cấp này, Rolls-Royce Phantom Series II sẽ khác biệt đôi chút so với Series I trước đây thông qua một vài chi tiết ngoại thất. Thứ Rolls-Royce tập trung nhất ở bản nâng cấp này chính là sự trải nghiệm của khách hàng thông qua các công nghệ và khả năng cá nhân hóa vô tận với các màu sơn và tùy chọn mới."
  // },
]
function render(element) {
  let defaultType = "ghost";
  const renderList = document.querySelector('.ghost-list')
  let dataTable = ""
  element.forEach((value, key) => {
    let display = (value.type == defaultType) ? "d-none" : "";
    dataTable += `
    <li class="ghost-item ${value.type} ${display}">
         <div class="card">
         <img class="ghost-image" src="${value.image}" alt="">
         <h3 class="title title-product">${value.name}</h3>
         <p class="ghost-text">${value.content}</p>
         </div>
         <div class="card-btn">
         <button class="btn btn-buy" onclick="handleBuy(${key})">Click Buy Now</button>
         <button class="btn btn-info" onclick="handleInfor()">More Information</button>
         </div>
    </li>
    `
  });
  renderList.innerHTML = dataTable
}
render(cars)
function handleSearch() {

}
function changeTypeProduct(index) {
  const getListType = document.querySelector('.ghost-list')
  console.log(getListType);

  cars.forEach((value, key) => {
    if (index.id.toLocaleLowerCase().trim() == value.type.toLocaleLowerCase()) {
      const showListType = document.querySelector('#' + `${value.type}`)
      let a = getListType.fillter(listType => listType.length)
    }
  })
}
let x = 1
let imgChange = document.querySelector('.main-image')
let btnNextImg = document.querySelector('.next')
let btnBackImg = document.querySelector('.back')
let changeBkgHeader = document.querySelector('.header')
function handleNext() {
  if (x >= 2) {
    x = 1
    imgChange.src = "image/rolls-royce-phantom-syntopia-01-640618985ed23.jpg";
    btnNextImg.style.color = "#5c07b0"
    btnBackImg.style.color = "#5c07b0"
    changeBkgHeader.style.backgroundColor = "#5c07b0"
  }
  else{
    x++
    imgChange.src = `image/Gifimage(3).gif`;
    btnNextImg.style.color = "#090959"
    btnBackImg.style.color = "#090959"
    changeBkgHeader.style.backgroundColor = "#090959"
  }
}
function handleBack() {
  if (x <= 1) {
    x = 2
    imgChange.src = `image/Gifimage(3).gif`;
    btnNextImg.style.color = "#090959"
    btnBackImg.style.color = "#090959"
    changeBkgHeader.style.backgroundColor = "#090959"
  } else {
    x--
    imgChange.src = `image/rolls-royce-phantom-syntopia-01-640618985ed23.jpg`;
    btnNextImg.style.color = "#5c07b0"
    btnBackImg.style.color = "#5c07b0"
    changeBkgHeader.style.backgroundColor = "#5c07b0"
  }
}
function handleBuy(element){
  let cartProduct = document.querySelector('.quantity')
  cartProduct.style.display = "block"
  product = []
  qty = 0
  cars.forEach((value, index) =>{
    if(element == index){
      value.qty++
      console.log(value.qty);
      product.push(value)
      console.log(product);
      cartProduct.innerHTML = value.qty
    }else{
      value.qty++
      cartProduct.innerHTML = value.qty
    }
  })
  alert('Đã Thêm Vào Giõ Hàng')

  render(cars)

}