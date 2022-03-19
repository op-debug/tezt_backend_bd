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
        <td>
            body = <br>
            username: admin<br/>
            password : 123456 
        </td>
        <td>http://localhost:[PORT]/auth</td>
    </tr>
    <tr>
        <td>2</td>
        <td>[GET]</td>
        <td>
            <b>header = </b><br>
            x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs
        </td>
        <td>http://localhost:[PORT]/jabatan</td>
    </tr>
    <tr>
        <td>3</td>
        <td>[POST]</td>
        <td>
            <b>header = </b><br>
            x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
            
            <b>body = </b><br>
            nama : Manajer</td>
        <td>http://localhost:[PORT]/jabatan/create</td>
    </tr>
    <tr>
        <td>4</td>
        <td>[POST]</td>
        <td>
            <b>header = </b><br>
            x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br>
            <b>body = </b><br>
            id : 1</td>
        <td>http://localhost:[PORT]/jabatan/getdatabyid</td>
    </tr>
    <tr>
        <td>5</td>
        <td>[PUT]</td>
        <td>
            <b>header = </b><br>
            x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
            <b>body = </b><br>
            id : 1<br/>
            nama: Staff
        </td>
        <td>http://localhost:[PORT]/jabatan/update</td>
    </tr>
        <tr>
        <td>6</td>
        <td>[DELETE]</td>
        <td>
            <b>header = </b><br>
            x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
            <b>body = </b><br>
            id_jabatan : 1</td>
        <td>http://localhost:[PORT]/jabatan/delete</td>
    </tr>
    <tr>
        <td>7</td>
        <td>[GET]</td>
        <td>
            <b>header = </b><br>
            x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br>
        </td>
        <td>http://localhost:[PORT]/karyawan</td>
    </tr>
    <tr>
        <td>8</td>
        <td>[POST]</td>
        <td>
            <b>header = </b><br>
            x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
            <b>body = </b><br>
            id_jabatan: 0<br>
            nama : priyo subarkah<br/>
            alamat: Jl Kalimati No 33, Kalasan Sleman, Yogyakarta<br>
            jenis_kelamin : Laki - Laki<br/>
            agama : Islam<br/>
            tgl_bergabung : 21-03-2022
        </td>
        <td>http://localhost:[PORT]/karyawan/create</td>
    </tr>
    <tr>
        <td>9</td>
        <td>[POST]</td>
        <td>
            <b>header = </b><br>
            x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
            <b>body = </b><br>
            id_karyawan : 0</td>
        <td>http://localhost:[PORT]/karyawan/update/getdata</td>
    </tr>
    <tr>
        <td>10</td>
        <td>[PUT]</td>
        <td>
            <b>header = </b><br>
            x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
            <b>body = </b><br>
            id_karyawan: 0<br/>
            id_jabatan : 0<br/>
            nama : priyo subarkah<br/>
            alamat: Jl Kalimati No 33, Kalasan Sleman, Yogyakarta<br>
            jenis_kelamin : Laki - Laki<br/>
            agama : Islam<br/>
            tgl_bergabung : 21-03-2022
        </td>
        <td>http://localhost:[PORT]/karyawan/update/save</td>
    </tr>
    </tr>
        <tr>
        <td>11</td>
        <td>[DELETE]</td>
        <td>
        <b>header = </b><br>
        x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
        <b>body = </b><br>
        id_karyawan : 0</td>
        <td>http://localhost:[PORT]/karyawan/delete</td>
    </tr>
        <tr>
        <td>12</td>
        <td>[GET]</td>
        <td>
            <b>header = </b><br>
            x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br>
        </td>
        <td>http://localhost:[PORT]/keluarga</td>
    </tr>
    <tr>
        <td>13</td>
        <td>[POST]</td>
        <td>
            <b>header = </b><br>
            x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
            <b>body = </b><br>
            id_karyawan : 0<br/>
            nama: Kurnia Dwi Rahmawati<br>
            pekerjaan : Ibu Rumah Tangga<br/>
            hubungan : Istri<br/>
        </td>
        <td>http://localhost:[PORT]/keluarga/create</td>
    </tr>
    <tr>
        <td>14</td>
        <td>[POST]</td>
        <td>
        <b>header = </b><br>
        x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
        <b>body = </b><br>
        id_keluarga : 0</td>
        <td>http://localhost:[PORT]/karyawan/update/getdata</td>
    </tr>
    <tr>
        <td>15</td>
        <td>[PUT]</td>
        <td>
            <b>header = </b><br>
            x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
            <b>body =</b> <br>
            id_keluarga : 0<br/>
            id_karyawan : 0<br/>
            nama: Kurnia Dwi Rahmawati<br>
            pekerjaan : Ibu Rumah Tangga<br/>
            hubungan : Istri<br/>
        </td>
        <td>http://localhost:[PORT]/keluarga/update/save</td>
    </tr>
    </tr>
        <tr>
        <td>16</td>
        <td>[DELETE]</td>
        <td>
        <b>header = </b><br>
        x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
        <b>body = </b><br>
        id_keluarga : 0</td>
        <td>http://localhost:[PORT]/keluarga/delete</td>
    </tr>
        </tr>
        <tr>
        <td>17</td>
        <td>[GET]</td>
        <td>
            <b>header = </b><br>
            x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
        </td>
        <td>http://localhost:[PORT]/userlogin</td>
    </tr>
    <tr>
        <td>18</td>
        <td>[POST]</td>
        <td>
            <b>header = </b><br>
            x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
            <b>body = </b><br>
            id_karyawan : 1<br/>
            username: opdebug<br>
            password : 123456<br/>
        </td>
        <td>http://localhost:[PORT]/userlogin/create</td>
    </tr>
    </tr>
        <tr>
        <td>19</td>
        <td>[POST]</td>
        <td>
        <b>header = </b><br>
        x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
        <b>body = </b><br>
        id_karyawan : 1</td>
        <td>http://localhost:[PORT]/userlogin/getdatabyid</td>
    </tr>
    </tr>
        <tr>
        <td>19</td>
        <td>[PUT]</td>
        <td>
        <b>header = </b><br>
        x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
        <b>body = </b><br>
        id_karyawan : 1</td>
        username : opdebug</td>
        password : 123456</td>
        <td>http://localhost:[PORT]/userlogin/update</td>
    </tr>
    </tr>
        <tr>
        <td>19</td>
        <td>[DELETE]</td>
        <td>
        <b>header = </b><br>
        x-access-token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjQ3NjUyNzc4LCJleHAiOjE2NDc3MzkxNzh9.5J6LcRb8odCa5IpFEcRWG1hEbN5QpuBI4xvR-wAmMWs<br/>
        <b>body = </b><br>
        is_karyawan : id_karyawan</td>
        <td>http://localhost:[PORT]/userlogin/delete</td>
    </tr>
</table>




