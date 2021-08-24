import { useState } from "react"
import Produkitem from "./Produkitem";

function ListProduk () {
    const [Produk, setProduct] = useState (['Odeng', 'Okominayaki', 'Takoyaki', 'Dorayaki']);

    return (
        <>
        {Produk.map((item, index) => (
            <Produkitem index={index} Produk={item} />
        ))}
        </>
    )
}

export default ListProduk