import Headline from "../../components/Headline";
import Recommendation from "../../components/Recommendation";
import Testimonial from "../../components/Testimonial";



const HomePage = () => {
  return (
    <>

      <Headline />
      <div>
        <h1 className="title">Welcome to our site of elearning</h1>
      </div>
      <Testimonial />
      <Recommendation />
      <button>See all courses</button>
    </>
  );
};
export default HomePage;
