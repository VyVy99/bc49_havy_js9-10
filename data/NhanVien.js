function NhanVien() {
    this.tknv = "";
    this.name = "";
    this.email = "";
    this.password = "";
    this.datepicker = "";
    this.luongCB = "";
    this.chucvu = "";
    this.gioLam = "";


    // phương thức

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