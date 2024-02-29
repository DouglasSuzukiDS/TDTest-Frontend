export const checkValue = {
   checkEmail: (email: string) => {
      let ok = false
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if(regex.test(email)) {
         return true
      } else {
         return false
      }

      // ^ => Representa o início da string.
      // [^\s@]+ => Corresponde a um ou mais caracteres que não sejam espaços em branco ou @.
      // @ => Corresponde ao caractere @.
      // [^\s@]+ => Corresponde a um ou mais caracteres que não sejam espaços em branco ou @.
      // \. => Corresponde ao caractere ponto (.), que é necessário em um endereço de e-mail válido.
      // [^\s@]+ =>  Corresponde a um ou mais caracteres que não sejam espaços em branco ou @.
      // $ =>  Representa o final da string.
   }
}