import "./App.css";
import { useState } from "react";
import { toast } from "react-toastify";
function App() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [number, setnumber] = useState("");
  const [message, setmessage] = useState("");
  const [gender, setgender] = useState("Female");
  const [day, setday] = useState("");
  const [time, settime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let appointment = {
      firstname,
      lastname,
      number,
      message,
      gender,
      day,
      time,
    };

    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(appointment),
    })
      .then((res) => {
        toast.success("Appointment created successfully");
      })
      .catch((err) => {
        toast.error("failed: " + err.message);
      });
  };

  return (
    <div className="App">
      <title>Mirvete's Alterations</title>

      <div className="container">
        <div className="hpheader">
          <a className="link" href="#hform">
            Schedule Appointment
          </a>
        </div>

        <div className="container2">
          <div className="box1">
            <h1 className="name">Mirvete's Alterations</h1>
            <p className="p1">
              Over 40 years of experience We treat our customers like family!
            </p>
          </div>
          <div className="box2">
            <img className="img1" src="images/alr.png" alt="Mirvete" />
            <img className="img2" src="images/man.jpeg" alt="Man Alteration" />
          </div>
        </div>
        <div className="container3">
          <div className="mpbox1">
            <img className="img3" src="images/flower.webp" alt="machine" />
          </div>
          <div className="mpbox2">
            <h1 className="mph">ABOUT US</h1>
            <p className="mpp">
              Welcome to Mirvetes Alerations, where style meets seasoned
              expertise. With over 40 years of dedicated craftsmanship, Mirvete
              is the heart and hands behind our bespoke tailoring. Specializing
              in dresses, tuxedoes, and everything in between, she brings a
              wealth of experience to each stitch, ensuring that every garment
              is a testament to timeless elegance.
            </p>
            <p className="mpp">
              At Mirvetes Alerations, our commitment extends beyond creating
              beautiful attire; it's about crafting relationships. Mirvetes
              embodies this ethos, blending her unmatched skill with a passion
              for customer satisfaction. Choose us for not just tailored
              clothing, but an experience marked by precision, quality, and a
              touch of personalized care.
            </p>
          </div>
        </div>
        <h2 className="headblock">Prices On Alerations</h2>
        <div className="block">
          <h3>Dresses ($120)</h3>
          <p>
            Mirvete consistently produces high-quality dresses, showcasing
            meticulous craftsmanship and an artistic flair that sets her work
            apart. Clients value the precision and attention to detail she
            brings to each garment, making her an indispensable asset to the
            company's reputation for excellence.
          </p>
        </div>
        <div className="block">
          <h3>Casual Clothing ($89)</h3>
          <p>
            Mirvete excels in producing top-notch casual clothing for her
            seamstress company, infusing each piece with craftsmanship and a
            distinctive artistic flair. Her commitment to quality and attention
            to detail contribute significantly to the company's reputation for
            delivering stylish and well-crafted everyday attire.
          </p>
        </div>
        <div className="block">
          <h3>Tuxeods ($100)</h3>
          <p>
            Mirvete consistently delivers outstanding craftsmanship in crafting
            tailored tuxedos for her seamstress company, combining precision and
            a refined artistic touch. Her attention to detail and commitment to
            quality make her a key contributor to the company's reputation for
            exceptional formalwear.
          </p>
        </div>
        <div className="dform"></div>
        <h1 id="hform">Schedule Appointment</h1>
        <form className="form1" onSubmit={handleSubmit}>
          <div className="Gform">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter First Name"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
            />
          </div>
          <br />
          <div className="Gform">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter Last Name"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>
          <br />
          <div className="Gform">
            <label>Phone Number</label>
            <input
              type="tel"
              name="tel"
              placeholder="Enter Phone Number"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
            />
          </div>
          <br />
          <div className="Gform">
            <label>Message</label>
            <textarea
              name="Message"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            ></textarea>
          </div>
          <br />
          <div>
            <label>Gender</label>
            <select
              name="Gender"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <br />
          <div class="Gform">
            <label>What day would you like to schedule?</label>
            <input
              type="date"
              name="date"
              placeholder="Enter date"
              value={day}
              onChange={(e) => setday(e.target.value)}
            />
          </div>
          <br />
          <div class="Gform">
            <label>What time would you like to schedule?</label>
            <input
              type="time"
              name="Time"
              placeholder="Enter time"
              value={time}
              onChange={(e) => settime(e.target.value)}
            />
          </div>
          <br />
          <input type="submit" name="submit" value="Submit" />
        </form>
      </div>
      {/* <p>{firstname}</p>
      <p>{lastname}</p>
      <p>{message}</p>
      <p>{gender}</p>
      <p>{day}</p>
      <p>{time}</p> */}
      <a href="#">Jump to Top</a>
    </div>
  );
}

export default App;
