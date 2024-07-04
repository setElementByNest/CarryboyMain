'use client'
import { useState } from "react";
import "../canopy.css"
import Link from "next/link";

interface Content {
    name: string;
    link: string;
    img: string;
}

interface DataItem {
    id: number;
    topic: string;
    content: Content[];
}
interface props {
    data: DataItem[]
}

function Canopycomponent({ data }: props) {
    const [nowTopic, setTopic] = useState<number>(1)
    const [nowName, setName] = useState<string>('')
    const [nowLink, setLink] = useState<string>('')
    const [nowImag, setImag] = useState<string>('')
    const [nowSelect, setSelect] = useState<number>(0)

    const fnSelectTopic = (n: number) => {
        data.map((item: DataItem) => {
            if (item.id === n) {
                setTopic(item.id)
                item.content.map((content: Content, index: number) => {
                    if (index == 0) {
                        setName(content.name)
                        setLink(content.link)
                        setImag(content.img)
                        setSelect(index)
                    }
                })
            }
        })
    }

    useState(() => {
        fnSelectTopic(1);
    })
    return (
        <div className="canopy">
            <div className="canopy-head">
                <h1>CANOPY</h1>
                <div className="canopy-head-group">
                    <h3 style={{ textDecoration: nowTopic == 1 ? 'underline' : '', color: nowTopic == 1 ? '#000000' : '' }} onClick={() => { setTopic(1); fnSelectTopic(1); }}>Leisure</h3>
                    <h3 style={{ textDecoration: nowTopic == 2 ? 'underline' : '', color: nowTopic == 2 ? '#000000' : '' }} onClick={() => { setTopic(2); fnSelectTopic(2); }}>Commercial</h3>
                    <h3 style={{ textDecoration: nowTopic == 3 ? 'underline' : '', color: nowTopic == 3 ? '#000000' : '' }} onClick={() => { setTopic(3); fnSelectTopic(3); }}>Fleet Canopy</h3>
                </div>
            </div>
            <div className="canopy-content">
                <div className="canopy-con1">
                    <div className="canopy-con1-imgbox">
                        <picture>
                            <img src={nowImag} alt="" />
                        </picture>
                    </div>
                    <div className="canopy-con1-textbox">
                        <h2>{nowName}</h2>
                        <Link href={nowLink}>
                            <button>See more</button>
                        </Link>
                    </div>
                </div>
                <div className="canopy-con2">
                    {data.map((item: DataItem) => {
                        if (item.id === nowTopic) {
                            return item.content.map((content: Content, index: number) => (
                                <h4 key={index} style={{ color: nowSelect == index ? '#c00' : '' }} onClick={() => {
                                    setName(content.name)
                                    setLink(content.link)
                                    setImag(content.img)
                                    setSelect(index)
                                }}>{content.name}</h4>
                            ))
                        }
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Canopycomponent
