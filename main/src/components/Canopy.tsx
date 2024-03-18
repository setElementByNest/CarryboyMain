import './Canopy.css'

function Canopy() {
    return (
        <div className='canopy'>
            <h2>CANOPY</h2>
            <div className="canopy-menu">
                <h3 id='canopy-menu-1'>Leisure</h3>
                <h3 id='canopy-menu-2'>Comercial</h3>
                <h3 id='canopy-menu-3'>Fleet</h3>
            </div>
            <div className="canopy-content">
                <div className="canopy-content-img">
                    <div className="ccimg-l">
                        <h3>ZX All-new</h3>
                        <div className='ccimg-bt'>See more</div>
                    </div>
                    <div className="ccimg-s">
                        <h3>SR5</h3>
                        <div className='ccimg-bt'>See more</div>
                    </div>
                    <div className="ccimg-s">
                        <h3>Series 5</h3>
                        <div className='ccimg-bt'>See more</div>
                    </div>
                    <div className="ccimg-s">
                        <h3>Series 6</h3>
                        <div className='ccimg-bt'>See more</div>
                    </div>
                    <div className="ccimg-s">
                        <h3>Series 7</h3>
                        <div className='ccimg-bt'>See more</div>
                    </div>
                </div>
                <div className="canopy-content-group">
                    <h3>Leisure</h3>
                    <div className="canopy-group">
                        <div className='canopy-a' >ZX All-new</div>
                        <div className='canopy-a' >SR5</div>
                        <div className='canopy-a' >Series 5</div>
                        <div className='canopy-a' >Series 6</div>
                        <div className='canopy-a' >Series 7</div>
                        <div className='canopy-a' >G500</div>
                        <div className='canopy-a' >G3</div>
                    </div>
                    <h3>Comercial</h3>
                    <div className="canopy-group">
                        <div className='canopy-a' >SLR</div>
                        <div className='canopy-a' >SO</div>
                        <div className='canopy-a' >SON</div>
                        <div className='canopy-a' >SO56</div>
                        <div className='canopy-a' >Workman (WM)</div>
                        <div className='canopy-a' >City Boy 840</div>
                        <div className='canopy-a' >Suzuki Carry</div>
                        <div className='canopy-a' >Container 900</div>
                        <div className='canopy-a' >Container 1050</div>
                        <div className='canopy-a' >Container 1100</div>
                        <div className='canopy-a' >Cargo 2000</div>
                        <div className='canopy-a' >Eco Box</div>
                    </div>
                    <h3>Fleet</h3>
                    <div className="canopy-group">
                        <div className='canopy-a' >Dutch Mill Co.,Ltd.</div>
                        <div className='canopy-a' >Toyota Motor</div>
                        <div className='canopy-a' >Nissan Thailand</div>
                        <div className='canopy-a' >True Corporation</div>
                        <div className='canopy-a' >Corrections</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Canopy
