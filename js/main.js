/** Bài tập 1
 * Khối 1: Input
 * luongMoiNgay
 * soNgayLam
 * 
 * Khối 2:
 * B1: tạo biến và gán giá trị
 * B2: tongLuong = luongMoiNgay * soNgayLam
 * 
 * Khối 3: Output
 * tongLuong
 * 
 */


function tinhTienLuong(){
    var luongMoiNgay = 100000;
    var soNgayLam = Number(document.getElementById('songay').value);
    var tongLuong = luongMoiNgay * soNgayLam;
    document.getElementById('txtTinhLuong').innerHTML = 'Tiền lương: ' + tongLuong;
}


/** Bài tập 2
 * Khối 1: Input
 * 5 số thực (float)
 * 
 * Khối 2:
 * B1: tạo biến và gán giá trị
 * B2: trungBinh = (num1 + num2 + num3 +num4 +num5) / 5
 * 
 * Khối 3: Output
 * Tính giá trị trung bình của 5 số thực
 * 
 */

function tinhTrungBinh(){
    var num1 = Number(document.getElementById('number1').value);
    var num2 = Number(document.getElementById('number2').value);
    var num3 = Number(document.getElementById('number3').value);
    var num4 = Number(document.getElementById('number4').value);
    var num5 = Number(document.getElementById('number5').value);
    var trungBinh = (num1 + num2 + num3 +num4 +num5) / 5;
    document.getElementById('txtTinhTB').innerHTML = 'Giá trị trung bình là: ' + trungBinh;
}


/** Bài tập 3
 * Khối 1: Input
 * giaUSD
 * soTienUSD
 * 
 * Khối 2:
 * B1: tạo biến và gán giá trị
 * B2: tienQuyDoiVND = giaUSD * soTienUSD
 * 
 * Khối 3: Output
 * tienQuyDoiVND
 * 
 */

function tinhQuyDoi(){
    var giaUSD = 23500;
    var soTienUSD = Number(document.getElementById('tienUSD').value);
    var tienQuyDoiVND = giaUSD * soTienUSD
    document.getElementById('txtTienVND').innerHTML = 'Số tiền quy đổi là: ' + tienQuyDoiVND + ' VND';
}


/** Bài tập 4
 * Khối 1: Input
 * chieuDaiHCN
 * chieuRongHCN
 * 
 * Khối 2:
 * B1: tạo biến và gán giá trị
 * B2: dienTich = chieuDaiHCN * chieuRongHCN
 *     chuVi = (chieuDaiHCN + chieuRongHCN) * 2
 * 
 * Khối 3: Output
 * dienTich
 * chuVi
 * 
 */

function tinhHCN(){
    var chieuDaiHCN = Number(document.getElementById('chieudai').value);
    var chieuRongHCN = Number(document.getElementById('chieurong').value);
    var dienTich = chieuDaiHCN * chieuRongHCN;
    var chuVi = (chieuDaiHCN + chieuRongHCN) * 2;
    document.getElementById('txtTinhHCN').innerHTML = 'Diện tích: ' + dienTich + ', Chu vi: ' + chuVi;
}


/** Bài tập 5
 * Khối 1: Input
 * num (số nguyên dương có 2 chữ số)
 * 
 * Khối 2:
 * B1: tạo biến và gán giá trị
 * ten  (hàng chục)
 * unit (hàng đơn vị)
 * B2: lấy hàng chục và đơn vị
 *     ten = Math.floor(num/10)
 *     unit = num%10
 * B3: tính tổng các chữ số của num
 *     tong = ten + unit
 * 
 * Khối 3: Output
 * tổng các chữ số của số num
 * 
 */

function tinhToan(){
    var num = Number(document.getElementById('number').value);
    var ten = Math.floor(num/10);
    var unit = num%10;
    var tong = ten + unit;
    document.getElementById('txtTinhToan').innerHTML = 'Tổng 2 chữ số của số ' + num + ' là: ' +tong;
}