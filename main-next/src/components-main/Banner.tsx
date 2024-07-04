'use client'
import { useEffect, useState } from "react"
import "./banner.css"

function Banner() {
  const [nowPage, setPage] = useState<number>(1)
  const clickChangePage = (n: number, m: number) => {
    if (n == 0) {
      setPage(m)
    } else {
      let nowCal: number = nowPage;
      if (nowPage + n > 3) {
        nowCal = 0;
      }
      if (nowPage + n == 0) {
        nowCal = 4
      }
      setPage(nowCal + n)
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      clickChangePage(1, NaN)
    }, 5000)
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPage])
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-bt bbt-l" onClick={() => { clickChangePage(-1, 0) }}>
          <picture>
            <img src="/arrow_back_ios.svg" alt="" />
          </picture>
        </div>
        <div className="banner-bt bbt-r" onClick={() => { clickChangePage(1, 0) }}>
          <picture>
            <img src="/arrow_forward_ios.svg" alt="" />
          </picture>
        </div>
        <div className="banner-nav">
          <div className="banner-nav-n" onClick={() => { clickChangePage(0, 1) }}><div className="banner-nav-ni" style={{ background: nowPage == 1 ? '#ffffffff' : '' }}></div></div>
          <div className="banner-nav-n" onClick={() => { clickChangePage(0, 2) }}><div className="banner-nav-ni" style={{ background: nowPage == 2 ? '#ffffffff' : '' }}></div></div>
          <div className="banner-nav-n" onClick={() => { clickChangePage(0, 3) }}><div className="banner-nav-ni" style={{ background: nowPage == 3 ? '#ffffffff' : '' }}></div></div>
        </div>
        <div className={nowPage == 1 ? 'banner-now' : 'banner-hide'}>
          <picture>
            <img src="/accessories.png" alt="" />
          </picture>
        </div>
        <div className={nowPage == 2 ? 'banner-now' : 'banner-hide'}>
          <picture>
            <img src="/rvtoyota.jpg" alt="" />
          </picture>
        </div>
        <div className={nowPage == 3 ? 'banner-now' : 'banner-hide'}>
          <picture>
            <img src="/show_01.jpg" alt="" />
          </picture>
        </div>
        {/* <h2>ACCESSORIES</h2> */}
      </div>
    </div>
  )
}

export default Banner
