import '../assets/css/form.css'

const Formulario = () => {
    return(
        <div className='contact_form'>
            <div className='contact_tittle'>
                <h2>Contacto</h2>
            </div>
            <form action="" method="POST" >
                
                <input type="text" name="name" id="usname" placeholder="Nombre"/>
                <input type="text" name="lastname" id="lsname" placeholder="Apellidos"/>
                <input type="text" name="email" id="email" placeholder="Email"/>
                <input type="submit" name='submit' id='submit' placeholder='Enviar' />
                
            </form>
        
        </div>
    )
}

export default Formulario;