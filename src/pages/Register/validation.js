const rules = {
    full_name: {
        required: {value: true, message: "Silahkan isi nama lengkap"},
        maxlength: {value: 500, message: "Mohon maaf, maksimal karakter untuk nama adalah 500"}
    },
    email: {
        required: {value: true, message: "Silahkan isi email"},
        maxlength: {value: true, message: "Mohon maaf, maksimal karakter untuk email adalah 255"},
        pattern: {value: /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/, message: "Silahkan isi email yang valid"}
    },
    password: {
        required: {value: true, message: "Silahkan isi kata sandi"},
        maxlength: {value: 255, message: "Mohon maaf, panjang maksimal karakter password adalah 255"}
    },
    password_confirmation: {
        required: {value: true, message: "Silahkan isi konfirmasi kata sandi"}
    }
}

export {rules}