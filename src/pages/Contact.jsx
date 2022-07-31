import Form from "../components/Form";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
    <div className="h-screen w-screen bg-creme mobS:bg-grey">
      <NavBar />
      <h1 className="font-title flex opacity-80 p-10 w-1/2 z-50 text-8xl m-auto mobS:text-5xl mobS:m-0 mobS:ml-5 mobS:text-creme mobS:opacity-100 mobS:pt-10">
        Ask anything
      </h1>

      <Form />
    </div>
  );
};

export default Contact;
