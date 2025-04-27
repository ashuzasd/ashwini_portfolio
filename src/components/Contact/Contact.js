import styles from "./Contact.module.css";
import { useRef, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Marker from "../../img/marker.png";
import ThankYou from "../UI/ThankYou";
import { AnimatePresence } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // No emailjs functionality, just set done to true for demo
    setDone(true);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with actual key
  });

  if (!isLoaded) return <div>Loading</div>;

  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.right}>
        <p data-aos="fade-up-right" className={styles.description}>
          <b>Interested in my work?</b> Get in touch and send me a message.
          Always open to build amazing projects.
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            data-aos="fade-up-right"
            type="text"
            placeholder="Name"
            name="user_name"
          />
          <input
            data-aos="fade-up-right"
            type="text"
            placeholder="Subject"
            name="user_subject"
          />
          <input
            data-aos="fade-up-right"
            type="text"
            placeholder="Email"
            name="user_email"
          />
          <textarea
            data-aos="fade-up-right"
            rows="5"
            placeholder="Message"
            name="message"
          />
          <button data-aos="fade-up-right">Submit</button>
        </form>
      </div>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {done && (
          <ThankYou
            onConfirm={() => {
              setDone(false);
            }}
          />
        )}
      </AnimatePresence>

      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className={styles.left}
      >
        <GoogleMap
          zoom={5}
          center={{ lat: 33.838000707701006, lng: -117.86423156003966 }}
          mapContainerClassName={styles.map}
          options={{
            mapId: "YOUR_MAP_ID", // Replace with actual map ID or remove if not used
            disableDefaultUI: true,
            gestureHandling: "greedy",
          }}
        >
          <MarkerF
            icon={{
              url: Marker,
              scaledSize: new window.google.maps.Size(30, 50),
            }}
            position={{ lat: 33.838000707701006, lng: -117.86423156003966 }}
          />
        </GoogleMap>
      </div>
    </div>
  );
};

export default Contact;
