var arrIdInput = [
    "tknv", "name", "email", "password", "datepicker", "luongCB", "chucvu", "gioLam",
];
var arrnoItInput = ['notiTaiKhoan', 'notiName', 'notiEmail', 'notiMatKhau', 'notiNgayLam', 'notiLuongCb', 'notiChucVu', 'notiGioLam',]


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


function capNhatNhanVien() {
    var nhanVien = new NhanVien();
    for (var i = 0; i < arrIdInput.length; i++) {
        var idInput = arrIdInput[i];
        var value = document.getElementById(idInput).value;
        nhanVien.idInput = value;
    }

    for (var z = 0; z < arrNhanVien.length; z++) {
        if (nhanVien.tknv == arrNhanVien[z].tknv) {
            arrNhanVien[z] = nhanVien
            // mow lai input masv
            document.getElementById("tknv").readOnly = true;
            // cap nhat xong clear het du lieu input
        
            document.getElementById("formNhanVien").reset()
            // goi toi render de cap nhat lai du lieu ms nhat tren giao dien
            luuDuLieuLocal()
            hienThiDanhSachNhanVien();


        }
    }
}

document.getElementById('btnCapNhat').onclick = capNhatNhanVien;





// function capNhatSinhVien() {
//     // lay du lieu tu ng dung ve
//     var sinhVien = new SinhVien();
//     for (var i = 0; i < arrIdInput; i++) {
//         var value = document.getElementById(arrIdInput[i]).value

//         sinhVien[arrIdInput[i]] = value
//     }
//     console.log(sinhVien);
//     // tim kiem toi vi tri du lieu sv cu dang dung
//     for (var z = 0; z < arrSinhVien.length; z++) {
//         if (sinhVien.txtMaSV == arrSinhVien[z].txtMaSV) {
//             arrSinhVien[z] = sinhVien
//             // mow lai input masv
//             document.getElementById("txtMaSV").readOnly = false;
//             // cap nhat xong clear het du lieu input
//             document.getElementById("formSinhVien").reset()
//             // goi toi render de cap nhat lai du lieu ms nhat tren giao dien
//             luuDuLieuLocal()
//             renderGiaoDien()
//             document.getElementById('btnCapNhat').style.display = 'none';

//         }
//     }

// }








// validation: lọc
// validation : kiemr tra dữ liệu rỗng
/**tạo ra 1 biến check dữ liệu, nếu như  khi chạy thuộc tính vòng lặp có gia trị thì sẽ là true, r dùng valid để xem có nen them sinhVien vào mảng hay ko */
var valid = true;

valid =
    valid &&
    kiemTraDuLieuRong(arrIdInput, arrnoItInput, nhanVien) &&
    kiemTraEmail(nhanVien["email"], "notiEmail");


// tạo biên lưu chuỗi email
// var regexEmail =
//   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// console.log(valid);
// if (sinhVien["txtEmail"] !== "") {
//   if (!regexEmail.test(sinhVien["txtEmail"])) {
//     document.getElementById("notiEmail").innerHTML =
//       "định dạng email ko đúng";
//     valid = valid && false;
//   } else {
//     // đàu tiên gán gia giá vào cho biến valid
//     document.getElementById("notiEmail").innerHTML = "";
//     valid = valid && true;
//   }
// }

// valid(trusthy && falsy)
// dùng valid để check nếu còn lỗi thì sẽ là false kop dc thêm dữ liệu vao còn true thì dc
if (valid) {
    arrNhanVien.push(nhanVien);
    luuDuLieuLoCal();
    renderGiaoDigiten();

    document.getElementById("formNhanVien").reset();
}

