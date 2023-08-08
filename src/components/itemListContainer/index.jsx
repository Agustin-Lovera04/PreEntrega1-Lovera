import "./styleItemListCont.css"

const ItemListContainer = ({greeting}) =>{
    return(
        <div>
            <ul>
                <li>
                    <p className="presentacionTX fw-bold">{greeting}</p>
                </li>
            </ul>
        </div>

    )
}
export default ItemListContainer