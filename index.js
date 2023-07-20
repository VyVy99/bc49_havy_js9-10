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
                <td>${nhanVien.luongCB}</td>
                <td>${nhanVien.xepLoaiNhanVien()}</td>
         <button class="btn btn-warning" onclick="xoaNhanVien('${nhanVien.tknv}')" >Xoá nhân viên</button>   						
            </tr>
        `;
    }
    document.getElementById("tableDanhSach").innerHTML = content;
}

function xoaNhanVien(tknv) {
    console.log(tknv);
    // tạo ra 1 biêsn index
    var index = -1;
    for (var i = 0; i < arrNhanVien.length; i++) {
        if (arrNhanVien[i].tknv === tknv) {
            index = i;
            // thoát khỏi vòng lặp

        }
    }
    arrNhanVien.splice(index, 1);
    hienThiDanhSachNhanVien(arrNhanVien);
}


function capNhatNhanVien() {
    // tạo 1 đối tượng nhân viên mới
    var nhanVien = new NhanVien();
    // Lặp qua các trường nhập liệu và gán giá trị vào thuộc tính tương ứng của đối tượng nhân viên
    for (var i = 0; i < arrIdInput.length; i++) {
        var idInput = arrIdInput[i];
        var value = document.getElementById(idInput).value.trim();
        // sử dụng trim để loại bỏ khoảng trắng đầu cuối
        nhanVien[idInput] = value;
    }
    console.log(nhanVien);
    // Tìm nhân viên trong mảng arrNhanVien và cập nhật thông tin
    var index = arrNhanVien.findIndex(function (nhanVien) {
        return nhanVien.tknv === nhanVien.tknv;
    });
    if (index !== -1) {
        arrNhanVien[index] = nhanVien;

        // Mở lại input tknv
        document.getElementById("tknv").readOnly = false;

        // Đặt lại giá trị của các ô nhập liệu
        for (var i = 0; i < arrIdInput.length; i++) {
            document.getElementById(arrIdInput[i]).value = "";
        }

        // Hiển thị lại danh sách nhân viên
        hienThiDanhSachNhanVien(arrNhanVien);
    } else {
        alert("Không tìm thấy nhân viên có tài khoản " + nhanVien.tknv);
    }
}

document.getElementById('btnCapNhat').onclick = capNhatNhanVien;



