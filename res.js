'use strict';

exports.ok=function(values, res){
    var data={
        'status': 200,
        'values': values
    };

     res.json(data);
     res.end();
}
//response untuk nested mata kuliah
exports.oknested=function(values,res){
    //lakukan akumulasi
    const hasil= values.reduce((akumulasikan, item)=>{
        //tentuken key group
        if (akumulasikan[item.nama]){
            //buat variable group nama mahasiswa
            const group=akumulasikan[item.nama];
            //c heck jika isi array adalah mata kuliah
            if(Array.isArray(group.matakuliah)){
                //tambahkan value ke dalam group mata kuliah
                group.matakuliah.push(item.matakuliah);
            }else {
                group.matakuliah= [group.matakuliah, item.matakuliah];
            }
        }else {
            akumulasikan[item.nama]=item;
        }
        return akumulasikan;
    },{});
    var data={
        'status': 200,
        'values': hasil
    };
     res.json(data);
     res.end();
}

//response untuk nested jurusan 
exports.jurusannested=function(values,res){
    //lakukan akumulasi
    const hasil= values.reduce((akumulasikan, item)=>{
        //tentuken key group
        if (akumulasikan[item.jurusan]){
            //buat variable group jurusan
            const group=akumulasikan[item.jurusan];
            //check jika isi array adalah nama
            if(Array.isArray(group.mata)){
                //tambahkan value ke dalam group nama
                group.nama.push(item.nama);
            }else {
                group.nama= [group.nama, item.nama];
            }
        }else {
            akumulasikan[item.jurusan]=item;
        }
        return akumulasikan;
    },{});

    var data={
        'status': 200,
        'values': hasil
    };
     res.json(data);
     res.end();
}