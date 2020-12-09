import Nav from '../components/nav'
import Image from 'next/image'

export default function IndexPage() {
  return (
    <div>
      <Nav />

      <div className="p-5 md:py-10 md:p-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          <div className="card bg-gray-200 rounded-xl m-2 mt-3">
            <Image
              src="/biquini.png"
              width={400}
              height={400}
            />
            <div className="details">
              <h1 className="ml-3 mt-3 font-semibold text-gray-700">Biquíni verão preto</h1>
              <h1 className="ml-3 font-bold text-gray-800 text-2xl">R$ 49,99</h1>
              <div className="text-center">
                <button className="orange  text-blue-50 p-3  mt-3 mb-5 rounded-lg uppercase md:p-1 md:w-40 md:text-sm md:mb-2">Adicionar no carrinho</button>
              </div>
            </div>
          </div>

          <div className="card bg-gray-200 rounded-xl m-2 mt-3">
            <Image
              src="/biquini.png"
              width={400}
              height={400}
            />
            <div className="details">
              <h1 className="ml-3 mt-3 font-semibold text-gray-700">Biquíni verão preto</h1>
              <h1 className="ml-3 font-bold text-gray-800 text-2xl">R$ 49,99</h1>
              <div className="text-center">
                <button className="orange text-blue-50 p-3  mt-3 mb-5 rounded-lg uppercase">Adicionar no carrinho</button>
              </div>
            </div>
          </div>

          <div className="card bg-gray-200 rounded-xl m-2 mt-3">
            <Image
              src="/biquini.png"
              width={400}
              height={400}
            />
            <div className="details">
              <h1 className="ml-3 mt-3 font-semibold text-gray-700">Biquíni verão preto</h1>
              <h1 className="ml-3 font-bold text-gray-800 text-2xl">R$ 49,99</h1>
              <div className="text-center">
                <button className="orange text-blue-50 p-3  mt-3 mb-5 rounded-lg uppercase">Adicionar no carrinho</button>
              </div>
            </div>
          </div>

          <div className="card bg-gray-200 rounded-xl m-2 mt-3">
            <Image
              src="/biquini.png"
              width={400}
              height={400}
            />
            <div className="details">
              <h1 className="ml-3 mt-3 font-semibold text-gray-700">Biquíni verão preto</h1>
              <h1 className="ml-3 font-bold text-gray-800 text-2xl">R$ 49,99</h1>
              <div className="text-center">
                <button className="orange text-blue-50 p-3  mt-3 mb-5 rounded-lg uppercase">Adicionar no carrinho</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
