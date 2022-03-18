# test_backend_bd


NAMA : PRIYO SUBARKAH
<br>
SS<br/> 
ERD
<br/>
<br/>
<img src="https://github.com/op-debug/tezt_backend_bd/blob/master/ss/erd.JPG">


<br/><br/><br/><br/><br/>
 npm install
<br>
run migration database : npm run migrate
<br>
setting port di .env
<br/>
run app : npm run start

<br>
<table>
    <tr>
        <td>No</td>
        <td>Method</td>
        <td>Params</td>
        <td>Link</td>
    </tr>
    <tr>
        <td>1</td>
        <td>[POST]</td>
        <td>username: admin
            <br/>
            password : 123456 
        </td>
        <td>localhost:[PORT]/auth</td>
    </tr>
    <tr>
        <td>2</td>
        <td>[GET]</td>
        <td></td>
        <td>localhost:[PORT]/jabatan</td>
    </tr>
    <tr>
        <td>3</td>
        <td>[POST]</td>
        <td>nama : Manajer</td>
        <td>localhost:[PORT]/jabatan/create</td>
    </tr>
    <tr>
        <td>4</td>
        <td>[POST]</td>
        <td>id_jabatan : 0</td>
        <td>localhost:[PORT]/jabatan/update/getdata</td>
    </tr>
    <tr>
        <td>5</td>
        <td>[PUT]</td>
        <td>
            id_jabatan : 0<br/>
            nama: Staff
        </td>
        <td>localhost:[PORT]/jabatan/update/save</td>
    </tr>
        <tr>
        <td>6</td>
        <td>[DELETE]</td>
        <td>id_jabatan : 0</td>
        <td>localhost:[PORT]/jabatan/delete</td>
    </tr>
    <tr>
        <td>7</td>
        <td>[GET]</td>
        <td></td>
        <td>localhost:[PORT]/karyawan</td>
    </tr>
    <tr>
        <td>8</td>
        <td>[POST]</td>
        <td>
            id_jabatan: 0<br>
            nama : priyo subarkah<br/>
            alamat: Jl Kalimati No 33, Kalasan Sleman, Yogyakarta<br>
            jenis_kelamin : Laki - Laki<br/>
            agama : Islam<br/>
            tgl_bergabung : 21-03-2022
        </td>
        <td>localhost:[PORT]/karyawan/create</td>
    </tr>
    <tr>
        <td>9</td>
        <td>[POST]</td>
        <td>id_karyawan : 0</td>
        <td>localhost:[PORT]/karyawan/update/getdata</td>
    </tr>
    <tr>
        <td>10</td>
        <td>[PUT]</td>
        <td>
            id_karyawan: 0<br/>
            id_jabatan : 0<br/>
            nama : priyo subarkah<br/>
            alamat: Jl Kalimati No 33, Kalasan Sleman, Yogyakarta<br>
            jenis_kelamin : Laki - Laki<br/>
            agama : Islam<br/>
            tgl_bergabung : 21-03-2022
        </td>
        <td>localhost:[PORT]/karyawan/update/save</td>
    </tr>
    </tr>
        <tr>
        <td>11</td>
        <td>[DELETE]</td>
        <td>id_karyawan : 0</td>
        <td>localhost:[PORT]/karyawan/delete</td>
    </tr>
        <tr>
        <td>12</td>
        <td>[GET]</td>
        <td></td>
        <td>localhost:[PORT]/keluarga</td>
    </tr>
    <tr>
        <td>13</td>
        <td>[POST]</td>
        <td>
            id_karyawan : 0<br/>
            nama: Kurnia Dwi Rahmawati<br>
            pekerjaan : Ibu Rumah Tangga<br/>
            hubungan : Istri<br/>
        </td>
        <td>localhost:[PORT]/keluarga/create</td>
    </tr>
    <tr>
        <td>14</td>
        <td>[POST]</td>
        <td>id_keluarga : 0</td>
        <td>localhost:[PORT]/karyawan/update/getdata</td>
    </tr>
    <tr>
        <td>15</td>
        <td>[PUT]</td>
        <td>
            id_keluarga : 0<br/>
            id_karyawan : 0<br/>
            nama: Kurnia Dwi Rahmawati<br>
            pekerjaan : Ibu Rumah Tangga<br/>
            hubungan : Istri<br/>
        </td>
        <td>localhost:[PORT]/keluarga/update/save</td>
    </tr>
    </tr>
        <tr>
        <td>16</td>
        <td>[DELETE]</td>
        <td>id_keluarga : 0</td>
        <td>localhost:[PORT]/keluarga/delete</td>
    </tr>
        </tr>
        <tr>
        <td>17</td>
        <td>[GET]</td>
        <td></td>
        <td>localhost:[PORT]/user_login</td>
    </tr>
    <tr>
        <td>18</td>
        <td>[POST]</td>
        <td>
            id_karyawan : 0<br/>
            username: opdebug<br>
            password : 123456<br/>
        </td>
        <td>localhost:[PORT]/user_login/create</td>
    </tr>
    </tr>
        <tr>
        <td>19</td>
        <td>[DELETE]</td>
        <td>username : opdebug</td>
        <td>localhost:[PORT]/user_login/delete</td>
    </tr>
</table>




