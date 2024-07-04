import "./footer.css"

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
    datalink: DataItem[]
}

async function Footer({ datalink }: Props) {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-column">
                    {datalink.map((data: DataItem, index: number) => {
                        if (data.id <= 2) {
                            return (
                                <div key={index} className="footer-content-group">
                                    <h2>{data.topic}</h2>
                                    {data.order.map((order: Order, orderindex: number) => (
                                        <div key={orderindex} className="footer-content-group-n">
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
                <div className="footer-content-column">
                    {datalink.map((data: DataItem, index: number) => {
                        if (data.id > 2 && data.id <= 6) {
                            return (
                                <div key={index} className="footer-content-group">
                                    <h2>{data.topic}</h2>
                                    {data.order.map((order: Order, orderindex: number) => (
                                        <div key={orderindex} className="footer-content-group-n">
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
                <div className="footer-content-column">
                    {datalink.map((data: DataItem, index: number) => {
                        if (data.id > 6 && data.id <= 8) {
                            return (
                                <div key={index} className="footer-content-group">
                                    <h2>{data.topic}</h2>
                                    {data.order.map((order: Order, orderindex: number) => (
                                        <div key={orderindex} className="footer-content-group-n">
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
                <div className="footer-content-column">
                    {datalink.map((data: DataItem, index: number) => {
                        if (data.id > 8 && data.id <= 11) {
                            return (
                                <div key={index} className="footer-content-group">
                                    <h2>{data.topic}</h2>
                                    {data.order.map((order: Order, orderindex: number) => (
                                        <div key={orderindex} className="footer-content-group-n">
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
                <div className="footer-content-column">
                    {datalink.map((data: DataItem, index: number) => {
                        if (data.id > 11 && data.id <= 14) {
                            return (
                                <div key={index} className="footer-content-group">
                                    <h2>{data.topic}</h2>
                                    {data.order.map((order: Order, orderindex: number) => (
                                        <div key={orderindex} className="footer-content-group-n">
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
            <div className="footer-contact">
                <div className="footer-contact-1">
                    <picture>
                        <img src="/logo.png" alt="" />
                    </picture>
                    <h3>T.R.K Bangkok Industry & Exporter Co.,Ltd.</h3>
                    <h4>888 Luangphaeng Rd, Tabyao, Ladkrabang, Bangkok 10520 Thailand</h4>
                    <h4>Phone : +66(0) 2360 7555</h4>
                    <h4>Email : carryboy@carryboy.com</h4>
                </div>
                <div className="footer-contact-2">
                    <picture>
                        <img src="/qrline.png" alt="" />
                    </picture>
                </div>
            </div>
            <div className="footer-copyright">
                <h4>© Copyright CARRYBOY All Rights Reserved</h4>
            </div>
        </div>
    )
}

export default Footer
