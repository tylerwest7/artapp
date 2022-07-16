export default function Footer() {
  return (
    <div className="bg-black px-4">
      <div className="font-light grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 mx-auto container text-gray-100 pt-10 pb-10">
        <div>
          <h3 className="font-light text-sm sm:pt-1">
            Built with the help of Art Insitute of Chicago, API.
          </h3>
          <h3 className="font-light text-sm sm:pt-1">React</h3>
          <h3 className="font-light text-sm sm:pt-1">Tailwind CSS</h3>
        </div>
        <div>
          <h3 className="font-light text-sm sm:pt-1">Tyler@tylerwest.co</h3>
        </div>
        <div>
          <h1></h1>
        </div>
        <div>
          <a href="https://www.tylerwest.co/">
            <h3 className="font-light text-sm sm:pt-1 lg:text-right md:text-right sm:text-left">
              Tylerwest.co
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}
