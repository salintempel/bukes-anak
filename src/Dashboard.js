import React from 'react';

export default function Dashboard() {
	return (
		<div className="container">
			<h1>Summary Info anak, jadwal imunisasi, dsb</h1>
			<div className="centered">
				<section className="cards">
					<article className="card">
						<span>1 th 2 bln</span>
						<h4><b>Usia</b></h4>
					</article>
					<article className="card">
						<span>6 kg</span>
						<h4><b>Berat</b></h4>
					</article>
					<article className="card">
						<span>70 cm</span>
						<h4><b>Tinggi</b></h4>
					</article>
					<article className="card">
						<span>6 Sept 2021</span>
						<h4><b>Jadwal</b></h4>
					</article>
				</section>
			</div>
		</div>
	)
}
