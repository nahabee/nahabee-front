import "tw-elements";
// cette page n'est pas du tout terminée c'est uniquement pour avoir un affichage vite fait
const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide relative "
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 mobS:hidden">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>

        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="7"
          aria-label="Slide 8"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="8"
          aria-label="Slide 9"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="9"
          aria-label="Slide 10"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden mobS:hidden">
        <div className="carousel-item active float-left w-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nahabee-8e73f.appspot.com/o/braids.svg?alt=media&token=8ccad532-e418-439b-8e5f-da7ba4d27e1a"
            className="block w-full "
          />
        </div>
        <div className="carousel-item float-left w-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nahabee-8e73f.appspot.com/o/black%20hair.svg?alt=media&token=9d69ddd7-9c74-469b-a543-be0630e46015"
            className="block w-full"
          />
        </div>{" "}
        <div className="carousel-item float-left w-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nahabee-8e73f.appspot.com/o/smoky.svg?alt=media&token=4d2d9625-04c7-4834-8010-600d03ba42f5"
            className="block w-full"
          />
        </div>
        <div className="carousel-item float-left w-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nahabee-8e73f.appspot.com/o/curls.svg?alt=media&token=64035b2e-4fe8-4d93-8017-b8fc849c49e3"
            className="block w-full"
          />
        </div>
        <div className="carousel-item float-left w-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nahabee-8e73f.appspot.com/o/lamadonne.svg?alt=media&token=7256fb48-6e72-4549-ac03-128dc58b69cd"
            className="block w-full"
          />
        </div>
        <div className="carousel-item float-left w-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nahabee-8e73f.appspot.com/o/curly.svg?alt=media&token=b15d2c53-1003-4a43-934a-2af04a942ef4"
            className="block w-full"
          />
        </div>
        <div className="carousel-item float-left w-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nahabee-8e73f.appspot.com/o/beachbilla.svg?alt=media&token=b0b9a0c5-fc4b-4901-b686-e90d40b15c41"
            className="block w-full"
          />
        </div>
        <div className="carousel-item float-left w-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nahabee-8e73f.appspot.com/o/short.svg?alt=media&token=3a74174f-600d-4c15-809d-9ccce596d657"
            className="block w-full"
          />
        </div>
        <div className="carousel-item float-left w-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nahabee-8e73f.appspot.com/o/skate.svg?alt=media&token=db2b5ad4-9fb0-47e0-b257-1fa8a0751236"
            className="block w-full"
          />
        </div>
        <div className="carousel-item float-left w-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nahabee-8e73f.appspot.com/o/bwbitch.svg?alt=media&token=7a898715-00da-4954-bc1f-a5799181c494"
            className="block w-full"
          />
        </div>
      </div>
      <div className="ds:hidden">
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/nahabee-8e73f.appspot.com/o/6.jpg?alt=media&token=1a2e7740-f969-422d-b530-a9ef83603aaf" />
        </div>
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/nahabee-8e73f.appspot.com/o/7.jpg?alt=media&token=5a2e2c29-7eab-4f58-a72b-17b92f86f3a9" />
        </div>
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/nahabee-8e73f.appspot.com/o/Short%20hair%20don’t%20care.jpg?alt=media&token=953c454f-6c65-47cc-897e-ee35d1e7aec3" />
        </div>
        <div>
          <img src=" https://firebasestorage.googleapis.com/v0/b/nahabee-8e73f.appspot.com/o/IMG_5435.jpg?alt=media&token=02c6116b-4be3-4b95-b770-d8c7ea7f5224" />
        </div>
        <div>
          <img src=" https://firebasestorage.googleapis.com/v0/b/nahabee-8e73f.appspot.com/o/IMG_5456.jpg?alt=media&token=ce353fa2-2c88-44f9-8772-a1072b4c42af" />
        </div>
      </div>
      <button
        className="mobS:hidden carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="mobS:hidden carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
