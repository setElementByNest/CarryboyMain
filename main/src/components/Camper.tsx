import './camper.css'
function Camper() {
  return (
    <div className='camper'>
        <div className="camper-content">
            <div className="camper-group1">
                <h2>CAMPER</h2>
                <div style={{display: 'flex'}}>
                    <h3 id='camper-menu-1'>Roof-top-tent</h3>
                    <h3 id='camper-menu-2'>Awning</h3>
                    <h3 id='camper-menu-3'>Camping-box</h3>
                </div>
            </div>
            <div className="camper-group2">
                <h2>CARRYBOY CAMPER ROOF-TOP-TENT</h2>
                <div className='camper-bt'>
                    See more
                </div>
            </div>
        </div>
    </div>
  )
}

export default Camper
