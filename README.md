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
        <td>4</td>
        <td>[POST]</td>
        <td>id_jabatan : 0<br/>
            nama: Staff
        </td>
        <td>localhost:[PORT]/jabatan/update/save</td>
    </tr>
    <tr>
        <td>4</td>
        <td>[POST]</td>
        <td>id_jabatan : 0<br/>
            nama: Staff
        </td>
        <td>localhost:[PORT]/jabatan/update/save</td>
    </tr>
</table>




