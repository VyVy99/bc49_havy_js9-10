var arrIdInput = [
    "tknv", "name", "email", "password", "datepicker", "luongCB", "chucvu", "gioLam",  
]

var  arrNhanVien = [];
function themSinhVien() {

    event.preventDefault();
    // tạo ra một đối tượng sinhVien từ lớp đối tượng SinhVien
    var nhanVien = new NhanVien();
    for(var i= 0; i< arrIdInput.length; i++){
        var inputId = arrIdInput[i];
        var value = document.getElementById(inputId).value;
        // sau đó ta gán giá trị này vào thuộc tính của đối tượng nhanVien
        nhanVien[inputId] = value;
    }

    arrNhanVien.push(nhanVien)
    console.log(arrNhanVien);

    // tính lương và xếp loại
    var tongLuong = nhanVien.tinhLuong();
    var xepLoai = nhanVien.xepLoaiNhanVien();
    // cập nhật lại bảng danh sách nhân viên
    hienThiDanhSachNhanVien(arrNhanVien);
}

