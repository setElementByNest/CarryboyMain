'use client'
import { useEffect, useState } from "react"
import "./nav.css"

interface ListItem {
  name: string;
  link: string;
}

interface Order {
  head: string;
  list: ListItem[];
}

interface DataItem {
  id: number;
  topic: string;
  order: Order[];
}

interface Props {
  datalinkmenu: DataItem[]
}

function Nav({ datalinkmenu }: Props) {
  const [nowHide, setHide] = useState<boolean>(false)
  const [nowDown, setDown] = useState<boolean>(false)
  const [nowBlack, setBlack] = useState<boolean>(false)
  const [nowSelect, setSelect] = useState<number>(1)
  const handleHover = () => {
    setDown(true)
    setBlack(true)
  }
  const handleOut = () => {
    setDown(false)
    setTimeout(() => {
      setBlack(false)
    }, 500)
  }
  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY)
      if (window.scrollY < 400) {
        setHide(false)
      } else {
        setHide(true)
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, [])
  return (
    <div className="nav" style={{ transform: nowHide ? 'translate(0, -50%)' : 'translate(0, 0)' }}>
      <div className="nav-content">
        <picture>
          <img src="/logo.png" alt="" className="nav-content-logo" />
        </picture>
        <div className="nav-content-group">
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Dealer</h3>
          <h3>Contact</h3>
          <h3>ภาษาไทย</h3>
        </div>
      </div>
      <div className="nav-sub" onMouseLeave={handleOut}>
        <div className="nav-sub-group">
          <h3 onMouseOver={() => { handleHover(); setSelect(1) }}>CANOPY</h3>
          <h3 onMouseOver={() => { handleHover(); setSelect(2) }}>LIDS</h3>
          <h3 onMouseOver={() => { handleHover(); setSelect(3) }}>ACCESSORIES</h3>
          <h3 onMouseOver={() => { handleHover(); setSelect(4) }}>CARGO BODIES</h3>
          <h3 onMouseOver={() => { handleHover(); setSelect(5) }}>RVs & PASSENERS</h3>
          <h3 onMouseOver={() => { handleHover(); setSelect(6) }}>EMERGENCY</h3>
          <h3 onMouseOver={() => { handleHover(); setSelect(7) }}>OTHERS</h3>
          <h3 onMouseOver={() => { handleHover(); setSelect(8) }}>FLEETS</h3>
        </div>
      </div>
      <div className="nav-down">
        <div className={nowDown ? 'nav-down-content' : 'nav-down-hide'} onMouseOver={handleHover} onMouseLeave={handleOut}>
          {datalinkmenu.map((data: DataItem, index: number) => {
            if (data.id === nowSelect) {
              return (
                <div key={index} className="nav-down-group">
                  {/* <h2>{data.topic}</h2> */}
                  {data.order.map((order: Order, orderindex: number) => (
                    <div key={orderindex} className="nav-down-group-n">
                      <h3>{order.head}</h3>
                      {order.list.map((list: ListItem, listindex: number) => (
                        <div key={listindex}>
                          <a href={list.link}>{list.name}</a>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )
            }
          })}
        </div>
      </div>
      <div className={nowDown ? 'nav-black' : nowBlack ? 'nav-black-hide' : 'nav-black-none'}></div>
    </div>
  )
}

export default Nav
