import ImageFallback from "@layouts/components/ImageFallback";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const SpecialFeatures = ({ speciality }) => {
  return (
    <section id="project" className="section">
      <div className="container text-center">
        <div className="animate">
          <p className="uppercase">{speciality.sub_title}</p>
          {markdownify(speciality.title, "h2", "mt-4 section-title")}
          {markdownify(speciality.description, "p", "mt-10")}
        </div>
        {/* <div className="row items-center justify-center">
          <div className="animate lg:col-6 lg:order-2">
            <ImageFallback
              className="mx-auto"
              src={speciality.primary.image}
              width={575}
              height={511}
              alt="primary speciality"
            />
          </div>
          <div className="animate lg:col-5 lg:order-1">
            <p>{speciality.primary.subtitle}</p>
            {markdownify(
              speciality.primary.title,
              "h2",
              "mt-4 section-title bar-left"
            )}
            {markdownify(speciality.primary.description, "p", "mt-10")}
          </div>
        </div>
        <div className="row items-center">
          <div className="animate lg:col-6">
            <ImageFallback
              className="mx-auto"
              src={speciality.secondary.image}
              width={575}
              height={511}
              alt="secondary speciality"
            />
          </div>
          <div className="animate lg:col-5">
            <p>{speciality.secondary.subtitle}</p>
            {markdownify(
              speciality.secondary.title,
              "h2",
              "mt-4 section-title bar-left"
            )}
            {markdownify(speciality.secondary.description, "p", "mt-10")}
          </div>
        </div> */}
<div className="group/projects row justify-center pb-16 pt-20">
  <div className="animate mb-8 lg:col-5">
    <Link
      href={`https://arbiru-management.netlify.app/`}
      target="_blank"
      rel="noopener noreferrer"
    >
    <div className="project-card overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,.05)] transition duration-300 group-has-[.project-card:hover]/projects:opacity-50 hover:!opacity-100 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,.15)]">
      {/* {post.frontmatter.image && ( */}
          <ImageFallback
            className="w-full object-cover"
            src="/images/blog/arbiru-manage.png"
            alt="Images"
            width={570}
            height={335}
          />
      {/* )} */}
      <div className="p-8">
        <h2 className="h4">
          {/* <Link
            href={`/${blog_folder}/${post.slug}`}
            className="block hover:text-primary hover:underline"
          > */}
          Arbiru Hotel Management System
          {/* </Link> */}
        </h2>
        <p className="mt-4">
          {/* {post.content.slice(0, Number(summary_length))}... */}
          Custom web dashboard for real-time room bookings, guest management, and hotel operational reporting.
        </p>
      </div>
    </div>
    </Link>
  </div>

  <div className="animate mb-8 lg:col-5">
    <Link
      href={`https://www.arbiruhotel.com/`}
      target="_blank"
      rel="noopener noreferrer"
    >
    <div className="project-card overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,.05)] transition duration-300 group-has-[.project-card:hover]/projects:opacity-50 hover:!opacity-100 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,.15)]">
      {/* {post.frontmatter.image && ( */}
          <ImageFallback
            className="w-full object-cover"
            src="/images/blog/arbiru.png"
            alt="Images"
            width={570}
            height={335}
          />
      {/* )} */}
      <div className="p-8">
        <h2 className="h4">
          {/* <Link
            href={`/${blog_folder}/${post.slug}`}
            className="block hover:text-primary hover:underline"
          > */}
          Arbiru Hotel Website
          {/* </Link> */}
        </h2>
        <p className="mt-4">
          {/* {post.content.slice(0, Number(summary_length))}... */}
          Responsive beachfront hotel showcase featuring room previews, guest amenities, and direct booking inquiries.
        </p>
      </div>
    </div>
    </Link>
  </div>

  <div className="animate mb-8 lg:col-5">
    <Link
      href={`https://harumgroup.co.id/`}
      target="_blank"
      rel="noopener noreferrer"
    >
    <div className="project-card overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,.05)] transition duration-300 group-has-[.project-card:hover]/projects:opacity-50 hover:!opacity-100 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,.15)]">
      {/* {post.frontmatter.image && ( */}
          <ImageFallback
            className="w-full object-cover"
            src="/images/blog/hjk.png"
            alt="Images"
            width={570}
            height={335}
          />
      {/* )} */}
      <div className="p-8">
        <h2 className="h4">
          {/* <Link
            href={`/${blog_folder}/${post.slug}`}
            className="block hover:text-primary hover:underline"
          > */}
          Harum Jaya Karsa Website
          {/* </Link> */}
        </h2>
        <p className="mt-4">
          {/* {post.content.slice(0, Number(summary_length))}... */}
          Corporate contractor website showcasing construction services, partner brands, and enterprise project portfolios.
        </p>
      </div>
    </div>
    </Link>
  </div>

  <div className="animate mb-8 lg:col-5">
    <Link
      href={`https://sanctum-streetwear.netlify.app/`}
      target="_blank"
      rel="noopener noreferrer"
    >
    <div className="project-card overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,.05)] transition duration-300 group-has-[.project-card:hover]/projects:opacity-50 hover:!opacity-100 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,.15)]">
      {/* {post.frontmatter.image && ( */}
          <ImageFallback
            className="w-full object-cover"
            src="/images/blog/sanctum.png"
            alt="Images"
            width={570}
            height={335}
          />
      {/* )} */}
      <div className="p-8">
        <h2 className="h4">
          {/* <Link
            href={`/${blog_folder}/${post.slug}`}
            className="block hover:text-primary hover:underline"
          > */}
          Sanctum Streetwear Catalog
          {/* </Link> */}
        </h2>
        <p className="mt-4">
          {/* {post.content.slice(0, Number(summary_length))}... */}
          Minimalist apparel showcase highlighting curated streetwear collections, pricing, and seamless social ordering.
        </p>
      </div>
    </div>
    </Link>
  </div>
</div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
