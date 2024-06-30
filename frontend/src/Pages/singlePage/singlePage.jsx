// import Slider from "../../components/slider/Slider";
import Slider from "../../components/slider/Slider";
import {singlePostData} from "../../libraries/dummydata";
import "./singlePage.scss";
import { userData } from "../../libraries/dummydata";

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                    <img src="/pin.png" alt="" />
                    <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
      <div className="wrapper">Wrapper</div>
      </div>
    </div>
  );
}

export default SinglePage;
