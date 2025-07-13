import Avatar from "../../../../assets/images/avatar.jpg"
import Paleta from "../../../../assets/images/paleta.gif";

const Home = () => {

  return (
    <>  
    
    <div className="flex justify-between h-dvh">

      <div className="mt-[300px] p-10">
        <h1 className="font-bold text-6xl text-white">Olá eu sou a <span className="text-lime-400">Elika Soares :)</span></h1>
        <h3 className=" flex font-light text-4xl text-white mt-5">Pintura, Desenho, Bordado e Arte 
          <img src={Paleta} alt="Paleta" className="sm:w-16" />
        </h3>

        <div className="flex text-2xl mt-16 max-w-[30%] justify-between text-white">
          <div className="border rounded-full w-15 h-15 flex items-center justify-center hover:bg-orange-600">
            <button>
              <i className="fi fi-brands-instagram cursor-pointer"></i>
            </button>
          </div>

          <div className="border rounded-full w-15 h-15 flex items-center justify-center hover:bg-green-500">
            <button>
              <i className="fi fi-brands-whatsapp cursor-pointer"></i>
            </button>
          </div>

          <div className="border rounded-full w-15 h-15 flex items-center justify-center hover:bg-red-600">
          <button>
            <i className="fi fi-rr-envelope cursor-pointer"></i>
          </button>
          </div>
        </div>

      </div>
      <img src={Avatar} className="w-[30%] h-[50%] rounded-[50%] p-10 mt-[250px]" />

    </div>
        
    </>
  )
}

export default Home
