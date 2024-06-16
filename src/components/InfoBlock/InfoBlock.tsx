import burger from '../../assets/images/bg-first.png'
export function InfoBlock () {
return <section className="bg-[#f7d22d]">
    <div className="h-screen container mx-auto flex flex-col items-center justify-center gap-[80px]">
        <img className='' src={burger} alt="burger" />
        <h1 className="text-[5.5em] text-center font-bold leading-[90px]">Доставка еды и продуктов</h1>
        <p className="text-[2.5em] text-center leading-[50px]">Продовольственные товары, магазины, кафе и рестораны <span className='font-semibold'>Дубоссары</span></p>
        <a id='buy' href='#buy' className='bg-[#ef3a65]  text-[4.0em] px-[70px] rounded-full'>Начать!</a>
    </div>
</section>
}