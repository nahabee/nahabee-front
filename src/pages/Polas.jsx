import NavBar from "../components/NavBar";

const Polas = () => {
  return (
    <div className="bg-creme w-screen h-screen  ">
      <NavBar />
      <div className="flex h-screen">
        <div className="w-1/2 flex flex-col bg-grey"></div>
        <div className="w-1/2 flex flex-col bg-brown">b</div>
      </div>
    </div>
  );
};

export default Polas;
