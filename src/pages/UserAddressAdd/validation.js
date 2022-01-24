const rules = {

    nama_alamat: {
        required: {value: true, message: "Silahkan isi alamat"},
        maxLength: {value: 500, message: "Silahkan isi alamat yang lebih singkat"},
        minLength: {value: 5, message: "Mohon maaf, alamat anda terlalu singkat"}
    },

    provinsi: {
        required: {value: true, message: "Silahkan pilih provinsi"}
    },

    kabupaten: {
        required: {value: true, message: "Silahkan pilih kabupaten"}
    },

    kecamatan: {
        required: {value: true, message: "Silahkan pilih kecamatan"}
    },

    kelurahan: {
        required: {value: true, message: "Silahkan pilih kelurahan"}
    },

    detail_alamat: {
        required: {value: true, message: "Silahkan isi detail alamat"},
        maxLength: {value: 1000, message: "Mohon maaf, detail alamat Anda terlalu panjang :("}
    }
}

export {rules};
