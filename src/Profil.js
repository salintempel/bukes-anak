import React from 'react';

export default function Profil() {
    return (
        <div className="container">
            <h1>Profil User</h1>
            <section className="card">
                <img src={"img"} alt="Profile" />
                <h1>Bulan Maret</h1>
                <p>NIK: 00010001000</p>
                <p>BPJS: 110012333</p>
                <p>Domisili: Jakarta</p>
                <p>Telp: 0811238889</p>
                <p>email: bulanmaret@gmail.com</p>

            </section>
            <section className="profile">
                <form action="" className="form-profile">
                    Nama: <input type="text" />
                    NIK: <input type="text" />
                    BPJS: <input type="text" />
                    Alamat: <input type="text" />
                    Telp: <input type="text" />
                    email: <input type="email" />
                </form>
            </section>
        </div>
    )
}
