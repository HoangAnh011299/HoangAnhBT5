// BÀI TẬP 1
function tinhTongLuong () {
    //input: tien luong 1h; so gio lam
    var tienLuong1h = document.getElementById('tienLuong1h').value;
    var soGioLam = document.getElementById('soGioLam').value;
     console.log(" 😂 ~ soGioLam", soGioLam);
     console.log(" 😂 ~ tienLuong1h", tienLuong1h);
     //output: tong tien luong = so tien luong 1h * so gio lam
     var TongLuong = 0; 
     TongLuong = tienLuong1h * soGioLam;
     document.getElementById('TongLuong').innerHTML = TongLuong.toLocaleString();

}
// BÀI TẬP 2
function XuatKetQua() {
    var soThuc1Tag = document.getElementById("soThuc1").value * 1;
    var soThuc2Tag = document.getElementById("soThuc2").value * 1;
    var soThuc3Tag = document.getElementById("soThuc3").value * 1;
    var soThuc4Tag = document.getElementById("soThuc4").value * 1;
    var soThuc5Tag = document.getElementById("soThuc5").value * 1;
  
    var xuatGiaTriTrungBinh = document.getElementById("xuatGiaTriTrungBinh");
  
    var result =(soThuc1Tag + soThuc2Tag + soThuc3Tag + soThuc4Tag + soThuc5Tag) / 5;
    xuatGiaTriTrungBinh.innerHTML = `<p>${result}</p>`;
    xuatGiaTriTrungBinh.style.color = "red";
    console.log(result);
  }
// BÀI TẬP 3
function quyDoiTien() {
   var vaLue2 = document.getElementById("quyDoi").value*1;
   var ketQua = vaLue2 * 23500; 
   var outPut = document.getElementById("ketQua");
   outPut.innerHTML = ketQua.toLocaleString();
   console.log("ketQua");
}

// BÀI TẬP 4
function ketQua() {
    var chieuDaiHinhChuNhat = document.getElementById("chieuDaiHinhChuNhat").value*1;
    var chieuRongHinhChuNhat = document.getElementById("chieuRongHinhChuNhat").value*1;
    var soDienTich = chieuDaiHinhChuNhat * chieuRongHinhChuNhat;
    var soChuVi = (chieuDaiHinhChuNhat + chieuRongHinhChuNhat) * 2;

    dienTich.innerHTML = soDienTich;
    chuVi.innerHTML = soChuVi;
    console.log("ketQua");
}

// BÀI TẬP 5

function tongKySoTag() {
    var soCo2ChuSo = document.getElementById("nhapSoCo2ChuSo").value*1;
    
    var hangDonVi = soCo2ChuSo%10
    console.log(" 😂 ~ hangDonVi", hangDonVi);
   var hangChuc = Math.floor(soCo2ChuSo/10);
    console.log(" 😂 ~ hangChuc", hangChuc);
    
    var ketQuaKySo = hangDonVi + hangChuc;
    document.getElementById('ketQuaKySo').innerHTML = ketQuaKySo;
    
}