import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
    setEmail('');
  };

  return (
    <div className="bg-[#7E6AF0] my-30 rounded-4xl p-12 text-center w-full">
      <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
        Leave your email and
        <br />
        get a free check!
      </h2>

      <form onSubmit={handleSubmit} className="mb-4 w-full max-w-2xl mx-auto">
        <div className="relative w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full rounded-full px-6 pr-36 h-16 md:text-xl lg:text-2xl text-gray-700 bg-amber-50 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 text-white font-medium px-5 py-2 h-[80%] rounded-full md:text-xl lg:text-lg"
          >
            Subscribe
          </button>
        </div>
      </form>

      <p className="text-white text-base md:text-xl lg:text-2xl opacity-55">
        No spam, promised!
      </p>
    </div>
  );
}
