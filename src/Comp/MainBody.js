import Data from "../Data";
import Article from "./Article";

const MainBody = () => {

  return (
    <>
       {
        Data.map((item)=>{
          return <Article key={item.id} {...item}/>
        })
       }
    </>
  );
};

export default MainBody;
