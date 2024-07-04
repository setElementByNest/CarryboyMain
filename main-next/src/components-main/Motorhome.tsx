import Link from "next/link"
import "./motorhome.css"

function Motorhome() {
    return (
        <div className="motorhome">
            <div className="motorhome-content">
                <div className="rv-con-head">
                    <h1>RVs & PASSENGERS</h1>
                    <div className="rv-con-head-group">
                        <h3>Motorhome</h3>
                        <h3>Caravan</h3>
                        <h3>Passengers</h3>
                    </div>
                </div>
                <div className="rv-con-foot">
                    <h2>Recreational Vehicle</h2>
                    <Link href={"https://carryboymotorhome.com/"}>
                        <button>See more</button>
                    </Link>
                </div>
                <div className="rv-black"></div>
            </div>
        </div>
    )
}

export default Motorhome
