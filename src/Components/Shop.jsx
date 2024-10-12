import buildingIMG from '../Images/building.png'

const Shop = () => {
  return (
    <div className='w-[100%] sm:h-[100vh] xs:h-[80vh] sx:h-[60vh] h-[50vh] flex items-center justify-center'>
        <div>
            <img src={buildingIMG} alt="building" className='w-[900px]' />
            <h1 className='text-center mt-4 xs:text-5xl text-3xl text-white font-bold'>Yangilanmoqda...</h1>
        </div>
    </div>
  )
}

export default Shop