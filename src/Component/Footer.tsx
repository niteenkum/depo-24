import { AiFillAndroid } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Footer() {
  return (
    // Footer for Homepage
    <div className="footer">
      <div className="footer-play-store-and-logo">
        <img
          src="	https://d1xkbitcv5i7vd.cloudfront.net/Assets/mobile+mockup.webp
"
          className="h-80"
          alt=""
        />

        <div>
          <div className="text-3xl font-bold">Depo24 App Coming Soon!</div>
          <div className="flex gap-2 mt-4">
            <img
              className="h-14"
              src="https://d1xkbitcv5i7vd.cloudfront.net/Assets/App+store+button.webp"
              alt=""
            />
            <img
              className="h-14"
              src="https://d1xkbitcv5i7vd.cloudfront.net/Assets/play+store+button.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 ">
        <div className="footer-items">
          <div className="footer-list">
            <h1>DEPO24 Wholesale</h1>
            <p>Frequently Asked Questions</p>
            <p>Returns & Refund</p>
            <p>About Us</p>
            <p>Careers</p>
          </div>
        </div>

        <div className="footer-items">
          <div className="footer-list">
            <h1>CUSTOMER SERVICE</h1>

            <p>Shipping Policy</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cancellation</p>
          </div>
        </div>

        <div className="footer-items">
          <div className="footer-list w-1/2">
            <h1>CONNECT WITH US</h1>

            <div>
              Head Quarter: 34 D, First Floor, Pocket-1, Mayur Vihar Phase 1,
              Delhi, 110091
            </div>
          </div>
        </div>
      </div>

{/* Icons used in footer */}
      <div className="social-media-icon-footer">
        <div className="flex items-center justify-center mt-2">
          <p> Download App</p>
          <AiFillAndroid className="ml-2 text-4xl" />
        </div>

        <div className="flex items-center justify-center mt-2">
          <BsFacebook className="ml-2 text-3xl" />
          <BsInstagram className="ml-2 text-3xl" />
          <BsYoutube className="ml-2 text-4xl" />
          <BsLinkedin className="ml-2 text-3xl" />
        </div>

        <div className="flex justify-center mt-2">
          <p>© 2022 Depo 24 | All right reserved</p>
        </div>
      </div>
      <div className="flex justify-end bottom-10 sticky">
          <IoLogoWhatsapp  className={"text-green-400 text-5xl"} />
      </div>
    </div>
  );
}
