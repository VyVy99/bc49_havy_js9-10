var arrIdInput = [
    "tknv", "name", "email", "password", "datepicker", "luongCB", "chucvu", "gioLam",
];

var arrNhanVien = [];

function themNhanVien() {
    event.preventDefault();
    // tạo ra một đối tượng nhanVien từ lớp đối tượng NhanVien
    var nhanVien = new NhanVien();
    for (var i = 0; i < arrIdInput.length; i++) {
        var inputId = arrIdInput[i];
        var value = document.getElementById(inputId).value;
        // sau đó ta gán giá trị này vào thuộc tính của đối tượng nhanVien
        nhanVien[inputId] = value;
    }

    // tính lương và xếp loại
    var tongLuong = nhanVien.tinhLuong();
    var xepLoai = nhanVien.xepLoaiNhanVien();

    // thêm thông tin vào mảng nhân viên
    arrNhanVien.push(nhanVien);

    // cập nhật lại bảng danh sách nhân viên
    hienThiDanhSachNhanVien(arrNhanVien);

    // đóng form thêm mới
    document.getElementById("btnDong").click();
    console.log(arrNhanVien);
}

function hienThiDanhSachNhanVien(arrNhanVien) {
    var content = "";
    for (var i = 0; i < arrNhanVien.length; i++) {
        var nv = arrNhanVien[i];
        content += `
            <tr>
                <td>${nhanVien.tknv}</td>
                <td>${nhanVien.name}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.password}</td>
                <td>${nhanVien.datepicker}</td>
                <td>${nhanVien.luongCB}</td>
                <td>${nhanVien.chucvu}</td>
                <td>${nhanVien.tinhLuong()}</td>
                <td>${nhanVien.gioLam}</td>
                <td>${nhanVien.xepLoaiNhanVien()}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nhanVien.tknv}')">Xóa</button>
                    <button class="btn btn-primary" onclick="suaNhanVien('${nhanVien.tknv}')">Sửa</button>
                </td>
            </tr>
        `;
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}