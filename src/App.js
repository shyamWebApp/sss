import Navbar from "./Navbar";
import Footer from "./Footer";
import Ann from "./Ann";
import "./App.css";
//import Download from "./Download";
import { Hero1 } from "./Hero1";
import pizza from "./pizza.jpg";
import order from "./order.png";
import location from "./location.png";
import delivery from "./delivery.png";
import mobile from "./mobile.png";
import store from "./playstore.png";
import ios from "./ios.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br></br>
      <Hero1 />
      <br></br>
      <div className="ddd">
      <img
        className="pizza"
        src={pizza}
        alt="pizza"
      />
    
    <div className="ddd1">
      <h1 className="abs">Order Your Favorite Food Now !</h1>
      <h2 className="abs1">Explore restaurants near you</h2>
      </div>
    </div>
      <br></br>
      <div className="order">
        <div>
          <img src={order} alt="" />

          <br></br>

          <h4>Easy Order</h4>
          <br></br>
          <pre>
            Enjoy a hassle-free dining <br></br>experience with just a few
            clicks
          </pre>
        </div>

        <div>
          <img src={location} alt="" />
          <br></br>
          <h4>Live Order Tracking</h4>
          <br></br>

          <pre>
            Stay updated with the status of<br></br> your order every step of
            the way
          </pre>
        </div>

        <div>
          <img src={delivery} alt="" />
          <br></br>
          <h4>Doorstep Delivery</h4>
          <br></br>
          <pre>
            {" "}
            Your food arrives hot, fresh, and<br></br> on time at your doorstep
          </pre>
        </div>
      </div>
      <br></br>
      <br></br>
      <h2 className="ex">Explore</h2>

      <div className="cusine">
        <div className="con">
          <h5>
            
              Popular restaurants<br></br>
              near me{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>{" "}
            
          </h5>
        </div>
        <div className="con">
          <h5>
            
              Cusine<br></br> near me{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>{" "}
            
          </h5>
        </div>
        <div className="con">
          <h5>
            <pre>
              North Indian Food <br></br> near me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>{" "}
            </pre>
          </h5>
        </div>
        <div className="con">
          <h5>
            <pre>
              Tandoori Chicken <br></br>near me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>{" "}
            </pre>
          </h5>
        </div>
        <div className="con1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            class="bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg>
        </div>
      </div>
      <h2 className="lead">Leading Our Way In Excellence</h2>
      <div className="flexol">
        <div className="ol">
          <h2 className="ol1">317+ </h2>
          <svg
            id="loc"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="grey"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <h2 className="ol2">Operating Location</h2>
        </div>
        <div className="dr">
          <h2 className="ol3"> 1800+</h2>
          <svg
            id="dl"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="grey"
            class="bi bi-truck"
            viewBox="0 0 16 16"
          >
            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
          <h2 className="dl1">Delivery Riders</h2>
        </div>
      </div>
      <br></br>
      <h2 className="qw">
        BusyBee plans to escalate its presence to <span> 1000 </span> locations
        by 2025
      </h2>
      <br></br>
      
      <div className="parent">
        <div className="download">
          <h1 className="dow">Download BusyBee</h1>
          <h2 classname="ord">
            Order your favorite food & track your order with BusyBee
          </h2>
          <img src={store} alt=" " className="sss" />
          <img src={ios} alt=" " className="sss" />
        </div>

        <div className="mobile">
          <img src={mobile} className="mob" alt=""></img>
        </div>
      </div>
      <br></br>
      <Ann />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
