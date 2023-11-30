//รายการสินค้าแต่ละรายการ
import plus from '../image/plus.svg'
import minus from '../image/minus.svg'
import deleteIcon from '../image/delete-icn.svg'
import { MyCartContext } from '../management/context'

const CartItem = ({image_url,name,id,price,quantity})=>{
    const {removeItem,toggleQuantity,formatNumber} = MyCartContext()
    return(
        <div className="item">
            <div className="product-image">
                <img src={image_url} alt="" />
            </div>
            <div className="description">
                <span>{name}</span>
                <span>ราคา{formatNumber(price)}บาท</span>
            </div>
            <div className="quantity">
                <button className='plus'  onClick={()=>toggleQuantity(id,"increment")}>
                    <img src={plus} alt="" />
                </button>
                <input type="text" disabled value={quantity}  />
                <button className='minus' onClick={()=>toggleQuantity(id,"decrement")}>
                    <img src={minus} alt="" />
                </button>
            </div>
            <div className="total-price">
                {formatNumber(quantity * price)}
            </div>
            <div className='remove'>
                <img src={deleteIcon} alt="" onClick={()=>removeItem(id)}/>
            </div>
        </div>
    )
}

export default CartItem