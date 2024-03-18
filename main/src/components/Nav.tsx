import { useState } from 'react';
import './nav.css'

function Nav() {
    const [slideswitch, setslideswitch] = useState<boolean>(true)
    const navslide = (x: boolean) => {
        const navsub = document.getElementById("navsub") as HTMLElement;
        const navi = document.getElementById("nav-i") as HTMLElement;
        const navblur = document.getElementById("navblur") as HTMLElement;
        if (x == true) {
            navsub.style.transform = "translate(0, 61px)";
            navi.innerHTML = "&#xe5cd;";
            setslideswitch(false);
            navblur.style.display = "flex";
            setTimeout(() => { navblur.style.opacity = "1"; }, 0);
        }
        if (x == false) {
            navsub.style.transform = "translate(400px, 61px)";
            navi.innerHTML = "&#xe5d2;";
            setslideswitch(true);
            navblur.style.opacity = "0";
            setTimeout(() => { navblur.style.display = "none"; }, 300);
        }
    }
    return (
        <div className='nav'>
            <div className='nav-content'>
                <img src="/img_index/logo.png" alt="" className='nav-logo' />
                <nav className='nav-a' id='navhead'>
                    <a className='nav-a-style' href="">Home</a>
                    <a className='nav-a-style' href="">About</a>
                    <a className='nav-a-style' href="">Map</a>
                    <a className='nav-a-style' href="">Contact</a>
                    <a className='nav-a-style' href="">ภาษาไทย</a>
                    <div className="nav-slide-switch" id='nav-slide-switch'>
                        <i className="nav-i material-icons" id='nav-i' onClick={() => { navslide(slideswitch) }}>&#xe5d2;</i>
                    </div>
                </nav>
            </div>
            <div className="nav-sub" id='navsub'>
                <div className='nav-sub-hide'>
                    <a className='navsub-a-style' href="">Home</a>
                    <a className='navsub-a-style' href="">About</a>
                    <a className='navsub-a-style' href="">Map</a>
                    <a className='navsub-a-style' href="">Contact</a>
                    <a className='navsub-a-style' href="">ภาษาไทย</a>
                    <br />
                    <hr />
                    <br />
                </div>
                <a className='navsub-a-style' href="">Canopy</a>
                <a className='navsub-a-style' href="">Lids</a>
                <a className='navsub-a-style' href="">Accesories</a>
                <a className='navsub-a-style' href="">Cargo</a>
                <a className='navsub-a-style' href="">Bodies</a>
                <a className='navsub-a-style' href="">RVs & Passeners</a>
                <a className='navsub-a-style' href="">Emergency</a>
                <a className='navsub-a-style' href="">Other</a>
                <a className='navsub-a-style' href="">Fleets</a>
            </div>
            <div className="nav-blur" id='navblur'></div>
        </div>
    )
}

export default Nav
