import banner from "@assets/images/banner.webp";
import logo from "@assets/images/logo.webp";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img className="aspect-[46/49] mb-1" src={logo} alt="Logo" />
      <img
        className="aspect-[640/208] max-h-32"
        src={banner}
        alt="Rick y Morty"
      />
      <h1 className="text-4xl font-get-schwifty font-bold mt-20 mb-4 text-[#16acc8]">
        Prueba tecnica
      </h1>
      <p>
        Aplicación para{" "}
        <strong className="font-semibold text-[#d2d94f]">
          Junior Frontend Developer
        </strong>
      </p>
    </div>
  );
}

export default App;
