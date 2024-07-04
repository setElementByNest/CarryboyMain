'use client'
import { useState } from "react"
import "./lids.css"

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
    datalinklids: DataItem[]
}

function Lids({ datalinklids }: Props) {
    const [nowPage, setPage] = useState<number>(1)
    return (
        <div className="lids">
            <div className="lids-content">
                <div className="lids-con-head">
                    <h1>LIDS</h1>
                    <div className="lids-con-head-group">
                        {datalinklids.map((item: DataItem, index: number) => (
                            <h3 key={index}
                                style={{
                                    color: nowPage == item.id ? '#ffffff' : '',
                                    textDecoration: nowPage == item.id ? 'underline' : 'none'
                                }}
                                onClick={() => { setPage(item.id) }}>{item.topic}
                            </h3>
                        ))}
                    </div>
                </div>
                <div className="lids-con-foot">
                    {datalinklids.map((item: DataItem) => {
                        if (item.id === nowPage) {
                            return item.content.map((content: Content, index: number) => (
                                <a href={content.link} key={index}>{content.name}</a>
                            ))
                        }
                    })}
                </div>
                <div className="lids-black"></div>
            </div>
        </div>
    )
}

export default Lids
