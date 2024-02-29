import { redirect } from "next/navigation"
import { useRouter } from "next/router"

export const api = {
   createAccount: async(name: string, email: string, password: string) => { // Create item in localStorage
      const userData = { name, email, password, logged: false }

      await localStorage.setItem('user', JSON.stringify(userData))

      return true
   },

   login: async(email: string, password: string) => { // Login in system
      const getLocalStorageData = localStorage.getItem('user') // Can return undefined || null

      // Verify is localStorage is valid item
      if(getLocalStorageData !== undefined && getLocalStorageData !== null) {
         const localStorageToObj = JSON.parse(getLocalStorageData) // Transform localStorage to OBJ

         if(localStorageToObj.email === email && localStorageToObj.password === password) {
            localStorageToObj.logged = true

            // Replace item & 'logged' to new value (true)
            localStorage.setItem('user', JSON.stringify(localStorageToObj))

            return true
         } else {
            return false
         } 
      } else {
         return false
      }

      // console.log(getLocalStorageData)
   },

   logout: () => { // Logout system
      localStorage.removeItem('user')

      // redirect('/login')

      return true
   },

   checkLogged: () => {
      const getLocalStorageData = localStorage.getItem('user')

      // Case don't have in localStorage 'user', will be redirect to login
      if(getLocalStorageData === undefined || getLocalStorageData === null) {
         //alert('Make login')
         // redirect('/login')
         return false
      } else { // Case have in localStorage 'user'
         // alert('ok')
         //console.log(getLocalStorageData)

         // Verify if 'logged' not is true, will be redirect to login. Because the user make be register and don't make login
         if(JSON.parse(getLocalStorageData).logged !== true) {
            // alert('To Login Page')
            // redirect('/login')
            return false
         }

         return true
         // Case 'logged' is true, will be transfer to 'home page'
      }
   },

}