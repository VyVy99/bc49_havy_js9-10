
function NhanVien() {
    this.tknv = "";
    this.name = "";
    this.email = "";
    this.password = "";
    this.datepicker = "";
    this.luongCB = "";
    this.chucvu = "";
    this.gioLam = "";

    this.tinhLuong = function () {
        var tongLuong = 0;
        if (this.chucvu == "Giám đốc") {
            tongLuong = this.luongCB * 3;
        } else if (this.chucvu === 'Trưởng phòng') {
            tongLuong = this.luongCB * 2;
        } else if (this.chucvu == "Nhân viên") {
            tongLuong = this.luongCB;
        }
        return tongLuong;
    }

    this.xepLoaiNhanVien = function () {
        var xepLoai = "";
        if (this.gioLam >= 192) {
            xepLoai = "Nhân viên xuất sắc";
        } else if (this.gioLam >= 176) {
            xepLoai = "Nhân viên giỏi";
        } else if (this.gioLam >= 160) {
            xepLoai = "Nhân viên khá";
        } else if (this.gioLam < 160) {
            xepLoai = "Nhân viên trung bình";
        }
        return xepLoai;
    }
}

var arrIdInput = [
    "tknv", "name", "email", "password", "datepicker", "luongCB", "chucvu", "gioLam",
];

var arrNhanVien = [];

function themNhanVien(event) {
    event.preventDefault();
    console.log('submit');
    var nhanVien = new NhanVien();
    for (var i = 0; i < arrIdInput.length; i++) {
        var value = document.getElementById(arrIdInput[i]).value;
        nhanVien[arrIdInput[i]] = value;
    }
    console.log(nhanVien);
    var tongLuong = nhanVien.tinhLuong();
    var xepLoai = nhanVien.xepLoaiNhanVien();
    arrNhanVien.push(nhanVien);
    console.log(arrNhanVien);
    hienThiDanhSachNhanVien(arrNhanVien);
}

document.getElementById('btnThemNV').onclick = themNhanVien;

function hienThiDanhSachNhanVien(arrNhanVien) {
    var content = "";
    for (var i = 0; i < arrNhanVien.length; i++) {
        var nhanVien = arrNhanVien[i];
        content += `
            <tr>
        
                <td>${nhanVien.tknv}</td>
                <td>${nhanVien.name}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.datepicker}</td>
                <td>${nhanVien.chucvu}</td>
                <td>${nhanVien.tinhLuong()}</td>
                <td>${nhanVien.xepLoaiNhanVien()}</td>
            </tr>
        `;
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}

function capNhatNhanVien() {
    var nhanVien = new NhanVien();
    for (var i = 0; i < arrIdInput.length; i++) {
        var capNhat = document.getElementById(arrIdInput[i]).value;
        nhanVien[arrIdInput[i]] = capNhat;
    }
    console.log(nhanVien);
    for (var z = 0; z < arrNhanVien.length; z++) {
        if (arrNhanVien[z].tknv === nhanVien.tknv) {
            arrNhanVien[z] = nhanVien;
            break;
        }
    }
    console.log(arrNhanVien);
    hienThiDanhSachNhanVien(arrNhanVien);
}

document.getElementById('btnCapNhat').onclick = capNhatNhanVien;
