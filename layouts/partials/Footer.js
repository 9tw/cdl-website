import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { tiktok, instagram, maps, maps2, location, location2 } = config.contact_info;
  return (
    <footer className="">
      <div className="container">
        <div className="row border-y border-border py-12">
          <div className="animate md:col-6 lg:col-4 lg:mt-0 md:mt-8">
            <Logo />
            {markdownify(footer_content, "p", "mt-3")}
          </div>
          <div className="animate mt-8 md:col-6 lg:col-2 lg:mt-0">
            <h3 className="h5">Services</h3>
            {/* footer menu */}
            <ul className="mt-5 leading-10">
              {menu.footer.map((menu) => (
                <li key={menu.name}>
                  {/* <Link
                    href={menu.url}
                    className=" hover:text-primary hover:underline"
                  > */}
                    {menu.name}
                  {/* </Link> */}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate mt-8 md:col-6 lg:col-2 lg:mt-0">
            <h3 className="h5">Social</h3>
            <ul className="mt-5 leading-10">
            {/* <div className="mt-5"> */}
              <li>
                <Link 
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-primary hover:underline"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link 
                  href={tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-primary hover:underline"
                >
                  TikTok
                </Link>
              </li>
              {/* social icons */}
              <Social source={social} className="social-icons mt-5" />              
            </ul>
            {/* </div> */}
          </div>
          <div className="animate mt-8 md:col-6 lg:col-4 lg:mt-0">
            <h3 className="h5">Location</h3>
            <ul className="mt-5 leading-10">
              <li>
                <Link 
                  href={maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-primary hover:underline"
                >
                  {markdownify(location)}
                </Link>
              </li>
              <li>
                <Link 
                  href={maps2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-primary hover:underline"
                >
                  {markdownify(location2)}
                </Link>
              </li>
              {/* {phone && (
                <li>
                  <Link href={`tel:${phone}`}>{phone}</Link>
                </li>
              )} */}
            </ul>
          </div>
        </div>
        {/* copyright */}
        <div className=" py-6 text-center">
          {markdownify(copyright, "p", "footer-copy-write")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
