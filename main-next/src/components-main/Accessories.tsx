'use client'
import { useState } from "react"
import "./accessories.css"

interface Content {
    name: string;
    link: string;
}

interface DataItem {
    id: number;
    topic: string;
    img: string;
    content: Content[];
}

interface Props {
    datalinkacc: DataItem[]
}

function Accessories({ datalinkacc }: Props) {
    const [nowPage, setPage] = useState<number>(1)
    return (
        <div className="accessories">
            <div className="accessories-content">
                <div className="acc-con-head">
                    <h1>ACCESSORIES</h1>
                    <div className="acc-con-head-group">
                        {datalinkacc.map((item: DataItem, index: number) => (
                            <h3 key={index}
                                style={{
                                    color: nowPage == item.id ? '#6a7585' : '',
                                    textDecoration: nowPage == item.id ? 'underline' : 'none'
                                }}
                                onClick={() => { setPage(item.id) }}>{item.topic}
                            </h3>
                        ))}
                    </div>
                </div>
                <div className="acc-con-foot">
                    {datalinkacc.map((item: DataItem) => {
                        if (item.id === nowPage) {
                            return item.content.map((content: Content, index: number) => (
                                <a href={content.link} key={index}>{content.name}</a>
                            ))
                        }
                    })}
                </div>
                <div className="acc-black"></div>
            </div>
        </div>
    )
}

export default Accessories
