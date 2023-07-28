import { useState, useRef } from 'react'
import './App.css'


function App() {

  const [email, setEmail] = useState('')
  const [password, setPwd] = useState('')
  const [emailLb, setEmailLb] = useState(true)
  const elb = useRef()
  const pwd = useRef()

  function handleEmail(evt){
    evt.preventDefault()
    setEmail(evt.target.value)

    if(evt.target.value){
      elb.current.style.top='-44px'
      elb.current.style.left='26px'
      elb.current.style.fontSize='12px'
    } else{
      elb.current.style.top='-34px'
      elb.current.style.left='20px'
      elb.current.style.fontSize='16px'
    }
  }

 

  function handlePwd(evt){
    evt.preventDefault()
    setPwd(evt.target.value)
 
    if( evt.target.value ){
      pwd.current.style.top='-84px'
      pwd.current.style.left='26px'
      pwd.current.style.fontSize='12px'
    } else{
      pwd.current.style.top='-72px'
      pwd.current.style.left='20px'
      pwd.current.style.fontSize='16px'
    }
  }

  function eHover(evt){
    evt.preventDefault()
   
      // elb.current.style.top='-84px'
      // elb.current.style.left='26px'
      // elb.current.style.fontSize='12px'

      // elb.current.style.top='-34px'
      // elb.current.style.left='20px'
      // elb.current.style.fontSize='16px'
    
  }

  function pHover(evt){
    evt.preventDefault()
   
      // pwd.current.style.top='-44px'
      // pwd.current.style.left='26px'
      // pwd.current.style.fontSize='12px'

      // elb.current.style.top='-34px'
      // elb.current.style.left='20px'
      // elb.current.style.fontSize='16px'
    
  }

  return (
    <>
 
      <div id='wrapper'>
  
  <p id='logo'>NETFLIX</p>
  
  <div id='container'>
  <form>
    <p id='title'>Entrar</p>
    
 
    <input onFocus={(e) => eHover(e)} value={email} onChange={(evt) => handleEmail(evt)} id='email' placeholder="" />
   <label ref={elb} className='email-lb'>Email ou número de telefone</label>
 
    
    <input onFocus={(e) => pHover(e)} value={password} onChange={(evt) => handlePwd(evt)}
 id='password' type="password" placeholder="" />
        <label ref={pwd} className='pwd-lb'>Senha</label>

   <button>Entrar</button>
    
    <div id='login-bottom'>
    <div id='check'>
<input value="lembrar" defaultChecked type="checkbox"/><label>Lembre-se de mim</label>
    </div>
      
<a href='#'>Precisa de ajuda?</a>
      
    </div>
  </form>

<div id='new'>
    <p >Novo por aqui?<a href="#"> <span>Assine agora.</span></a></p>

    <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a id='saiba' href='#'>Saiba mais.</a></p>
</div>
</div>
<hr></hr>

<div className='bottom'>
  
<div id='content'>
<p>Dúvidas? Ligue <a href="#">0800 591 2876</a></p>
<br></br>

  <div className='nav'>
  <a href="Perguntas frequentes">Perguntas frequentes</a>
    <a href="Perguntas frequentes">Privacidade</a>  
  <a href="Perguntas frequentes">Central de Ajuda</a>  <a href="Perguntas frequentes">Preferências de cookies</a>  <a href="Perguntas frequentes">Termos de Uso</a> 
  <a href="Perguntas frequentes">Informações corporativas</a>
  </div>
  <select id='select'>
  <option  value='selected'>Português</option>
  <option  value='en'>English</option>
</select>
</div>
     <p id="me">Feito com ❤️ por Jesiel364</p>
</div>
  
 
  
</div>
  
 
    </>
  )
}

export default App