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
}