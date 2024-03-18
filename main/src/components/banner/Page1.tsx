import './page1.css'
function Page1() {
  return (
    <div className='page1'>
        <img src="/img_index/Toyota.png" alt="" className='page1-car1'/>
        <img src="/img_index/Toyota_champ.png" alt="" className='page1-car2'/>
        <img src="/img_index/Mitsubishi.png" alt="" className='page1-car3'/>
        <h2 className='page1-h2'>MotorHome</h2>
        <h4 className="page1-h4">It's all about life style.</h4>
        <div style={{display: 'flex', position: 'absolute', top: '50%', left: '10%', alignItems: 'center'}}>
            <div className="page1-detail">See more</div>
            <div className="page1-order">Order now</div>
        </div>
    </div>
  )
}

export default Page1
