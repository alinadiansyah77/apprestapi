'use strict';

module.exports=function(app){
    var jsonku=require('./controller');

    app.route('/')
        .get(jsonku.index);
    
    app.route('/mahasiswa/tampilsemua')
        .get(jsonku.tampilsemuamahasiswa);
    
    app.route('/mahasiswa/tampil/:id')
        .get(jsonku.tampilmahasiswaid);
    
    app.route('/mahasiswa/tambah')
        .post(jsonku.tambahmahasiswa);

    app.route('/mahasiswa/ubah')
        .put(jsonku.ubahmahasiswa);

    app.route('/mahasiswa/hapus')
        .delete(jsonku.hapusmahasiswaid);
    
    app.route('/mahasiswa/tampilmatakuliah')
        .get(jsonku.tampilgroupmatakuliah);

    app.route('/mahasiswa/tampilmahasiwaperjurusan')
        .get(jsonku.tampiljurusanmahasiswa);
}