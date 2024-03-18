import './page2.css'
function Page2() {
  return (
    <div className='page2'>
        <img src="/img_index/decorate/oxo.png" alt="" className='page2-dec1'/>
        <img src="/img_index/decorate/star.png" alt="" className='page2-dec2'/>
        <img src="/img_index/decorate/star.png" alt="" className='page2-dec3'/>
        <img src="/img_index/MM9A9378.png" alt="" className='page2-car1'/>
        <h2 className='page2-h2'>Carryboy Camper</h2>
        <h4 className="page2-h4">ROOF-TOP-TENT</h4>
        <div style={{display: 'flex', position: 'absolute', top: '50%', left: '10%', alignItems: 'center'}}>
            <div className="page2-order">See more</div>
        </div>
    </div>
  )
}

export default Page2
