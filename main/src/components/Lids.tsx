import './lids.css'
function Lids() {
  return (
    <div className='lids'>
        <div className="lids-content">
            <div className="lids-group1">
                <h2>SPORT LID</h2>
                <div style={{display: 'flex'}}>
                    <h3 id='lids-menu-1'>Manual</h3>
                    <h3 id='lids-menu-2'>Auto</h3>
                    <h3 id='lids-menu-3'>Roller</h3>
                    <h3 id='lids-menu-4'>Soft</h3>
                </div>
            </div>
            <div className="lids-group2">
                <h2>CARRYBOY GRX-R SPORT LID</h2>
                <div className='lids-bt'>
                    See more
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lids
