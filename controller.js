'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok('Aplikasi REST API Mahasiswa berjalan.', res)
};

// menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function (req, res) {
    connection.query('select * from mahasiswa', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// menampilkan data mahasiswa berdasarkan id
exports.tampilmahasiswaid = function (req, res) {
    let id = req.params.id
    connection.query('select * from mahasiswa where id_mahasiswa=?', [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// menambahkan data mahasiswa
exports.tambahmahasiswa = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;
    connection.query('insert into mahasiswa(nim,nama,jurusan) values(?,?,?)',
        [nim, nama, jurusan], function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok('Berhasil Menambahkan data Mahasiswa', res);
            }
        });
};
