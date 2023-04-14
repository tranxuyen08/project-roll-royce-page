const cars = [
  {
    id: 1,
    image: "image/download (1).jpeg",
    name: "Rolls-Royce Ghost 2021",
    content: "Nền tảng của Rolls-Royce Ghost mới là cấu trúc nhôm linh hoạt giống như Phantom và Cullinan. Trên mẫu xe Ghost mới. các chi tiết như vách ngăn, sàn xe, bậc cửa và thanh khung dầm xe được tính toán và thiết kế lại để đáp ứng với nhu cầu của những khách hàng thượng lưu của hãng xe Anh quốc, vừa đảm bảo thú vị khi lái nhưng cũng phải thoải mái.",
    qty: "1"
  },
  {
    id: 2,
    image: "image/Rolls-Royce-Ghost-Black-Badge-2022-ra-mat-thi-truong-Viet-gia-tu-hon-33-ty-dong-0.jpg",
    name: "Rolls-Royce Ghost Black Badge 2022",
    content: "Từ lâu, Rolls-Royce Motor Cars đã luôn thu hút những vị khách hàng độc đáo – họ là những cá nhân ưa thích sự mới mẻ, những người đã làm nên sự nghiệp của mình bằng cách bước lên vị trí tiên phong và không ngừng chinh phục các giới hạn. Những vị chủ nhân này, dù là phái đẹp hay phái mạnh, đều rất rõ ràng trong phong thái riêng.",
    qty: "1"
  },
  {
    id: 3,
    image: "image/rolls-royce-ghost-2016-moi-100-duoc-chao-ban-hon-1-trieu-usd-tai-viet-nam-259230j.webp",
    name: "Rolls-Royce Ghost 2016",
    content: "Đây chính là chiếc Rolls-Royce Ghost Series II thế hệ thứ nhất mới nhất tại Việt Nam còn sót lại trên thị trường. Thuộc đời 2016, thế nhưng xe vẫn còn mới tinh và chưa từng đăng kí. Xe được đưa về bởi Rolls-Royce Motor Cars Hanoi (nhà phân phối cũ của Rolls-Royce tại Việt Nam), sau khi chuyển quyền phân phối cho một đơn vị khác.",
    qty: "1"
  },
  {
    id: 4,
    image: "image/images.jpeg",
    name: "Mansory Rolls Royce Ghost based on the Rolls Royce Ghost V 12 | Mansory",
    content: "New 72-Plate Ghost, Starlight Headliner with Shooting Star, Illuminated Front Grille, Rear Theatre Configuration, Single Coachline in Charles Blue, Bespoke Interior Scheme in Grace White/Scivaro Grey/Charles Blue.",
    qty: "1"
  }
]
// render product in HTML
function render(element) {
  const renderList = document.querySelector('.ghost-list')
  let dataTable = ""
  element.forEach((value, key) => {
    dataTable += `
    <li class="ghost-item">
          <img class="ghost-image" src="${value.image}" alt="">
          <h3 class="title title-product">${value.name}</h3>
          <p class="ghost-text">${value.content}</p>
          <div class="btn-action">
            <button onclick="handleEdit(${key})" class="btn btn-edit">Edit</button>
            <button onclick="handleDelete(${key})" class="btn btn-delete">Delete</button>
          </div>
    </li>
    `
  });
  renderList.innerHTML = dataTable
}
render(cars)
// handle delete product
function handleDelete(key) {
  cars.splice(key, 1);
  render(cars)
}
// handle edit
function handleEdit(index) {
  const editForm = document.querySelector('.form-edit')
  editForm.style.display = 'block'
  editForm.innerHTML = `
  <div class="form-content">
          <div class="form-label">
            <label for="">Choose Image</label>
            <label for="">Title</label>
            <label for="">Content</label>
          </div>
          <div class="input-form">
            <img class="edit-img" src="${cars[index].image}">
            <input class="input-name" type="text" name="" id="" value="${cars[index].name}">
            <textarea class="text-content" name="" id="" cols="30" rows="10">
            ${cars[index].content}
            </textarea>
          </div>
        </div>
        <button onclick="handleClose()" class="btn btn-close">X</button>
        <button onclick="handleSubmit(${index})" class="btn btn-submit">Submit</button>
        `
}
// handle submit edit
function handleSubmit(index){
  const editForm = document.querySelector('.form-edit')
  const getIamge = document.querySelector('.edit-img').src
  const getName = document.querySelector('.input-name').value
  const getTextArea = document.querySelector('.text-content').value
  cars.splice(index, 1)
  // tạo tạo1 objectt carr không có s để add input vào rồi add vào array cars
  const car = {}
  car.id = index + 1
  car.image = getIamge
  car.name = getName
  car.content = getTextArea
  console.log(car);
  cars.splice(index,0,car)
  editForm.style.display ='none'
  render(cars)
}
// click button X close form
function handleClose(){
  const close = document.querySelector('.form-edit')
  close.style.display = 'none'
}
// handle create
function handleCreate(){
  const editForm = document.querySelector('.form-edit')
  editForm.style.display = 'block'
  editForm.innerHTML = `
        <div class="form-content">
          <div class="form-label">
            <label for="">Choose Image</label>
            <label for="">Title</label>
            <label for="">Content</label>
          </div>
          <div class="input-form">
            <input class="inpust-image" type="file" value=""/>
            <input class="input-name" type="text" name="" id="" value="">
            <textarea class="text-content" name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <button onclick="handleClose()" class="btn btn-close">X</button>
        <button onclick="handleAdd()" class="btn btn-submit">Add</button>
        `
}
function handleAdd(){
  const car = {}
  const editForm = document.querySelector('.form-edit')
  const addIamge = document.querySelector('.inpust-image')
  const addName = document.querySelector('.input-name').value
  const addText = document.querySelector('.text-content').value
  if(addName != "" && addText!=""){
    car.id = cars[cars.length - 1].id + 1
    car.image = addIamge
    car.name = addName
    car.content = addText
    cars.push(car)
    alert("Thêm sản phẩm thành công")
    // editForm.style.display ='none'
  }else{
    alert('Bạn Chưa nhập Đủ Thông Tin')
  }
  render(cars)
}