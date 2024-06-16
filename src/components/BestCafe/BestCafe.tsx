import maracuya from '../../assets/images/maracuya-1.png'
import maracuya2 from '../../assets/images/maracuya-2.svg'
import maracuya3 from '../../assets/images/maracuya-3.png'
export function BestCafe () {
    return <section className="bg-[#f7d22d]">
        <div className="py-[200px] container mx-auto flex flex-col items-center justify-center">
            <div className='flex flex-col items-center justify-center gap-[10px]'>
                <img src={maracuya} alt="maracuya-1" />
                <h5 className="text-[3.5em] font-bold text-center">Лучшие заведения нашего города</h5>
                <p className='text-center text-[2.2em] leading-10'>На нашем сайте - огромный выбор ресторанов, кафе и магазинов. Закажи свою любимую еду и продукты</p>
                <a className='bg-[#ef3a65]  text-[3.0em] px-[70px] rounded-full mt-[30px]' href="#buy">Искать заведения</a>
            </div>
            <div className='flex flex-col items-center justify-center gap-[30px] mt-[200px]'>
                <img className='w-[285px]' src={maracuya2} alt="maracuya-1" />
                <h5 className="text-[3.5em] font-bold text-center">Быстрая доставка</h5>
                <p className='text-center text-[2.2em] leading-10'>Закажите доставку в черте города и получите желаемое за короткое время</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-[30px] mt-[200px]'>
                <img className='w-[285px]' src={maracuya3} alt="maracuya-1" />
                <h5 className="text-[3.5em] font-bold text-center">Доставка продуктов и еды</h5>
                <p className='text-center text-[2.2em] leading-10'>На нашем сайте есть необходимое, от супермаркетов до небольших магазинов. Если вы нашли товар, закажите и получите его</p>
            </div>
        </div>
        </section>
}