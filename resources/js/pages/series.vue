<template>
	<div class="series">
		<div class="series__banner">
			<img :src="asset('dist/img/jujutsukaisen.jpg')" alt="" />
		</div>
		<div class="series__box">
			<div class="series__img">
				<img :src="asset('dist/img/jujutsukaisen.jpg')" alt="" />
			</div>
			<div class="series__body">
				<h3 class="series__title">
					{{ seriesName }}
					<span>呪術廻戦</span>
				</h3>
				<div class="series__button-share">
					<vs-button icon href="" color="facebook">
						<i class="fab fa-facebook"/>
					</vs-button>
					<vs-button icon href="" color="whatsapp">
						<i class="fab fa-whatsapp" />
					</vs-button>
					<vs-button icon href="" color="twitter">
						<i class="fab fa-twitter" />
					</vs-button>
				</div>
				<ul class="series__list-info">
					<li class="series__list-info-item">
						Status: Ongoing
					</li>
					<li class="series__list-info-item">
						Total Episode: 24
					</li>
					<li class="series__list-info-item">
						Tipe: TV
					</li>
					<li class="series__list-info-item">
						Durasi: 24 Menit
					</li>
					<li class="series__list-info-item">
						Studio: <router-link to="/studio/mappa">MAPPA</router-link>
					</li>
					<li class="series__list-info-item">
						Tanggal Rilis: 03, Oct, 202
					</li>
					<li class="series__list-info-item">
						Season: Fall 2020
					</li>
					<li class="series__list-info-item">
						Update On: 23, Jan, 2021
					</li>
				</ul>
				<div class="series__tags">
					<template v-for="(val, i) in genre">
						<router-link class="series__btn" :to="{name: 'genres', params: { genre: val}}">
							{{ _.capitalize(val) }}
						</router-link>
					</template>
				</div>
				<div class="series__rating">
					<p class="series__rating-text">Rating: 8.7</p>
					<b-form-rating v-model="rating" variant="warning" readonly no-border/>
				</div>
			</div>
		</div>
		<div class="series__box">
			<div class="series__header">
				<h3 class="series__title">Sinopsis {{ seriesName }}</h3>
			</div>
			<div class="series__body">
				<p>
					Di dunia di mana para iblis memakan manusia yang tak sadar
					dirinya menjadi mangsa, serpihan dari iblis legendaris dan
					paling ditakuti, Ryoumen Sukuna telah hilang tanpa jejak. Iblis
					mana pun yang memakan anggota tubuh Sukuna akan mendapatkan
					kekuatan yang mampu menghancurkan dunia. Untungnya, ada sebuah
					sekolah misterius bernama Jujutsu yang didirikan untuk
					melindungi manusia dari bahaya undead!
				</p>
				<p>
					Itadori Yuji adalah seorang murid SMA yang menghabiskan waktunya
					merawat kakeknya yang sakit-sakitan. Meski terlihat seperti
					murid SMA kebanyakan, kekuatan fisiknya yang luar biasa
					membuatnya menonjol dari murid lain. Semua ekskul olahraga ingin
					merekrutnya, namun Itadori justru lebih senang bergaul dengan
					murid-murid tersisih dari ekskul gaib. Suatu hari, ekskul gaib
					mendapatkan benda terkutu, namun mereka tak mengetahui teror
					macam apa yang akan muncul jika segelnya terbuka.
				</p>
			</div>
		</div>
		<div class="series__box">
			<div class="series__header">
				<h4 class="series__title">Episode Jujutsu Kaisen</h4>
			</div>
			<div class="series__body">
				<div class="series__episode">
					<router-link v-for="i in 15" :key="i" to="/" class="series__episode-link">
						Jujutsu Kaisen Episode {{i}}
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { BFormRating } from "bootstrap-vue"
export default {
	name: "series",
	components: {
		BFormRating
	},
	data: () => ({
		genre: [
			"action",
			"demons",
			"supranatural",
			"school",
			"shounen"
		],
		rating: 4.7,
	}),
	computed: {
		seriesName() {
			return this._.capitalize(this.$route.params.series).replace(/-/g, " ");
		},
	},
	breadcrumb() {
		return {
			label: this.seriesName,
			parent: "home",
		};
	},
	metaInfo() {
		return {
			titleTemplate: `${this.seriesName} | %s`,
		};
	},
};
</script>
