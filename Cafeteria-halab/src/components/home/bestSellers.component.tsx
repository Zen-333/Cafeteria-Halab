
import '../../styles/home/bestSellers.css'
import BestSellersGrid from './bestSellersGrid.Component'


function BestSellersComponent() {

  return (
    <>
        <section className="BSC">
        <h1 className="BS-Header">
            Taste the Heritage of
            <span className="BS-Aleppo"> Aleppo</span>
        </h1>

        <p className="BS-ArabicHeader">
            مطبخ حلبي أصيل
        </p>
        </section>
        <BestSellersGrid/>
    </>
  )
}

export default BestSellersComponent