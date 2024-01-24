import Image from "next/image";
import Link from "next/link";
import errorPic from "./assets/404pic.svg";

export default function NotFound() {
  return (
    <main className="w-full h-screen text-white grid place-content-center text-center">
      <Image src={errorPic} alt="error 404" width={600} />
      <Link href="/" className="underline">
        Go back to Home
      </Link>
    </main>
  );
}
