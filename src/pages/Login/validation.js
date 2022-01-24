const rules = {
	email: {
		required: {value: true, message: "Silahkan isi email Anda"},
		maxlength: {value: 255, message: "Mohon maaf, panjang karakter maksimal untuk EMAIL adalah 255 karakter"},
		pattern: {value: /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/, message: "Silahkan masukkan email"}
	},
	password: {
		required: {value: true, message: "Silahkan isi KATA SANDI Anda"},
		maxlength: {value: 255, message: "Mohon maaf, panjang karakter maksimal untuk KATA SANDI adalah 255 karakter"}
	}
}

export {rules}