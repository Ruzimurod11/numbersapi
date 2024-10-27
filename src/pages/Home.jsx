import { useDispatch, useSelector } from "react-redux";
import { NumberForm, RandomNumber } from "../components";
import { NumberCard } from "../components/number-card/NumberCard";
const Home = () => {
   const { todos } = useSelector((store) => store.todo);
   console.log(todos);

   return (
      <>
         <div className="container">
            <NumberForm />
         </div>
      </>
   );
};

export default Home;
