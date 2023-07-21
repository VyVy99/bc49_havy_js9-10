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

       luuDuLieuLocal();
    console.log(arrNhanVien);
    // document.getElementById('formNhanVien').reset();
    hienThiDanhSachNhanVien(arrNhanVien);
}

document.getElementById('btnThemNV').onclick = themNhanVien;

function hienThiDanhSachNhanVien(arrNhanVien) {
    var content = "";
    for (var i = 0; i < arrNhanVien.length; i++) {
        var nhanVien = arrNhanVien[i];

var newNhanVien = new NhanVien();
Object.assign(newNhanVien, nhanVien);

        content += `
            <tr>
        
                <td>${newNhanVien.tknv}</td>
                <td>${newNhanVien.name}</td>
                <td>${newNhanVien.email}</td>
                <td>${newNhanVien.datepicker}</td>
                <td>${newNhanVien.chucvu}</td>
                <td>${newNhanVien.luongCB}</td>
                <td>${newNhanVien.xepLoaiNhanVien()}</td>
         <button class="btn btn-warning" onclick="xoaNhanVien('${newNhanVien.tknv}')" >Xoá nhân viên</button>   						
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
        if (arrNhanVien[i].tknv == tknv) {
            index = i;
            // thoát khỏi vòng lặp

        }
    }
    arrNhanVien.splice(index, 1);
    luuDuLieuLocal();
    console.log(arrNhanVien);
    hienThiDanhSachNhanVien(arrNhanVien);
}

function luuDuLieuLocal() {
    // chueyenr mảng dữ liệu json.stringtify trc khi lưu
    var newArr = JSON.stringify(arrNhanVien);
    localStorage.setItem("arrNhanVien", newArr);

}
function layDuLieuLocal() {
    var arr = localStorage.getItem("arrNhanVien");
    // chuyển đổi về kiẻu dữ liệu ban đầu:

    if (arr != null) {
        console.log("tôi vào dc r");
        var newArr = JSON.parse(arr);
        arrNhanVien = newArr;
        hienThiDanhSachNhanVien(arrNhanVien);
    }

}
layDuLieuLocal();
function layThongTinNhanVien(tknv) {
    // vòng lặp để lấy dc object thỏa mãn tknV
    var nhanVien = {};
    for (var i = 0; i < arrNhanVien.length; i++) {
        if (arrNhanVien[i].tknv == tknv) {
            nhanVien = arrNhanVien[i];
        }
    }
    // lấy dữ liệu từi nhanvein và gán lên các input
    for (var z = 0; z < arrIdInput.length; z++) {
        document.getElementById(arrIdInput[z]).value = nhanVien[arrIdInput[z]];
    }
    // chỉnh thuộc tinh readonly cho input tknv chặn ng dùng sửa
    document.getElementById("tknv").readOnly = true;
    document.getElementById("btnCapNhat").style.display = "inline-block";
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
        luuDuLieuLocal();
        hienThiDanhSachNhanVien(arrNhanVien);

    } else {
        alert("Không tìm thấy nhân viên có tài khoản " + nhanVien.tknv);
    }



}



document.getElementById('btnCapNhat').onclick = capNhatNhanVien;



