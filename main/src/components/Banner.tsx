import { useState } from 'react'
import './banner.css'
import Page1 from './banner/Page1'
import Page2 from './banner/Page2'

function Banner() {
    const [nowpage, setpage] = useState<number>(1)
    const page1: any = () => {
        return (
            <Page1 />
        )
    }
    const page2: any = () => {
        return (
            <Page2 />
        )
    }
    const page3: any = () => {
        return (
            <Page1 />
        )
    }
    const page4: any = () => {
        return (
            <Page1 />
        )
    }
    const npagebar: any = (x: number) => {
        const npage1 = document.getElementById('npage1') as HTMLElement;
        const npage2 = document.getElementById('npage2') as HTMLElement;
        const npage3 = document.getElementById('npage3') as HTMLElement;
        const npage4 = document.getElementById('npage4') as HTMLElement;
        npage1.style.opacity = '1';
        npage2.style.opacity = '1';
        npage3.style.opacity = '1';
        npage4.style.opacity = '1';
        switch (x) {
            case 1:
                npage1.style.opacity = '0.4';
                break;
            case 2:
                npage2.style.opacity = '0.4';
                break;
            case 3:
                npage3.style.opacity = '0.4';
                break;
            case 4:
                npage4.style.opacity = '0.4';
                break;

        }
    }
    const pagechange: any = (x: string, y: number) => {
        let maxpage: number = 4;
        let pagechageto: number = 0;
        const bannerincontect = document.getElementById('banner-incontect') as HTMLElement
        if (x == 'next') {
            if (nowpage != maxpage) {
                setpage(nowpage + 1);
                pagechageto = nowpage + 1;
            } else {
                pagechageto = 1;
                setpage(1);
            }
        }
        if (x == 'prev') {
            if (nowpage != 1) {
                setpage(nowpage - 1);
                pagechageto = nowpage - 1;
            } else {
                pagechageto = maxpage;
                setpage(pagechageto);
            }
        }
        if (x == '') {
            pagechageto = y;
            setpage(pagechageto);
        }
        npagebar(pagechageto)
        bannerincontect.scrollLeft = bannerincontect.scrollWidth / maxpage * (pagechageto - 1)
        console.log(pagechageto);
        console.log(bannerincontect.scrollWidth);
    }
    return (
        <div className="banner">
            <div className="banner-content">
                <div className='banner-incontect' id='banner-incontect'>
                    <div className='banner-incontect-over'>
                        {page1()}
                        {page2()}
                        {page3()}
                        {page4()}
                    </div>
                </div>
                <div className="banner-switch bsw-L" onClick={() => pagechange('prev')}>
                    <i className="banner-i-switch material-icons">&#xe5cb;</i>
                </div>
                <div className="banner-switch bsw-R" onClick={() => pagechange('next')}>
                    <i className="banner-i-switch material-icons">&#xe5cc;</i>
                </div>
                <div className="banner-npage">
                    <div className="banner-npage-n" id='npage1' onClick={() => pagechange('', 1)}></div>
                    <div className="banner-npage-n" id='npage2' onClick={() => pagechange('', 2)}></div>
                    <div className="banner-npage-n" id='npage3' onClick={() => pagechange('', 3)}></div>
                    <div className="banner-npage-n" id='npage4' onClick={() => pagechange('', 4)}></div>
                </div>
            </div>
        </div>
    )
}

export default Banner
