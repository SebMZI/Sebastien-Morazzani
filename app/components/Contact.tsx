import Image from "next/image";
import Link from "next/link";
import telIcon from "../assets/telIcon.svg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="tablette:mb-28 phone:mb-40 bg-gradient-to-r to-[#7E6EAF] from-ascent rounded-lg px-6 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 1.2,
        ease: [0.17, 0.67, 0.83, 0.91],
        delay: 0.25,
      }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <h2 className="text-3xl font-semibold mb-2">Parlons de votre projet !</h2>
      <p className="mb-8">Échanger pour mieux comprendre vos besoins.</p>
      <div className="flex tablette:flex-row gap-8 phone:flex-col ">
        <Link
          href={"/contact"}
          className=" grid place-content-center"
          id="rendez-vous"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="uppercase font-medium bg-white text-ascent px-6 py-4 rounded-lg w-72
          "
          >
            Prendre rendez-vous
          </motion.button>
        </Link>
        <Link
          href={"tel:0636377046"}
          className=" grid place-content-center"
          id="telephone"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-row gap-4 justify-center items-center px-6 py-4 w-72 border-2 rounded-lg "
          >
            <Image
              src={telIcon}
              alt="clique poru appeler le 0636377046"
              width={20}
            />
            <p className="phone:hidden tablette:block">06 36 37 70 46</p>
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default Contact;
