
var arrIdInput = [
    "tknv", "name", "email", "password", "datepicker", "luongCB", "chucvu", "gioLam",
];
// tạo 1 mảng ở ngoài để chứa

var arrNhanVien = [];
// phương thức thêm nhân viên
function themNhanVien(event) {

    event.preventDefault();
    console.log('submit');
    var nhanVien = new NhanVien();
    for (var i = 0; i < arrIdInput.length; i++) {
        var value = document.getElementById(arrIdInput[i]).value;
        nhanVien[arrIdInput[i]] = value;

    }
    console.log(nhanVien);
    // ta tính lương và xếp loaij
    var tongLuong = this.tinhLuong();
    var xepLoai = this.xepLoaiNhanVien();
    // them thông tin vào mảng nhân viên
    arrNhanVien.push(nhanVien);
    console.log(arrNhanVien);
    // cập nhật lại danh sách sinh viên

    hienThiDanhSachNhanVien()

    // đóg form thêm mới 
}
document.getElementById('btnThemNV').onclick = themNhanVien

function hienThiDanhSachNhanVien(arrNhanVien) {
    var content = "";
    for (var i = 0; i < arrNhanVien.length; i++) {
        var nv = arrNhanVien[i];
        content += `
            <tr>
                <td>${nhanVien.tknv}</td>
                <td>${nhanVien.name}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.datepicker}</td>

                <td>${nhanVien.chucvu}</td>
                <td>${nhanVien.tinhLuong()}</td>

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

function xoaNhanVien() {

}









function capNhatNhanVien() {
    // láy dữ liêụ từ ng dùng về:
    var nhanVien = new NhanVien();
    for (var i = 0; i < arrIdInput.length; i++) {
        var capNhat = document.getElementById(arrIdInput[i]).value;
        nhanVien[arrIdInput[i]] = value;
    }
    console.log(nhanVien);
    // tìm tứoi vị trsi nhân viên cũ đang đứng
    for (var z = 0; z < arrNhanVien.length; z++) {
        if (nhanVien.tknv == arrNhanVien[z].tknv) {
            arrNhanVien[z] = nhanVien;
            document.getElementById("tknv").readOnly = false;
            // cập nhạt xong, clear hết dữ liẹu
            document.getElementById('tableDanhSach').reset();

        }
    }

}
document.getElementById('btnCapNhat').onclick = capNhatNhanVien;


