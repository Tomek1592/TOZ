import Vue from 'vue'
import VueI18n from 'vue-i18n'

const locales = {
  pl: {
    message: {
      hello: 'Witaj!'
    },
    title: {
      transfer: 'Dane do przelewu',
      gallery: 'Galeria'
    },
    button: {
      ok: 'OK',
      cancel: 'Anuluj'
    },
    placeholder: {
      login: 'Login',
      password: 'Hasło'
    },
    navbar: {
      home: 'Strona główna',
      transferDetails: 'Dane do przelewu',
      petsGallery: 'Galeria'
    },
    navigation: {
      back: {
        home: 'Powrót do strony głównej'
      }
    },
    img: {
      alt: {
        dog: 'zdjęcie_psa'
      }
    },
    pets: {
      type: 'Typ',
      sex: 'Płeć',
      name: 'Imię',
      creationDate: 'Data dodania'
    },
    account: {
      accountLink: 'Moje konto',
      oldPassword: 'Stare hasło',
      newPassword: 'Nowe hasło',
      confirmNewPassword: 'Potwierdź nowe hasło',
      changePassword: 'Zmień hasło'
    }
  },
  en: {
    message: {
      hello: 'Hello world!'
    },
    title: {
      transfer: 'Transfer data',
      gallery: 'Gallery'
    },
    button: {
      ok: 'OK',
      cancel: 'Cancel'
    },
    placeholder: {
      login: 'Login',
      password: 'Password'
    },
    navbar: {
      home: 'Home',
      transferDetails: 'Transfer details',
      petsGallery: 'Gallery'
    },
    navigation: {
      back: {
        home: 'Back to Home page'
      }
    },
    img: {
      alt: {
        dog: 'dog_image'
      }
    },
    pets: {
      type: 'Type',
      sex: 'Sex',
      name: 'Name',
      creationDate: 'Creation Date'
    },
    account: {
      accountLink: 'My account',
      oldPassword: 'Old passsword',
      newPassword: 'New password',
      confirmNewPassword: 'Confirm new password',
      changePassword: 'Change password'
    }
  }
}

Vue.use(VueI18n)

Vue.config.lang = 'pl'

Object.keys(locales).forEach((lang) => {
  Vue.locale(lang, locales[lang])
})
