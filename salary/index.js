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