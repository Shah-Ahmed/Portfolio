import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <header className="flex justify-between items-center p-8">
        <h1 className="text-2xl font-bold text-black">ma.</h1>
        <nav className="space-x-6">          
          <Link href="#" className="text-black hover:underline">
            About
          </Link>
          <Link href="/project" className="text-black hover:underline">
            Work
          </Link>
          <Link href="#" className="text-black hover:underline">
            Engagement
          </Link>
          <Link href="#" className="text-black hover:underline">
            Contact
          </Link>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-5xl font-bold mb-6 text-black">
            Hi, I am Tania Walijan.
          </h2>
          <p className="text-xl text-black leading-loose mb-6">
          As a detail-oriented and organized accounting professional, I bring a passion for numbers and a commitment to accuracy to every project.<br />
          My expertise includes financial statement preparation, budgeting, forecasting, and financial analysis.<br />
          I am dedicated to providing exceptional service to my clients, and strive to build long-term relationships.
          </p>
          <p className="text-xl text-black leading-loose">
            Currently I am enrolled in GI-AIWMD by Gorvernor of Sindh.
          </p>
        </div>

        <div>
          <img
            src="/images/portfolioimg.jpg" // Replace with the correct path
            alt="Profile Visual"
            width={500}
            height={200}
            className="rounded shadow-lg w-full h-auto"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl text-black">Workstation</h3>
            <p className="text-lg text-black">CopperGAT Cables</p>
            <p className="text-lg text-black">Accountant</p>
          </div>
          <div>
            <h3 className="text-xl text-black">Skillsets</h3>
            <p className="text-lg text-black">Accounting and Finance</p>
            <p className="text-lg text-black">Budgeting</p>
            <p className="text-lg text-black">Financial Analysis</p>
          </div>
          <div>
            <h3 className="text-xl text-black">Current</h3>
            <p className="text-lg text-black">
              Student @ GI-AIWMD by Gorvernor of Sindh, Karachi.
            </p>
            <p className="text-lg text-black">Teaching</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between items-center">
            <p className="text-lg text-black">
              I am thrilled to answer to your next project.
            </p>
            <a
              href="mailto:mailkarasu@outlook.com"
              className="text-blue-600 font-medium hover:underline"
            >
              tania.walijan@gmail.com
            </a>
          </div>
          <p className="text-sm text-black mt-4">
            Tania Walijan — 1996
          </p>
        </div>
      </footer>
    </main>
  );
}
