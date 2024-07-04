'use client'
import "./cargo.css"

function Cargo() {
    const cliclHref = (link: string) => {
        window.location.href = link
    }
    return (
        <div className="cargo">
            <h1>CARGO BODIES</h1>
            <div className="cargo-content">
                <div className="cargo-box2">
                    <div className="cargo-box2-n">
                        <picture>
                            <img src="/cargo/cargo-lite-dry-box.png" alt="" className="cargo-box-img" />
                        </picture>
                        <h3>Lite Dry Box</h3>
                        <button onClick={() => cliclHref("https://carryboycargobox.com/dry-freight/")}>See more</button>
                    </div>
                    <div className="cargo-box2-n">
                        <picture>
                            <img src="/cargo/cargo-champ-box.png" alt="" className="cargo-box-img" />
                        </picture>
                        <h3>Champ Box</h3>
                        <button onClick={() => cliclHref("https://carryboycargobox.com/hilux-champ/")}>See more</button>
                    </div>
                </div>
                <div className="cargo-box1">
                    <picture>
                        <img src="/cargo/cargo-cool-box.png" alt="" className="cargo-box-img" />
                    </picture>
                    <h3>Cool Box</h3>
                    <button onClick={() => cliclHref("https://carryboycargobox.com/cool-box/minus-20/")}>See more</button>
                </div>
                <div className="cargo-box1">
                    <picture>
                        <img src="/cargo/cargo-half.png" alt="" className="cargo-box-img" />
                    </picture>
                    <h3>Cargo Half</h3>
                    <button onClick={() => cliclHref("https://carryboycargobox.com/cargo-half/")}>See more</button>
                </div>
                <div className="cargo-box1">
                    <picture>
                        <img src="/cargo/cargo-kiosk.png" alt="" className="cargo-box-img" />
                    </picture>
                    <h3>Kiosk 2000</h3>
                    <button onClick={() => cliclHref("https://carryboykiosk.com/kiosk-2000/")}>See more</button>
                </div>
                <div className="cargo-box1">
                    <picture>
                        <img src="/cargo/cargo-eco.png" alt="" className="cargo-box-img" />
                    </picture>
                    <h3>Eco Box</h3>
                    <button onClick={() => cliclHref("https://carryboycargobox.com/eco-box/")}>See more</button>
                </div>
            </div>
        </div>
    )
}

export default Cargo
