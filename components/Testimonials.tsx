import Link from "next/link";
import Image from "next/image";

type Testimonial = {
  name: string;
  username: string;
  avatar: string;
  testimonial: string;
  hashtag: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jenny Wilson",
    username: "@jennywilson",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-3.jpg",
    testimonial:
      "This is a top quality product. No need to think twice before making it live on the web.",
    hashtag: "#make_it_fast",
  },
  {
    name: "Kristin Watson",
    username: "@kristinwatson2",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-4.jpg",
    testimonial:
      "Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
    hashtag: "#Celebration",
  },
  {
    name: "Guy Hawkins",
    username: "@jennywilson",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-5.jpg",
    testimonial:
      "This is a top-quality product. No need to think twice before making it live on the web.",
    hashtag: "#make_it_fast",
  },

  {
    name: "Floyd Miles",
    username: "@darrels",
    avatar:
      "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/7/avatar-8.jpg",
    testimonial:
      "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    hashtag: "#Celebration",
  },
];

const TestimonialsSection: React.FC = () => (
  <section className="py-10  sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Customers Reviews{" "}
        </h2>
        <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
          What our clients are saying about us
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0   xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="overflow-hidden border shadow-sm bg-white rounded-md"
          >
            <div className="px-5 py-6">
              <div className="flex items-center justify-between">
                {/* <Image
                  className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                /> */}
                <div className="min-w-0 ml-3 mr-auto">
                  <p className="text-base font-semibold text-black truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 truncate">
                    {testimonial.username}
                  </p>
                </div>
                {/* <Link href="#" passHref>
                  <a className="inline-block text-sky-500">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.319 4.22 4.52 4.52 0 0 1-.105-.938c0-2.113 1.711-3.825 3.826-3.825 1.1 0 2.094.463 2.792 1.204a7.89 7.89 0 0 0 2.545-.972 4.02 4.02 0 0 1-1.777 2.22c.816-.097 1.596-.315 2.309-.633a8.05 8.05 0 0 1-1.996 2.088z" />
                    </svg>
                  </a>
                </Link> */}
              </div>
              <div className="mt-4">
                <p className="text-base leading-6 text-gray-700">
                  {testimonial.testimonial}
                </p>
              </div>
            </div>
            {/* <div className="px-5 py-3 bg-gray-50">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-sky-100 text-sky-800">
                {testimonial.hashtag}
              </span>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
