import React, { createContext, useState } from 'react';

const InformasiContext = createContext();

export const InformasiProvider = ({children}) => {
    const [informasi, setInformasi] = useState([
        {
            id: 0,
            jenis: "Informasi",
            judul: "Pencegahan PMK dan Penanganannya",
            tanggal: '2020-12-01',
            penulis: "Sukianto",
            gambar: "https://i.ibb.co/TwJpnzZ/010202000-1533270113-dampak-musim-kemarau-peternak-sapi-kesulitan-mendapat-rumput-segar-23e3fb.jpg",
            deskripsi: `Penyakit mulut dan kuku (PMK) adalah penyakit infeksi virus yang bersifat akut dan sangat menular. 
            
            Penyakit ini menyerang semua hewan berkuku belah/genap, seperti sapi, kerbau, babi, kambing, domba termasuk juga hewan liar seperti gajah, rusa dan sebagainya. Virus dapat bertahan lama di lingkungan, dan bertahan hidup di tulang, kelenjar, susu serta produk susu. Masa inkubasi 1-14 hari, virus awet dalam pendinginan dan terinaktivasi oleh temperature > 500 dan terinaktivasi pada pH < 6,0 & pH > 9,0. Penyakit ini ditandai dengan adanya pembentukan vesikel atau lepuh dan erosi di sekitar mulut, lidah, gusi, nostril, puting, dan di kulit sekitar kuku, pincang dan bahkan kuku bisa terlepas, hipersalivasi,  hewan lebih sering berbaring; pada ternak potong terjadi penurunan bobot badan dan pada ternak perah terjadi penurunan produksi susu yang drastis. Morbiditas biasanya tinggi mencapai 100%, namun mortalitas/tingkat kematian untuk hewan dewasa biasanya sangat rendah, akan tetapi pada hewan muda bisa mencapai 50%. PMK disebut juga sebagai air borne disease karena sangat kecilnya virus ini mampu menyebar cepat dengan bantuan angin sampai ratusan kilometer. Penyakit mulut dan kuku tidak ditularkan ke manusia (bukan penyakit zoonosis), sehingga daging dan susu aman untuk dikonsumsi. Daging dan susu sapi yang dikonsumsi harus dengan pengolahan yang sempurna. Pengolahan ini penting demi mematikan virus yang terdapat di dagingnya sehingga bisa diminimalisir masuk ke tubuh manusia. Ini yang harus dipahami masyarakat bahwa tidak perlu takut mengkonsumsi daging dan susu, tapi harus diperhatikan pengolahan daging dan susu dengan benar sehingga virus menjadi in-aktif. 
            Kerugian dari dampak penyakit ini bukan hanya dirasakan oleh peternak, namun juga dapat dirasakan oleh masyarakat luas. Potensi kerugian ekonomi yang ditimbulkan oleh PMK ini tidak hanya pada peternak yang mengalami penurunan produktivitas hingga kehilangan hasil, akan tetapi kerugian secara nasional. Kerugian ekonomi bagi kegiatan usaha peternak terutama disebabkan oleh kehilangan produktivitas karena penurunan produksi susu (25% per tahun), penurunan tingkat pertumbuhan sapi potong (10% – 20%), kehilangan tenaga kerja (60% – 70%), penurunan fertilitas (10%) dan perlambatan kebuntingan, kematian anak (20% – 40%), dan pemusnahan ternak yang terinfeksi secara kronis. Mengingat besarnya potensi kerugian ekonomi yang dapat ditimbulkan oleh merebaknya PMK ini, maka sangat perlu upaya edukasi kepada masyarakat tentang upaya pencegahan dan penanganannya.`,
        },
        {
            id: 1,
            jenis: "Informasi",
            judul: "Bisnis Seputar Susu Sapi Dimasa Milenial",
            tanggal: '2022-06-22',
            penulis: "Michael Tresno",
            gambar: "https://i.ibb.co/9hhPCMP/14327-730x420px.jpg",
            deskripsi: `Susu segar merupakan kategori minuman kesehatan yang memiliki banyak kandungan yang bermanfaat. Manfaatnya antara lain untuk meningkatkan kekuatan tulang, daya tahan tubuh, menjaga kesehatan gigi, dan sebagainya. Minuman yang memiliki gizi tinggi masih membuka peluang cuan yang tinggi. Tak heran jika susu masih menjadi minuman wajib bagi kebanyakan orang. Maka, Anda dapat melihat peluang ini untuk mendirikan bisnis susu. Jika Anda ingin mendirikan bisnis, gunakan aplikasi POS terlengkap untuk mempermudah pengelolaan bisnis secara optimal. Bisnis susu merupakan bisnis yang berpeluang dan menjanjikan saat ini. Minuman susu menjadi minuman yang sedang trend dan kekinian saat ini. Ketika ingin mendirikan bisnis, Anda perlu menggunakan software POS yang sudah terintegrasi untuk mendapatkan update inventaris secara real-time. Banyak varian rasa yang dapat menjadi inspirasi Anda dalam menjalankan bisnis ini. Sehingga beberapa minuman kekinian masih mencampurkan susu segar sebagai kunci minumannya. Minuman yang dapat dicampur dengan susu seperti thai tea, minuman boba, milkshake, hingga kopi. Anda dapat mengelola bisnis tersebut dengan bantuan sistem POS terbaik untuk mendapatkan hasil laporan bisnis secara akurat. Jika Anda sudah membayangkan betapa mudahnya untuk memulai bisnis susu, lalu bagaimana cara sukses dalam mengembangkannya? Simak pada bagian ini yang akan membahas tips sukses dalam mengembangkannya.`,
        },
        {
            id: 2,
            jenis: "Informasi",
            judul: "Cara Susu Expor Sapi Bagi Pemula",
            tanggal: '2021-03-12',
            penulis: "Haris Setiawan",
            gambar: "https://i.ibb.co/GHkRFKS/padang-manggateh-6-169.jpg",
            deskripsi: `Sebagai negara agraris dengan jumlah penduduk terbesar ke-4 di dunia, Indonesia harus mampu mewujudkan kemandirian dan ketahanan pangan. Revolusi peternakan 2020 seperti diprediksikan Delgado, et al., (1998) yang akan terjadi di negara-negara berkembang, ternyata dapat berubah menjadi ancaman karena Indonesia sudah masuk dalam food trap negara-negara maju. Pertambahan penduduk, perkembangan ekonomi, serta perubahan gaya hidup masyarakat Indonesia telah mendorong peningkatan konsumsi protein hewani, ironisnya hal ini justru mendorong peningkatan impor beberapa komoditas pangan yang terkait dengan peternakan, antara lain susu dalam jumlah yang sangat besar (lebih dari 70%). Industri Pengolahan Susu (IPS) mempunyai peranan penting dan strategis dalam upaya penyediaan dan pencukupan gizi masyarakat. Industri ini mempunyai peluang besar dalam upaya penyediaan produk susu bagi 220 juta penduduk Indonesia yang saat ini konsumsi ratarata baru mencapai 10,47 kg/kapita/tahun, masih jauh dibawah negara ASEAN yaitu Philipina 20 kg/kapita/tahun, Malaysia 20 kg/kapita/tahun, Thailand 20-25 kg/kapita/tahun, dan Singapura 32 kg/kapita/tahun. Peran dan kontribusi IPS dalam memenuhi permintaan susu saat ini sangat penting dan perlu terus dipertahankan, namun ke depan harus ada alternatif lain agar perkembangan IPS mampu menghadapi dinamika dan perubahan harga susu di tingkat global yang sulit diprediksi. Total produksi Susu Segar Dalam Negeri (SSDN) sebesar + 1,4 juta kg/hari atau + 511.000 ton/tahun. Adapun bahan baku susu segar dari peternak sapi perah dalam negeri yang diserap oleh IPS pada tahun 2008 sebesar 474.500 ton (1,3 juta kg/hari), sisanya diimpor sebesar 180.912 ton (sumber BPS). Potensi produksi susu di Indonesia terkonsentrasi di wilayah Jawa Barat, Jawa Tengah, dan Jawa Timur. Sedangkan untuk wilayah diluar Jawa relatif lebih kecil meliputi Sumatera Selatan, Sumatera Barat, Bengkulu, Kalimantan Barat, Kalimantan Selatan, dan Sulawesi Selatan.  Produksi riil industri susu pada tahun 2008 sebesar 622.720 ton dengan tingkat utilisasi 103.49%. Produk susu dan makanan dari susu selain untuk memenuhi kebutuhan dalam negeri, sebagian juga diekspor dimana volume ekspor tahun 2008 sebesar 6.939 ton dengan nilai sebesar US$ 11.698.478. Sedangkan volume impor produk susu dan makanan dari susu sebesar 39.975 ton dengan nilai sebesar US$ 146.681.652`,
        },
        {
            id: 3,
            jenis: "Informasi",
            judul: "Penyakit mulut dan kuku (PMK) juga dikenal sebagai Foot.",
            tanggal: '2022-07-19',
            penulis: "Harun Asrori",
            gambar: "https://i.ibb.co/2jYVQBC/image-12-1.png",
            deskripsi: `Dokter hewan sekaligus dosen Sekolah Kedokteran Hewan dan Biomedis (SKHB) Institut Pertanian Bogor (IPB), Denny Widaya Lukman pun menegaskan bahwa PMK yang terjadi pada hewan tidak dapat menular ke manusia.

            Begitupun pada seseorang yang bertugas untuk menyembelih hewan yang ternyata mengidap PMK namun tidak menunjukkan gejala. Orang yang bersangkutan tidak akan ikut tertular virus dari PMK tersebut.
            
            "Penyakit ini tidak menular ke orang. Sekali lagi, penyakit ini tidak menular ke orang. Pertanyaannya, 'Pak kalau saya menyembelih kebetulan hewannya sakit apakah saya juga akan tertular?' Tidak. Sekali lagi, tidak menular ke orang," ujar Denny dalam webinar Sosialisasi Kurban Dalam Kondisi Wabah Penyakit Mulut dan Kuku ditulis Kamis, (30/6/2022).
            
            Namun di sisi lain Denny menjelaskan bahwa manusia dapat membawa virus PMK dari hewan yang sakit ke hewan yang sehat.
            
            "Jadi peran manusia atau perilaku manusia ini sangat penting. Oleh sebab itu kenapa pemerintah mengimbau ataupun melarang lalu lintas hewan dari daerah yang tertular ke daerah yang bebas, karena ini akan membawa virus ke daerah yang bebas," kata Denny.`,
        },
        {
            id: 4,
            jenis: "Kegiatan",
            judul: "Kontribusi Peternakan",
            tanggal: '2020-12-01',
            penulis: "Sukianto",
            gambar: "https://i.ibb.co/b7fBQNn/image-7-1.png",
            deskripsi: `Musim hujan sudah datang nih sob, sebagai peternak kita harus mewaspadai dengan berbagai macam penyakit yang menyerang ternak. Yang disebabkan karena suhu udara yang dingin dengan kondisi kandang yang kotor, becek, basah bahkan banjir. Perubahan kondisi lingkungan serta manajemen kandang yang kurang baik akan mempengaruhi kondisi kesehatan ternak. 

            Karena pada musim ini kelembapan kandang akan semakin meningkat maka perkembangan bakteri, virus, parasit serta jamur akan semakin meningkat. Dan penyebaran penyakit tidak hanya dari vektor pembawa penyakit (nyamuk, lalat, tikus) saja namun penyebaran langsung juga akan terjadi. Pada musim seperti ini ternak juga banyak yang mengalami kembung karena suhu yang dingin dan juga kelembapan yang tinggi.
            
            Pada saat curah hujan yang tinggi maka hijauan juga akan menjadi basah. Hal ini juga akan memicu terjadinya kembung pada ternak apalagi kalau hijauan tersebut masih muda. Kejadian kembung ini perlu diwaspadai karena dapat mengakibatkan kematian pada ternak apabila tidak segera ditangani. 
            
            Kejadian kembung ini sangat sering terjadi pada hewan ternak. Selain kembung, ternak juga akan mengalami diare yang disebabkan karena rumput yang di makan banyak mengandung air dan beresiko tercemar oleh kotoran maupun agen penyakit pada saat musim hujan.
            
            Manajemen kandang yang kurang baik sehingga mengakibatkan adanya genangan air dan banyaknya kotoran didalam lingkungan kandang hal tersebut akan berpotensi timbulnya larva cacing yang akan menempel ke hijauan, sehingga larva tersebut termakan oleh ternak. Akibat dari ternak yang cacingan adalah sebagai berikut :
            
            1.     Penurunan berat badan
            
            2.     Pertumbuhan menjadi terhambat
            
            3.     Penurunan produksi susu
            
            4.     Kerugian ekonomi bagi para peternak
            
            Walaupun cacingan merupakan penyakit yang tidak berbahaya maupun mematikan tapi apabila tidak segera ditangani dan menjadi sangat parah akan mengakibatkan kekurangan nutrisi dan akhirnya mengakibatkan kematian pada ternak.
            
            Selain kejadian kembung dan diare pada saat musim hujan ternak kebanyakan akan mengalami demam atau paling sering yang menyerang pada ternak yaitu Bovine ephemera fever (BEF) atau biasa disebut dengan demam tiga hari atau three day’s sickness, penyakit ini sudah pernah ternakmin bahas di artikel sebelumnya ya sob. 
            
            Selain demam penyakit ini juga kadang diikuti dengan pilek dan juga pincang. Penyebaran penyakit ini disebabkan oleh vektor nyamuk yang meningkat pada saat musim hujan dan hembusan angin yang kencang yang bersifat lembab dan basah yang akan menyebarkan vektor.`,
        },
        {
            id: 5,
            jenis: "Kegiatan",
            judul: "Kebangkitan Peternakan",
            tanggal: '2022-11-21',
            penulis: "Brahmana Ajie",
            gambar: "https://i.ibb.co/nQJTc3R/image-8-1.png",
            deskripsi: `Demam tiga hari atau biasa disebut dengan Bovine ephemeral fever (BEF) merupakan penyakit yang disebabkan oleh penyakit virus yang disebabkan oleh hewan nyamuk. Penyakit ini ditandai dengan adanya demam selama tiga hari, kadang sampai terjadi kekakuan dan kelumpuhan pada anggota gerak ternak tersebut.

            Namun setelah tiga hari ternak tersebut akan mengalami kesembuhan secara spontan. Oleh karena itu kenapa penyakit ini dapat dikatakan demam tiga hari atau three day sickness atau Bovine Ephemeral Fever (BEF). Perpindahan penularan penyakit ini dari vektor terinfeksi melalui angin yang diduga telah menyebabkan wabah dibeberapa daerah. Selain itu kondisi lingkungan dan iklim didaerah setempat yang juga dapat mempengaruhi habitat vektor dan mempengaruhi penyebaran penyakit tersebut.
            
            Kejadian tertinggi penyakit ini terjadi pada saat musim hujan untuk daerah tropis dan pada daerah subtropis kejadian tertinggi pada saat musim panas sampai musim semi. Ternak yang terinfeksi oleh virus ini akan mengalami demam tinggi yaitu sekitar 40 sampai 42 yang dimana kondisi normalnya yaitu 38 sampai 39. Hal ini juga akan mengakibatkan leleran pada hidung ternak, ada juga ternak yang sampai mengakibatkan kepincangan atau gemetar pada saat berdiri.
            
            Demam yang terlalu tinggi ini akan mengakibatkan otot ternak akan mengalami tegang yang berakibat kaki akan gemetar dan kepincangan. Selain itu ternak juga akan mengalami sesak nafas dan kegelisahan karena demam yang tinggi, ternak juga akan tampak lemas, nafsu makan menurun.
            
            Pada sapi perah atau ternak yang terkena BEF akan mengakibatkan penurunan produksi susu, serta pada ternak yang sedang hamil juga akan berakibat keguguran karena gagalnya pada sistem reproduksinya. Penyakit ini juga dapat mengakibatkan kematian pada ternak. Tingkat kematiannya tergolong rendah yaitu mencapai 0-2% sedangkan tingkat penularannya dapat mencapai 80%.
            
            Untuk pencegahan dapat dilakukan dengan cara memberikan vaksinasi BEF atau melakukan kontrol pada populasi nyamuk sebagai vektor penyebaran penyakit. Walaupun begitu untuk kontrol populasi nyamuk masihlah susah dikendalikan karena tingkat reproduksi nyamuk dan berkembangbiaknya yang cukup cepat. Dan untuk vaksinasi sendiri juga masih belum beredar luas walaupun kasus kejadian penyakit ini cukup tinggi.
            
            Maka untuk mengurangi hal tersebut terjadi maka sebaiknya dilakukan manajemen kandang yang baik seperti diterapkannya sanitasi atau kebersihan kandang dan lingkungan harus dijaga, jumlah ternak dalam satu kandang tidak terlalu padat dan jalannya pembuangan air dan kotoran yang baik sehingga tidak menimbulkan penimbunan genangan pada saluran air dan kotoran yang akan mendatangkan nyamuk dan lalat yang akan memperparah kondisi kesehatan ternak.`,
        },
        {
            id: 6,
            jenis: "Kegiatan",
            judul: "Kedualatan Pangan",
            tanggal: '2022-10-13',
            penulis: "Sukianto",
            gambar: "https://i.ibb.co/Bj1TQ9z/image-6-2.png",
            deskripsi: `Beli daging sapi murah online sekarang telah menjadi pilihan yang lebih praktis dan ekonomis dikarenakan berbagai macam keuntungan yang dapat didapatkan untuk pembeli dan juga penjual. 

            Dengan meningkatnya kebutuhan pangan khususnya beli daging, akses untuk beli daging online berkualitas tinggi dengan harga terjangkau menjadi kebutuhan yang penting. Pembeli juga sekarang memiliki standar kualitas yang tinggi.
            
            Industri daging Indonesia terus berkembang dan industri digital yang tumbuh dengan cepat tentunya mengubah proses jual-beli daging berubah. Jaman sekarang ada banyak cara berbeda untuk membeli daging di luar metode tradisional. Salah satu pilihan praktis yang terus berkembang pesat adalah beli daging online.
            
            Jika kamu tertarik beli daging murah online, berikut beberapa tips yang perlu diperhatikan sehingga kamu dapat beli daging dengan kualitas tinggi dan harga terjangkau.
            
            Bandingkan Harga
            
            Jika kamu ingin beli daging online di tahun 2022, pastikan kamu mempelajari berbagai potongan daging sapi. Dengan banyaknya berbagai macam potongan daging, dengan beli daging online kamu dengan mudah juga dapat membandingkan harga dan stok daging yang tersedia di toko tersebut. 
            
            Sebelum beli daging online kamu juga bisa lebih mudah mendapatkan potongan yang dibutuhkan dengan mempelajari berbagai potongan daging sapi dan membantu kamu dengan mudah mengidentifikasi daging apa yang kamu cari dan tepat kebutuhan kamu. Hal ini dikarenakan, stok daging online biasanya lebih banyak dan bila kamu tidak mengetahui potongan yang tepat untuk kebutuhanmu, maka akan lebih mudah kamu mengalami information overload.
            
            Kenali Penjual Daging Online
            
            Saat beli daging murah online, pastikan kamu beli daging dari penjual yang terpercaya, seperti Ternakmart oleh Ternaknesia. Kamu bisa lihat dari testimoni pembeli lain dan juga tentang penjual daging online tersebut. Ternakmart telah terbukti kualitasnya dan telah dipercayai oleh pembeli akan kualitas dagingnya yang disuplai oleh peternakan lokal dan halal. 
            
             
            
                2. Menghemat Banyak Biaya Seperti Transportasi
            
            Karena tukang daging online dapat menekan biaya seperti staf dan memiliki biaya overhead yang lebih rendah daripada supermarket atau toko fisik lainnya, hal ini memungkinkan kami untuk menyediakan daging berkualitas tinggi dengan harga yang lebih rendah dengan pengalaman berbelanja yang lebih nyaman, mudah, dan praktis.
            
            Beli daging online juga memudahkan pembeli untuk membandingkan harga. Daripada harus berpindah dari satu toko ke toko lain untuk menemukan penawaran terbaik, pembeli dapat dengan mudah menemukan harga terbaik di komputer atau smartphone. Biasanya stok daging yang tersedia juga lebih banyak daripada toko daging offline, sehingga kamu pasti dapat mendapatkan potongan daging yang kami butuhkan.
            
                3. Kualitas Lebih Terjamin
            
            Jika pelanggan membeli daging dari supermarket, kemungkinan besar daging tersebut telah melewati beberapa tangan dan pihak yang berbeda sebelum kamu mengambilnya dari rak. 
            
            Saat pelanggan beli daging online dari tukang daging online seperti Ternakmart, kamu bisa yakin atas kualitas daging yang terjamin dan berasal dari tukang daging lokal. Ternakmart hanya menjual potongan daging segar berkualitas yang lezat ke seluruh Indonesia.
            
                4. Baca Deskripsi Produk dan Pilih yang Terbaik
            
            Apabila kamu beli daging murah online, kebanyak daging sapi beku yang dijual secara online umumnya adalah daging sapi impor dari Australia atau Amerika Serikat (US). Daging sapi ini biasanya dipotong secara masal dan dibekukan saat diimport.
            
            Namun ada juga penjual daging sapi online yang menjual daging sapi segar dan beku yang disuplai langsung oleh peternak lokal seperti Ternakmart. Beli daging sapi dari Ternakmart tidak hanya mudah dan aman, tapi juga terjamin kualitasnya dan halal. 
            
            Pastikan untuk pembeli untuk memahami dan membaca deskripsi produk saat beli daging murah online agar kamu mendapatkan daging sapi kualitas tinggi. Penjual daging online yang baik dan terpercaya biasanya memasukan deskripsi daging yang akan kamu beli, sehingga pembeli lebih terbantu untuk mengetahui jenis dan kualitas daging yang akan dibeli.
            
                5. Pastikan Detail Pengiriman dan Pilihan Kurir
            
            Saat beli daging murah online, daging sapi beku harus tetap dijaga dalam keadaan dan temperatur yang  tepat. Oleh karena itu, pastikan kamu memilih penjual yang terpercaya dan memilih jasa kirim yang paling cepat agar kualitas daging tidak menurun di perjalanan.
            
            Dengan mengutamakan jasa pengiriman yang paling cepat seperti instan atau same day jika memungkinkan saat beli daging murah online, kualitas daging yang akan kamu terima juga dapat dijaga. Beberapa penjual yang mengirimkan juga menyediakan packaging yang dijamin akan menjaga kualitas daging yang kamu beli.
            
            Pada jaman ini, peminat daging sapi beku online sangatlah meningkat karena kenyamanan dan sangatlah praktis. Toko jual daging online seperti Ternakmart, bekerja sama dengan peternak lokal untuk memastikan kualitas daging yang terbaik, proses yang halal, dan juga membantu mendukung peternak lokal dalam suplai daging. 
            
            Dengan mengikuti tips-tips di atas, kamu dapat beli daging murah online dengan aman dan tepat agar kamu bisa membeli daging berkualitas yang kamu butuhkan. Salah satu penjual daging murah online dan berkualitas adalah Ternakmart.Jika kamu memiliki kebutuhan daging online kamu bisa langsung aja beli di Ternakmart.`,
        },
        {
            id: 7,
            jenis: "Kegiatan",
            judul: "Pencegahan PMK dan Penanganannya",
            tanggal: '2020-12-01',
            penulis: "Haris Hakim",
            gambar: "https://i.ibb.co/Gv5ccQF/Realisasi-asuransi-ternak-capai-90.jpg",
            deskripsi: `Kondisi dan budaya di Indonesia sekarang ini juga membuat permintaan akan daging sapi dan susu semakin meningkat membuat bisnis ternak sapi potong sangatlah menjanjikan. Terlebih lagi Indonesia dengan mayoritas penduduknya beragama Islam memiliki setidaknya tiga hari besar di mana biasanya permintaan daging sapi naik drastis, yaitu bulan Ramadhan, Hari Raya Idul Fitri dan Idul Adha.


            Peternakan sapi yang dijalankan di Indonesia sebagian besar merupakan peternakan berskala kecil dan masih dilakukan secara tradisional serta sangat minim teknologi. Peternak-peternak ini tersebut pada umumnya merupakan pekerjaan sampingan sebagai sebagai asuransi atau tabungan semata. Oleh karena itu banyak mereka yang berpikiran untuk bisnis sapi ternak tahun 2022 membutuhkan komunitas dan tips yang bisa ditemukan di banyak komunitas peternak milenial seperti di Ternaknesia.
            
            
            Mengenal jenis-jenis sapi potong memang sangat penting. Tujuannya agar memahami karakteristiknya sehingga bisa memilih yang sesuai keinginan. Oleh karena itu sebelum memilih ternak sapi potong untuk bisnis kamu, kenali dulu jenisnya di bawah ini.
            
            
            Sapi limosin
            
            
            Mulanya, sapi limousin dikembangkan di Perancis. Habitat asli sapi limousin adalah kawasan berhawa dingin dan jarang ditumbuhi hijauan atau rumput. Kondisi inilah yang membuat limousin mempunyai daya tahan tubuh yang kuat.
            
            
            Kini, limousin menjadi sapi potong andalan para peternak karena dagingnya berkualitas. Bobot maksimalnya mencapai 1,2 ton. Ciri-cirinya, antara lain berkulit cokelat tua, kaki putih, dan badannya panjang.
            
            
            Ternak sapi limosin memiliki keunggulan tersendiri bila dibandingkan dengan sapi biasa karena pertumbuhan badannya yang sangat cepat. Di dunia industri peternakan sapi Limosin diprediksi akan populer dan menjadi primadona baru. Sapi limosin mulai dilirik para peternak seperti halnya peternak, karena sapi limosin sendiri memiliki pertumbuhan yang cepat dengan harga jual yang lumayan tinggi.
            
            
            
                2. Sapi Simmental
            
            
            Asalnya dari Lembah Simme, Oberland Berner, Swiss. Sapi ini memiliki karakteristik fisik berwarna kuning keemasan hingga cokelat. Bagian wajah, ekor, dan lututnya didominasi putih. Potensi bobotnya antara 600 kg sampai 1,7 ton.
            
            
            Simmental dalam biasanya diternakkan untuk produk susu dan dagingnya. Ini yang membuat sapi Simmental baik untuk ternak sapi potong di tahun 2022. Simmental terkenal akan pertumbuhannya yang cepat pada waktu kecil, asalkan diberi pakan yang cukup. Simmental dapat memberikan keseimbangan yang baik antara jumlah daging dan susu yang dapat dihasilkan daripada sapi ras lain.
            
            
            
                3. Sapi Brahman
            
            Salah satu jenis sapi potong terbaik lainnya adalah sapi brahman yang merupakan ternak asli India dengan ciri khas punuk besar di atas bahu. 
            
            
            Sapi brahman adalah keturunan sapi zebu, meskipun aslinya berasal dari India, sapi brahman lalu mulai terkenal saat kemudian masuk ke Amerika pada tahun 1849 berkembang pesat di Amerika, Di Amerika Serikat, sapi brahman dikembangkan untuk diseleksi dan ditingkatkan mutu genetiknya. `,
        },
    ]);

    const addInformasi = (data) => {
        setInformasi([...informasi, data]);
    }

    return(
        <InformasiContext.Provider value={{informasi, addInformasi}}>
            {children}
        </InformasiContext.Provider>
    )
}

export default InformasiContext;