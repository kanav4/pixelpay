import FaceCard from "../Cards/faceCard";
import styles from "./testimonials.module.css";
import { IoChevronForwardCircle } from "react-icons/io5";
import { IoChevronBackCircle } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
    return (
        <div className={styles.testimonials}>
            <div className={styles.content}>
                <span><FaQuoteLeft /></span>
                <div className={styles.contentHead}>
                    <div>
                        <h2>Testimonials</h2>
                    </div>
                    <div className={styles.btns}>
                        <div><IoChevronBackCircle /></div>
                        <div><IoChevronForwardCircle /></div>
                    </div>
                </div>
                <p>
                    We are a digital marketing agency that is passionate about helping businesses grow. Our team of experienced digital marketers are experts in their respective fields and are always looking for new and innovative ways to help our clients reach their goals. We believe that every business is unique, and we tailor our services to fit each client's individual needs.
                </p>
            </div>
        </div>
    );
}
