// app/project.jsx
export default function Project() {
    return (
      <main className="min-h-screen bg-gray-50 font-sans">
        {/* Header */}
        <header className="flex justify-between items-center p-8">
          <h1 className="text-2xl font-bold text-black">ma.</h1>
          <nav className="space-x-6">           
            <a href="/" className="text-black hover:underline">About</a>
            <a href="#" className="text-black hover:underline">Work</a>
            <a href="#" className="text-black hover:underline">Engagement</a>
            <a href="#" className="text-black hover:underline">Contact</a>
          </nav>
        </header>
  
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto p-8 text-center md:text-left">
          <h2 className="text-5xl font-bold mb-4 text-black">
            Hello, I am Tania Walijan.
          </h2>
          <p className="text-xl text-black leading-relaxed">
          I am dedicated to providing exceptional service to my clients, and strive to build long-term relationships.
          </p>
          <div className="mt-8 text-2xl">
            <span className="inline-block animate-bounce">↓</span>
          </div>
        </section>
  
        {/* Projects Section */}
<section className="max-w-6xl mx-auto p-8 space-y-16">
  {/* Project 1 */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Project Info */}
    <div className="md:col-span-1">
      <h3 className="text-lg font-semibold text-black">01 PRESENTATION ON RENDERING THEORY</h3>
      <p className="text-black mt-2">
       
      A brief overview of SSR, CSR, SSG, and ISR <br />
        These concepts are related to building fast, scalable, and SEO-friendly web applications using Node.js and modern frontend frameworks.
      </p>
    </div>
    {/* Project Image */}
    <div className="md:col-span-2">
      <img
        src="/images/4.png" // Replace with the actual path to your image
        alt="Project 1"
        className="w-full max-w-[600px] h-auto md:h-[300px] object-cover rounded shadow-lg"
      />
    </div>
  </div>

  {/* Project 2 */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Project Info */}
    <div className="md:col-span-1">
      <h3 className="text-lg font-semibold text-black">02 CLONE THE GOVERNOR SINDH WEBSITE</h3>
      <p className="text-black mt-2">
      In this project, we cloned the Governor Sindh websites navbar and hero section using Next.js.
      We created reusable components for the Navbar and Hero sections and made them responsive using 
      Tailwind CSS. Finally, we integrated the components into the application layout.
      </p>      
    </div>
    {/* Project Image */}
    <div className="md:col-span-2">
    <a href="https://assignment2-tania.vercel.app/" className="text-black hover:underline"> <img
        src="/images/3.png" // Replace with the actual path to your image
        alt="Project 2"
        className="w-full max-w-[6000px] h-auto md:h-[300px] object-cover rounded shadow-lg"
      /></a>
    </div>
  </div>

  {/* Project 3 */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Project Info */}
    <div className="md:col-span-1">
      <h3 className="text-lg font-semibold text-black">03 DESIGN LOGIN AND SIGNUP PAGES</h3>
      <p className="text-black mt-2">
      The assignment involves designing Login and Signup pages using Next.js 
      with group routing. This means organizing related pages, such as login.jsx and signup.jsx, 
      in the same directory. It includes creating forms for user authentication.
      Styling can be added using CSS or frameworks like Tailwind CSS.
      </p>
    </div>
    {/* Project Image */}
    <div className="md:col-span-2">
    <a href="https://signup-login-eight.vercel.app/" className="text-black hover:underline"> <img
        src="/images/1.png" // Replace with the actual path to your image
        alt="Project 2"
        className="w-full max-w-[6000px] h-auto md:h-[300px] object-cover rounded shadow-lg"
      /></a>
      <div> 1</div>
       <a href="https://signup-login-eight.vercel.app/component/signup" className="text-black hover:underline"> <img
        src="/images/2.png" // Replace with the actual path to your image
        alt="Project 2"
        className="w-full max-w-[6000px] h-auto md:h-[300px] object-cover rounded shadow-lg"
      /></a>
    </div>
  </div>
</section>

  
        {/* Footer */}
        <footer className="bg-gray-100 py-8">
          <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
            <p className="text-black text-sm">
              Tania Walijan — 1996
            </p>
            <nav className="space-x-6">
              <a href="#" className="text-black hover:underline">Instagram</a>
            </nav>
          </div>
        </footer>
      </main>
    );
  }
  