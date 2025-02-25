import { data } from "react-router-dom"
import  logom  from "../Img/photo_2024-12-02_11-51-55.jpg"
import imgDesign from "../Img/1_optimized_50.png"
import imgfound from "../Img/photo_2025-02-25_11-46-14.jpg"
import imgpriv from "../Img/private.jpg"

const posts = [
    {
      id: 1,
      title: 'Frontend REACT js course',
      href: '#',
      description:
        'Front-end developer with 2 years of experience in HTML, CSS, Tailwind CSS, JavaScript, React, and Bootstrap. Currently learning .NET and C# while working on various personal projects. Experienced in content management and web design, having participated in the development of the elde.uz website from scratch. Passionate about problem-solving and debugging code.',
      date: 'Nov 7, 2022',
      datetime: Date,
      category: { title: 'Developer', href: '#' },
      author: {
        name: 'Halimov Sunnatullokh',
        role: 'Frontend mentor and Frontend engineer',
        href: '#',
        imageUrl: logom },
    },
    {
        id: 1,
        title: 'Graphic Designer Course',
        href: '#',
        description:
          'A graphic designer with three years of experience, specializing in creative and impactful designs. I have worked on 100+ projects and currently teach at 3-Renessans Education Center, helping future designers master their craft.',
        date: 'Mar 16, 2022',
        datetime: '2020-03-16',
        category: { title: 'Designer', href: '#' },
        author: {
          name: 'Umaraliyev Asadbek',
          role: 'Graphic Designer And Mentor',
          href: '#',
          imageUrl: imgDesign},
      },
      {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl: imgfound},
      },
      {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl: imgpriv},
      },
  ]
  
const Kurs = () => {
    return (
      <div className="bg-white py-24 sm:py-32" id="kurs"> 
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Kurslar va Mentorlar</h2>
            <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img alt="mentor" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }

  export default Kurs