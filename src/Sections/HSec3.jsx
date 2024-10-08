import { HSec3Cards } from '../UI'

const HSec3 = () => {
  return (
    <div className="w-[100%] h-[90vh] xl:py-12 py-4 xl:px-12 px-4">
      <h1 className="text-white xs:text-5xl text-3xl font-bold text-center">Nega aynan biz ?</h1>
      <div className="w-[100%] h-[100%] lg:flex block items-center justify-around">
        {HSec3Cards.map((item, idx) => (
          <div key={idx} className="xl:w-[350px] lg:w-[300px] w-[100%] xs:h-[450px] h-[400px] bg-gray-700 rounded-xl py-4 px-4 lg:mt-0 mt-4">
          <div className="w-[100%] xs:h-[60%] h-[48%] flex items-center justify-center">
            <img src={item.img} alt="grow-user" className="xs:w-[250px] w-[200px] xs:h-[250px] h-[200px]" />
          </div>
          <h1 className="text-white text-2xl mt-3 text-center">{item.title}</h1>
          <p className="text-gray-300 mt-3 text-center">{item.p}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default HSec3