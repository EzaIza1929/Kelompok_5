class Karyawan {
    constructor(nama, gajikotor) {
        this.nama = nama;
        this.gajikotor = gajikotor;
    }

    hitungGajiBersih() {
        let pajak = this.gajikotor * 0.02;
        let gajiBersih = this.gajikotor - pajak;
        return gajiBersih;
    }
}

class Gaji extends Karyawan {
        tampilgaji() {
        let pajak = this.gajikotor * 0.02;
        let gajiBersih = this.hitungGajiBersih();
        console.log(`Nama = ${this.nama}`);
        console.log(`Pajak 2%= Rp ${pajak}`);
        console.log(`Gaji Bersih = Rp ${gajiBersih}`);
        console.log(`---------------------`)
        return gajiBersih;
    }
}

const karyawan1 = new Gaji("Kipli", 5000000);
const karyawan2 = new Gaji("Salim", 90000000);
const karyawan3 = new Gaji("song", 600000000000);

let totalGaji1 = karyawan1.tampilgaji();
let totalGaji2 = karyawan2.tampilgaji();
let totalGaji3 = karyawan3.tampilgaji();

let hasil = totalGaji1 + totalGaji2 + totalGaji3;
console.log(`Total Keseluruhan gaji bersih = Rp ${hasil}`);