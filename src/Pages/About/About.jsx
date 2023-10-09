import { useContext } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Home/Banner";
import { AuthContext } from "../../Provider/AuthProvider";

const About = () => {
   const { loading } = useContext(AuthContext)

   if (loading) {
      return <div className="flex h-screen items-center justify-center"><span className="loading loading-ring loading-lg"></span></div>
   }

   return (
      <div className="bg-[#fff]">
         <Navbar></Navbar>
         <Banner></Banner>
         <div className="bg-[#F5F0F0]">
            <div className="max-w-7xl m-auto p-10">
            <p>At GalaPerfection, we believe that life is special moments deserve nothing less than perfection. We are a dedicated team of event planners and coordinators, passionate about crafting unforgettable experiences for all occasions. Our mission is to turn your dreams into reality, ensuring that every detail is meticulously planned and executed to perfection.</p>

<p>Our Services

<span className="text-lg block mt-5 font-bold">Corporate Meetings</span>
Elevate your corporate meetings to a new level of professionalism with our expert event management services. We understand the importance of your business gatherings, and we're here to ensure they run seamlessly. Our comprehensive offering includes top-notch venues, state-of-the-art audiovisual equipment, and a diverse range of catering options to suit your needs. Trust us to take care of the details, allowing you to focus on achieving your meeting's objectives. Make your corporate meetings truly exceptional with us.

<span className="text-lg block mt-5 font-bold">Anniversaries</span>
Celebrate your wedding anniversary in style with the help of our event planning expertise. We specialize in crafting memorable and romantic atmospheres that set the perfect stage for you and your loved ones. Whether it's your first or fiftieth anniversary, we'll ensure that your special day is filled with love, joy, and cherished moments. Let us make your anniversary celebration a beautiful and unforgettable experience.

<span className="text-lg block mt-5 font-bold">Birthday Parties</span>
Host the perfect birthday party with ease, thanks to our comprehensive event management services. From children's parties filled with laughter and excitement to milestone birthdays worthy of grand celebrations, we've got you covered. Our dedicated team will work closely with you to bring your birthday vision to life. From selecting the ideal venue to coordinating entertainment and catering, we handle it all so you can focus on making lasting memories with your loved ones.

<span className="text-lg block mt-5 font-bold">Family Celebrations</span>
Gather your family for a memorable celebration that strengthens the bonds of love and togetherness. At our core, we understand the importance of family, and we're here to help you create cherished moments. Whether it's a family reunion, a milestone event, or simply a desire to come together, we'll handle the logistics with care and expertise. Let us take the stress out of planning so you can focus on creating lasting memories with your loved ones.

<span className="text-lg block mt-5 font-bold">Graduation and Prom Night</span>
Celebrate your academic achievements with a spectacular graduation or prom night event. Your graduation marks a significant milestone in your life, and your prom night is a once-in-a-lifetime experience. We're dedicated to making it a night to remember for you and your friends. Our team will ensure every detail is perfect, from selecting the venue to coordinating entertainment and décor. Join us in celebrating your achievements in style and creating unforgettable memories.

<span className="text-lg block mt-5 font-bold">Masquerade Parties</span>
Step into a world of mystery and glamour with our Masquerade Parties. These enchanting events are perfect for those seeking an unforgettable and magical experience. Attendees adorn exquisite masks, transforming themselves into elegant and mysterious figures. Our dedicated team will craft an atmosphere of opulence, with ornate decorations, captivating entertainment, and gourmet cuisine. Whether it's a sophisticated ball or an intimate soirée, our Masquerade Parties are an enchanting blend of tradition and modernity, sure to leave a lasting impression. Join us for a night of intrigue, beauty, and masked revelry.

<span className="text-lg block mt-5 font-bold">Wedding Parties</span>
Experience the wedding of your dreams with our Wedding Extravaganza package. We specialize in creating magical moments that celebrate your love story. From exquisite venues and stunning decorations to personalized vows and gourmet dining, we ensure your special day is absolutely perfect. Let us make your wedding a fairytale come true, filled with love, joy, and cherished memories.

<span className="text-lg block mt-5 font-bold">Kids' Adventure Camps</span>
Give your children a summer they'll never forget with our Kids' Adventure Camps. From exciting outdoor adventures to creative arts and crafts, we provide a safe and engaging environment for kids to explore, learn, and have fun. Our experienced staff ensures a memorable and educational experience for your young adventurers.

<span className="text-lg block mt-5 font-bold">Retirement Celebrations</span>
Celebrate a lifetime of achievements with our Retirement Celebrations. Whether it's a quiet gathering of close friends and family or a grand retirement party, we help honor the retiree's contributions and mark the beginning of a new chapter. From heartfelt speeches to nostalgic photo displays, we create retirement events filled with warmth and appreciation.
<br />
At GalaPerfection, we are committed to making your moments truly perfect. Contact us today, and let us bring your vision to life, creating memories that will last a lifetime.</p>
            </div>
            <Footer></Footer>
         </div>
      </div>
   );
};

export default About;