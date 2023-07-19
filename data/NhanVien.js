function NhanVien() {
    this.tknv = "";
    this.name = "";
    this.email = "";
    this.password = "";
    this.datepicker = "";
    this.luongCB = "";
    this.chucvu = "";
    this.gioLam = "";


    // phương thưc

    this.tinhLuong = function () {
        var tongLuong = 0;
        if (this.chucvu == "Giám đốc") {
            tongLuong = this.luongCB * 3;
        } else if (this.chucVu === 'Trưởng phòng') {
            tongLuong = this.luongCB * 2;
        } else if (this.chucvu == "Nhân viên") {
            tongLuong = this.luongCB;
        }
        return tongLuong;
    }

    this.xepLoaiNhanVien = function () {
        var xepLoai = "";
        if (gioLam >= 192) {
            "Nhân viên xuất sắc"
        } else if (gioLam >= 176) {
            "Nhân viên giỏi"
        } else if (gioLam >= 160) {
            "Nhân viên khá"
        } else if (gioLam < 160) {
            "Nhân viên trung bình"
        }

    }

}
