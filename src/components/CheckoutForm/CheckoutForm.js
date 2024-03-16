import './CheckoutForm.css'
import {useState} from 'react'

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email, address
        }

        onConfirm(userData)
    }

    return (
        <div className='CheckoutForm'>
            <form onSubmit={handleConfirm}>
                <div className='field'>
                    <label className='label'>
                        Nombre y apellido
                        <div className='control'>
                            <input className='input'
                                type='text'
                                placeholder="Juan Perez"
                                value={name}
                                onChange={({target}) => setName(target.value)}
                            />
                        </div>
                    </label>
                </div>
                <div className='field'>
                    <label className='label'>
                        Telefono 
                        <div className='control'>
                            <input className='input'
                                type='text'
                                placeholder="11 3459-1138"
                                value={phone}
                                onChange={({target}) => setPhone(target.value)}
                            />
                        </div>
                    </label>
                </div>
                <div className='field'>
                    <label className="label">Email
                        <div className="control">
                            <input className="input" 
                            type="email" 
                            placeholder="Por ejemplo: email@gmail.com" 
                            value={email}
                            onChange={({target}) => setEmail(target.value)}/>
                        </div>
                    </label>
                </div>
                <div className='field'>
                    <label className='label'>
                        Dirección 
                        <div className='control'>
                            <input className='input'
                                type='text'
                                placeholder="Av. Siempreviva 742" 
                                value={address}
                                onChange={({target}) => setAddress(target.value)}
                            />
                        </div>
                    </label>
                </div>
                <div className='field'>
                    <div className='control'>
                        <button className='button ' type='submit'>Crear orden</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;