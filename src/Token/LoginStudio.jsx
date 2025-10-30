import './loginStudio.css';
import '../App.css'
export default function LoginStudio() {
    return (
        <>
            <div className='main-gradient'></div>
            <div className='loginStudio-contanier'>
                <div className='login-studio'>
                    <div className='login-studio-box'>
                        <h2 style={{ fontWeight: '800', fontSize: '32px', display: 'flex', justifyContent: 'center', color: '#FFFFFF' }}>Login</h2>
                        <div className='buttons'>
                            <button className='button' style={{ background: '#FFFFFF' }}>Create Project</button>
                            <button className='button' style={{ background: '#00BBFF', color: '#FFFFFF' }}>Login Creators Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
