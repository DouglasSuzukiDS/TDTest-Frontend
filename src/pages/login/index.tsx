import { KeyboardEvent, useEffect, useState } from "react";
import Hero from '../../../public/image/Hero.png'
import Image from "next/image";
import { InputField } from "@/components/InputField";
import { CheckField } from "@/components/CheckField";
import Head from "next/head";
import '../../app/globals.css'
import Link from "next/link";
import { Modal } from "@/components/Modal";
import { checkValue } from "@/libs/checkValue";
import { api } from "@/libs/api";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [showPassword, setShowPassword] = useState(false)
   const [checkRadio, setCheckRadio] = useState(false)
   const [saveEmailAndPassword, setsaveEmailAndPassword] = useState(false)

   const [emailForgot, setEmailForgot] = useState('')
   const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false)
   const [showConfirmEmailModal, setShowConfirmEmailModal] = useState(false)

   const colorLayout = '#CC6138'

   const router = useRouter()

   const handleLogin = async() => {
      if(await checkValue.checkEmail(email) && password) {
         if(await api.login(email, password)) {
            router.push('/')
         } else {
            alert('Email / senha incorretos ou dados inexistentes. Caso tenha esquecido sua senha, clique em "Esqueci a senha" ou crie uma nova conta clicando em "Cadastre-se".' )
         }
      } else {
         alert('Email / senha incorretos ou dados inexistentes. Caso tenha esquecido sua senha, clique em "Esqueci a senha" ou crie uma nova conta clicando em "Cadastre-se".' )
      }
   }

   const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
      if((event.key).toLocaleLowerCase() === 'enter') {
         handleLogin()
      }
   }

   const handleKeyPressForgotModal = (event: KeyboardEvent<HTMLInputElement>) => {
      if((event.key).toLocaleLowerCase() === 'enter') {
         handleOpenConfirmEmailModal()
      }
   }

   const handleOpenConfirmEmailModal = () => {
      // Testa para verificar se o 'email informado' é um email válido
      const checkEmail = checkValue.checkEmail(emailForgot)

      // alert(checkEmail)

      if(!checkEmail) {
         alert('Por favor insira um email válido')
      } else {
         setShowForgotPasswordModal(!showForgotPasswordModal)

         setShowConfirmEmailModal(true)
      }
   }

   const handleOpenForgotModal = () => {
      setEmailForgot('')

      setShowConfirmEmailModal(false)

      setShowForgotPasswordModal(true)
   }

   useEffect(() => {
      if(api.checkLogged()) {
         router.push('/dashboard')
      }
   }, [])

   return (
      <>
         <Head>
            <title>Login</title>
         </Head>
         
         <main className="max-w-[1440px] h-screen flex justify-center relative">
            <div className="w-full h-full flex mobile:flex-col tablet:flex-row">
               {/* Image Area  */}
               <div className="w-1/2 h-1/2 mobile:w-full tablet:w-1/2 tablet:h-screen">
                  <Image
                     src={Hero}
                     alt="Image Hero"
                     className="h-full"
                  />
               </div>

               {/* Login Area */}
               <div className="w-full flex flex-col justify-center items-center tablet:w-1/2">
                  <h1
                     className="text-beige font-bold mobile:text-font-42 sm:text-7xl md:text-7xl">
                     {/* style={{ fontSize: '80px' }}> */}
                     Login
                  </h1>

                  {/* Form Area  */}
                  <div className="w-full px-4 max-w-[540px] tablet:px-10">
                     {/* Email */}
                     <div>
                        <InputField
                           label="Email"
                           placeholder="Insira seu email"
                           color={colorLayout}
                           value={email}
                           onChange={setEmail}
                           icon={{
                              icon: 'Mail',
                              color: '#333',
                              width: 26,
                              height: 26
                           }}
                           onKeyPress={ (event: KeyboardEvent<HTMLInputElement>) => handleKeyPress(event) }
                        />
                     </div>

                     {/* Password */}
                     <div className="mt-10">
                        <InputField
                           label='Senha'
                           placeholder="Insira sua senha"
                           type="password"
                           color={colorLayout}
                           value={password}
                           onChange={setPassword}
                           showPassword={showPassword}
                           onClick={() => setShowPassword(!showPassword)}
                           onKeyPress={ (event: KeyboardEvent<HTMLInputElement>) => handleKeyPress(event) }
                        />
                     </div>

                     {/* Save Email & Password */}
                     <div className="mt-5 cursor-pointer">
                        <CheckField
                           type="radio"
                           color={colorLayout}
                           check={checkRadio}
                           onClick={() => setCheckRadio(!checkRadio)}
                           width={24}
                           height={24}
                           text="Lembrar email e senha"
                           textColor={colorLayout}
                        />
                     </div>
                  </div>

                  {/* Button Area */}
                  <div className="flex flex-col mt-5">
                     <button
                        className="bg-beige text-white font-bold py-2 px-12 rounded cursor-pointer transition-all duration-700 hover:opacity-90"
                        style={{ fontSize: '30px' }}
                        onClick={ handleLogin }>
                        Entrar
                     </button>

                     <button
                        className="text-beige text-center font-medium mt-4"
                        style={{ fontSize: '18px' }}
                        onClick={ handleOpenForgotModal }>
                        Esqueceu a senha?
                     </button>
                  </div>

                  {/* New here */}
                  <p className="text-darkLayout mt-32" style={{ fontSize: '18px' }}>
                     Novo por aqui ? <Link href='/register' className="text-beige cursor-pointer">Cadastre-se</Link>
                  </p>
               </div>
            </div>
            
            {/* Modal Forgot Password */}
            { showForgotPasswordModal &&
               <Modal
                  children={
                     <>
                        <h1 
                           className="text-beige text-center text-font-30 tablet:text-font-44">
                           Esqueci minha senha
                        </h1>

                        <p 
                           className="text-darkLayout text-center mt-4 text-base tablet:text-font-22">
                           Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.
                        </p>

                        <div className="mt-4 tablet:mt-8">
                           <InputField
                              label="Email"
                              placeholder="Insira seu email"
                              color={ colorLayout }
                              value={ emailForgot }
                              onChange={ setEmailForgot }
                              icon={{
                                 icon: 'Mail',
                                 color: '#333',
                                 width: 26,
                                 height: 26
                              }}
                              onKeyPress={ handleKeyPressForgotModal }
                           />
                        </div>
                        
                        <div className="flex justify-center items-center mt-6 tablet:mt-14">
                           <button
                              className="bg-beige text-white text-font-22 font-bold py-2 px-12 rounded cursor-pointer transition-all duration-700 hover:opacity-90 tablet:text-font-30"
                              onClick={ handleOpenConfirmEmailModal }>
                              Enviar
                           </button>
                        </div>

                        <p 
                           className="mt-4 cursor-pointer text-center text-darkLayout text-font-18 tablet:text-font-22"
                           onClick={ () => setShowForgotPasswordModal(!setShowForgotPasswordModal) }>
                           Cancelar
                        </p>
                     </>
                  } 
               />
            }

            {/* Modal Confirm Email */}
            { showConfirmEmailModal &&
               <Modal
                  children={
                     <span>
                        <h1 
                           className="text-beige text-center text-font-30 tablet:text-font-44">
                           Confirme seu Email
                        </h1>

                        <div className="text-darkLayout text-center mt-4 text-base tablet:text-font-22">
                           <p>
                              Para finalizar seu cadastro, enviamos um e-mail de confirmação para <span className="text-beige">{ emailForgot }</span>. Verifique sua caixa de entrada e clique no link “Confirmar E-mail”.
                           </p>

                           <p>
                              Caso não tenha recebido o e-mail clique em “Enviar e-mail novamente” que enviaremos um novo e-mail.
                           </p>
                        </div>
                     
                        <div className="flex justify-center items-center mt-6 tablet:mt-14">
                           <button
                              className="bg-beige text-white text-font-22 font-bold py-2 px-12 rounded cursor-pointer transition-all duration-700 hover:opacity-90 tablet:text-font-30"
                              onClick={ () => setShowConfirmEmailModal(!showConfirmEmailModal) }>
                              Fechar
                           </button>
                        </div>

                        <p 
                           className="mt-4 cursor-pointer text-center text-darkLayout text-font-18 tablet:text-font-22 "
                           onClick={ handleOpenForgotModal }>
                           Enviar email novamente
                        </p>
                     </span>
                  } 
               />
            }

         </main>
      </>
   )
}

export default Login